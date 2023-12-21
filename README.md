# Plan for Development
## Minimum Viable Product
**I want the MVP of this game to have:**
- A basic resource system consisting of:
  - Food for maintaining population
  - Wood for maintaining armies/villages
  - Iron for building armies
  - Gold for gaining influence and paying off enemies
- A map of villages where each villages produces a specific resource output. If they are under your influence they will pay you tributes regularly. They can also be raided for resources.
- An army system:
  - Armies can be built and trained from your population with iron.
  - Armies can be sent to raid or protect villages/forts.
  - Armies carry resources with them. Armies consume food and wood as they travel and thus must be sent with enough resources to last their trip to their destination and back.
  - Armies can be sent to villages with gold to try to gain them as your tributaries.
- Random events happen to each village/fort such as famines, raids, uprisings, etc. These can just effect resources at those locations for now.
- A loss condition, where you are killed by a foreign army or run out of food.
- A map displaying known villages/forts.

## Later features to add
- A messenger system.
  - Messengers can be sent with minimal resources to send messages/requests to other forts/villages, they can also bring artifacts as gifts.
  - Villages/forts can send you messages to request resources/armies.
  - Your armies can be sent with messengers so the messenger can return news of events to you.
- Supply chains, which are essentially armies without significant defensive capabilities that are used for transporting resources.
- Automated supply chains which start their task again upon returning.
- Pre-existing supply chains between different villages and forts.
- The ability to raid supply chains.

***

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.