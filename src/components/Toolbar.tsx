// Toolbar component
export function Toolbar() {
  return (
    <header class="toolbar h-16 flex items-center justify-between px-6 shadow-lg">
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
    </header>
  );
}