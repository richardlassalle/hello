// Simple vanilla JS counter for now (since SolidJS dependencies have issues)
let count = 0;

const root = document.getElementById('root');
if (root) {
  // Create the counter UI
  const container = document.createElement('div');
  container.className = 'container';
  
  const title = document.createElement('h1');
  title.textContent = 'SolidJS Starter (Vanilla JS Fallback)';
  
  const card = document.createElement('div');
  card.className = 'card';
  
  const button = document.createElement('button');
  button.className = 'primary-btn';
  button.textContent = `Count is ${count}`;
  button.onclick = () => {
    count++;
    button.textContent = `Count is ${count}`;
  };
  
  const description = document.createElement('p');
  description.textContent = 'SolidJS dependencies failed to install. This is a vanilla JS fallback.';
  
  card.appendChild(button);
  card.appendChild(description);
  container.appendChild(title);
  container.appendChild(card);
  
  // Clear existing content and add our app
  root.innerHTML = '';
  root.appendChild(container);
}