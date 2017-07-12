$(function () {
    $('#div1').text('textメソッドでの内容書き換え');
    $('#div2').html('htmlメソッドでの内容書き換え');
    $('#div3').text('<stronng>textメソッド</strong>での内容書き換え');
    $('#div4').html('<strong>htmlメソッド</strong>での内容書き換え');
    $('#div5').empty();

    $('#changeThis').attr('src', 'img2.gif');

    $('#input1').val('テキストフィールドの値を書き換えました');
    $('#textarea1').val('テキストエリアの値を書き換えました');
    $('#select1').val('tokyo');
    $('#select2').val(['shibuyaku','chiyodaku']);

    $('#class1').addClass('box');
    $('#class2').removeClass('box');
    $('#class3').addClass('alert');
    $('#class4').removeClass('alert');

    let basket = $('#basket');
    let apple = $('#apple');
    let banana = $('#banana');
    let orange = $('#orange');
    basket.append(apple);
    basket.append(banana);
    orange.appendTo(basket);
    //まとめてかける
    //basket.append(apple,banana,orange)

    let div6 = $('#div6');
    let img = $('<img src="img1.gif" alt="">');
    img.appendTo(div6);

    $('#div7').remove();
});