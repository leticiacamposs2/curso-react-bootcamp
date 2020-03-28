import validador from 'validator';

class SubmitButton {
    constructor(validacao) {
        this.validacao = validacao;
    }

    valida(state) {

        let contador = 0;
        let mensagens = [];
        const tamanho = this.validacao.length;

        for (let i = 0; i < tamanho; i++) {

            const campoValor = state[this.validacao[i].campo];
            const metodoValidacao = validador[this.validacao[i].metodo];

            if (metodoValidacao(campoValor, [], state)) {
                mensagens.push(this.validacao[i].mensagem);
                contador++;
            }
        }

        return contador > 0 ? mensagens : true;
    }

}

export default SubmitButton;
