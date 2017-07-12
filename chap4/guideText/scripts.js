$(function () {
    let guideClass = 'guide'    // 追加
    $('.guideText').each(function() {
        let guideText = this.defaultValue;
        let element = $(this);
        // element.focus(function() {
        //     if(element.val() === guideText) {
        //         element.val('');
        //         element.removeClass('guide');
        //     }
        // });
        // element.blur(function() {
        //     if(element.val() === '') {
        //         element.val(guideText);
        //         element.addClass('guide');
        //     }
        // });
        element.focus(function() {
            if(element.val() === guideText) {
                element.val('').removeClass(guideClass);
            }
        }).blur(function() {
            if(element.val() === '') {
                element.val(guideText).addClass(guideClass);
            }
        });
        if(element.val() === guideText) {
            // element.addClass('guide');
            element.addClass(guideClass);
        }
    });
});