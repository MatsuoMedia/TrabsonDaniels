angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Bitcoins',
    lastText: 'Entender o Bitcoin é simples. Ele é uma tecnologia digital que permite reproduzir em pagamentos eletrônicos a eficiência dos pagamento com cédulas descrita acima. Pagamentos com bitcoins são rápidos, baratos e sem intermediários. Além disso, eles podem ser feitos para qualquer pessoa, que esteja em qualquer lugar do planeta, sem limite mínimo ou máximo de valor.',
    face: 'img/ben.jpg'
  }, {
    id: 1,
    name: 'Litecoin',
    lastText: 'Surgiu em outubro de 2011 e destaca-se por ser bem mais leve do que o BTC tradicional. O processamento de blocos, por exemplo, ocorre a cada 2,5 minutos (contra os 10 minutos do Bitcoin original). Além disso, os pacotes de dados dos Litecoins são bem mais leves e podem ser minerados através de hardwares mais modestos, dispensando o uso de máquinas criadas especialmente para essa finalidade. Atualmente, 1 LTC equivale a cerca de US$ 2,92 (ou R$ 6,64 aproximadamente).',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Peercoin',
    lastText: 'Peercoin ambiciona ser a criptomoeda mais segura ao mais baixo custo, recompensando todos os utilizadores por reforçar a rede.',
    face: 'img/adam.png'
  }, {
    id: 3,
    name: 'Feathercoin',
    lastText: 'Feathercoin is a powerful open source digital currency with monetary properties linked to Bitcoin, Litecoin and myriad of countless alt coins, but under the hood ...',
    face: 'img/perry.jpg'
  }, {
    id: 4,
    name: 'Terracoin',
    lastText: 'Terracoin is a cryptocurrency with a blockchain dating back to 2012. It is similar to Bitcoin, but with faster transactions, and improved security by having merged ...',
    face: 'img/mike.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
