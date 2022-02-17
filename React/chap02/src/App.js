// npm i bootstrap@4
import 'bootstrap/dist/css/bootstrap.css';

import TodoTemplate from './components/TodoTemplate'

function App() {
  return (
    <div className="container">
      <div className="col-12 text-center">
        <h1>TodoList</h1>
      </div>
      
      <div className="col-12">
        <TodoTemplate />
      </div>
    </div>
  );
}

export default App;
