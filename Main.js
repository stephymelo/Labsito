let pantalla,numero,pop,add;




function setup(){
    createCanvas(530,500);


    
    clicky=false;
    pantalla=0;
    nextPantalla=false;
    numero=0;
    pop=false;
    add=false;
    recty=false;
    tam=15;
    uno="dos";
    circulify=false;
    
    // arrayCuadrados=  new Array(numero);
    arrayCuadrados=[];
 
    arrayCirculos= [];
  

}

function draw(){
    background(196, 255, 208);
    switch(pantalla){
        case 0 :

            break;
        case 1 :

             drawFiguras();
             drawCirculos();
            
        

            

          
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
            fill(250);
            textSize(20);
            text("Aumentar Num",55,330);
            text("Decrecer Num",305,330);
            text("Crear Figuritas",175,430);
         
            if(clicky==true&&numero==10){
                text("No podes pasar de 10",50,50);
            }else{

            }
           
           
            

            break;
        case 1 :
            if(mouseX> 50&&mouseY>400&&mouseX<100&&mouseY<450){
                fill(149, 201, 153);
                textSize(15);
                text("Eliminar",52,390);
            }
            if(mouseX> 120&&mouseY>400&&mouseX<170&&mouseY<450){
                fill(149, 201, 153);
                textSize(15);
                text("Agregar",120,390);
            }

            if(mouseX> 230&&mouseY>400&&mouseX<280&&mouseY<450){
                fill(149, 201, 153);
                textSize(15);
                text("Doblar Tam",210,390);
            }
            if(mouseX> 310&&mouseY>390&&mouseX<360&&mouseY<450){
                fill(149, 201, 153);
                textSize(15);
                text("Circulify",305,380);
            }
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
    if(mouseX>50&&mouseY>300&&mouseX<200&&mouseY<350&&pantalla==0){
   
        if(numero<10){
            numero++;  
        }else{

        }
              
      
    }
    if(mouseX>300&&mouseY>300&&mouseX<500&&mouseY<350&&pantalla==0){
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

if(mouseX>170&&mouseY>400&&mouseX<320&&mouseY<450&&pantalla==0&&numero!=0){

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

    for(let i=0;i<numero;i++){
        arrayCuadrados.push(new Cuadrado(10+i*(50),200,tam,tam));
    }
   
    return;

}



if(pantalla==1){


////ELIMINAR
    if(mouseX> 50&&mouseY>400&&mouseX<100&&mouseY<450){
        if(numero<11){
       arrayCuadrados.pop();
   
        }
        
        if(numero<11 && circulify==true){
            
            arrayCirculos.pop();
        
             }
        numero--;
}


//DOBLAR TAMANO
if(mouseX> 230&&mouseY>400&&mouseX<280&&mouseY<450){
    arrayCuadrados.forEach(function (elem){
    //  recty=true;
     elem.setTamX(35);
     elem.setTamY(35);
    
        tam=35;
        
        
       
    });
   if(circulify==true){

   
    arrayCirculos.forEach(function (elem){
        //  recty=true;
         elem.setTamX(35);
         elem.setTamY(35);

            tam=35;
           
            
            
           
        });
    
   }
}
// ADDDD
if(mouseX> 120&&mouseY>400&&mouseX<170&&mouseY<450){
    numero++;
    if(numero<11){
        arrayCuadrados.push(new Cuadrado((10+numero*(50))-45,200,tam,tam));
    }   
    if(numero<11&&circulify==true){
        arrayCirculos.push(new Circulo((30+numero*(50))-45,100,tam,tam));
    } 
  
    console.log(numero);

}
// CONVERTIR A CIRCULOS
if(mouseX> 310&&mouseY>390&&mouseX<360&&mouseY<450){
    circulify=true;
    
    arrayCirculos=arrayCuadrados.map(function(cir){
    return new Circulo(cir.getPosX()+20,100,tam,tam);
       

    });


   
    console.log(arrayCirculos.length);
}

}









}


function drawCirculos(){
    for(let i=0;i<arrayCirculos.length;i++){
        
        arrayCirculos[i].pintarCirculo();   
        }

  
}

function drawFiguras(){
    for(let i=0;i<arrayCuadrados.length;i++){
        arrayCuadrados[i].pintarCuadrado();   
        if(recty==true){
            arrayCuadrados[i].doblarTam();
        }
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
