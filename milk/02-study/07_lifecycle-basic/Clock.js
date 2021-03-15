
function Clock() {
  React.useEffect(() => {
    console.log('出生時執行')
    return () => {
      console.log('死亡時執行');
    }
  }, [])

  
  /* // TODO
  React.useEffect(() => {
    console.log('componentDidMount')
    return () => {
      console.log('componentWillUnmount');
    }
  }, []);
  // */

  return (
    <div className="my-component">
      <h2>react useEffect</h2>
    </div>
  )
}
