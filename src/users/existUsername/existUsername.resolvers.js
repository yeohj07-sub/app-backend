import client from "../../client";

export default {
  Mutation: {
    existUsername: async (_, { username }) => {
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [
              {
                username,
              },
            ],
          },
        });
        if (existingUser) {
          return {
            ok: false,
            error: "이미 사용중인 아이디입니다.",
          };
        }
        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: "Can't create account.",
        };
      }
    },
  },
};
