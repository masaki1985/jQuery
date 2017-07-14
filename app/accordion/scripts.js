$(function () {
    let class_closed = 'closed';
    $('.accordion').each(function() {
        let dl = $(this);
        let allDt = dl.find('dt');
        let allDd = dl.find('dd');
        function closeAll() {
            allDt.addClass(class_closed);
            allDd.addClass(class_closed);
        }
        function open(dt, dd) {
            dt.removeClass(class_closed);
            dd.removeClass(class_closed);
        }
        closeAll();

        // allDd.hide();
        // allDt.css('cursor', 'pointer');

        allDt.click(function() {
            let dt = $(this);
            let dd = dt.next();
            // allDd.hide();
            // dd.show();
            // allDt.css('cursor', 'pointer');
            // dt.css('cursor', 'default');
            closeAll();
            open(dt, dd);
        });

    });

});