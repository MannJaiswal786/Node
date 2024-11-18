const rectangle = require('./rectangle');

function solveRect(length, width){
console.log(`Solving for rectangle with dimensions: ${length}, ${width}`);

if (length <= 0 || width <= 0){
    console.log(`Rectangle dimensions must be greater than zero. Received dimensions: ${length}, ${width}`);

}
else {
    console.log(`Perimeter of rectangle: ${rectangle.perimeter(length, width)}`);
    console.log(`Area of rectangle: ${rectangle.area(length,width)}`);
}
};

solveRect(0,0);
solveRect(2,4);
solveRect(0,5);
solveRect(5, -3);
solveRect(3,5);
