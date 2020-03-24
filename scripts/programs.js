const readline = require('readline');
const fs = require('fs');

if (!Array.prototype.last) {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
};

function hasLetter(myString) {
  return /[A-Z]/i.test(myString);
}

fs.readFile('program0.tsv', function read(err, data) {
  if (err) throw err;
  const content = `${data}`;
  const works = content.split("\n")
  const workObjects = []
  // console.log(works)
  for (var i = 0; i < works.length; ++i) {
    // console.log(works[i].split("\t"))
    const work = works[i].split("\t")
    const workObj = {
      day: work[0],
      title: work[1],
      charType: work[2],
      angle: work[3],
      game: work[4],
      animation: work[5],
      highlight: work[6],
      module: Number(work[7]),
      exercise: Number(work[8]),
      speed: work[9],
      level: work[10],
      repeat: work[11]
    }
    workObjects.push(workObj)
  }
  worksJson = []
  for (var i = 0; i < workObjects.length; ++i) {
    let options = ""
    if (workObjects[i].speed) options += `Hız: ${workObjects[i].speed}, `
    if (workObjects[i].level) options += `Seviye: ${workObjects[i].level}, `
    if (workObjects[i].angle) options += `Açı: ${workObjects[i].angle}, `
    if (workObjects[i].animation) options += `Animasyon: ${workObjects[i].animation}, `
    if (workObjects[i].game) options += `Oyun: ${workObjects[i].game}, `
    if (workObjects[i].highlight) options += `Vurgu: ${workObjects[i].highlight}, `
    const repeat = (workObjects[i].repeat) ? workObjects[i].repeat : 1
    worksJson.push({
      degree: 0,
      day: workObjects[i].day,
      work: workObjects[i].title,
      module: workObjects[i].module,
      exercise: workObjects[i].exercise,
      settings: options.replace(/.$/, "").replace(/.$/, ""),
      repeat: repeat
    })
    // console.log(`{ "day": '', "work": '${}', "settings": '${options}', "repeat": '${repeat}'},`)
  }

  fs.readFile('program1.tsv', function read(err, data) {
    if (err) throw err;
    const content = `${data}`;
    const works = content.split("\n")
    const workObjects = []
    // console.log(works)
    for (var i = 0; i < works.length; ++i) {
      // console.log(works[i].split("\t"))
      const work = works[i].split("\t")
      const workObj = {
        day: work[0],
        title: work[1],
        charType: work[2],
        angle: work[3],
        game: work[4],
        animation: work[5],
        highlight: work[6],
        module: Number(work[7]),
        exercise: Number(work[8]),
        speed: work[9],
        level: work[10],
        repeat: work[11]
      }
      workObjects.push(workObj)
    }
    for (var i = 0; i < workObjects.length; ++i) {
      let options = ""
      if (workObjects[i].speed) options += `Hız: ${workObjects[i].speed}, `
      if (workObjects[i].level) options += `Seviye: ${workObjects[i].level}, `
      if (workObjects[i].angle) options += `Açı: ${workObjects[i].angle}, `
      if (workObjects[i].animation) options += `Animasyon: ${workObjects[i].animation}, `
      if (workObjects[i].game) options += `Oyun: ${workObjects[i].game}, `
      if (workObjects[i].highlight) options += `Vurgu: ${workObjects[i].highlight}, `
      const repeat = (workObjects[i].repeat) ? workObjects[i].repeat : 1
      worksJson.push({
        degree: 1,
        day: workObjects[i].day,
        work: workObjects[i].title,
        module: workObjects[i].module,
        exercise: workObjects[i].exercise,
        settings: options.replace(/.$/, "").replace(/.$/, ""),
        repeat: repeat
      })
      // console.log(`{ "day": '', "work": '${}', "settings": '${options}', "repeat": '${repeat}'},`)
    }




    fs.readFile('program2.tsv', function read(err, data) {
      if (err) throw err;
      const content = `${data}`;
      const works = content.split("\n")
      const workObjects = []
      // console.log(works)
      for (var i = 0; i < works.length; ++i) {
        // console.log(works[i].split("\t"))
        const work = works[i].split("\t")
        const workObj = {
          day: work[0],
          title: work[1],
          charType: work[2],
          angle: work[3],
          game: work[4],
          animation: work[5],
          highlight: work[6],
          module: Number(work[7]),
          exercise: Number(work[8]),
          speed: work[9],
          level: work[10],
          repeat: work[11]
        }
        workObjects.push(workObj)
      }
      for (var i = 0; i < workObjects.length; ++i) {
        let options = ""
        if (workObjects[i].speed) options += `Hız: ${workObjects[i].speed}, `
        if (workObjects[i].level) options += `Seviye: ${workObjects[i].level}, `
        if (workObjects[i].angle) options += `Açı: ${workObjects[i].angle}, `
        if (workObjects[i].animation) options += `Animasyon: ${workObjects[i].animation}, `
        if (workObjects[i].game) options += `Oyun: ${workObjects[i].game}, `
        if (workObjects[i].highlight) options += `Vurgu: ${workObjects[i].highlight}, `
        const repeat = (workObjects[i].repeat) ? workObjects[i].repeat : 1
        worksJson.push({
          degree: 2,
          day: workObjects[i].day,
          work: workObjects[i].title,
          module: workObjects[i].module,
          exercise: workObjects[i].exercise,
          settings: options.replace(/.$/, "").replace(/.$/, ""),
          repeat: repeat
        })
        // console.log(`{ "day": '', "work": '${}', "settings": '${options}', "repeat": '${repeat}'},`)
      }




      const assert = require("assert")
      const mongoClient = require("mongodb").MongoClient
      const mongodbUrl = 'mongodb://127.0.0.1:27017/baykushizliokuma';
      mongoClient.connect(mongodbUrl, { poolSize: 10, useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
        assert.equal(null, err);
        db = client.db("baykushizliokuma");
        db.collection("programs").drop()
        db.collection("programs").insertMany(worksJson, function (err, result) {
          console.log(result)
          client.close()
        })
        console.log("Connected successfully to database");
      });
      fs.writeFile("camp_programs.json", JSON.stringify(worksJson), "utf8", function () {
        console.log("Finished")
      });
    })
  });

});
