# Rick and Morty Characters:

A fun web app used for displaying character from the show `Rick and Morty`.

## Tech Stack

- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/) with BEM
- [React Icons]()
- [Material UI](https://mui.com/) for Pagination
- [React Testing Library](https://testing-library.com/) + [Jest](https://jestjs.io/)

## Flows

- The home page shows the list of character cards.

## API - Rickandmortyapi.com

The Rick and Morty API is a REST(ish) and GraphQL API based on the television show Rick and Morty.

- `https://rickandmortyapi.com/graphql`

These also support query params, visit the api docs for more info.

## Setup steps

This project uses `16.16.0` version of node, as mentioned in the .nvmrc file.

Execute the following command to install the deps:

```
npm install
```
## Start

```
npm run start
```
## Testing

For unit and snapshot testing this project uses RTL(React testing library) + Jest.
Tests can be run by simply executing the following command:

```
npm run test
```

For coverage execute the following command and the current coverage stands at `96%`

```
npm run test -- --coverage --watchAll
```
