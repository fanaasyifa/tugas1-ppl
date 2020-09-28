const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;

function recalculateSubtotal(price, qty) {
    return price * qty;
}
function total(price, qty, kode){
    return recalculateSubtotal(qty, price) - hitungDiskon(price, qty, kode);
}

function absoluteQty(qty) {
    return (parseInt(qty) < 1) ? 1 : qty;
}
function hitungDiskon(price, qty, kode) {
    const subTotal = recalculateSubtotal(price, qty);
    switch (kode) {
        case "diskonKENAL":
            hasilDiskon = subTotal * 0.10;
            break;
            
            case "diskonPDKT":
                hasilDiskon = subTotal * 0.25;
                break;
            case "diskonJADIAN":
                hasilDiskon = subTotal * 0.50;
                break;
}
return hasilDiskon;
}
module.exports = { 
    incrementQty, 
    decrementQty,
    recalculateSubtotal,
    absoluteQty,
    total,
    hitungDiskon
}
