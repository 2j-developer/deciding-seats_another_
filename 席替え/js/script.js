var seatdata=new Array(person);
var perdata=new Array(person);

function createseats() {
    var zure = 0;
    var seats = document.getElementById('seats');
    seats.style.width = (yokohaba*100+(yokohaba-1)*10).toString()+'px';
    for (var i = 0; i < person; i++) {
        var seats = document.getElementById('seats');
        var f = 0;
        for (var l = 0; l < nopseat.length; l++) {if((i+zure)==nopseat[l]){ f = 1; }}
        if(f==1){zure++;i--;}
        else{
            var yoko = (i+zure)%yokohaba;
            var tate = Math.floor((i+zure)/yokohaba);
            var div = document.createElement('div');
            div.id = 's'+i;
            div.className = 'seat';
            div.style.left = (yoko*110).toString() + 'px';
            div.style.top = (tate*90).toString() + 'px';
            div.style.backgroundColor = color[0];
            div.onclick =  new Function("chs("+i+");");
            seats.appendChild(div);
        }
    }
    for (var i = 0; i < person; i++) {
        var seats = document.getElementById('seats');
        var seat = document.getElementById('s'+i);
        var div = document.createElement('div');
        div.id = 'p'+i;
        div.className = 'person';
        div.innerText = ''+(i+1);
        div.style.left = (parseInt(seat.style.left)+5).toString() + 'px';
        div.style.top = (parseInt(seat.style.top)+40).toString() + 'px';
        div.style.backgroundColor = color[2];
        div.onclick =  new Function("chp("+i+");");
        seats.appendChild(div);
    }
    for (var i = 0; i < person; i++) {
        seatdata[i]=0;
        perdata[i] =0;
    }
}
/*
http://d.hatena.ne.jp/DECKS/20100907/1283843862
から利用
*/
function rgb2hex(col){
  return "#" + col.match(/\d+/g).map(function(a){return ("0" + parseInt(a).toString(16)).slice(-2)}).join("");
}
function chs(num){
    var seat = document.getElementById('s'+num);
/*
    if(rgb2hex(seat.style.backgroundColor) == color[0]){
        seat.style.backgroundColor = color[1];
    }else{
        seat.style.backgroundColor = color[0];
    }
*/
    if(seatdata[num] == 0){
        seatdata[num] = 1;
    }else{
        seatdata[num] = 0;
    }
    seat.style.backgroundColor = color[seatdata[num]];
}
function chp(num){
    var per = document.getElementById('p'+num);
/*
    if(rgb2hex(per.style.backgroundColor) == color[2]){
        per.style.backgroundColor = color[3];
    }else{
        per.style.backgroundColor = color[2];
    }
*/
    if(perdata[num] == 0){
        perdata[num] = 1;
    }else{
        perdata[num] = 0;
    }
    per.style.backgroundColor = color[(perdata[num]+2)];
}
function shuffle(){
    var maep = 0;
    var maes = 0;
    for (var i = 0; i < person; i++) {
/*
        var seatc = document.getElementById('s'+i);
        var perc = document.getElementById('p'+i);
        if(rgb2hex(seatc.style.backgroundColor) == color[1]){maes++;}
        if(rgb2hex(perc.style.backgroundColor) == color[3]){maep++;}
*/
        if(seatdata[i] == 1){maes++;}
        if(perdata[i]  == 1){maep++;}
    }
    if(maep != maes){
        alert("前に座る人と用意された席の数が違います");
        return ;
    }
    var ocd = [];
    for (var i = 0; i < person; i++) {
        var per = document.getElementById('p'+i);
        do{
            var rnd = Math.floor(Math.random() * person);
            var flag = 0;
            if(seatdata[rnd] == perdata[i]){
                for (var l = 0; l < ocd.length; l++) {
                    //alert(ocd[l]+"\n"+rnd);
                    if(rnd == ocd[l]){
                        flag++;
                        break;
                    }
                }
            }else{flag = 1;}
        }while(flag > 0);
        ocd.push(rnd);
        var seat = document.getElementById('s'+rnd);
        per.style.top = (parseInt(seat.style.top)+40).toString() + 'px';
        per.style.left = (parseInt(seat.style.left)+5).toString() + 'px';
/*
        while(true){
            do{
                var rnd = Math.floor(Math.random() * person);
                var flag = 0;
                for (var l = 0; l < ocd.length; l++) {
                    //alert(ocd[l]+"\n"+rnd);
                    if(rnd == ocd[l]){
                        flag++;
                        break;
                    }
                }
            }while (flag > 0);
            //alert(i+"\n"+rnd+"\n"+flag);
            var seat = document.getElementById('s'+rnd);
            var pbgc = rgb2hex(per.style.backgroundColor);
            var sbgc = rgb2hex(seat.style.backgroundColor);
            if(sbgc == color[1] && pbgc == color[3] || sbgc == color[0] && pbgc == color[2]){
                per.style.top = (parseInt(seat.style.top)+40).toString() + 'px';
                per.style.left = (parseInt(seat.style.left)+5).toString() + 'px';
                break;
            }
        }
        ocd.push(rnd);
*/
    }
}