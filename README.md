# lightware

## Install

### gulp

[Gulp](http://gulpjs.com/) is a build system you can add any task.

```npm i gulp -g```

### webpack

[Webpack](http://webpack.github.io/) is a module bundler you can organize all static assets.

```npm i webpack -g```

### devDependencies

```npm i```

If you get error when installing, please add ```sudo``` before ```npm```

## Development

This application has been used the following library for MVC:

- Model: [RefluxJS](https://github.com/spoike/refluxjs)
- View: [React](https://facebook.github.io/react/)
- Controller: [React Router](https://github.com/rackt/react-router)

### Run server

```gulp```


We haven't added livereload this time so please reload by yourself after any changes. Sorry for the inconvenience.


## Deployment

### Setup AWS Security Credentials

Run ```gulp aws-config``` , open ```json/awsConfig.json``` and change ```AWSAccessKeyId``` and ```AWSSecretKey```.


### Publish to S3


```gulp build```

And open [lightware.s3-website-us-west-1.amazonaws.com](http://lightware.s3-website-us-west-1.amazonaws.com)