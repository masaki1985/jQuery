$(function () {
    let tbody = $('#tbody');
    $.ajax({
        url: 'data.xml',
        dataType: 'xml',
        success: function(xml) {
            let people = $(xml);
            people.find('person').each(function() {
                let person = $(this);
                let text_no = person.find('no').text();
                let text_name = person.find('name').text();
                let text_mail = person.find('mail').text();
                let tr = $('<tr>');
                let no = $('<td>').text(text_no);
                let name = $('<td>').text(text_name);
                let mail = $('<td>').text(text_mail);
                tr.append(no);
                tr.append(name);
                tr.append(mail);
                tbody.append(tr);
            });
        }
    })
});