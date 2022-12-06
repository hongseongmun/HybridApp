
var score = 0; // 점수 변수
var GameStart = 0;
document.getElementById("bb").style.display='none';
var endleft = true;
var endright = true;
var endtop = true;
var enddown = true;

class Map{
    constructor(Maps, block){
        this.Maps = Maps = Array(Array(0,0,0,0),Array(0,0,0,0),Array(0,0,0,0),Array(0,0,0,0)); // 2048 공간
        this.block = document.getElementsByClassName("block"); // 2048에 생성되는 div
    }

    InsertNewBlock(){
        if(GameStart != 0 && GameStart < 2){
            var X = parseInt(Math.random() * 4); // 랜덤으로 생성할 위치 행
            var Y = parseInt(Math.random() * 4); // 랜덤으로 생성할 위치 열

            Maps[X][Y] = 2; 

            for(var i = 0; i < 4; i++){ // 행
                for(var j = 0 ; j < 4; j++){ // 열
                    var k = i * 4 + j; // [00,01,02,03],[10,11,12,13],[20,21,22,23],[30,31,32,33] 칸에서 각각 [0,1,2,3][4,5,6,7],[8,9,10,11],[12,13,14,15] 값을 위치표시를 위해 순서대로 가상으로 정해줬음
                    if(Maps[i][j] != ""){ // 값이 존재 할 경우
                        block[k].innerHTML = Maps[i][j]; // 해당 위치에다 innerHtml로 값을 표시해줌
                        block[k].id = "color" + Maps[i][j];
                    }
                    else if(Maps[i][j] == ""){
                        block[k].innerHTML = ""; // 값이 존재하지 않으면 값을 빈값으로 넣어줌
                        block[k].id = "" ;
                    }
                }
            }
        }
        else  InsertNewBlock(); // 랜덤으로 지정된 위치에 값이 존재되면 다시 함수를 호출하여 값이 비어있는 곳에 생성될때까지 반복
    }

    Animate(){

    }
}
    
    

function startNumberCreate(){
    if(GameStart == 0)
    {
    var X = parseInt(Math.random() * 4); // 랜덤으로 생성할 위치 행
    var Y = parseInt(Math.random() * 4); // 랜덤으로 생성할 위치 열
    var varlue = parseInt(Math.random() * 9); // 생성될 수를 랜덤으로 만들기 위해서 랜덤 값 변수

    if(Maps[X][Y] == ""){ // 만약 랜덤으로 지정한 위치의 값이 없을 경우
        if(varlue >= 0 && varlue <=3) // 0보다 크고 3보다 작을경우 
        {
            Maps[X][Y]  = 4; // 33%확률로 4 생성
            for(var i = 0; i < 4; i++){ // 행
                for(var j = 0 ; j < 4; j++){ // 열
                    var k = i * 4 + j; // [00,01,02,03],[10,11,12,13],[20,21,22,23],[30,31,32,33] 칸에서 각각 [0,1,2,3][4,5,6,7],[8,9,10,11],[12,13,14,15] 값을 위치표시를 위해 순서대로 가상으로 정해줬음
                    if(Maps[i][j] != ""){ // 값이 존재 할 경우
                        block[k].innerHTML = Maps[i][j]; // 해당 위치에다 innerHtml로 값을 표시해줌
                        block[k].id = "color" + Maps[i][j];
                        GameStart =1;
                    }
                    else if(Maps[i][j] == ""){
                        block[k].innerHTML = ""; // 값이 존재하지 않으면 값을 빈값으로 넣어줌
                        block[k].id = "" ;
                    }
                }
            }
        }
        
        else if(varlue >= 4 && varlue <=6)
        {
            Maps[X][Y] = 2; // 33% 확률로 2 생성
            for(var i = 0; i < 4; i++){ // 행
                for(var j = 0 ; j < 4; j++){ // 열
                    var k = i * 4 + j; // [00,01,02,03],[10,11,12,13],[20,21,22,23],[30,31,32,33] 칸에서 각각 [0,1,2,3][4,5,6,7],[8,9,10,11],[12,13,14,15] 값을 위치표시를 위해 순서대로 가상으로 정해줬음
                    if(Maps[i][j] != ""){ // 값이 존재 할 경우
                        block[k].innerHTML = Maps[i][j]; // 해당 위치에다 innerHtml로 값을 표시해줌
                        block[k].id = "color" + Maps[i][j];
                        GameStart =1;
                    }
                    else if(Maps[i][j] == ""){
                        block[k].innerHTML = ""; // 값이 존재하지 않으면 값을 빈값으로 넣어줌
                        block[k].id = "" ;
                    }
                }
            }
        }
        
        else if(varlue >= 7 && varlue < 10)
        {
            Maps[X][Y]  = 4;
            var X = parseInt(Math.random() * 4);
            var Y = parseInt(Math.random() * 4); 
            Maps[X][Y]  = 2;
            for(var i = 0; i < 4; i++){ // 행
                for(var j = 0 ; j < 4; j++){ // 열
                    var k = i * 4 + j; // [00,01,02,03],[10,11,12,13],[20,21,22,23],[30,31,32,33] 칸에서 각각 [0,1,2,3][4,5,6,7],[8,9,10,11],[12,13,14,15] 값을 위치표시를 위해 순서대로 가상으로 정해줬음
                    if(Maps[i][j] != ""){ // 값이 존재 할 경우
                        block[k].innerHTML = Maps[i][j]; // 해당 위치에다 innerHtml로 값을 표시해줌
                        block[k].id = "color" + Maps[i][j];
                        GameStart =1;
                    }
                    else if(Maps[i][j] == ""){
                        block[k].innerHTML = ""; // 값이 존재하지 않으면 값을 빈값으로 넣어줌
                        block[k].id = "" ;
                    }
                }
            }
        }
         
    }

    else startNumberCreate();
}
}

//10% 확률로 값이 4인 div 생상 90% 값이 2인 div 생성 
function numberCreate(){
    if(GameStart != 0 && GameStart < 2){
    var X = parseInt(Math.random() * 4); // 랜덤으로 생성할 위치 행
    var Y = parseInt(Math.random() * 4); // 랜덤으로 생성할 위치 열
    var varlue = parseInt(Math.random() * 10); // 생성될 수를 랜덤으로 만들기 위해서 랜덤 값 변수

    if(Maps[X][Y] == ""){ // 만약 랜덤으로 지정한 위치의 값이 없을 경우
        if(varlue == 0) // 0~9에서의 랜덤 값 중 값이 0 일 경우
        {
            Maps[X][Y]  = 4; // 10%확률로 4 생성
        }
        else
        Maps[X][Y] = 2; // 90% 확률로 2 생성
    for(var i = 0; i < 4; i++){ // 행
        for(var j = 0 ; j < 4; j++){ // 열
            var k = i * 4 + j; // [00,01,02,03],[10,11,12,13],[20,21,22,23],[30,31,32,33] 칸에서 각각 [0,1,2,3][4,5,6,7],[8,9,10,11],[12,13,14,15] 값을 위치표시를 위해 순서대로 가상으로 정해줬음
            if(Maps[i][j] != ""){ // 값이 존재 할 경우
                block[k].innerHTML = Maps[i][j]; // 해당 위치에다 innerHtml로 값을 표시해줌
                block[k].id = "color" + Maps[i][j];
            }
            else if(Maps[i][j] == ""){
                block[k].innerHTML = ""; // 값이 존재하지 않으면 값을 빈값으로 넣어줌
                block[k].id = "" ;
            }
        }
    }

    for(var v =0; v < 16; v++){
        if(block[v].innerHTML == 2048 ){
            document.getElementById("gametitle").style.display ='block';
            document.getElementById("gametitle").innerHTML="GameClear";
            for(var i = 0; i < 4; i++){ // 행
                for(var j = 0 ; j < 4; j++){ // 열
                    var k = i * 4 + j;
                    block[k].style.display='none';
                }
            }         
        }

    }
}
else numberCreate(); // 랜덤으로 지정된 위치에 값이 존재되면 다시 함수를 호출하여 값이 비어있는 곳에 생성될때까지 반복
}
}

function Left(){
    if(GameStart != 0 && GameStart < 2){
    for( var i =0; i <4; i++){
        for( var j =0; j <4; j++){ // 행,열 00 부터 33까지 반복
            if(Maps[i][j] != ""){ // 만약 값이 빈값이 아니라면
                for(var k = j - 1; k >=0; k--){ // 00 번쨰 라면 
                    if(Maps[i][k] != ""){
                        if(Maps[i][k] == Maps[i][k+1]){
                            Maps[i][k] = Maps[i][k] * 2;
                            Maps[i][k+1] = "";
                            endleft = true;
                            break;
                        }
                        else{
                            endleft = false;
                            GameOverCheck();
                            break;
                        } 
                    }
                    else{
                        Maps[i][k] = Maps[i][k+1];
                        Maps[i][k+1] = "";
                    }
                }
            }
        }
    }
    numberCreate();// 키 입력 시 무조건 새로운 수 생성
}
}

function Right(){
    if(GameStart != 0 && GameStart < 2){
    for( var i =0; i <4; i++){
        for( var j = 3; j >=0; j--){
            if(Maps[i][j] != ""){
                for(var k = j + 1; k <= 3; k++){
                    if(Maps[i][k] != ""){
                        if(Maps[i][k] == Maps[i][k-1]){
                            Maps[i][k] = Maps[i][k] * 2;
                            Maps[i][k-1] = "";
                            endright = true;
                            break;
                        }
                        else {
                            endright = false;
                            GameOverCheck();
                            break;
                        }
                    }
                    else{
                        Maps[i][k] = Maps[i][k-1];
                        Maps[i][k-1] = "";
                    }
                }
            }
        }
    }
    numberCreate();
}
}

function Up(){
    if(GameStart != 0 && GameStart < 2){
    for( var i =0; i <4; i++){
        for( var j =0; j <4; j++){
            if(Maps[j][i] != ""){
                for(var k = j - 1; k >= 0; k--){
                    if(Maps[k][i] != ""){
                        if(Maps[k][i] == Maps[k+1][i]){
                            Maps[k][i] = Maps[k][i] * 2;
                            Maps[k+1][i] = "";
                            endtop = true;
                            break;
                        }
                        else {
                            endtop = false;
                            GameOverCheck();
                            break;
                        }
                    }
                    else{
                        Maps[k][i] = Maps[k+1][i];
                        Maps[k+1][i] = "";
                    }
                }
            }
        }
    }
    numberCreate();
}
}

function Down(){
    if(GameStart != 0 && GameStart < 2){
    for( var i =0; i <4; i++){
        for( var j =3; j >= 0; j--){
            if(Maps[j][i] != ""){
                for(var k = j + 1; k <= 3; k++){
                    if(Maps[k][i] != ""){
                        if(Maps[k][i] == Maps[k-1][i]){
                            Maps[k][i] = Maps[k][i] * 2;
                            Maps[k-1][i] = "";
                            enddown = true;
                            break;
                        }
                        else {
                            enddown = false;
                            GameOverCheck();
                            break;
                        }
                    }
                    else{
                        Maps[k][i] = Maps[k-1][i];
                        Maps[k-1][i] = "";
                    }
                }
            }
        }
    }
    numberCreate();
}
}

function gamestart(){
    document.getElementById("gametitle").style.display ='none';
    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            var k = i * 4 + j;
            block[k].style.display='block';
        }
    }
}

function scoreP(){
    if(GameStart != 0  && GameStart < 2)
    {
    score ++;
    document.getElementById("score").innerHTML=score;
    }
}

function GameOverCheck(){
        for(var i =0; i < 4; i++){
            var colCheck = Maps[i][0];
            if(colCheck==0) return;
            for(var j =1; j <4; j++){
                if(Maps[i][j] == colCheck || Maps[i][j] == 0) return;
                else colCheck = Maps[i][j];
            }
        }
        for(var i =0; i<4; i++){
            var rowCheck = Maps[0][i];
            if(rowCheck == 0) return;
            for(var j =1; j < 4; j++){
                if(Maps[j][i] == rowCheck||Maps[j][i] ==0)return;
                else rowCheck = Maps[j][i]
            }
        }
        GameOver();
    }

function GameOver(){
   if(endtop == false && enddown == false && endleft == false && endright == false){
        document.getElementById("gametitle").style.display ='block';
            document.getElementById("gametitle").innerHTML="GameOver";
            for(var i = 0; i < 4; i++){ // 행
                for(var j = 0 ; j < 4; j++){ // 열
                    var k = i * 4 + j;
                    block[k].style.display='none';
                    GameStart = 2;
                }
            }
    }
    else return;
}

// 키 이벤트
function keylog(e){
    console.log(e.key);
    switch(e.key){
        case 'a':
            startNumberCreate();
            break;
        case 'Enter':
            gamestart();
            startNumberCreate();
            break;
        case 'ArrowRight':
            Right();
            scoreP();
            break;
        case 'ArrowLeft':
            Left();
            scoreP();
            break;
        case 'ArrowUp':
            Up();
            scoreP();
            break;
        case 'ArrowDown':
            Down();
            scoreP();
            break;
        default:            
            break;
    }
}

window.onkeydown = keylog;