// promise é uma promessa que pode ser ou não cumprida
// é uma classe instancia que recebe 2 funções de callback o resolve (deu sucesso) e o reject (deu ruim)

// resolve operações assincronas
// .then esta continuando a promisse

// resolve = sucesso
// reject = falha
// .then = continua a promisse ate ser resolvida


// TRICKS o resolve executa somente 1 vez, igual o return o que tiver na linha abaixo não executa

// encadeamento de promisses 
// com callback chama uma função dentro da outra, na promisses usa o .then e ele continua

function job1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('deu sucesso! Job1')
            reject('Houve problema na transação')
        }, 2000)
    })
}

function job2() {
    return new Promisse((resolve, reject) => {
        resolve('deu sucesso! Job2');
        reject('Houve problema na transação')
    }, 1000)
}

const promise = job1()

promise
.then(response => {
    return job2()
})
.then(response2 => {
    console.log('promise 2', response2)
})
.catch(error =>  console.log('erro >>>>>>>', error))

// promisse manda pra API com retorno de sucesso, se der ruim trata no CATCH


// promise.then(response => {
//     console.log(response);
// })

// await o resultado de uma coisa acabar, para conseguir seguir em frente 

//arrow function quando só tem 1 parametro, nem precisa ficar entre aspas
//ajuda com o this




