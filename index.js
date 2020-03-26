#!/usr/bin/node

//=============================================================================
// modules
//=============================================================================
const express = require('express');
const assert = require('assert');
const path = require("path")
const cookieParser = require("cookie").parse
const crypto = require("crypto");
const htmlMinify = require('html-minifier-terser').minify;
const fs = require("fs")

//=============================================================================
// database
//=============================================================================
var db;
const mongoClient = require("mongodb").MongoClient
const mongodbUrl = 'mongodb://127.0.0.1:27017/baykushizliokuma';
mongoClient.connect(mongodbUrl, { poolSize: 10, useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
  assert.equal(null, err);
  db = client.db("baykushizliokuma");
  console.log("Connected successfully to database");
});

//=============================================================================
// http server
//=============================================================================
const app = express();
const port = 3000

//-------------------------------------
// middlewares
//-------------------------------------
// app.use(require('morgan')('tiny'));
app.use(require('body-parser').json())
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require("cors")())

app.use(function (req, res, next) {
  if (req.headers.cookie) req.headers.cookie = cookieParser(req.headers.cookie)
  else req.headers.cookie = {}
  if (req.headers.cookie.bho) {
    db.collection("sessions").findOne({ bho: req.headers.cookie.bho }, function (err, doc) {
      if (doc) req.user = { username: doc.username }
      next()
    })
  }
  else {
    let cookieId = crypto.randomBytes(16).toString("hex")
    req.headers.cookie.bho = cookieId
    res.cookie('bho', cookieId, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true });
    next()
  }
})

//-------------------------------------
// static file paths
//-------------------------------------
app.use(`/app/css`, express.static(path.join(__dirname, 'html/css')))
app.use(`/app/js`, express.static(path.join(__dirname, 'html/js')))
app.use(`/app/img`, express.static(path.join(__dirname, 'html/img')))
app.use(`/app/media`, express.static(path.join(__dirname, 'html/media')))
app.use(`/app/font`, express.static(path.join(__dirname, 'html/font')))

//-------------------------------------
// standart routes
//-------------------------------------
const minifyOptions = {
  removeAttributeQuotes: true,
  collapseWhitespace: true,
  removeComments: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeEmptyAttributes: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  minifyJS: true,
  minifyCSS: true
}

app.get('/app/', (req, res) => {
  fs.readFile('html/index.html', (err, data) => {
    if (err) throw err;
    if (req.user) res.send(htmlMinify(`${data}`, minifyOptions))
    else res.redirect("/app/login?returnCode=2")
  });
})

app.get('/app/modules/:module', (req, res) => {
  fs.readFile(`html/m${req.params.module}.html`, (err, data) => {
    if (err) throw err;
    if (req.user) res.send(htmlMinify(`${data}`, minifyOptions))
    else res.redirect("/app/login?returnCode=2")
  });
})

const demoExercises = [0, [5], [7], [4], [1, 6], [2, 5], [5]]
app.get('/app/modules/:module/exercises/:exercise', (req, res) => {
  if (req.user.username.includes("misafir")) {
    if (demoExercises[Number(req.params.module)].includes(Number(req.params.exercise))) {
      fs.readFile(`html/m${req.params.module}e${req.params.exercise}.html`, (err, data) => {
        if (err) throw err;
        res.sendFile(__dirname + `/html/m${req.params.module}e${req.params.exercise}.html`)
        // res.send(htmlMinify(`${data}`, minifyOptions))
      });
    }
    else {
      res.redirect(`/app/modules/${req.params.module}`)
    }
  }
  else {
    fs.readFile(`html/m${req.params.module}e${req.params.exercise}.html`, (err, data) => {
      if (err) throw err;
      if (req.user) res.sendFile(__dirname + `/html/m${req.params.module}e${req.params.exercise}.html`)
      // if (req.user) res.send(htmlMinify(`${data}`, minifyOptions))
      else res.redirect("/app/login?returnCode=2")
    });
  }
})

app.get('/app/camp', (req, res) => {
  fs.readFile(`html/camp.html`, (err, data) => {
    if (err) throw err;
    if (req.user) res.send(htmlMinify(`${data}`, minifyOptions))
    else res.redirect("/app/login?returnCode=2")
  });
})

//-------------------------------------
// authorization
//-------------------------------------
app.get('/app/user', (req, res) => {
  if (req.user) {
    db.collection("users").findOne({ username: req.user.username }, function (err, doc) {
      delete doc.password
      res.send(doc)
    })
  }
  else res.redirect("/app/login?returnCode=2")
})

app.post('/app/user', (req, res) => {
  db.collection("users").updateOne({ username: req.user.username }, { $set: req.body }, function (err, r) {
    if (err) throw err;
    res.send(r)
  })
})

app.get('/app/login', (req, res) => {
  if (!req.user) {
    if (req.query.username && req.query.password) {
      if (req.query.username.includes("misafir")) {
        db.collection("users").insertOne({ username: req.query.username, name: "Misafir", surname: "" }, function (err, doc) {
          let session = {
            bho: req.headers.cookie.bho,
            username: req.query.username
          }
          db.collection("sessions").update({ username: session.username }, session, { upsert: true }, function (err, r) {
            if (err) { res.redirect("/app/login?returnCode=0") }
            else res.redirect("/app/")
            console.log(`User login: ${session.username}`)
          })
        })
      }
      else {
        db.collection("users").findOne(req.query, function (err, doc) {
          if (doc) {
            let session = {
              bho: req.headers.cookie.bho,
              username: req.query.username
            }
            db.collection("sessions").update({ username: session.username }, session, { upsert: true }, function (err, r) {
              if (err) { res.redirect("/app/login?returnCode=0") }
              else res.redirect("/app/")
              console.log(`User login: ${session.username}`)
            })
          }
          else res.redirect("/app/login?returnCode=1")
        })
      }
    }
    else res.sendFile(path.join(__dirname, "html/login.html"))
  }
  else res.redirect("/app/")
})

app.get('/app/logout', (req, res) => {
  if (!req.user) {
    res.redirect("/app/login?returnCode=logout")
  }
  else {
    db.collection("sessions").deleteOne({ bho: req.headers.cookie.bho }, function (err, doc) {
      res.redirect("/app/login?returnCode=logout")
    })
  }
})

//-------------------------------------
// statistics
//-------------------------------------
app.get('/app/stats/', (req, res) => {
  req.query.username = req.user.username
  db.collection("stats").find(req.query).toArray(function (err, docs) {
    res.send(docs)
  });
})
app.post('/app/stats', (req, res) => {
  if (req.body) req.body.username = req.user.username
  db.collection("stats").insertOne(req.body, function (err, r) {
    res.send(r)
  })
})
app.delete('/app/stats/', (req, res) => {
  req.query.username = req.user.username
  db.collection("stats").deleteMany(req.query, function (err, r) {
    res.send(r)
  });
})
//-------------------------------------
// data collections
//-------------------------------------
const commonCollections = ["textList", "texts", "configs", "texts6", "textList6", "programs"]
app.get('/app/collections/:collection', (req, res) => {
  if (!req.user) res.redirect("/app/login?returnCode=logout")
  else {
    if (!commonCollections.includes(req.params.collection)) req.query.username = req.user.username
    db.collection(`${req.params.collection}`).find(req.query).toArray(function (err, docs) {
      if (err) throw err;
      res.send(docs)
    });
  }
})
app.post('/app/collections/:collection', (req, res) => {
  if (!req.user) res.statusCode(403)
  else {
    req.body.username = req.user.username
    db.collection(`${req.params.collection}`).insertOne(req.body, function (err, r) {
      if (err) throw err;
      res.send(r)
    })
  }
})
app.put('/app/collections/:collection', (req, res) => {
  if (!req.user) res.statusCode(403)
  else {
    for (var i = 0; i < Object.keys(req.query).length; ++i) {
      req.body[Object.keys(req.query)[i]] = req.query[Object.keys(req.query)[i]]
    }
    req.query.username = req.user.username
    db.collection(`${req.params.collection}`).updateOne(req.query, { $set: req.body }, { upsert: true }, function (err, r) {
      if (err) throw err;
      res.send(r)
    })
  }
})

//-------------------------------------
// text add
//-------------------------------------
app.get('/app/addtext', (req, res) => {
  if (req.user.username != "hüseyin") res.sendStatus(403)
  else res.sendFile(__dirname + "/html/addText.html")
})
app.get('/app/texts2', (req, res) => {
  if (req.user.username != "hüseyin") res.sendStatus(403)
  else {
    db.collection("texts2").find(req.query).toArray(function (err, docs) {
      if (err) throw err;
      res.send(docs)
    });
  }
})
app.post('/app/texts2', (req, res) => {
  if (req.user.username != "hüseyin") res.sendStatus(403)
  else {
    db.collection("texts2").insertOne(req.body, function (err, r) {
      res.send(r)
    })
  }
})

//-------------------------------------
// admin panel
//-------------------------------------
const authorizedUsers = ["hüseyin", "yakup", "operator"]
app.get('/app/operator', (req, res) => {
  if (!authorizedUsers.includes(req.user.username)) res.sendStatus(403)
  else res.sendFile(__dirname + "/html/operator.html")
})
app.get('/app/users', (req, res) => {
  if (!authorizedUsers.includes(req.user.username)) res.sendStatus(403)
  else {
    db.collection("users").find(req.query).toArray(function (err, docs) {
      if (err) throw err;
      res.send(docs)
    });
  }
})
app.post('/app/users', (req, res) => {
  if (!authorizedUsers.includes(req.user.username)) res.sendStatus(403)
  else {
    db.collection("users").insertOne(req.body, function (err, r) {
      res.send(r)
    })
  }
})
app.put('/app/users', (req, res) => {
  if (!authorizedUsers.includes(req.user.username)) res.sendStatus(403)
  else {
    db.collection("users").updateOne(req.query, { $set: req.body }, function (err, r) {
      res.send(r)
    })
  }
})
app.delete('/app/users', (req, res) => {
  if (!authorizedUsers.includes(req.user.username)) res.sendStatus(403)
  else {
    db.collection("users").deleteOne(req.query, function (err, r) {
      res.send(r)
    })
  }
})

//-------------------------------------
// payments
//-------------------------------------
app.post('/app/payments', (req, res) => {
  if (!authorizedUsers.includes(req.user.username)) res.sendStatus(403)
  else {
    db.collection("payments").insertOne(req.body, function (err, r) {
      res.send(r)
    })
  }
})
app.get('/app/payments', (req, res) => {
  if (!authorizedUsers.includes(req.user.username)) res.sendStatus(403)
  else {
    db.collection("payments").find(req.query).toArray(function (err, docs) {
      if (err) throw err;
      res.send(docs)
    });
  }
})
app.delete('/app/payments', (req, res) => {
  if (!authorizedUsers.includes(req.user.username)) res.sendStatus(403)
  else {
    db.collection("payments").deleteOne(req.query, function (err, r) {
      res.send(r)
    })
  }
})

//-------------------------------------
// contacts
//-------------------------------------
app.post('/app/contacts', (req, res) => {
  console.log(req.body)
  db.collection("contacts").insertOne(req.body, function (err, r) {
    res.send(r)
  })
})
app.get('/app/contacts', (req, res) => {
  if (!authorizedUsers.includes(req.user.username)) res.sendStatus(403)
  else {
    db.collection("contacts").find(req.query).toArray(function (err, docs) {
      if (err) throw err;
      res.send(docs)
    });
  }
})
app.delete('/app/contacts', (req, res) => {
  if (!authorizedUsers.includes(req.user.username)) res.sendStatus(403)
  else {
    db.collection("contacts").deleteOne(req.query, function (err, r) {
      res.send(r)
    })
  }
})

app.listen(port, () => {
  console.log(`"Baykuş Hızlı Okuma" authorization app listening on port ${port}!`)
})

