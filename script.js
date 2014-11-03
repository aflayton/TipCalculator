var base = parseFloat(prompt("What is the base cost of the meal?"));
var tax = parseFloat(prompt("What is the tax rate percent?"));
var tip = parseFloat(prompt("What is the desired tip rate percent?"));

var taxCost = base*(tax/100);
var subtotal = base + taxCost;
var tipCost = subtotal*(tip/100);
var total = subtotal + tipCost;

alert("Total: $" + total.toFixed(2) + "\nBase: $" + base.toFixed(2) + "\nTax: $" + taxCost.toFixed(2) + "\nSubtotal: $" + subtotal.toFixed(2) + "\nTip: $" + tipCost.toFixed(2));