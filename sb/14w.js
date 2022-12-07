class Gamemanager{
    constructor(row, column){
        this.Row = row;
        this.Column = column;
        this.Maps = Array.from(Array(row), ()=> Array(column).fill(0));
        this.div_app = document.getElementById("app");
        //this.block = document.getElementsByClassName("backblock");
    }

    addrandomblock(x,y,block){
           block.setactive(true);
            //랜덤 블록 위치 생성
    
            block.setcoord();
            this.Map[x][y] = block;
            this.div_app.appendChild(block.div_element);
    }
}


class BlockPrefabs{
    constructor(value){
        this.value = value;
        this.Active = false;
        this.XPos = 20;
        this.YPos =20;
        this.div_element = document.createElement("div");
        this.div_element.setAttribute("class", "block");
        this.div_element.appendChild(document.createTextNode(2));
    }

    setactive(isActivated){
        this.Active = isActivated;        
    }

    setcoord(){
        const num = Math.floor(Math.random() * 4);
        const num2 = Math.floor(Math.random() * 4);
        this.XPos += 150*num;
        this.YPos += 150*num2;
        this.div_element.style.left = this.XPos;
        this.div_element.style.top = this.YPos;
    }

    removeblock(x,y){
        this.Active = false;
        this.Maps[x][y] = null;
    }

}

var gm = new Gamemanager(4,4);

gm.addrandomblock(Math.floor(Math.random()*4, Math.floor(Math.random() * 4), new BlockPrefabs(2)));
// 키 이벤트
function keylog(e){
    console.log(e.key);
    switch(e.key){
        case 'Enter':

            break;
        case 'ArrowRight':

            break;
        case 'ArrowLeft':

            break;
        case 'ArrowUp':

            break;
        case 'ArrowDown':

            break;
        default:            
            break;
    }
}

window.onkeydown = keylog;