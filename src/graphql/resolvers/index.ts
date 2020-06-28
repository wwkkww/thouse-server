import merge from 'lodash.merge';
import { listingResolvers } from './Listing';

// merge individual resolver pieces together
export const resolvers = merge(
  // userResolvers,
  // postResolvers,
  listingResolvers
);
