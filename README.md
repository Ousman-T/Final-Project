Creating a full stack application using the full MERN stack with CRUD functionality.

Technologies Used-

[![My Skills](https://skills.thijs.gg/icons?i=mongodb,express,react,nodejs)](https://skills.thijs.gg)

Link to Trello-
https://trello.com/b/0E4rso1V/requirements

Link to Wireframe-
https://www.figma.com/file/35WwDazKLlrONc0PP3csiu/Untitled?node-id=0-3&t=758WgH0uum6nZIvH-0

Challenges-
Building this project was an extreme challenge for me. I ran into many different issues that I had to work through continuously in order to get the app working properly. Even currently at this moment I'm running into an issue where for example, User1 can log in and create a todo. However, when User2 logs in they can see the todos created by User1. If User3 does the same then they can view all of User1 and User2's todos.
CRUD functionality was also a hassle to get working as well. I created my original function to update within my controllers. However, when trying to implement that function onto my front end, I kept running into an issue where the page wouldn't accept anything that was invented outside of the SRC folder. In order to fix that I ended up creating a todos-api file within my utilities folder that utilizes the sendrequest function.

Future Updates-
In the future I would like to distinguish between accounts. Make sure that User3 doesn't see User2's Todos.
I would also like to add a feature where you can check a todo off as done, and move that todo to a seperate div where you can see all of your completed Todos, but won't be able to update them.
