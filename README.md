# Wizzy
#### Video demo: https://youtu.be/kMUnxbigh_c
## Description: 
Wizzy is a React Web App that works as TTRPG campaigns manager. It uses [React](https://react.dev/), [Tailwindcss](https://tailwindcss.com/), [ReactRouter](https://v5.reactrouter.com/), [axios](https://axios-http.com/) and [ReactHookForm](https://react-hook-form.com/) as its core technologies, and was set up with [Vite](https://vitejs.dev/).
This project is a work in progress, as with its current functionalities, it is still in version 0.0.1.

Wizzy has its own API, developed by myself as well, it runs on [express.js](https://expressjs.com/), is hosted on [Render](https://render.com/) and connects to a [MongoDB](https://www.mongodb.com/) database. You can find it [here](https://github.com/murillobazz/wizzy-api), keep in mind that it is also a work in progress, and it will develop beside its frontend.

## Roadmap:
> As a work in progress, 'Wizzy' still has a lot of features to be added and/or polished and issues to be fixed. In this roadmap we attain to the next things to be implemented on a large scale, but each item has several minor updates within itself, and 
- [x] Home page
- [x] Campaign creation
- [x] Login page
- [x] Sign out
- [ ] Campaign deletion
- [ ] Register page
- [ ] Campaign edit
- [ ] Friend list
- [ ] Session planner (invite your friends to sessions)
- [ ] Session tracker
...

## File explanation:
**Wizzy0.0.1 is being submitted as a Final Project for [CS50](https://cs50.harvard.edu/x/2023/). As part of the assignment for the final project, this README must contain a more thorough explanation of the project.** So here it is:

### App.jsx
As the 'root' of the project, the App component is being used for the routing of the pages in the project, via react-router, and as of v0.0.1, it only contains two routes: the home page and the new campaign page. The decision for using react-router was solely based on its practical implementation. The App component also has the Header the component in it, which acts as a layout for the app, there's not much functionality to it yet, besides clicking on the logo to go to the home page.

### Home.jsx
The Home component is the main component in the project, it holds the Welcome component, which is very simple as of v0.0.1, but it will later dinamically display the user's first name (or social name) and a custom greeting based on it last campaign. Still inside of the Home component we have the Card component, which displays the last campaign created (as of v0.0.1), the Button (provisory) component used to redirect to the campaign creation page, and the CampaignsList component, which displays a ListItem component for each campaign the user has. All the information for the campaigns are served by the Wizzy API, which the app requests through axios.

### New.jsx
The New component is the page to create a new campaign, it holds a form element which uses the react-hook-form api to validate and format the data to be submitted, it also uses axios to send the new campaign information to the database, via Wizzy API.

Feel free to contact me about Wizzy!
