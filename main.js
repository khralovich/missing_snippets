'use strict';


/****** Equivalent of Python 'enumerate' for sequence  ********/
const foobar = ['A', 'B', 'C'];

for (const [index, element] of foobar.entries()) {
  console.log(index, element);
}


/****** Equivalent of Python 'range' method ********/

var range = (l,r) => new Array(r - l).fill().map((_,k) => k + l);
//the _ is just a name of argument in the mapping callback.