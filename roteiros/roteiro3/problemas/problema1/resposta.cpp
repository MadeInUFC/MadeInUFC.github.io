#include <iostream>

using namespace std;

int main() {
  int A, D, menorA, menorD, smenorD, aux;
  menorA = 0;
  menorD = 0;
  smenorD = 0;

  cin >> A >> D;

  while (A != 0 || D != 0){
    for(int i = 0; i < A; i++){
      cin >> aux;
      if(menorA == 0){
        menorA = aux;
      } else if(aux < menorA){
        menorA = aux;
      }
    }

    for(int j = 0; j < D; j++){
      cin >> aux;
      if(menorD == 0){
        menorD = aux;
      } else if(aux <= menorD){
        smenorD = menorD;
        menorD = aux;
      } else if(smenorD == 0){
        smenorD = aux;
      } else if(aux < smenorD){
        smenorD = aux;
      }
    }

    if(menorA < smenorD){
      cout << "Y" << endl;
    } else {
      cout << "N" << endl;
    }

    cin >> A >> D;
    menorA = 0;
    menorD = 0;
    smenorD = 0;

  }

}