#include <iostream>

using namespace std;

int main() {
  int N, C, S, E;
  int T = 0;
  string result = "N";

  cin >> N;
  cin >> C;
  for(int i = 0; i < N; i++){
    cin >> S;
    cin >> E;
    T = T - S;
    T = T + E;
    if(T > C){
      result = "S";
    }
  }
  
  cout << result << endl;

  return 0;
}