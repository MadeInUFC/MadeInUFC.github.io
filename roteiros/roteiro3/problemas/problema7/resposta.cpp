#include <iostream>
#include <queue>

using namespace std;

int main() {
  int A;
  while(cin >> A){
    int grid[A], aux, j, k, ultrapassagens;
    queue<int> chegada;
    for(int i = 0; i < A; i++){
      cin >> grid[i];
    }

    for(int i = 0; i < A; i++){
      cin >> aux;
      chegada.push(aux);
    }

    j = 0;
    k = 0;
    ultrapassagens = 0;
    while(!chegada.empty()){
      aux = chegada.front();

      if(k == j){
        if(grid[j] == aux){
          j++;
          k++;
          chegada.pop();
        } else if(grid[j] != 0) {
          k++;
          ultrapassagens++;
        } else {
          j++;
          k++;
        }
      } else {
        if(grid[k] == aux){
          grid[k] = 0;
          k = j;
          chegada.pop();
        } else if(grid[k] == 0) {
          k++;
        } else {
          k++;
          ultrapassagens++;
        }
      }
    }

    cout << ultrapassagens << endl;

  }
}