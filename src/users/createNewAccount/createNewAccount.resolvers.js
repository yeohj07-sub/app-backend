import bcrypt from "bcrypt";
import client from "../../client";

export default {
  Mutation: {
    createNewAccount: async (
      _,
      {
        mentor,
        username,
        password,
        name,
        birth,
        gender,
        phoneNumber,
        counselPrice,
        major,
        field,
      }
    ) => {
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [
              {
                username,
              },
              {
                phoneNumber,
              },
            ],
          },
        });
        if (existingUser) {
          throw new Error("아이디 또는 전화번호가 이미 사용중입니다.");
        }
        const uglyPassword = await bcrypt.hash(password, 10);
        await client.user.create({
          data: {
            mentor,
            username,
            password: uglyPassword,
            name,
            birth,
            gender,
            phoneNumber,
            counselPrice,
            major,
            field,
          },
        });
        return {
          ok: true,
        };
      } catch (error) {
        return {
          ok: false,
          error: error,
        };
      }
    },
  },
};
