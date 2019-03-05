import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <main>
          <header>
            <nav class="navbar navbar-default navbar-static-top">
              <container class="container-fluid">
                <a class="navbar-brand navbar-left" href="/">Logo</a>
                <ul class="nav navbar-nav navbar-left row">
                  <li><a class="navbar-item" href="#page1">Home</a></li>
                  <li><a class="navbar-item" href="#page2">Mercury</a></li>
                  <li><a class="navbar-item" href="#page3">Venus</a></li>
                  <li><a class="navbar-item" href="#page4">Earth</a></li>
                </ul>
              </container>
            </nav>
          </header>

          <body>
            <div id="page1" class="page">
              <a id="Home"></a>
              <content class="content">
                <p class="blurb text-center">Welcome to discoverET</p>
              </content>
            </div>
            
            <div id="page2" class="page">
              <a id="Mercury"></a>
              <content class="content">
                <p className="blurb">13.82 years ago, the universe was born.
                </p>
              </content>
            </div>
            
            <div id="page3" class="page">
              <a id="Venus"></a>
              <content class="content"> 
                <p class="blurb">All matter that exists in our universe today expanded from an infinitely small and dense singularity into the endless expanse of the cosmos.
                </p>
              </content> 
            </div>

            <div id="page4" class="page">
              <a id="Earth"></a>
              <content class="content">
                <p class="blurb">Earth formed from accumulation of matter in the orbit of the sun.
                </p>
              </content>
            </div>
          </body>
        </main>
        
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous">
        </script>
      </div>
    );
  }
}

export default App;
