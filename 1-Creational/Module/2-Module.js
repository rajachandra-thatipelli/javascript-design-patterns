﻿var basketModule = (function () {
    "use strict";

    var basket = [];

    return {
        addItem: function (values) {
            basket.push(values);
        },
        getItemCount: function () {
            return basket.length;
        },
        getTotal: function () {
            var itemCount = this.getItemCount(),
                total = 0;

            while (itemCount--) {
                total += basket[itemCount].price;
            }
            return total;
        }
    };
})();

basketModule.addItem({
    item: "Item1",
    price: 0.5
});
console.log(basketModule.getItemCount() + " item(s) in  basket");

basketModule.addItem({
    item: "Item2",
    price: 0.3
});
console.log(basketModule.getItemCount() + " item(s) in  basket");

basketModule.addItem({
    item: "Item3",
    price: 1.5
});
console.log(basketModule.getItemCount() + " item(s) in  basket");

console.log("Total Price: " + basketModule.getTotal() + "$");

console.log(basketModule.basket);