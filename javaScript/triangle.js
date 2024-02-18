// Triangle Calculation

function calculateTriangle(){
    const inputText1 = document.getElementById('inputBox1');
    const triangleTextBase = inputText1.value;
    const TriangleToNumber = parseFloat(triangleTextBase)

    const inputText2 = document.getElementById('inputBox2');
    const triangleTextheight = inputText2.value;
    const heightToNumber = parseFloat(triangleTextheight)

    const area = 0.5 * TriangleToNumber * heightToNumber;
    // console.log("Area of the Triangle is :", area)

    const calculatorBox = document.getElementById('Show-the-result-here')
    const p = document.createElement('p');
    p.innerText = area;
    p.style.fontSize = "50px"
    calculatorBox.appendChild(p)

}


// Rectangle Calculation

function calculateRectangle(){
    const inputText3 = document.getElementById('inputBox3');
    const rectangleTextBase = inputText3.value;
    const rectangleBase = parseFloat(rectangleTextBase)

    const inputText4 = document.getElementById('inputBox4');
    const rectangleTextHeight = inputText4.value;
    const rectangleHeight = parseFloat(rectangleTextHeight)

    const area = rectangleBase * rectangleHeight;
    console.log("Area of the Rectangle is :", area)
}