
const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],

    imprimirResumo: function () {
        let totalItens = 0;
        let totalPagar = 0;
        for (let itens of carrinho.produtos) {
            totalItens += itens.qtd;
            totalPagar += itens.qtd * itens.precoUnit;
        }
        console.log(`Cliente: ${this.nomeDoCliente}
Total de intens: ${totalItens};
Total a pagar: RS${totalPagar}`);
    }
}

carrinho.imprimirResumo();