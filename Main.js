let pantalla,numero; let whatever;




function setup(){
    createCanvas(500,500);


    
    clicky=false;
    pantalla=0;
    nextPantalla=false;
    numero=0;
    
    arrayCuadrados=  new Array(numero);
 
    arrayCirculos=  new Array(numero);

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
           
            
            stroke(255);
            fill(235, 205, 167);
            textSize(100);
            text(numero,220,150);
            rect(50,300,150,50,20);  
            rect(300,300,150,50,20); 
            rect(170,400,150,50,20);   
            // if(numero>=1&&numero!=0){
            //     rect(170,400,150,50,20);  
            //     nextPantalla=true;
            // }
            fill(250);
            textSize(20);
            text("Aumentar Num",55,330);
            text("Decrecer Num",305,330);
            text("Crear Figuritas",175,430);
         
            if(clicky==true){
                text("mensaje",50,50);
            }else{

            }
           
           
            

            break;
        case 1 :
            stroke(255);
            fill(235, 205, 167);
            rect(50,400,50,25,20);
            rect(120,400,50,25,20);
            rect(230,400,50,25,20);
            ellipse(330,410,40,40);
            drawFiguras();
            arrayCuadrados.push(new Cuadrado(10,200,50,50));
            
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

if(mouseX>170&&mouseY>400&&mouseX<320&&mouseY<450){
    console.log("alo");

    try {
        validarNum2();
      }
      catch(error) {
      
        console.error(error);
        
      }
    //   finally{
    //     pantalla=1;

    //   }
    pantalla=1;

  
    for(let i=0;i<arrayCuadrados.length;i++){
   
    console.log("aloiiii");
    }   
    

}
}


function drawCirculos(){
    // arrayCuadrados.forEach(function (, numero, arrayCirculos) {
// }
}

function drawFiguras(){

    for(let i=0;i<arrayCuadrados.length;i++){
        e=arrayCuadrados[i];
    
        arrayCuadrados[i].pintarCuadrado();
        console.log(arrayCuadrados.length);
    }
}






function validarNum(){
    if(numero==10){
        throw new Exception("llegasta a diez, no puedes mas");
    }
    
    
}

function validarNum2(){

    if(numero==0){
        throw new Exception("cant pass");        
    }
}
bruh momento