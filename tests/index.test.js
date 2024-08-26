import ideapedArraySum from "..";

test('Cart Example', () => {
    let products = [{ name: 'Laptop', price: 1000 }, { name: 'Smartphone', price: 500 }, { name: 'Headphones', price: 150 }
    ];
    let totalPrice = ideapedArraySum(products, 'price')
    console.table({ totalPrice })
    expect(totalPrice).toEqual(1650);
});