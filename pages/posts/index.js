import { Fragment } from 'react';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/post-util';
import Head from 'next/head';

// const Dummy_Posts = [
//   {
//     slug: 'getting-started-with-NextJs',
//     title: 'Getting started with Next Js',
//     date: '2023-11-22',
//     excerpt:
//       'NextJS is a React Framework for Production- It makes building fullstack applications easy',
//     image: 'getting-started-nextjs.png',
//   },
//   {
//     slug: 'getting-started-with-NextJs2',
//     title: 'Getting started with Next Js',
//     date: '2023-11-22',
//     excerpt:
//       'NextJS is a React Framework for Production- It makes building fullstack applications easy',
//     image: 'getting-started-nextjs.png',
//   },
//   {
//     slug: 'getting-started-with-NextJs3',
//     title: 'Getting started with Next Js',
//     date: '2023-11-22',
//     excerpt:
//       'NextJS is a React Framework for Production- It makes building fullstack applications easy',
//     image: 'getting-started-nextjs.png',
//   },
//   {
//     slug: 'getting-started-with-NextJs4',
//     title: 'Getting started with Next Js',
//     date: '2023-11-22',
//     excerpt:
//       'NextJS is a React Framework for Production- It makes building fullstack applications easy',
//     image: 'getting-started-nextjs.png',
//   },
// ];

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title> All Posts</title>
        <meta
          name="description"
          content="A list of all programming related tutorials and posts"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allpost = getAllPosts();

  return {
    props: {
      posts: allpost,
    },
  };
}

export default AllPostsPage;
