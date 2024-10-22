class House {
  bedrooms;
  bathrooms;
  bombShelter;
  floors;
  size;

  constructor(bedrooms, bathrooms, bombShelter, floors, size) {
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.bombShelter = bombShelter;
    this.floors = floors;
    this.size = size;
  }

  addRoom() {
    this.bedrooms += 1;
  }
}

const myHouse = new House(2, 1, false, 1);

myHouse.bedrooms; // 2
myHouse.size; // undefined
myHouse.addRoom(); // 3
