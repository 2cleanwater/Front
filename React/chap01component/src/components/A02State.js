// A02State.js

import React, { useState } from 'react'

function A02State(props) {
  // props는 읽기 전용 변수이다. 여기서 변경할 수 없다.
  const { name, age } = props;

  // 이 state에서만 사용할 내부 변수(변경되도 화면 갱신은 이루어지지 않음)
  const nick = '흥부';

  // 이 state에서만 사용할 내부 변수(변경되도 화면 갱신이 이루어짐)
  // import React, { useState } from 'react'와 같이 import가 된다
  // const [변수명, 변수를 변경할 함수명] = useStage(초기화값)

  // 변수명으로는 값을 수정할 수 없다. 수정은 항상 같이 기술한 함수로 변경
  const [user, setUser] = useState('방자');
  const [num, setNum] = useState(18);
  const [check, setCheck] = useState(true);
  const [arr, setArr] = useState( [10, 11, 100] );
  const [obj, setObj] = useState({
      name: 'HangDan',
      age: 20
  });

  // 함수
  // 값 조작 (기본형)
  const changeUser = (evt) => setUser('BangJa');
  const changeNum = (n) => setNum(n);
  const changeCheck = () => setCheck( !check );
  
  // 배열 조작(리퍼런스 형)
  const addArray = () => {
      const num = Math.ceil( Math.random() + 100 );
    //   setArr( arr.push(num) );       // Error
    setArr( arr.concat(num) );
  };

  

  return (
    <div>
        <h3>A02 State</h3>

        <div>
            Props: {name} / {age} <br />
            Normal Var: {nick} <br />
        </div>
        <br />

        <div>
            User: {user}<br />
            Num: {num}<br />
            {/* true, false 값은 화면에 표시되지 않는다 */}
            Check: {check ? '동의' : '동의 안함'}<br />
            Array: {arr[0]} / {arr[1]} / {arr[5]}<br />
            Object: {obj.name} / {obj.age} / {obj.address}<br />
        </div>

        <div>
            <button onClick={changeUser}>User</button>
            <button onClick={ () => changeNum(20) }>Num</button>
            <button onClick={changeCheck}>Check</button>
            <br />

            <button onClick={addArray}>Add Array</button>
            <button>Update Array</button>
            <button>Delete Array</button>

            <button>Add Object</button>
            <button>Update Object</button>
            <button>Delete Object</button>
        </div>
    </div>
  )
}

export default A02State;