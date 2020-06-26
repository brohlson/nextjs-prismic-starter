/* eslint-disable no-console */
// import Prismic from 'prismic-javascript';
import { Client } from '../config/prismic-config';

export default class PrismicClient {
  constructor(req) {
    this.client = Client(req);
  }

  /**
   * Returns singleton type data
   * @param {String} model Prismic model name
   * @param {Function} normalizer Normalizer function for page data
   * @param {Object} config Config object for Prismic singleton query
   */
  async getSingletonData(model, normalizer, config = {}) {
    try {
      const res = await this.client.getSingle(model, config);
      return normalizer(res);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

/**
 * Example of a linkResolver function for use with rich content types
 */
export const linkResolver = doc => {
  // Pretty URLs for known types
  if (doc.type === 'blog') return `/post/${doc.uid}`;
  if (doc.type === 'page') return `/${doc.uid}`;
  // Fallback for other types, in case new custom types get created
  return `/doc/${doc.id}`;
};
