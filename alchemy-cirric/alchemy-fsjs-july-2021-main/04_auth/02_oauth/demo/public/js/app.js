fetch('/api/v1/auth/verify')
  .then((res) => {
    if (res.ok) return res.json(); // res.json() is what `user` is on line 6
    else throw new Error('Please log in to continue :)'); // will trigger our `catch` statement on line 10
  })
  .then((user) => {
    // user is logged in
    renderLoggedInView(user);
  })
  .catch((error) => {
    // user is not logged in
    renderLoggedOutView(error.message);
  });

function renderLoggedInView(user) {
  const root = document.getElementById('root');
  const p = document.createElement('p');
  p.textContent = user.username;
  root.appendChild(p);

  const form = document.createElement('form');
  const textarea = document.createElement('textarea'); // <textarea name="text"></textarea>
  textarea.name = 'text';

  const button = document.createElement('button');
  button.textContent = 'Create Tweet';

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // get the form fields and their values
    const formData = new FormData(event.target);
    const text = formData.get('text'); // for getting one field's value
    const formValues = Object.fromEntries([...formData.entries()]); // for getting all form fields in a key/value object

    console.log('formValues', formValues);
    console.log('text', text);

    fetch('/api/v1/tweets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues), // or JSON.stringify({ text })
    });

    // result can be viewed at:
    // http://localhost:7890/api/v1/users/YOUR_USERNAME/tweets
  });

  // add our fields to the form
  form.appendChild(textarea);
  form.appendChild(button);

  // add our form to the page
  root.appendChild(form);
}

function renderLoggedOutView(message) {
  const root = document.getElementById('root');
  const button = document.createElement('button');
  const p = document.createElement('p');
  p.textContent = message;
  button.textContent = 'Login with GitHub';
  button.addEventListener('click', () => {
    window.location.assign('/api/v1/auth/login');
  });

  root.appendChild(p);
  root.appendChild(button);
}
