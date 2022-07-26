export default () => {
  return {
    database: process.env.DATABASE_URL,
    bcrypt: {
      saltRounds: parseInt(process.env.PASSWORD_SALT_ROUNDS, 10),
    },
  };
};
