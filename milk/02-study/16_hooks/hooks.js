const {useState, useEffect} = React;

const useFetchList = () => {
  /* TODO
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
  // */
};