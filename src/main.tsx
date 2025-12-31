// Vanilla JS app with Toolbar and Main components
import './style.css';

// Toolbar component
function createToolbar() {
  const toolbar = document.createElement('header');
  toolbar.className = 'toolbar h-16 flex items-center justify-between px-6 shadow-lg';
  
  toolbar.innerHTML = `
    <div class="flex items-center space-x-4">
      <h1 class="text-xl font-bold text-dark-text">SolidJS App</h1>
    </div>
    
    <nav class="flex items-center space-x-6">
      <button class="text-dark-text hover:text-white transition-colors duration-200">
        Home
      </button>
      <button class="text-dark-muted hover:text-white transition-colors duration-200">
        About
      </button>
      <button class="text-dark-muted hover:text-white transition-colors duration-200">
        Contact
      </button>
      <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
        Sign In
      </button>
    </nav>
  `;
  
  return toolbar;
}

// Main component
function createMain() {
  const main = document.createElement('main');
  main.className = 'main-content p-6';
  
  main.innerHTML = `
    <div class="max-w-4xl mx-auto">
      <section class="mb-12">
        <h2 class="text-4xl font-bold text-dark-text mb-4">
          Welcome to SolidJS
        </h2>
        <p class="text-lg text-dark-muted mb-8">
          A reactive JavaScript library for building user interfaces with fine-grained reactivity.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-dark-secondary p-6 rounded-lg border border-dark-border">
            <h3 class="text-xl font-semibold text-dark-text mb-3">⚡ Fast</h3>
            <p class="text-dark-muted">
              SolidJS is known for its exceptional performance and runtime efficiency.
            </p>
          </div>
          
          <div class="bg-dark-secondary p-6 rounded-lg border border-dark-border">
            <h3 class="text-xl font-semibold text-dark-text mb-3">🔧 Simple</h3>
            <p class="text-dark-muted">
              Clean and intuitive API that makes building reactive applications easy.
            </p>
          </div>
          
          <div class="bg-dark-secondary p-6 rounded-lg border border-dark-border">
            <h3 class="text-xl font-semibold text-dark-text mb-3">🎯 Powerful</h3>
            <p class="text-dark-muted">
              Fine-grained reactivity gives you precise control over your application state.
            </p>
          </div>
        </div>
      </section>
      
      <section class="bg-dark-secondary p-8 rounded-lg border border-dark-border">
        <h3 class="text-2xl font-bold text-dark-text mb-4">Get Started</h3>
        <div class="bg-dark-accent p-4 rounded-lg mb-4">
          <code class="text-green-400 text-sm">
            npm create solid@latest
          </code>
        </div>
        <p class="text-dark-muted">
          Start building your next application with SolidJS today!
        </p>
      </section>
    </div>
  `;
  
  return main;
}

// App component
function createApp() {
  const app = document.createElement('div');
  app.className = 'min-h-screen bg-dark-primary';
  
  const toolbar = createToolbar();
  const main = createMain();
  
  app.appendChild(toolbar);
  app.appendChild(main);
  
  return app;
}

// Render the app
const root = document.getElementById('root');
if (root) {
  const app = createApp();
  root.innerHTML = '';
  root.appendChild(app);
}