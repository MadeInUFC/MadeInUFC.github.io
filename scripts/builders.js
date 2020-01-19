// Este arquivo implementa as funções de contrução de página sobre os dados registrados

// Retorna quantos problemas estão resolvidos de um determinado roteiro
function getQtdProblemasResolvidos(roteiro) {
  let count = 0;

  roteiros[roteiro].problemas.forEach(function(p){
    if (p.status) count ++;
  });

  return count;
}

// Função para construção de um página de roteiro
// Seu parâmetro é o índice de um roteiro
function buildRoteiro(roteiro) {
  
  // Inserindo infomações do roteiro na estrutura modelo
  document.getElementById("page-title").innerHTML = "Made in UFC - Roteiro " + roteiro.num;
  document.getElementById("title").innerHTML = "Made in UFC - Roteiro " + roteiro.num;
  document.getElementById("roteiro-title").innerHTML = roteiro.titulo;
  document.getElementById("descricao").innerHTML = roteiro.descricao;
  document.getElementById("dificuldade").innerHTML = "Dificuldade " + roteiro.dificuldade;

  //Inserindo lista de problemas
  const probls = roteiro.problemas;

  const lista = document.getElementById("problemas");
  let count = 1;

  probls.forEach(p => {
    const novaLinha = document.createElement("tr");
    const num = document.createElement("th");
    const titulo = document.createElement("td");
    const link = document.createElement("a");
    const origem = document.createElement("td");
    const nivel = document.createElement("td");
    const origemLink = document.createElement("a");
    const status = document.createElement("td");

    num.scope = "row";
    num.innerHTML = count;
    novaLinha.appendChild(num);

    if(p.status){
      link.innerHTML = p.titulo;
      link.href = "https://madeinufc.github.io/roteiros/roteiro"+ roteiro.num +"/problemas/problema"+count;
      titulo.appendChild(link);

    } else {
      titulo.innerHTML = p.titulo;

    }

    novaLinha.appendChild(titulo);
        
    origemLink.innerHTML = p.titulo_origem;
    origemLink.href = p.link_origem;
    origemLink.target = "_blank"
    origem.appendChild(origemLink);
    novaLinha.appendChild(origem);

    nivel.innerHTML = p.nivel;
    novaLinha.appendChild(nivel)

    if(p.status) status.innerHTML =  "&#x1F388;";
    else status.innerHTML = "à ser feita";
    novaLinha.appendChild(status);

    lista.appendChild(novaLinha);
    count++;

  });

  //Caso haja, inserindo lista de problemas e material complementares
  if(roteiro.outros){
    let titulo = document.createElement("h3")
    titulo.innerHTML = "Outros problemas";
    let list = document.createElement("ul");

    roteiro.outros.forEach( i => {
      let item = document.createElement("li");
      let itemLink = document.createElement("a");

      itemLink.href = i.link;
      itemLink.innerHTML = i.titulo;

      item.appendChild(itemLink);
      list.appendChild(item);
    });

    document.getElementById("container").appendChild(titulo);
    document.getElementById("container").appendChild(list);
  }

  let titulo = document.createElement("h3");

  if(roteiro.materiais_de_apoio){
    titulo.innerHTML = "Material de Apoio";
    let list = document.createElement("ul");

    roteiro.materiais_de_apoio.forEach( i => {
      let item = document.createElement("li");
      let itemLink = document.createElement("a");

      itemLink.href = i.link;
      itemLink.innerHTML = i.titulo;

      item.appendChild(itemLink);
      list.appendChild(item);
    });

    document.getElementById("container").appendChild(titulo);
    document.getElementById("container").appendChild(list);
  }

}

// Função para construção da página de um problema
// Identifique o índice do problema a partir do 1
function buildProblema(roteiro, indiceProblema) {
  const problema = roteiro.problemas[indiceProblema - 1];

  //Inserindo dados do problema
  document.getElementById("page-title").innerHTML = "Made in UFC - " + problema.titulo;
  document.getElementById("titulo-problema").innerHTML = problema.titulo;
  document.getElementById("descricao-problema").innerHTML = problema.descricao_problema;
  document.getElementById("nivel").innerHTML = "Nível " + problema.nivel;
  document.getElementById("descricao-solucao").innerHTML = problema.descricao_solucao;
  document.getElementById("analise").innerHTML = problema.analise;
  document.getElementById("implementacao").href = problema.implementacao;

  // Inserindo dados do roteiro
  let linkRoteiro = document.getElementById("titulo-roteiro");
  linkRoteiro.innerHTML = roteiro.titulo;
  linkRoteiro.href = "https://madeinufc.github.io/roteiros/roteiro" + roteiro.num;

  // Inserindo linhas do pseudocódigo
  let codigo = document.getElementById("code");
  let count = 1;
  problema.pseudocodigo.forEach(linha => {
    let div = document.createElement("div");
    div.innerHTML = count + (count < 10 ? "&emsp; |&emsp;" : " |&emsp;") + linha;
    codigo.appendChild(div);
    count++;
  });

}