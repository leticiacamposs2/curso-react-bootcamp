// Callback

function exibeTexto(callback) {
    setTimeout(() => {
        callback('texto 1');
    }, 3000);
}

function exibeOutroTexto(callback) {
    setTimeout(() => {
        callback('texto 2');
    }, 5000)
}

exibeTexto((data) => {
    console.log('callback: 1 = ', data);

    exibeOutroTexto((data) => {
        console.log('callback: 2 = ', data);
    })
});