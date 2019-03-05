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
                <ul class="nav navbar-nav">
                  <li><a class="navbar-item" href="#Home">Home</a></li>
                  <li><a class="navbar-item" href="#Mercury">Mercury</a></li>
                  <li><a class="navbar-item" href="#Venus">Venus</a></li>
                  <li><a class="navbar-item" href="#Earth">Earth</a></li>
                  <li><a class="navbar-item" href="#Mars">Mars</a></li>
                  <li><a class="navbar-item" href="#Asteroid-Belt">Asteroid Belt</a></li>
                  <li><a class="navbar-item" href="#Jupiter">Jupiter</a></li>
                  <li><a class="navbar-item" href="#Saturn">Saturn</a></li>
                  <li><a class="navbar-item" href="#Uranus">Uranus</a></li>
                  <li><a class="navbar-item" href="#Neptune">Neptune</a></li>
                  <li><a class="navbar-item" href="#Outer-Orbit">Outer Orbit</a></li>
                </ul>
              </container>
            </nav>
          </header>

          <body>
            <page id="page1" class="page">
              <a id="Sun"></a>
              <content class="content">
                <p class="blurb text-center">Welcome to discoverET</p>
              </content>
            </page>
            
            <page id="page2" class="page">
              <a id="Mercury"></a>
              <content class="content">

                <p className="blurb text-center">(Reasons why Mercury is not a target for ET search)
                </p>
              </content>
            </page>
            
            <page id="page3" class="page">
              <a id="Venus"></a>
              <content class="content">
                
                <p class="blurb text-center">Venus' high Deuterium-Hydrogen ratio hints that the planet may have had liquid water in the past.
                </p>
              </content> 
            </page>

            <page id="page4" class="page">
              <a id="Earth"></a>
              <content class="content">
                
                <p class="blurb text-center">Extremophiles discovered on Earth refine our idea of habitable conditons.
                </p>
              </content>
            </page>

            <page id="page5" class="page">
              <a id="Mars"></a>
              <content class="content">
                
                <p class="blurb text-center">Mars' polar ice caps are currently intact and suggest liquid water may have existed or still does exist on the planet.
                </p>
              </content>
            </page>

            <page id="page6" class="page">
              <a id="Asteroid-Belt"></a>
              <content class="content">
                
                <p class="blurb text-center">The Asteroid belt hosts many large planetoids that may be habitable. Ceres is one of these bodies and has its own atmosphere, primarily composed of water vapor.
                </p>
              </content>
            </page>

            <page id="page7" class="page">
              <a id="Jupiter"></a>
              <content class="content">
                
                <p class="blurb text-center">While Jupiter itself is not a target for ET search, some of its large moons are of interest. Geothermal activity has been detected on each, and Ganymede and Callisto are likely to have subsurface liquid water oceans.
                </p>
              </content>
            </page>

            <page id="page8" class="page">
              <a id="Saturn"></a>
              <content class="content">
                
                <p class="blurb text-center">Saturn is like Jupiter, in that we are not confident in its ability to host ET life. However, its largest moon, Titan, has an atmosphere and conditions that could potentially support life.
                </p>
              </content>
            </page>

            <page id="page9" class="page">
              <a id="Uranus"></a>
              <content class="content">
                
                <p class="blurb text-center">(Reasons why Uranus is not a target for ET search)
                </p>
              </content>
            </page>

            <page id="page10" class="page">
              <a id="Neptune"></a>
              <content class="content">
                
                <p class="blurb text-center">(Reasons why Neptune is not a target for ET search)
                </p>
              </content>
            </page>

            <page id="page11" class="page">
              <a id="Outer-Orbit"></a>
              <content class="content">
                
                <p class="blurb text-center">(Reasons why outer-orbit planetoids are not targets for ET search)
                </p>
              </content>
            </page>
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
