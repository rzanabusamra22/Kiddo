[![Kiddo](https://i.postimg.cc/wTKffWZb/kiddo.png)](https://blackpearl2.ew.r.appspot.com/)

# Project Name #
[Kiddo](https://blackpearl2.ew.r.appspot.com/)

### Heading ###
Website for kids

### Details ###
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
### Programs Used ###
* Android Studio
* VS Code

## Frontend ##
* To install dependancies
* Open bash inside /frontend
* `$ npm i`

* To run the app on localhost
* Open bash inside /frontend
* `$ npm run web`

## Backend ##
* To create new virtual environment (venv)
* Open bash inside /backend
* `$ python -m venv venv`

* To enter venv
* Open bash inside /backend
* `$ . venv/Scripts/activate`

* To install dependancies
* Enter venv or open bash inside /backend (global install)
* `$ pip install -r requirements.txt`

* To run the server locally (after installing dependancies)
* Enter venv or open bash inside /backend
* `$ python manage.py runserver`

* To run mysql database on localhost (you can skip this and use sqlite3 default database)
* Uncomment the database code in /backend/settings.py then Install gcloud then open bash inside /backend
* `$ ./cloud_sql_proxy -instances=blackpearl2:us-central1:blackpearl=tcp:3306`

* To update dependancies file
* Enter venv or open bash inside /backend (global)
* `$ pip freeze > requirements.txt`

* To update the database tables for localhost
* Enter venv or open bash inside /backend (global)
* `$ python manage.py makemigrations api` then `$ python manage.py migrate`

## Deploy ##
* To deploy a server using app engine
* Install gcloud then open bash inside /backend
* `$ gcloud app deploy`

* To update the deployed server
* Run mysql database on localhost then open bash inside /backend
* `$ python manage.py makemigrations api` then
* `$ python manage.py migrate` then `$ gcloud app deploy`

### Deployed links ###
* Backend server
* https://blackpearl2.ew.r.appspot.com/
* Backend admin server
* https://blackpearl2.ew.r.appspot.com/admin

## Members ##
* Razan Abusamra - Scrum Master
* Hamdallah Fatayer - Co-Leader
* Noor Ashqar - Development
* Dima jaber - Development
