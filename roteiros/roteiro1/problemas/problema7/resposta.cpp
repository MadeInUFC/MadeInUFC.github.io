#include <iostream>

using namespace std;

int main() {
  double A, B, C;

  cin >> A;
  cin >> B;
  C =  ((B - A) * 100)/A;

  cout << fixed;
  cout.precision(2);
  cout << C << "%" << endl;

  return 0;
}