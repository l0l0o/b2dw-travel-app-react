INSERT INTO user (firstName, lastName, email, password) VALUES ("John", "Doe", "j.doe@test.com", "admin");

# Travel API

## Requirements
- You need to install docker

# Run project

```bash
# start containers
docker-compose up -d
# install dependencies
npm install
# start server
npm run dev

# schemas BDD

table travel

| Table Travel  |                                       |
|---------------|---------------------------------------|
| id            | int [primary key] [auto_increment]    |
| title         | varchar(255)                          |
| city          | varchar(255)                          |
| country       | varchar(255)                          |
| image         | varchar(255)                          |
| description   | varchar(255)                          |

| Table Category    |                                   |
|-------------------|-----------------------------------|
| id                | int [primary key] [auto_increment]|
| name              | varchar(255)                      |
| description       | varchar(255)                      |