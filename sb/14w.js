class Maps{
    constructor(row, column){
        this.mapArray = Array.from(Array(row), ()=> Array(column).fill(0));
        for(var i =0; i< row; i++){
            for(var j =0; j < column; j++){
                this.mapArray[i][j] = new Block(0);
                this.mapArray[i][j].setMovePosition(i,j);
            }
        }
        this.div_app = document.getElementById("app");
    }

    addRandomPositionBlock(X, Y){
        this.mapArray[X][Y].changevalue(2);
        this.div_app.appendChild(this.mapArray[X][Y].div_element);
    }

    moveright(){
        let popMap;
        for(var i =0; i < 4; i++){
            for(var j = 3; j >= 0; j--){
                if(this.mapArray[j][i].Va != 0){
                    for(var k = j+1; k <=3; k++){
                        if(this.mapArray[k][i].Va != 0){
                        if(this.mapArray[k][i].Va == this.mapArray[k-1][i].Va){
                           this.mapArray[k][i].changevalue(this.mapArray[k][i].Va * 2);
                           this.div_app.removeChild(this.mapArray[k-1][i].div_element);
                           popMap = this.mapArray[k].splice(i-1,1,new Block(0));
                           this.div_app.appendChild(this.mapArray[k][i].div_element);
                            break;
                            }
                        else break;  
                        }
                        else {
                            popMap = this.mapArray[k].splice(i,1);
                            this.mapArray[k].unshift(new Block(0));
                            this.mapArray[k][i].setMovePosition(k,i); 
                        }
                        this.mapArray[k][i].setMovePosition(k,i);
                    }

                }
            }
        } 
        randomblock();
    }
    moveleft(){}
    moveup(){}
    movedown(){}
}

class Block{
    constructor(value){
        this.Va = value;
        this.Active = false;
        this.nodeText = document.createTextNode(this.Va);
        this.XPos;
        this.YPos;
        this.div_element = document.createElement("div");
        this.div_element.setAttribute("class","block");
        this.div_element.appendChild(this.nodeText);
    }

    changevalue(value){
       this.div_element.removeChild(this.nodeText);
        this.Va = value;
        this.nodeText = document.createTextNode(this.Va);
        this.div_element.appendChild(this.nodeText);
    }

    setMovePosition(x,y){
        this.XPos = 20+(150*x);
        this.YPos = 20+(150*y);
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