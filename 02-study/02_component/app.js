// TODO: 1 start 上古神獸，沒人在用了
/*
class MyComponent extends React.Component {
  render() {
    return (
      <div className="my-component">
        這是ReactComponent組件
      </div>
    );
  }
}
// */
// TODO: 1 end

// TODO: 2 start
/*
function FunctionalComponent(){
  return (
    <div className="functional-component">
      這是functionalComponent組件
      <br/>
      今天日期：
      {
        new Date().toDateString()
      }
    </div>
  )
}

// */
// TODO: 2 end

// TODO:3 start
/*
ReactDOM.render(
  <div>
    <MyComponent />
    <FunctionalComponent />
  </div>
  ,
  document.getElementById('app')
);
// */
// TODO:3 end


// example 2
function FunctionalComponent(){
  return(
    <div className="functional-component">
    { new Date().toDateString() }
    </div>
  )
}

ReactDOM.render(
  <div>
    <FunctionalComponent />
    <FunctionalComponent />
    <FunctionalComponent />
    <FunctionalComponent />
    <FunctionalComponent />
  </div>
  ,
  document.getElementById('app')
);