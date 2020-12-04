FROM google/cloud-sdk:latest
RUN mkdir /code
WORKDIR /code

RUN apt-get update -y && apt-get install build-essential checkinstall python3-pip redis-server -y
ADD requirements.txt /code/requirements.txt
RUN pip3 install -r requirements.txt
ADD . /code/

# FROM python:3-onbuild
# RUN mkdir /app
# ADD . /app
# WORKDIR /app

# RUN pip3 --no-cache-dir install -r requirements.txt
# EXPOSE 8080
# ENTRYPOINT ["gunicorn", "--bind=0.0.0.0:8080", "main:app"]

# this file is not being used
