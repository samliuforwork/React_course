function Counter(){
  const [count, setCount] = React.useState(0);
  const atClick = () => {
    setCount(count + 1);
  }
  return (
    <div className="counter">
      <h1>Counter</h1>
      <div className="count">{count}</div>
      <button onClick={atClick}>+1</button>
    </div>
  );
}

ReactDOM.render(
  <Counter/>,
  document.getElementById('app')
);