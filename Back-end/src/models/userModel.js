const connection = require('./connection');

const create = async (body) => {
  const db = await connection();

  const createTask = await db.collection('users').inserOne({ ...body });

  return { _id: createTask.insertedId, body };
};

module.exports = {
  create,
};