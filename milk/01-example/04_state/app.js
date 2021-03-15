/**
  放兩個 Counter Component
  一個 count 為 0
  另一個 count 為 1
 */

function Counter(){
  var [count, setCount] = React.useState(0);
  return (
    <div className="counter">
      <h1>Counter</h1>
      <div className="count">{count}</div>
    </div>
  );
}

ReactDOM.render(
  <Counter/>,
  document.getElementById('app')
);