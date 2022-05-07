const WRAPPER = document.createElement('div');
WRAPPER.className = 'wrapper';
document.body.appendChild(WRAPPER);

const RESULT = document.createElement('input');
RESULT.setAttribute('id', 'result',);
RESULT.setAttribute('autofocus', '');
RESULT.classList.add('result');
WRAPPER.appendChild(RESULT);

const KEYBOARD = document.createElement('div');
KEYBOARD.classList.add('keyboard');
WRAPPER.appendChild(KEYBOARD);

/*
KEYBOARD.innerHTML = `<div class="row">
<div class="key"><span>ё</span><sup>~</sup></div>
<div class="key"><span>1</span><sup>!</sup></div>
<div class="key"><span>2</span><sup>@</sup></div>
<div class="key"><span>3</span><sup>#</sup></div>
<div class="key"><span>4</span><sup>$</sup></div>
<div class="key"><span>5</span><sup>%</sup></div>
<div class="key"><span>6</span><sup>^</sup></div>
<div class="key"><span>7</span><sup>?</sup></div>
<div class="key"><span>8</span><sup>*</sup></div>
<div class="key"><span>9</span><sup>(</sup></div>
<div class="key"><span>0</span><sup>)</sup></div>
<div class="key"><span>-</span><sup>_</sup></div>
<div class="key"><span>=</span><sup>+</sup></div>
<div class="key backspace mod" id="backspace"><span>Backspace</span></div>
</div>

<div class="row">
<div class="key tab mod" id="tab"><span>Tab</span></div>
<div class="key"><span>Q</span></div>
<div class="key"><span>W</span></div>
<div class="key"><span>E</span></div>
<div class="key"><span>R</span></div>
<div class="key"><span>T</span></div>
<div class="key"><span>Y</span></div>
<div class="key"><span>U</span></div>
<div class="key"><span>I</span></div>
<div class="key"><span>O</span></div>
<div class="key"><span>P</span></div>
<div class="key"><span>[</span><sup>{</sup></div>
<div class="key"><span>]</span><sup>}</sup></div>
<div class="key slash" id="slash"><span>&#92;</span><sup>|</sup></div>
<div class="key del mod" id="del"><span>DEL</span></div>
</div>

<div class="row">
<div class="key capslock mod" id="capslock"><span>Caps Lock</span></div>
<div class="key"><span>A</span></div>
<div class="key"><span>S</span></div>
<div class="key"><span>D</span></div>
<div class="key"><span>F</span></div>
<div class="key"><span>G</span></div>
<div class="key"><span>H</span></div>
<div class="key"><span>J</span></div>
<div class="key"><span>K</span></div>
<div class="key"><span>L</span></div>
<div class="key"><span>;</span><sup>:</sup></div>
<div class="key"><span>'</span><sup>"</sup></div>
<div class="key enter mod" id="enter"><span>Enter</span></div>
</div>

<div class="row">
<div class="key shift-l mod" id="shift-l"><span>Shift</span></div>
<div class="key"><span>Z</span></div>
<div class="key"><span>X</span></div>
<div class="key"><span>C</span></div>
<div class="key"><span>V</span></div>
<div class="key"><span>B</span></div>
<div class="key"><span>N</span></div>
<div class="key"><span>M</span></div>
<div class="key"><span>,</span><sup>&#5193;</sup></div>
<div class="key"><span>.</span><sup>&#5171;</sup></div>
<div class="key"><span>/</span><sup>?</sup></div>
<div class="key" id="up"><span>	&#9650;</span></div>
<div class="key shift-r mod" id="shift-r"><span>Shift</span></div>
</div>

<div class="row">
<div class="key ctrl-l mod" id="ctrl-l"><span>Ctrl</span></div>
<div class="key win mod" id="win"><span>WIN</span></div>
<div class="key alt mod" id="alt-l"><span>Alt</span></div>
<div class="key space mod" id="space"></div>
<div class="key alt mod" id="alt-R"><span>Alt</span></div>
<div class="key ctrl mod" id="ctrl-R"><span>Ctrl</span></div>
<div class="key left" id="left"><span>&#9668;</span></div>
<div class="key down" id="down"><span>&#9660;</span></div>
<div class="key right" id="right"><span>&#9658;</span></div>
</div>`;
*/


const keyLayout = [
  "`" ,"1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
  "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "Del",
  "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter",
  "Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "&#9650;", "Shift",
  "Ctrl", "Win", "Alt", "", "Alt", "Ctrl", "&#9668;", "&#9660;", "&#9658;"
];

console.log();

const row1 = document.createElement('diw');
row1.classList.add('row');
KEYBOARD.appendChild(row1);

const row2 = document.createElement('diw');
row2.classList.add('row');
KEYBOARD.appendChild(row2);

const row3 = document.createElement('diw');
row3.classList.add('row');
KEYBOARD.appendChild(row3);

const row4 = document.createElement('diw');
row4.classList.add('row');
KEYBOARD.appendChild(row4);

const row5 = document.createElement('diw');
row5.classList.add('row');
KEYBOARD.appendChild(row5);



for(let i = 0; i <= 13; i++) {

  const key = document.createElement('div');
  key.classList.add('key');
  row1.appendChild(key);

  const span = document.createElement('span');
  span.innerHTML = keyLayout[i];
  key.appendChild(span);
}

for(let i = 14; i <= 28; i++) {

  const key = document.createElement('div');
  key.classList.add('key');
  row2.appendChild(key);

  const span = document.createElement('span');
  span.innerHTML = keyLayout[i];
  key.appendChild(span);
}

for(let i = 29; i <= 41; i++) {

  const key = document.createElement('div');
  key.classList.add('key');
  row3.appendChild(key);

  const span = document.createElement('span');
  span.innerHTML = keyLayout[i];
  key.appendChild(span);
}

for(let i = 42; i <= 54; i++) {

  const key = document.createElement('div');
  key.classList.add('key');
  row4.appendChild(key);

  const span = document.createElement('span');
  span.innerHTML = keyLayout[i];
  key.appendChild(span);
}

for(let i = 55; i <= 63; i++) {

  const key = document.createElement('div');
  key.classList.add('key');
  row5.appendChild(key);

  const span = document.createElement('span');
  span.innerHTML = keyLayout[i];
  key.appendChild(span);
}


const KEY = document.querySelectorAll('.key');

const backspace = KEY[keyLayout.indexOf('Backspace', 0)];
backspace.classList.add('backspace');

const tab = KEY[keyLayout.indexOf('Tab', 0)];
tab.classList.add('tab');

const del = KEY[keyLayout.indexOf('Del', 0)];
del.classList.add('del');

const CapsLock = KEY[keyLayout.indexOf('CapsLock', 0)];
CapsLock.classList.add('capslock');

const space = KEY[keyLayout.indexOf('', 0)];
space.classList.add('space');

const enter = KEY[keyLayout.indexOf('Enter', 0)];
enter.classList.add('enter');

const shiftL = KEY[keyLayout.indexOf('Shift', 0)];
shiftL.classList.add('shift-l');

const ctrlL = KEY[keyLayout.indexOf('Ctrl', 0)];
ctrlL.classList.add('ctrl-l');

KEY.forEach( (elem) => {
  elem.addEventListener('click', e => {
    e.target.classList.toggle('hover')
  });
});
