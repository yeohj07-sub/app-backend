import client from "../../client";

export default {
  Query: {
    seeUsers: async (_, { value }) =>
      client.user.findMany({
        where: {
          id: {
            gte: 1,
          },
        },
      }),
  },
};
