(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(25)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),s=(n(15),n(1)),l=n(2),i=n(4),u=n(3),h=n(5),d=n(9),m=n(6),p=(n(17),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){this.props.flipCellsAround()}},{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return o.a.createElement("td",{className:e,onClick:this.handleClick})}}]),t}(a.Component)),f=(n(19),n(21),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).setRcEasy=function(e,t){n.setState({hasWon:!1,nrows:2,ncols:2,board:n.createBoard(2,2)})},n.setRcHard=function(e,t){n.setState({hasWon:!1,nrows:5,ncols:5,board:n.createBoard(5,5)})},n.state={hasWon:!1,nrows:n.props.nrows,ncols:n.props.ncols,board:n.createBoard(n.props.nrows,n.props.ncols)},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"createBoard",value:function(e,t){for(var n=[],a=0;a<e;a++){for(var o=[],r=0;r<t;r++)o.push(Math.random()<this.props.chanceLightStartsOn),console.log(Math.random()<this.props.chanceLightStartsOn);n.push(o)}return console.log("new voard"),n}},{key:"flipCellsAround",value:function(e){var t=this.state.ncols,n=this.state.nrows,a=this.state.board,o=e.split("_").map(Number),r=Object(d.a)(o,2),c=r[0],s=r[1];function l(e,o){o>=0&&o<t&&e>=0&&e<n&&(a[e][o]=!a[e][o])}l(c,s),l(c,s-1),l(c,s+1),l(c-1,s),l(c+1,s),console.log("wtf!");var i=a.every(function(e){return e.every(function(e){return!e})});console.log(i),this.setState({board:a,hasWon:i})}},{key:"render",value:function(){var e=this;if(this.state.hasWon)return o.a.createElement("h3",{className:"Winner"},"WINNER!");for(var t=[],n=0;n<this.state.nrows;n++){for(var a=[],r=function(t){var r="".concat(n,"_").concat(t);console.log("".concat(n,"_").concat(t)),a.push(o.a.createElement(p,{key:r,isLit:e.state.board[n][t],flipCellsAround:function(){return e.flipCellsAround(r)}}))},c=0;c<this.state.ncols;c++)r(c);t.push(o.a.createElement("tr",{key:n},a))}return o.a.createElement("div",null,o.a.createElement("table",{className:"Board"},o.a.createElement("tbody",null,t)),o.a.createElement("button",{className:"neonBtn-easy",onClick:this.setRcEasy}," Easy "),o.a.createElement("button",{className:"neonBtn-hrd",onClick:this.setRcHard}," Hard "),o.a.createElement("h5",{className:"Rules"},"Rules:",o.a.createElement("br",null),"Light up all the cubes!",o.a.createElement("br",null),"Clicking a cube toggles it and the adjacent neighbours."))}}]),t}(a.Component));f.defaultProps={nrows:2,ncols:2,chanceLightStartsOn:.2};var b=f,v=(n(23),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("div",{className:"title"},o.a.createElement("h4",{className:"neon"},"Light"),o.a.createElement("h4",{className:"flux"},"UP!"))),o.a.createElement("div",{className:"App"},o.a.createElement(b,null)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.96b6e6f4.chunk.js.map