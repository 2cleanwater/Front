// A01Props.js

import React from 'react'

function A01Props(props) {          // props는 React가 주입해 주는 참조 변수

  const { comp, name, age, ary, obj, onAdd, changeName, changeAge, num } = props;
  
  return (
    <div>
        <h3>A01 Props Component</h3>

        <div>
            comp: {props.comp}<br />
            Name: {props.name}<br />
            Age: {props.age + 100}<br />
            Array: {props.ary[0]} / {props.ary[1]} / {props.ary[5]}<br />
            Object: {props.obj.name} / {props.obj.age} / {props.obj.address}<br />
            onAdd: {props.onAdd(10, 20)}<br />
            Num: {props.num * 100}<br />
            <button className='btn btn-primary btn-sm' onClick={changeName}>Change Name</button>
            <button className='btn btn-danger btn-sm' onClick={changeAge}>Change Age</button>
        </div>

        <hr />
        
        <div>
            comp: {comp}<br />
            Name: {name}<br />
            Age: {age + 100}<br />
            Array: {ary[0]} / {ary[1]} / {ary[5]}<br />
            Object: {obj.name} / {obj.age} / {obj.address}<br />
            onAdd: {onAdd(10, 20)}<br />
            Num: {num * 10}<br />
            <button className='btn btn-primary btn-sm' onClick={changeName}>Change Name</button>
        </div>

    </div>
  )
}

export default A01Props

A01Props.defaultProps = {
    num: 1000
}