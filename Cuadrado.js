class Cuadrado extends Figura {

 constructor(posX,posY,tamX,tamY){
     super(posX,posY,tamX,tamY)

 }

 pintarCuadrado(){
     rect(this.posX,this.posY,this.tamX,this.tamY);
 }


}