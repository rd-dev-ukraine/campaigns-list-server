# campaigns-list-server

Dependencies
------------
`npm install -g run-rs` -- MongoDB dev replicas

Enviroment:
---------------
`DB_URL=mongodb://YOUR_PC_NAME:27017,YOUR_PC_NAME:27018,YOUR_PC_NAME:27019/your_db_name` - Replica DB addresses 

`PORT=YOUR_PORT` - server port

`RS=your_replica_set_id` - replica set id

To start server in dev mode:
------------

`npm run watch` - Typescript watcher


`npm run dev` - Nodemon instance
