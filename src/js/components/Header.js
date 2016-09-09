import React from "react"
import { Link } from "react-router"
//logo container
var LogoContainer = React.createClass({displayName: 'logo-container',
  render: function() {
    return (
      <div class="logo-container float-left">
      <Link to="/"><div class="logo float-left"></div></Link>
      </div> 
      );
  }
});
// search box in header
var SearchBox = React.createClass({displayName: 'search',
  render: function() {
    return (
      <div class="search-container float-left text-center">
      <input class="search float-left" type="text" placeholder="Search here" />
      <div class="search-button float-left"></div>
      </div>
      );
  }
});
// location zip code at header
var LocationBox = React.createClass({displayName: 'location',
  render: function() {
    return (
      <div class="location-zip float-left">
      <label for="location" >Your location: </label><input class="location" type="text" placeholder="Zip Code" name="location" id="location" defaultValue="11535"/>
      </div>
      );
  }
});
// render header
export default class Header extends React.Component {
  render() {
    return (
      <section class="header">
      <LogoContainer />
      <SearchBox />
      <LocationBox />
      </section>
      );
  }
}