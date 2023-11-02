type Words = {
  [key: string]: string;
};
type Bulk = {
  term: string;
  definition: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  // add: 단어를 추가함
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  // get: 단어의 정의를 리턴함
  get(word: Word) {
    return this.words[word.term];
  }
  // update: 단어를 업데이트 함.
  update(term: string, def: string) {
    if (this.words[term] !== undefined) {
      this.words[term] = def;
    }
  }
  // showAll: 사전 단어를 모두 보여줌.
  showAll() {
    for (let [key, value] of Object.entries(this.words)) {
      console.log(`${key}: ${value}`);
    }
  }
  // count: 사전 단어들의 총 갯수를 리턴함.
  count() {
    return Object.keys(this.words).length;
  }
  // upsert 단어를 업데이트 함. 존재하지 않을시. 이를 추가함. (update + insert = upsert)
  upsert(term: string, def: string) {
    this.words[term] = def;
  }
  // exists: 해당 단어가 사전에 존재하는지 여부를 알려줌.
  exists(word: string) {
    if (this.words[word] === undefined) {
      return false;
    } else {
      return true;
    }
  }
  // bulkAdd: 다음과 같은 방식으로. 여러개의 단어를 한번에 추가할 수 있게 해줌. [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]
  bulkAdd(arr: Bulk[]) {
    for (let i of arr) {
      if (this.words[i.term] === undefined) {
        this.words[i.term] = i.definition;
      }
    }
  }
  // bulkDelete: 다음과 같은 방식으로. 여러개의 단어를 한번에 삭제할 수 있게 해줌. ["김치", "아파트"]
  bulkDelete(arr: string[]) {
    for (let i of arr) {
      if (this.words[i] !== undefined) {
        delete this.words[i];
      }
    }
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국 전통 음식");
const bulgogi = new Word("bulgogi", "유구한 역사를 자랑하는 한국 전통의 고기 음식");

const dict = new Dict();

dict.add(kimchi);
dict.add(bulgogi);

console.log("get:", dict.get(kimchi));
console.log("----------------------------");

dict.update("kimchi", "it's so delicious");
dict.showAll();
console.log("----------------------------");

console.log("count:", dict.count());

dict.upsert("kimchi", "한국 전통 음식");
dict.upsert("jang", "한국 전통 발효 음식");
dict.showAll();
console.log("----------------------------");

console.log("exists:", dict.exists("jang"));
console.log("exists:", dict.exists("abc"));
console.log("----------------------------");

dict.bulkAdd([
  { term: "김치", definition: "대박이네~" },
  { term: "아파트", definition: "비싸네~" },
]);
dict.showAll();
console.log("----------------------------");

dict.bulkDelete(["김치", "아파트"]);
dict.showAll();
console.log("----------------------------");
