import merge from 'lodash.merge';
import { viewerResolvers } from './Viewer';
// import { listingResolvers } from './Listing';

// merge individual resolver pieces together
export const resolvers = merge(
  viewerResolvers
  // userResolvers,
  // postResolvers,
  // listingResolvers
);
