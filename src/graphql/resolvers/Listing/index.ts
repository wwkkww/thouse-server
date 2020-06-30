import { IResolvers } from 'apollo-server-express';
// import { listings } from '../listings';
import { Database, Listing } from '../../../lib/types';
import { ObjectId } from 'mongodb';

export const listingResolvers: IResolvers = {
  Query: {
    listings: async (_root: undefined, _args: {}, { db }: { db: Database }): Promise<Listing[]> => {
      // throw new Error('Error from fetch listing');
      return await db.listings.find({}).toArray();
    },
  },
  Mutation: {
    deleteListing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<Listing> => {
      // for (let i = 0; i < listings.length; i++) {
      //   if (listings[i].id === id) {
      //     console.log('found!!!');

      //     return listings.splice(i, 1)[0];
      //   }
      // }
      // throw new Error('failed to delete listing');

      const deleteResponse = await db.listings.findOneAndDelete({
        _id: new ObjectId(id),
      });

      if (!deleteResponse.value) {
        throw new Error('failed to delete listing');
      }

      return deleteResponse.value;
    },
  },
  Listing: {
    id: (listing: Listing): string => listing._id.toString(),
    // title: (listing: Listing) => listing.title,
    // image: (listing: Listing) => listing.image,
  },
};
