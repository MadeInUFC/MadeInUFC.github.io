//Base de dados com todos os roteiros e problemas
const data = {
  roteiros: [{
    titulo: "Template",
    problemas: [{
      titulo: "problema 1",
      titulo_origem: "URI",
      link_origem: "#",
      nivel: 0,
      status: true,
    },
    {
      titulo: "problema 2",
      titulo_origem: "URI",
      link_origem: "#",
      nivel: 0,
      status: false,
    }]
  },
  
  {
    titulo: "Introdução a programação",
    problemas: [{
      titulo: "Xadrez",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2787",
      nivel: 1,
      status: true
    },
    
    {
      titulo: "Paridade",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2176",
      nivel: 1,
      status: true
    },
    
    {
      titulo: "Pirâmide",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2785",
      nivel: 5,
      status: false
    },
    
    {
      titulo: "Dividindo círculos",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2802",
      nivel: 7,
      status: false
    },
    
    {
      titulo: "Hora da corrida",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2968",
      nivel: 5,
      status: true
    },
    
    {
      titulo: "Laércio",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2812",
      nivel: 4,
      status: true
    },
    
    {
      titulo: "O filme",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1963",
      nivel: 1,
      status: false
    },
    
    {
      titulo: "Jornada nas estrelas",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1973",
      nivel: 5,
      status: false
    },
    
    {
      titulo: "Pepe, já tirei a vela",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2152",
      nivel: 2,
      status: true
    }]

  }, {
    titulo: "AD-HOC",
    problemas: [{
      titulo: "Copa do Mundo",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2376",
      nivel: 2,
      status: false,
    },
    {
      titulo: "Conta de Água",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2369",
      nivel: 0,
      status: false,
    },
    {
      titulo: "Zero ou um",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1467",
      nivel: 0,
      status: false,
    },
    {
      titulo: "Revisão de Contrato",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1120",
      nivel: 0,
      status: false,
    },
    {
      titulo: "Coloque tijolos na parede",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1426",
      nivel: 0,
      status: false,
    },
    {
      titulo: "Alarme despertador",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1103",
      nivel: 3,
      status: false,
    },
    {
      titulo: "Cofrinhos da Vó Vitória",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2247",
      nivel: 3,
      status: false,
    },
    {
      titulo: "Elevador",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2348",
      nivel: 1,
      status: false,
    },
    {
      titulo: "Mini-Poker",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2298",
      nivel: 0,
      status: false,
    },
    {
      titulo: "Semente",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2452",
      nivel: 0,
      status: false,
    }
  ]
  },]
};

//Retorna uma lista de problemas de um determinado roteiro (a partir do index 1)
function getProblemas(roteiro) {
  return data.roteiros[roteiro].problemas;    
}

//Retorna quantos problemas estão resolvidos de um determinado roteiro
function getQtdProblemasResolvidos(roteiro) {
  let count = 0;

  data.roteiros[roteiro].problemas.forEach(function(p){
    if (p.status === true) count ++;
  });

  return count;
}
