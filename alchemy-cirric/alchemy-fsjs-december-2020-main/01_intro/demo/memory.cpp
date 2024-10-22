#include <iostream>

int main() {
  // array of size 4 with 1-4 in it
  int numbers[4] = {1, 2, 3, 4};
  
  std::cout << "at memory address: " << &numbers[0] << " we have: " << numbers[0] << std::endl;
  std::cout << "at memory address: " << &numbers[1] << " we have: " << numbers[1] << std::endl;
  std::cout << "at memory address: " << &numbers[2] << " we have: " << numbers[2] << std::endl;
  std::cout << "at memory address: " << &numbers[3] << " we have: " << numbers[3] << std::endl;

  return 0;
}
