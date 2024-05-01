import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// createRoot -it's create dom like structure
// react fiber - it's a new way to update the dom
// its headline feature is to split the work into small chunks and spread it out over multiple frames
// and then update the dom in the chunks
// goal of react features is to increase the suitability for areas like animation , layout, gestures
// key features of react fiber includes the ability to pause , abort or reuse work as new updates comes in;ability to assign priority to different types of updates; 
// in fiber we use key to increase the performance 
// react hooks - it's a new way to use state and other react features without writing a class
// react router - it's a library for routing in react
// What is a fiber?
/*
We're about to discuss the heart of React Fiber's architecture. Fibers are a much lower-level abstraction than application developers typically think about. If you find yourself frustrated in your attempts to understand it, don't feel discouraged. Keep trying and it will eventually make sense. (When you do finally get it, please suggest how to improve this section.)

Here we go!

We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

pause work and come back to it later.
assign priority to different types of work.
reuse previously completed work.
abort work if it's no longer needed.
In order to do any of this, we first need a way to break work down into units. In one sense, that's what a fiber is. A fiber represents a unit of work.

what is routing in react
ChatGPT
Routing in React refers to the process of defining the navigation structure of a single-page application (SPA). In traditional multi-page applications, navigation is handled by the browser, where each link click triggers a request to the server for a new page. However, in SPAs, the entire application is loaded once, and subsequent navigation is handled internally by JavaScript without requesting new pages from the server.

React Router is the most popular library used for routing in React applications. It provides a way to define the different "routes" of your application, each corresponding to a different URL or path. When a user navigates to a specific URL, React Router renders the component associated with that route, allowing for a seamless user experience similar to a traditional multi-page application.

We import BrowserRouter from React Router, which provides the routing functionality.
Inside the Router component, we define our routes using the Route component.
The Switch component ensures that only one route is rendered at a time.
Each Route component specifies a path attribute, which defines the URL pattern to match, and a component attribute, which specifies the component to render when the URL matches the pattern.
The exact attribute ensures that only the exact URL path is matched, preventing partial matches.
If none of the routes match the current URL, the NotFound component is rendered.
With React Router, you can create complex navigation structures, handle route parameters, nested routes, and more, making it a powerful tool for building SPAs with React.


*/