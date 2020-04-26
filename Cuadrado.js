class Cuadrado extends Figura {

 constructor(posX,posY,tamX,tamY){
     super(posX,posY,tamX,tamY)

 }

 pintarCuadrado(){
     fill(255);
     rect(this.posX,this.posY,this.tamX,this.tamY);
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