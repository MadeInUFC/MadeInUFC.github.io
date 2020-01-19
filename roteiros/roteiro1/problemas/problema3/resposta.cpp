#include <bits/stdc++.h>

using namespace std;

struct noh{
    int inicio = 0;
    int soma = 0;
};

int main(){
    int n;
    cin >> n;

    int matriz[n][n];
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cin >> matriz[i][j];
        }
    }

    int tam = pow(2, n) - 1; // numero de nohs da arvore binaria cheia
    noh somas[tam];
    
    int indice = 0; //indice para preenchimento de 'somas'
    int gap = n; // numero do intervalo
    int cont = 0;
    

    // construindo a arvore de somas no vetor somas
    for (int linha = n - 1; linha >= 0; linha--, gap--, cont++){

        int nohsnivel = pow(2, cont); //numero de nohs em cada nivel da arvore
        for (int j = 0; j < nohsnivel; j++, indice++){

            // se for a raiz seta o inicio do intervalo a 0
            if (linha == n - 1){
                somas[indice].inicio = 0;
            }
            else {
                //se for filho esquerdo recebe o mesmo inicio que o pai, senao + 1
                if (indice % 2 != 0){ 
                    somas[indice].inicio = somas[(indice-1)/2].inicio;
                }
                else {
                    somas[indice].inicio = somas[(indice-1)/2].inicio + 1;
                }
                
                //somando com o pai
                somas[indice].soma = somas[(indice-1)/2].soma;
            }

            // somando o intervalo na linha
            for (int w = somas[indice].inicio; w < gap + somas[indice].inicio; w++){
                somas[indice].soma += matriz[linha][w];
            }  

        }
        
    }

    // agora precisamos olhar para as folhas e ver qual a com menor soma
    int numfolhas = (tam + 1) / 2;

    int menorsoma = somas[tam - numfolhas].soma; //primeira folha
    // começando da segunda folha e verificando qual a menor soma de todas
    for (int i = tam - numfolhas + 1; i < tam; i++){
        if (menorsoma > somas[i].soma){
            menorsoma = somas[i].soma;
        }
    }

    cout << menorsoma << endl;
    
    return 0;
}
