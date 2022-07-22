class Professor {
    constructor(nomeCompleto, email, saldo, mesesHabilitados, pontuacaoDasComissoes, valorRecebido ) {
        this._nomeCompleto = nomeCompleto;
        this._email = email;
        this._grupo = 'professor';
        this._saldo = parseInt(saldo);
        this._mesesHabilitados = parseInt(mesesHabilitados);
        this._pontuacaoDasComissoes = parseFloat(pontuacaoDasComissoes);
        this._valorRecebido = parseFloat(valorRecebido);
    } 
}

class Secretario {
    constructor(nomeCompleto, email ) {
        this._nomeCompleto = nomeCompleto;
        this._email = email;
        this._grupo = 'secretario';
    } 
}





console.log(vetorDeServidor);

for (i in  vetorDeServidor) {
    if (vetorDeServidor[i]._grupo === 'professor') {
        console.log(vetorDeServidor[i]._primeiroNome + " " + vetorDeServidor[i]._ultimoNome);
    }
}