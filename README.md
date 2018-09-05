GameTracker is the first full stack app I have made. It is a place where people can register as users and then keep track of games (ideally board games) by providing comments about them.  I built an API that is hosted here https://github.com/acalish/rails-api-gametracker.  My front end can make successful GET / POST / UPDATE / DELETE calls to my back end.

User stories:
As a user, I want to sign up, sign in, change password, and sign out.
As a user, I want to create a game with a name and a comment.
As a user, I want to view all of my games.
As a user, I want to update a game.
As a user, I want to delete a game.

Wireframes:
https://imgur.com/a/YIJVnoI
https://imgur.com/a/TcmxXdM

Technologies used:
HTML, CSS, AJAX, jQuery, handlebars, JavaScript

Development Process:
Once I had my backend running, I took a very slow and methodical approach to building the front end. In general I approached users and games in the same process. First, I would make blank forms and buttons, and begin by checking that the button could be clicked and trigger a response (usually just a console.log(‘clicked!’).  Once a button was functional, I started to build out the features from there. I would handle one AJAX call at a time, and once I finished users I went on to create games.

Once I was satisfied with the most basic version of my app, I started to work on some “nice to haves”.  The first addition was a background color, solely because looking at a white screen all day is not exciting. Tackling handlebars was a big part of this project.  First I would get them to populate what I wanted, then have successful click handlers, and then move forward with creating the best UI/UX.  I also wanted to focus on not having unnecessary information shown to the users, like game ids, and spent a lot of time figuring out how to utilize store.js to save information I wanted and could call later.  The biggest thing that helped with this project was having a clear outline, and moving forward in a very slow, methodical approach.

Unsolved problems / Future Iterations:
There is more information I would like users to have on their first resource (games) like a rating, minimum number of players, and maximum number of players.  My wireframes could use some work, and then styling my site to look like my wireframe. In the future, I would want to add another resource, wishlists, where users can have a wishlist of games they would like to buy.  This would have more information, like price on it, and would one day have a purchase button that would automatically launch a Google search for them to buy the game (or go right to Amazon or another purchasing website).  It would also be nice to have users be able to see other users’ information so that they could read what people have to say about games and then can add them to their wishlist.
