//配列に服を格納して表示させています
// {
//     kind : "追加したい服のジャンル",
//     name : "服の名前",
//     max_temp : その服の最大温度,
//     min_temp : その服の最小温度
// }
const female_cloth=[
    {
        kind : "inner",
        name : "キャミソール",
        max_temp : 40,
        min_temp : 7,
    },
    {
        kind : "inner",
        name : "タンクトップ",
        max_temp : 29,
        min_temp : -3,
    },
    {
        kind : "inner",
        name : "防寒インナー",
        max_temp : 13,
        min_temp : 7,
    },
    {
        kind : "inner",
        name : "リブニット",
        max_temp : 40,
        min_temp : 18,
    },
    {
        kind : "tops",
        name : "ブラウス",
        max_temp : 40,
        min_temp : 7,
    },
    {
        kind : "tops",
        name : "パーカー",
        max_temp : 18,
        min_temp : -3,
    },
    {
        kind : "tops",
        name : "セーター",
        max_temp : 13,
        min_temp : -3,
    },
    {
        kind : "tops",
        name : "Tシャツ",
        max_temp : 40,
        min_temp : 18,
    },
    {
        kind : "tops",
        name : "長袖シャツ",
        max_temp : 23,
        min_temp : -3,
    },
    {
        kind : "tops",
        name : "ノースリーブ",
        max_temp : 40,
        min_temp : 18,
    },
    {
        kind : "onepiece",
        name : "ジャンパースカート",
        max_temp : 40,
        min_temp : -3,
    },
    {
        kind : "onepiece",
        name : "シャツワンピース",
        max_temp : 40,
        min_temp : 7,
    },
    {
        kind : "onepiece",
        name : "Tシャツワンピース",
        max_temp : 40,
        min_temp : 7,
    },
    {
        kind : "onepiece",
        name : "ニットワンピース",
        max_temp : 40,
        min_temp : 23,
    },
    {
        kind : "onepiece",
        name : "キャミソールワンピース",
        max_temp : 40,
        min_temp : 23,
    },
    {
        kind : "onepiece",
        name : "ニットワンピース",
        max_temp : 13,
        min_temp : -3,
    },
    {
        kind : "outer",
        name : "コート",
        max_temp : 13,
        min_temp : -3,
    },
    {
        kind : "outer",
        name : "カーディガン",
        max_temp : 23,
        min_temp : 7,
    },
    {
        kind : "outer",
        name : "ジャンバー",
        max_temp : 18,
        min_temp : -3,
    },
    {
        kind : "outer",
        name : "ダウン",
        max_temp : 13,
        min_temp : -3,
    },
    {
        kind : "outer",
        name : "Gジャン",
        max_temp : 29,
        min_temp : 12,
    },
    {
        kind : "pants",
        name : "ジーンズ",
        max_temp : 23,
        min_temp : -3,
    },
    {
        kind : "pants",
        name : "ジャージ",
        max_temp : 29,
        min_temp : -3,
    },
    {
        kind : "pants",
        name : "ショートパンツ",
        max_temp : 40,
        min_temp : 23,
    },
    {
        kind : "pants",
        name : "ワイドパンツ",
        max_temp : 29,
        min_temp : -3,
    },
    {
        kind : "pants",
        name : "ワイドパンツ",
        max_temp : 29,
        min_temp : -3,
    },
    {
        kind : "pants",
        name : "オーバーオール",
        max_temp : 29,
        min_temp : -3,
    },
    {
        kind : "pants",
        name : "スキニージーンズ",
        max_temp : 29,
        min_temp : -3,
    },
    {
        kind : "pants",
        name : "テーパードパンツ",
        max_temp : 29,
        min_temp : 7,
    },
    {
        kind : "skirt",
        name : "ミニスカート",
        max_temp : 40,
        min_temp : 23,
    },
    {
        kind : "skirt",
        name : "膝丈スカート",
        max_temp : 40,
        min_temp : 18,
    },
    {
        kind : "skirt",
        name : "ミモレ丈スカート",
        max_temp : 40,
        min_temp : 7,
    },
    {
        kind : "skirt",
        name : "ロング丈スカート",
        max_temp : 40,
        min_temp : 7,
    }
];


function addElement(){
    // const div = document.createElement("div");
    // div.id = "cloth"

    const label = document.createElement("label");

    const input = document.createElement("input");
    input.setAttribute("type","checkbox");
    input.setAttribute("value",female_cloth[i].name);
    input.setAttribute("name",female_cloth[i].kind);
    input.setAttribute("id","cloth" + i);

    const name = document.createTextNode(female_cloth[i].name);

    label.appendChild(input);
    label.appendChild(name);
    //div.appendChild(label);

    if(female_cloth[i].kind == "inner"){
        const cloth_label = document.getElementById("inner");
        cloth_label.appendChild(label);
    }else if(female_cloth[i].kind == "tops"){
        const cloth_label =document.getElementById("tops");
        cloth_label.appendChild(label);
    }else if(female_cloth[i].kind == "onepiece"){
        const cloth_label = document.getElementById('onepiece');
        cloth_label.appendChild(label);
    }else if(female_cloth[i].kind == "outer"){
        const cloth_label = document.getElementById("outer");
        cloth_label.appendChild(label);
    }else if(female_cloth[i].kind == "pants"){
        const cloth_label = document.getElementById("pants");
        cloth_label.appendChild(label);
    }else if(female_cloth[i].kind == "skirt"){
        const cloth_label = document.getElementById("skirt");
        cloth_label.appendChild(label);
    }
}

for(var i = 0; i<female_cloth.length; i++){
    addElement();
}