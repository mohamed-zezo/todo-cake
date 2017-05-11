TODO CAKE
====

Coursera Full Stack Web Development Capstone Project
----------------------------------------------------

This project is an academic work.
It's my final capstone project for the **Full Stack Web Development** course on Coursera.
Read more at: https://www.coursera.org/learn/web-development-project.


## Introduction

ToDoIt is a full-stack MEAN app that allows users to sign up for an account and store To Do items to their account

## Demo

See the running demo at:

https://todocake.mybluemix.net

## Development

Install all dependencies:

```
npm install
```

Run the app:

```
npm start
```


## Deployment

The application can be deployt to a Cloud Foundry server, e.g. at IBM Bluemix.


```
cf api https://api.ng.bluemix.net
cf login
cf create-service mongodb 100 mebo-mongo
cf push
```

## Resources

- UI : http://todomvc.com
