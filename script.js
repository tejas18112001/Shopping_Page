

// cart increament and decreament logic
document.getElementById("increment").addEventListener("click", function() {
  increment();
});

document.getElementById("decrement").addEventListener("click", function() {
  decrement();
});

function increment() {
  var numElement = document.getElementById("num");
  var num = parseInt(numElement.textContent);
  num++;
  numElement.textContent = num;
}

function decrement() {
  var numElement = document.getElementById("num");
  var num = parseInt(numElement.textContent);
  if (num > 0) {
      num--;
      numElement.textContent = num;
  }
}





document.querySelectorAll('.color-box').forEach(i => {
  i.addEventListener('click', event => {
    
      document.querySelectorAll('.color-box').forEach(box => {
          box.classList.remove('clicked');
      });

      event.target.classList.add('clicked');
  });
});


document.querySelectorAll('.size p').forEach(item => {
  item.addEventListener('click', event => {
    
      document.querySelectorAll('.size p.clicked').forEach(clickedItem => {
          clickedItem.classList.remove('clicked');
      });

     
      item.classList.add('clicked');
  });
});






// message


document.querySelector('.cart-button').addEventListener('click', function() {
  
  const COLOR = document.querySelector('.color-box.clicked').classList[1];
  const SIZE = document.querySelector('.size p.clicked').textContent;
  const message = `Embrace Sideboard with Color ${COLOR} and Size ${SIZE} added to cart`;
  const cartMessage = document.createElement('div');
  cartMessage.textContent = message;
  cartMessage.classList.add('cart-message');
  document.querySelector('.button-container').appendChild(cartMessage);
});






document.querySelectorAll('.img img').forEach(img => {
  img.addEventListener('click', function() {
     
      const clickedSrc = this.src;
      leftSrc = document.querySelector('.left img').src;
      this.src = leftSrc;
      document.querySelector('.left img').src = clickedSrc;
  });
});



