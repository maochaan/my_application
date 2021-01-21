function man_next(){
    var inner_number = 0;
    var tops_number = 0;
    var tops2_number = 0;
    var outer_number = 0;
    var pants_number = 0;
    const inner_arry = [];
    const tops_arry = [];
    const tops2_arry = [];
    const outer_arry = [];
    const pants_arry = [];
    const inner_kind = document.man__.inner;
    const tops_kind = document.man__.tops;
    const tops2_kind = document.man__.tops2;
    const outer_kind = document.man__.outer;
    const pants_kind = document.man__.pants;
    const a = inner_kind.length;
    const b = a + tops_kind.length;
    const c = b + tops2_kind.length;
    const d = c + outer_kind.length;
    const e = d + pants_kind.length;

    for (var i = 0; i < a; i++){
        if($("#cloth" + i).prop("checked") == true){ 
            inner_arry.push({name:man_cloth[i].name,max:man_cloth[i].max_temp,
                            min:man_cloth[i].min_temp,photo:man_cloth[i].photo});
            inner_number += 1;
        }
    }for (var j = i; j < b; j++){
        if($("#cloth" + j).prop("checked") == true){ 
            tops_arry.push({name:man_cloth[j].name,max:man_cloth[j].max_temp,
                            min:man_cloth[j].min_temp,photo:man_cloth[j].photo});
            tops_number += 1;
        }
    }for (var k = j;k < c; k++){
        if($("#cloth" + k).prop("checked") == true){
            tops2_arry.push({name:man_cloth[k].name,max:man_cloth[k].max_temp,
                             min:man_cloth[k].min_temp,photo:man_cloth[k].photo});
            tops2_number += 1;
        }
    }
    for (var l = k; l < d; l++){
        if($("#cloth" + l).prop("checked") == true){
            outer_arry.push({name:man_cloth[l].name,max:man_cloth[l].max_temp,
                            min:man_cloth[l].min_temp,photo:man_cloth[l].photo});
            outer_number += 1;
        }
    }for (var m = l; m < e; m++){
        if($("#cloth" + m).prop("checked") == true){
            pants_arry.push({name:man_cloth[m].name,max:man_cloth[m].max_temp,
                            min:man_cloth[m].min_temp,photo:man_cloth[m].photo});
            pants_number += 1;
        }
    }
    //localStorage.setItem('bring_cloth', inner_arry + tops_arry + outer_arry + pants_arry);
    localStorage.setItem("bring_inner",JSON.stringify(inner_arry));
    localStorage.setItem("bring_tops",JSON.stringify(tops_arry));
    localStorage.setItem("bring_tops2",JSON.stringify(tops2_arry));
    localStorage.setItem("bring_outer",JSON.stringify(outer_arry));
    localStorage.setItem("bring_pants",JSON.stringify(pants_arry));
    if(inner_number == 0){
        window.alert("インナーを選択してください。");
		return false;
    }else if(tops_number == 0 || tops2_number == 0){
        window.alert("トップスを選択してください。");
		return false;
    }else if(outer_number == 0){
        window.alert("アウターを選択してください。");
		return false;
    }else if(pants_number == 0){
        window.alert("パンツを選択してください。");
		return false;
    }else{
        location.href = "../kensakugamen/main/main.html";
    }
}
function female_next(){
    var inner_number = 0;
    var tops_number = 0;
    var outer_number = 0;
    var onepiece_number = 0;
    var pants_number = 0;
    var skirt_number = 0;
    const inner_arry = [];
    const tops_arry = [];
    const outer_arry = [];
    const onepiece_arry = [];
    const pants_arry = [];
    const skirt_arry = [];
    const tops_kind = document.female__.tops;
    const outer_kind = document.female__.outer;
    const onepiece_kind = document.female__.onepiece;
    const pants_kind = document.female__.pants;
    const skirt_kind = document.female__.skirt;
    const inner_kind = document.female__.inner;
    const a = inner_kind.length;
    const b = a + tops_kind.length;
    const c = b + onepiece_kind.length;
    const d = c + outer_kind.length;
    const e = d + pants_kind.length;
    const f = e + skirt_kind.length;
    for (var i = 0; i < a; i++){
        if($("#cloth" + i).prop("checked") == true){ 
            inner_arry.push({name:female_cloth[i].name,max:female_cloth[i].max_temp,min:female_cloth[i].min_temp,kind:female_cloth[i].kind});
            inner_number += 1;
        };
    }for (var j = i; j < b; j++){
        if($("#cloth" + j).prop("checked") == true){ 
            tops_arry.push({name:female_cloth[j].name,max:female_cloth[j].max_temp,min:female_cloth[j].min_temp,kind:female_cloth[i].kind});
            tops_number += 1;
        }
    }for (var k = j; k < c; k++){
        if($("#cloth" + k).prop("checked") == true){ 
            onepiece_arry.push({name:female_cloth[k].name,max:female_cloth[k].max_temp,min:female_cloth[k].min_temp,kind:female_cloth[i].kind});
            onepiece_number += 1;
        }
    }for (var l = k; l < d; l++){
        if($("#cloth" + l).prop("checked") == true){
            outer_arry.push({name:female_cloth[l].name,max:female_cloth[l].max_temp,min:female_cloth[l].min_temp,kind:female_cloth[i].kind});
            outer_number += 1;
        }
    }
    for (var m = l; m < e; m++){
        if($("#cloth" + m).prop("checked") == true){
            pants_arry.push({name:female_cloth[m].name,max:female_cloth[m].max_temp,min:female_cloth[m].min_temp,kind:female_cloth[i].kind});
            pants_number += 1;
        }
    }for (var n = m; n < f; n++){
        if($("#cloth" + n).prop("checked") == true){
            skirt_arry.push({name:female_cloth[n].name,max:female_cloth[n].max_temp,min:female_cloth[n].min_temp,kind:female_cloth[i].kind});
            skirt_number += 1;
        }
    }

    //localStorage.setItem('bring_cloth', inner + "," + tops_arry + "," + outer_arry + "," + onepiece_arry + "," + pants_arry + "," + skirt_arry);
    localStorage.setItem("bring_inner_cloth",JSON.stringify(inner_arry));
    localStorage.setItem("bring_tops_cloth",JSON.stringify(tops_arry));
    localStorage.setItem("bring_outer_cloth",JSON.stringify(outer_arry));
    localStorage.setItem("bring_pants_cloth",JSON.stringify(onepiece_arry,pants,skirt_arry));
    // localStorage.setItem("bring_pants_cloth",JSON.stringify(pants_arry));
    // localStorage.setItem("bring_skirt_cloth",JSON.stringify(skirt_arry));
    if(inner_number == 0){
        window.alert("インナーを選択してください。");
		return false;
    }else if(tops_number == 0){
        window.alert("トップスを選択してください。");
		return false;
    }else if(outer_number == 0){
        window.alert("アウターを選択してください。");
		return false;
    }else if(onepiece_number == 0){
        window.alert("ワンピースを選択してください");
        return false;
    }else if(pants_number == 0){
        window.alert("パンツを選択してください。");
		return false;
    }else if(skirt_number == 0){
        window.alert("スカートを選択してください。");
        return false;
    }else{
        // document.getElementById("span2").textContent = inner_arry + "," + tops_arry + "," + outer_arry + "," + onepiece_arry + "," + pants_arry + "," + skirt_arry;
        location.href = "kensakugamen/main/main.html";
    }
}

function checkForm(){
    if(document.form1.weather.value == "" || document.weahter.input02.value == "" || document.weahter.onepoint.value == ""){
        alert("必須項目を入力して下さい。");
	    return false;
    }else{
	    return true;
    }
}