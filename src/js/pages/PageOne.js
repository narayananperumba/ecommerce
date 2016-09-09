import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

export default class PageOne extends React.Component {
  render() {
    return (
      <section className="page">
      <Header/>
      
      <section class="page-mid-container">
      Page one content 
      </section>

      <Footer/>
      </section>
      );
  }
}