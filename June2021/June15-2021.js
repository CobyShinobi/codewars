// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices.



let saleHotdogs = n => (n < 5 ? 100 : n < 10 ? 95 : 90) * n
