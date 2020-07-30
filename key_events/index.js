// btns keyCodes
// 37 38 39 40  65  83
// l  u  r  d  'a' 's'
const testAction = document.querySelector('#action-placeholder');
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
const buttons = document.querySelectorAll('.btn');
buttons.forEach( btn => {
  btn.addEventListener( 'click', function( event ) {
    console.log( testAction.innerHTML = this.textContent );
    } )
}
)
