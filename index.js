let message = 'h';
let answer = 'rqbdr';

let currentLetter;

let k = 'E K M F L G D Q V Z N T O W Y H X U S P A I B R C J';
console.log(k.replaceAll(' ', ''));
let l = 'A J D K S I R U X B L H W T M C Q G Z N P Y F V O E';
let m = 'B D F H J L C P R T X V Z N Y E I W G A K M U S Q O';
let n = 'E S O V P Z J A Y Q U I R H X L N F T G K D C M W B';
let j = 'V Z B R G I T Y U P S D N H L X A W M J Q O F E C K';

let rotor1 = k.replaceAll(' ', '');
let rotor2 = l.replaceAll(' ', '');
let rotor3 = m.replaceAll(' ', '');
let rotor4 = n.replaceAll(' ', '');
let rotor5 = j.replaceAll(' ', '');

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

console.log(alphabet.length);

let stepForRotor1 = 0;
let stepForRotor2 = 0;
let stepForRotor3 = 0;
let stepForRotor4 = 0;
let stepForRotor5 = 0;

let mas = message.split('');
for (let i = 0; i < mas.length; i++) {
  console.log(mas[i]);
  let idx = alphabet.indexOf(mas[i]);
  console.log(idx);
  stepForRotor1 = idx + 1;
  stepForRotor2 = stepForRotor1;
  console.log(alphabet[stepForRotor1]);
}
