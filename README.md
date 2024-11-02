# DOCS | HTTP simple server on Raspberry Pi
### *University of Cauca: Digital Systems*

## Set up

1. install [raspberrypiOS](https://www.raspberrypi.com/software/) on a uSD card (recommended 16GB), example:
   - user: ``dsys``
   - host: ``raspi``
   - pass: ``pass``
2. connect to the raspberry via ssh, type on your terminal ``dsys@raspi``, pass: ``pass`` 

3. update dependencies: ``sudo apt update`` (optional): ``sudo apt upgrade``

## Installing programs

1. Install [nvm](https://github.com/nvm-sh/nvm) `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
2. Install [nodejs](https://nodejs.org) via nvm ``nvm install lts`` and verify installation:
   - node version: ``node -v`` 
   - npm version: ``npm -v`` 

## Create a simple server

1. create directory: ``mkdir server && cd server``
2. init a node project: `npm init -y`
3. install [express](https:expressjs.com): ``npm i express && touch app.js``
   - ```
      //app.js
      const express = require('express')

      const app = express()

      app.get('/', (req, res) => {
      res.send('hello world')
      })
      app.listen(3000)

4. open on your browser http://localhost:3000

## Expose to internet (WAN)

1. Create a static ip on [noip](https://noip.com)

2. Create a tunel via [ngrok](https://ngrok.com)

### Help
* [server on Raspberrypi](https://www.youtube.com/watch?v=QdHvS0D1zAI&t=440s)
* [ngrok config](https://www.youtube.com/watch?v=iAgJ6eCgUIA)
---

MIT licence
