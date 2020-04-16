$(document).ready(() => {
    $('#burger-menu, .bg-black').click(() => {
        $('#navbar').toggleClass('width')
        $('#header').toggleClass('bg-black')
    })
})