function indexSelectUseActive(id){
    var personalUse = document.getElementById("index_select_use_personal");
    var dappUse = document.getElementById("index_select_use_dapp");
    var personalStep = document.getElementById("index_select_use_personal_step");
    var personalExplain = document.getElementById("index_select_use_explain_personal");
    var dappStep = document.getElementById("index_select_use_dapp_step");
    var dappExplain = document.getElementById("index_select_use_explain_dapp");
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaa")
    console.log(personalUse.toString())
    if (id == "personal") {
        personalUse.className = "index_select_use_active"
        personalStep.style.display = "inline";
        personalExplain.style.display = "inline";
        dappUse.className='index_select_use';
        dappStep.style.display = "none";
        dappExplain.style.display = "none";
    } else {
        personalUse.className = "index_select_use"
        personalStep.style.display = "none";
        personalExplain.style.display = "none";
        dappUse.className='index_select_use_active';
        dappStep.style.display = "inline";
        dappExplain.style.display = "inline";
    }
}