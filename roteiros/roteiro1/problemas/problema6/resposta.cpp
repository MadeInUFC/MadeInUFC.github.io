#include <iostream>
#include <vector>
#include <algorithm>    // std::sort
 
using namespace std;
 
int main() {
 
    int c;
    cin >> c;
    for(int i = 0; i < c; i++){
        int n;
        cin >> n;
        vector<int> v;
        for(int j = 0; j < n; j++){
            int num;
            cin >> num;
            if(num % 2 != 0){
                v.push_back(num);
            }
        }
        
        if(!v.empty()){
            sort(v.begin(), v.end());
            
            vector<int>::iterator it1 = v.begin(); 
            vector<int>::iterator it2 = v.end()-1;
            
            if(v.size() % 2 == 0){
                for(int j = 0; j < (v.size()/2) - 1; j++){
                    cout << *it2 << " " << *it1 << " ";
                    it1++;
                    it2--;
                }
                cout << *it2 << " " << *it1;
            }
            else{
                for(int j = 0; j < v.size()/2; j++){
                    cout << *it2 << " " << *it1 << " ";
                    it1++;
                    it2--;
                }
                cout << *it2;
            }
            
        }
        cout << "\n";
    }
 
    return 0;
}