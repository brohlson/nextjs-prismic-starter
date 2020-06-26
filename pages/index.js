/* eslint-disable no-console */
import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';

// import { normalizeHomeData } from '../utils/normalizers';
// import PrismicClient from '../lib/PrismicClient';

const Home = ({ data }) => {
  console.log(data);
  return (
    <Fragment>
      <Head>
        <title>Next JS Starter</title>
      </Head>
      <h1>Next Prismic styled-components starter</h1>
      <Link href="/">
        <a>With progress bar</a>
      </Link>
    </Fragment>
  );
};

export async function getServerSideProps() {
  // const p = new PrismicClient(req);
  // const data = await p.getSingletonData('homepage', normalizeHomeData);
  const data = { foo: 'bar' };
  return {
    props: {
      data,
    },
  };
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Home;
