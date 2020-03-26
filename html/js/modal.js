function aimInfo() {
  $("body").append(`
    <div id="aimInfo" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-notify" role="document">
        <div class="modal-content text-center">
          <div id="aimInfoHeader" class="modal-header d-flex justify-content-center default">
            <p class="heading" style="font-weight: bold; color: #2bbbad;"></p>
          </div>
          <div id="aimInfoBody" class="modal-body">
            <i class="fas fa-check fa-4x animated jackInTheBox mb-4" style="color: red"><span class="mx-2"></span></i>
            <p class="h3 "></p>
          </div>
          <div id="aimInfoFooter" class="modal-footer flex-center">
            <p class="h5 mdb-color white-text w-25">3</p>
          </div>
        </div>
      </div>
    </div>
  `)
}

function answerAndFinish() {
  $("body").append(`
    <div id="answerAndFinish" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-notify" role="document">
        <div class="modal-content text-center">
          <div class="modal-header d-flex justify-content-center default">
            <p class="heading" style="font-weight: bold; color: #2bbbad;">Cevabınız:</p>
          </div>
          <div class="modal-body">
            <i class="fas fa-check fa-4x animated jackInTheBox mb-4" style="color: red"><span class="mx-2"></span></i>
            <p class="resultInfo"></p>
          </div>
          <div class="modal-footer flex-center">
            <div id="okay" class="btn btn-sm btn-default waves-effect waves-light" data-dismiss="modal">Tamam</div>
          </div>
        </div>
      </div>
    </div>
  `)
}

function addScoreModal() {
  $(document).ready(() => {
    $("body").append(`
      <div id="scoreModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-notify" role="document">
          <div class="modal-content text-center">
            <div class="modal-header d-flex justify-content-center default">
              <p id="scoreModalHeader" class="heading" style="font-weight: bold; color: #2bbbad;">Tebrikler!</p>
            </div>
            <div class="modal-body text-center">
              <i id="scoreModalIconCheck" class="scoreModalIcon fas fa-check fa-4x animated jackInTheBox mb-4 nodisplay" style="color: green"><span class="mx-2"></span></i>
              <i id="scoreModalIconClock" class="scoreModalIcon far fa-clock fa-4x animated jackInTheBox mb-4 nodisplay" style="color: #f5ad1b"></i>
              <h4 id="scoreModalInfo" class="resultInfo text-weight-bold text-center">Okuma hızınız: </h4>  
              <div class="table-wrap mt-4 scrollbar-secondary w-100">
                <table class="table table-sm table-hover w-100">
                  <thead id="scoreModalTableHead">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                    </tr>
                  </thead>
                  <tbody id="scoreModalTableRows">
                  </tbody>
                </table>
              </div>
            </div>
            <div class="modal-footer flex-center">
              <div id="scoreModalOkay" class="btn btn-sm btn-outline-default btn-rounded waves-effect waves-light" data-dismiss="modal">Tamam</div>
            </div>
          </div>
        </div>
      </div>
    `)
  })
}

function addScoreModal2(isLarge = true) {
  $(document).ready(() => {
    $("body").append(`
      <div id="scoreModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ${isLarge ? "modal-lg" : ""}" role="document">
          <div class="modal-content text-center">
            <div class="modal-header d-flex justify-content-center default">
              <h4 id="scoreModalHeader" class="heading" style="font-weight: bold; color: #2bbbad;">Tebrikler!</h4>
            </div>
            <div class="modal-body text-center">
              <i id="scoreModalIconCheck" class="scoreModalIcon fas fa-check fa-4x animated jackInTheBox mb-4 nodisplay" style="color: green"><span class="mx-2"></span></i>
              <i id="scoreModalIconWarning" class="scoreModalIcon fas fa-exclamation fa-4x animated jackInTheBox mb-4 nodisplay" style="color: #f5ad1b"><span class="mx-2"></span></i>
              <i id="scoreModalIconClock" class="scoreModalIcon far fa-clock fa-4x animated jackInTheBox mb-4 nodisplay" style="color: #f5ad1b"></i>
              <i id="scoreModalIconTimes" class="scoreModalIcon far fa-clock fa-4x animated jackInTheBox mb-4 nodisplay" style="color: red"></i>
              <h4 id="scoreModalInfo" class="resultInfo text-weight-bold text-center">Egzersizi tamamladınız.</h4>  
              <div class="table-wrap mt-4 scrollbar-secondary w-100">
                <table class="table table-sm table-hover w-100">
                  <thead id="scoreModalTableHead">
                    <tr>
                      <th scope="col">Sıra</th>
                    </tr>
                  </thead>
                  <tbody id="scoreModalTableRows">
                  </tbody>
                </table>
              </div>
            </div>
            <div class="modal-footer flex-center">
              <div id="scoreModalOkay" class="btn btn-sm btn-outline-default btn-rounded waves-effect waves-light" data-dismiss="modal">Tamam</div>
            </div>
          </div>
        </div>
      </div>
    `)

    // fill tables
    let statProps = []
    $.get(`/app/collections/configs?exerciseId=${exerciseId}`, res => {
      statProps = res[0].stats
      for (var i = 0; i < res[0].stats.length; ++i) {
        $(`#scoreModalTableHead > tr`).append(`<th scope="col">${statProps[i].label}</th>`)
      }
      updateScoreTable()
    })
    updateScoreTable = function () {
      $(`#scoreModalTableRows`).empty()
      $.get(`/app/stats?exercise=${exerciseId}`, stats => {
        for (var i = 0; i < stats.length; ++i) {
          $("#scoreModalTableRows").prepend(`<tr><td>${i + 1}</td></tr>`)
          for (var j = 0; j < statProps.length; ++j) {
            $("#scoreModalTableRows > tr:first").append(`<td>${stats[i][statProps[j].id]}</td>`)
          }
        }
      })
      updateExerciseStatisticsTable()
    }
  })
}

function addScoreModal3(isLarge = true) {
  $(document).ready(() => {
    $("body").append(`
      <div id="scoreModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ${isLarge ? "modal-xl" : ""}" role="document">
          <div class="modal-content text-center">
            <div class="modal-header d-flex justify-content-center default">
              <h4 id="scoreModalHeader" class="heading" style="font-weight: bold; color: #2bbbad;">Tebrikler!</h4>
            </div>
            <div class="modal-body text-center">
              <i id="scoreModalIconCheck" class="scoreModalIcon fas fa-check fa-4x animated jackInTheBox mb-4 nodisplay" style="color: green"><span class="mx-2"></span></i>
              <i id="scoreModalIconWarning" class="scoreModalIcon fas fa-exclamation fa-4x animated jackInTheBox mb-4 nodisplay" style="color: #f5ad1b"><span class="mx-2"></span></i>
              <i id="scoreModalIconClock" class="scoreModalIcon far fa-clock fa-4x animated jackInTheBox mb-4 nodisplay" style="color: #f5ad1b"></i>
              <i id="scoreModalIconTimes" class="scoreModalIcon far fa-clock fa-4x animated jackInTheBox mb-4 nodisplay" style="color: red"></i>
              <h4 id="scoreModalInfo" class="resultInfo text-weight-bold text-center">Egzersizi tamamladınız.</h4>
              <div class="row mt-3">
                <div class="col-md-6 text-left">
                  <div><span class="h6">Bu metinde;</span> </div>
                  <div class="mt-2"><u class="">Anahtar kelimeler:</u> <em id="qkeywords">This line rendered as italicized text.</em></div>
                  <div class="mt-3"><u class=""><strong style="color:orangered;">K</strong>im:</u>  <em id="nk1">This line rendered as italicized text.</em></div>
                  <div><u class=""><strong style="color:darkorchid;">N</strong>e:</u>  <em id="nk2">This line rendered as italicized text.</em></div>
                  <div><u class=""><strong style="color:darkorchid;">N</strong>e zaman:</u>  <em id="nk3">This line rendered as italicized text.</em> </div>
                  <div><u class=""><strong style="color:darkorchid;">N</strong>erede:</u>  <em id="nk4">This line rendered as italicized text.</em> </div>
                  <div><u class=""><strong style="color:darkorchid;">N</strong>asıl:</u>  <em id="nk5">This line rendered as italicized text.</em> </div>
                  <div><u class=""><strong style="color:darkorchid;">N</strong>için:</u>  <em id="nk6">This line rendered as italicized text.</em> </div>
                </div>
                <div class="col-md-6">
                  <div class="table-wrap-mid scrollbar-secondary w-100">
                    <table class="table table-sm table-hover w-100">
                      <thead id="scoreModalTableHead">
                        <tr>
                          <th scope="col">Sıra</th>
                        </tr>
                      </thead>
                      <tbody id="scoreModalTableRows">
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
             
            </div>
            <div class="modal-footer flex-center">
              <div id="scoreModalOkay" class="btn btn-sm btn-outline-default btn-rounded waves-effect waves-light" data-dismiss="modal">Tamam</div>
            </div>
          </div>
        </div>
      </div>
    `)

    // fill tables
    let statProps = []
    $.get(`/app/collections/configs?exerciseId=${exerciseId}`, res => {
      statProps = res[0].stats
      for (var i = 0; i < res[0].stats.length; ++i) {
        $(`#scoreModalTableHead > tr`).append(`<th scope="col">${statProps[i].label}</th>`)
      }
      updateScoreTable()
    })
    updateScoreTable = function () {
      $(`#scoreModalTableRows`).empty()
      $.get(`/app/stats?exercise=${exerciseId}`, stats => {
        for (var i = 0; i < stats.length; ++i) {
          $("#scoreModalTableRows").prepend(`<tr><td>${i + 1}</td></tr>`)
          for (var j = 0; j < statProps.length; ++j) {
            $("#scoreModalTableRows > tr:first").append(`<td>${stats[i][statProps[j].id]}</td>`)
          }
        }
      })
      updateExerciseStatisticsTable()
    }
  })
}

function addStartModal() {
  $(document).ready(() => {
    $("body").append(`
      <div id="startModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-notify" role="document">
          <div class="modal-content text-center">
            <div class="modal-header d-flex justify-content-center default">
              <p id="startModalHeader" class="heading" style="font-weight: bold; color: #2bbbad;"></p>
            </div>
            <div class="modal-body">
              <h5 class="text-center" id="startModalInfo"></h5>
            </div>
            <div class="modal-footer flex-center">
              <button id="startModalOkay" type="button" class="btn btn-sm btn-outline-default btn-rounded waves-effect waves-light" data-dismiss="modal">Tamam<span id="startModalCountdown" class="badge badge-light rounded-circle ml-1" style="font-size: 14px; background-color: #f5ad1b !important">5</span></button>
            </div>
            <div class="modal-footer flex-center">
              <p><small>Egzersizi sonlandırmak için <kbd>Esc</kbd> tuşuna basınız.</small></p>
            </div>
          </div>
        </div>
      </div>
    `)
  })
}

function addStartModal2(largeModal = false) {
  $(document).ready(() => {
    $("body").append(`
      <div id="startModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ${largeModal ? "modal-lg" : ""} role="document">
          <div class="modal-content text-center">
            <div class="modal-header d-flex justify-content-center default">
              <p id="startModalHeader" class="heading" style="font-weight: bold; color: #2bbbad;"></p>
            </div>
            <div class="modal-body">
              <h5 class="text-center" id="startModalInfo"></h5>
            </div>
            <div class="modal-footer flex-center">
              <button id="startModalOkay" type="button" class="btn btn-sm btn-outline-default btn-rounded waves-effect waves-light" data-dismiss="modal">Tamam<span id="startModalCountdown" class="badge badge-light rounded-circle ml-1" style="font-size: 14px; background-color: #f5ad1b !important">5</span></button>
            </div>
            <div class="modal-footer flex-center">
              <p><small>Egzersizi sonlandırmak için <kbd>Esc</kbd> tuşuna basınız.</small></p>
            </div>
          </div>
        </div>
      </div>
    `)
    $.get(`/app/collections/configs?exerciseId=${exerciseId}`, res => {
      $("#startModalInfo").html(res[0].startInfo)
      $.get("/app/user", res => {
        $("#startModalHeader").text(`Merhaba ${res.name}, Bu Egzersizde:`)
      })
    })

  })
}

function addTextSelectModal() {
  $(document).ready(() => {
    $("body").append(`
      <div id="textSelectModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content text-center">
            <div class="modal-header d-flex justify-content-center default">
              <h4 id="textSelectModalHeader" class="heading" style="font-weight: bold; color: #2bbbad;">Metinler</h4>
            </div>
            <div class="modal-body text-center py-1">
              <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
                    aria-selected="true">Kısa</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
                    aria-selected="false">Orta</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
                    aria-selected="false">Uzun</a>
                </li>
              </ul>
              <div class="tab-content pt-0" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div class="table-wrap-long mt-4 scrollbar-secondary w-100">
                    <table class="table table-sm w-100">
                      <thead id="textSelectModalTableHead1">
                        <tr>
                          <th scope="col">Sıra</th>
                          <th scope="col">Başlık</th>
                          <th scope="col">Kelime</th>
                          <th scope="col">Okunma S.</th>
                        </tr>
                      </thead>
                      <tbody class="table-row-select" id="textSelectModalTableRows1"></tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div class="table-wrap-long mt-4 scrollbar-secondary w-100">
                    <table class="table table-sm w-100">
                      <thead id="textSelectModalTableHead2">
                        <tr>
                          <th scope="col">Sıra</th>
                          <th scope="col">Başlık</th>
                          <th scope="col">Kelime</th>
                          <th scope="col">Okunma S.</th>
                          </tr>
                      </thead>
                      <tbody class="table-row-select" id="textSelectModalTableRows2"></tbody>
                    </table>
                  </div>                
                </div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  <div class="table-wrap-long mt-4 scrollbar-secondary w-100">
                    <table class="table table-sm w-100">
                      <thead id="textSelectModalTableHead3">
                        <tr>
                          <th scope="col">Sıra</th>
                          <th scope="col">Başlık</th>
                          <th scope="col">Kelime</th>
                          <th scope="col">Okunma S.</th>
                          </tr>
                      </thead>
                      <tbody class="table-row-select" id="textSelectModalTableRows3"></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer flex-center">
              <div id="textSelectModalOkay" class="btn btn-sm btn-outline-default btn-rounded waves-effect waves-light" data-dismiss="modal">Tamam</div>
            </div>
          </div>
        </div>
      </div>
    `)

    // fill tables
    updateTextListTable = function () {
      let tabs = [1, 2, 3]
      $.get("/app/collections/textList", texts => {
        tabs.forEach(tab => $(`#textSelectModalTableRows${tab}`).empty())
        async.eachSeries(texts, (text, callback) => {
          $.get(`/app/collections/counters?textTitle=${text.title}`, res => {
            var readCount = 0
            if (res[0] && res[0].counter) readCount = res[0].counter
            let tab = 1
            if (text.wordCount <= 300) null
            else if (text.wordCount <= 500) tab = 2
            else tab = 3
            $(`#textSelectModalTableRows${tab}`).append(`
              <tr>
                <td>${$(`#textSelectModalTableRows${tab} > tr`).length + 1}</td>
                <td>${text.title}</td>
                <td>${text.wordCount}</td>
                <td>${readCount}</td>
              </tr>
            `)
            callback()
          })
        })
      })

      // make it clickable
      selectedTextTitle = null
      tabs.forEach(tab => {
        $(`#textSelectModalTableRows${tab}`).on('click', "tr", function (event) {
          $('tr').css("background-color", "");
          $(this).css("background-color", "rgba(64,224,208,0.8)");
          selectedTextTitle = $(this).children("td:eq(1)").text()
        });
      })
    }
    updateTextListTable()

  })
}

function addTextSelectModal2() {
  $(document).ready(() => {
    $("body").append(`
      <div id="textSelectModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content text-center">
            <div class="modal-header d-flex justify-content-center default">
              <h4 id="textSelectModalHeader" class="heading" style="font-weight: bold; color: #2bbbad;">Metinler</h4>
            </div>
            <div class="modal-body text-center py-1">
              <div class="tab-content pt-0" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div class="table-wrap-long mt-4 scrollbar-secondary w-100">
                    <table class="table table-sm w-100">
                      <thead id="textSelectModalTableHead1">
                        <tr>
                          <th scope="col">Sıra</th>
                          <th scope="col">Başlık</th>
                          <th scope="col">Kelime</th>
                          <th scope="col">Okunma S.</th>
                        </tr>
                      </thead>
                      <tbody class="table-row-select" id="textSelectModalTableRows1"></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer flex-center">
              <div id="textSelectModalOkay" class="btn btn-sm btn-outline-default btn-rounded waves-effect waves-light" data-dismiss="modal">Tamam</div>
            </div>
          </div>
        </div>
      </div>
    `)

    // fill tables
    updateTextListTable = function () {
      let tabs = [1]
      $.get("/app/collections/textList6", texts => {
        console.log(texts)
        tabs.forEach(tab => $(`#textSelectModalTableRows${tab}`).empty())
        async.eachSeries(texts, (text, callback) => {
          $.get(`/app/collections/counters6?textTitle=${text.title}`, res => {
            var readCount = 0
            if (res[0] && res[0].counter) readCount = res[0].counter
            let tab = 1
            $(`#textSelectModalTableRows${tab}`).append(`
              <tr>
                <td>${$(`#textSelectModalTableRows${tab} > tr`).length + 1}</td>
                <td>${text.title}</td>
                <td>${text.wordCount}</td>
                <td>${readCount}</td>
              </tr>
            `)
            callback()
          })
        })
      })

      // make it clickable
      selectedTextTitle = null
      tabs.forEach(tab => {
        $(`#textSelectModalTableRows${tab}`).on('click', "tr", function (event) {
          $('tr').css("background-color", "");
          $(this).css("background-color", "rgba(64,224,208,0.8)");
          selectedTextTitle = $(this).children("td:eq(1)").text()
        });
      })
    }
    updateTextListTable()
  })
}

function addTestModal(isLarge = false) {
  $(document).ready(() => {
    $("body").append(`
      <div id="testModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ${isLarge ? "modal-lg" : ""}" role="document">
          <div class="modal-content text-center">
            <div class="modal-header d-flex justify-content-center default">
              <h4 id="testModalHeader" class="heading" style="font-weight: bold; color: #2bbbad;">Sorular</h4>
            </div>
            <div class="modal-body text-center">
              <!-- <h4 id="testModalInfo" class="resultInfo text-weight-bold text-center">Egzersizi tamamladınız.</h4>-->  
             
              <div class="tab-content pt-0" id="questionTabs">
               
              </div>

              <nav class="text-center" aria-label="Page navigation example">
                <ul id="questionTabsPagination" class="pagination w-50 pg-amber mx-auto">
                  <li class="page-item mx-auto">
                    <a class="page-link" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item mx-auto">
                    <a class="page-link" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>

            </div>
            <div class="modal-footer flex-center">
              <div id="testModalOkay" class="btn btn-sm btn-outline-default btn-rounded waves-effect waves-light" data-dismiss="modal">Tamamla</div>
            </div>
          </div>
        </div>
      </div>
    `)

    $("#testModalOkay").click(() => {
      stopCallback()
    })


    generateQuestions = function () {
      $("#questionTabs").empty()
      $("#questionTabsPagination").empty()
      let optionLetters = ["a", "b", "c", "d", "e"]
      for (var i = 0; i < text.questions.length; ++i) {
        text.questions[i].result = false
        $("#questionTabs").append(`
          <div class="tab-pane fade show ${i == 0 ? "active" : ""}" id="q${i + 1}" role="tabpanel">
            <h4 class="text-left">${i + 1} - ${text.questions[i].question}</h4>
            <nav aria-label="Page navigation example">
              <ul class="pagination d-flex flex-column w-75 text-left mx-auto">
              </ul>
            </nav>
          </div>
        `)
        $(`#q${i + 1} > nav > .pagination`).empty()
        for (var j = 0; j < text.questions[i].options.length; ++j) {
          $(`#q${i + 1} > nav > .pagination`).append(`
            <li class="page-item option" data-qid="q${i + 1}"><a class="page-link" style="font-size:1rem;">${optionLetters[j]}) ${text.questions[i].options[j]}</a></li>
          `)
        }
        $("#questionTabsPagination").append(`
          <li class="page-item question mx-auto ${i == 0 ? "active" : ""}"><a class="page-link" data-toggle="tab" href="#q${i + 1}" role="tab">${i + 1}</a></li>
        `)

      }

      $("#qkeywords").text(text.keyWords)
      for (var i = 0; i < text.NK.length; ++i) {
        $(`#nk${i + 1}`).text(text.NK[i].answer)
      }

      $('.page-item.question').click(function () {
        $('.page-item.question > .page-link').removeClass('active');
        $(this).addClass('active').siblings().removeClass('active');
      });
      $('.page-item.option').click(function () {
        $('.page-item.option > .page-link').css("font-weight", "");
        $('.page-item.option > .page-link').css("background-color", "");
        $('.page-item.option > .page-link').removeClass('active');
        $(this).addClass('active').siblings().removeClass('active');
        $('.page-item.option.active > .page-link').css("font-weight", "bold");
        $('.page-item.option.active > .page-link').css("color", "black");
        $('.page-item.option.active > .page-link').css("background-color", "rgba(66, 244, 154, 0.7)");
        let questionIndex = Number($(this).attr("data-qid").replace("q", "")) - 1
        let answerIndex = optionLetters.indexOf($(this).text().split(")")[0])
        console.log(questionIndex)
        console.log(answerIndex)
        console.log(text.questions[questionIndex].answer)
        text.questions[questionIndex].userAnswer = answerIndex
        text.questions[questionIndex].result = text.questions[questionIndex].answer == answerIndex ? true : false
        console.log(text.questions[questionIndex].result)
      });


    }
  })
}

// ========================
// Rotate Screen Warning
// ========================
$(document).ready(() => {
  $("body").append(`
    <div id="rotateScreenWarningModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content text-center">
          <div class="modal-header d-flex justify-content-center default">
            <i id="" class="scoreModalIcon fas fa-sync-alt fa-4x animated jackInTheBox mb-4" style="color: #f5ad1b"><span class="mx-2"></span></i>
          </div>
          <div class="modal-body text-center">
            <h2 id="" class="resultInfo text-weight-bold text-center">Lütfen ekranı döndürünüz.</h2>
          </div>
          <div class="modal-footer flex-center">
          </div>
        </div>
      </div>
    </div>
  `)
})

// ========================
// Welcome and Manual
// ========================
$(document).ready(() => {
  $("body").append(`
    <div class="modal fade" id="welcomeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title w-100" id="myModalLabel"><img src=""> </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">
                <i class="fas fa-times animated jackInTheBox" style="color: orangered; font-size: 2rem !important;"></i>
              </span>
            </button>
          </div>
          <div id="welcomeModalBody" class="modal-body text-center">
            <img class="mb-4" src="/app/img/BHO_Logo.png" alt="" width=250>
            <h3 class="font-weight-bold mb-4">BHO Programını Aldıktan Sonra Nasıl Giriş Yapabilirim ve Kullanmaya Başlayabilirim?</h3>
            <h4 class="mb-4" style="font-weight: 400;">
              Baykuş Hızlı Okuma Programından Herkese Merhaba. <br>
              İsmim <strong>Yakup YİĞİT</strong> programın yapımcısıyım. Yaklaşık 19 yıldır öğretmenlik yapıyorum. Branşım Rehber Öğretmen, aynı zamanda Kişisel Gelişim Uzmanıyım. <br>
              Bu metni dikkatlice okuyunuz! Sizlere programı nasıl kullanacağınızı anlatacağım.

            </h4>
            <ul class="text-left">
              <li><a href="/app">www.baykushizliokuma.com</a> adresine gidelim.</li>
              <li>Ana sayfanın sağ üstünde “Giriş Yap” kısmına tıklayın.</li>
              <li>Kullanıcı adını ve şifrenizi girin.</li>
              <li>Ana sayfa ekranı sizi karşılayacaktır.</li>
              <li>Öncelikle okuma hızınızı ölçmeniz ve anlama oranınızı belirlemeniz gerekir.</li>
              <li>Bunun için; “Okuma Anlama Egzersizleri” modülünden; “Tek Sayfa Okuma” egzersizini tıklayınız.</li>
              <li>Buradan “Metin Seç” kısmına tıklayıp 2 ya da 3 parça okuyalım ve parçanın sonundaki soruları çözelim.</li>
              <li>Çıkan okuma hızı sonuçlarınızın ortalamasını alın.</li>
              <li>Çıkan okuma hızı ortalamanız;
                <ol>
                  <li>100 Kelimenin altında ise “<strong>ÇIRAK</strong>” programından başlayınız.</li>
                  <li>100-200 kelimenin arasında ise “<strong>KALFA</strong>” programından başlayınız.</li>
                  <li>200 kelime ve üstünde ise “<strong>USTA</strong>” programından başlayınız.</li>
                </ol>
              </li>
              <br>
              <li>İsterseniz serbest şekilde de çalışabilirsiniz. Kendi programınızı da oluşturabilirsiniz.</li>
              <br>
              <li>İster kendi programınızı hazırlayın ister serbest bir şekilde çalışın, çalışmalarınızda şu sıralamayı dikkat edin!
                <ol>
                  <li>Her gün çalışmaya “GÖZÜN AKTİF GÖRME ALANINI GENİŞLETME EGZERSİZLERİ” ile başlayın ve en az 3 egzersiz seçin ve yapın.</li>
                  <li>Daha sonra “GÖZ SIÇRAMA - TAKİP EGZERSİZLERİ” 2 egzersiz seçin ve yapın.</li>
                  <li>Daha sonra “GÖZ ODAKLANMA EGZERSİZLERİ” 2 egzersiz seçin ve yapın.</li>
                  <li>Daha sonra “BLOKLAMA VE GÖLGELEME EGZERSİZLERİ” kısmında en az 3 okuma çalışması seçin ve en az 3 tekrar yapın.</li>
                  <li>Daha sonra “HIZLI OKUMA ÇALIŞMALARI” kısmında en az 3 okuma çalışması seçin ve en az 3 tekrar yapın.</li>
                  <li>Son olarak da “OKUMA ANLAMA EGZERSİZLERİ” kısmında en az 2 okuma şekli seçin ve en az 3’er kez okuyun.</li>
                </ol>
              </li>
              <br>
              <li>Son olarak; egzersizleri doğru ve verimli bir şekilde gerçekleştirebilmek için en az 13 inç'lik ekrana sahip bir cihazda çalışmanızı tavsiye ederiz.</li>
            </ul>
          </div>
          <div class="modal-footer text-center">
            <div class="form-check invisible d-none d-md-block">
              <input type="checkbox" class="form-check-input" id="isize0" value=0>
              <label class="form-check-label pl-4" for="isize0">Bir daha gösterme</label>
            </div>
            <button type="button" class="btn btn-secondary btn mx-auto" data-dismiss="modal">Kapat</button>
            <div id="showManualDiv" class="form-check">
              <input type="checkbox" class="form-check-input" id="showManual" value=0>
              <label class="form-check-label pl-4" for="showManual">Bir daha gösterme</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  `)
})


//===========================
// Exercise statistics
//===========================
$(document).ready(() => {
  if (module && exercise) {
    console.log("Here")
    $("body").append(`
      <div id="exerciseStatistics" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content text-center">
            <div class="modal-header d-flex justify-content-center default">
              <h4 id="exerciseStatisticsHeader" class="heading" style="font-weight: bold; color: #f5ad1b;">Bu Egzersizdeki Performansın:</h4>
            </div>
            <div class="modal-body text-center">
              <i id="exerciseStatisticsIconWarning" class="exerciseStatisticsIcon fas fa-exclamation fa-4x animated jackInTheBox mb-4 nodisplay" style="color: #f5ad1b"><span class="mx-2"></span></i>
              <h4 id="exerciseStatisticsInfo" class="resultInfo text-weight-bold text-center d-none">Egzersizi tamamladınız.</h4>
              <div class="row mt-3 text-center">
                <div class="col-md-6 mx-auto">
                  <div class="table-wrap-mid scrollbar-secondary w-100">
                    <table class="table table-sm table-hover w-100">
                      <thead id="exerciseStatisticsTableHead">
                        <tr>
                          <th scope="col">Sıra</th>
                        </tr>
                      </thead>
                      <tbody id="exerciseStatisticsTableRows">
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer flex-center">
              <div id="exerciseStatisticsOkay" class="btn btn-sm btn-outline-default btn-rounded waves-effect waves-light" data-dismiss="modal">Tamam</div>
            </div>
          </div>
        </div>
      </div>
    `)

    // fill tables
    let statProps = []
    $.get(`/app/collections/configs?exerciseId=${exerciseId}`, res => {
      statProps = res[0].stats
      for (var i = 0; i < res[0].stats.length; ++i) {
        $(`#exerciseStatisticsTableHead > tr`).append(`<th scope="col">${statProps[i].label}</th>`)
      }
      updateExerciseStatisticsTable()
    })
    updateExerciseStatisticsTable = function () {
      $(`#exerciseStatisticsTableRows`).empty()
      $.get(`/app/stats?exercise=${exerciseId}`, stats => {
        for (var i = 0; i < stats.length; ++i) {
          $("#exerciseStatisticsTableRows").prepend(`<tr><td>${i + 1}</td></tr>`)
          for (var j = 0; j < statProps.length; ++j) {
            $("#exerciseStatisticsTableRows > tr:first").append(`<td>${stats[i][statProps[j].id]}</td>`)
          }
        }
      })
    }
    
    // $("#exerciseStatistics").on("shown.bs.modal", () => {
    //   updateExerciseStatisticsTable()
    // })
  }
})