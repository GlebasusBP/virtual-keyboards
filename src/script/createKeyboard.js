import addKeys from './addKeys';
import keysArray from './arrKeys';

const createBoard = (currentLanguage, toUpperCase) => {
  const KEYBOARD = document.querySelector('.keyboard');
  KEYBOARD.innerHTML = `
    <div class="keyboard__line">
        <div id="backqoute">
            ${addKeys(currentLanguage, toUpperCase, keysArray.slice(0, 1))} 
        </div>
        <div class="keyboard__keys">
            ${addKeys(currentLanguage, toUpperCase, keysArray.slice(1, 13))} 
        </div>
        <button class="key backspace" data-key="Backspace">Backspace</button>
    </div>
    <div class="keyboard__letters">
        <div class="keyboard__line">
            <button class="key tab" data-key="Tab">
                Tab
            </button>
            <div class="keyboard__keys">
                ${addKeys(currentLanguage, toUpperCase, keysArray.slice(13, 26))}
            </div>
            <button class="key del" data-key="Delete">
                Del
            </button>
        </div>
        <div class="keyboard__line">
            <button class="key capslock key__control" data-key="CapsLock">
                Caps Lock
            </button>
            <div class="keyboard__keys">
                ${addKeys(currentLanguage, toUpperCase, keysArray.slice(26, 37))}
            </div>
            <button class="key enter" data-key="Enter">
                Enter
            </button>
        </div>
        <div class="keyboard__line">
            <button class="key shift-l key__control" data-key="ShiftLeft">
                Shift
            </button>
            <div class="keyboard__keys">
                ${addKeys(currentLanguage, toUpperCase, keysArray.slice(37))}
            </div>
            <button class="key" data-key="ArrowUp">
            &#9650;
            </button>
            <button class="key key__control" data-key="ShiftRight">
                Shift
            </button>
        </div>
        <div class="keyboard__line">
            <button class="key ctrl-l" data-key="ControlLeft">
                Ctrl
            </button>
            <button class="key" data-key="MetaLeft">
                Win
            </button>
            <button class="key " data-key="AltLeft">
                Alt
            </button>
            <button class="key space key__space" data-key="Space">
                
            </button>
            <button class="key" data-key="AltRight">
                Alt
            </button>
            <button class="key" data-key="ControlRight">
                Ctrl
            </button>
            <button class="key" data-key="ArrowLeft">
            &#9668;
            </button>
            <button class="key" data-key="ArrowDown">
            &#9660;
            </button>
            <button class="key" data-key="ArrowRight">
            &#9658;
            </button> 
        </div>
    </div>
    `;
};

export default createBoard;
