<h1>
nextjs-apollo-typescript
</h1>

<p>
  <a href="#whats-included">What's included</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#apollo-usage">Apollo usage</a> •
</p>


<br />

##### Description

- [Next.js](https://nextjs.org/).
- GraphQL [Apollo](https://www.apollographql.com/docs/react/essentials/get-started/) client with built-in
- Apollo gencode type.
- Cookie (JWT)
- Localization via [react-i18next](https://react.i18next.com/).
- [TypeScript](https://www.typescriptlang.org/) environment.
- [Normalize.css](https://necolas.github.io/normalize.css/) included.

- <b>Sample with applo (SpaceX GraphQL)</b>
- _No custom server_.
- You can define more...

##### Developer experience

- Testing environment via [Jest](https://jestjs.io/)
  and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro).
- [Prettier](https://prettier.io/) for code formatting.
- Debug configuration for [VSCode](https://code.visualstudio.com/).
<!-- - **production-ready** build with Nginx. -->

### Getting started

##### Start development server

```bash
yarn install
yarn dev
```

### Apollo usage

##### Client-Side Rendering (CSR)

```jsx
import { gql, useQuery } from '@apollo/client';

const GET_CATS = gql`
  query GetCats {
    cats {
      id
      breed
    }
  }
`;

const MyPage = () => {
  const { loading, data } = useQuery(GET_CATS);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};

export default MyPage;
```

##### Server-Side Rendering (SSR)

```jsx
import { gql } from '@apollo/client';
import { initializeApollo, addApolloState } from '../lib/apollo';

const GET_CATS = gql`
  query GetCats {
    cats {
      id
      breed
    }
  }
`;

const MyPage = (props) => {
  return <div>{JSON.stringify(props.data)}</div>;
};

export async function getServerSideProps(ctx) {
  const apolloClient = initializeApollo(null, ctx);

  const { data } = await apolloClient.query({
    query: GET_CATS,
  });

  return addApolloState(apolloClient, {
    props: {
      data,
    },
  });
}

export default MyPage;
```

##### Writing tests

[Jest](https://jestjs.io/) is a great tool for testing. To run tests simply use `test` script from `package.json`:

```bash
npm test
```

---

Pretty much everything you need to know about project structure, SSR, etc., you can find in
the [official Next.js documentation](https://nextjs.org/docs).

##### Docker

```bash
docker-compose up --build
```
