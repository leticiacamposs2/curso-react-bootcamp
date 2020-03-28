import validador from 'validator';

class SubmitButton {
    constructor(validacao) {
        this.validacao = validacao;
    }

    valida(state) {

        let contador = 0;
        const tamanho = this.validacao.length;

        for (let i = 0; i < tamanho; i++) {

            const campoValor = state[this.validacao[i].campo];
            const metodoValidacao = validador[this.validacao[i].metodo];

            if (metodoValidacao(campoValor, [], state)) {
                console.log('Mensagem de erro:', this.validacao[i].mensagem);
                contador++;
            }
        }

        return contador > 0 ? false : true;
    }

}

export default SubmitButton;
