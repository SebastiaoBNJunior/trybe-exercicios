let clientesTrybeBank = ['Ada', 'John', 'Gus'];
let nomeCliente = "Junior";

function adicionarCliente(nomeCliente){
    if (typeof nomeCliente !== 'string') {
        console.log('Erro: O nome do cliente deve ser uma string');
    } else {
        clientesTrybeBank.push(nomeCliente);
        console.log(`Cliente ${nomeCliente} adicionado com sucesso!`);
    }
 
}
adicionarCliente(nomeCliente);


// clientesTrybeBank.push(''); // adiciona mais nomes ao array

