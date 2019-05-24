import React, { Component } from 'react';
import { IoIosLogOut} from "react-icons/io";

export default class SideBar extends Component{

	render(){
		const { chats, user, setActiveChat, logout} = this.props
		return (
			<div id="side-bar">
					<div className="heading">
						<div className="app-name">MSN </div>
						<div className="menu">

						</div>
					</div>
					<div
						className="users"
						ref='users'
						onClick={(e)=>{ (e.target === this.refs.user) && setActiveChat(null) }}>

						{
						chats.map((chat)=>{
							if(chat.name){
								const lastMessage = chat.messages[chat.messages.length - 1];
								const user = chat.users.find(({name})=>{
									return name !== this.props.name
								}) || { name:"ROOM 1" }

								return(
								<div>

									<div className="user-info">
										<div className="name">{user.name}</div>
										{lastMessage && <div className="last-message">{lastMessage.message}</div>}
									</div>

								</div>
							)
							}

							return null
						})
						}

					</div>
					<div className="current-user">
						<span>{user.name}</span>
						<div onClick={()=>{logout()}} title="Logout" className="logout">
                         <p id="monp"> <IoIosLogOut /></p>
						</div>
					</div>
			</div>
		);

	}
}
