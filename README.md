# GitHub search for the users and repositories

## High level solution
- User navigates to https://github-search-tradeling.netlify.app/ where he sees a input box along with the select drop down
  to select the entity ( Users or Repositories ) based on which the search feature works.
- When a user selects entity as "Users" from the drop down and starts typing the query in the input box, the results are fetched
  on the basis of the provided input and vice versa for the repositories.
- When a user clears the input the box then the results are set to empty and the user needs to again enter the query to
  fetch the results.
- Data is persisted in the local storage via redux-persist.
- When the user updates the entity from the drop down (Users or Repositories) then the persisted data is shown in the grid layout.
- I have used redux-thunk to make sure that the logic to fetch the data is isolated in the redux actions, and not in the component
  to make sure that I can use the same logic across different components whenever required.

## Decisions
- Used the ES6+ syntax wherever required liek async/await, arrow functions, function shorthand

## Steps to run the project

1. Clone the repo
 ```js
  $ git clone git@github.com:nitinreddy3/tradeling-gh-search.git
 ```

2. Navigate to the root of the project
 ```js
  $ cd tradeling-gh-search
 ```

3. Install the dependencies
```js
  $ npm install
```

4. Run the project
 ```js
  $ npm start
```

5. To run the tests
```js
$ npm run test
```

## Next Steps
- Taking project to another level
