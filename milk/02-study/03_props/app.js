
function FunctionalCard(props){
  return (
    <div className="card">
      <img className="img" src={props.img} />
      <div className="name">{props.name}</div>
      <div className="quote">{props.children}</div>
    </div>
  );
  // TODO: 2 start
  /*
  return (
    <div className="card">
      <img className="img" src={props.img} />
      <div className="name">{props.name}</div>
      <div className="quote">{props.children}</div>
    </div>
  );
  // */
  // TODO: 2 end
}



ReactDOM.render(
  <div>
    <FunctionalCard 
      img="http://fakeimg.pl/200x80/?text=milkmidi"
      name="Component" />
    <FunctionalCard 
      img="http://fakeimg.pl/200x80/ff0000/?text=pipi"
      name="Component"/>
  </div>
  
  // TODO:3 start
  /*
  <div>
    <FunctionalCard 
      img="http://fakeimg.pl/200x80/?text=milkmidi"
      name="Component" />
    <FunctionalCard 
      img="http://fakeimg.pl/200x80/ff0000/?text=pipi"
      name="Component">
    </FunctionalCard>
  </div>
  // */
  // TODO: 3 end
  ,
  document.getElementById('app')
);