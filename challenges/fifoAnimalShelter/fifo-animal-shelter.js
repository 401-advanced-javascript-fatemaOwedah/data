'use strict';
class AnimalShelter {
  constructor() {
    this.dog = [];
    this.cat = [];
  }
  enqueue(animal) {
    if (animal.type === 'cat') {
      this.cat.push(animal);
    } else if (animal.type === 'dog') {
      this.dog.push(animal);
    } else {
      return null;
    }
  }
  
  dequeue(pref) {
    if (pref.type === 'cat') {
      this.cat.pop();
      return this.cat;
    } else if (pref.type === 'dog') {
      this.dog.pop();
      return this.dog;
    } else {
      return null;
    }
  }
}
  
module.exports = AnimalShelter;