import { type } from 'os';
import React from 'react';

type Props = {};

const TypeGuardsDiscrUnons = (props: Props) => {
  //type guards
  class Car {
    drive() {
      console.log('Driving...');
    }
  }

  class Truck {
    drive() {
      console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
      console.log('Loading cargo ...' + amount);
    }
  }

  type Vehicle = Car | Truck;

  const v1 = new Car();
  const v2 = new Truck();

  function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
      vehicle.loadCargo(1000);
    }
  }

  useVehicle(v1);
  useVehicle(v2);

  //discriminated unions
  interface Bird {
    type: 'bird';
    flyingSpeed: number;
  }

  interface Horse {
    type: 'horse';
    runningSpeed: number;
  }

  type Animal = Bird | Horse;

  function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
      case 'bird':
        speed = animal.flyingSpeed;
        break;
      case 'horse':
        speed = animal.runningSpeed;
        break;
    }

    console.log('moving with speed: ' + speed);
  }

  moveAnimal({ type: 'bird', flyingSpeed: 10 });

  return <div>TypeGuards and DiscrUnons</div>;
};

export default TypeGuardsDiscrUnons;
