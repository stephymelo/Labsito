class Circulo extends Figura {

    constructor(posX,posY,tamX,tamY){
        super(posX,posY,tamX,tamY)
   
    }
   
    pintarCirculo(){
        fill(255);
        ellipse(this.posX,this.posY,this.tamX,this.tamY);
    }
   
   
   }