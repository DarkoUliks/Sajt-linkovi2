jQuery(document).ready(function ($) {


    $(`#meni img`).on("mousemove", function () {
        $(`#poezija`).css('display', 'block')
    })
    $(`#meni img`).on("mousemove", function () {
        $(`#link`).css('display', 'block')
    })
    $(`#meni img`).on("mousemove", function () {
        $(`#autor`).css('display', 'block')
    })

});