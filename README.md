# ***FLOATING PROMISES***

*A GRIEF FORUM*

<a  href="https://the-weather-tomorrow.herokuapp.com/"  target="_blank">See website</a 

## What is Floating Promises?  

Floating Promises is an online community that allows individuals to connect at each stage of the grieving process. Individuals can make a post, receive comments and have the option to comment on others’ posts. The emphasis is on trust, openness and unfiltered communication around the topic of death, making use of the words, images and all that is left unresolved, floating in the wake of someone's passing.

## Design Philosophy 

Floating Promises is adorned with a minimal design aesthetic that relies on evocative textures and images to induce an atmosphere of introspection and reflection.  This extends to the way comments for posts are displayed, nested within one another in a labrynthian sequence.       

<a  href="https://whimsical.com/the-weather-tomorrow-HDs7wZspKjvhkKVAybRAst" target="_blank">Here</a> is a link to the whimsical wire frames for the website.    

![rough draft main page](https://i.imgur.com/uFb4Ws1.png)
![rough draft menu](https://i.imgur.com/noSMiaj.png)
![rough draft about](https://i.imgur.com/YIZV1Ba.png)
![rough draft story](https://i.imgur.com/cs0hLxE.png)


Contrast this against the finished UI: 

![finished main page](https://i.imgur.com/08iGauf.png)
![finished about page](https://i.imgur.com/403ndeV.png)
![finished story page](https://i.imgur.com/R5lOFwc.png)
![finished comments page](https://i.imgur.com/NSmys7m.png)

## Technologies Used

This is a full-stack application featuring a RESTful API server built in Node.js with Express and CRUD operations via Mongoose. Utilizes MongoDB Atlas as a non-relational database.  Utilizes a one-to-many ERD for user posts and comments.  Uses Google's people API in conjunction with Passport.js, an authentication middleware for node, to authenticate users via Gmail and authorize them to access certain user-specific features.  Front-end styling via Bootstrap.   
 

## Installation 

Simply open <a  href="https://the-weather-tomorrow.herokuapp.com/"  target="_blank">this link</a>. 

## Project Hurdles

**ERROR**: Cannot target which posts to delete.  Every time the delete button is clicked, the first comment in the comments array is deleted, irregardless of which post the user is targeting. 

**RESOLUTION**: This was an issue that arose due to the fact that the form was not closed off with a matching form tag.  A forEach function is used to loop through each field in the post object model and display it to the page, along with a delete button with an ahref that targets that post's specific id.  Due to the fact that the form was not closed off, each delete button was being generated with the same id.  Once the form was closed off, the delete buttons were generated with the id specific to the post, thherby resolving the issue. 

```   
    <div class="story-content">
                <% stories.forEach(function(s) { %>
                    <div class="story-rows">
                        <div class="story-header">
                            <p><%= s.name %></p>
                            <p><%= s.age %></p>
                            <p><%= s.location %></p>
                            <p><%= s.date %></p>
                            <p>time since passing: </n><br> <%= s.timeframe  %></p>
                            <a id="comment" href="/story/comment/<%= s._id %>/view">view comments</a>   
                            <% if (user && user._id.equals(s.user)) { %>
                            <a id="edit" href= "/story/edit/<%= s._id %>">edit</a>
                            <form action="/story/<%= s._id %>?_method=DELETE"
                                class="delete-form" method="POST">
                                <button id="delete" class="btn btn-outline" type="submit">delete</button>
                            </form>
                            <% } %>
                        </div>
                        <div class="story-main">
                            <p><%= s.story %></p>
                        </div>
                    </div>  
                <% }); %>
        </div>
```

```
     <form action="/story/<%= s._id %>?_method=DELETE"
                                class="delete-form" method="POST">
                                <button id="delete" class="btn btn-outline" type="submit">delete</button>
                            THERE WAS NO CLOSING TAG HERE 
```


**ERROR**: Google OAuth not working when site is deployed via Heroku.  Authorization error arising due to an app security policy.  It appears this issue is arising because the OAuth callback 'https://the-weather-tomorrow.herokuapp.com/auth/google/oauth2callback' is not approved. 

**RESOLUTION**: I tried adding https://the-weather-tomorrow.herokuapp.com/auth/google/oauth2callback to a list of authorized redirect URIs in the Client ID my web app is utilizing via Google's People API, but so far no luck.   



**ERROR**: createStory function not working when not logged in via Google OAuth.  

**RESOLUTION**: This occurred because the function was attempting to access user information stored in the session that was not there, via the req.body.user.  Resolved the issue via a conditional statement that allows users that are not logged-in to still create content.  I don't want to require users to be logged in in order to post.  However users that are not logged in are unable to delete, or edit their posts, as they are essentially anonymous.  May need to work on a way to make this more tidy.      

Original function:

```
    function createStory(req, res){
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        const story = new Story(req.body);
        story.save(function(err) {
            if (err) return res.redirect('/story');
            res.redirect('/story');
        });
    }
```

Revised function: 

```
    function createStory(req, res){
        if(req.isAuthenticated()){
            req.body.user = req.user._id;
            req.body.userName = req.user.name;
            req.body.userAvatar = req.user.avatar;
            const story = new Story(req.body);
            story.save(function(err) {
                if (err) return res.redirect('/story');
                res.redirect('/story');
            });
        } else {
            const story = new Story(req.body);
            story.save(function(err) {
                if (err) return res.redirect('/story');
                res.redirect('/story');
        });
    }
}
```

## Future Development Plans
Ideally I'd like this to be used by people and as such I anticipate some level of maintenance.  However, regardless of if it ever finds a life on the internet, I would like to deepen certain functionality, such as allowing users to sort posts based on different criteria while maintaining the structural simplicity of the core design. 

<a  href="https://trello.com/b/qro0Bz6q/the-weather-tomorrow" target="_blank">Here</a> is a link the my trello board for this project. 

<a  href="https://whimsical.com/project-2-erd-PG1GYedq3tq9qvqeRdejoe" target="_blank">Here</a> is a link to the ERD diagram for this project. 

And... 
## Contact 
Please feel free to contact me with any ideas regarding this project.  I enthusiastically encourage any outside contributions!  

[Github Repository](https://github.com/Pfulcher26/project-2-)

Email: pfulcher26@gmail.com 

[LinkedIn](https://www.linkedin.com/in/payne-fulcher/)

