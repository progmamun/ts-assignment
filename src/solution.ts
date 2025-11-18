function formatValue(T) {
  if (typeof T === 'string') {
    return T.toUpperCase();
  }
  if (typeof T === 'number') {
    return T * 10;
  }
  if (typeof T === 'boolean') {
    return !T;
  }
}

console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));
