class Card extends React.Component {
  // TODO: 1 start
  render() {
    return (
      <div className="card">
        <img className="img" src={this.props.img} />
        <div className="name">{this.props.name}</div>
        <div className="quote">{this.props.children}</div>
      </div>
    );
  }
  // TODO: 1 end
}

function FunctionalCard(props){
  // TODO: 2 start
  return (
    <div className="card">
      <img className="img" src={props.img} />
      <div className="name">{props.name}</div>
      <div className="quote">{props.children}</div>
    </div>
  );
  // TODO: 2 end
}

ReactDOM.render(
  // TODO: 3 start
  <div>
    <Card
      img="http://fakeimg.pl/240x80/ff0000?text=milkmidi"
      name="Component" />
    <Card
      img="http://fakeimg.pl/240x80/00ff00/?text=pipi"
      name="Component">
      <h1>這裡可以放 children 元素</h1>
    </Card>
    <FunctionalCard
      img="http://fakeimg.pl/240x80/0000ff/?text=functional"
      name="functional">
      <h2>我是子元素</h2>
    </FunctionalCard>
  </div>
  // TODO: 3 end
  ,
  document.getElementById('app')
);