
// добавить обработчик выведения имя отзывов
const nameInput = document.getElementById('nameInput');
const addButton = document.getElementById('addButton');
const nameOutput = document.getElementById('nameOutput');
const feedbackInput = document.getElementById('feedbackInput');

function updateList() {
  nameOutput.innerHTML = '';
  const items =  JSON.parse(localStorage.getItem('items') || '[]');
  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    nameOutput.appendChild(listItem);
  });
}

addButton.addEventListener('click', () => {
  const value = nameInput.value;
  const feedbackValue = feedbackInput.value;


  if (value, feedbackValue) {
    const items =  JSON.parse(localStorage.getItem('items') || '[]');
    items.push(value, feedbackValue);
    localStorage.setItem('items', JSON.stringify(items));

    nameInput.value = '';
    feedbackInput.feedbackValue = '';
    
    updateList();
  }
});

// Код без сохранения данных между сессиями, возможно пригодится при использовании с базой данных

/* addButton.addEventListener('click', () => {
  const value = nameInput.value;

  if (value) {
    const newItem = document.createElement('li');
    newItem.textContent = value;
    nameOutput.appendChild(newItem);

    nameInput.value = '';
  }
});
 */


// Добавить обработчик события наведения мыши
const emailInput = document.getElementById('emailInput');

emailInput.addEventListener('mouseover', () => {
  emailInput.style.backgroundColor = 'lightgreen';
});

emailInput.addEventListener('mouseout', () => {
  emailInput.style.backgroundColor = '#'
});







