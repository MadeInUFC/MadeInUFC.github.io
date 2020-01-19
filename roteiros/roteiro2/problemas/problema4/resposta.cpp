#include <iostream>
 
using namespace std;
 
int main() {
 
    char a;
    string b;
    string resultado;
    
    cin >> a >> b;
    
    while(a != '0' && b.compare("0") != 0){
        //tirando os caracteres da string e criando outra sem eles
        for(int i = 0; i < b.length(); i++){
            if(b[i] != a){
                resultado.push_back(b[i]);
            }
        }
        auto it = resultado.begin();
        //pulando os '0s'
        while(*it == '0' && it != resultado.end()){
            it++;
        }
        //se pulou todos os zeros e chegou no fim, acabou
        if(it == resultado.end()){
            cout << "0" << endl;
        }
        else{
            //agora eh so printar o resto
            for(auto it2 = it; it2 != resultado.end(); it2++){
                cout << *it2;
            }
            cout << endl;
        }
        resultado.clear();
        cin >> a >> b;
    }
    
 
    return 0;
}