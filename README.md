# Aske

Aske is a Q&A app for events of any kind, from conferences to lectures.

It allows users to create question rooms and share them with others.
 - Mobile first design.
 - "Large display" mode for showing live questions on a screen in a venue.
 - Individual questions can be voted on.
 - Requires no registration.

This is not meant to be a real product - just a learning experience.

Aske is powered by React Socket.io and Express. Written in TypeScript.
A live version can be found on aske.surge.sh although it only serves static files - backend is not connected yet. Ngrok can be used to tunnel localhost for testing purposes.

##### Launching locally:
`npm start` to start the frontent and `node server.js` in `/server` to launch the server.

##### TODO: 
 - Create tests for critical functionality.
 - Deploy backend.
 - Experiment with graphQL/Apollo.
