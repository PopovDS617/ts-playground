import React from 'react';

const Interfaces = () => {
  interface AddFn {
    (a: number, b: number): number;
  }

  let add: AddFn;

  interface Named {
    readonly name?: string;
    outputName?: string;
  }

  interface Greet extends Named {
    age: number;
    greet(phrase: string): void;
  }

  class Person implements Greet {
    name?: string;
    age = 30;

    constructor(n?: string) {
      if (n) {
        this.name = n;
      }
    }
    greet(phrase: string) {
      console.log(phrase + ' ' + this.name);
    }
  }

  const user = new Person('Josh');

  user.greet("hello. i'm ");

  return <div>Interfaces</div>;
};

export default Interfaces;
