const connection = require('./connection');

const create = async (body, userId) => {
  const db = await connection();

  const createTask = await db.collection('tasks').inserOne({ ...body, userId });

  return { _id: createTask.insertedId, body, userId };
};

module.exports = {
  create,
};
