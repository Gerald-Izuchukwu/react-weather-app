import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Clock from './components/Clock';

class App extends Component {
	constructor(city, country) {
		super();
		this.state = {
			api_key: '4755fa03c8fa88746211d2464382d33d',
			api_key2: '1e3e7920a882442586d105107222109',
			city: 'London',
			country: 'nigeria',
			clock: [],
			time: '',
		};
	}

	async componentDidMount() {
		const res = await fetch(
			`http://api.weatherstack.com/current?access_key=${this.state.api_key}&query=${this.state.city}`
		);

		const resData = await res.json();
		this.setState({ clock: resData });
		console.log(this.state.clock);
		this.setState({
			time: this.state.clock.current.observation_time,
			country: this.state.clock.location.country,
			city: this.state.clock.location.name,
		});
		// const res = await fetch(
		// 	`http://api.weatherapi.com/v1/current.json?key=${this.state.api_key2}&query=${this.state.city}`
		// );
		// this.setState({
		// 	time: this.state.clock.current.last_updated,
		// 	country: this.state.clock.location.country,
		// 	city: this.state.clock.location.name,
		// });
	}
	render() {
		return (
			<div className='App'>
				<Navbar />
				<Clock
					time={this.state.time}
					country={this.state.country}
					city={this.state.city}
				/>
			</div>
		);
	}
}

export default App;
