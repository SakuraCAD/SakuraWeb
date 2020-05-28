$(function() {
    $("#licence-plate-fail").click(function() {
        $("#licenceplate-fail").addClass("is-active")
    });

    $("#licence-plate-pass").click(function() {
        $("#licenceplate-success").addClass("is-active")
    });

    $(".modal-closeme").click(function() {
        $(".modal").removeClass("is-active")
    });

    $(".delete").click(function() {
        $(".modal").removeClass("is-active")
    });

    $(".navbar-burger").click(function() {

        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

});