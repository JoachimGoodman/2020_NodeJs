$("#teleport-btn").click(() => {    
    $('.input-right').val($('.input-left').val())
    $('.input-left').val($('.input-right').val())
})