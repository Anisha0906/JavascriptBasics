/*MAP: A Map is a set of name/value pairs.
It contains methods get() and set(), it finds and sets key/value pairs, respectively*/

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
map1.set('a', 97);
console.log(map1.get('a'));

console.log(map1.size);
map1.delete('c');
console.log(map1.size);

/*let m = new Map();
m.set('key1', 'value1');
m.set('key2', 'value2');
m.forEach((key, value, map) => {
    console.log(key,'=',value,' from ', map);
})
console.log(m.keys());
console.log(m.values());*/

countries = [
    ['Finland', 1],
    ['Sweden', 2],
    ['Norway', 3],
  ]
  const map = new Map(countries)
  console.log(map)
  console.log(map.size)