let pantalla;




function setup(){
    createCanvas(500,500);
    cuadrados = new Cuadrado();
    clicky=false;
    pantalla=0;
    numero=0;
    

}

function draw(){
    background(196, 255, 208);
    switch(pantalla){
        case 0 :

            break;
        case 1 :
          
            break;
    }
    buttons();

}


function buttons(){
    switch(pantalla){
        case 0 :
            fill(255);
            textSize(100);
            text(numero,220,100);
            stroke(255);
            fill(235, 205, 167);
            rect(50,300,150,50,20);  
            rect(300,300,150,50,20);  
            if(numero>=1&&numero!=0){
                rect(170,400,150,50,20);  
            }
            fill(250);
            textSize(20);
            text("Aumentar Num",55,330);
            text("Decrecer Num",305,330);
            if(numero>=1&&numero!=0){
            text("Crear Figuritas",175,430);
            }
            if(clicky==true){
                text("mensaje",50,50);
            }
           
           
            

            break;
        case 1 :
            stroke(255);
            fill(235, 205, 167);
            rect(50,400,50,25,20);
            rect(120,400,50,25,20);
            rect(230,400,50,25,20);
            ellipse(330,410,40,40);
            break;
    }
    

}

function mouseClicked(){
    if(mouseX>50&&mouseY>300&&mouseX<150&&mouseY<350){
        if(numero<10){
            numero++;  
        }else{

        }
              
      
    }
    if(mouseX>300&&mouseY>300&&mouseX<450&&mouseY<350){
        if(numero>0){
            numero--;  
        }else{
            
        }
   
     
    }
    
    try {
        validarNum();
      }
      catch(error) {
        clicky=true;
        console.error(error);
        
      }
}

function validarNum(){
    if(numero==10){
        throw new Exception("llegasta a diez, no puedes mas bb");
    }
    
    
}