
import 'bootstrap/dist/css/bootstrap.css';
// npm i bootstrap@4
// npm un react-router  => 삭제
// npm i react-router react-router-dom
// npm i react-loader-spinner

import { Route, } from 'react-router-dom'

function App() {
  const user = {name: 'HungBu', age: 20};
  const ary = ['a', 'b', 'c'];
  const onPlus = (x, y) => {
    return `${x} + ${y} = ${x + y}`;
  }

  return (
    <div className="card-body">
      <h1>Router</h1>

      {/* Route가 기술된 영역에 지정한 컴퍼넌트가 표시된다 */}

      <Route path="/"     render={ () => <div>
                              <h1>Index Page</h1>
                              <div>Hello World</div>
                            </div>} />

    </div>
  );
}

export default App;
