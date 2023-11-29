import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/post-util';

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

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Max's Blog</title>
        <meta
          name="description"
          content="I Post about Programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },

    revalidate: 60,
  };
}

export default HomePage;
