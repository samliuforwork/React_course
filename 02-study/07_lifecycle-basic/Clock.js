
function Clock() {
  
  /* // TODO
  React.useEffect(() => {
    console.log('componentDidMount')
    // 建立時印出上面這段
    return () => {
      console.log('componentWillUnmount');
      // 死亡時return印出上面這段
    }
  }, []);
  // */

  React.useEffect(() => {
    console.log('零件被建立')
    return () =>{
      console.log('零件死亡');
    }
  },[]);

  return (
    <div className="my-component">
      <h2>react useEffect</h2>
    </div>
  )
}
