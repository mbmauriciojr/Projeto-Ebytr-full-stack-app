const connection = require('./connection');

const findEmail = async (email) => {
  const db = await connection();

  const checkEmail = await db.collection('users').findOne({ where: { email } });

  return checkEmail;
};

const create = async (body) => {
  const db = await connection();

  const createTask = await db.collection('users').insertOne({ ...body });

  return { _id: createTask.insertedId, body };
};

const login = async (body) => {
  const { email, password } = body;

  const checkEmail = await findEmail(email);
};

module.exports = {
  create,
  login,
};
