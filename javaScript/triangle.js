function calculatorEllipse(){
    const ellipsevalueA = thatConvertToNumber('ellipsevalueA');
    const ellipsevalueB = thatConvertToNumber('ellipsevalueB');
    const calculator = 3.14 * ellipsevalueA * ellipsevalueB;
    const calculate = calculator.toFixed(2)
    setAsAInnerText('ellipseAreaValue', calculate);

    showInCalculator("Ellipse Area Value Is :", calculate)
}
function calculatorParallelogram(){
    const parallelogramBase = thatConvertToNumber('parallelogramBase');
    const parallelogramHeight = thatConvertToNumber('parallelogramHeight');
    const calculate = parallelogramBase * parallelogramHeight;
    setAsAInnerText('parallelogramAreaValue', calculate);

    showInCalculator("Parallelogram Area Value Is :", calculate)
}

function calculateRectangle(){
    const inputBox3 = thatConvertToNumber('inputBox3');
    const inputBox4 = thatConvertToNumber('inputBox4');
    const calculate = inputBox3 * inputBox4;
    setAsAInnerText('rectangleAreaValue', calculate);

    showInCalculator("Rectangle Area Value Is :", calculate)
}


function calculatorPentagon(){
    const pentagonValueP = thatConvertToNumber('pentagonValueP');
    const pentagonValueB = thatConvertToNumber('pentagonValueB');
    const calculate = 0.5 * pentagonValueP * pentagonValueB;
    setAsAInnerText('pentagonAreaValue', calculate);

    showInCalculator("Pentagon Area Value Is :", calculate)
}

function calculatorRhombus(){
    const rhombusd1 = thatConvertToNumber('rhombusd1');
    const rhombusd2 = thatConvertToNumber('rhombusd2');
    const calculate = 0.5 * rhombusd1 * rhombusd2;
    setAsAInnerText('rhombusAreaValue', calculate);

    showInCalculator("Rhombus Area Value Is :", calculate)
    
}

function calculateTriangle(){
    const inputBox1 = thatConvertToNumber('inputBox1');
    const inputBox2 = thatConvertToNumber('inputBox2');

    const area = 0.5 * inputBox1 * inputBox2;
    setAsAInnerText('triangle-area-value', area);

    showInCalculator("Triangle Area Value Is :", area)
}

function thatConvertToNumber(inputId){
    const inputs = document.getElementById(inputId);
    const inputValue = inputs.value;
    const value = parseFloat(inputValue);
    return value
}

function setAsAInnerText(areaId, result){
    const textField = document.getElementById(areaId);
    textField.innerText = result
}

function showInCalculator(geoName, output){
    const showTheResult = document.getElementById('Show-the-result-here');

    const anotherp = document.createElement('p');
    anotherp.innerText = geoName;
    anotherp.style.fontSize = '20px'
    showTheResult.appendChild(anotherp)

    const p = document.createElement('p');
    p.innerText = output;
    p.style.fontSize = '50px';
    showTheResult.appendChild(p)
    
}