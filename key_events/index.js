// btns keyCodes
// 37 38 39 40  65  83
// l  u  r  d  'a' 's'
const testAction = document.getElementById('action-placeholder');
// desktop
window.addEventListener('keyup', function (event){
  console.log(event.keyCode);
  let key = ''
  switch (event.keyCode) {
    case 37: key = 'left';
      break;
    case 38: key = 'up';
      break;
    case 39: key = 'right';
      break;
    case 40: key = 'down';
      break;
    case 65: key = 'A';
      break;
    case 83: key = 'S';
      break;
    default: key = ''
  }
  btns = document.querySelectorAll('.btn');
  // console.log(btns);
  testAction.textContent = key;
    btns.forEach( btn => btn.classList.remove('btn-active'));
  document.getElementById(key).classList.add('btn-active');
  // console.log( key);
})

// mobile
// Get all buttons and add event listener
const buttons = document.querySelectorAll('.btn');

buttons.forEach( btn => {
  btn.addEventListener( 'click', function( event ) {
    if( btn.classList.contains( 'btn-action' ) ){
      console.log( getOffset(testAction));

      // console.log( 'A n actionc btn');
      switch (btn.id) {
        case 'A':
          testAction.classList.remove('secondary-action-effect');
          testAction.classList.toggle('main-action-effect');
          break;
        case 'B':
          testAction.classList.remove('main-action-effect');
          testAction.classList.toggle('secondary-action-effect');
          break;
        default:
      }
      // testAction.classList.toggle('secondary-action-effect');
    }
    if( btn.classList.contains( 'btn-movement' ) ){

      // console.log( 'A moevemnt btn');
      switch (btn.id) {
        case 'up':
        // testAction.classList.add('move-up');
           testAction.style.top = (parseInt(getOffset(testAction).top) -10) + 'px';
           break;
        case 'down':
           testAction.style.top = (parseInt(getOffset(testAction).top) + 10) + 'px';
           break;
        case 'left':
           testAction.style.left = (parseInt(getOffset(testAction).left) - 10) + 'px';
          break;
        case 'right':
           testAction.style.left = (parseInt(getOffset(testAction).left) + 10) + 'px';
          break;
        default: break;
      }
    }
    // testAction.innerHTML = this.textContent ;
    } )
}
)
// function getOffset(el) {
//   el = el.getBoundingClientRect();
//   return {
//     left: (el.right + window.scrollX ) +'px',
//     top: (el.top + window.scrollY ) +'px'
//   }
// }
function getOffset(el) {
  el = el.getBoundingClientRect();
  return {
    left: (el.left + window.scrollX ),
    top: (el.top + window.scrollY )
  }
}
// console.log( getOffset(testAction).top);
