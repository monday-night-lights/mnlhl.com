$(document).ready(function () {
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
    $('.collapsible').collapsible();
    $('.modal').modal();

    if (window.location.hash === "#podcast") {
        var modal = document.getElementById("podcast-modal");
        M.Modal.getInstance(modal).open();
    }
});
