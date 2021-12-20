import { useEffect, useState } from 'react';
import axios from 'axios'
import Posts from './component/Posts';
import Pagination from './component/pagination';

function App() {

  const [ posts, setPosts ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ postsPerPage ] = useState(10);

  useEffect(() => {
    const fatchPost = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fatchPost();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFistPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFistPost, indexOfLastPost)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  console.log(posts);
  return (
    <div className="container">
      <h1> Api Paginations </h1>
      <Posts posts={ currentPosts } loading={ loading } />
      <Pagination
        postsPerPage={ postsPerPage }
        totalPage={ posts.length }
        paginate={ paginate }
      />
    </div>
  );
}

export default App;
