// UI Elements
const
    height = document.querySelector('#height'),
    weight = document.querySelector('#weight'),
    bmi = document.querySelector('#bmi'),
    res = document.querySelector('h2'),
    info = document.querySelector('.info');

document.querySelector('#bmi-form').addEventListener('submit', function (event) {

    if (res.firstChild) {
        res.firstChild.remove();
    }

    const bmi = (weight.value / Math.pow((height.value / 100), 2)).toFixed(1);

    console.log(bmi);

    let result, color, text;



    if (bmi < 18.5) {
        result = `${bmi} Underweight`;
        text = 'This BMI is considered underweight. Being underweight may pose certain health risks, including nutrient deficiencies and hormonal changes. Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a more complete picture of any health risks. A person should consult with their healthcare provider and consider making lifestyle changes through healthy eating and fitness to improve their health indicators.';
        color = 'skyblue';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result = `${bmi} Normal`;
        text = "This BMI is considered normal. Maintaining a healthy weight may lower the risk of developing certain health conditions, including cardiovascular disease and type 2 diabetes. Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a more complete picture of any health risks.";

        color = 'green';
    } else if (bmi >= 25 && bmi <= 29.9) {
        result = `${bmi} Overweight`;
        text = 'This BMI is considered overweight. Being overweight may increase the risk of certain health conditions, including cardiovascular disease, high blood pressure, and type 2 diabetes. Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a more complete picture of any health risks. A person should consult with their healthcare provider and consider making lifestyle changes through healthy eating and fitness to improve their health indicators.';
        color = 'orange';
    } else if (bmi >= 30) {
        result = `${bmi} Obese`;
        text = 'This BMI is considered obese. People with obesity have increased risk of cardiovascular disease, type 2 diabetes, high blood pressure, and other health conditions. Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a more complete picture of any health risks. A person should consult with their healthcare provider and consider making lifestyle changes through healthy eating and fitness to improve their health indicators.';
        color = 'red';
    } else {
        result = 'Please Enter the Details';
        text = '';
        color = 'red';

    }

    res.appendChild(document.createTextNode(result));
    res.style.color = color;
    info.appendChild(document.createTextNode(text));

    event.preventDefault();
});