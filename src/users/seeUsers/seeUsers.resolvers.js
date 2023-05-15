import client from "../../client";

export default {
  Query: {
    seeUsers: async (_, { isMentor }) =>
      client.user.findMany({
        where: {
          id: {
            gte: 1,
          },
          mentor: isMentor ? false : true,
        },
      }),
  },
};
