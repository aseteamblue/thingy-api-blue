'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
  'title': { type: String },
  'type': { type: Boolean },
  'share': { type: Boolean },
  'totalDistance': { type: Number },
  'averageSpeed': { type: Number },
  'averageTemperature': { type: Number },
  'averageHumidity': { type: Number },
  'averageECO2': { type: Number },
  'averageTVOC': { type: Number },
  'duration': { type: Number },
  'dateStart': { type: Date },
  'dateEnd': { type: Date },
  'active': { type: Boolean }
});

global.SessionSchema = global.SessionSchema || mongoose.model('Session', SessionSchema);

export default SessionSchema;
