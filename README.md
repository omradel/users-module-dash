# users-module-dashboard

first i uses Modular structure to support largescale applications, and i made fake api i the clientside only
with ts to simulate api that i will recieve from backend and make an axios file that that i will use
if i treat with real api from backend

## How would you optimize API calls in this application for performance?

i devide my app to modules (ex:auth , dashboard) and in each module i made srvices folder that
contain logic for module , i use compasables to conatin all api call for module and destructure
any function that i need in any component this make me avoid rendiring unnecessary function calls
and i can make caching for respose using vue-use compasable when i act with real api

## Describe your approach to handling shared logic between components?

if i handle shared loging only between two components i will use provide and inject , but
if i handle between multi components i uses store like pinia store if i want to make states
globaly for all components , and i use compasables if i want to make only reusable logic or to
encapsolate some logic

## How would you implement client-side data caching for this dashboard?

if i want to cach states in pinia i can use pinia presist-plugin that store data in broser storage
and if i want to cash data in compasables or components i use a vue-use compasable to do this.

## What strategy would you use to scale this application if it needed to support hundreds of different user permission types?

in this dashboard i uses a way to handle user roles and permetion that with creation of each route
i attache a meta that caled roles this is an array that contain users that can ineract with this route
based of this way i handle permetions as it compes from backend api and conditional rendering in the dashboard
c, i this this is a scalable way.

## Explain your testing strategy and how you decided what to test?

i use only vitest now for unit and integration test and i did a sample of test for login page
and its authentication function , and i determine the component that i test based on the logic
it handles or the interactivity between user and component

## How would you handle offline capabilities in this application?

first i will use PWA service to cash assets and api response for all api calls in my app
then i will use indexDB or vue-use cpmapasable to handle cashing in component level
then i with handle Msg to appear to user to inform him that he offline or online

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### for test

```sh
npm run test
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).
