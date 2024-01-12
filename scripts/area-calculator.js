function caclculateTriangleArea() {
  //  get the base value from the input field 
  const triangleBase = document.getElementById('triangle-base');
  const base = parseFloat(triangleBase.value);


  triangleBase.value = '';


  //  get the height value from input  field 
  const triangleHeight = document.getElementById('triangle-height');
  const height = parseFloat(triangleHeight.value);

  triangleHeight.value = '';


  //   calculate the area 

  const totalArea = 0.5 * height * base;
  //   bring total area  and set the value 



  const Trianglearea = document.getElementById('totalTriangleArea');
  Trianglearea.innerText = totalArea;



}


// calculate Rectangle Area 


function calculateRectangleArea() {

//  get the rectangle width 

const RectangleWidth = document.getElementById('Rectangle-width') ;
 const width = parseFloat( RectangleWidth.value);

 RectangleWidth.value = '' ;
   
  // get the rectangle length

   const rectangleLength = document.getElementById('Rectangle-length') ;
    const length = parseFloat(rectangleLength.value);

    rectangleLength.value = '' ; 



    // calculate the area and set the value 


    const totalArea =  width * length ;

     

    const area = document.getElementById('Rectangle-area') ;

    area.innerText = totalArea ;



}