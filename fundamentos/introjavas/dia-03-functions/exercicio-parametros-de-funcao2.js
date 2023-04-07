let clientesTrybeBank = ['Ada', 'John', 'Gus'];
let nomeCliente = "Gus";

function excluirCliente(nomeCliente){
    if (typeof nomeCliente !== 'string') {
        console.log('Erro: O nome do cliente deve ser uma string');
    } else {
        const indiceCliente = clientesTrybeBank.indexOf(nomeCliente);
        if (indiceCliente === -1){
            console.log(`O cliente ${nomeCliente} não existe`);
        }  else {
            clientesTrybeBank.splice(nomeCliente);
            console.log(`Cliente ${nomeCliente} removido com sucesso!`);
        }
    }
} 
excluirCliente(nomeCliente);


