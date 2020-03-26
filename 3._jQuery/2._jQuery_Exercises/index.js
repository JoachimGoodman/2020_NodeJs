// 1
$('body').css('text-align', 'center');

// 2
$('#title h2').text('New Title');

// 3
$('.subtitle-box').css('background', '#dedede');

// 4
$('.temp').hide();

// 5
$('div.reason').css('border', '2px dashed orange');

// 6
$('ol li').css('font-weight', 'bold');

// 7
$('ol li:last-of-type').css('text-decoration', 'underline');

// 8
$('ol li:nth-of-type(2)').css('text-decoration', 'line-through');

// 9
$('ul li').css('font-style', 'italic');

// 10
$('ul span').css('font-size', "50%");

// 11
$('.unused-box label:nth-of-type(1)').hide();

// 12
$('.unused-box').html('<p>Second Sentence</p>');

// 13
$('.unused-box').prepend('<p>First Sentence</p>');

// 14
$(".unused-box").addClass("used-box").removeClass("unused-box");

$(document).ready(() => {
    // 15
    $(".used-box").click(() => {
        $(".used-box").toggleClass("used-boxed-clicked");
    });

    // 16
    $('#submit-button').hover(
        () => {
            $('#submit-button').text("You're ready to click.");
        },
        () => {
            $('#submit-button').text("Click")
        }
    );

    // 17
    $('#submit-button').click(() => {
        let count = $('#first-list li').length + 1;
        $('#first-list').append('<li>Reason '+count+'</li>');
    });

    // 18 ?


});