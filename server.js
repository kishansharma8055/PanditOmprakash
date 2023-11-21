const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3005;

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'html');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'imgs/');
    },
    filename: (req, file, cb) => {
        const extname = path.extname(file.originalname);
        cb(null, Date.now() + extname);
    }
});

const upload = multer({ storage });

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/views' });
});


app.get('/about.html', (req, res) => {
    res.sendFile('about.html', { root: __dirname + '/views' });
});

app.get('/services.html', (req, res) => {
    res.sendFile('services.html', { root: __dirname + '/views' });
});

app.get('/contact.html', (req, res) => {
    res.sendFile('contact.html', { root: __dirname + '/views' });
});

app.get('/blogs.html', (req, res) => {
    res.sendFile('blogs.html', { root: __dirname + '/views' });
});

app.get('/Login.html', (req, res) => {
    res.sendFile('Login.html', { root: __dirname + '/views' });
});

app.get('/Admin/Admin.html', (req, res) => {
    res.sendFile('Admin/Admin.html', { root: __dirname + '/views' });
});

app.get('/Admin/uploadImg.html', (req, res) => {
    res.sendFile('Admin/uploadImg.html', { root: __dirname + '/views' });
});

app.use('/imgs', express.static(path.join(__dirname, 'imgs')));
app.get('/Admin/gallery.html', (req, res) => {

    const fs = require('fs');
    const gallerypath = path.join(__dirname, 'imgs');
    const images = fs.readdirSync(gallerypath);

    const imageTags = images.map(image => `<img src="/imgs/${image}" style="height:200px;width:200px;margin:2px;border-radius: 5px;" alt="image not found">`).join('');

    res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>Images Gallery</title>
        </head>
        <body>
            <h1>Gallery</h1>
            ${imageTags}
        </body>
    </html>
   `)

});

app.get('/imgs/', (req, res) => {
    res.sendFile('imgs/', { root: __dirname + '/views' });
});



app.get('/Admin/notice.html', (req, res) => {
    const data = req.query.data;
    const filepath = 'file.txt';
    fs.writeFile(filepath, data, (err) => {
        if (err) {
            res.status(500).send('error store a  data');
        }
        else {
            res.send('store successful');
        }
    });
});


app.get('/notice.html', (req, res) => {
    const filepath = 'file.txt';
    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('error to show a notice data');
        } else {
            // document.getElementById('displayData').innerHTML = data;
            // res.send(data);
            res.send(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Notice Board</title>
                    <style>
                        body{
                            background-color: rgba(248, 90, 33, 0.603);
                            align-items: center;
                            justify-content: center;
                            display: flex;
                            height: 80vh;
                        }
                        .notice p{
                            color: rgb(255, 255, 255);
                            align-items: center;
                            font-size: 50px;
                            background-color: rgba(52, 235, 235, 0.582);
                            padding: 30px;
                            border-radius: 10px;
                        }
                    </style>
                </head>
                <body>
                    <div class="notice">
                        <h1>Notice Board</h1>
                        <p>${data}</p>
                    </div>
                </body>
            </html>
           `)
        }
    });
});


app.get('/index.html', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/views' });
});

app.get('/blogsData/shiv1.html', (req, res) => {
    res.sendFile('blogsData/shiv1.html', { root: __dirname + '/views' });
});

app.get('/blogsData/Durga.html/', (req, res) => {
    res.sendFile('blogsData/Durga.html', { root: __dirname + '/views' });
});

app.get('/blogsData/Sarsvati.html', (req, res) => {
    res.sendFile('blogsData/Sarsvati.html', { root: __dirname + '/views' });
});

app.get('/blogsData/Hanuman1.html', (req, res) => {
    res.sendFile('blogsData/Hanuman1.html', { root: __dirname + '/views' });
});

app.get('/blogsData/shiv2.html', (req, res) => {
    res.sendFile('blogsData/shiv2.html', { root: __dirname + '/views' });
});

app.get('/blogsData/piple.html', (req, res) => {
    res.sendFile('blogsData/piple.html', { root: __dirname + '/views' });
});

app.get('/blogsData/tulsi.html', (req, res) => {
    res.sendFile('blogsData/tulsi.html', { root: __dirname + '/views' });
});

app.get('/blogsData/Shani.html', (req, res) => {
    res.sendFile('blogsData/Shani.html', { root: __dirname + '/views' });
});

app.get('/blogsData/Durga2.html', (req, res) => {
    res.sendFile('blogsData/Durga2.html', { root: __dirname + '/views' });
});

app.get('/blogsData/Ram.html', (req, res) => {
    res.sendFile('blogsData/Ram.html', { root: __dirname + '/views' });
});

app.get('/blogsData/shiv3.html', (req, res) => {
    res.sendFile('blogsData/shiv3.html', { root: __dirname + '/views' });
});

app.get('/blogsData/Navgraha.html', (req, res) => {
    res.sendFile('blogsData/Navgraha.html', { root: __dirname + '/views' });
});

app.get('/blogsData/Dhanteras.html', (req, res) => {
    res.sendFile('blogsData/Dhanteras.html', { root: __dirname + '/views' });
});

app.get('/panchang.html', (req, res) => {
    res.sendFile('panchang.html', { root: __dirname + '/views' });
});



app.post('/upload', upload.single('image'), (req, res) => {
    res.send('Image uploaded successfully!');
});



app.listen(port, () => {
    console.log('server is running 3005');
});