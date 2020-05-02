class Figura {


    constructor(posX,posY,tamX,tamY){
        this.posX=posX;
        this.posY=posY;
        this.tamX=tamX;
        this.tamY=tamY;
        this.vel=3;
        
        
    }
    
    pintar(){

    }
    

    doblarTam(){
    this.tamX*2;
    this.tamY*2;


    }

   mov(){
       this.posX+=this.vel;
       if(this.posX>=490){
           this.vel*=-1;

       }
       if(this.posX0<10){
        this.vel*=-1;
    }
   }


    getPosX() {
        return this.posX;
    }
    setPosX(posX) {
        this.posX = posX;
    }
    getPosY() {
        return this.posY;
    }
    setPosY(posY) {
        this.posY = posY;
    }
    getTamX() {
        return this.tamX;
    }
    setTamX(tamX) {
        this.tamX = tamX;
    }
    getTamY() {
        return this.tamY;
    }
    setTamY(tamY) {
        this.tamY = tamY;
    }
   }