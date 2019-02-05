const a = parseFloat(prompt('Input value of a', ''));
const b = parseFloat(prompt('Input value of b', ''));
const c = parseFloat(prompt('Input value of c', ''));
if ((a===0) || isNaN(a) || isNaN(b) || isNaN(c) || (a === '' ) || (a === '' ) || (a === '' )) { 
alert('Invalid input data'); 
} else { 
    const d = (b)*(b) - 4*a*c;
    if (d < 0) {
        alert('no solution');
    } else if (d === 0) {
        const x = -b/2*a;
        alert('x = ' + x);
    } else {
        const x1 = (-b + (Math.sqrt(d)))/(2*a);
        const x2 = (-b - (Math.sqrt(d)))/(2*a);
        alert('x1= ' + x1 + ' and ' + 'x2= '+ x2);
    }
}