//TODO Problem 1
function formatValue(value: string | number | boolean) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  if (typeof value === 'number') {
    return value * 10;
  }
  if (typeof value === 'boolean') {
    return !value;
  }
}

console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));

//TODO Problem 2
function getLength(value: string | any[]) {
  if (typeof value === 'string') {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
}
console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));

//TODO Problem 3
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age:${this.age}'`;
  }
}

const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());

// TODO Problem 4
type TypeCheck = {
  title: string;
  rating: number;
};
function filterByRating(items: TypeCheck[]): TypeCheck[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));

// TODO Problem 5
type TypeCheck5 = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
function filterActiveUsers(items: TypeCheck5[]): TypeCheck5[] {
  return items.filter((item) => item.isActive === true);
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));

// TODO Problem 6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${
      book.isAvailable ? 'Yes' : 'No'
    }`
  );
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);

// TODO Problem 7
function getUniqueValues<T extends string | number>(array1: T[], array2: T[]): T[] {
  const result: T[] = [];

  for (let i = 0; i < array1.length; i++) {
    const item = array1[i];

    let exists = false;

    for (let a = 0; a < result.length; a++) {
      if (result[a] === item) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result[result.length] = item;
    }
  }
  for (let i = 0; i < array2.length; i++) {
    const item = array2[i];

    let exists = false;

    for (let a = 0; a < result.length; a++) {
      if (result[a] === item) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result[result.length] = item;
    }
  }

  return result;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));

// TODO: Problem 8
interface IProducts {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: IProducts[]) {
  return products
    .map((item) => {
      const quantity = item.quantity ?? 1;
      const discount = item.discount ?? 0;
      const total = item.price * quantity;

      const finalAmount = total - total * (discount / 100);
      return finalAmount;
    })
    .reduce((sum, price) => sum + price, 0);
}
const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
