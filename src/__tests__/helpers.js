/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const{
    incrementQty, 
    decrementQty,
    recalculateSubtotal,
    absoluteQty,
    hitungDiskon,
    total
} = require('../helpers.js')

test('Qty 1 apabila ditambah 1 hasilnya menjadi 2', () => {
    expect(incrementQty(1)).toBe(2);
});

test('Qty 1 apabila ditambah "1" hasilnya menjadi 2', () => {
    expect(incrementQty("1")).toBe(2);
});

test('Qty 2 apabila dikurangi 1 maka hasilnya 1', () => {
    expect(decrementQty(2)).toBe(1);
});
test('Apabila Qty -3, maka akan menjadi 1', () => {
    expect(absoluteQty(-3)).toBe(1);
});

test('Apabila harga 50000 dengan Qty 2 maka hasilnya 100000', () => {
    expect(recalculateSubtotal(50000, 2)).toBe(100000);
});



