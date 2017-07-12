$(function () {
    $('#div1').click(function() {
        $('#div1').text('クリックされました');
    });

    $('#div2').mouseenter(function() {
        $('#div2').text('マウスのりました');
    });
    $('#div2').mouseleave(function() {
        $('#div2').text('マウスおりました');
    });

    $('#div3').hover(function() {
        $('#div3').text('マウスのりました');
    }, function() {
        $('#div3').text('マウスおりました');
    });

    let element = $('#input1');
    element.focus(function() {
        element.addClass('active')
    });
    element.blur(function() {
        element.removeClass('active')
    });

    let elements = $('.clickTest');
    elements.click(function() {
        $(this).text('クリックされました');
    });

    $('.animal1').each(function() {
        let name = $(this).text();
        alert(name);
    });
});