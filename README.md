# Github Search

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Objective

The app also knows as a small Github search application with a specific search per user.

## Tech Stack

Majors:

- Nodejs
- Typescript
- Javascript

Libraries:

- GraphQL
- Apollo
- Lodash

Test:

- Jest

### Development

To run development we need a Github personal access token. [Refer to](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)

Next step: create a `.env` file with the content:

```
REACT_APP_ACCESS_TOKEN = <ACCESS TOKEN CREATED ABOVE>
```

Install node package as usual `yarn` then run `yarn start`.
 
### Test and coverage

In this step, we would like to check our functionality that aligns with our way. So, we using Jest library here to help us with unit testing.
 
The command to execute the test:

```
yarn test
```
The command to execute test and coverage:

```
yarn coverage
```