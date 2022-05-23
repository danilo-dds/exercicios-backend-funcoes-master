const contaBacaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function (valor) {
        this.saldo += valor;
        this.historicos[this.historicos.length] = {
            tipo: "Depósito",
            valor: valor
        }
        return `Deposito de R$${valor / 100} realizado para o cliente: ${this.nome}.`;
    },

    sacar: function (valor) {
        if (valor > this.saldo) {
            return `Saldo insuficiente para o saque de: ${this.nome}.`;
        } else {
            this.sacar -= valor;
            this.historicos[this.historicos.length] = {
                tipo: "Saque",
                valor: valor
            }
            return `Saque de R$${valor / 100} realizado para o cliente: ${this.nome}.`
        }
    },

    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$${this.saldo / 100}
Histórico:`)

        for (historico of this.historicos) {
            console.log(`${historico.tipo} de R$${historico.valor / 100}`)
        }

    }
}
console.log(contaBacaria.depositar(10000));
console.log(contaBacaria.sacar(50000));
console.log(contaBacaria.sacar(5000));
contaBacaria.extrato();