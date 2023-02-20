const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.querySelector('.list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const task = input.value.trim();
  if (task !== '') {
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox"><span>${task}</span><button>Delete</button>`;
    list.appendChild(li);
    input.value = '';
  }
});

list.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    event.target.parentElement.remove();
  }
});