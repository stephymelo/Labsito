class Cuadrado extends Figura {

 constructor(posX,posY,tamX,tamY){
     super(posX,posY,tamX,tamY)

 }

 pintarCuadrado(){
    
     fill(161, 183, 255);
     rect(this.posX,this.posY,this.tamX,this.tamY);
 }

 

 

}