# node-khan
Elongates words dramatically.

## Usage
```js
var khan = require( 'khaan' );
console.log( khaan.khan() );
```

You can elongate words:
```js
khan.elongate( 'banana', 3 );
// 'baaanana'

khan.elongate( 'banana', 5 );
// 'baaaaanana'
```

Or use the internal function to split a string at vowels:
```js
khan.splitAtVowels( 'antelope' );
// [ 'ant', 'el', 'op', 'e' ]
```

as well as just uppercase and exclaim:
```js
khan.khan();
// 'KHAAAAAN!'
```
