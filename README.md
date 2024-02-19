## Glimpse Git

- An App that highlights your github stats

## Features

- AuthO authentication to show app content.
- fethes data from Github API and shows results
- Displays the stats in the form of various graphs
- you can search a user based on their github user names
- Dark mode and light mode theme

## App View

- [Login Page](./src/images/t1.png)
- [screen1](./src/images/t2.png)
- [screenpart2](./src/images/t3.png)
- [screenpart4](./src/images/t4.png)

## Tech Stack

- [Styled-Components](https://styled-components.com/)
- [React.js](https://react.dev/)
- [React Router](https://reactrouter.com/en/main)
- [Auth0](https://auth0.com/)
- [Github API](https://api.github.com)
- [React Icons ](https://react-icons.github.io/react-icons/)
- [Fusion Charts - Main Docs](https://www.fusioncharts.com/)

## Styled Components

- You can refer this for details [Styled-Components - Main Docs](https://styled-components.com/)
- The following is a basic example of how we will be using a styled component

```jsx
import styled from "styled-components";

const ReactComponent = () => {
 // logic here
 return <Wrapper>
 {some content}
 </Wrapper>
}


const Wrapper = styled.htmlElement`
write your styles here
`
export default ReactComponent
```

## React Icons

- For icons we will be using [React Icons ](https://react-icons.github.io/react-icons/)
- This is how we can use it

```jsx
import { FiUsers, FiUserPlus } from "react-icons/fi";
<FiUsers className="nameOfTheClass"> </FiUsers>;
```

## React Router Dom

- we will be using the following
- version used - "react-router-dom": "^6.2.2",
- [react-router-dom - Main Docs](https://reactrouter.com/web/guides/quick-start)
- <Switch> renders the first child <Route> that matches
- A <Route path="*"> always matches

## Gihthub API

- [Root Endpoint](https://api.github.com)
- [Get User](https://api.github.com/users/ribtas007)
- [Repos](https://api.github.com/users/ribtas007/repos?per_page=100)
- [Followers](https://api.github.com/users/ribtas007/followers)
- [Rate Limit](https://api.github.com/rate_limit)

  For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

## Fusion Charts

- [Fusion Charts - Main Docs](https://www.fusioncharts.com/)
- [First React Chart](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)
- [List Of Charts](https://www.fusioncharts.com/dev/chart-guide/list-of-charts)
- [Themes](https://www.fusioncharts.com/dev/themes/introduction-to-themes)

## Auth0

- [Auth0 - Main Docs](https://auth0.com/)

- Create Application
- Choose : Single Page Web Applications
- Choose : React
- Go to Settings Tab
- Copy/Paste Domain, ClientID - can be public (or use .env)
- Add Domain -
  for now http://localhost:3000 (DON'T COPY PASTE FROM URL BAR)

  - Allowed Callback URLs
  - Allowed Logout URLs
  - Allowed Web Origins
  - SAVE CHANGES!!!!!!!!!!!!!!!

- Connections
  email,social

- [React SDK Docs](https://auth0.com/docs/libraries/auth0-react)
- [REACT SDK API Docs](https://auth0.github.io/auth0-react/)

## Deployment

[Netlify](https://www.netlify.com/)

## Additional Info

#### Redirects with react-router-dom

In order for routing to work on netlify, redirects was added to the public folder

- \_redirects file in public

```

/*    /index.html   200

```

[Redirects Blog Post](https://dev.to/dance2die/page-not-found-on-netlify-with-react-router-58mc)

#### Warnings and create-react-app

package.json

```js
"build": "CI= react-scripts build",
```

[create-react-app Warning Fix Blog Post](https://community.netlify.com/t/how-to-fix-build-failures-with-create-react-app-in-production/17752)
