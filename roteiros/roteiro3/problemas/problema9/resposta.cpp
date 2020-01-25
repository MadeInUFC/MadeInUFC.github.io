#include <iostream>
#include <queue>
#include <stack>

using namespace std;

int main() {
  int N, aux, trem, stop;
  stack<int> estacao;
  queue<int> ordem;

  cin >> N;

  while(N != 0){
    cin >> aux;

    while(aux !=0){
      ordem.push(aux);
      for(int i=1; i < N-1; i++){
        cin >> aux;
        ordem.push(aux);
      }

      trem = 1;
      stop = false;

      while(!ordem.empty() && !stop){
        if(estacao.empty()){
          estacao.push(trem);
          trem++;

          if(estacao.top() == ordem.front()){
            estacao.pop();
            ordem.pop();

          } else if(trem > N){
            stop = true;

          }
        } else {
          if(estacao.top() == ordem.front()){
            estacao.pop();
            ordem.pop();

          } else if(trem <= N){
            estacao.push(trem);
            trem++;

          } else {
            stop = true;
          }
        }        
      }

      if(stop){
        cout << "No" << endl;

        while(!ordem.empty()){
          ordem.pop();
        }

        while(!estacao.empty()){
          estacao.pop();
        }

      } else {
        cout << "Yes" << endl;
      }

      cin >> aux;
    }

    cout << endl;
    cin >> N;
    
  }

  return 0;

}