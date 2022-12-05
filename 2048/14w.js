var Maps = Array(Array(0,0,0,0),Array(0,0,0,0),Array(0,0,0,0),Array(0,0,0,0)); // 2048 공간
var block = document.getElementsByClassName("backblock"); // 2048에 생성되는 div

function numberCreate(){
    var X = parseInt(Math.random() * 4);
    var Y = parseInt(Math.random() * 4);
    var varlue = parseInt(Math.random() * 10);

    if(Maps[X][Y] == ""){
        if(varlue == 0)
        {
            Maps[X][Y]  = 4;
        }
        else
        Maps[X][Y] = 2;
    for(var i = 0; i < 4; i++){
        for(var j = 0 ; j < 4; j++){
            var k = i * 4 + j;
            if(Maps[i][j] != ""){
                block[k].innerHTML = Maps[i][j];
            }
            else{
                block[k].innerHTML = "";
            }
        }
    }
}
else numberCreate();
}

function Left(){
    for( var i =0; i <4; i++){
        for( var j =0; j <4; j++){
            if(Maps[i][j] != ""){
                for(var k = j - 1; k >= 0; k--){
                    if(Maps[i][k] != ""){
                        if(Maps[i][k] == Maps[i][k+1]){
                            Maps[i][k] = Maps[i][k] * 2;
                            Maps[i][k + 1] = "";
                            break;
                        }
                        else break;
                    }
                    else{
                        Maps[i][k] = Maps[i][k +1];
                        Maps[i][k + 1] = "";
                    }
                }
            }
        }
    }
    numberCreate();
}

function Right(){
    for( var i =0; i <4; i++){
        for( var j =3; j >= 0; j--){
            if(Maps[i][j] != ""){
                for(var k = j + 1; k <= 3; k++){
                    if(Maps[i][k] != ""){
                        if(Maps[i][k] == Maps[i][k+1]){
                            Maps[i][k] = Maps[i][k] * 2;
                            Maps[k + 1][i] = "";
                            break;
                        }
                        else break;
                    }
                    else{
                        Maps[i][k] = Maps[i][k - 1 ];
                        Maps[i][k - 1] = "";
                    }
                }
            }
        }
    }
    numberCreate();
}

function Up(){
    for( var i =0; i <4; i++){
        for( var j =0; j <4; j++){
            if(Maps[j][i] != ""){
                for(var k = j - 1; k >= 0; k--){
                    if(Maps[k][i] != ""){
                        if(Maps[k][i] == Maps[k + 1][i]){
                            Maps[k][i] = Maps[k][i] * 2;
                            Maps[k + 1][i] = "";
                            break;
                        }
                        else break;
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

function Down(){
    for( var i =0; i <4; i++){
        for( var j =3; j >= 0; j--){
            if(Maps[j][i] != ""){
                for(var k = j + 1; k <= 3; k++){
                    if(Maps[k][i] != ""){
                        if(Maps[k][i] == Maps[k-1][i]){
                            Maps[k][i] = Maps[k][i] * 2;
                            Maps[k-1][i] = "";
                            break;
                        }
                        else {
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

function keylog(e){
    console.log(e.key);
    switch(e.key){
        case 'Enter':
            numberCreate();
            break;
        case 'ArrowRight':
            Right();
            break;
        case 'ArrowLeft':
            Left();
            break;
        case 'ArrowUp':
            Up()
            break;
        case 'ArrowDown':
            Down()
            break;
        default:            
            break;
    }
}

window.onkeydown = keylog;