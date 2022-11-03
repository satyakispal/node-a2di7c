'use strict';

function Archiver() {
  const weight = null;
  Object.defineProperty(this, 'weight', {
    get() {
      console.log('get!');
      return weight;
    },
  });
}

const arc = new Archiver();
arc.weight; // 'get!'

arc.weight = 30;
// TypeError: setting getter-only property "weight"
