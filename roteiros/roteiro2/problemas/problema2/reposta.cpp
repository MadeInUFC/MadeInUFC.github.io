#include <iostream>

using namespace std;

int main() {
  int N;

  cin >> N;

  if(N < 11){
    cout << 7 << endl;

  } else if(N < 31){
    cout << 7 + N - 10 << endl;

  } else if(N < 101){
    cout << 27 + ((N - 30) * 2) << endl;

  } else {
    cout << 167 + ((N - 100) * 5) << endl;

  }

  return 0;
}