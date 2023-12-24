// Server-side Rendered Component

export default async function Posts() {
  const posts = await create();
  // console.log(posts);  
  return (
      <div>
        <h1>Posts</h1>
        {posts.map((post) => (
          <ul key={post.id} className='post-container'>
            <h3 className="post-title">
              <span>{post.id}. </span>{post.title} 
            </h3> 
            <li className="post-content">
              {post.body}
            </li>
          </ul>
          ))}  
      </div>
    );
  }
  
  

  async function create() {
    'use server';

    try {
      // Fetch data from an API on the server-side
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();

      // Log the fetched data
      // console.log('Fetched data:', data);
      
      // Perform any server-side operation here
      // ...
      return data; // Return data to the client-side
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }