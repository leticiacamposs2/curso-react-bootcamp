// Desafio 3
// Nesse código, sua função recebe um parâmetro.
// Você deve modificar o código abaixo com base nas seguintes regras:

// Sua função deve sempre retornar uma promise
// Se os dados não forem um número, 
// retorne uma promise rejeitada instantaneamente 
// e mostre o conteúdo do "erro"
// Se os dados forem um número ímpar, 
// retorne uma promise resolvida 1 segundo depois e exiba a mensagem "ímpar"
// Se os dados forem um número par, 
// retorne uma promise rejeitada 2 segundos depois e exiba a mensagem "par"

function job(data) {
    return new Promise((resolve, reject) => {
        if (typeof data !== 'number') {
            reject('erro, dado de entrada não é válido')
        }
        else if (data % 2 !== 0) {
            setTimeout(() => {
                resolve('ímpar')
            })
        }
        else if (data % 2 === 0) {
            setTimeout(() => {
                reject('par')
            }, 2000)
        }
    })
}
job(3)
    .then(content => console.log(content))
    .catch(erro => console.log('>>>', erro))