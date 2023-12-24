// Que. How can you implement server-side rendering using Next.js in ReactJS?

// To implement server-side rendering (SSR) using Next.js in React, utilize Next.js's getServerSideProps function within your page components.
// This function fetches data on the server-side and passes it as props to your React components, 
// enabling server-side rendering. Simply create a page component, define the getServerSideProps function to fetch data (e.g., from an API), 
// and return the fetched data as props. When the page is accessed, Next.js will execute this function on the server, render the page 
// with the fetched data, and send the fully rendered HTML to the client, enhancing performance and SEO.

// Server Component
export default function Page() {
    // Server Action
    async function create() {
      'use server'
   
      // ...
    }
   
    return (
      // ...
    );
  }