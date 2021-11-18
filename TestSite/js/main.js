
$(document).ready(function(){
    $('.slider').slick({
      adaptiveHeight: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true
    });

});


function init(){
//доста>м файл json
$.getJSON("goods.Json", goodsOut);
}


function goodsOut(data) {
//выводим на страницу
    console.log(data);
    var out='';
    for ( var key in data){
        out +='<div class="cart">';
        out += '<p class="name">'+data[key].name+'</p>';
        out += '<img src="'+data[key].img+'" alt="">';
        out+= '<div class="cost">'+data[key].cost+'</div>';
        out+='<button class="add-to-card">купить</button>';
        out += '</div>';
    }

    $('.goods-out').html(out);
}


$(document).ready(function(){
    init();

});


