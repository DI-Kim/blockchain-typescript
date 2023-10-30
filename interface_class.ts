//! class로 추상 클래스 구현
// abstract class User {
//   constructor(protected firstName: string, protected lastName: string) {}

//   abstract sayHi(name: string): string;
//   abstract fullName(): string;
// }

// class Player extends User {
//   sayHi(name: string) {
//     return `Hello ${name}. My name is ${this.fullName()}`;
//   }
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

//! interface로 구현, interface는 js에 코드가 남지 않기 때문에 더 가볍다.
interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

class Player implements User, Human {
  constructor(public firstName: string, public lastName: string, public health: number) {}
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const bigPerson = new Player("Dae-In", "Kim", 10);
console.log(bigPerson.sayHi("nico"));
console.log(bigPerson.fullName());
