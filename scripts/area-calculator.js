// calcaulate triangle area

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

  const RectangleWidth = document.getElementById('Rectangle-width');
  const width = parseFloat(RectangleWidth.value);

  RectangleWidth.value = '';

  // get the rectangle length

  const rectangleLength = document.getElementById('Rectangle-length');
  const length = parseFloat(rectangleLength.value);

  rectangleLength.value = '';



  // calculate the area and set the value 


  const totalArea = width * length;



  const area = document.getElementById('Rectangle-area');

  area.innerText = totalArea;



}
//  calculate  Parallelogram area 


function calcaulateParalelgram() {

  const parabase = getinputvaluebyid('Para-Base');
  const paraHeight = getinputvaluebyid('Para-Height');



  const totalarea = paraHeight * parabase;

  setinnertextbyid('para-area', totalarea)





}


//  calculate Rhombus area 


function calculaterhombusarea() {

  const base = getinputvaluebyid('Rhombus-Base');

  const height = getinputvaluebyid('Rhombus-Height');


  const area = 0.5 * base * height;

  setinnertextbyid('rhombus-area', area);

}



//  calculate Pentagon Area


function calculatepentagonarea() {

  const side = getinputvaluebyid('pentagon-Base');
  const height = getinputvaluebyid('pentagon-Height');


  const area = 0.5 * side * height;


  setinnertextbyid('pentagon-area', area);

}


//  calculate Ellipse area 

function calcaulateellipsearea (){



const base  = getinputvaluebyid('Ellipse-Base') ;

const side = getinputvaluebyid('Ellipse-Height') ;

const area  = 3.14 * base * side ;


setinnertextbyid( 'Ellipse-area' , area ) ;

}










//  write re usable function 


function getinputvaluebyid(elementid) {

  const field = document.getElementById(elementid);
  const fieldvalue = parseFloat(field.value);
  field.value = '';



  return fieldvalue;

};
//  write a reusable code to set the text inside a texttag


function setinnertextbyid(elementid, area) {

  const element = document.getElementById(elementid);
  element.innerText = area;

}


