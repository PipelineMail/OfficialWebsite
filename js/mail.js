var map = new Map();
map.set(0, 'alpha')
map.set(1, 'alpha-half')
map.set(2, 'delta')
map.set(3, 'delta-half')
map.set(4, 'primary')
map.set(5, 'primary-half')
map.set(6, 'secondary')
map.set(7, 'secondary-half')
map.set(8, 'zeta')
map.set(9, 'zeta-half')
map.set(10, 'epsilon-half')
map.set(11, 'gamma-half')

function getMails(chainId, operator, authSignature, page, pageSize) {
    $.ajax({
        url: '/mail/inbox',
        type: 'get',
        headers: {
            'chain-id': chainId,
            "operator": operator,
            "auth-signature": authSignature,
        },
        data: {'page': page, 'page-size': pageSize},
        success: function (result) {
            console.log(result)
            $('#mail-item--summary').innerHTML = ''
            var data = result.data;
            $.each(data.data, function (index, value) {
                var isRead = value['is-read']
                var subject = value['subject']
                var isStarred = value['starred']
                var stampUrl = value['stamp-url']
                var withAsset = value['with-asset']
                var userProfile = ''
                console.log(userProfile)
                var sendTime = formatTime(value['send-time'])
                var withAttachment = value['with-attachment']
                var sendAddress = formatUserAddress(3, 40, value['send-address'])
                var li = '<li class="mx-mail-box__list-item">' +
                    '<a href="#" class="t-link mx-mail-box__link">' +
                    '<div class="messages__msg flex-wrap">' +
                    '<div class="messages__avatar messages__avatar-empty t-bg-' + map.get(index % 12) + ' ' + sendAddress + '" style="margin-top: 10px">' +
                    (userProfile === undefined || userProfile.length === 0 ? '' : '<img src="' + userProfile + '" style="height: 40px;width: 40px;">') +
                    // '<div class="messages__avatar-replacer text-uppercase" style="display: inline">as</div>'+
                    (isRead ? '' : '<div class="messages__avatar-notification messages__avatar-notification--active"></div>') +
                    '</div>' +
                    '<div class="messages__content messages__content--unseen">' +
                    '<div class="messages__title">' +
                    '<span class="messages__author text-capitalize t-text-heading">' + sendAddress +
                    '</span>' +
                    '<span class="messages__time text-capitalize t-text-heading">' + sendTime +
                    '</span>' +
                    '</div>' +
                    '<div class="messages__content-body">' +
                    '<span class="messages__preview text-capitalize t-text-heading" style="width: 255px">' + (subject === undefined || subject.length === 0 ? 'This mail has no subject.' : subject) +
                    '</span>' +
                    '<ul class="t-list d-flex align-items-center">' +
                    '<li>' +
                    '<img src="' + stampUrl + '" style="height: 35px;width: 31px;margin-left: 3px;">' +
                    '</li>' +
                    '<li>' +
                    '<span class="sm-text t-text-heading">' +
                    '<img src="/img/' + (withAsset ? '' : 'no-') + 'asset.png" title="' + (withAsset ? '' : 'No ') + 'Digital Asset" alt="Stamp Image" style="width: 22px;height: 22px;margin-top: 1px;margin-right: -1px">' +
                    '</span>' +
                    '</li>' +
                    '<li class="t-mr-3">' +
                    '<span class="sm-text t-text-heading">' +
                    '<img src="/img/' + (withAttachment ? '' : 'no-') + 'paperclip.png" title="' + (withAsset ? '' : 'No ') + 'Attachment" alt="Stamp Image" style="width: 16px;height: 16px;margin-right:2px">' +
                    '</span>' +
                    '</li>' +
                    '<li>' +
                    '<span class="sm-text t-text-heading">' +
                    '<img src="/img/' + (isStarred ? '' : 'no-') + 'star.png" style="width: 16px;height: 16px;margin-top: -1px">' +
                    '</span>' +
                    '</li>' +
                    '</ul>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</a>' +
                    '</li>';
                console.log(li)
                $('#mail-item--summary').append(li)
            });
        },
        error: function (date) {
            console.log('error' + data)
        }
    })
}

function formatUserAddress(prefixEnd, suffixStart, userAddress) {
    userAddress = userAddress.substring(0, prefixEnd) + '...' + userAddress.substring(suffixStart);
    return userAddress;
}

function formatNumber(number) {
    if (number > 9) {
        return number;
    } else {
        return '0' + number;
    }
}

function formatSignTime() {
    var date = new Date()
    var year = date.getUTCFullYear()
    var month = date.getUTCMonth() + 1
    var day = date.getUTCDate()
    var hour = date.getUTCHours()
    var result = year + '-'
    result = result + formatNumber(month) + "-"
    result = result + formatNumber(day) + " "
    if (hour >= 16) {
        result = result + "23:59:59 UTC"
    } else if (hour >= 8) {
        result = result + "16:00:00 UTC"
    } else {
        result = result + "08:00:00 UTC"
    }
    return result
}

function formatTime(seconds) {
    var date = new Date(seconds)
    var year = formatNumber(date.getUTCFullYear())
    var month = formatNumber(date.getUTCMonth() + 1)
    var day = formatNumber(date.getUTCDate())
    var hour = formatNumber(date.getUTCHours())
    var minute = formatNumber(date.getUTCMinutes())
    var second = formatNumber(date.getUTCSeconds())
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}

async function sendMail() {
    var receivers = getReceivers();
    console.log("receivers:" + receivers)
    console.log("receivers:" + receivers.length)
    console.log("receivers:" + receivers.size)
    receivers.push(userAddressFull)
    var ipfsFile = new Object();
    ipfsFile["sender"] = userAddressFull;
    ipfsFile["receiver"] = {"type": "enumeration", "details": {"amount": receivers.length, "list": receivers}};
    var stamp = new Object();
    stamp["address"] = $('#write_mail_stamp_address').text().replace(/\ +/g, "").replace(/[\r\n]/g, "");
    stamp["tokenId"] = $('#write_mail_stamp_token_id').text().replace(/\ +/g, "").replace(/[\r\n]/g, "");
    ipfsFile["stamp"] = stamp;
    ipfsFile["asset"] = false;
    ipfsFile["attachment"] = true;
    ipfsFile["version"] = "beta";
    ipfsFile["ciphertexts"] = await encryptMetadata(receivers)
    console.log(JSON.stringify(ipfsFile));
    calculateHash(new File([JSON.stringify(ipfsFile)], "mail"))
}

function getReceivers() {
    var toText = $('#send_mail_to').val()
    // if(toText === ''){
    //
    // }
    var receivers = toText.split(";");
    if (receivers.length === 0) {
        alert("Please fill in the recipient's address!")
    }
    return receivers;
}

async function encryptMetadata(addresses) {
    var metadata = getMailMetadata();
    var publicKeys = await getPublicKeys(addresses)
    console.log("publicKeys:" + publicKeys)
    var ciphertexts = new Object();
    //can not find receiver's publicKey
    // if(publicKeys === '[]'){
    // }
    for (var i = 0; i < publicKeys.length; i++) {
        ciphertexts[addresses[i]] = encryptData(publicKeys[i], metadata)
    }
    return ciphertexts;
}

function getMailMetadata() {
    var metadata = new Object();
    metadata["subject"] = $('#send_mail_subject').val();
    metadata["content"] = $('#editor1').html();
    metadata["attachments"] = attachments;
    metadata["associatedMails"] = getAssociatedMails();
    console.log(JSON.stringify(metadata));
    return JSON.stringify(metadata);
}

function getAssociatedMails() {
    var associatedMails = [];
    $('.associatedMail').each(function (e) {
        var senderMail = $(this).text().split("-");
        associatedMails.push({"sender": senderMail[0], "index": senderMail[1], "type": "forward"})
    })
    return associatedMails;
}

async function getPublicKeys(addresses) {
    console.log("addresses:" + addresses)
    var formData = new FormData();
    formData.append("addresses", JSON.stringify(addresses));
    var publicKeys;
    await $.ajax({
        url: '/user/pubkey', /*接口域名地址*/
        type: 'post',
        data: formData,
        headers: {
            "chain-id": "1",
            "operator": userAddressFull,
            "auth-signature": ""
        },
        contentType: false,
        processData: false,
        success: function (res) {
            console.log(res.data);
            if (res.code == 200) {
                publicKeys = res.data;
            }
        }
    })
    if (publicKeys.length != addresses.length) {
        alert("Please ")
    }
    return publicKeys;
}