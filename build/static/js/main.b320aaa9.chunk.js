(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,n){e.exports=n(74)},43:function(e,t,n){},6:function(e,t){e.exports={COMMUNITY_CHAT:"COMMUNITY_CHAT",USER_CONNECTED:"USER_CONNECTED",MESSAGE_RECIEVED:"MESSAGE_RECIEVED",MESSAGE_SENT:"MESSAGE_SENT",USER_DISCONNECTED:"USER_DISCONNECTED",TYPING:"TYPING",VERIFY_USER:"VERIFY_USER",LOGOUT:"LOGOUT"}},70:function(e,t){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(34),r=n.n(c),i=(n(43),n(1)),o=n(2),l=n(4),u=n(3),m=n(5),p=n(35),d=n.n(p),h=n(6),E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).setUser=function(e){var t=e.user;e.isUser?n.setError("User name taken"):(n.setError(""),n.props.setUser(t))},n.handleSubmit=function(e){e.preventDefault();var t=n.props.socket,a=n.state.nickname;t.emit(h.VERIFY_USER,a,n.setUser)},n.handleChange=function(e){n.setState({nickname:e.target.value})},n.setError=function(e){n.setState({error:e})},n.state={nickname:"",error:""},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.nickname,a=t.error;return s.a.createElement("div",{className:"login"},s.a.createElement("form",{onSubmit:this.handleSubmit,className:"login-form"},s.a.createElement("label",{htmlFor:"nickname"},s.a.createElement("h2",null,"Pseudo")),s.a.createElement("input",{ref:function(t){e.textInput=t},type:"text",id:"nickname",value:n,onChange:this.handleChange,placeholder:"Ton pseudo ?"}),s.a.createElement("div",{className:"error"},a||null)))}}]),t}(a.Component),g=n(37),v=n(36),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.chats,a=t.user,c=t.setActiveChat,r=t.logout;return s.a.createElement("div",{id:"side-bar"},s.a.createElement("div",{className:"heading"},s.a.createElement("div",{className:"app-name"},"MSN "),s.a.createElement("div",{className:"menu"})),s.a.createElement("div",{className:"users",ref:"users",onClick:function(t){t.target===e.refs.user&&c(null)}},n.map(function(t){if(t.name){var n=t.messages[t.messages.length-1],a=t.users.find(function(t){return t.name!==e.props.name})||{name:"ROOM 1"};return s.a.createElement("div",null,s.a.createElement("div",{className:"user-info"},s.a.createElement("div",{className:"name"},a.name),n&&s.a.createElement("div",{className:"last-message"},n.message)))}return null})),s.a.createElement("div",{className:"current-user"},s.a.createElement("span",null,a.name),s.a.createElement("div",{onClick:function(){r()},title:"Logout",className:"logout"},s.a.createElement("p",{id:"monp"}," ",s.a.createElement(v.a,null)))))}}]),t}(a.Component),C=function(e){e.name;var t=e.numberOfUsers;return s.a.createElement("div",{className:"chat-header"},s.a.createElement("div",{className:"user-info"},s.a.createElement("div",{className:"user-name"},"MSN - CHAT -18"),s.a.createElement("div",{className:"status"},s.a.createElement("div",{className:"indicator"}),s.a.createElement("span",null,t||null))),s.a.createElement("div",{className:"options"}))},y=n(12),N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).scrollDown=n.scrollDown.bind(Object(y.a)(n)),n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"scrollDown",value:function(){var e=this.refs.container;e.scrollTop=e.scrollHeight}},{key:"componentDidMount",value:function(){this.scrollDown()}},{key:"componentDidUpdate",value:function(e,t){this.scrollDown()}},{key:"render",value:function(){var e=this.props,t=e.messages,n=e.user,a=e.typingUsers;return s.a.createElement("div",{ref:"container",className:"thread-container"},s.a.createElement("div",{className:"thread"},t.map(function(e){return s.a.createElement("div",{key:e.id,className:"message-container ".concat(e.sender===n.name&&"right")},s.a.createElement("div",{className:"time"},e.time),s.a.createElement("div",{className:"data"},s.a.createElement("div",{className:"moi"},e.sender),s.a.createElement("div",{className:"message"}," ",e.message)))}),a.map(function(e){return s.a.createElement("div",{key:e,className:"typing-user"},"".concat(e," est entrain d'\xe9crire . . ."))})))}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),n.sendMessage(),n.setState({message:""})},n.sendMessage=function(){n.props.sendMessage(n.state.message)},n.sendTyping=function(){n.lastUpdateTime=Date.now(),n.state.isTyping||(n.setState({isTyping:!0}),n.props.sendTyping(!0),n.startCheckingTyping())},n.startCheckingTyping=function(){console.log("Typing"),n.typingInterval=setInterval(function(){Date.now()-n.lastUpdateTime>300&&(n.setState({isTyping:!1}),n.stopCheckingTyping())},300)},n.stopCheckingTyping=function(){console.log("Stop Typing"),n.typingInterval&&(clearInterval(n.typingInterval),n.props.sendTyping(!1))},n.state={message:"",isTyping:!1},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillUnmount",value:function(){this.stopCheckingTyping()}},{key:"render",value:function(){var e=this,t=this.state.message;return s.a.createElement("div",{className:"message-input"},s.a.createElement("form",{onSubmit:this.handleSubmit,className:"message-form"},s.a.createElement("input",{id:"message",ref:"messageinput",type:"text",className:"form-control",value:t,autoComplete:"off",placeholder:"Tu peux \xe9crire si tu  veux ",onKeyUp:function(t){13!==t.keyCode&&e.sendTyping()},onChange:function(t){var n=t.target;e.setState({message:n.value})}}),s.a.createElement("button",{disabled:t.length<1,type:"submit",className:"send"}," Send ")))}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).resetChat=function(e){return n.addChat(e,!0)},n.addChat=function(e,t){var a=n.props.socket,s=n.state.chats,c=t?[e]:[].concat(Object(g.a)(s),[e]);n.setState({chats:c,activeChat:t?e:n.state.activeChat});var r="".concat(h.MESSAGE_RECIEVED,"-").concat(e.id),i="".concat(h.TYPING,"-").concat(e.id);a.on(i,n.updateTypingInChat(e.id)),a.on(r,n.addMessageToChat(e.id))},n.addMessageToChat=function(e){return function(t){var a=n.state.chats.map(function(n){return n.id===e&&n.messages.push(t),n});n.setState({chats:a})}},n.updateTypingInChat=function(e){return function(t){var a=t.isTyping,s=t.user;if(s!==n.props.user.name){var c=n.state.chats.map(function(t){return t.id===e&&(a&&!t.typingUsers.includes(s)?t.typingUsers.push(s):!a&&t.typingUsers.includes(s)&&(t.typingUsers=t.typingUsers.filter(function(e){return e!==s}))),t});n.setState({chats:c})}}},n.sendMessage=function(e,t){n.props.socket.emit(h.MESSAGE_SENT,{chatId:e,message:t})},n.sendTyping=function(e,t){n.props.socket.emit(h.TYPING,{chatId:e,isTyping:t})},n.setActiveChat=function(e){n.setState({activeChat:e})},n.state={chats:[],activeChat:null},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.socket.emit(h.COMMUNITY_CHAT,this.resetChat)}},{key:"render",value:function(){var e=this,t=this.props,n=t.user,a=t.logout,c=this.state,r=c.chats,i=c.activeChat;return s.a.createElement("div",{className:"container"},s.a.createElement(f,{logout:a,chats:r,user:n,activeChat:i,setActiveChat:this.setActiveChat}),s.a.createElement("div",{className:"chat-room-container"},null!==i?s.a.createElement("div",{className:"chat-room"},s.a.createElement(C,{name:i.name}),s.a.createElement(N,{messages:i.messages,user:n,typingUsers:i.typingUsers}),s.a.createElement(O,{sendMessage:function(t){e.sendMessage(i.id,t)},sendTyping:function(t){e.sendTyping(i.id,t)}})):s.a.createElement("div",{className:"chat-room choose"},s.a.createElement("h3",null,"Choose a chat!"))))}}]),t}(a.Component),T="http://10.20.1.6:3231/",S=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).initSocket=function(){var e=d()(T);e.on("connect",function(){console.log("Connected")}),n.setState({socket:e})},n.setUser=function(e){n.state.socket.emit(h.USER_CONNECTED,e),n.setState({user:e})},n.logout=function(){n.state.socket.emit(h.LOGOUT),n.setState({user:null})},n.state={socket:null,user:null},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.initSocket()}},{key:"render",value:function(){var e=this.props.title,t=this.state,n=t.socket,a=t.user;return s.a.createElement("div",{className:"container"},a?s.a.createElement(b,{socket:n,user:a,logout:this.logout}):s.a.createElement(E,{socket:n,setUser:this.setUser,title:e}))}}]),t}(a.Component),k=(n(73),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement(S,{title:"Chat-2000"}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.b320aaa9.chunk.js.map