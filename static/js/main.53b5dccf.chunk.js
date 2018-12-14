(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(62)},26:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),o=(a(26),a(5)),i=a(6),s=a(8),m=a(7),u=a(9),h=a(3),p=a.n(h),d=(a(28),function(){return l.a.createElement("div",{id:"home"},l.a.createElement("h1",null,"Hello, my name is ",l.a.createElement("span",null,"Jake Burton"),"."),l.a.createElement("h1",null,"I am a web developer."),l.a.createElement(p.a,{href:"#about"},l.a.createElement("button",null,"More about me  ",l.a.createElement("i",{className:"fas fa-arrow-circle-right"}))))}),f=a(4),b=a.n(f),E=(a(30),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).displayNav=function(){a.setState({active:!a.state.active})},a.state={active:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=b()({"nav-display":this.state.active});return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-links ".concat(e)},l.a.createElement("span",null,l.a.createElement(p.a,{href:"#home",onClick:this.displayNav},"Home")),l.a.createElement("span",null,l.a.createElement(p.a,{href:"#about",onClick:this.displayNav},"About")),l.a.createElement("span",null,l.a.createElement(p.a,{href:"#resume",onClick:this.displayNav},"Resume")),l.a.createElement("span",null,l.a.createElement(p.a,{href:"#portfolio",onClick:this.displayNav},"portfolio")),l.a.createElement("span",null,l.a.createElement(p.a,{href:"#contact",onClick:this.displayNav},"Contact"))),l.a.createElement("span",{className:"nav-button",onClick:this.displayNav},l.a.createElement("i",{className:"fas fa-bars fa-2x"})))}}]),t}(n.Component)),g=a(2),v=a.n(g),j=(a(36),function(e){var t={width:"".concat(e.percent,"%"),height:"100%",background:"#a45117"};return l.a.createElement("div",{className:"bar"},l.a.createElement("span",{className:"bar-title"},e.item),l.a.createElement("div",{className:"fill-container"},l.a.createElement("div",{className:"bar-fill",style:t})),l.a.createElement("span",{className:"percentage"},e.percent,"%"))}),N=(a(38),function(){return l.a.createElement("div",{className:"bar-display"},l.a.createElement(j,{item:"JavaScript",percent:"80"}),l.a.createElement(j,{item:"CSS",percent:"90"}),l.a.createElement(j,{item:"HTML",percent:"90"}),l.a.createElement(j,{item:"React",percent:"70"}),l.a.createElement(j,{item:"Git",percent:"60"}),l.a.createElement(j,{item:"Node",percent:"60"}),l.a.createElement(j,{item:"PostgreSQL",percent:"50"}),l.a.createElement(j,{item:"MongoDB",percent:"50"}))}),k=(a(40),function(){return l.a.createElement("div",{id:"about",className:"section"},l.a.createElement(v.a,{left:!0},l.a.createElement("h1",null,"About Me"),l.a.createElement("div",{className:"title-line"})),l.a.createElement("div",{className:"about-info"},l.a.createElement(v.a,{up:!0},l.a.createElement("div",{className:"personal"},l.a.createElement("img",{src:"./images/profile-pic.png",alt:"Jake Burton"}),l.a.createElement("h3",null,"Who am I?"),l.a.createElement("p",null,"I am a web developer in Greenville, SC. Hoping to improve my skills and gain more professional experience. Always looking to learn and challenge myself with new technologies."))),l.a.createElement(N,null)))}),w=(a(42),function(){return l.a.createElement("div",{id:"resume",className:"section"},l.a.createElement(v.a,{left:!0},l.a.createElement("h1",null,"Resume"),l.a.createElement("div",{className:"title-line"})),l.a.createElement(v.a,{up:!0},l.a.createElement("h3",null,"You can download my resume here :"),l.a.createElement("a",{className:"hover-trans",href:"./images/dev_resume.pdf",download:!0},"Download PDF ",l.a.createElement("i",{className:"fas fa-download"}))))}),y=[{name:"Newflix",tech:"React.js",pic:"./images/newflix-shot.jpg",pos:"10",about:"A simple front-end only version of the Netflix layout. Any user can browse through the original categories, or search any title or actor. Using The Movie Database API, the app can display thousands of movies, tv shows, and persons in the industry.",link:"https://jburto94.github.io/newflix",github:"https://github.com/jburto94/newflix"},{name:"Get Healthy with Greg",tech:"Pure JavaScript + Custom CSS",pic:"./images/get-healthy-shot.jpg",pos:"50",about:"This is an extensive, yet sleak personal fitness website template. I built it using photos of a friend who is a certified personal trainer. It has everything a trainer would need and can be seen perfectly on any device.",link:"https://jburto94.github.io/get-healthy-with-greg",github:"https://github.com/jburto94/get-healthy-with-greg"},{name:"Calculator",tech:"React.js",pic:"./images/calculator-shot.jpg",pos:"50",about:"This calculator can do any basic arithmatic. I built it as a project while going through FreeCodeCamp's React section.",link:"https://jburto94.github.io/react-calculator",github:"https://github.com/jburto94/react-calculator"},{name:"Pomodoro Timer",tech:"React.js",pic:"./images/pomodoro-shot.jpg",pos:"50",about:"A pomodoro timer, that has adjustable timer and break sessions. This project was built while I was following along with FreeCodeCamp's React curriculum.",link:"https://jburto94.github.io/pomodoro-timer",github:"https://github.com/jburto94/pomodoro-timer"},{name:"IMDb Watchlist Movie Generator",tech:"Pure JavaScript",pic:"./images/imdb-random-shot.jpg",pos:"35",about:"This Chrome extension was built to help IMDb users with a large watchlist, decide on their next movie. By DOM scraping, the extension generates one random movie from the user's watchlist and displays that movie in their browser for them.",link:"https://chrome.google.com/webstore/detail/imdb-watchlist-random-mov/jlcigechjendaoibkekbdhgpgnndcool",github:"https://github.com/jburto94/imdb-watchlist-movie-generator"},{name:"Southern Pet Market",tech:"JavaScript + SASS",pic:"./images/southern-pet-shot.jpg",pos:"50",about:"An information website for an independent pet supply shop and salon. Completely responsive to any size of device, and easy on the eyes with it's simplistic layout.",link:"https://jburto94.github.io/southern-pet",github:"https://github.com/jburto94/southern-pet"}],C=a(16),S=(a(52),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onOpenModal=function(){a.setState({open:!0})},a.onCloseModal=function(){a.setState({open:!1})},a.state={open:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.tech,n=e.pic,r=e.pos,c=e.about,o=e.link,i=e.github,s=this.state.open,m={background:"url(".concat(n,") no-repeat ").concat(r,"% 0%"),backgroundSize:"cover"};return l.a.createElement("div",{className:"project",style:m},l.a.createElement("div",{className:"project-cover hover-trans"},l.a.createElement("div",{className:"project-info"},l.a.createElement("h3",null,t),l.a.createElement("h5",null,a)),l.a.createElement("button",{className:"learn-btn hover-trans",onClick:this.onOpenModal},"Learn More"),l.a.createElement(C.a,{open:s,onClose:this.onCloseModal,center:!0},l.a.createElement("div",{className:"modal"},l.a.createElement("img",{src:n,alt:t}),l.a.createElement("h3",null,t),l.a.createElement("p",{className:"about-project"},c),l.a.createElement("div",{className:"project-links"},l.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"hover-trans"},l.a.createElement("span",null,"See the code ",l.a.createElement("i",{className:"fas fa-external-link-alt"}))),l.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"hover-trans"},l.a.createElement("span",null,"See it in action ",l.a.createElement("i",{className:"fas fa-external-link-alt"}))))))))}}]),t}(n.Component)),x=(a(54),function(){var e=y.map(function(e){return l.a.createElement("div",{className:"proj"},l.a.createElement(S,{name:e.name,tech:e.tech,pic:e.pic,pos:e.pos,about:e.about,link:e.link,github:e.github}),l.a.createElement("div",{className:"project-on-mobile"},l.a.createElement("h3",null,e.name),l.a.createElement("p",{className:"about-project"},e.about),l.a.createElement("div",{className:"project-links"},l.a.createElement("a",{href:e.github,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",null,"See the code ",l.a.createElement("i",{className:"fas fa-external-link-alt"}))),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"hover-trans"},l.a.createElement("span",null,"See it in action ",l.a.createElement("i",{className:"fas fa-external-link-alt"}))))))});return l.a.createElement("div",{className:"projects"},e)}),O=(a(56),function(){return l.a.createElement("div",{id:"portfolio",className:"section"},l.a.createElement(v.a,{left:!0},l.a.createElement("h1",null,"Projects"),l.a.createElement("div",{className:"title-line"})),l.a.createElement(v.a,{right:!0},l.a.createElement(x,null)))}),M=(a(58),function(){return l.a.createElement("div",{id:"contact",className:"section"},l.a.createElement(v.a,{left:!0},l.a.createElement("h1",null,"Contact"),l.a.createElement("div",{className:"title-line"})),l.a.createElement(v.a,{up:!0},l.a.createElement("div",{className:"contact-info"},l.a.createElement("div",null,l.a.createElement("a",{href:"mailto:jburton114@yahoo.com.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{class:"far fa-envelope fa-2x"}))),l.a.createElement("div",null,l.a.createElement("a",{href:"tel:+18647046471"},l.a.createElement("i",{class:"fas fa-phone fa-2x"}))),l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/jburto94",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{class:"fab fa-github fa-2x"}))),l.a.createElement("div",null,l.a.createElement("a",{href:"https://codepen.io/jburton94/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{class:"fab fa-codepen fa-2x"}))))))}),I=(a(60),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement(d,null),l.a.createElement(k,null),l.a.createElement(w,null),l.a.createElement(O,null),l.a.createElement(M,null))}}]),t}(n.Component));c.a.render(l.a.createElement(I,null),document.getElementById("root"))}},[[20,2,1]]]);
//# sourceMappingURL=main.53b5dccf.chunk.js.map