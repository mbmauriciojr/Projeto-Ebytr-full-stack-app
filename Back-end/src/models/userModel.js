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

module.exports = {
  create,
  findEmail,
};
