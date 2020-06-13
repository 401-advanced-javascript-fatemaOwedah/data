let Animal = require('../challenges/fifoAnimalShelter/fifo-animal-shelter');


let catType1 = {
  name: 'lulu',
  type: 'cat',
};

let catType2 = {
  name: 'lamona',
  type: 'cat',
};

let dogType1 = {
  name: 'rock',
  type: 'dog',
};

let dogType2 = {
  name: 'mansoor',
  type: 'dog',
};



describe('Animal shelter', () => {



  it('should add a cat to the queue', () => {
    let  animal = new Animal();

    animal.enqueue(catType1);

    expect(animal.cat[0].type).toEqual('cat');
  });

  it('should add a dog to the queue', () => {
    let  animal = new Animal();

    animal.enqueue(dogType1);

    expect(animal.dog[0].type).toEqual('dog');
  });

  it('should remove a dog from the queue', () => {
    let animal = new Animal();

    animal.enqueue(dogType1);
    animal.enqueue(dogType2);
    animal.dequeue({ type: 'dog' });

    expect(animal.dog[0].type).toEqual('dog');
  });

  it('should remove a cat from the queue', () => {
    let animal = new Animal();

    animal.enqueue(catType1);
    animal.enqueue(catType2);
    animal.dequeue({ type: 'cat' });

    expect(animal.cat[0].type).toEqual('cat');
  });

  it('should dequeue nothing if the pref is not dog or cat', () => {
    let  animal = new Animal();

    animal.enqueue(catType1);
    animal.enqueue(catType2);
    animal.dequeue({ type: 'fish' });

    expect(animal.cat[0].type).toEqual('cat');
    expect(animal.cat[0].name).toEqual('lulu');
  });

});