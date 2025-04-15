const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve 
// app.use(express.static(publicDirectoryPath))
app.use('/app4', express.static(publicDirectoryPath))

// app.get('', (req, res) => {
//     res.render('index', {
//         title: 'Weather',
//         name: 'Joon Hee, Koh'
//     })
// })

// app.get('/about', (req, res) => {
//     res.render('about', {
//         title: 'About Me', 
//         name: 'Joon Hee, Koh'
//     })
// })

// app.get('/help', (req,res) => {
//     res.render('help', {
//         message: "If you're in need of help please email joonheekoh98@gmail.com",
//         title: 'Help',
//         name: 'Joon Hee, Koh'
//     })
// })

// app.get('/weather', (req, res) => {
//     if (!req.query.address) {
//         return res.send({
//             error: 'You must provide an address'
//         })
//     }

//     geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
//         if (error) {
//             return res.send({ error })
//         }

//         forecast(latitude, longitude, (error, forecastData) => {
//             if (error) {
//                 return res.send({ error })
//             }

//             res.send({
//                 forecast: forecastData,
//                 location,
//                 address: req.query.address
//             })
//         })
//     })
// })

// app.get('/products', (req,res) => {
//     if (!req.query.search) {
//         return res.send({
//             error: 'You must provide a search term'
//         })
//     }

//     console.log(req.query.search)
//     res.send({
//         products: []
//     })
// })

// app.get('/help/*', (req,res) => {
//     res.render('404', {
//         title: '404',
//         name: 'Joon Hee, Koh',
//         errorMessage: 'Help article not found'
//     })
// })

// app.get('*', (req,res) => {
//     res.render('404', {
//         title: '404',
//         name: 'Joon Hee, Koh',
//         errorMessage: 'Page not found'
//     })
// })

// app.listen(port, () => {
//     console.log('Server is up on port ' + port)
// })

const basePath = '/app4';

app.get(basePath + '', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Joon Hee, Koh'
  });
});

app.get(basePath + '/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Joon Hee, Koh'
  });
});

app.get(basePath + '/help', (req, res) => {
  res.render('help', {
    message: "If you're in need of help please email joonheekoh98@gmail.com",
    title: 'Help',
    name: 'Joon Hee, Koh'
  });
});

app.get(basePath + '/weather', (req, res) => {
  // keep as-is inside
});

app.get(basePath + '/help/*', (req, res) => {
    res.render('404', {
      title: '404',
      name: 'Joon Hee, Koh',
      errorMessage: 'Help article not found'
    });
  });
  
  app.get(basePath + '*', (req, res) => {
    res.render('404', {
      title: '404',
      name: 'Joon Hee, Koh',
      errorMessage: 'Page not found'
    });
  });
  
  app.listen(3000, '0.0.0.0', () => {
    console.log("Server is up");
  });
  