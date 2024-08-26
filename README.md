<h1 align="center">
  ideaped-array-sum
</h1>

<p align="center">Calculates the total sum of a specified key across an array of objects</p>

## Install

Add ideaped-array-sum to your project using npm or yarn.

Install (NPM):

```bash
$ npm install ideaped-array-sum --save
```

Install (Yarn):

```bash
$ yarn add ideaped-array-sum
```

## Usage

Import ReduceSum into Your Project

```js
import ArraySum from 'ideaped-array-sum'
```

Use ArraySum

```js
let products = [{ name: 'Laptop', price: 1000 },{ name: 'Smartphone', price: 500 },{ name: 'Headphones', price: 150 }
];
let totalPrice = ArraySum(products, 'price')
// 10
```

## Contributing

Pull requests for new features, bug fixes, and suggestions are welcome!