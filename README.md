# Travel-Keeper

Overview:

Travel Keeper is a web application for users to login and post pictures of the places they have been and allow other's to like and comment on their photos.

MVP:

This app will utlilize 4 tables in the backened - Users, Pictures, Likes and Comments which will be used by a React Front End to display the information in a beautiful way using at minimum 8 react components.

Goals:

1. Create backened server with Ruby on Rails and 4 tables with appropriate associations.
2. Deploy backend to heroku
3. Create React front end using CRA
4. Deploy front end to Netlify

Libraries and Dependencies

| Library          | Description                                        |
| ---------------- | -------------------------------------------------- |
| React            | Front End Framework                                |
| React Router Dom | allow inter page linking and routing for front end |
| Axios            | allow frontend to communicate with backend         |
| Materials UI     | styled componenets to integrate into front end     |
| Ruby on Rails    | back end server framework                          |
| bcrypt/JWT       | authorization setup                                |

Client (Front End)

Wireframes

Homepage Wireframe

![Home](https://github.com/amarp86/travel-keeper/blob/main/Wireframe%20Home.png)

Explore Page Wireframe

![Explore](https://github.com/amarp86/travel-keeper/blob/main/Wireframe%20Explore.png)

Sign Up Wireframe
![signup](https://github.com/amarp86/travel-keeper/blob/main/Wireframe%20Sign%20Up.png)

Mobile Homepage:

![mobile](https://github.com/amarp86/travel-keeper/blob/main/Wireframe%20Mobile.png)

Adobe XD Link: FULL DISPLAY OF WIREFRAMES

[AdobeXD Link](https://xd.adobe.com/view/78ce649f-0a0d-4600-802f-1fb5235eeb93-2d9d/)

Component Tree

![Component Structure](https://github.com/amarp86/travel-keeper/blob/dev/Component%20Tree%202.png)

Component Architecture

src
|** assets/  
 |** images  
|** components/
|** SignUp.jsx
|** SignOut.jsx
|** SignIn.jsx
|** Explore.jsx
|** Home.jsx
|** services/
|** APIconfig.js
|\_\_ Axios.jsx

Time Estimates
| Component | Priority | Estimate Time | Time Invested
| ------------------------------- | :------: | :-----------: | :-----------: |
| Setting Up Basic Layout | H | 2 Hr | 2Hr |
| Creating API | H | 5 Hr | 3 Hr | 3Hr |
| Testing API | H | 3 Hr | 3Hr |
| Deploy API | H | 3 Hr | 3Hr |
| Create React Front End | H | 3 Hr | 3Hr |
| React Route/Links | H | 3 Hr | 3Hr |
| React Post/Feed Component | H | 3 Hr | 3Hr |
| React/JS post/put/delete calls | H | 3 Hr | 3Hr |
| React Header/Footer | M | 3 Hr | 3Hr |
| React Locations | M | 3 Hr | 3Hr |
| CSS Styling DESKTOP | H | 3 Hr | 3Hr |
| CSS Styling MOBILE | H | 3 Hr | 3Hr |
| POST MVP - Likes | L | 3 Hr | 3Hr |
| UI/UX breakpoints | M | 3 Hr | 3Hr |
| Testing React Components | H | 3 Hr | 3Hr |
| Testing CSS breakpoints | M | 3 Hr | 3Hr |
| Hosting Final Product | M | 3 Hr | 3Hr |
| Total Time | | 50 Hrs | 50 Hrs |

Server (Back End)
ERD Model
![ERD](https://github.com/amarp86/travel-keeper/blob/dev/ERD4.png)

ERD Sample

Post-MVP

1. Add likes table to backened and implement on front end
2. Add a scrolling feed page and make individual detail page per post

Code Showcase

Code Issues & Resolutions

1. Issue 1 - Likes and Comments were not refreshing without a hard refresh
   solution - set toggle on App.Js and passed to components to trigger react re-render
