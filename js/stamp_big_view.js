let minX = 678;
let maxX = 1224;
let minY = 244;
let maxY = 566;
$('.stamp_big_view').click(function () {
    var publisher = document.getElementById("stamp_publisher").innerText;
    var address = document.getElementById("stamp_address").innerText;
    var img = document.getElementById("stamp_img").innerText;
    var id = document.getElementById("stamp_id").innerText;
    document.getElementById("stamp_big_view_publisher").innerHTML = 'publisher&nbsp;: &nbsp;' + publisher + '<br><br>';
    document.getElementById("stamp_big_view_address").innerHTML = 'contract&nbsp;&nbsp;&nbsp;: &nbsp;' + address.substring(0, 6) + '...' + address.substring(38) + '<img src="/img/copy.png"><br><br>';
    document.getElementById("stamp_big_view_id").innerHTML = 'token id&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;' + id;
    document.getElementById("stamp_big_view_img").src = img;
    document.getElementById("stamp_big_view1").style.display = "inline"
    $('.modelTost').fadeIn(500);
    $('.swiper-container').children('.swiper-notification').eq(0).siblings('.swiper-notification').remove()
})
$('body').click(function (e) {
    if (!$(".stamp_big_view").is(e.target) && !((e.clientX > minX && e.clientX < maxX) && (e.clientY > minY && e.clientY < maxY))) {
        document.getElementById("stamp_big_view1").style.display = "none";
    }
})

$('#button-compose').click(function (e) {
    document.getElementById("new-mail").style.display = "inline";
    document.getElementById("new-mail-advantage").style.display = "inline";
    document.getElementById("recent-mails").style.display = "none";
    document.getElementById("mail-details").style.display = "none";
})

$('#close-compose').click(function (e) {
    if (document.getElementById("new-mail").style.display == "inline") {
        if (document.getElementById("editor1").innerText.trim() === '' || confirm("Are you sure you want to abandon this mail?")) {
            document.getElementById("editor1").innerText = '';
            document.getElementById("new-mail").style.display = "none";
            document.getElementById("new-mail-advantage").style.display = "none";
            document.getElementById("recent-mails").style.display = "inline";
            document.getElementById("mail-details").style.display = "inline";
        }
    }
})

function eth_uint_select() {
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
    document.getElementById("eth_uint_select_info").innerHTML = innerHTML
}

function mailsList(list) {
    for (var i in list) {

    }
}

async function connectWallet() {
    var coinbase;
    if (window.ethereum) {
        window.ethereum.enable();
        web3 = new Web3(web3.currentProvider);
    } else if (window.web3) {
        window.web3.enable();
        web3 = new Web3(web3.currentProvider);
    } else {
        alert("Please install MetaMask!")
    }
    coinbase = await web3.eth.getCoinbase();
    document.getElementById("connect_wallet").style.display = 'none';
    document.getElementById("user_address").style.display = 'inline';
    const seed = coinbase.toLowerCase();
    const canvas = createIcon({
        seed,
        size: 8,
        scale: 6.4
    });
    document.getElementById("user_address_icon").appendChild(canvas);
    document.getElementById("user_address_full").innerHTML = coinbase;
    userAddressFull = coinbase;
    // $('#connect_wallet').style.display = 'none';
    // $('#user_address').style.display = 'inline';
    // $('#user_address').innerText = result;
    document.getElementById("user_address_text").innerHTML = formatUserAddress(7, 37, coinbase);
    isConnected = true;
}

function copyToClipboard(s) {
    var content = document.getElementById(s).innerText;
    if (window.clipboardData) {
        window.clipboardData.setData('text', content);
    } else {
        (function (content) {
            document.oncopy = function (e) {
                e.clipboardData.setData('text', content);
                e.preventDefault();
                document.oncopy = null;
            }
        })(content);
        document.execCommand('Copy');
    }
}