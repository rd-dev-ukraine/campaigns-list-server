import * as mongoose from 'mongoose'

export function createId() {
  return mongoose.Types.ObjectId();
}