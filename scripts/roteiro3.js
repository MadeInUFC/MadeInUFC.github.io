const roteiro3 = {
    titulo: "Estrutura de dados e STL",
    num: 3,
    descricao: "Problemas com uso de estrutura de organização de dados (pilhas, filas, conjuntos, etc) e utilização de Standard Template Library de C e C++",
    dificuldade: "média",
    materiais_de_apoio: [
        {
            titulo: "C++ - Referência",
            link: "http://www.cplusplus.com/reference/",
        },
  
        {
            titulo: "Artigo - STL (part 1) (inglês)",
            link: "https://www.topcoder.com/community/competitive-programming/tutorials/power-up-c-with-the-standard-template-library-part-1/",
        },

        {
            titulo: "Artigo - STL (inglês)",
            link: "https://www.topcoder.com/community/competitive-programming/tutorials/power-up-c-with-the-standard-template-library-part-2/",
        },

        {
            titulo: "introdução ao STL",
            link: "http://sweet.ua.pt/joao.p.silva/stl.html",
        },

        {
            titulo: "STL",
            link: "http://www.inf.pucrs.br/~pinho/PRGSWB/STL/stl.html",
        },

        {
            titulo: "Introdução ao STL",
            link: "https://br.ccm.net/faq/10156-introducao-ao-stl-em-c-standard-template-library",
        },

    ],
    problemas: [
      {
        titulo: "Ele está impedido",
        titulo_origem: "URI",
        link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1410",
        nivel: 3,
        status: true,
        descricao_problema: "Dado um número A de atacantes, e D de defensores de um jogo de futebol, e suas respectivas distâncias para o gol, deve-se responder com 'Y' caso haja um atacante impedido, ou seja, esteja mais próximo do gol do que o penúltimo defensor, ou com 'N', caso contrário. Haverá vários casos de teste até que as entradas de A e D sejam 0.",
        descricao_solucao: "Para resolver este problema, devemos dar atenção apenas a entrada da distância do atacante mais próximo ao gol e a distância do penúltimo defensor. Ao final da entrada devemos compará-las, caso a distância do defensor seja maior, a resposta será 'Y'. Para se obter o penúltimo defensor (ou seja, o segundo menos distante do gol), precisamos também saber a distância do último.",
        analise: "Para esta solução, o número de operações para cada caso de teste, recebidos no loop da linha 4, depende diretamente dos tamanhos de A e D, visto que existem dois loops para suas entradas nas linhas 5 e 9. Assim, a complexidade de cada caso de teste será de O(n*m), onde n será A + D e m será o número de casos de teste.",
        implementacao: "https://github.com/MadeInUFC/MadeInUFC.github.io/blob/master/roteiros/roteiro3/problemas/problema1/resposta.cpp",
        pseudocodigo:[
          "A, D, menorA, menorD, smenorD, aux, i, j : inteiros",
          "menorA <- menorD <- smenorD <- 0",
          "Leia A e D",
          "Enquanto A != 0 ou D != 0 faça",
          "&emsp; para i <- 0 até A faça",
          "&emsp; &emsp; Leia Aux",
          "&emsp; &emsp; Se menorA = 0 ou aux < menorA então",
          "&emsp; &emsp; &emsp; menorA <- aux",
          "&emsp; para j <- 0 até D faça",
          "&emsp; &emsp; Leia Aux",
          "&emsp; &emsp; Se menorD = 0 então",
          "&emsp; &emsp; &emsp; menorD <- aux",
          "&emsp; &emsp; Senão se aux <= menorD então",
          "&emsp; &emsp; &emsp; smenorD <- menorD",
          "&emsp; &emsp; &emsp; menorD <- aux",
          "&emsp; &emsp; Senão se smenorD = 0 ou aux < smenorD então",
          "&emsp; &emsp; &emsp; smenorD <- aux",
          "&emsp; Se menorA < smenorD faça",
          "&emsp; &emsp; Escreva 'Y'",
          "&emsp; Senão",
          "&emsp; &emsp; Escreva 'N'",
          "&emsp; menorA <- menorD <- smenorD <- 0",
          "&emsp; Leia A e D",          
        ]
    },

      {
        titulo: "Quem vai ser reprovado?",
        titulo_origem: "URI",
        link_origem: " https://www.urionlinejudge.com.br/judge/pt/problems/view/2134",
        nivel: 6,
        status: false,
      },

      {
        titulo: "Proteja sua senha",
        titulo_origem: "URI",
        link_origem: " https://www.urionlinejudge.com.br/judge/pt/problems/view/2287",
        nivel: 6,
        status: false,
      },

      {
        titulo: "Troca de cartas",
        titulo_origem: "URI",
        link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1104",
        nivel: 4,
        status: false,
      },

      {
        titulo: "Mário",
        titulo_origem: "URI",
        link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1408",
        nivel: 6,
        status: false,
      },

      {
        titulo: "Triângulos",
        titulo_origem: "URI",
        link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1472",
        nivel: 6,
        status: false,
      },

      {
        titulo: "Grid de Largada",
        titulo_origem: "URI",
        link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1228",
        nivel: 3,
        status: true,
        descricao_problema: "Dados um número A de piloto, a ordem de largada dos A pilotos no grid, onde os pilotos são identificados com números de 1 a A, e a ordem de chegada desses pilotos, deve-se retornar o número mínimo de ultrapassagens entre a largada e a chegada. Havará multiplos casos de teste enquanto houver um valor para A.",
        descricao_solucao: "Para isso, podemos analisar, em ordem, os pilotos na chegada e compará-los com a ordem da largada. Caso um piloto permaneça na mesma posição, ele não acrescentará ao resultado de ultrapassagens, portanto poderá ser descartado na lista de largada e chegada. Caso contrário, devemos incrementar em 1 o número de ultrapassagens até encontrar o antigo valor do piloto e então removê-lo das listas para continuar a contagem e restaurar as posições anteriores. Assim, poderemos usar uma fila para as entradas da chegada, uma vez que analisaremos os pilotos em ordem, e um vetor para as entradas de largada. Manipularemos esse vetor com ponteiros e com inserção de 0s nos pilotos removidos.",
        analise: "Nesta solução, teremos que no melhor caso, onde a ordem de largada é a mesma de chegada, para cada caso de teste o número de operações no algoritmo dependerá de A, pois o laço na linha 9 se encerrará após A operações de pop na fila de chegada. Assim teremos um tempo linear. Ja no pior caso, onde a ordem de chegada é o contrário da ordem de largada, teremos um número maior de operações, pois o primeiro elemento da fila estará no laço A vezes até sua remoção, o segundo estará A - 1 vezes e assim por diante.",
        implementacao: "https://github.com/MadeInUFC/MadeInUFC.github.io/blob/master/roteiros/roteiro3/problemas/problema7/resposta.cpp",
        pseudocodigo:[
          "A, aux, j, k, ultrapassagens: inteiro",
          "grid: vetor de inteiros",
          "chegada: fila de inteiros",
          "Leia A",
          "Enquanto A, faça",
          "&emsp; criarVetor(grid, A)",
          "&emsp; criarFila(chegada, A)",
          "&emsp; j <- k <- ultrapassagens <- 0",
          "&emsp; Enquanto estaVazia(chegada) faça",
          "&emsp; &emsp; aux <- chegada.cabeça",
          "&emsp; &emsp; Se j = k então",
          "&emsp; &emsp; &emsp; j <- j + 1",
          "&emsp; &emsp; &emsp; k <- k + 1",
          "&emsp; &emsp; &emsp; Pop(chegada)",
          "&emsp; &emsp; Senão se grid[j] != 0 faça",
          "&emsp; &emsp; &emsp; k <- k + 1",
          "&emsp; &emsp; &emsp; ultrapassagens <- ultrapassagens + 1",
          "&emsp; &emsp; Senão então",
          "&emsp; &emsp; k <- j <- j + 1",
          "&emsp; Senão",
          "&emsp; &emsp; Se grind[k] = aux então",
          "&emsp; &emsp; &emsp; grid[k] <- 0 ",
          "&emsp; &emsp; &emsp; k <- j",
          "&emsp; &emsp; &emsp; Pop(chegada)",
          "&emsp; &emsp; Senão se grid[k] = 0 então",
          "&emsp; &emsp; &emsp; k <- k + 1",
          "&emsp; &emsp; Senão então",
          "&emsp; &emsp; &emsp; k <- k + 1",
          "&emsp; &emsp; &emsp; ultrapassagens <- ultrapassagens + 1",
          "&emsp; &emsp; Retorne ultrapassagens",           
        ]
      },

      {
        titulo: "Subsequências",
        titulo_origem: "URI",
        link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1507",
        nivel: 5,
        status: false,
      },

      {
        titulo: "Trilhos",
        titulo_origem: "URI",
        link_origem: "https://www.urionlinejudge.com.br/judge/pt/problems/view/1062",
        nivel: 4,
        status: false,
      },
      
    ]
  }