(window.webpackJsonpapp=window.webpackJsonpapp||[]).push([[0],{40:function(e,t,n){e.exports=n(63)},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(18),o=n.n(r),i=n(19),c=n(12),u=n(20),l=n(21),m=n(22),h=n(24),p=n(16),d=n(84),g=n(64),v=n(33),f=n.n(v),E=n(34),b=n.n(E),S=n(35),C=n.n(S);function w(e){return e.name}var N=function(e){return!0};function j(e,t){var n=t.query,a=b()(e.name,n),r=C()(e.name,a),o="".concat(e.population);return s.a.createElement("span",{style:{fontSize:o.length>0?o.length+16:"null"}},r.map((function(e,t){var n=e.highlight?"react-autosuggest__suggestion-match":null;return s.a.createElement("span",{className:n,key:t},e.text)})))}var y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).onChange=function(t,n){var a=n.newValue;n.method;e.setState({value:a})},e.onSuggestionsFetchRequested=function(t){var n=t.value;fetch("https://swapi.co/api/planets?search=".concat(n)).then((function(e){return e.json()})).then((function(t){return e.setState({suggestions:t.results})}))},e.onSuggestionsClearRequested=function(){e.setState({suggestions:[]})},e.state={value:"",suggestions:[],planets:[]},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.value,n=e.suggestions,a={placeholder:"Search Planets...",value:t,onChange:this.onChange};return s.a.createElement("div",{className:"innerGrid"},s.a.createElement("h1",null,"Search"),s.a.createElement(f.a,{suggestions:n,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:w,renderSuggestion:j,inputProps:a,shouldRenderSuggestions:N}))}}]),t}(a.Component),O=n(85);var P=n(81),q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).onUserNameChange=function(e){n.setState({userName:e.target.value})},n.onPasswordChange=function(e){n.setState({passwordEntered:e.target.value})},n.onInputSubmit=function(e){var t;e.preventDefault(),n.setState({isloading:!0}),(t=n.state,new Promise((function(e,n){fetch("https://swapi.co/api/people",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(e){n(e)}))}))).then((function(e){document.getElementById("status").innerHTML=null;var t=e.results,a=n.state.userName,s=n.state.passwordEntered;if(""===a&&""===s)document.getElementById("status").innerHTML="<p>Please Enter a valid Username and Password</p>",n.setState({isloading:!1});else for(var r in t)t[r].name===a&&t[r].birth_year===s&&(console.log("valid"),document.getElementById("status").innerHTML=null,n.props.history.push("/search"))}))},n.state={userName:"",passwordEntered:"",isLoggedIn:!1,isloading:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"innerGrid"},s.a.createElement("h1",null,"Login"),s.a.createElement("div",{className:"InputContainer"},s.a.createElement("label",{htmlFor:"userName"},"User Name"),s.a.createElement("input",{type:"text",value:this.state.userName,id:"userName",onChange:this.onUserNameChange})),s.a.createElement("div",{className:"InputContainer"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("input",{type:"password",value:this.state.passwordEntered,id:"password",onChange:this.onPasswordChange})),s.a.createElement("span",{className:"validation",id:"status"}),s.a.createElement(O.a,{variant:"contained",color:"primary",onClick:this.onInputSubmit},"Login"),this.state.isloading?s.a.createElement(P.a,{className:"progress"}):null)}}]),t}(a.Component),I=n(82),k=n(83);function L(){return s.a.createElement(I.a,{position:"static"},s.a.createElement(k.a,{className:"headerContainer"},s.a.createElement(h.b,{exact:!0,to:"/",activeClassName:"is_active"},"Login"),s.a.createElement(h.b,{to:"/search",activeClassName:"is_active"},"Search")))}var R=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(d.a,{className:"mainGrid"},s.a.createElement(d.a,{item:!0,xs:12},s.a.createElement(g.a,null,s.a.createElement(h.a,null,s.a.createElement(L,null),s.a.createElement(p.a,{exact:!0,path:"/",component:q}),s.a.createElement(p.a,{path:"/search",component:y})))))}}]),t}(a.Component);n(62);o.a.render(s.a.createElement(R,null),document.querySelector("#root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.a185af88.chunk.js.map