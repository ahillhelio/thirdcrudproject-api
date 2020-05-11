(this["webpackJsonpthirdcrudproject-ui"]=this["webpackJsonpthirdcrudproject-ui"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),l=n.n(i),o=(n(13),n(1)),c=n(2),s=n(4),u=n(3),h=n(5),m=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={name:"",definition:"",displayName:"",link:""},e.handleChange=function(t){var n=t.target,a=n.name;e.setState(Object(h.a)({},a,n.value),(function(){return console.log(e.state[a])}))},e.handleSubmit=function(t){t.preventDefault(),fetch("".concat("","/api/catalog_entries"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify([{name:e.state.name,definition:e.state.definition,sources:[{displayName:e.state.displayName,link:e.state.link}]}])}).then(e.props.refresh).then((function(){return e.setState({name:"",definition:"",displayName:"",link:""})}))},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{name:"name",type:"text",value:this.state.name,placeholder:"Entry",onChange:this.handleChange}),r.a.createElement("input",{name:"definition",type:"text",value:this.state.definition,placeholder:"Definition",onChange:this.handleChange}),r.a.createElement("input",{name:"displayName",type:"text",value:this.state.displayName,placeholder:"Display Name",onChange:this.handleChange}),r.a.createElement("input",{name:"link",type:"text",value:this.state.link,placeholder:"Link",onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Add Entry"}),r.a.createElement("input",{type:"button",value:"Cancel",onClick:this.props.refresh}))}}]),n}(r.a.Component),p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={name:e.props.entry.name,definition:e.props.entry.definition,displayName:e.props.entry.sources.displayName,link:e.props.entry.link},e.handleChange=function(t){var n=t.target,a=n.name;e.setState(Object(h.a)({},a,n.value),(function(){return console.log(e.state[a])}))},e.handleSubmit=function(t){t.preventDefault(),fetch("".concat("","/api/catalog_entries/").concat(e.props.entry._id),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({name:e.state.name,definition:e.state.definition,sources:[{displayName:e.state.displayName,link:e.state.link}]})}).then(e.props.refresh).then((function(){return e.setState({name:"",definition:"",displayName:"",link:""})}))},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{name:"name",type:"text",value:this.state.name,onChange:this.handleChange}),r.a.createElement("input",{name:"definition",type:"text",value:this.state.definition,onChange:this.handleChange}),r.a.createElement("input",{name:"displayName",type:"text",value:this.state.displayName,placeholder:"Update Display Name",onChange:this.handleChange}),r.a.createElement("input",{name:"link",type:"text",value:this.state.link,placeholder:"Link",onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Edit/Update Entry"}),r.a.createElement("input",{type:"button",value:"Cancel",onClick:this.props.refresh}))}}]),n}(r.a.Component),d=function(e){var t=e.entry,n=e.deleteEntry,a=e.updateEntry;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return n(t._id)}},"DELETE ENTRY"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return a(t)}},"EDIT ENTRY"))},y=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).getEntry=function(){fetch("".concat("","/api/catalog_entries")).then((function(e){return e.json()})).then((function(e){return a.setState({entry:e,isCreate:!0})}))},a.updateEntry=function(e){a.setState({updateEntry:e,isCreate:!1})},a.deleteEntry=function(e){fetch("".concat("","/api/catalog_entries/").concat(e),{method:"DELETE"}).then((function(e){return e.json()})).then(console.log).then(a.getEntry)},a.renderForm=function(){var e;if(a.state.isCreate)e=r.a.createElement(m,{key:"createForm",refresh:a.getEntry});else{e=r.a.createElement(m,null);var t=a.state.updateEntry;e=r.a.createElement(p,{key:t._id,entry:t,refresh:a.getEntry})}return e},a.state={entry:[],isCreate:!0},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.getEntry()}},{key:"render",value:function(){var e=this;console.log(this.state.entry);var t=this.state.entry.map((function(t){var n=t.sources.map((function(e){return r.a.createElement("div",null,"Display Name: ",e.displayName,r.a.createElement("br",null),r.a.createElement("a",{href:e.link}," Link to Resource "))}));return r.a.createElement("div",null,"Entry: ",t.name,r.a.createElement("br",null),"Definition: ",t.definition,r.a.createElement("br",null),n,r.a.createElement(d,{entry:t,deleteEntry:e.deleteEntry,updateEntry:e.updateEntry}))}));return console.log(this.state.entry),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"ENTRIES"),this.renderForm(),t)}}]),n}(a.Component);n(14);var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.dc9c29be.chunk.js.map