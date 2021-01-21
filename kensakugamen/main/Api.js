/*
    このコードでやってること
    ・指定された地点の地点の天気を取るためにAPIをぶったたく
        →targetCityNameを "Morioka" からアンケートで入力された都市が入るようにしてください
    ・//翌日までの天気・日ごとの最高体感気温をコンソールに表示
    ・アイコンとかをページにも表示

    【重要】
    処理の関係で、23時から24時の間にこのプログラムを動かすと「今日」の日付が1日ずれる
    こーいう極端な時間に動かしたときの処理を相談して決めたい
    要望があれば、言ってくれれば書くよー


    その他メモ
    
*/


/*
    グローバル変数置き場。
    他のプログラムとかにデータを渡したいときはこっから探してね
    他のコードとかと変数名が被っちゃったせいで不都合があったら教えて。変えるから
*/
//この2つが変えてもらいたい変数
let targetCityName = JSON.parse(localStorage.getItem("cityname"));     //ここにアンケートで答えてもらった地点を入れて
let wanna_know = localStorage.getItem("day");                 //知りたい天気が今日なのか明日なのか。今日なら1、明日なら0にしてね

let selected_day_htmls = $("#selected_day")
let onepoint_htmls = $("#onepoint_comment");
let today_date       = 0;            //今日の日付が入る
let tomorrow_date    = 0;            //明日の日付が入る
let today_maxtemp    = -100;         //今日の最高体感気温が入る
let today_mintemp    =  100;         //今日の最低体感気温が入る
let tomorrow_maxtemp = -100;         //明日の最高体感気温
let tomorrow_mintemp =  100;         //明日の最低体感気温
let today_maxtemp_feel    = -100;         //今日の最高体感気温が入る
let today_mintemp_feel    =  100;         //今日の最低体感気温が入る
let tomorrow_maxtemp_feel = -100;         //明日の最高体感気温
let tomorrow_mintemp_feel =  100;         //明日の最低体感気温
/*
    ※ここもグローバル変数
    天気とかが配列で入る
    すべての配列の[n]のデータを取ると、同じ時間のデータが取れる
*/

//now_tempsとかは完全なデバッグ用っぽい
let now_dates = [];        //日付（何日か）が入る
let now_hours = [];        //何時かが入る
let now_weathers = [];     //その時の天気が入る
let now_weather_kind = []; //その時の天気(晴れ・曇り・雨・雪(・その他)が入る)
let now_temps = [];        //その時の気温が入る
let now_feeltemps = [];    //その時の体感気温が入る
let now_weathericons = []; //アイコンIDが入る、これを使うとアイコンが表示できるように
let now_windspeed = [];    //その時の風速が入る

let today_hours = [];
let today_weathers = [];
let today_weather_kind = [];
let today_temps = [];
let today_feeltemps = [];
let today_weathericons = [];
let today_windspeed = [];

let tomorrow_hours = [];
let tomorrow_weathers = [];
let tomorrow_weather_kind = [];
let tomorrow_temps = [];
let tomorrow_feeltemps = [];
let tomorrow_weathericons = [];
let tomorrow_windspeed = [];



function today(){
    var city = $("#lv3Pulldown").val();
    localStorage.setItem("cityname",JSON.stringify(city));
    localStorage.setItem("day",1);
    if($("#lv1Pulldown").val() == 0 | $("#lv2Pulldown").val() == 0 | $("#lv3Pulldown").val() == 0){
        window.alert("プルダウンを入力してください");
        return false;
    }else{
        console.log(city);
        weather_display();
        const sex_data = JSON.parse(localStorage.getItem("sex_data"));
        console.log(sex_data);
        if(sex_data == "male"){
            mans_last();
        }else if(sex_data == "female"){
            female_last();
        }
      
        addLabel();
    }
}

function tomorrow(){
    var city = $("#lv3Pulldown").val();
    localStorage.setItem("cityname",JSON.stringify(city));
    localStorage.setItem("day",0);
    if($("#lv1Pulldown").val() == 0 | $("#lv2Pulldown").val() == 0 | $("#lv3Pulldown").val() == 0){
        window.alert("プルダウンを入力してください");
        return false;
    }else{
        console.log(city);
        weather_display();
        const sex_data = JSON.parse(localStorage.getItem("sex_data"));
        console.log(sex_data);
        if(sex_data == "male"){
            mans_last();
        }else if(sex_data == "female"){
            female_last();
        }
        addLabel();
    }
}
//男の服装を提案するプログラム（ほぼ終わり）
function mans_last(){
    var rec_inner = [];
    var rec_tops = [];
    var rec_tops2 = [];
    var rec_outer = [];
    var rec_pants = [];
    var photo_inner = [];
    var photo_tops = [];
    var photo_tops2 = [];
    var photo_outer = [];
    var photo_pants = [];
    var b =[];
    var last_kind = [0,0,0,0,0];

    const bring_inner = JSON.parse(localStorage.getItem("bring_inner"));
    const bring_tops = JSON.parse(localStorage.getItem("bring_tops"));
    const bring_tops2 = JSON.parse(localStorage.getItem("bring_tops2"));
    const bring_outer = JSON.parse(localStorage.getItem("bring_outer"));
    const bring_pants = JSON.parse(localStorage.getItem("bring_pants"));

    const max_temp = JSON.parse(localStorage.getItem("max_temp"));
    const min_temp = JSON.parse(localStorage.getItem("min_temp"));
    console.log(max_temp);
    console.log(min_temp);

    for(var i = 0;i < bring_inner.length;i++){
        var a = [];
        for(var key in bring_inner[i]){
            a.push(bring_inner[i][key]);
        }
        b.push(a);
    }
    for(var i = 0;i<b.length;i++){
        if(b[i][1] >= max_temp && b[i][2] <= min_temp){
            rec_inner.push(b[i][0]);
            photo_inner.push(b[i][3]);
            if(last_kind[0] == 0){
                last_kind.unshift({kind:1})
            }
        }
    }
    var b =[];
    for(var i = 0;i < bring_tops.length;i++){
        var a = [];
        for(var key in bring_tops[i]){
            a.push(bring_tops[i][key]);
        }
        b.push(a);
    }
    for(var i = 0;i<b.length;i++){
        if(b[i][1] >= max_temp && b[i][2] <= min_temp){
            rec_tops.push(b[i][0]);
            photo_tops.push(b[i][3]);
            if(last_kind[1] == 0){
                last_kind.splice(1,0,{kind:1})
            }
        }
    }
    var b =[];
    for(var i = 0;i < bring_tops2.length;i++){
        var a = [];
        for(var key in bring_tops2[i]){
            a.push(bring_tops2[i][key]);
        }
        b.push(a);
    }
    for(var i = 0;i<b.length;i++){
        if(b[i][1] >= max_temp && b[i][2] <= min_temp){
            rec_tops2.push(b[i][0]);
            photo_tops2.push(b[i][3]);
            if(last_kind[1] == 0){
                last_kind.splice(2,0,{kind:1})
            }
        }
    }
    var b =[];
    for(var i = 0;i < bring_outer.length;i++){
        var a = [];
        for(var key in bring_outer[i]){
            a.push(bring_outer[i][key]);
        }
        b.push(a);
    }
    for(var i = 0;i<b.length;i++){
        if(b[i][1] >= max_temp && b[i][2] <= min_temp){
            rec_outer.push(b[i][0]);
            photo_outer.push(b[i][3]);
            if(last_kind[2] == 0){
                last_kind.splice(3,0,{kind:1})
            }
        }
    }
    var b =[];
    for(var i = 0;i < bring_pants.length;i++){
        var a = [];
        for(var key in bring_pants[i]){
            a.push(bring_pants[i][key]);
        }
        b.push(a);
    }
    for(var i = 0;i<b.length;i++){
        if(b[i][1] >= max_temp && b[i][2] <= min_temp){
            rec_pants.push(b[i][0]);
            photo_pants.push(b[i][3]);
            if(last_kind[3] == 0){
                last_kind.splice(4,0,{kind:1})
            }
        }
    }
    var i_random = Math.floor( Math.random() * rec_inner.length);
    var t_random = Math.floor( Math.random() * rec_tops.length);
    var t2_random = Math.floor(Math.random() * rec_tops2.length);
    var ou_random = Math.floor( Math.random() * rec_outer.length);
    var p_random = Math.floor( Math.random() * rec_pants.length);

    var photo_id = [];
    photo_id.push({inner:photo_inner[i_random],tops:photo_tops[t_random],tops2:photo_tops2[t2_random],outer:photo_outer[ou_random],pants:photo_pants[p_random]});
    localStorage.setItem("photo_id",JSON.stringify(photo_id));
    localStorage.setItem("last_kind",JSON.stringify(last_kind));
}
//女性用の服を提案するプログラム（未完成）
function female_last(){
    var rec_inner = [];
    var rec_tops = [];
    var rec_outer = [];
    var rec_pants = [];
    var photo_inner = [];
    var photo_tops2 = [];
    var photo_outer = [];
    var photo_pants = [];
    var b =[];
    var last_kind = [0,0,0,0,0];

    const max_temp = JSON.parse(localStorage.getItem("max_temp"));
    const min_temp = JSON.parse(localStorage.getItem("min_temp"));

    const bring_inner = JSON.parse(localStorage.getItem("bring_inner_cloth"));
    const bring_tops = JSON.parse(localStorage.getItem("bring_tops_cloth"));
    const bring_outer = JSON.parse(localStorage.getItem("bring_outer_cloth"));
    // const bring_onepiece = JSON.parse(localStorage.getItem("bring_onepiece_cloth"));
    const bring_pants = JSON.parse(localStorage.getItem("bring_pants_cloth"));
    // const bring_skirt = JSON.parse(localStorage.getItem('bring_skirt_cloth'));

    for(var i = 0;i < bring_inner.length;i++){
        var a = [];
        for(var key in bring_inner[i]){
            a.push(bring_inner[i][key]);
        }
        b.push(a);
    }
    for(var i = 0;i<b.length;i++){
        if(b[i][1] >= max_temp && b[i][2] <= min_temp){
            rec_inner.push(b[i][0]);
            if(last_kind[0] == 0){
                photo_inner.push(b[i][3]);
                last_kind.unshift({kind:1});
            }
        }
    }
    var b = [];
    for(var i = 0;i < bring_tops.length;i++){
        var a = [];
        for(var key in bring_tops[i]){
            a.push(bring_tops[i][key]);
        }
        b.push(a);
    }
    for(var i = 0;i<b.length;i++){
        if(b[i][1] >= max_temp && b[i][2] <= min_temp){
            rec_tops.push(b[i][0]);
            if(last_kind[1] == 0){
                photo_tops.push(b[i][3]);
                last_kind.unshift({kind:1});
            }
        }
    }
    var b = [];
    for(var i = 0;i < bring_outer.length;i++){
        var a = [];
        for(var key in bring_outer[i]){
            a.push(bring_outer[i][key]);
        }
        b.push(a);
    }
    for(var i = 0;i<b.length;i++){
        if(b[i][1] >= max_temp && b[i][2] <= min_temp){
            rec_outer.push(b[i][0]);
            if(last_kind[3] == 0){
                photo_outer.push(b[i][3]);
                last_kind.unshift({kind:1});
            }
        }
    }
    var b = [];
    for(var i = 0;i < bring_pants.length;i++){
        var a = [];
        for(var key in bring_pants[i]){
            a.push(bring_pants[i][key]);
        }
        b.push(a);
    }
    for(var i = 0;i<b.length;i++){
        if(b[i][1] >= max_temp && b[i][2] <= min_temp){
            rec_pants.push(b[i][0]);
            if(last_kind[4] == 0){
                photo_pants.push(b[i][3]);
                last_kind.unshift({kind:1});
            }
        }
    }
    
    var i_random = Math.floor( Math.random() * rec_inner.length);
    var t_random = Math.floor( Math.random() * rec_tops.length);
    var ou_random = Math.floor( Math.random() * rec_outer.length);
    var p_random = Math.floor( Math.random() * rec_pants.length);
  
    var inner_img = document.getElementById("inner_image");
    var tops_img = document.getElementById("tops_image");
    var tops2_img = document.getElementById("tops2_image");
    var outer_img = document.getElementById("outer_image");
    var pants_img = document.getElementById("pants_image");
   
    inner_img.src = photo_inner[i_random];
    tops_img.src = photo_tops[t_random];
    // tops2_img.src =  photo_tops2[t2_random];
    outer_img.src = photo_outer[ou_random];
    pants_img.src = photo_pants[p_random];
    var photo_id = [];
    photo_id.push({inner:photo_inner[i_random],tops:photo_tops[t_random],outer:photo_outer[ou_random],pants:photo_pants[p_random]});
    localStorage.setItem("photo_id",JSON.stringify(photo_id));
    localStorage.setItem("last_kind",JSON.stringify(last_kind));
}

  //表示させる服の種類の配列
  const choose_cloth = [
    {
        kind  : "inner",
    },
    {
        kind  : "tops",
    },
    {
        kind : "tops2",
    },
    {
        kind  : "outer",
    },
    {
        kind  : "pants",
    },
    ];
    
    //表示させる服を出す関数
    function addLabel(){
        var data = JSON.parse(localStorage.getItem("photo_id"));
        console.log(data);
        for(var key in data[0]){
            // プロパティ"c"を初期化
            if (!('c' in addLabel)) {
                // もし、プロパティ"c"が未定義であれば、
                // 初期値の0を代入する
                addLabel.c = 0;
            }
        
            //localStorageの呼び出し
            const a = JSON.parse(localStorage.getItem("last_kind"));
            const b = JSON.parse(localStorage.getItem("photo_id"));
        
            //選ばれてない服を弾いて表示
            if(a[0][key] != 0){
                // 要素をここで追加している
                const label = document.createElement("label");
        
                // const input = document.createElement("input");
                // input.setAttribute("type","button");
                // input.setAttribute("value",choose_cloth[addLabel.c].kind);
        
                const img = document.createElement("img");
                //img.setAttribute("img",b);
                img.setAttribute("src",b[0][key]);
        
                
                // label.appendChild(input);
                label.appendChild(img);
                
                const last_label = document.getElementById("kind");
                last_label.appendChild(label);
                console.log(key);
            }
            // 変数"c"をカウントアップ
            // addLabel.c++;
        
            // 変数"a"の値を返す
            // return addLabel.c;
        }
    }
    





/*
    ↓ メインのコード
      基本的に通信することしか書いてない
      天気の処理についてはMain_apiって関数で処理してる
*/
function weather_display(){
    const appId = "d2fbbf4af4598fdde6e4e35e89a7607a";

    const requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + targetCityName + ",jp&units=metric&lang=ja&appid=" + appId;    

    //Ajax通信用のオブジェクトを作成
    let xhr =new XMLHttpRequest();

    //通信方式とURLを設定
    xhr.open("GET",requestUrl,true);

    //通信を実行する
    xhr.send();

    //通信ステータスが変わったら実行される関数
    xhr.onreadystatechange = function(){
        //通信が完了
        if(xhr.readyState == 4){
            Main_api(xhr.responseText,wanna_know);
        }
    }

    //何日・何時かを取る
    function check_date(date){
        let dates = date.toLocaleDateString('ja-JP');
        let check_dates = dates.slice(-2,-1);
        if(check_dates == "/"){
            return dates.slice(-1);
        }
        else{
            return dates.slice(-2);
        }
    }
    function check_hour(date){
        let times = date.toLocaleTimeString('ja-JP');
        let check_hours = times.slice(1,2);
        if(check_hours == ":"){
            return times.slice(0,1);
        }
        else{
            return times.slice(0,2);
        }
    }



    //アイコンの追加。ところどころアイコンを差し替え
    function Add_weather(item){
        let weather_id = item.weather[0].id;
        if(weather_id >= 200 && weather_id <= 299){
            now_weathers.push("雷雨");
            now_weather_kind.push("雨");
        }else if(weather_id >= 300 && weather_id <= 399){
            now_weathers.push("弱い雨");
            now_weather_kind.push("雨");
        }else if(weather_id >= 500 && weather_id <= 599){
            now_weathericons.pop();
            now_weathericons.push("09d")
            now_weathers.push("雨");
            now_weather_kind.push("雨");
        }else if(weather_id >= 600 && weather_id <= 699){
            now_weathers.push("雪");
            now_weather_kind.push("雪");
        }else if(weather_id == 800){
            now_weathers.push("快晴");
            now_weather_kind.push("晴れ");
        }else if(weather_id == 801){
            now_weathers.push("晴れ"); 
            now_weather_kind.push("晴れ");
        }else if(weather_id == 802){
            if(now_weathericons[now_weathericons.length - 1] == "03d"){
                now_weathericons.pop();
                now_weathericons.push("02d")
            }else{
                now_weathericons.pop();
                now_weathericons.push("02n")
            }
            now_weathers.push("晴れ");
            now_weather_kind.push("晴れ");
        }else if(weather_id == 803){
            if(now_weathericons[now_weathericons.length - 1] == "04d"){
                now_weathericons.pop();
                now_weathericons.push("02d")
            }else{
                now_weathericons.pop();
                now_weathericons.push("02n")
            }
            now_weathers.push("晴れ");     
            now_weather_kind.push("晴れ");
        }else if(weather_id == 804){
            now_weathers.push("曇り");  
            now_weather_kind.push("曇り");
        }else{
            now_weathers.push(item.weather[0].description);
            now_weather_kind.push(item.weather[0].description);
        }
    }



    //天気を配列へ出力する関数
    function Show_weather(true_date,true_hour,item){
        /*
            こっから下で配列にいろいろ追加
        */
        now_dates.push(true_date);
        now_hours.push(true_hour);
        now_feeltemps.push(item.main.feels_like);
        now_temps.push(item.main.temp);
        now_weathericons.push(item.weather[0].icon);
        now_windspeed.push(item.wind.speed);
        
        Add_weather(item);
        
    }



    //天気を今日のものと明日のものに分ける
    function part_weather(){
        for(i = 0; i < now_weather_kind.length; i++){
            if(now_dates[i] == today_date){
                today_hours.push(now_hours[i]);
                today_feeltemps.push(now_feeltemps[i]);
                today_temps.push(now_temps[i]);
                today_windspeed.push(now_windspeed[i]);
                today_weathers.push(now_weathers[i]); 
                today_weather_kind.push(now_weather_kind[i]);
                today_weathericons.push(now_weathericons[i]);
            }
            else{
                tomorrow_hours.push(now_hours[i]);
                tomorrow_feeltemps.push(now_feeltemps[i]);
                tomorrow_temps.push(now_temps[i]);
                tomorrow_windspeed.push(now_windspeed[i]);
                tomorrow_weathers.push(now_weathers[i]); 
                tomorrow_weather_kind.push(now_weather_kind[i]);
                tomorrow_weathericons.push(now_weathericons[i]);
            }
        }
    }



    //天気をhtmlへ表示する関数
    function output_weather(bool_today){
        if(bool_today == 1){
            const table = document.createElement("table");
            const tr = document.createElement("tr");
            const th = document.createElement("th");
            // table.append("<tr>");
            for (let i = 0; i < today_hours.length; i++){
                th.append(now_dates[i] + "日" + now_hours[i] + "時");
                tr.append(th);
                table.append(tr);
            }
            
            const tr2 = document.createElement("tr");
            const th2 = document.createElement("th");
            for (let i = 0; i < today_weathericons.length; i++){
                let weather_icon;
                if(today_weathericons[i] == "09d" || today_weathericons[i] == "09n"){
                    weather_icon = " \ ./icon_image/rain_icon.png \ ";
                }else if(today_weathericons[i] == "13d" || today_weathericons[i] == "13n"){
                    weather_icon = " \ ./icon_image/snow_icon.png \ ";
                }else{
                    weather_icon = " \ http://openweathermap.org/img/wn/" + today_weathericons[i] + "@2x.png\ "
                }

                const image = document.createElement("img");
                image.setAttribute("src",weather_icon);
                th2.append(image);
                console.log(image);
                tr2.append(th2);
                table.append(tr2);
            }

            const tr3 = document.createElement("tr");
            const th3 = document.createElement("th");
            for (let i = 0; i < today_hours.length; i++){
                th3.append(today_weathers[i] + "  " + Math.round(today_temps[i]) + "℃");
                tr3.append(th3);
            }
            table.append(tr3);

            const tr4 = document.createElement("tr");
            const th4 = document.createElement("th");
            for (let i = 0; i < today_hours.length; i++){
                th4.append(Math.round(today_windspeed[i]) + "m/s");
                tr4.append(th4);
            }
            table.append(tr4);
            console.log(table);
            const weather_tabel = document.getElementById("tb");
            weather_tabel.append(table);
        }
        else if(bool_today == 0){
            const table = document.createElement("table");
            const tr = document.createElement("tr");
            const th = document.createElement("th");
            for (let i = 0; i < tomorrow_hours.length; i++){
                th.append(tomorrow_date + "日" + tomorrow_hours[i] + "時");
                tr.append(th);
            }
            table.append(tr);


            const tr2 = document.createElement("tr");
            const th2 = document.createElement("th");
            for (let i = 0; i < tomorrow_weathericons.length; i++){
                let weather_icon;
                if(tomorrow_weathericons[i] == "09d" || tomorrow_weathericons[i] == "09n"){
                    weather_icon = " \ ./icon_image/rain_icon.png \ ";
                }else if(tomorrow_weathericons[i] == "13d" || tomorrow_weathericons[i] == "13n"){
                    weather_icon = " \ ./icon_image/snow_icon.png \ ";
                }else{
                    weather_icon = " \ http://openweathermap.org/img/wn/" + tomorrow_weathericons[i] + "@2x.png\ "
                }
                const image = document.createElement("img");
                image.setAttribute("src",weather_icon);
                th2.append(image);
                console.log(image);
                tr2.append(th2);
            }
            table.append(tr2);


            const tr3 = document.createElement("tr");
            const th3 = document.createElement("th");
            for (let i = 0; i < tomorrow_hours.length; i++){
                th3.append(tomorrow_weathers[i] + "  " + Math.round(tomorrow_temps[i]) + "℃")
                tr3.append(th3);
            }
            table.append(tr3);


            const tr4 = document.createElement("tr");
            const th4 = document.createElement("th");
            for (let i = 0; i < tomorrow_hours.length; i++){
                th4.append(Math.round(tomorrow_windspeed[i]) + "m/s");
                tr4.append(th4);
            }
            table.append(tr4);
            console.log(table);
            const weather_tabel = document.getElementById("tb");
            weather_tabel.append(table);
        }
    }



    //コメントの表示
    function output_comment(bool_today){
        let today_weather_kind_stack    = [];
        let tomorrow_weather_kind_stack = [];
        let today_weather_kind_count    = 0;
        let tomorrow_weather_kind_count = 0;
        
        
        if(bool_today == 1){
            /*
                今日の天気に関するコメント
            */
            for(i = 0; i < today_temps.length; i++){
                if(today_weather_kind_stack.length == 0){
                    today_weather_kind_stack.push(today_weather_kind[i]);
                    today_weather_kind_count += 1;
                }
                else{
                    //連続して同じ天気でなければ = 天気が変われば
                    if(today_weather_kind[i] != today_weather_kind_stack[today_weather_kind_stack.length - 1]){
                        //すでにあるやつとの被りがなければcountを増やす
                        for(let k = 0; k < today_weather_kind_stack.length; k++){
                            if(now_weather_kind[i] == today_weather_kind_stack[k]){//被っていたら
                                break;
                            }
                            if(k == today_weather_kind_stack.length - 1){//被ってなかったら
                                today_weather_kind_count += 1;
                            }
                        }
                        today_weather_kind_stack.push(now_weather_kind[i]);
                    }
                }
            }
            const label = document.createElement("label");
            const comment1 = document.createElement("li");
            const comment2 = document.createElement("li");
            const comment3 = document.createElement("li");
            var comment1_point = 0;
            var comment2_point = 0;
            var comment3_point = 0;
            //const comment4 = document.createElement("li");
            if(today_weather_kind_count == 1){
                
                comment1.append("今日は１日中" + today_weather_kind[0] +"で、最高気温は" + Math.round(today_maxtemp) +"度です");
                comment1_point +=1;
            }
            else if(today_weather_kind_count == 2){
                if(today_weather_kind.length == 2){
                    comment1.append("今日は" + today_weather_kind[0] + "のち" + today_weather_kind[1] +"で、最高気温は" + Math.round(today_maxtemp) +"度です");
                    comment1_point += 1;
                }
                else{
                    comment1.append("今日は" + today_weather_kind[0] + "時々" + today_weather_kind[1] +"で、最高気温は" + Math.round(today_maxtemp) +"度です");
                    comment1_point += 1;
                }
            }
            else{
                comment1.append("今日はコロコロと天気が変わる１日で、最高気温は" + Math.round(today_maxtemp) +"度です");
                comment1_point += 1;
            }

            if(today_maxtemp_feel - today_mintemp_feel > 10){
                comment2.append("今日は寒暖差が激しい日になりそうです。温度の調整がしやすい服がおすすめです。");
                comment2_point +=1;
            }  
            for(i = 0;i < today_windspeed.length;i++){
                if(today_windspeed[i] >= 10){
                    comment3.append("今日は風の強い時間帯があります。外出の際はお気を付けください。");
                    comment3_point +=1;
                    break;
                }
            }
            if(comment1_point != 0){
                label.append(comment1);
            }
            if(comment2_point != 0){
                label.append(comment2);
            }
            if(comment3_point != 0){
                label.append(comment3);
            }
            const onepoint = document.getElementById("onepoint");
            onepoint.append(label);
        }
        else{
            /*
                明日の天気に関するコメント
            */
        
            for(i = 0; i < tomorrow_temps.length; i++){
                if(tomorrow_weather_kind_stack.length == 0){
                    tomorrow_weather_kind_stack.push(tomorrow_weather_kind[i]);
                    tomorrow_weather_kind_count += 1;
                }
                else{
                    //連続して同じ天気でなければ = 天気が変われば
                    if(tomorrow_weather_kind[i] != tomorrow_weather_kind_stack[tomorrow_weather_kind_stack.length - 1]){
                        //すでにあるやつとの被りがなければcountを増やす
                        for(let k = 0; k < tomorrow_weather_kind_stack.length; k++){
                            if(tomorrow_weather_kind[i] == tomorrow_weather_kind_stack[k]){//被っていたら
                                break;
                            }
                            if(k == tomorrow_weather_kind_stack.length - 1){//被ってなかったら
                                tomorrow_weather_kind_count += 1;
                            }
                        }
                        tomorrow_weather_kind_stack.push(tomorrow_weather_kind[i]);
                    }
                }
            }
            const label = document.createElement("label");
            const comment1 = document.createElement("li");
            const comment2 = document.createElement("li");
            const comment3 = document.createElement("li");
            var comment1_point = 0;
            var comment2_point = 0;
            var comment3_point = 0;

            if(tomorrow_weather_kind_count == 1){
                comment1.append("明日は１日中" + tomorrow_weather_kind[0] +"で、最高気温は" + Math.round(tomorrow_maxtemp) +"度です");
                comment1_point +=1;
            }
            else if(tomorrow_weather_kind_count == 2){
                if(tomorrow_weather_kind.length == 2){
                    comment1.append("明日は" + tomorrow_weather_kind[0] + "のち" + tomorrow_weather_kind[1] +"で、最高気温は" + Math.round(tomorrow_maxtemp) +"度です");
                    comment1_point +=1;
                }
                else{
                    comment1.append("明日は" + tomorrow_weather_kind[0] + "時々" + tomorrow_weather_kind[1] +"で、最高気温は" + Math.round(tomorrow_maxtemp) +"度です");
                    comment1_point +=1;
                }
            }
            else{
                comment1.append("明日はコロコロと天気が変わる１日で、最高気温は" + Math.round(tomorrow_maxtemp) +"度です");
                comment1_point +=1;
            }
            if(tomorrow_maxtemp_feel - tomorrow_mintemp_feel > 10){
                comment2.append("明日は寒暖差が激しい日になりそうです。温度の調整がしやすい服がおすすめです。");
                comment2_point +=1;
            }

            for(i = 0;i < tomorrow_windspeed.length;i++){
                if(tomorrow_windspeed[i] >= 10){
                    comment3.append("明日は風の強い時間帯があります。外出の際はお気を付けください。");
                    comment3_point +=1;
                    break;
                }
            }
            if(comment1_point != 0){
                label.append(comment1);
            }
            if(comment2_point != 0){
                label.append(comment2);
            }
            if(comment3_point != 0){
                label.append(comment3);
            }
            const onepoint = document.getElementById("onepoint");
            onepoint.append(label);
        }
    }



    //メインの関数
    function Main_api(response,bool_today){
        let obj = JSON.parse(response);

        //console.log(obj.city.name);
        
        obj.list.some(function(item){
            let date = new Date( item.dt*1000 );//ミリ秒へ変換
            /*
                何日で何時なのかの情報を取っている
                dt_txtは日本標準時じゃないのできっつい
            */
            let true_hour = check_hour(date);
            let true_date = check_date(date);
            
            /*
                "今日"の定義と"明日"の定義をここで
            */
            if(today_date == 0){
                today_date = true_date;
                let after_24hour_time = new Date( (item.dt + 86400) * 1000 );
                tomorrow_date = check_date(after_24hour_time);
            }
            /*
                "今日"か"明日"であれば天気を表示する
                どちらでもなければ処理終了
            */
            if(true_date == today_date){
                if(item.main.temp > today_maxtemp){//最高気温の更新
                    today_maxtemp = item.main.temp;
                }
                if(item.main.temp < today_mintemp){//最低気温の更新
                    today_mintemp = item.main.temp;
                }
                if(item.main.feels_like > today_maxtemp_feel){//最高体感気温の更新
                    today_maxtemp_feel = item.main.feels_like;
                }
                if(item.main.feels_like < today_mintemp_feel){//最低体感気温の更新
                    today_mintemp_feel = item.main.feels_like;
                }
                Show_weather(true_date,true_hour,item);
            }
            else if(true_date == tomorrow_date){
                if(item.main.temp > tomorrow_maxtemp){//最高気温の更新
                    tomorrow_maxtemp = item.main.temp;
                }
                if(item.main.temp < tomorrow_mintemp){//最低気温の更新
                    tomorrow_mintemp = item.main.temp;
                }
                if(item.main.feels_like > tomorrow_maxtemp_feel){//最高体感気温の更新
                    tomorrow_maxtemp_feel = item.main.feels_like;
                }
                if(item.main.feels_like < tomorrow_mintemp_feel){//最低体感気温の更新
                    tomorrow_mintemp_feel = item.main.feels_like;
                }
                Show_weather(true_date,true_hour,item);
            }
            else{
                part_weather();
                if(wanna_know == 1){
                    localStorage.setItem("max_temp",JSON.stringify(today_maxtemp_feel));
                    localStorage.setItem("min_temp",JSON.stringify(today_mintemp_feel));
                }else if(wanna_know == 0){
                    localStorage.setItem("max_temp",JSON.stringify(tomorrow_maxtemp_feel));
                    localStorage.setItem("min_temp",JSON.stringify(tomorrow_mintemp_feel));
                }
                
                
                return true;
            }
        })

        output_weather(bool_today);
        output_comment(bool_today);
    }
}

