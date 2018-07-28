let express = require('express');
let app = express();

let cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

let listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});

app.get('/api/whoami',function(req,res){
    let ip = req.headers['x-forwarded-for'],
        index = ip.indexOf(':');
    ip = ip.slice(0,index-1);
    let language = req.headers['accept-language'],
        pc = req.headers['user-agent'],
        final =({'ip_adress':ip,'language':language,'software':pc});
    res.json(final);
});
