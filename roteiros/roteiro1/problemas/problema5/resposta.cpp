#include <iostream>

using namespace std;

int teto(int x, int y){
    if(x%y == 0){
        return x/y;
    }

    return x/y + 1;
}

int main(){
    int V, N;
    cin >> V >> N;

    int p = V*N;

    cout << teto(p, 10) << " ";
    cout << teto(p*2, 10) << " ";
    cout << teto(p*3, 10) << " ";
    cout << teto(p*4, 10) << " ";
    cout << teto(p*5, 10) << " ";
    cout << teto(p*6, 10) << " ";
    cout << teto(p*7, 10) << " ";
    cout << teto(p*8, 10) << " ";
    cout << teto(p*9, 10) << endl;
}