// There's a "$3 for 2 mangoes" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.



function mango(quantity, price){
  return Math.ceil(quantity * 0.6666) * price
}
