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

function Archiver() {
  let weight = null;
  const archive = [];

  Object.defineProperty(this, 'weight', {
    get() {
      console.log('get!');
      return weight;
    },
    set(value) {
      weight = value;
      archive.push({ val: weight });
    },
  });

  this.getArchive = function () {
    return archive;
  };
}

const arc = new Archiver();
arc.weight; // 'inside get!' (output)
arc.weight = 2;
arc.weight = 11;
arc.weight = 16;

arc.getArchive(); // [{ val: 2 }, { val: 11 }, { val: 16 }]
