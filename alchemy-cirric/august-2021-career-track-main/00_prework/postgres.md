# Install PostgreSQL

Install PostgreSQL. No submission
## OSX: Installation and Setup

* Install the PostgreSQL server with `brew install postgresql`
* After the installation completes you should be able to see a stopped service `brew services list`
* Start the PostgreSQL server with `brew services start postgresql`
* NOTE: If you have issues installing PostgreSQL using the above `brew` commands, you can use [Postgres.app](https://postgresapp.com) instead. **Make sure you run `brew uninstall postgresql` before installing Postgres.app**.
* Install [Beekeeper Studio](https://www.beekeeperstudio.io) if you haven't already

## Windows: Installation and Setup

* [Download the latest installer](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads){:target="_blank" rel="noopener"}
* After the download completes open the file to start the installation
* **ONLY** Install:
  * PostgreSQL Server
  * Command Line Tools (psql)
* Select `postgres` as your superuser password
* Install [Beekeeper Studio](https://www.beekeeperstudio.io) if you haven't already

## Debian/Ubuntu: Installation and Setup

* Update your package list `sudo apt update`
* Install PostgreSQL`sudo apt install postgresql postgresql-contrib`
* Install [Beekeeper Studio](https://www.beekeeperstudio.io) if you haven't already
