const calcular = document.querySelector("#calcular")

const IMC = () => {
    const nome = document.querySelector("#nome").value
    const altura = document.querySelector("#altura").value
    const peso = document.querySelector("#peso").value
    const resultado = document.querySelector("#resultado")

    if (nome !== "" && altura !== "" && peso !== "") {
        const valorImc = (peso / (altura * altura)).toFixed(1);

        let classificacao = ""

        if (valorImc < 18.5) {
            classificacao = "abaixo do peso"
        }

        else if (valorImc < 25) {
            classificacao = "peso ideal parceiro, parabéns"
        }

        else if (valorImc < 30) {
            classificacao = "um pouco acima do peso"
        }

        else if (valorImc < 35) {
            classificacao = "obesidade nível I, cuidado"
        }

        else if (valorImc < 40) {
            classificacao = "obesidade nível II! Se cuide"
        }
        
        else {
            classificacao = "OBESIDADE NÍVEL III!!! CONSULTE UM MÉDICO"
        }

        resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao}`;
    }

    
}

calcular.addEventListener("click", IMC);