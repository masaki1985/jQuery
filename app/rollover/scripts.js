$(function () {
    $('.rollover').each(function() {
        let a = $(this);
        let img = a.find('img');
        let src_off = img.attr('src');
        // let src_on  = src_off.replace('_off', '_on');
        let src_on = src_off.replace(/^(.+)_off(\.[^\.]+)$/,'$1_on$2'); //正規表現
        $('<img>').attr('src', src_on);
        // a.hover(function() {
        //     img.attr('src', src_on);
        // }, function() {
        //     img.attr('src', src_off);
        // });
        a.bind('mouseenter focus', function() {
            img.attr('src', src_on);
        });
        a.bind('mouseleave blur', function() {
            img.attr('src', src_off);
        });
    });
    
});