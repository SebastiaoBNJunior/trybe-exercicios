// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim'
//   };

//   info['recorrente'] = 'Sim';
//   console.log(info);


//   for (let key in info) {
//     console.log(key);
//   }

//   for (let index in info) {
//     console.log(info[index]);
//   }

//   ///////////////////////////

//   let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
//   };

//   for (let key in info) {
//     if (
//       key === 'recorrente' &&
//       info[key] === 'Sim' &&
//       info2[key] === 'Sim'
//     ) {
//       console.log('Ambos recorrentes');
//     } else {
//       console.log(info[key] + ' e ' + info2[key]);
//     }
//   }


//   /////////

//   let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };
//   console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

//   leitor.livrosFavoritos.push(
//     {
//       titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//       autor: 'JK Rowling',
//       editora: 'Rocco',
//     },
//   );

// // Há dois modos de acessar a chave "livrosFavoritos":
// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');

// // ou

// console.log(leitor['nome'] + ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos.');


let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(order) {
  let address = 'address'; // Armazene a palavra 'address' em uma variável.
  let deliveryPerson = order.order.delivery.deliveryPerson; // Acesse e armazene o valor da chave `deliveryPerson` em uma variável através de 'notação de ponto'.
  let customerName = order['name']; // Acesse e armazene o valor da chave `name` em uma variável através de 'notação de colchetes'.
  let customerPhone = order['phoneNumber']; // Acesse e armazene o valor da chave `phoneNumber` em uma variável através de 'notação de colchetes'.
  let street = order[address].street; // Acesse e armazene o valor da chave `street` em uma variável através de 'notação de colchetes' e 'notação de ponto'.
  let number = order[address].number; // Acesse e armazene o valor da chave `number` em uma variável através de 'notação de colchetes' e 'notação de ponto'.
  let apartment = order[address].apartment; // Acesse e armazene o valor da chave `apartment` em uma variável através de 'notação de colchetes' e 'notação de ponto'.

  console.log('Olá ' + deliveryPerson + ', entrega para: ' + customerName + ', Telefone: ' + customerPhone + ', R. ' + street + ', Nº: ' + number + ', AP: ' + apartment);
}

customerInfo(order);


function orderModifier(order) {
  let newBuyer = order.name = 'Luiz Silva';
  let newTotal = order.payment.total = '50';
  let pizzas = Object.keys(order.order.pizza);
  let drinks = order.order.drinks.coke.type;

  console.log('Olá ' + newBuyer + ', o total do seu pedido de ' + pizzas[0] + ', ' + pizzas[1] + ' e ' + drinks + ' é R$ ' + newTotal + ',00.'); // Exiba a mensagem desejada
}

orderModifier(order);