# Rinse-Redux-Repeat

An existing e-commerce platform that has been "cleaned," aka refactored to use Redux.  

## User Story

```md
AS a senior engineer working on an e-commerce platform
I WANT my platform to use Redux to manage global state instead of the Context API
SO THAT my website's state management is taken out of the React ecosystem
```

## Acceptance Criteria

```md
GIVEN an e-commerce platform that uses Redux to manage global state
WHEN I review the app’s store
THEN I find that the app uses a Redux store instead of the Context API
WHEN I review the way the React front end accesses the store
THEN I find that the app uses a Redux provider
WHEN I review the way the app determines changes to its global state
THEN I find that the app passes reducers to a Redux store instead of using the Context API
WHEN I review the way the app extracts state data from the store
THEN I find that the app uses Redux instead of the Context API
WHEN I review the way the app dispatches actions
THEN I find that the app uses Redux instead of the Context API
```

## Resources
* https://redux.js.org/
* https://redux.js.org/basics/basic-tutorial
* https://blog.heroku.com/deploying-react-with-zero-configuration
* https://create-react-app.dev/docs/deployment/#github-pages
* https://redux.js.org/tutorials/fundamentals/part-1-overview
* https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas





