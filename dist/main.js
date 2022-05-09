(()=>{"use strict";const e=(e,t,n)=>{const a=[];return n.forEach((({code:n,ruUpper:s,enUpper:c,ru:o,en:l})=>{let r;r=t?"ru"===e?s:c:"ru"===e?o:l;const i=`\n        <button class="key" data-key="${n}">\n            ${r}\n        </button>\n       `;a.push(i)})),a.map((e=>e)).join("")};class t{constructor(e,t,n,a,s){this.code=e,this.ru=t,this.en=n,this.ruUpper=a,this.enUpper=s}}const n=[new t("Backquote","ё","`","Ё","~"),new t("Digit1","1","1","!","!"),new t("Digit2","2","2","@","@"),new t("Digit3","3","3","#","#"),new t("Digit4","4","4","$","$"),new t("Digit5","5","5","%","%"),new t("Digit6","6","6","^","^"),new t("Digit7","7","7","&","&"),new t("Digit8","8","8","*","*"),new t("Digit9","9","9","(","("),new t("Digit0","0","0",")",")"),new t("Minus","-","-","_","_"),new t("Equa","=","=","+","+"),new t("KeyQ","й","q","Й","Q"),new t("KeyW","ц","w","Ц","W"),new t("KeyE","у","e","У","E"),new t("KeyR","к","r","К","R"),new t("KeyT","е","t","Е","T"),new t("KeyY","н","y","Н","Y"),new t("KeyU","г","u","Г","U"),new t("KeyI","ш","i","Ш","I"),new t("KeyO","щ","o","Щ","O"),new t("KeyP","з","p","З","P"),new t("BracketLeft","х","[","Х","{"),new t("BracketRight","ъ","]","Ъ","}"),new t("Backslash","\\","\\","/","|"),new t("KeyA","ф","a","Ф","A"),new t("KeyS","ы","s","Ы","S"),new t("KeyD","в","d","В","D"),new t("KeyF","а","f","А","F"),new t("KeyG","п","g","П","G"),new t("KeyH","р","h","Р","H"),new t("KeyJ","о","j","О","J"),new t("KeyK","л","k","Л","K"),new t("KeyL","д","l","Д","L"),new t("Semicolon","ж",";","Ж",":"),new t("Quote","э","'","Э",'"'),new t("KeyZ","я","z","Я","Z"),new t("KeyX","ч","x","Ч","X"),new t("KeyC","с","c","С","C"),new t("KeyV","м","v","М","V"),new t("KeyB","и","b","И","B"),new t("KeyN","т","n","Т","N"),new t("KeyM","ь","m","Ь","M"),new t("Comma","б",",","Б","<"),new t("Period","ю",".","Ю",">"),new t("Slash",".","/",",","?")],a=document.querySelector("body");let s,c=!1,o=!1,l=!1,r=!1;s=localStorage.getItem("language")?localStorage.getItem("language"):"en",a.innerHTML='\n    <div class="wrapper">\n        <textarea class="result"></textarea>\n        <div class="keyboard">  \n        </div>\n        <p class="info">Смена раскладки - Ctrl + Alt</p>\n    </div>\n',((t,a)=>{document.querySelector(".keyboard").innerHTML=`\n    <div class="keyboard__line">\n        <div id="backqoute">\n            ${e(t,a,n.slice(0,1))} \n        </div>\n        <div class="keyboard__keys">\n            ${e(t,a,n.slice(1,13))} \n        </div>\n        <button class="key backspace" data-key="Backspace">Backspace</button>\n    </div>\n    <div class="keyboard__letters">\n        <div class="keyboard__line">\n            <button class="key tab" data-key="Tab">\n                Tab\n            </button>\n            <div class="keyboard__keys">\n                ${e(t,a,n.slice(13,26))}\n            </div>\n            <button class="key del" data-key="Delete">\n                Del\n            </button>\n        </div>\n        <div class="keyboard__line">\n            <button class="key capslock key__control" data-key="CapsLock">\n                Caps Lock\n            </button>\n            <div class="keyboard__keys">\n                ${e(t,a,n.slice(26,37))}\n            </div>\n            <button class="key enter" data-key="Enter">\n                Enter\n            </button>\n        </div>\n        <div class="keyboard__line">\n            <button class="key shift-l key__control" data-key="ShiftLeft">\n                Shift\n            </button>\n            <div class="keyboard__keys">\n                ${e(t,a,n.slice(37))}\n            </div>\n            <button class="key" data-key="ArrowUp">\n            &#9650;\n            </button>\n            <button class="key key__control" data-key="ShiftRight">\n                Shift\n            </button>\n        </div>\n        <div class="keyboard__line">\n            <button class="key ctrl-l" data-key="ControlLeft">\n                Ctrl\n            </button>\n            <button class="key" data-key="MetaLeft">\n                Win\n            </button>\n            <button class="key " data-key="AltLeft">\n                Alt\n            </button>\n            <button class="key space key__space" data-key="Space">\n                \n            </button>\n            <button class="key" data-key="AltRight">\n                Alt\n            </button>\n            <button class="key" data-key="ControlRight">\n                Ctrl\n            </button>\n            <button class="key" data-key="ArrowLeft">\n            &#9668;\n            </button>\n            <button class="key" data-key="ArrowDown">\n            &#9660;\n            </button>\n            <button class="key" data-key="ArrowRight">\n            &#9658;\n            </button> \n        </div>\n    </div>\n    `})(s,r);const i=document.querySelector("textarea"),d=document.querySelectorAll(".keyboard__keys"),u=document.querySelector("#backqoute"),y=()=>{u.innerHTML=e(s,r,n.slice(0,1)),d[1].innerHTML=e(s,r,n.slice(13,26)),d[2].innerHTML=e(s,r,n.slice(26,37)),d[3].innerHTML=e(s,r,n.slice(37))},k=()=>{y(),d[0].innerHTML=e(s,r,n.slice(1,13))};function b(){if(i.focus(),i.selectionStart)return i.selectionStart;if(document.selection){const e=document.selection.createRange(),t=e.duplicate();return e.collapse(!0),t.moveToElementText(i),t.setEndPoint("EndToEnd",e),t.text.length}return 0}document.addEventListener("keydown",(e=>{const t=document.querySelector(".key[data-key='"+e.code+"'");if(null!==t){switch(t.classList.add("key__active"),e.code){case"Backspace":case"Enter":case"Delete":i.focus();break;case"Tab":e.preventDefault(),i.value+="    ";break;case"CapsLock":e.preventDefault(),r=!r,y();break;case"Space":e.preventDefault(),i.value+="  ";break;case"ControlLeft":e.preventDefault(),o=!0;break;case"AltLeft":e.preventDefault(),c=!0;break;case"ShiftLeft":case"ShiftRight":l||(e.preventDefault(),r=!r,k(),l=!0);break;default:e.preventDefault(),e.code.includes("Arrow")&&(i.value+=t.innerText),n.forEach((({code:n})=>{e.code===n&&(i.value+=t.innerText)}))}c&&o&&(s="en"===s?"ru":"en",localStorage.setItem("language",s),y()),e.stopPropagation()}})),document.addEventListener("keyup",(e=>{e.preventDefault();const t=document.querySelector(".key[data-key='"+e.code+"'");null!==t&&(t.classList.remove("key__active"),"ShiftLeft"!==e.code&&"ShiftRight"!==e.code||!l||(r=!r,k(),l=!1),c=!1,o=!1)})),document.addEventListener("mousedown",(e=>{switch(e.target.classList.contains("key")&&(n.find((({code:t})=>t===e.target.dataset.key))||e.target.dataset.key.includes("Arrow"))&&(i.value+=e.target.innerText),e.target.dataset.key){case"Tab":i.value+="    ";break;case"CapsLock":r=!r,y();break;case"Space":i.value+="  ";break;case"ShiftLeft":case"ShiftRight":l||(e.preventDefault(),r=!r,k(),l=!0);break;case"Backspace":i.value.length>0&&i.setRangeText("",b()-1,b(),"select");break;case"Delete":b()!==i.value.length&&i.setRangeText("",b(),b()+1,"select");break;case"Enter":i.setRangeText("\n",b(),b(),"select")}})),document.addEventListener("mouseup",(e=>{"ShiftLeft"!==e.target.dataset.key&&"ShiftRight"!==e.target.dataset.key||!l||(r=!r,k(),l=!1)})),alert("Не вели казнить! Вели слово молвить! Сжалься над моим невежеством и проверь в последний день кроссчека. Да прибудет с тобой бубен и антибаг божий!!!")})();
//# sourceMappingURL=main.js.map