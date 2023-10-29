import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NavBar from './assets/component/NavBar.jsx'
import Header from './assets/component/Header.jsx'
import {Footer} from './assets/component/Footer.jsx'
//import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap"
import MainSection from './assets/component/MainSection.jsx'
import AddProduct from './assets/component/AddProduct.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Router>
      <Switch>
        <Route exact path="./assets/component/" component={NavBar} />
        <Route path="./assets/component/AddProduct" component={AddProduct} />
      </Switch>
    </Router> */} 
    <NavBar/>
    <Header/>
    <MainSection/>
    <Footer name="Ebrahim Yahya" hero="alkhewani"/>
  </React.StrictMode>,
)
