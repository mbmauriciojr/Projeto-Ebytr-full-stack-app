const { ObjectId } = require('mongodb');

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

  return getTask;
};

const update = async (body, id) => {
  const db = await connection();

  const updatedTask = await db.collection('tasks').findOneAndUpdate({ _id: new ObjectId(id) }, { $set: { ...body, updated: new Date() } });

  if (!updatedTask) return null;

  return updatedTask;
};

const deleteTask = async (id) => {
  const db = await connection();

  const deletedTask = await db.collection('tasks').deleteOne({ _id: ObjectId(id) });

  if (deletedTask.deletedCount === 0) return null;

  return true;
};

module.exports = {
  create,
  getByUser,
  update,
  deleteTask,
};
