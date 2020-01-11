const roteiro1 = {
  titulo: "Introdução à programação",
  num: 1,
  descricao: "Problemas básicos de maratonas de programação",
  dificuldade: "baixa",
  problemas: [
    //Problema 1 (Roteiro 1)
    {
      titulo: "Xadrez",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2787",
      nivel: 1,
      status: true,
      descricao_problema: "Dadas duas entradas, L: número de linhas de um tabuleiro de xadrez, e C: número de colunas, forneça qual será a cor da última casa no canto inferior direito, sendo 1 para branco de 0 para preto. (sabe-se que a primeira casa, do canto superior esquerdo, é sempre branca)",
      descricao_solucao: "Podemos observar que o padrão de xadrez se inicia branco em 1 x 1, que são números ímpares, e se alterna tal qual a paridade dos números da linha e da coluna. Logo, basta analisar se a paridade da linha e da coluna coincide, nesse caso será branco, caso contrário será preto.",
      analise: "Para todos os casos o tempo de execução é constate (O(1)) visto que há apenas as operaçõs de leitura, comparação e escrita na solução.",
      implementacao: "https://github.com/MadeInUFC/MadeInUFC.github.io/blob/master/roteiros/roteiro1/problemas/problema1/resposta.cpp",
      pseudocodigo: [
        "L, C: inteiros",
        "Leia L",
        "Leia C",
        "Se L e C são pares ou L e C são ímpares",
        "&emsp; Escreva 1",
        "Se não",
        "&emsp; Escreva 0"
      ]
    },

    // Problema 2 (Roteiro 1)
    {
      titulo: "Paridade",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2176",
      nivel: 1,
      status: true,
      descricao_problema: "Dada uma mensagem S, sua tarefa é escrever um algoritmo que faça a inserção do bit B na mensagem S, de forma que após a inserção a mensagem S tenha um número par de bits de valor 1.",
      descricao_solucao: "Basta ler a mensagem e contar quantos '1s' tem, e assim acrescentar o bit de paridade.",
      analise: "Para todos os casos o tempo de execução é (O(n)) visto que é precisa percorrer a string para contar os 1's.",
      implementacao: "https://github.com/MadeInUFC/MadeInUFC.github.io/blob/master/roteiros/roteiro1/problemas/problema2/resposta.cpp",
      pseudocodigo: [
        "S: string",
        "Leia S",
        "inteiro c = quantidade de 1's que a mensagem S tem",
        "Se c for par",
        "&emsp; Escreva S + '0'",
        "Senao",
        "&emsp; escreva S + '1'",
      ]
    },
    
    // Problema 3 (Roteiro 1)
    {
      titulo: "Pirâmide",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2785",
      nivel: 5,
      status: false
    },
    
    // Problema 4 (Roteiro 1)
    {
      titulo: "Hora da corrida",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2968",
      nivel: 5,
      status: true,
      descricao_problema: "Dadas duas entradas, V: o números de voltas que uma pessoa deve correr em uma pista, N: número de placas nessa pista, a solução deve mostrar 9 inteiros correspondendestes as quantidades de placas que devem ser percorridas para se alcançar 10%, 20%, 30% ... 90% do percurso.",
      descricao_solucao: "Multiplicando as entradas do número de placas pelo número de voltas, teremos a quantidade total, ou seja, 100% do número de placas do percurso. Então podemos conseguir as demais porcentagens com regra de 3 simples.",
      analise: "Para todos os casos o tempo de execução é constate (O(1)) visto que há apenas as operaçõs de leitura, e escrita na solução.",
      implementacao: "https://github.com/MadeInUFC/MadeInUFC.github.io/blob/master/roteiros/roteiro1/problemas/problema4/resposta.cpp",
      pseudocodigo:[
        "V, N, P: inteiros",
        "Leia V",
        "Leia N",
        "P =  V * N",
        "Escreva teto((10/100) * P), teto((20/100) * P), teto((30/100) * P), teto((40/100) * P), teto((50/100) * P), teto((60/100) * P) teto((70/100) * P), teto((80/100) * P), teto((90/100) * P)",
      ] 
    },
    
    // Problema 5 (Roteiro 1)
    {
      titulo: "Laércio",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2812",
      nivel: 4,
      status: true,
      descricao_problema: "Laércio exigiu que Armandinho ordenasse uma lista de números, de forma que apenas os números ímpares aparecessem e o primeiro item seja o maior, o segundo seja o menor, o terceiro o segundo maior, o quarto seja o segundo menor e assim por diante. A entrada consiste de um inteiro N que representa o número de casos testes.",
      descricao_solucao: "Basta ler a lista dos casos de teste, e ordenar a lista em ordem crescente deixando apenas os números ímpares, após isso é preciso ter um indicador para o inicio e fim e assim ir incrementando e decrementando esses indicadores, printando os valores, tomando cuidado com a formatação exigida.",
      analise: "No pior dos casos o tempo de execução (O(N)) visto que a lista pode conter apenas numeros ímpares e assim sendo preciso printar todos os números.",
      implementacao: "https://github.com/MadeInUFC/MadeInUFC.github.io/blob/master/roteiros/roteiro1/problemas/problema5/resposta.cpp",
      pseudocodigo: [
        "V: vetor de inteiros",
        "Leia V deixando apenas os números ímpares",
        "Ordene V",
        "Indicador i1 = inicio de V, indicador i2 = fim de V",
        "Se o tamanho de V for par",
        "Para i = 0 ate (tam(V)/2) - 1",
        "Escreva i2 + ' ' + i1 + ' '",
        "i2 = i2 - 1",
        "i1 = i1 + 1",
        "escreva i2 + ' ' + i1",
        "senao",
        "para i = 0 ate tam(V)/2",
        "escreva i2 + ' ' + i1 + ' '",
        "i2 = i2 - 1",
        "i1 = i1 + 1",
        "escreva i2" 
      ]
    },
    
    // Problema 6 (Roteiro 1)
    {
      titulo: "O filme",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1963",
      nivel: 1,
      status: true,
      descricao_problema: "Na situação problema houve um aumento no preço do ingresso de um filme. Dadas duas entradas, A = o preço anterior, B = o preço atual, deve-se exibir a porcentagem aumentada.",
      descricao_solucao: "Com uma regra de três simples, onde o valor anterior corresponde a 100% e o valor acrescido a ele (B - A) corresponde a um X, podemos encontrar a porcentagem e exibi-la acrescentando um caractere.",
      analise: "Para todos os casos o tempo de execução é constate (O(1)) visto que há apenas as operaçõs de leitura, manipualação e escrita na solução.",
      implementacao: "https://github.com/MadeInUFC/MadeInUFC.github.io/blob/master/roteiros/roteiro1/problemas/problema6/resposta.cpp",
      pseudocodigo: [
        "A, B, X: inteiros",
        "Leia A",
        "Leia B",
        "X = B - A",
        "Escreva (X * 100)/A e escreva '%'",
      ]
    },
    
    //Problema 7 (Roteiro 1)
    {
      titulo: "Jornada nas estrelas",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1973",
      nivel: 5,
      status: false
    },
    
    //Problema 8 (Roteiro 1)
    {
      titulo: "Pepe, já tirei a vela",
      titulo_origem: "URI",
      link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/2152",
      nivel: 2,
      status: true,
      descricao_problema: "A cada registro, três números inteiros são cadastrados, sendo a hora e o minuto que o evento ocorreu e um valor que representa se a porta abriu ou fechou naquele momento. Pepe pede a sua ajuda para converter os dados do log em dados mais legíveis para ele. A primeira linha contém a quantidade de casos de teste. Cada linha de um caso de teste possui três inteiros H, M e O, sendo a hora, o minuto da ocorrência, e a própria ocorrência (zero se a porta fechou ou um se a porta abriu).",
      descricao_solucao: "Basta ler os casos de teste, e printar as informações de acordo com a verificação se a terceira informação é 0 ou 1, tomando cuidado na formatação caso H ou M for menor que 10.",
      analise: "https://github.com/MadeInUFC/MadeInUFC.github.io/blob/master/roteiros/roteiro1/problemas/problema6/resposta.cpp",
      pseudocodigo: [
        "H, M, O: inteiros",
        "Leia H, M, O",
        "Ordene V",
        "Se H e M forem menor que 10",
        "Escreva '0' + H + ':' + '0' + M",
        "Senao",
        "Se H for menor que 10",
        "Escreva '0' + H + ':' + M",
        "Senao",
        "Se M for menor que 10",
        "Escreva H + ':' + '0' + M",
        "senao",
        "screva H + ':' + M",
        "Se O for igual a 1",
        "Escreva ' - A porta abriu!'",
        "senao",
        "Escreva  '- A porta fechou!'", 
      ]
    }
  ]
}
