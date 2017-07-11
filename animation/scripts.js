$(function () {
    // $('#div1').fadeIn(1000, function() {
    //     alert('フェードイン完了');
    // });

    $('#div1').fadeIn(500); //デフォルト値は400ms
    $('#div2').fadeOut();

    $('#div3').slideDown();
    $('#div4').slideUp();

    $('#div5').animate({
        top: 200,
        left: 400
    }, 1000, function() {
        alert('アニメーション完了')
    });
});