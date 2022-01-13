let tem = "";
let open = true;
let tems = '<div class="modelTost">' +
	'<div class="modelTostChile">' +
	'<div class="swiper-wrapper"></div>' +
	'<div class="swiper-button-next">' +
	'publisher&nbsp;: &nbsp;PipeMail<br><br>' +
	'contract&nbsp;&nbsp;&nbsp;: &nbsp;0x584D...4b8D<img src="./assets/img/copy.png"><br><br>' +
	'token id&nbsp;&nbsp;&nbsp;: &nbsp;11</div>' +
	'</div>' +
	'</div>'
let minX = 678;
let maxX = 1224;
let minY = 244;
let maxY = 566;

$('.stamp_big_view').click(function () {
	tem = ''
	$('.stamp_big_view1').append(tems);
	tem += "<div class='swiper-slide'><img src='assets/img/stamp.jpg' style='height: 285px;width: 260px'></div>"
	$(".swiper-wrapper").append(tem);
	$('.modelTost').fadeIn(500);
	$('.swiper-container').children('.swiper-notification').eq(0).siblings('.swiper-notification').remove()
})
$('body').click(function (e) {
	if (!$(".stamp_big_view").is(e.target)&&!((e.clientX > minX && e.clientX < maxX) && (e.clientY > minY && e.clientY < maxY))) {
		$('.modelTost').remove();
	}
})

$('#button-compose').click(function (e) {
	document.getElementById("new-mail").style.display = "inline";
	document.getElementById("new-mail-advantage").style.display = "inline";
	document.getElementById("recent-mails").style.display = "none";
	document.getElementById("mail-details").style.display = "none";
})

$('#close-compose').click(function (e) {
	if(document.getElementById("new-mail").style.display=="inline") {
		if (document.getElementById("editor1").innerText.trim()==='' || confirm("Are you sure you want to abandon this mail?")) {
			document.getElementById("editor1").innerText = '';
			document.getElementById("new-mail").style.display = "none";
			document.getElementById("new-mail-advantage").style.display = "none";
			document.getElementById("recent-mails").style.display = "inline";
			document.getElementById("mail-details").style.display = "inline";
		}
	}
})

function eth_uint_select(){
	var selectedValue = document.getElementById("eth_uint_select").value;
	var innerHTML
	switch (selectedValue) {
		case 'Wei':
			innerHTML = '1 ETH = 10<sup>18</sup>&nbsp;Wei';
			break;
		case 'Kwei':
			innerHTML = '1 ' + selectedValue + ' = 10<sup>3</sup>&nbsp;Wei';
			break;
		case 'Mwei':
			innerHTML = '1 ' + selectedValue + ' = 10<sup>6</sup>&nbsp;Wei';
			break;
		case 'Gwei':
			innerHTML = '1 ' + selectedValue + ' = 10<sup>9</sup>&nbsp;Wei';
			break;
		case 'Microether':
			innerHTML = '1 ' + selectedValue + ' = 10<sup>12</sup>&nbsp;Wei';
			break;
		case 'Milliether':
			innerHTML = '1 ' + selectedValue + ' = 10<sup>15</sup>&nbsp;Wei';
			break;
		default:
			innerHTML = '1 ETH = 1 Ether = 10<sup>18</sup>&nbsp;Wei';
	}
	document.getElementById("eth_uint_select_info").innerHTML=innerHTML
}

function mailsList(list){
	for(var i in list){

	}
}