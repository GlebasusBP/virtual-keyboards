const WRAPPER = document.createElement('div');
WRAPPER.className = 'wrapper';
document.body.appendChild(WRAPPER);

const TEXTAREA = document.createElement('textarea');
TEXTAREA.classList.add('textarea');
WRAPPER.appendChild(TEXTAREA);

const KEYBOARD = document.createElement('div');
KEYBOARD.classList.add('keyboard');
WRAPPER.appendChild(KEYBOARD);

KEYBOARD.innerHTML = '<div class="row"><div class="key"><span>ё</span><sup>~</sup></div><div class="key"><span>1</span><sup>!</sup></div><div class="key"><span>2</span><sup>@</sup></div><div class="key"><span>3</span><sup>#</sup></div><div class="key"><span>4</span><sup>$</sup></div><div class="key"><span>5</span><sup>%</sup></div><div class="key"><span>6</span><sup>^</sup></div><div class="key"><span>7</span><sup>?</sup></div><div class="key"><span>8</span><sup>*</sup></div><div class="key"><span>9</span><sup>(</sup></div><div class="key"><span>0</span><sup>)</sup></div><div class="key"><span>-</span><sup>_</sup></div><div class="key"><span>=</span><sup>+</sup></div><div class="key backspace"><span>Backspace</span></div></div><div class="row"><div class="key tab"><span>Tab</span></div><div class="key"><span>й</span></div><div class="key"><span>ц</span></div><div class="key"><span>у</span></div><div class="key"><span>к</span></div><div class="key"><span>е</span></div><div class="key"><span>н</span></div><div class="key"><span>г</span></div><div class="key"><span>ш</span></div><div class="key"><span>щ</span></div><div class="key"><span>з</span></div><div class="key"><span>х</span></div><div class="key"><span>ъ</span></div><div class="key"><span>\</span></div></div><div class="row"><div class="key capslock"><span>Caps Lock</span></div><div class="key"><span>ф</span></div><div class="key"><span>ы</span></div><div class="key"><span>в</span></div><div class="key"><span>а</span></div><div class="key"><span>п</span></div><div class="key"><span>р</span></div><div class="key"><span>о</span></div><div class="key"><span>л</span></div><div class="key"><span>д</span></div><div class="key"><span>ж</span></div><div class="key"><span>э</span></div></div><div class="row"><div class="key shift"><span>Shift</span></div><div class="key"><span>я</span></div><div class="key"><span>ч</span></div><div class="key"><span>с</span></div><div class="key"><span>м</span></div><div class="key"><span>и</span></div><div class="key"><span>т</span></div><div class="key"><span>ь</span></div><div class="key"><span>б</span></div><div class="key"><span>ю</span></div><div class="key"><span>.</span></div><div class="key"><span>,</span></div></div><div class="row"><div class="key space"></div></div>';

