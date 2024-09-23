
const form = document.getElementById('signup-form');
const formDataDiv = document.getElementById('form-data');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name-one').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  formDataDiv.style.display = 'block';
  document.getElementById('name-display').innerHTML = `Name: ${name}`;
  document.getElementById('email-display').innerHTML = `Email: ${email}`;
  document.getElementById('password-display').innerHTML = `Password: ${password}`;
});


const readMoreBtn = document.getElementById('read-more-btn');
const fullDetailsDiv = document.querySelector('.full-details');

readMoreBtn.addEventListener('click', () => {
  fullDetailsDiv.style.display = 'block';
});






editBtn.addEventListener('click', () => {
  const hiddenForm = document.createElement('form');
  hiddenForm.className = 'hidden-form';
  hiddenForm.innerHTML = `
    <label for="name">Name:</label>
    <input type="text" id="name-two" name="name" value="${name}"><br><br>
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" value="${age}"><br><br>
    <label for="grade">Grade:</label>
    <input type="text" id="grade" name="grade" value="${grade}"><br><br>
    <input type="submit" value="Update Student">
  `;

  tableRow.appendChild(hiddenForm);
});
