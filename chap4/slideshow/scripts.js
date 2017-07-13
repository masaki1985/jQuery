$(function () {
    let interval = 3000;
    $('.slideshow').each(function() {
        let timer;
        let container = $(this);
        function switchImg() {
            // let imgs = container.find('img');
            let anchors = container.find('a');
            // let first = imgs.eq(0);
            // let second = imgs.eq(1);
            let first = anchors.eq(0);
            let second = anchors.eq(1);
            first.fadeOut().appendTo(container);
            second.fadeIn();
        }
        // setInterval(switchImg, interval);
        function startTimer() {
            timer = setInterval(switchImg, interval);
        }
        function stopTimer() {
            clearInterval(timer);
        }
        container.find('a').hover(stopTimer, startTimer);
        startTimer();
    });
});