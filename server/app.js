import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()

app.use(cors({
    origin:'*'
}))
app.use(function (request, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    //intercept the OPTIONS call so we don't double up on calls to the integration
    if ('OPTIONS' === request.method) {
      res.send(200);
    } else {
      next();
    }
  });

app.use(express.static('public'))
app.use(express.json())
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}))
import router from './routes/routes.js'
app.use("/api/v1", router)


export {app}