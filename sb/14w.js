class Maps{
    constructor(row, column){
        this.mapArray = Array.from(Array(row), ()=> Array(column).fill(0));
        for(var i =0; i<4; i++){
            for(var j =0; j < 4; j++){
                this.mapArray[i][j] = new Block(0);
            }
        }
        this.div_app = document.getElementById("app");        
    }

    addRandomPositionBlock(X, Y){
       this.mapArray[X][Y].changevalue(2);
        this.mapArray[X][Y].setActive(true);
        this.mapArray[X][Y].setPosition(X,Y);
    
        this.div_app.appendChild(this.mapArray[X][Y].div_element);
    }
//pop는 맨끝이니 오른쪽
//shift는 맨 앞이니 왼쪽 
    moveright(){
        let moveMaps = this.mapArray;
        for(var i =0; i <4; i++){
            for(var j = 3; j >= 0; j--){
                console.log(this.mapArray[j][i]);
               // if(this.mapArray[j][i].Va == 0){
                   // this.mapArray[j].pop();
                  //  this.mapArray[j][i].Va = moveMaps[j-1][i].Va;
                 //   this.mapArray[j][i].setMovePosition(j+1,i+1);
                   // this.div_app.appendChild(this.mapArray[j][i].div_element);
              //  }
            }
        }
    }

    moveleft(){

    }

    moveup(){

    }

    movedown(){

    }

}

class Block{
    constructor(value){
        this.Va = value;
        this.Active = false;
        this.XPos = 20;
        this.YPos = 20;
        this.div_element = document.createElement("div");
        this.div_element.setAttribute("class","block");
    }
    changevalue(value){
        this.Va = value;

        var valuetext = document.createTextNode(value);
        var newtext = document.createTextNode(value);

        this.div_element.appendChild(valuetext);
        this.div_element.replaceChild(newtext,valuetext);
    }

    setActive(isActivated){
        this.Active = isActivated;        
    }
    
    setPosition(x,y){
        console.log(x,y);
        this.XPos += 150*x;
        this.YPos += 150*y;
        this.div_element.style.left = this.XPos;
        this.div_element.style.top = this.YPos;

    }

    setMovePosition(x,y){
        this.XPos = 20 + 150 *x;
        this.XPos = 20 + 150 *y;
        this.div_element.style.left = this.XPos;
        this.div_element.style.top = this.YPos;
    }

}

var map = new Maps(4,4);

function randomblock(){ 
 var X = parseInt(Math.random()*4);
 var Y = parseInt(Math.random()*4);

    if(map.mapArray[X][Y].Va == 0){
        map.addRandomPositionBlock(X, Y);
    }
    else  {
        randomblock();
    }

}

function keylog(e){
    console.log(e.key);
    switch(e.key){
        case 'Enter':
            randomblock();
            break;
        case 'ArrowRight':
            map.moveright();
            break;
        case 'ArrowLeft':
            map.moveleft();
            break;
        case 'ArrowUp':
            map.moveup();
            break;
        case 'ArrowDown':
            map.movedown();
            break;
        default:            
            break;
    }
}

window.onkeydown = keylog;