function footer() {
  $(document).ready(() => {
    $("body").append(`
      <footer class="page-footer font-small teal fixed-bottom odisplay">
        <div class="w-100 h-100">

          <div class="row d-flex justify-content-between h-100 align-items-center odisplay">

            <!-- left -->
            <div class="col">
              <div id="footerleft" class="row d-flex justify-content-between h-100 align-items-center">
                <div id="footerleftleft" class="col"></div>
                <div id="footerleftcenter" class="col"></div>
                <div id="footerleftright" class="col"></div>
              </div>

            </div>

            <!-- center -->
            <!-- <div id="footercenter" class="col-2 text-center" style="flex: 0 0 200px !important; max-width: 200px !important;"> -->
            <div id="footercenter" class="col-2 text-center" style="">
              <button id="start" class="btn btn-outline-white btn-rounded waves-effect waves-light">Başla!</button>
            </div>

            <!-- right -->
            <div class="col">
              <div class="row d-flex justify-content-between h-100 align-items-center">
                <div id="footerrightleft" class="col"></div>
                <div id="footerrightcenter" class="col"></div>
                <div id="footerrightright" class="col text-right mr-2">
                  <img src="/app/img/bho_logo_yazı.png" height=50>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `)
  })
}

function addDurationControl(label, values) {
  var listItems = `<li class="page-item active"><a class="duration page-link">1</a></li>`
  for (var i = 2; i <= values.length; ++i) {
    listItems += `<li class="page-item"><a class="duration page-link">${i}</a></li>`
  }

  $(document).ready(() => {
    $("#footerleftleft").html(`
      <nav aria-label="Page navigation" style="margin-left: -0.5rem; margin-right: 1rem;">
        <ul class="pagination pagination-circle pg-blue my-1">
          <li class="page-item white-text">
            <a class="page-link white-text" tabindex="-1">${label}:</a>
          </li>
          ${listItems}
        </ul>
      </nav>
    `)

    $('.page-item').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
    });

    duration = values[0]
    $('.duration').click(function () {
      speedLevel = Number($(this).text())
      duration = values[Number($(this).text()) - 1]
    });

  })
}

function addLevelControl(label, values) {
  var listItems = `<li class="page-item active"><a class="level page-link">1</a></li>`
  for (var i = 2; i <= values.length; ++i) {
    listItems += `<li class="page-item"><a class="level page-link">${i}</a></li>`
  }

  $(document).ready(() => {
    $("#footerrightleft").html(`
      <nav aria-label="Page navigation" style="margin-left: -0.5rem; margin-right: 1rem;">
        <ul class="pagination pagination-circle pg-blue my-1">
          <li class="page-item white-text">
            <a class="page-link white-text" tabindex="-1">${label}:</a>
          </li>
          ${listItems}
        </ul>
      </nav>
   `)

    $('.page-item').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
    });

    level = values[0]
    $('.level').click(function () {
      level = values[Number($(this).text()) - 1]
    });
  })

}


function addTypeSelect(title, options) {
  var optionItems = ""
  for (var i = 0; i < options.length; ++i) {
    optionItems += `<option value="${options[i].id}">${options[i].label}</option>`
  }

  $(document).ready(() => {
    $("#footerleftcenter").addClass("col-6")
    $("#footerleftcenter").html(`
      <div class="row text-center" style="max-width: 100% !important;">
        <div class="col my-auto text-right px-0"><span>${title}:</span></div>
        <div class="col text-left">
          <select id="typeSelect" class="custom-select custom-select-sm">
            ${optionItems}
          </select>
        </div>
      </div>
    `)
  })
}

function addTextSelectControl() {
  $(document).ready(() => {
    $("#footerrightcenter").html(`
      <div class="row text-center mx-0" style="max-width: 100% !important;">
        <button type="button" data-toggle="modal" data-target="#textSelectModal" class="mx-0 btn btn-tw btn-rounded waves-effect waves-light"><i class="far fa-file-alt pr-1"></i> Metin Seç</button>
      </div>
    `)
  })
}
function addTextSelectControl2() {
  $(document).ready(() => {
    $("#footerleftcenter").html(`
      <div class="row text-center mx-0" style="max-width: 100% !important;">
        <button type="button" data-toggle="modal" data-target="#textSelectModal" class="mx-0 btn btn-tw btn-rounded waves-effect waves-light"><i class="far fa-file-alt pr-1"></i> Metin Seç</button>
      </div>
    `)
  })
}
