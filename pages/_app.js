/* eslint-disable react/prop-types */
import 'typeface-inter';
import { Fragment } from 'react';

import Layout from '../components/Layout';
import Progress from '../components/Progress';

export default function App({ Component, pageProps, globalData }) {
  return (
    <Fragment>
      <Progress />
      <Layout globalData={globalData}>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

/**
 * If you don't need this, delete it
 * It opts out of smart auto static rendering
 * https://err.sh/next.js/opt-out-auto-static-optimization
 */
App.getInitialProps = async () => {
  // const p = new PrismicClient(req);
  // const globalData = await p.getSingletonData('global', normalizeGlobalData);
  const globalData = { foo: 'bar' };
  return { globalData };
};
