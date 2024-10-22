# Install PostgreSQL

Install PostgreSQL. No submission
## OSX: Installation and Setup

* install the PostgreSQL server with `brew install postgresql`
* after the installation completes you should be able to see a stopped service `brew services list`
* start the PostgreSQL server with `brew services start postgresql`
* install pgAdmin4 with `brew install pgadmin4`

## Windows: Installation and Setup

* [Download the latest installer](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads){:target="_blank" rel="noopener"}
* After the download completes open the file to start the installation
* **ONLY** Install:
  * PostgreSQL Server
  * pgAdmin4
  * Command Line Tools (psql)
* select `postgres` as your superuser password

## Debian/Ubuntu: Installation and Setup

* Update your package list `sudo apt update`
* Install PostgreSQL`sudo apt install postgresql postgresql-contrib`
* Install pgAdmin4
  * `sudo curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add`
  * `sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list && apt update'`
  * `sudo apt install pgadmin4`
