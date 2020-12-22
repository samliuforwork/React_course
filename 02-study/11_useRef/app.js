function UseRefExample(){
  const [count, setCount] = React.useState(0);
  const [show, setShow] = React.useState(false);

  //* // TODO
  const refInput = React.useRef();

  const atShowClick = () => {
    setShow(!show);
    console.log(refInput.current); // undefined
    // setShow會重新render，但不知道什麼時候更新，這時候就要透過  }, [show]);這個變數來觀察，觀察陣列裡面元素有異動時可以做我們希望他做的事情，當他有異動時function才會run
  }

  React.useEffect(() => {
    console.log('count', count);
  }, [count]);

  React.useEffect(() => {
    if (show) {
      console.log(refInput.current); // correct
      refInput.current.focus();
    }
  }, [show]);

  
  return (
    <div className="ref-example-component">
      <section>
        <button onClick={atShowClick}>show input</button>
        <button onClick={()=> setCount(count+1)}>+1</button>
        {
          show && <input ref={refInput} />
        }
      </section>
    </div>
  );
  // */
}

ReactDOM.render(
  <UseRefExample />,
  document.getElementById('app')
);
