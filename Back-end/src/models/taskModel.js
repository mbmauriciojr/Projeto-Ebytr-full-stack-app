const connection = require('./connection');

const create = async (body, userId) => {
  const db = await connection();

  const createTask = await db.collection('tasks')
    .insertOne({
      ...body,
      userId,
      created: new Date(),
      updated: new Date(),
    });

  return { _id: createTask.insertedId, ...body, userId };
};

const getByUser = async (userId) => {
  const db = await connection();

  const getTask = await db.collection('tasks').find({ userId }).toArray();

  if (!getTask) return { status: 404, message: 'None tasks for this User' };

  return { status: 200, data: getTask };
};

module.exports = {
  create,
  getByUser,
};
