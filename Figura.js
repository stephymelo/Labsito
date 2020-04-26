class Figura {


    constructor(posX,posY,tamX,tamY){
        this.posX=posX;
        this.posY=posY;
        this.tamX=tamX;
        this.tamY=tamY;
        
    }
    
    pintar(){

    }
    

    doblarTam(){
    tamX*2;
    tamY*2;


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