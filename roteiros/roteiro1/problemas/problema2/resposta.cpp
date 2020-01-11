#include <iostream>
#include <string>
 
using namespace std;
 
int main() {
 
    string num;
    cin >> num;
    
    int cont = 0;
    for(int i = 0; i < num.length(); i++){
        if(num[i] == '1'){
            cont++;
        }
    }
    if(cont % 2 == 0){
        cout << num << 0 << endl;
    }
    else{
        cout << num << 1 << endl;
    }
    
    return 0;
}