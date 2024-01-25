# Getting Started with the Task manager

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Tailwind was used as a CSS framework.

## How to start the app

In the project directory, you can run:

### `npm install`

and then:

### `npm start`

which runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## DOCUMENTATION

**LOGIN FORM** - First of all, we have a login form on the `/` route. A user can sign in only if they are registered beforehand. The form consists of two fields: email and password. Upon successful sign-in, users can proceed to the task list; otherwise, they will encounter an error message stating "Incorrect password or email." Additionally, there is a "Register now" link that redirects to the sign-up form for creating an account.

**REGISTRATION FORM** - The registration form is located on the `/register` route. Similar to the login form, it includes two fields. To successfully sign up, valid data, specifically an email, is required. After successful registration, users are directed to the login page, where they enter their credentials again and click "Sign in."
There is also a link to redirect the user to the login form if he already has an account.

**TASK LIST** - The task list is accessible through the `/todo` route. Users can access this page after a successful login to add tasks. Clicking on "Add new task" opens a modal with an input field where users can enter a new task which will have TODO as a default state. After clicking the "Add" button, a container displaying the task name, along with edit, delete buttons, and states (TODO, IN PROGRESS, DONE), is shown. Tasks can be deleted with any state but can only be edited when in the TODO state.

The page also features a filter by name and state. It displays only the selected tasks according to three filter scenarios. First, if we filter tasks by name, we will retrieve the task if it matches the name. The second scenario occurs when we choose to filter only by state (ALL, TODO, IN PROGRESS, DONE). The third scenario is when we filter tasks by both name and state.
