# Deploying an Application to Digital Ocean (JSHeroes Workshop)

This a test repo that we deployed on our workshop (https://www.meetup.com/jsheroes/events/268349025/).
I has a frontend application and an api.

What did we do:

1. Createad out Digital Ocean account
2. Created our VM / Droplet with Ubuntu 18, standard plan and 5$ per month (enough for our testing porpouse ). Use this link https://m.do.co/c/34f48445bac1 to get 100$ credit for 60 days.
3. added our SSH key to Digital Ocean
4. Some of us used launch console to login in the droplet (remember user is root, you can get your password by reseting it)
5. Cloned this repo
6. Installed node with a specific version: ```bash curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -``` and ```bash apt install nodejs```
7. We blocked all the incomming network request using ufw (Uncomplicated Firewall), remember by default its inactive:
    * ```bash ufw status``` (checks the status)
    * ```bash ufw default deny incoming```
    * ```bash ufw default allow outgoing```
    * ```bash ufw allow ssh``` // do this before enabling the firewall
    * ```bash ufw enable```
    * ```bash ufw allow 8080``` // how to open ports to accept incoming requests
    * ```bash ufw allow 3000``` // don't forget to open the port for the api
 8. Changed the api link in the frontend repo to use the ip of the server(use your custom domain name if you will have one attached to droplet) and rebuild the project
 9. Installed pm2 to help us manage processed
    * ```bash npm install pm2 -g```
    * ```bash pm2 start node index.js --name frontend``` // starting the small express server that servers the frontend build dist
    * ```bash pm2 start npm -- start``` // the other option to start with an npm script, we used this for starting the api and our test database (json-server)
    * ```bash pm2 stop frontend```
    * ```bash pm2 status```
    * ```bash pm2 logs```
    
10. Reminder... don't forget to delete your droplets if you don't use them. Else you will have to pay for them.

