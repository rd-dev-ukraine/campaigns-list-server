import * as mongoose from "mongoose";

class DB {
  instance: typeof mongoose;

  constructor() {
    this.instance = mongoose;
  }

  connect() {
    console.log('Connecting to', process.env.DB_URL);
    mongoose.connect(
      process.env.DB_URL,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err: any) => {
        if (err) throw err;
        console.log(`Connected to ${process.env.DB_URL}`);
      }
    );
    return mongoose;
  }

  getInstance() {
    return this.instance;
  }
}

export const DBInstance = new DB();
