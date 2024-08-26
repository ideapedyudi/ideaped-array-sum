import ideapedArraySum from "..";

test('Cart Example', () => {
    let cart = [{ name: 'Jeans', quantity: 1 }, { name: 'Socks', quantity: 3 }, { name: 'T-Shirt', quantity: 6 }];
    let totalItems = ideapedArraySum(cart, 'quantity');
    console.table({ totalItems })
    expect(totalItems).toEqual(10);
});