import React from 'react';
import Quote from './Quote';
import './App.css'
import 'tachyons';

class App extends React.Component {
  constructor(props) {
    super()

    this.state = {
      quotes: [],
      quote: {}
    }
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote = () => {
    fetch('https://api.quotable.io/random').then((response => response.json())).then((quote) => this.setState({quote: quote}))
    // const quote =  this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
    // this.setState({quote: quote});
  }

  render() {

    console.log(this.state.quotes)
    console.log(this.state.quote)

    if (this.state.quote) {

      const quote = this.state.quote;
      
      return (
        <div className='vh-100 dt w-100'>
          <div className='dtc v-mid tc'>
            <Quote name={ quote.author } text={ quote.content }/>
            <button className='f6 link dim ph3 pv2 mb2 dib white bg-black' id="new-quote" type="submit" onClick={this.getQuote}>New Quote</button>
            <button className='f6 link dim ph3 pv2 mb2 dib white bg-black' type='submit'>
              <a href="https://twitter.com/intent/tweet" title="Twitter" target='_blank' id='tweet-quote'>Tweet Quote</a>
            </button>
          </div>
        </div>
      )
    }
    return (
        <div className='tc'>
          <Quote name={'Loading'} text = {'Loading'}/>
          <button id="new-quote" type="submit" onClick={this.getQuote}>New Quote</button>
          <a class="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="https://twitter.com/intent/tweet" title="Twitter" target='_blank' id='tweet-quote'>
            <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fill-rule="nonzero"/></svg>
            <span class="f6 ml3 pr2">Tweet Quote</span>
          </a>
        </div>
      )

  }
}

<a class="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="https://twitter.com/intent/tweet" title="Twitter" target='_blank' id='tweet-quote'>
  <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fill-rule="nonzero"/></svg>
  <span class="f6 ml3 pr2">Tweet Quote</span>
</a>

export default App;