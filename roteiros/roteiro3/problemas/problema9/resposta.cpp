#include <iostream>
#include <queue>
#include <stack>

using namespace std;

int main() {
  int N, aux, trem, stop;
  stack<int> estacao;
  queue<int> ordem;

  while(cin >> N && N != 0){
    trem = 1; 
    while(cin >> aux && aux !=0){
      ordem.push(aux);
      for(int i=1; i < N-1; i++){
        cin >> aux;
        ordem.push(aux);
      }

      stop = false;

      while(!ordem.empty() && !stop){
        if(ordem.front() == trem){
          ordem.pop();
          trem++;

        } else {
          if(estacao.empty()){
            estacao.push(trem);
            trem++;

          } else {
            if(estacao.top() == trem){

            }
          }
        }
      }
    }
  }

}