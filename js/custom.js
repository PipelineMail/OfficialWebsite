function indexSelectUseActive(id){
    var personalUse = document.getElementById("index_select_use_personal");
    var dappUse = document.getElementById("index_select_use_dapp");
    var personalStep = document.getElementById("index_select_use_personal_step");
    var dappStep = document.getElementById("index_select_use_dapp_step");
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaa")
    console.log(personalUse.toString())
    if (id == "personal") {
        personalUse.className = "index_select_use_active"
        personalStep.style.display = "inline";
        dappUse.className='index_select_use';
        dappStep.style.display = "none";
    } else {
        personalUse.className = "index_select_use"
        personalStep.style.display = "none";
        dappUse.className='index_select_use_active';
        dappStep.style.display = "inline";
    }
}