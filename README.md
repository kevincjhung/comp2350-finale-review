# comp235 Web Database Technologies Finals Review

## Steps/checklist for setting up Heroku app
* create a repository on github
* create a new app on Heroku
* open jawsDB, get the inputString with the host, database, password and all
* set IS_HEROKU = 1 in your config.vars (in Heroku)
* connect the Heroku app to your github repository
* go to github, clone the repo on your local machine
* put the files you need in the git-folder on your local repo
* open up the code on your local machine, edit databaseConnection.js to include the connection string from jawsDB
* push your code
* open mySQL workbench, create new connection using jawsDB connection string
* create the tables and input the data you need
* localhost to access it locally, heroku to access it online
