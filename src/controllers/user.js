'use strict';
import User from '../models/user';
import Session from '../models/session';
import Trophy from '../models/trophy';

/**
 * @swagger
 * /:
 *   post:
 *     tags:
 *       - Public
 *     summary: Get all the users from the database.
 *     operationId: getUsers
 *     responses:
 *       200:
 *         description: List of users.
 */
const getUsers = async (ctx) => {
  let users = await User.find({});
  if (users) {
    ctx.body = users;
    ctx.status = 200;
  }
};

/**
 * @swagger
 * /:
 *   post:
 *     tags:
 *       - Public
 *     summary: Get the user corresponding to the given ID.
 *     operationId: getUser
 *     responses:
 *       200:
 *         description: User.
 */
const getUserByID = async (ctx) => {
  const userID = ctx.params.userID;
  if (userID == null) {
    ctx.body = {
      msg: 'No field userID'
    };
    ctx.status = 400;
  }
  let user = await User.findOne({ _id: userID });
  if (user) {
    ctx.body = user;
    ctx.status = 200;
  }
};

/**
 * @swagger
 * /:
 *   post:
 *     tags:
 *       - Public
 *     summary: Get the sessions corresponding to a specific user.
 *     operationId: getUserSessions
 *     responses:
 *       200:
 *         description: List of sessions.
 */
const getUserSessions = async (ctx) => {
  const userID = ctx.params.userID;
  if (userID == null) {
    ctx.body = {
      msg: 'No field userID'
    };
    ctx.status = 400;
  }
  await User.findOne({ _id: userID })
    .then((user) => {
      return Session.find({ session: user.session });
    })
    .then((res) => {
      ctx.body = res;
      ctx.status = 200;
    });
};

/**
 * @swagger
 * /:
 *   post:
 *     tags:
 *       - Public
 *     summary: Get the trophies earned by a specific user.
 *     operationId: getUserTrophies
 *     responses:
 *       200:
 *         description: List of trophies.
 */
const getUserTrophies = async (ctx) => {
  const userID = ctx.params.userID;
  if (userID == null) {
    ctx.body = {
      msg: 'No field userID'
    };
    ctx.status = 400;
  }
  await User.findOne({ _id: userID })
    .then((user) => {
      return Trophy.find({ _id: user.trophies });
    })
    .then((res) => {
      ctx.body = res;
      ctx.status = 200;
    });
};

export default {
  getUsers,
  getUserByID,
  getUserSessions,
  getUserTrophies
};