#include <iostream>
#include <queue>

using namespace std;

int main() {
  int A, B, difA, difB, aux;
  queue<int> filaA, filaB;
  cin >> A >> B;

  while(A!= 0 || B!= 0){
    difB = 0;
    difA = 0;
    for(int i= 0; i< A; i++){
      cin >> aux;
      if(filaA.empty()){
        filaA.push(aux);
      } else if(aux!= filaA.back()){
        filaA.push(aux);
      }
    }

    for(int i= 0; i< B; i++){
      cin >> aux;
      if(filaB.empty()){
        filaB.push(aux);
      } else if(aux!= filaB.back()){
        filaB.push(aux);
      }
    }

    while(!filaA.empty() || !filaB.empty()){
      if(filaA.empty()){
        difB++;
        filaB.pop();
      } else if(filaB.empty()){
        difA++;
        filaA.pop();
      }

      else {
        if(filaA.front() == filaB.front()){
          filaA.pop();
          filaB.pop();
        } else if(filaA.front() > filaB.front()){
          difB++;
          filaB.pop();
        } else {
          difA++;
          filaA.pop();
        }
      }
    }

    if(difA <= difB){
      cout << difA << endl;
    } else {
      cout << difB << endl;
    }

    cin >> A >> B;
  }
}