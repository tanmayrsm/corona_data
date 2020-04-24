import React from 'react';
import { Cards, Chart, CountryPicker } from './Components';
import { fetchData } from './api';

import styles from './App.module.css';
import Image from  './images/image.png';

class App extends React.Component {

  state = {
    data : {},
    country : ''
  }

  async componentDidMount(){
    const fetched = await fetchData();
    
    this.setState( { data : fetched } );
  }

  handleCountryChange = async (country) => {
    //console.log(country);
    const fetched = await fetchData(country);
    this.setState( { data : fetched , country : country} );
  }

  render(){
    const { data, country } = this.state;
    console.log("jeb:"+{data})
    return (
      <div className = {styles.container}>
        <img src = {Image} className = { styles.image} alt = "Covid-19"/> a webapp by <b>Mishra</b>
      <Cards data = {data} />
      <CountryPicker handleCountryChange = {this.handleCountryChange} />
      <Chart data = {data} country = {country}/>
      </div>
    );
  }
}
export default App;