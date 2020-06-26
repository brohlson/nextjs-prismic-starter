import Prismic from 'prismic-javascript';
import { PRISMIC_ENDPOINT } from './consts/urls';

const apiEndpoint = PRISMIC_ENDPOINT;
export const accessToken = null;

export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};
