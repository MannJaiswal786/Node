const rectangle = require('./rectangle');

function solveRect(length, width){
console.log(`Solving for rectangle with dimensions: ${length}, ${width}`);

rectangle(length, width, (err, rect)=> {
    if (err){
        console.log('Error: ', err.message);
    }
    else {
        console.log(`Perimeter of rectangle: ${rect.perimeter(length, width)}`);
        console.log(`Area of rectangle: ${rect.area(length,width)}`);
    }
});
console.log('This statement is logged after the call to rect()');
}


solveRect(0,0);
solveRect(2,4);
solveRect(0,5);
solveRect(5, -3);
solveRect(3,5);
