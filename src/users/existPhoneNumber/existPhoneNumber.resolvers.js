import client from "../../client";

export default {
  Mutation: {
    existPhoneNumber: async (_, { phoneNumber }) => {
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [
              {
                phoneNumber,
              },
            ],
          },
        });
        if (existingUser) {
          return {
            ok: false,
            error: "이미 사용중인 전화번호입니다.",
          };
        }
        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: "계정을 생성할 수 없습니다.",
        };
      }
    },
  },
};
