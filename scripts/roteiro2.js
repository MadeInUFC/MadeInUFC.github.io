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
        "Leia N",
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
      status: true,
      descricao_problema: "Zerinho ou Um, dados os três valores escolhidos por Alice, Beto e Clara, cada valor zero ou um, escreva um programa que determina se há um ganhador, e nesse caso determina quem é o ganhador.",
      descricao_solucao: "Para cada caso de teste basta verificar se existe algum valor diferente dos outros dois para decidir quem ganhou , ou se todos são iguais indicando o empate.",
      analise: "Para cada caso de teste, precisamos verificar se o primeiro, o segundo ou o terceiro jogador ganhou, ou se houve empate, logo temos que realizar 4 operações.",
      implementacao: "https://github.com/MadeInUFC/MadeInUFC.github.io/blob/master/roteiros/roteiro2/problemas/problema3/resposta.cpp",
      pseudocodigo:[
        "A, B, C: inteiro",
        "Se A != B e A != C",
        "&emsp; escreva 'A'",
        "Senão, se B != A e B != C",
        "&emsp; escreva 'B'",
        "Senão, se C != A e C != B",
        "&emsp; escreva 'C'",
        "Senão",
        "&emsp; escreva '*'",
      ]
    },
    {
      titulo: "Revisão de Contrato",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1120",
      nivel: 5,
      status: true,
      descricao_problema: "Recentemente Sr. Miranda, um dos contadores da ACM, percebeu que a máquina apresentava falha em um, e apenas um, dos dígitos numéricos. Mais especificamente, o dígito falho, quando datilografado, não é impresso na folha, como se a tecla correspondente não tivesse sido pressionada. Por exemplo, se a máquina apresenta falha no dígito 5, o valor 1500 seria datilografado no contrato como 100, pois o 5 não seria impresso.",
      descricao_solucao: "Ao ler os digitos como string, verifique a existência do caractere falho na string e remova-os ou crie outra string sem eles, após isso basta verificar a questão dos 0's.",
      analise: "Já que é preciso percorrer a string 2 vezes para analisar os requisitos, a complexidade seria O(N + N).",
      implementacao: "https://github.com/MadeInUFC/MadeInUFC.github.io/blob/master/roteiros/roteiro2/problemas/problema4/resposta.cpp",
      pseudocodigo:[
        "A: caractere",
        "B: string",
        "Para cada caractere de B faça",
        "&emsp; se caractere == A",
        "&emsp;&emsp; removerCaractere(caractere)",
        "contador = 0: inteiro",
        "Enquanto cada caractere de B == '0' faça",
        "&emsp; contador = contador + 1",
        "Para c = contador ate B.tamanho() faça",
        "&emsp; escreva c",
      ]
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
      status: true,
      descricao_problema: "Vó Vitória mantém, desde o nascimento dos netos Joãozinho e Zezinho, um ritual que faz a alegria dos meninos. Ela guarda todas as moedas recebidas como troco em dois pequenos cofrinhos, um para cada neto. Ela sempre foi muito zelosa quanto à distribuição igualitária do troco arrecadado. Quando, por força do valor das moedas, ela não consegue depositar a mesma quantia nos dois cofrinhos, ela memoriza a diferença de forma a compensá-la no próximo depósito. Vó Vitória está ficando velha e tem medo que deslizes de memória a façam cometer injustiças com os netos, deixando de compensar as diferenças entre os cofrinhos. Sua tarefa é ajudar Vó Vitória, escrevendo um programa de computador que indique as diferenças entre os depósitos, de forma que ela não tenha que preocupar-se em memorizá-las.",
      descricao_solucao: "Basta guardar em duas variáveis a quantidade depositada nos cofres dos dois netos e verificar a diferença. Quando houver um novo depósito ter o cuidado de somar o que já se encontra depositado com o novo depósito.",
      analise: "Para todos os casos a complexiade é O(1) pois é preciso apenas fazer duas somas e uma subtração.",
      implementacao: "https://github.com/MadeInUFC/MadeInUFC.github.io/blob/master/roteiros/roteiro2/problemas/problema7/resposta.cpp",
      pseudocodigo:[
        "depositoA, depositoB, cofre1, cofre2: inteiro",
        "Para cada deposito faça",
        "&emsp; cofre1 = cofre1 + deposito1",
        "&emsp; cofre2 = cofre2 + deposito2",
        "&emsp; escreva cofre1 - cofre2",
      ]
    },
    {
      titulo: "Elevador",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2378",
      nivel: 1,
      status: true,
      descricao_problema: "Dadas as entradas N = número de leituras, e C = limite do número de pessoas em um elevaddor, o problema consiste em responder se o limite de pessoas em um elevador é excedido ou não após N entradas de leituras de pessoas que saem (S) e entram (E) em um elevador. A saída deverá ser 'S' caso o valor seja excedido, ou 'N' caso contrário",
      descricao_solucao: "Para solucionar o problema podemos guardar duas variáveis: T para o total de pessoas que estão no elevador após cada análise, e o caractere de saida 'result' que deve ter o valor inicial de 'N'. Para cada entrada de S, subtrai-se S de T (os casos de teste nunca serão negativos), e para cada  entrada de E, adiciona-se E a T. Antes da próxima análise, verifica-se se T > C, nesse caso, o valor de result passará a ser 'S', que será exibido após o fim das entradas de leitura (repare que, caso não aconteça T > C, a saída será 'N', como esperado).",
      analise: "A complexidade da solução depende invariávelmente do número de entradas de leitura, resultante do laço na linha 5, portanto será linear com O(n).",
      implementacao: "https://github.com/MadeInUFC/MadeInUFC.github.io/blob/master/roteiros/roteiro2/problemas/problema8/resposta.cpp",
      pseudocodigo:[
        "N, C, T, i: inteiro",
        "result: caractere",
        "T <- 0",
        "result <- 'N'",
        "Para i <-0 até N - 1, faça",
        "&emsp; Leia S e E",
        "&emsp; T <- T - S",
        "&emsp; T <- T + E",
        "&emsp; Se T > C faça",
        "&emsp;&emsp; result <- 'S'",
        "Retorne result"
      ]
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
