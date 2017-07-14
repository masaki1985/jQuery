$(function () {
    let tbody = $('#tbody');
    $.getJSON('data.json', function(people) {
        $.each(people, function(i, person) {
            let text_no = person.no;
            let text_name = person.name;
            let text_mail = person.mail;
            let tr = $('<tr>');
            let no = $('<td>').text(text_no);
            let name = $('<td>').text(text_name);
            let mail = $('<td>').text(text_mail);
            tr.append(no);
            tr.append(name);
            tr.append(mail);
            tbody.append(tr);
        });
    });
});