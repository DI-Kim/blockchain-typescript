interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};

  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();
stringsStorage.set("name", "bigPerson");
console.log(stringsStorage.get("name"));

const numbersStorage = new LocalStorage<number>();
numbersStorage.set("age", 32);
console.log(stringsStorage.get("age"));

const booleansStorage = new LocalStorage<boolean>();
booleansStorage.set("isMale", true);
console.log(stringsStorage.get("isMale"));
