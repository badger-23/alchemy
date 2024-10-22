#include <iostream>

class DynamicArray {
  private:
    int* data_;
    int length_;
    int capacity_;

    // run if we need to increase the array's capacity
    void _increaseCapacity() {
      // we double the capacity of our array
      capacity_ = length_ * 2;

      // and create a new array with this new capacity
      int* newData = new int[capacity_];

      // we then copy over all our data
      for(int i = 0; i < length_; i++) {
        newData[i] = data_[i];
      }

      // we delete the old array
      delete[] data_;

      // and store our new array as data
      data_ = newData;
    }

  public:
    DynamicArray(int capacity) {
      // data_ starts off as an empty array of integers
      // with a max capacity
      capacity_ = capacity;
      data_ = new int[capacity];

      // our array starts off empty, so it has a length of 0
      length_ = 0;
    }

    // insert an item into our array
    void insert(int item) {
      // 1. check if the array is at capacity
      if(length_ == capacity_) {
        _increaseCapacity();
      }

      // we insert an item at the end of our array
      data_[length_] = item;

      // and increment our array's length
      length_++;
    }
};


int main() {
  DynamicArray arr(4);

  arr.insert(1);
  arr.insert(2);
  arr.insert(3);
  arr.insert(4);
  arr.insert(5);

  return 0;
}
