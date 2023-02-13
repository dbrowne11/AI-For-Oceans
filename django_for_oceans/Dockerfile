# pull the official base image
FROM python:3.8.3-alpine

# set work directory
WORKDIR /app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

ENV PORT 8080
ENV HOST 0.0.0.0

# install dependencies
RUN pip install --upgrade pip 
COPY ./requirements.txt /app
RUN pip install -r requirements.txt

# copy project
COPY . /app

EXPOSE 8080

CMD ["python", "manage.py", "runserver", "0.0.0.0:8080"]