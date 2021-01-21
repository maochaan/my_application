function clickBtn1(){
    const arr2 = [];
    const sex1 = document.sex.sex;
    const arr3 = [];
    const taisitu2 = document.taisitu.kimoti;
    for (let i = 0; i < sex1.length; i++){
        if(sex1[i].checked){ //(sex1[i].checked === true)と同じ
            arr2.push(sex1[i].value);
        }
    }
    for(let j = 0; j < taisitu2.length;j++){
        if(taisitu2[j].checked){
            arr3.push(taisitu2[j].value);
        }
    }
    document.getElementById("sex1").textContent = arr2;
    localStorage.setItem('sex_data',JSON.stringify(arr2));
    document.getElementById("taisitu1").textContent = arr3;
    localStorage.setItem("taisitu_data",arr3);
    if(sex1[0].checked){
        location.href = "cloth_man.html";
    }else if(sex1[1].checked){
        location.href = "cloth_female.html";
    }else{
        window.alert("性別を選択してください。");
		return false;
    }
}
function clickBtn2(){
    if(!localStorage.getItem("sex_data")){
        arr2 = "nondata";
    }else{
        arr2 = localStorage.getItem("sex_data");
    }
    if(!localStorage.getItem("taisitu_data")){
        arr3 = 'nondata';
    }else{
        arr3 = localStorage.getItem('taisitu_data');
    }
    console.log(`sex_data= ${arr2}`);
    document.getElementById("sex_out").innerHTML = arr2;
    console.log(`taisitu_data= ${arr3}`);
    document.getElementById("taisitu_out").innerHTML = arr3;
}
function risetbutton(){
    localStorage.clear()
    location.href = "start.html";
}
function clickBtn3(){
    if(!localStorage.getItem('bring_cloth')) {
        arry1= "データがありません";
    } else {
        arry1 = localStorage.getItem('bring_cloth');
    }
    if(!localStorage.getItem("sex_data")){
        arr3 = "nondata";
    }else{
        arr3 = localStorage.getItem("sex_data");
    }
    if(!localStorage.getItem("taisitu_data")){
        arr4 = 'nondata';
    }else{
        arr4 = localStorage.getItem('taisitu_data');
    }
    console.log(`bring_cloth= ${arry1}`);
    document.getElementById("bring_cloth_out").innerHTML = arry1;
    console.log(`sex_data= ${arr3}`);
    document.getElementById("sex_out").innerHTML = arr3;
    console.log(`taisitu_data= ${arr4}`);
    document.getElementById("taisitu_out").innerHTML = arr4;
}

$(document).ready(function(){
    $('#all').on('click',function() {
        $('input[type="checkbox"]').prop('checked', true);
    });
});

$(document).ready(function(){
    $("#non_all").on("click",function(){
        $('input[type="checkbox"]').prop("checked",false)
    });
});

function next_page(){
    location.href = "anke-to1.html";
}

function next_point(){
    if(status[i] != 0){
        location.href = "kensakugamen/kensaku.html";
    }else{
        window.alert("アンケートに答えてください");
        return false;
    }
}

