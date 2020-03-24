
function navbar(moduleIndex, modulePage = false) {
  const from = location.search.replace("?","").split("=")[1]
  const backIconEl = `<i class="material-icons font-weight-bold ml-2 my-auto"> keyboard_backspace</i>`
  const backLocation = from ? `/app/${from}` : `/app/modules/${moduleIndex}`
  $(document).ready(() => {
    $("body").prepend(`
      <nav class="navbar navbar-dark default-color ${modulePage ? "": "fixed-top"} justify-content-between odisplay white-text">
      <!-- <a class="navbar-brand waves-effect waves-light" href="/app"><i class="fas fa-home fa-1x"></i><span class="mx-3"><i class="material-icons font-weight-bold ml-2"> keyboard_backspace</i></span></a> -->
      <a class="navbar-brand waves-effect waves-light" href="/app"><i class="fas fa-home fa-1x"></i></a>
  <a class="navbar-brand waves-effect waves-light d-flex " href="${backLocation}">${modulePage ? "" : backIconEl}<span class="mx-2" style="font-size: 1rem;">${modules[moduleIndex - 1]}</span></a>
      <ul class="navbar-nav ml-auto nav-flex-icons">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-user fa-1x"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-right dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
          <a class="dropdown-item" data-toggle="modal" data-target="#welcomeModal" href="#">Kullanım Kılavuzu</a>
          <a class="dropdown-item" href="/app/logout">Oturumu Kapat</a>
          </div>
        </li>
      </ul>
      </nav>
    `)
  })
}