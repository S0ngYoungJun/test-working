import Link from 'next/link';

type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function PostsPage() {
  try {
    const res = await fetch('http://localhost:3000/api/posts');
    const data = await res.json();

    if (!data.posts) {
      console.error('No posts found');
      return (
        <div>
          <h1>All Blog Posts</h1>
          <p>No posts available.</p>
        </div>
      );
    }

    return (
      <div>
        <h1>All Blog Posts</h1>
        <hr style={{ width: '220px' }} />

        <div style={{ paddingTop: '40px' }}>
          {data.posts.map((post: Post) => (
            <article key={post.id}>
              <Link href={`posts/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              <p style={{ paddingBottom: '30px' }}>{post.body}</p>
            </article>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching posts:');
    return (
      <div>
        <h1>All Blog Posts</h1>
        <p>Error fetching posts. Please try again later.</p>
      </div>
    );
  }
}