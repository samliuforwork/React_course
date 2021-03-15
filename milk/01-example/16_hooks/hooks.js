const {useState, useEffect} = React;

const useFetchList = () => {
  const [isLoading, setLoading] = useState(true);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(({ data }) => {
      setLoading(false);
      setLists(data);
    });
  }, []);
  return { isLoading, lists };
};

const useIntersectionObserver = () => {
  var [isEntry, setEntry] = useState(false);
  var node = React.useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: "0px 0px 0px 0px"
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setEntry(entry.isIntersecting);
      });
    }, options);
    if(node.current) {
      observer.observe(node.current);
    }
    return ()=>{
      observer.disconnect();
    } 
  }, [node]);
  
  
  return {
    isEntry,
    node
  }
}
