// Log number
console.log(1000);


// Log string
console.log('Hello World');

// Log multiple values
console.log(25, 'Hola', true);

// Log a variable
const x = 1000;
console.log(x);

// Console error & warning
console.error('Alert');

console.warn('Danger');


// Log object as table
console.table({ name: 'Andrew', email: 'andrewteece@gmail.com' });

// Group console commands
console.group('testing');
console.error('Alert');
console.warn('Danger');
console.groupEnd;

// Add CSS to logs
const styles = 'padding: 10px; background-color: white; color: green';

console.log('%cHello World', styles);
