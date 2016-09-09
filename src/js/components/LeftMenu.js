import React from "react"

//left menu
export default class LeftMenu extends React.Component{
  constructor(props) {
        super(props);
        this.state = {active: false};
    }

    click() {
        this.state.active ? this.setState({active: false}) : this.setState({active: true});
    }

  render() {

    var menudata = this.props.info;
    //console.log(menudata);

    var menus =menudata.map(function(item, index){
      return <li key={index}><div class="left-menu-icon float-left"></div>
      <div class="left-menu-links float-left">
      <a href="#content-container" data-category="Basic commodities" id={item.id} >{item.name}</a>
      </div></li>
    });

    return (
      <div class="left-menu-container table-cell left-mobile-menu-container">
      <div class="hamberger"><a href="javascript:void(0);" onClick={this.click.bind(this)}>☰</a></div>
      <div class={"left-menu mobile " + (this.state.active ? "active" : "") }>
      <div class="left-menu-head"><div class="menu-head-icon float-left"></div>
      <div class="menu-head-name float-left">CATEGORY</div>
      <a href="#content-container" class="view-all-category float-right">All</a></div>
      <ul class="left-menu-list" id="left-menu-list">
      {menus}
      </ul>
      </div>

      </div>
      );
  }

}