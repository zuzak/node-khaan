var isVowel = require('is-vowel');
var khaan = module.exports = {
	splitAtVowels: function ( word ) {
		var output = [];
		var current = '';
		for ( var i = 0; i < word.length; i++ ) {
			var c = word[i];
			if ( isVowel( c ) ) {
				if ( current !== '' ) {
					output.push( current );
				}
				current = '';
			}
			current += c;
		}
		output.push( current );

		return output;
	},
	elongate: function ( word, number ) {
		word = word ? word : 'khan';
		number = number ? number: 2;
		var arr = this.splitAtVowels( word );
		if ( arr.length < 2 ) {
			return word;
		}
		var ini  = arr.shift();
		var med = Array( number ).join( arr[0][0] );
		console.log(med);
		var fin = arr.join( '' );
		return ini + med + fin;
	},
	khan: function ( word, number ) {
		word = word ? word : 'khan';
		number = number ? number : 5;
		return this.elongate( word, number).toUpperCase() + '!';
	}
};
