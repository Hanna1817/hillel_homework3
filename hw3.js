let unit = prompt("Введіть будь-ласка одиницю виміру (km, kg, hr)", "km");
let quantity = prompt("Введіть будь-ласка значення", 1);
switch (unit){
    case "km":
    console.log(quantity + " " + unit + " дорівнює " + quantity*1000 + " метрів");
    break;
    case "kg":
        console.log(quantity + " " + unit + " дорівнює " + quantity*1000 + " gram");
    break;
    case "hr":
        console.log(quantity + " " + unit + " дорівнює " + quantity*60 + " minutes");
    break;  
    default:
        console.log ("Введіть коректне значення");
};
