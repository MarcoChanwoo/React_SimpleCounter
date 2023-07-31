import { useRef, useEffect, useState } from 'react';
import './App.css';
// import { useState } from 'react';
import Viewer from './component/Viewer';
import Controller from './component/Controller';
import Even from './component/Even';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleSetCount = (value) => {
    setCount(count + value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const didMountRef = useRef(false); // didMountRef: 컴포넌트가 마운트 되었는지 판단용

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return; // useRef: 리렌더 될때만 실행하는 조건
    } else {
      console.log("component updated");
    }
  }); // 모두 나열하지 않고 업데이트를 카운트함(콘솔 숫자확인가능)

  useEffect(() => {
    console.log("component mount");
  },[]); // useEffect 함수를 생성 후 빈배열([])을 전달함. 컴포넌트의 마운트 시점에만 콜백함수를 실행

  useEffect(() => {
    const interverID = setInterval(() => {
      console.log("깜빡");
    }, 1000); // 업데이트된 후 1000ms마다 카운트, 버튼 가중 시 speed up

    return () => {
      console.log("clean up!");
      clearInterval(interverID);
    };
  }); // 클릭 시마다 새롭게 카운트


  return (
    <div className="App">
      <h2>Simple Counter</h2>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count%2===0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}
export default App;
// rerander hightlight 기능은 Component 탭이 열려 있어야만 확인 가능함
