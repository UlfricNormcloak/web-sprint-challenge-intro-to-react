# Intro to React Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **introductory React**. During this sprint, you studied **React components and advanced styling**.

In your challenge this week, you will demonstrate your mastery of these skills by creating **a Star Wars page** using data from an API.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [X] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [X] Open the assignment in Canvas and click on the "Set up git" option.
- [X] Follow instructions to set up Codegrade's Webhook and Deploy Key.
- [X] Push your first commit: `git commit --allow-empty -m "first commit" && git push`.
- [X] Check to see that Codegrade has accepted your git submission.

For a step-by-step on setting up Codegrade see [this guide.](https://www.notion.so/lambdaschool/Submitting-an-assignment-via-Code-Grade-A-Step-by-Step-Walkthrough-07bd65f5f8364e709ecb5064735ce374)

## Project Instructions

### Introduction

In this challenge you will create a web page that presents a styled list of characters obtained from an API. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

In meeting the minimum viable product (MVP) specifications listed below, your project might look somewhat similar to the solution examples below:

[Example](https://tk-assets.lambdaschool.com/b011a132-0916-4ed2-8955-14192de03a75_sample-screenshot.png)

[Another example](https://tk-assets.lambdaschool.com/3b82c793-2352-4d4d-a81d-e55bf350f7bd_sample-screenshot2.png)

### Instructions

Your finished project must include all of the following requirements:

- [ ] Use the endpoint `[GET] https://swapi.dev/api/people` (mocked in [msw](https://github.com/mswjs/msw)) to obtain characters.
- [ ] Set the list of characters into state.
- [ ] Render your characters to the DOM:

  1. Build a React component named 'Character' to render an individual character.
  1. Map over the list in state, and for each character render a Character to the page.
  1. Each rendered character must display its name in the DOM (e.g. "Luke Skywalker").
  1. The character's name can't be hard-coded into the HTML. This data must be obtained from the API.
  1. The components must be styled with **styled-components**.

  **Notes:**

- Data obtained from the endpoint using browser-run JavaScript is mocked with [msw](https://github.com/mswjs/msw).
- If you test the endpoint using HTTPie or Postman you will obtain different results, as msw won't intercept the request.
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries.
- The `start` process can sometimes choke after adding new dependencies and may need to be restarted.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on any the following optional goals:

- [ ] Make the Character component more complex and break it into several subcomponents.
- [ ] Use the endpoint `[GET] https://swapi.dev/api/films` (mocked in msw) to obtain movie information to render with the characters.
- [ ] Create a helper function in separate module to remove unneeded information from the API data, before putting it in state.
- [ ] Create transitions or animations with styled-components.
- [ ] Use Promise.all to resolve an array of promises.

## Submission format

- [X] Submit via Codegrade by committing and pushing any new changes.
- [X] Create a pull request to merge `<firstName-lastName>` branch into `main`.
- [X] Please don't merge your own pull request and make sure **you are on your own repo**.
- [X] Check Codegrade for automated feedback.
- [X] Check Codegrade in the days following the Sprint Challenge for reviewer feedback.
- [X] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

Answer: React JS is a user interface component library used to build out user interfaces. React uses a structure based on the use of components which are separate files that communicate with the main component file (usually call 'App' in our project). The problem that it is design to attempt to address is the management of complex state, where state changes rapidly based on significant numbers of user interactions. The DOM itself is hard to manage and a rapidly changing DOM is hard to manage. React uses what is called a virtualDOM that captures changes to state, and pushes those changes to the actual DOM in terms of updates to what is rendered. React improves efficiency because it manages specific changes in state, only updating the specific nodes on the actual DOM that need to be updated. Another advantage to React is that the component portions of code make it easier to manage change to the components themselves, and makes debugging easier. In both cases it is easier because of the fact that it is easier to review, change, and manage small portions of code in a component file, rather than one huge file with hundreds or thousands of lines of code in one place.

1. Describe component state.

Answer: Component state is the heart of the component in the sense that it is the portion of the component that determines how the component behaves with changes in data/state data. The component will have an initial use state, set with the use of the declaration of the state variable, setter function(used for changes in state), and useState(), which is where the initial value is defined for initial state.

1. Describe props.

Answer: Props are used to dynamically populate and update the state of a component. Props are defined within the parent component and are passed to the child component, and props cannot be passed from child to parent.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Answer: A side effect is anything in the code that affects another thing that is outside of the fucntion being executed. Changes ot the DOM or pulling data from an API are examples of this. Syncing side effects can be accomplished using changes to state and props. This is accomplished using an effect hook, and the effect hook can be programmed to sync/fire with initial mounting of the component only, or with changes to certain states and props, or in response to all state and props changes.

