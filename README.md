[![Kiddo](https://i.postimg.cc/wTKffWZb/kiddo.png)](https://disco-nirvana-297409.oa.r.appspot.com/)

# Project Name #
[Kiddo](https://disco-nirvana-297409.oa.r.appspot.com/)

### Heading ###
Website for kids

### Sub-Heading ###
This website gives a safe envorinment for kids to play and learn

## Table of contents ##
* Technologies
* Frontend
* Backend
* Deploy
* Members

## Technologies used ##
* Python
* Django
* Rest Framework API
* JWT
* Sqlite3
* MySql
* gCloud App Engine
* gCloud Sql
* React Native
* React Navigation
* React Redux
* Expo Cli

* Android Studio
* VS Code

## Frontend ##
* To install dependancies
* Open bash inside /frontend
`$ npm i`

* To run the app on localhost
* Open bash inside /frontend
`$ npm run web`

## Backend ##
* To run mysql database on localhost (you can skip this and use sqlite3 default database)
* Install gcloud then open bash inside /backend
`$ ./cloud_sql_proxy -instances=disco-nirvana-297409:europe-west3:pearls=tcp:3306`

* To create new virtual environment (venv)
* Open bash inside /backend
`$ python -m venv venv`

* To enter venv
* Open bash inside /backend
`$ . venv/Scripts/activate`

* To install dependancies
* Enter venv or open bash inside /backend (global install)
`$ pip install -r requirements.txt`

* To run the server locally (after installing dependancies)
* Enter venv or open bash inside /backend
`$ python manage.py runserver`

* To update dependancies file
* Enter venv or open bash inside /backend (global)
`$ pip freeze > requirements.txt`

* To update the database tables
* Enter venv or open bash inside /backend (global)
`$ python manage.py makemigrations api`
`$ python manage.py migrate`

## Deploy ##
* To deploy a server using app engine
* Install gcloud then open bash inside /backend
`$ gcloud app deploy`

### Deployed links ###
* Backend server
* https://disco-nirvana-297409.oa.r.appspot.com/
* Backend admin server
* https://disco-nirvana-297409.oa.r.appspot.com/admin

## Members ##
* Razan Abusamra - Scrum Master
* Hamdallah Fatayer - Co-Leader
* Noor Ashqar - Development
* Dima jaber - Development
