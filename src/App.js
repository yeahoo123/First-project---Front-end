import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Botchat from './components/chatbot/Botchat'
import Header from './components/Header'
import Section from './components/Section'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'
import {DataProvider} from './components/Context'

class App extends React.Component {
  render (){
    return (
      <DataProvider>
        <div className="App">
          
          <Router>
            <Header/>
            <Section/>
            <NewsLetter/>
            <Botchat/>
            <Footer />
          </Router>
        </div>
      </DataProvider>
    )
  }
}

export default App;
