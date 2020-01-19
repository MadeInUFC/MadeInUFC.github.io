#include <iostream>

using namespace std;

int main(){
    int n;
    cin >> n;
    int cont = 1;
    while(n != 0 ){
        int cofre1 = 0;
        int cofre2 = 0;
        int a, b;
        cout << "Teste " << cont << endl;
        for(int i = 0; i < n; i++){
            cin >> a >> b;
            cofre1 += a;
            cofre2 += b;
            cout << cofre1 - cofre2 << endl;
        }
        cont++;
        cout << endl;
        cin >> n;
    }
}