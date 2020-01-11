// Insira os dados de um roteiro ou problema seguindo o modelo abaixo
// Em seguida, copie o arquivo roteiro.html ou problema.html
// Cole o arquivo em uma pasta correpondente ao roteiro ou problema
// estrutura de passtas: /roteiros/roteiroX/problemas/problemaX
// Caso o arquivo seja do tipo roteiro.html, mude a função
// getProblemas para o índice correpondendo do roteiro no vetor abaixo
// Caso o arquivo seja do tipo problema.html, mude a função
// buildProblema para os índices correspondentes do roteiro e do problema
// Mudelo o nome do arquivo para index.html nos dois casos
// Os dados serão carregados automaticamente

const roteiroModelo = {
  titulo: "Modelo",
  num: 0,
  descricao: "Modelo para páginas de roteiro",
  dificuldade: "baixa",
  // Segue link para outros problemas e uma lista de materiais de apoio e seus links
  // Não é obrigatório
  materiais_de_apoio: [
    {
      titulo: "Material 1",
      link: "#",
    },

    {
      titulo: "Material 2",
      link: "#",
    }
  ],
  // Segue uma lista de problemas 
  problemas: [
    {
      titulo: "problema 1",
      titulo_origem: "URI",
      link_origem: "#",
      nivel: 0,
      status: true, // Corresponde ao status de resolução do problema, true feito, false para não feito
      // Os dados a seguir devem ser acrescentados quando o problema for feito
      // Serão usados para formar uma página de problema
      descricao_problema: "Primeiro problema exemplo, não é um problema de verdade",
      descricao_solucao: "A solução não existe, pois não é um problema de verdade",
      analise: "Essa problema é O(zero)...",
      implementacao: "#", //insira o link do GitHub
      // Pseudocóigo é lido como uma vetor onde cada índice será uma linha
      // Use &emsp; para criar uma indentação
      pseudocodigo: [
        "Leia A, B, C",
        "Escreva A",
        "Escreva B",
        "Escreva C",
      ],
    },

    {
      titulo: "problema 2",
      titulo_origem: "URI",
      link_origem: "#",
      nivel: 0,
      status: false,
    }
  ]
}