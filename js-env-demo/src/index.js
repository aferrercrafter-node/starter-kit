import './index.css';

import numeral from 'numeral';
debugger;
const courseValue = numeral(1000).format('$0,0.00');
console.log(`I Will pay ${courseValue} for this awesome course!`);
