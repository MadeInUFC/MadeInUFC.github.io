#include <iostream>

using namespace std;

int main() {
  int L, C;
  cin >> L;
  cin >> C;
  //Analisando casos em que a última peça é branca
  //Quanto L e C são ímpares, ou ambos são par
  if((L%2 != 0 && C%2 !=0) || (L%2 == 0 && C%2 ==0)){
    cout << 1 << endl;
  } else {
    //Caso contrário a casa será preta
    cout << 0 << endl;
  }
}