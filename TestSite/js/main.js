
$(document).ready(function(){
    $('.slider').slick();

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


