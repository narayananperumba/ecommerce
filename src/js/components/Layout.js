import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import MidContent from "./MidContent"
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
			<MidContent/>
			<Link to="two"> Click me</Link>
			<Footer/>
			</section>
			);
	}
}