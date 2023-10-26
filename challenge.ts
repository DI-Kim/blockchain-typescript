const arr1 = [1, 2, 3, 4];
const arr2 = ["a", "b", "c", "d"];
const a = "abc";

console.log("start");

function last<A>(arr: A[]) {
  return arr[arr.length - 1];
}

console.log(last(arr1));

function pretend<A, I>(arr: A[], item: I) {
  return [item, ...arr];
}

console.log(pretend(arr1, a));

function mix<A, B>(arr1: A[], arr2: B[]) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]); // 오류 어떻게 없애지...??
    if (arr2.length > 0) {
      newArr.push(arr2.pop());
    }
  }
  return newArr;
}

console.log(mix(arr1, ["arr2"]));

function count<A>(arr: A[]) {
  return arr.length;
}

console.log(count(arr1));

function findIndex<A, B>(arr: A[], item: A | B) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(findIndex(arr1, a));

function slice<A>(arr: A[], startIndex: number, endIndex?: number) {
  const newArr: A[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (endIndex) {
      if (i > endIndex) break;
    }
    if (i >= startIndex) newArr.push(arr[i]);
  }
  return newArr;
}

console.log(slice(arr1, 1, 2));

console.log("finish");
