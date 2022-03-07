var isConnected = false;
var userAddressFull
async function setProfile(options) {
    var signer = await
    web3.eth.getCoinbase();
    console.log(signer)
    var name = 'SetProfile';
    var verifyingContract = '0x0000000000000000000000000000000000000000';
    var description = 'Please sign this message for setting profile..'
    var owner = signer;
    var chainId = await
    ethereum.request({method: 'eth_chainId'});
    console.log(chainId)
    var timestamp = new Date().getTime();
    var contractAddress = options[0];
    var tokenId = options[1];
    const msgParams = JSON.stringify({
        domain: {
            chainId: chainId,
            name: name,
            verifyingContract: verifyingContract,
            version: '1',
        },
        message: {
            description: description,
            timestamp: timestamp,
            owner: owner,
            contractAddress: contractAddress,
            tokenId: tokenId,
        },
        primaryType: 'SetProfile',
        types: {
            // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
            EIP712Domain: [
                {name: 'name', type: 'string'},
                {name: 'version', type: 'string'},
                {name: 'chainId', type: 'uint256'},
                {name: 'verifyingContract', type: 'address'},
            ],
            // Refer to PrimaryType
            SetProfile: [
                {name: 'description', type: 'string'},
                {name: 'timestamp', type: 'uint256'},
                {name: 'owner', type: 'address'},
                {name: 'contractAddress', type: 'address'},
                {name: 'tokenId', type: 'uint256'},
            ],
        },
    });
    return ethSignTypedDataV4(signer, msgParams)
}


async function UserAuthentication() {
    var signer = document.getElementById("user_address_full").innerHTML;
    if(signer.length!=42){
        alert("Please connect to MetaMask first.")
    }
    console.log(signer)
    var name = 'UserAuthentication';
    var verifyingContract = '0x0000000000000000000000000000000000000000';
    var description = 'Please sign this message every 8 hours for better use experience.'
    var chainId = await
    ethereum.request({method: 'eth_chainId'});
    var expiredTime = formatSignTime();
    const msgParams = JSON.stringify({
        domain: {
            chainId: chainId,
            name: name,
            verifyingContract: verifyingContract,
            version: '1',
        },
        message: {
            description: description,
            expiredTime: expiredTime,
            operator: signer,
        },
        primaryType: 'UserAuthentication',
        types: {
            // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
            EIP712Domain: [
                {name: 'name', type: 'string'},
                {name: 'version', type: 'string'},
                {name: 'chainId', type: 'uint256'},
                {name: 'verifyingContract', type: 'address'},
            ],
            // Refer to PrimaryType
            UserAuthentication: [
                {name: 'description', type: 'string'},
                {name: 'expiredTime', type: 'string'},
                {name: 'operator', type: 'address'},
            ],
        },
    });
    return ethSignTypedDataV4(signer, msgParams)
}


async function ethSignTypedDataV4(address, msgParams) {
    var method = 'eth_signTypedData_v4';
    var params = [address, msgParams];
    var signature = await
    web3.currentProvider.sendAsync(
        {
            method,
            params,
            address,
        },
        function (err, result) {
            console.log(result);
        });
    console.log(signature);
    return signature;
}