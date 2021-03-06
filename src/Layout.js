import React, { Component } from 'react';
import io from 'socket.io-client'
import { USER_CONNECTED, LOGOUT } from './Events'
import LoginForm from './LoginForm'
import ChatContainer from './chat/ChatContainer'

const socketUrl = "http://10.20.1.6:3231/"
export default class Layout extends Component {

	constructor(props) {
	  super(props);

	  this.state = {
	  	socket:null,
	  	user:null,
	  };
	}

	componentWillMount() {
		this.initSocket()
	}


	initSocket = ()=>{
		const socket = io(socketUrl)

		socket.on('connect', ()=>{
			console.log("Connected");
		})

		this.setState({socket})
	}


	setUser = (user)=>{
		const { socket } = this.state
		socket.emit(USER_CONNECTED, user);
		this.setState({user})
	}


	logout = ()=>{
		const { socket } = this.state
		socket.emit(LOGOUT)
		this.setState({user:null})

	}


	render() {
		const { title } = this.props
		const { socket, user } = this.state
		return (
			<div className="container">
				{
					!user ?
					<LoginForm socket={socket} setUser={this.setUser} title={title} />
					:
					<ChatContainer socket={socket} user={user} logout={this.logout}/>
				}
			</div>
		);
	}
}
