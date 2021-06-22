# Epytodo
Epitech Tech 1 Project

# Requirements
* Express
* mysql2
* dotenv
* jsonwebtoken
* bcryptjs

The goal of this project is to recreate an API, build a Web Server, a MySQL Database with 2 "tables" in NodeJs:
* user
* todo

The user table must contain
* id (mandatory, not null, auto-increments)
* email (mandatory, not null, unique)
* password (mandatory not null)
* name (mandatory not null)
* firstname (mandatory not null)
* created_at (set to the current datetime by default)

The todo table must contain
* id (mandatory not null, auto-increments)
* title (mandatory not null)
* description (mandatory not null)
* created_at (set to the current datetime by default)
* due_time (mandatory, not null, datetime)
* status (not started by default / todo / in progress / done)
* user_id (mandatory, unsigned, reference to the id of the user that get assigned to the task)

The project contains somes "routes" like
* /register     POST
* /login        POST
* /user         GET
* /user/:id     DELETE