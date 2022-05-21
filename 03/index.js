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
        let totalPagarTexto = totalPagar / 100;
        console.log(`Cliente: ${this.nomeDoCliente}
Total de intens: ${totalItens};
Total a pagar: RS${totalPagarTexto}`);
    },

    addProduto: function (carrinho, produto) {
        let indiceProdutoExistente = -1;
        for (let i = 0; i < carrinho.produtos.length; i++) {
            if (carrinho.produtos[i].id === produto.id) {
                indiceProdutoExistente = i;
                break;
            }
        }
        if (indiceProdutoExistente === -1) {
            carrinho.produtos[carrinho.produtos.length] = produto;
        } else {
            carrinho.produtos[indiceProdutoExistente].qtd += produto.qtd;
        }

    },

    imprimirDetalhes: function () {
        console.log(this.nomeDoCliente);
        for (let items = 0; items < this.produtos.length; items++) {
            console.log(`Item ${items + 1} - ${this.produtos[items].nome} - ${this.produtos[items].qtd} und - R$ ${this.produtos[items].precoUnit / 100 * this.produtos[items].qtd} `)
        }
        console.log();

        let totalItens = 0;
        let totalPagar = 0;
        for (let itens of carrinho.produtos) {
            totalItens += itens.qtd;
            totalPagar += itens.qtd * itens.precoUnit;
        }
        let totalPagarTexto = totalPagar / 100;
        console.log(`Total de intens: ${totalItens};
Total a pagar: RS${totalPagarTexto}`);
    },

}


const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(carrinho, novaBermuda);
//carrinho.imprimirResumo();
carrinho.imprimirDetalhes();