// Triangle Calculation

function calculateTriangle() {
    const inputText1 = document.getElementById('inputBox1');
    const triangleTextBase = inputText1.value;
    const TriangleToNumber = parseFloat(triangleTextBase)

    const inputText2 = document.getElementById('inputBox2');
    const triangleTextheight = inputText2.value;
    const heightToNumber = parseFloat(triangleTextheight)

    const area = 0.5 * TriangleToNumber * heightToNumber;

    const TriangleAreaValue = document.getElementById('triangle-area-value');
    TriangleAreaValue.innerText = area
    // console.log("Area of the Triangle is :", area)

    // const calculatorBox = document.getElementById('Show-the-result-here')
    // const p = document.createElement('p');
    // p.innerText = area;
    // p.style.fontSize = "50px"
    // calculatorBox.appendChild(p)

}


// Rectangle Calculation

function calculateRectangle() {
    const inputText3 = document.getElementById('inputBox3');
    const rectangleTextBase = inputText3.value;
    const rectangleBase = parseFloat(rectangleTextBase)

    const inputText4 = document.getElementById('inputBox4');
    const rectangleTextHeight = inputText4.value;
    const rectangleHeight = parseFloat(rectangleTextHeight)

    const area = rectangleBase * rectangleHeight;

    const rectangleAreaValue = document.getElementById('rectangleAreaValue');
    rectangleAreaValue.innerText = area
}


// Parallelogram calculator

function calculatorParallelogram() {
    const ParallelogramInput = document.getElementById('parallelogramBase');
    const parallelogramText = ParallelogramInput.value;
    const Base = parseFloat(parallelogramText)


    const ParallelogramSecondInput = document.getElementById('parallelogramHeight');
    const ParallelogramHeight = ParallelogramSecondInput.value;
    const height = parseFloat(ParallelogramHeight);

    const AreaValue = Base * height;
    const ParallelogramAreaValue = document.getElementById('parallelogramAreaValue');
    ParallelogramAreaValue.innerText = AreaValue

}


// Rhombus Calculator

function calculatorRhombus() {
    const rhombusd1Input = document.getElementById('rhombusd1');
    const rhombusd1Text = rhombusd1Input.value;
    const valued1 = parseFloat(rhombusd1Text);

    const rhombusd2Input = document.getElementById('rhombusd2');
    const rhombusd2Text = rhombusd2Input.value;
    const valued2 = parseFloat(rhombusd2Text);

    const area = 0.5 * valued1 * valued2

    const rhombusAreaValue = document.getElementById('rhombusAreaValue');
    rhombusAreaValue.innerText = area
}


// Pentagon Calculator

function calculatorPentagon() {
    const PentagonValueP = document.getElementById('pentagonValueP');
    const PentagonValuePText = PentagonValueP.value;
    const valueP = parseFloat(PentagonValuePText);

    const PentagonValueB = document.getElementById('pentagonValueB');
    const PentagonValueBText = PentagonValueB.value;
    const valueB = parseFloat(PentagonValueBText);

    const area = 0.5 * valueP * valueB;
    const PentagonAreaValue = document.getElementById('pentagonAreaValue');
    PentagonAreaValue.innerText = area
}


// Ellipse Calculator 

function calculatorEllipse() {
    const ellipseValueA = document.getElementById('ellipsevalueA');
    const ellipseValueAText = ellipseValueA.value;
    const valueA = parseFloat(ellipseValueAText);

    const ellipseValueB = document.getElementById('ellipsevalueB');
    const ellipseValueBText = ellipseValueB.value;
    const valueB = parseFloat(ellipseValueBText);

    const area = 3.14 * valueA * valueB
    const EllipseAreaValue = document.getElementById('ellipseAreaValue');
    EllipseAreaValue.innerText = area
}