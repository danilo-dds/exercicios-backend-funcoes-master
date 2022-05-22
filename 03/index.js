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
        console.log(`Cliente: ${this.nomeDoCliente}
Total de intens: ${this.calcularTotalDeItens()};
Total a pagar: RS${this.calcularTotalAPagar()}`);
    },

    addProduto: function (produto) {
        let indiceProdutoExistente = -1;
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id === produto.id) {
                indiceProdutoExistente = i;
                break;
            }
        }
        if (indiceProdutoExistente === -1) {
            this.produtos[this.produtos.length] = produto;
        } else {
            this.produtos[indiceProdutoExistente].qtd += produto.qtd;
        }

    },

    imprimirDetalhes: function () {
        console.log(this.nomeDoCliente);
        console.log();
        for (let itens = 0; itens < this.produtos.length; itens++) {
            console.log(`Item ${itens + 1} - ${this.produtos[itens].nome} - ${this.produtos[itens].qtd} und - R$ ${this.produtos[itens].precoUnit / 100 * this.produtos[itens].qtd} `);
        }
        console.log();
        console.log(`Total de intens: ${this.calcularTotalDeItens()}
Total a pagar: RS${this.calcularTotalAPagar() / 100}`);
    },

    calcularTotalDeItens: function () {
        let totalItens = 0;
        for (let itens of this.produtos) {
            totalItens += itens.qtd;
        }
        return totalItens;
    },

    calcularTotalAPagar: function () {
        let totalPagar = 0;
        for (let itens of this.produtos) {
            totalPagar += itens.qtd * itens.precoUnit;
        }
        let totalPagarTexto = totalPagar / 100;
        return totalPagar;
    },

    calcularDesconto: function () {
        let totalPagar = this.calcularTotalAPagar();
        let totalItens = this.calcularTotalDeItens();

        let descontoPorItens = 0;
        let descontoPorTotal = 0;

        if (totalItens > 4) {
            descontoPorItens = this.produtos[0].precoUnit;
            for (let i = 1; i < this.produtos.length; i++) {
                if (this.produtos[i].precoUnit < descontoPorItens)
                    descontoPorItens = this.produtos[i].precoUnit;
            }
        }

        if (totalPagar > 10000) {
            descontoPorTotal = totalPagar * 0.1;
        }

        return descontoPorItens > descontoPorTotal ? descontoPorItens : descontoPorTotal;
    }
}
console.log(carrinho.calcularDesconto() / 100);
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(novaBermuda);

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.addProduto(novoTenis);

console.log(carrinho.calcularDesconto() / 100);

carrinho.imprimirResumo();
carrinho.imprimirDetalhes();