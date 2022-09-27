function start() {
    var buttonCalc = document.querySelector('#buttonCalc');
    buttonCalc.addEventListener('click', handleButtonClick);

    var inputWeight = document.querySelector('#in-weight');
    var inputHeight = document.querySelector('#in-height');

    inputWeight.addEventListener('input', handleButtonClick);
    inputHeight.addEventListener('input', handleButtonClick);

    handleButtonClick();
}

function calculateIMC(weight, height) {
    return weight / (height * height);
}

function handleButtonClick() {
    var inputWeight = document.querySelector('#in-weight');
    var inputHeight = document.querySelector('#in-height');
    var imcResult = document.querySelector('#imc-result')
    var imcGroup = document.querySelector('#imc-group')

    var weight = inputWeight.value;
    var height = inputHeight.value;

    var imc = calculateIMC(weight, height);
    var formattedIMC = imc.toFixed(2).replace('.',',');
    
    imcGroup.textContent = checkGroupIMC(imc)

    imcResult.textContent = formattedIMC;

}

function checkGroupIMC(imc) {
    //var imcGroup = document.querySelector('#imc-group')

    if (imc < 16) {
        return "inválido";
    }
    else if (imc < 17) {
        return "Muito abaixo do peso";
    }
    else if (imc < 18.5) {
        return "Abaixo do peso";
    }
    else if (imc < 25) {
        return "Peso normal";
    }
    else if (imc < 30) {
        return "Acima do peso";
    }
    else if (imc < 35) {
        return "Obesidade grau I";
    }
    else if (imc <= 40) {
        return "Obesidade grau II";
    }
    else if (imc > 40) {
        return "Obesidade grau III";
    }
}
     
start();
