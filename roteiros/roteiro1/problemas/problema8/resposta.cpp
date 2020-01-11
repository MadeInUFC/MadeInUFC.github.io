#include <iostream>
 
using namespace std;
 
int main() {
 
    int n;
    cin >> n;
    for(int i = 0; i < n; i++){
        int a, b, c;
        cin >> a >> b >> c;
        
        if(a < 10 && b < 10)
            cout << 0 << a << ":" << 0 << b;
        else if(a < 10)
            cout << 0 << a << ":" << b;
        else if(b < 10)
            cout <<  a << ":" << 0 << b;  
        else
            cout <<  a << ":" <<  b;  
        
        if(c == 1){
            cout << " - A porta abriu!" << endl;
        }
        else{
            cout << " - A porta fechou!" << endl;
        }
    }
 
    return 0;
}