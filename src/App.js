import React, { Component } from 'react'
import './App.css'
import Search from './components/search/search'
import List from './components/list/itemList'
import axios from 'axios'
//?q={busqueda}?limit=10
//alert
import { withAlert } from 'react-alert'

const URL_BASE = "https://api.mercadolibre.com/"
const URL_SEARCH = URL_BASE + "sites/MCO/search"




class App extends Component {


  state = {
    value: '',
    data: [],
    limit: 10
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.searchItems()
  }

  setInputRef = element => {
    this.input = element;
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  async searchItems() {
    const url = URL_SEARCH
    const resultList = await axios.get(`${url}?q=${this.state.value}&limit=${this.state.limit}`)
    this.setState({ data: resultList.data.results })
    //Este listado se obtenía incialmente es esta aplicación de un api de mercadolibre
    //Para obtener el json de el proyecto asociado a un usuario
    //localhost:3333/projects y se ponía dentro del get
    //localhost:3333/projects
    //Ahora se obtiene lo siguiente 
    //  const resultList = await axios.get(`${url}?q=${this.state.value}&limit=${this.state.limit}``${url}?q=${this.state.value}&limit=${this.state.limit}`
    // , {
    //   headers: {
    //     'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjExLCJpYXQiOjE2MTU0OTg1OTl9.XaAKBoAwOsWv0sZe8DJqr-PI96HjdCDsIo7Rz2utTMQ`
    //   }
    // }
    // )
    //  //resultList.data.results 
    // this.setState({ data: resultList.data})
    // console.log("YA VIENE EL LISTADO");
    console.log(this.state.data)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bienvenido a mi mercado libre</h1>
          <Search
            setRef={this.setInputRef}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleInputChange}
            value={this.state.value}
          />
        </header>
        <div><a href="https://home.mercadolibre.com.co/categories"><i className="nav-icon-categories-mobile"></i><p>Categorías</p></a></div>
        <div className="App-list">
          <List list={this.state.data} >
         
          </List>
        </div>
      </div>
    );
  }
}

export default App
