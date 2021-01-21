//配列に服を格納して表示させています
// {
//     kind : "追加したい服のジャンル",
//     name : "服の名前",
//     max_temp : その服の最大温度,
//     min_temp : その服の最小温度
//     photo : 画像のURL
//             → 相対パスへ変更。このファイルと同じ階層に画像のフォルダがある前提の書き方です
// }
const man_cloth=[
    {
        kind : "inner",
        name : "タンクトップ",
        max_temp : 40,
        min_temp : 7,
        photo : "./clothes_image/Tank_top.png",
    },
    {
        kind : "inner",
        name : "Tシャツ",
        max_temp : 40,
        min_temp : 7,
        photo : "./clothes_image/t-shirt.png",
    },
    {
        kind : "inner",
        name : "防寒インナー",
        max_temp : 13,
        min_temp : -50,
        photo : "./clothes_image/Cold_protection_inner_man.png",
    },
    {
        kind : "tops",
        name : "長袖シャツ",
        max_temp : 40,
        min_temp : -50,
        photo : "./clothes_image/Long_t-shirt.png",
    },
    {
        kind : "tops",
        name : "Tシャツ",
        max_temp : 40,
        min_temp : -50,
        photo : "./clothes_image/t-shirt.png",
    },
    {
        kind : "tops",
        name : "ポロシャツ",
        max_temp : 40,
        min_temp : -50,
        photo : "./clothes_image/Polo_shirt.png",
    },
    {
        kind : "tops2",
        name : "セーター",
        max_temp : 13,
        min_temp : -50,
        photo : "./clothes_image/sweater.png",
    },
    {
        kind : "tops2",
        name : "スウェット",
        max_temp : 23,
        min_temp : -50,
        photo : "./clothes_image/sweat.png",
    },
    {
        kind : "tops2",
        name : "パーカー",
        max_temp :18,
        min_temp : -50,
        photo : "./clothes_image/parker.png",
    },
    {
        kind : "outer",
        name : "革ジャン",
        max_temp : 23,
        min_temp : -50,
        photo : "./clothes_image/Leather_jacket.png",
    },
    {
        kind : "outer",
        name : "コート",
        max_temp : 13,
        min_temp : -50,
        photo : "./clothes_image/Chester_coat.png",//仮でチェスターコートにしてる
    },
    {
        kind : "outer",
        name : "カーディガン",
        max_temp : 23,
        min_temp : 7,
        photo : "./clothes_image/cardigan.png",
    },
    {
        kind : "outer",
        name : "ジャンバー",
        max_temp : 18,
        min_temp : -50,
        photo : "./clothes_image/Tank_top.png",//ジャンバーは後回し。ごめん
    },
    {
        kind : "outer",
        name : "ダウン",
        max_temp : 13,
        min_temp : -50,
        photo : "./clothes_image/Down_jacket.png",
    },
    {
        kind : "outer",
        name : "Gジャン",
        max_temp : 29,
        min_temp : 12,
        photo : "./clothes_image/jean_jacket.png",
    },
    {
        kind : "pants",
        name : "ジーンズ",
        max_temp : 23,
        min_temp : -50,
        photo : "./clothes_image/jeans.png",
    },
    {
        kind : "pants",
        name : "ジャージ",
        max_temp : 29,
        min_temp : -50,
        photo : "./clothes_image/Jersey.png",
    },
    {
        kind : "pants",
        name : "ハーパン",
        max_temp : 40,
        min_temp : 18,
        photo : "./clothes_image/Shorts.png",
    },
    {
        kind : "pants",
        name : "チノパン",
        max_temp : 29,
        min_temp : -50,
        photo : "./clothes_image/Chino_pants.png",
    },
    {
        kind : "pants",
        name : "ウインドブレーカー",
        max_temp : 13,
        min_temp : -50,
        photo : "./clothes_image/Tank_top.png",//後回し
    },
    {
        kind : "pants",
        name : "スキニージーンズ",
        max_temp : 23,
        min_temp : -50,
        photo : "./clothes_image/jeans.png",//後回し
    },
];


function addElement(){
    const label = document.createElement("label");

    const input = document.createElement("input");
    input.setAttribute("type","checkbox");
    input.setAttribute("value",man_cloth[i].name);
    input.setAttribute("name",man_cloth[i].kind);
    input.setAttribute("id","cloth" + i);

    const name = document.createTextNode(man_cloth[i].name);

    label.appendChild(input);
    label.appendChild(name);

    if(man_cloth[i].kind == "inner"){
        const cloth_label = document.getElementById("inner");
        cloth_label.appendChild(label);
    }else if(man_cloth[i].kind == "tops" || man_cloth[i].kind == "tops2"){
        const cloth_label =document.getElementById("tops");
        cloth_label.appendChild(label);
    }else if(man_cloth[i].kind == "outer"){
        const cloth_label = document.getElementById("outer");
        cloth_label.appendChild(label);
    }else if(man_cloth[i].kind == "pants"){
        const cloth_label = document.getElementById("pants");
        cloth_label.appendChild(label);
    }
}

for(var i = 0; i<man_cloth.length; i++){
    addElement();
}