// https://reactjs.org/docs/hooks-state.html#equivalent-class-example

function Hooks0() {
  /* TODO 
  const [count, setCount] = React.useState(0);

  return (
    <section data-name="Hooks0 useState">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>addCount</button>
    </section>
  );
  // */
}

function Hooks1() {
  const [count, setCount] = React.useState(0);
  // Similar to componentDidMount and componentDidUpdate:
  /* TODO
  React.useEffect(() => {
    // Update the document title using the browser API
    console.log('useEffect count', count);
    document.title = `You clicked ${count} times`;
  });
  // */
  return (
    <section data-name="Hooks1 useEffect">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>addCount</button>
    </section>
  );
}

function Hooks2() {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(2);

  // https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect
  /* TODO
  React.useEffect(() => {
    console.log('useEffect count', count);
  },[count]); // 當 count 有更新時，該 useEffect 才會執行
  // */

  return (
    <section data-name="Hooks2 useEffect">
      <p>{count},{count2}</p>
      <button onClick={() => setCount(count + 1)}>addCount</button>
      <button onClick={() => setCount2(count2 + 1)}>addCount2</button>
    </section>
  );
}

function Hooks3() {
  const [count, setCount] = React.useState(0);
  // only componentDidMount
  /* TODO
  React.useEffect(() => {
    var timeoutId = setInterval(()=>{
      console.log('hi', count);
      setCount(count + 1); // 這樣寫是錯的
      //setCount(function(prev){
      //  return prev + 1; // 這樣寫才是對的
      //});
    }, 1000);
    // return 可以拿來當 componentWillUnmount 用
    return function(){  
      clearInterval(timeoutId);
    }
  }, []); // DependencyList 留空 Array, 表示什麼參數更新都不關心，可以拿來當 componentDidMount 用
  // */
  return (
    <section data-name="Hooks3 useEffect">
      <p>{count} times</p>
    </section>
  );
}



const computeExpensiveValue = (value:number):number => {
  console.log('computeExpensiveValue');
  let r = value;
  for (let i = 0; i < 1000000000; i += 1) {
    r += 1;
  }
  return r;
};
function Hooks4(){
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  /* TODO
  console.time();
  const memoizedValue:number = React.useMemo(() => {
    const result:number = computeExpensiveValue(count);
    return result;
  }, [count]);
  console.timeEnd();
  // */

  return (
    <section data-name="Hooks4 useMemo">
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>setCount</button>
      <h1>memoizedValue: {memoizedValue}</h1>
      <h1>count2: {count2}</h1>
      <button onClick={() => setCount2(count2 + 1)}>setCount2</button>
    </section>
  );
}



function Hooks5() {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  /* TODO
  const incrementCallback = () => {
    setCount(count + 1);
  };
  const incrementUseCallback1 = React.useCallback(() => {
    setCount(count + 1);
  }); // 這樣寫和上面的 incrementCallback 結果是一樣的
  const incrementUseCallback2 = React.useCallback(() => {
    setCount(count + 1);
  }, [count]); // 當 count 有變時，會回傳新的 function

  const incrementUseCallback3 = React.useCallback(() => {
    // wrong
    setCount(count + 1);
  }, []);

  const incrementUseCallback4 = React.useCallback(() => {
    // correct
    setCount(prev => prev + 1);
  }, []);
  // */
  
  return (
    <section data-name="Hooks5 useCallback">
      <p>You clicked {count} times</p>
      <MemoButton onClick={incrementCallback}>Increment</MemoButton>
      <MemoButton onClick={incrementUseCallback1}>incrementUseCallback1</MemoButton>
      <MemoButton onClick={incrementUseCallback2}>incrementUseCallback2</MemoButton>
      <MemoButton onClick={incrementUseCallback3}>incrementUseCallback3</MemoButton>
      <MemoButton onClick={incrementUseCallback4}>incrementUseCallback4</MemoButton>
      <button onClick={() => setCount2(count2 + 1)}>
        setCount2
      </button>
    </section>
  );
}


function Hooks6() {
  const {isLoading, lists} = useFetchList();
  if (isLoading) {
    return <div>Loading</div>
  }
  return (
    <section data-name="Hooks5 CustomHooks">
      <ul>
        {
          lists.map(function(todo){
            return <li key={todo.id}>{todo.title}</li>
          })
        }
      </ul>
    </section>
  );
}



function App() {
  return (
    <div className="app container">
      <Hooks0 />
      {/* <Hooks1 /> */}
      {/* <Hooks2 /> */}
      {/* <Hooks3 /> */}
      {/* <Hooks4 /> */}
      {/* <Hooks5 /> */}
      {/* <Hooks6 /> */}
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);

/*
var hooksMemory = {
  _value: null,
  useState(newValue){
    if (!this._value) {
      this._value = newValue;
    }
    return [
      this._value,
      (value) => this._value = value
    ]
  }
}
function foo(){
  var [count , setCount] = hooksMemory.useState(10);
  console.log('foo count:', count);
  if (!hooksMemory.useEffect) {
    hooksMemory.useEffect = function(){
      setInterval(() => {
        console.log('interval closure count:',count);
        setCount(count + 1)
      }, 1000);
    }
    hooksMemory.useEffect();
  }
  setCount(count + 10)
}
foo();
foo();
foo();
// */