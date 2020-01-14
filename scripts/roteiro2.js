const roteiro2 = {
  titulo: "Ad-hoc",
  num: 2,
  descricao: "Em livre tradução do latim, 'para uma finalidade', são problemas com soluções de lógica e matemática",
  dificuldade: "baixa",
  outros: [
    {
      titulo: "URI - Ad-hoc",
      link: "https://www.urionlinejudge.com.br/judge/pt/problems/index/2",
    },
  ],
  materiais_de_apoio: [
    {
      titulo: "Artigo - Como encontrar uma solução (inglês)",
      link: "https://www.topcoder.com/community/competitive-programming/tutorials/how-to-find-a-solution/",
    },

    {
      titulo: "Artigo - A importância dos algoritmos (inglês)",
      link: "https://www.topcoder.com/community/competitive-programming/tutorials/the-importance-of-algorithms/",
    }
  ],
  problemas: [
    {
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
      nivel: 1,
      status: true,
      descricao_problema: "Temos uma tabela de valores para cobrança de água por metro cúbico gasto, onde abaixo de 10 metros cúbicos é cobrado apenas o valor da franquia de 7R$, de 11 a 30 é cobrado + 1R$ por litro, de 31 a 100 é cobrado +2R$ por litro e de 101 em diante é cobrado 5$ por litro. O problema consiste em: dada a entrada N = um certo consumo de água, deve-se exibir a cobrança gerada.",
      descricao_solucao: "Podemos resolver o problema usando análises condicionais para determinar a faixa de N. Caso N seja menos que 10, retornaremos 7, caso contrário retornaremos o montante das faixas anteriores adicionado N removido do valor mais alto da última faixa e multiplicado pelo preço da faixa de N.",
      analise: "Para esta solução usamos principalmente operações matemática, sem o uso de laços podemos afirmar que sua complexidade será de O(1) para todos os casos.",
      implementacao: "https://github.com/MadeInUFC/MadeInUFC.github.io/blob/master/roteiros/roteiro2/problemas/problema2/resposta.cpp",
      pseudocodigo:[
        "N: inteiro",
        "Leita N",
        "Se N < 11 então",
        "&emsp; retorne 7",
        "Senão, se N < 31",
        "&emsp; retorne 7 + N - 10",
        "Senão, se N < 101",
        "&emsp; retorne 27 + (N - 30)*2",
        "Senão",
        "&emsp; retorne 167 + (N - 100)*5",
      ]
    },
    {
      titulo: "Zerinho ou um",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1467",
      nivel: 1,
      status: false,
    },
    {
      titulo: "Revisão de Contrato",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1120",
      nivel: 5,
      status: false,
    },
    {
      titulo: "Coloque tijolos na parede",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1426",
      nivel: 2,
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
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2378",
      nivel: 1,
      status: false,
    },
    {
      titulo: "Mini-Poker",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2298",
      nivel: 6,
      status: false,
    },
    {
      titulo: "Semente",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2452",
      nivel: 6,
      status: false,
    }
  ]
}
