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


  //  validate the input and set a alert


  if (isNaN(height) || isNaN(base)) {

    alert('Please enter a valid Number ');

    return;


  }


  //   calculate the area 

  const totalArea = 0.5 * height * base;
  //   bring total area  and set the value 


  addtocalculateentry( 'Triangle ' , totalArea) ;



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



  // validate input and set a alert 

  if (isNaN(width) || isNaN(length)) {

    alert('Please enter a number ')

    return;

  }



  // calculate the area and set the value 


  const totalArea = width * length;


  addtocalculateentry( 'Rectangle' , totalArea) ;



  const area = document.getElementById('Rectangle-area');

  area.innerText = totalArea;



}
//  calculate  Parallelogram area 


function calcaulateParalelgram() {

  const parabase = getinputvaluebyid('Para-Base');
  const paraHeight = getinputvaluebyid('Para-Height');



  // validate the input and set a alert 

  if (isNaN(parabase) || isNaN(paraHeight)) {

    alert('Enter valid number ');

    return;

  }



  const totalarea = paraHeight * parabase;

  addtocalculateentry( 'paralellogram' , totalarea) ;

  setinnertextbyid('para-area', totalarea)





}


//  calculate Rhombus area 


function calculaterhombusarea() {

  const base = getinputvaluebyid('Rhombus-Base');

  const height = getinputvaluebyid('Rhombus-Height');

  // validate  input and set alert

  if (isNaN(base) || isNaN(height)) {
    alert('Please enter numeric Input')
    return;
  }

  const area = 0.5 * base * height;

  addtocalculateentry( 'Rhombus' ,area ) ;

  setinnertextbyid('rhombus-area', area);

}



//  calculate Pentagon Area


function calculatepentagonarea() {

  const side = getinputvaluebyid('pentagon-Base');
  const height = getinputvaluebyid('pentagon-Height');



  //  validate input 

  if (isNaN(side) || isNaN(height)) {

    alert('apni number den nai ')
    return;

  }


  const area = 0.5 * side * height;

  addtocalculateentry( 'Pentagon' , area) ;


  setinnertextbyid('pentagon-area', area);

}


//  calculate Ellipse area 

function calcaulateellipsearea() {



  const base = getinputvaluebyid('Ellipse-Base');

  const side = getinputvaluebyid('Ellipse-Height');

  const area = 3.14 * base * side;





  //  validate input 

  if (isNaN(side) || isNaN(base)) {
    alert(' Ekhane Number chara kaj hoyna  ');
    return;


  }

  const fixedarea = area.toFixed(2);

  addtocalculateentry('Ellipse ', fixedarea)

  setinnertextbyid('Ellipse-area', fixedarea);



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

// add to calculation entry 

// get the element where you want to add the entry 
//  create a element \
//  set inner html , it could be dynamic 
//  appendchild the element



function addtocalculateentry(areatype, area) {

  const calculationarea = document.getElementById('area-calculator');

  const count = calculationarea.childElementCount ;

  const p = document.createElement('p');
  p.classList.add('my-4')

  p.innerHTML = ` ${count +1} ${areatype}${area} cm<sup>2</sup>  <button class ="btn btn-success "> Convert to m<sup>2</sup>  </button > ` ;
  calculationarea.appendChild(p);

}
