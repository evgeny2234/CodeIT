$(document).ready(function(){

var images = 3;   //сколько картинок у Нас всего используется
var slider_buttons_width = images*3;

$('.buttons > ul').css({
	'width':slider_buttons_width+"vh"
});

for(var i=images; i>0; i--)    // заполняем кнопками по количеству картинок в папке
{
	$('.buttons > ul').prepend('<li data-img-number=\''+i+'\'></li>');
}

function f1(img_number) {

	$('.buttons > ul > li').css({
		'background-color':'rgba(0,0,0,0.4)',
		'box-shadow':'0 0 0 0 grey'
		
	});

	$('.buttons > ul > li:nth-child('+img_number+')').css({
		'background-color':'lightgrey',
		'box-shadow':'0 0 0.1vh 0.1vh grey'
	});
}


var img_number = 1;
f1(img_number);

	var slider_timer = setInterval(function(){     //Автоматическое переключение картинок

		var img_link = "img/header/slider/"+img_number+".png";

		if($('.image > img').attr('src')==img_link)
		{
			img_number++;
		}

		f1(img_number);
		

		$('.image > img').fadeOut(0);
		$('.image > img').attr('src',img_link);
		$('.image > img').fadeIn(3000);

		img_number++;
		if(img_number>=images+1)
		{
			img_number=1;
		}

	},8000);


	$('.buttons > ul > li').click(function(){     //Функция для ручного переключения картинок

		var data_img = $(this).attr('data-img-number');

		var img_link = "img/header/slider/"+data_img+".png";


		if($('.image > img').attr('src')!=img_link)
		{
		f1(data_img);

		$('.image > img').attr('src',img_link);

		$('.image > img').fadeOut(0);

		$('.image > img').fadeIn(0);
		}

	});
/*
	$('.navbar-toggle').click(function(){

		$('.navigation > *').css({
			'display':'block'
		});

	});
*/

	var number_of_products = 40;   //Всего продуктов
	var kol_on_page = 6;   //Отображать продуктов на странице
	var pages = Math.ceil(number_of_products/kol_on_page);  //сколько страниц надо чтоб отобразить весь контент

	var list_width = 25*pages;

	$('.pages_list').css({
		'width':list_width
	});


	var content = "<div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 \"><div class=\"js_styles\"><div class=\"catalog_img\"><img class=\"product_photo\" src=\"img/main/products/oven.png\" alt=\"Some product\" title=\"Some product\"></div><h3 title=\"Description\">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR DOLER ADIPISCING ELIT.</h3><div class=\"price\"><h2 title=\"price\">$ 350.95</h2><form method=\"POST\" action=\"адрес\"><input type=\"hidden\" value=\"###\" name=\"catalog_item_id\"><span><button style=\"background-color: transparent; border: 0px;\" type=\"submit\" name=\"topurchasesfromcatalog\"><img src=\"img/main/cart.png\" alt=\"Добавить в корзину\" title=\"Add to basket\"></button></span></form></div></div>";

	if(number_of_products<=kol_on_page)
	{
		for (var i=1; i <= number_of_products; i++)
		{

			$('.catalog').prepend(content);
			
		}
	}

	if(number_of_products>=kol_on_page)
	{
		for (var i=1; i <= kol_on_page; i++)
		{

			$('.catalog').prepend(content);
			
		}
	}

	for(var i=1; i <= pages; i++)
	{
		$('.pages_list').append('<li><a href="#POST">'+i+'</a></li>');
	}

	var scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

$('.b-popup').css({
	'height':scrollHeight
});

$('.feedback_button').click(function(){
	$('.b-popup').fadeIn(1000);
});

$('.close').click(function(){
	$('.b-popup').fadeOut(1000);
});

$('.b-popup-content').css({
	'opacity':'1',
	'background-color':'white'
});

$('.navigation_header_open').click(function(){
	$('.nav-border').remove();
});

var regVname = /^[a-zA-Z]{2,}$/;
var regVphone = /^[0-9]{1,2}\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
var regVemail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

$('.feedback_form > input:not([type="submit"])').change(function(){
correct_form();
});

function correct_form(){

	var user_name = $('#name').val();
	var user_phone = $('#phone').val();
	var user_email = $('#email').val();

	if(user_name.match(regVname))
	{
		$('#name').css({
			'boxShadow': 'inset 0 0 20px 3px #baffb5',
	    	'border': '1px solid #baffb5',
	    	'outline': '0px'
		});
	}
	
	if(user_phone.match(regVphone))
	{
		$('#phone').css({
			'boxShadow': 'inset 0 0 20px 3px #baffb5',
	    	'border': '1px solid #baffb5',
	    	'outline': '0px'
		});
	}

	if(user_email.match(regVemail))
	{
		$('#email').css({
			'boxShadow': 'inset 0 0 20px 3px #baffb5',
	    	'border': '1px solid #baffb5',
	    	'outline': '0px'
		});
	}

	//--------------------

	if(!user_name.match(regVname))
	{
		$('#name').css({
			'boxShadow': 'inset 0 0 20px 3px #ff9090',
	    	'border': '1px solid #ff9090',
	    	'outline': '0px'
		});
	}
	
	if(!user_phone.match(regVphone))
	{
		$('#phone').css({
			'boxShadow': 'inset 0 0 20px 3px #ff9090',
	    	'border': '1px solid #ff9090',
	    	'outline': '0px'
		});
	}

	if(!user_email.match(regVemail))
	{
		$('#email').css({
			'boxShadow': 'inset 0 0 20px 3px #ff9090',
	    	'border': '1px solid #ff9090',
	    	'outline': '0px'
		});
	}
};

});