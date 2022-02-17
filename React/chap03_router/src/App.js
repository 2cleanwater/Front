
import 'bootstrap/dist/css/bootstrap.css';
// npm i bootstrap@4

// npm un react-router  => 6 버전이 설치되면 삭제 
// npm i react-router@5 

// npm un react-router-dom  => 6 버전이 설치되면 삭제 
// npm i react-router-dom@5


import { Link, Route } from 'react-router-dom'

import A01FunctionProps from './components/A01FunctionProps'
import A02FunctionState from './components/A02FunctionState'
import A03Currency from './components/A03Currency'
import A04History from './components/A04History'

function App() {
  const user = {name: 'HungBu', age: 20};
  const ary = ['a', 'b', 'c'];
  const onPlus = (x, y) => {
    return `${x} + ${y} = ${x + y}`;
  }

  return (
    <div className="card-body">
      <h1>Router</h1>

      <div>
        <Link to="/">Index</Link> | {' '} 
        <Link to="/props">Props</Link> | {' '}
        <Link to="/state">State</Link> | {' '}
        <Link to="/currency">Currency</Link> | {' '}
        <Link to="/history">History</Link> | {' '}
      </div>

      <hr />

      {/* Route가 기술된 영역에 지정한 컴퍼넌트가 표시된다 */}
  
      <Route path="/"  exact={true}       render={ () => <div>
                                                <h1>Index Page</h1>
                                                <div>Hello World</div>
                                              </div>} />

      {/* props로 값을 전달 할 필요가 있는 경우 */}
      <Route path="/props"     render={ () => <A01FunctionProps name="NolBu" age={20} arr={ary} user={user} onPlus={onPlus} isChecked={true} /> } />

      {/* props의 값 전달 없이 순수하게 표시만 하는 경우는 component로 간단히 사용 */}
      <Route path="/state"      component={A02FunctionState} />
      <Route path="/currency"   component={A03Currency} />
      <Route path="/history"    component={A04History} />

    </div>
  );
}

export default App;
