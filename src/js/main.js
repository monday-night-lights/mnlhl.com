$(document).ready(function () {
    var classes = ["all-star", "taylors", "diques", "americans", "broadcast", "champions", "weaver", "stars"];

    $(".jumbo").addClass(classes[~~(Math.random() * classes.length)]);

    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
    $('.collapsible').collapsible();
    $('.modal').modal();

    if (window.location.hash === "#podcast") {
        var modal = document.getElementById("podcast-modal");
        M.Modal.getInstance(modal).open();
    }
});
