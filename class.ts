abstract class User {
  // private: 자기 자신에서밖에 접근할 수 없음, extends를 통해 상속받는 subclass 에서도 접근 불가
  // protected: 외부(인스턴스)에서는 접근할 수 없지만, subclass에서 접근 가능
  // public: 어디서든 접근 가능
  constructor(private firstName: string, private lastName: string, protected age: number, public nickname: string) {}

  //! 추상 메서드, call signature 만 작성!
  abstract getAge(): void;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// User 클래스를 상속한 Player 클래스
class Player extends User {
  getAge() {
    console.log(this.age);
  }
}

const nico = new Player("nico", "las", 22, "니꼬");

console.log(nico.getFullName);
console.log(nico.getAge);
console.log(nico.nickname);

//! 변환된 js 코드  abstract(추상) 없음
/*
class User {
  constructor(firstName, lastName, age, nickname) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.nickname = nickname;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getAge() {
    console.log(this.age);
  }
}

const nico = new Player("nico", "las", 22, "니꼬");
console.log(nico.getFullName);
console.log(nico.getAge);
console.log(nico.nickname);
*/
