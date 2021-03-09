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
        win: false,
        second: 0,
        time: '',
        audio: true,


    },
    created(){
        this.field();
        console.log(this.boxes);
        this.createBombs();
        this.timer();
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
        timer(){
            this.time = setInterval(this.addSecond, 1000)
        },
        addSecond(){
            this.second ++;
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
                    // make number 
                    if (id == 0 ){
                        if (this.boxes[id+1].bomb === true){
                            this.boxes[id].number ++;
                        } else {
                            this.boxes[id+1].clicked = true;
                            this.boxes[id+1].style = 'flower';
                        };
                        if (this.boxes[id+10].bomb === true){
                            this.boxes[id].number ++;
                        } else {
                            this.boxes[id+10].clicked = true;
                            this.boxes[id+10].style = 'flower';
                        };
                        if (this.boxes[id+11].bomb === true){
                            this.boxes[id].number ++;
                        } else {
                            this.boxes[id+11].clicked = true;
                            this.boxes[id+11].style = 'flower';
                        }; 
                    }else if( id == 9){
                        if (this.boxes[id-1].bomb === true){
                            this.boxes[id].number ++;
                        } else {
                            this.boxes[id-1].clicked = true;
                            this.boxes[id-1].style = 'flower';
                        };
                        if (this.boxes[id+9].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id+9].clicked = true;
                            this.boxes[id+9].style = 'flower';
                        };
                        if (this.boxes[id+10].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id+10].clicked = true;
                            this.boxes[id+10].style = 'flower';
                        }; 
                    } else if (id == 90) {
                        if (this.boxes[id+1].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id+1].clicked = true;
                            this.boxes[id+1].style = 'flower';
                        };
                        if (this.boxes[id-10].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id-10].clicked = true;
                            this.boxes[id-10].style = 'flower';
                        };
                        if (this.boxes[id-9].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id-9].clicked = true;
                            this.boxes[id-9].style = 'flower';
                        }; 
                    } else if( id == 99){
                        if (this.boxes[id-1].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id-1].clicked = true;
                            this.boxes[id-1].style = 'flower';
                        };
                        if (this.boxes[id-10].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id-10].clicked = true;
                            this.boxes[id-10].style = 'flower';
                        };
                        if (this.boxes[id-11].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id-11].clicked = true;
                            this.boxes[id-11].style = 'flower';
                        }; 
                    }else if (id < 10){
                        if (this.boxes[id-1].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id-1].clicked = true;
                            this.boxes[id-1].style = 'flower';
                        };
                        if (this.boxes[id+1].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id+1].clicked = true;
                            this.boxes[id+1].style = 'flower';
                        };
                        if (this.boxes[id+9].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id+9].clicked = true;
                            this.boxes[id+9].style = 'flower';
                        };
                        if (this.boxes[id+10].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id+10].clicked = true;
                            this.boxes[id+10].style = 'flower';
                        };
                        if (this.boxes[id+11].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id+11].clicked = true;
                            this.boxes[id+11].style = 'flower';
                        };    
                    } else if(Number.isInteger(id/10)){
                        if (this.boxes[id-10].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id-10].clicked = true;
                            this.boxes[id-10].style = 'flower';
                        };
                        if (this.boxes[id-9].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id-9].clicked = true;
                            this.boxes[id-9].style = 'flower';
                        };
                        if (this.boxes[id+1].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id+1].clicked = true;
                            this.boxes[id+1].style = 'flower';
                        };
                        if (this.boxes[id+10].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id+10].clicked = true;
                            this.boxes[id+10].style = 'flower';
                        };
                        if (this.boxes[id+11].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id+11].clicked = true;
                            this.boxes[id+11].style = 'flower';
                        };
                        console.log('multiplo di 10')
                    } else if(Number.isInteger((id +1)/10)){
                        if (this.boxes[id-11].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id-11].clicked = true;
                            this.boxes[id-11].style = 'flower';
                        };
                        if (this.boxes[id-10].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id-10].clicked = true;
                            this.boxes[id-10].style = 'flower';
                        };
                        if (this.boxes[id-1].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id-1].clicked = true;
                            this.boxes[id-1].style = 'flower';
                        };
                        if (this.boxes[id+9].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id+9].clicked = true;
                            this.boxes[id+9].style = 'flower';
                        };
                        if (this.boxes[id+10].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id+10].clicked = true;
                            this.boxes[id+10].style = 'flower';
                        };    
                        console.log('9');
                    } else if (id > 89){
                        if (this.boxes[id-11].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id-11].clicked = true;
                            this.boxes[id-11].style = 'flower';
                        };
                        if (this.boxes[id-10].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id-10].clicked = true;
                            this.boxes[id-10].style = 'flower';
                        };
                        if (this.boxes[id-9].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id-9].clicked = true;
                            this.boxes[id-9].style = 'flower';
                        };
                        if (this.boxes[id-1].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id-1].clicked = true;
                            this.boxes[id-1].style = 'flower';
                        };
                        if (this.boxes[id+1].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id+1].clicked = true;
                            this.boxes[id+1].style = 'flower';
                        };
                    } else {
                        if (this.boxes[id-11].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id-11].clicked = true;
                            this.boxes[id-11].style = 'flower';
                        };
                        if (this.boxes[id-10].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id-10].clicked = true;
                            this.boxes[id-10].style = 'flower';
                        };
                        if (this.boxes[id-9].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id-9].clicked = true;
                            this.boxes[id-9].style = 'flower';
                        };
                        if (this.boxes[id-1].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id-1].clicked = true;
                            this.boxes[id-1].style = 'flower';
                        };
                        if (this.boxes[id+1].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id+1].clicked = true;
                            this.boxes[id+1].style = 'flower';
                        };
                        if (this.boxes[id+9].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id+9].clicked = true;
                            this.boxes[id+9].style = 'flower';
                        };
                        if (this.boxes[id+10].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id+10].clicked = true;
                            this.boxes[id+10].style = 'flower';
                        };
                        if (this.boxes[id+11].bomb === true){
                            this.boxes[id].number ++;
                        }else {
                            this.boxes[id+11].clicked = true;
                            this.boxes[id+11].style = 'flower';
                        };
    
                    }
    
                } else {
                    this.boxes[id].style = 'bomb';
                    this.gameover = true;
                    clearInterval(this.time)
                };
                if(this.point == (this.boxNumber - this.bombsNumber)){
                    this.win = true;
                    clearInterval(this.time)
                };
                //fake victory for develop
                // if(this.point == 3){
                //     this.win = true;
                //     clearInterval(this.time)

                // };

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
            this.second = 0;
        }
    }
});