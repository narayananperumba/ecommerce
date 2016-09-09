import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import MidContent from "../components/MidContent"
import { Link } from "react-router"

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {name:"narayan"};
	}
	render() {
		return (
			<section className="page">
			<Header/>
			{this.props.children}
			<MidContent/>
			<Footer/>
			</section>
			);
	}
}