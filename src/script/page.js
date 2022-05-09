const WRAPPER = document.createElement('div');
WRAPPER.className = 'wrapper';
document.body.appendChild(WRAPPER);

const RESULT = document.createElement('input');
RESULT.setAttribute('id', 'result');
RESULT.setAttribute('autofocus', '');
RESULT.classList.add('result');
WRAPPER.appendChild(RESULT);
alert('Не вели казнить, вели слово молвить!!! Нуб я в деле этом. много нового и не ясного. Потому, коль сжалишься, проверь в последний день кроссчека. Да прибудет с тоой бубен и антибаг вселенский.');


const KEYBOARD = document.createElement('div');
KEYBOARD.classList.add('keyboard');
WRAPPER.appendChild(KEYBOARD);


const keyLayout = [
  "`" ,"1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
  "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "Del",
  "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter",
  "Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "&#9650;", "Shift",
  "Ctrl", "Win", "Alt", "", "Alt", "Ctrl", "&#9668;", "&#9660;", "&#9658;"
];



for(let i = 0; i < keyLayout.length; i++) {

  const key = document.createElement('div');
  key.classList.add('key');
  KEYBOARD.appendChild(key);

  const span = document.createElement('span');
  span.innerHTML = keyLayout[i];
  key.appendChild(span);

  key.setAttribute('id', keyLayout[i] )
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
    document.querySelector('.result').value = e.target.innerHTML;

  });
});

