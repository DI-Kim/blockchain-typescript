type Team = "red" | "blue" | "yellow";

type Player1 = {
  nickname: string;
  healthBar: number;
  team: Team;
};

type User1 = Player1 & {
  name: string;
};

const nico: User1 = {
  nickname: "nico",
  healthBar: 10,
  team: "blue",
  name: "nocid",
};

// type 과 interface는 둘 다 오브젝트의 모양을 정해줄 수 있다.
// type은 interface보다 더 많은 일을 할 수 있음. (type 설정 등)
//! interface는 오브젝트의 모양을 설명하는 기능만 있다.

interface Player2 {
  nickname: string;
  healthBar: number;
  team: Team;
}

interface User2 extends Player2 {
  readonly name: string;
}

const daein: User2 = {
  nickname: "bigPerson",
  healthBar: 10,
  team: "red",
  name: "daein",
};

//! readonly not allow modify
// bigPerson.name = "dae-in";
