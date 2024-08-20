
// добавить обработчик выведения имя отзывов
const nameInput = document.getElementById('nameInput');
const feedbackInput = document.getElementById('feedbackInput');
const addButton = document.getElementById('addButton');
const nameOutput = document.getElementById('nameOutput');

function updateList() {
  nameOutput.innerHTML = '';
  const items =  JSON.parse(localStorage.getItem('items') || '[]');

  items.forEach(item => {
    if (item.name && item.feedback) {

      const listItem = document.createElement('li');
  
      const nameElement = document.createElement('strong');
      nameElement.textContent = item.name;
  
      const feedbackElement  = document.createElement('p');
      feedbackElement.textContent = item.feedback;
  
      listItem.appendChild(nameElement);
      listItem.appendChild(feedbackElement);
  
      nameOutput.appendChild(listItem);
    }
  });
}

addButton.addEventListener('click', () => {
  const nameValue = nameInput.value.trim();
  const feedbackValue = feedbackInput.value.trim();


  if (nameValue, feedbackValue) {
    const items =  JSON.parse(localStorage.getItem('items') || '[]');
    items.push({ name: nameValue, feedback: feedbackValue });

    localStorage.setItem('items', JSON.stringify(items));

    nameInput.value = '';
    feedbackInput.value = '';
    
    updateList();
  }
});

updateList();



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








