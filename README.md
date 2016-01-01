Build an Angular app like Heroku’s Scheduler:

Heroku’s Scheduler is a small web app that lets you add jobs. 
It shows you your current jobs which includes the name of the job, the amount of dynos, 
the frequency (hourly, daily, etc.), last time the job ran, and the next date the job is due to run.

Below that, each job has an edit & remove button. When you click edit, all of the fields become inputs to change the values.

At the very bottom of all of your jobs is an “Add new job” button, 
when you click it the button disappears and a new incomplete form is appended. 
When you fill in the inputs and hit save, the form is appended and appears 
just how every other one does, when you click cancel the form disappears and the button reappears.

Sign in/create an account with Heroku and create an app. 
Add “Heroku Scheduler” (a free add-on) to your app. 
You can then see how the Heroku Scheduler app works as well as use my explanation.