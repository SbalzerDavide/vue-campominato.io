const app = new Vue ({
    el:'#app',
    data:{
        bombsNumber: 20,
        boxNumber: 100,
        boxes: [],
        bombs: [],
        level: 0,
        point: 0,
        gameover: false,


    },
    created(){
        this.field();
        console.log(this.boxes);
        this.createBombs();
        console.log(this.bombs);
        console.log(this.boxes);
    },
    methods:{
        field(){
            for(let i = 0; i < this.boxNumber; i++){
                this.boxes.push({
                    pos: i,
                    clicked: false,
                    bomb: false,
                    style: '',
                    number: 0,
                })
            }
        },
        randomNumber (min, max){
            let random = Math.floor(Math.random()* (max - min + 1) ) + min;
            return random;
        },
        createBombs(){
            for(let i = 0; i < this.bombsNumber; i++){
                let newBomb = this.randomNumber(0, this.boxNumber -1);
                if(!this.bombs.includes(newBomb)){
                    this.bombs.push(newBomb);
                    this.boxes[newBomb].bomb = true;
                } else{
                    i--;
                }
            }
        },
        selectBox(id){
            if(!this.boxes[id].clicked){
                this.boxes[id].clicked = true;
                // console.log(id);
                // console.log(this.boxes[id].bomb);
                if(this.boxes[id].bomb === false){
                    this.boxes[id].style = 'flower';
                    this.point ++;
                    console.log(this.point);
                } else {
                    this.boxes[id].style = 'bomb';
                    console.log('game over');
                    this.gameover = true;
                };
                // make number 
                if (id == 0 ){
                    if (this.boxes[id+1].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id+10].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id+11].bomb === true){
                        this.boxes[id].number ++;
                    }; 
                }else if( id == 9){
                    if (this.boxes[id-1].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id+9].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id+10].bomb === true){
                        this.boxes[id].number ++;
                    }; 
                } else if (id == 90) {
                    if (this.boxes[id+1].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id-10].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id-9].bomb === true){
                        this.boxes[id].number ++;
                    }; 
                } else if( id == 99){
                    if (this.boxes[id-1].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id-10].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id-11].bomb === true){
                        this.boxes[id].number ++;
                    }; 
                }else if (id < 10){
                    if (this.boxes[id-1].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id+1].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id+9].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id+10].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id+11].bomb === true){
                        this.boxes[id].number ++;
                    };    
                } else if(Number.isInteger(id/10)){
                    if (this.boxes[id-10].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id-9].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id+1].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id+10].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id+11].bomb === true){
                        this.boxes[id].number ++;
                    };
                    console.log('multiplo di 10')
                } else if(Number.isInteger((id +1)/10)){
                    if (this.boxes[id-11].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id-10].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id-1].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id+9].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id+10].bomb === true){
                        this.boxes[id].number ++;
                    };    
                    console.log('9');
                } else if (id > 89){
                    if (this.boxes[id-11].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id-10].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id-9].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id-1].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id+1].bomb === true){
                        this.boxes[id].number ++;
                    };
                } else {
                    if (this.boxes[id-11].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id-10].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id-9].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id-1].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id+1].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id+9].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id+10].bomb === true){
                        this.boxes[id].number ++;
                    };
                    if (this.boxes[id+11].bomb === true){
                        this.boxes[id].number ++;
                    };

                }
                console.log(this.boxes[id])
            }
        },
        restart(){
            this.boxes = [];
            this.bombs = [];
            this.point = 0;
            this.field();
            this.createBombs();
            this.gameover = false;
        }
    }
});