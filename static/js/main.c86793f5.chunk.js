(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(7),o=a.n(s),l=(a(17),a(28));a(18);var c=function(e){let{title:t,year:a,summary:n,poster:s,genres:o}=e;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:t,title:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},t),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},o.map((e,t)=>r.a.createElement("li",{key:t,className:"movie__genre"},e))),r.a.createElement("p",{className:"movie_summary"},n.slice(0,180),"...")))};a(19);var i=class extends r.a.Component{constructor(){super(...arguments),this.state={isLoading:!0,movies:[]},this.getMovies=(async()=>{const{data:{data:{movies:e}}}=await l.a.get("https:yts-proxy.now.sh/list_movies.json?sort_by=rating");this.setState({movies:e,isLoading:!1})})}componentDidMount(){this.getMovies()}render(){const{isLoading:e,movies:t}=this.state;return r.a.createElement("section",{className:"container"},e?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map(e=>r.a.createElement(c,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres}))))}};a(24);var m=function(){return r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,'"MaruON Web Page\uc5d0 \uc624\uc2e0 \uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4. \ud504\ub85c\ub355\uc158 \ub9c8\ub8e8\uc628\uc740 \uc5b8\uc81c\ub098 \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \uc6b0\uc120\uc73c\ub85c \uc0dd\uac01\ud569\ub2c8\ub2e4."'),r.a.createElement("span",null,"- \ud504\ub85c\ub355\uc158\ub9c8\ub8e8\uc628 \ub300\ud45c \uc784 \ud76c \uc131"))};var u=function(){return r.a.createElement("h2",null,"\ud398\uc774\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")};a(25);var d=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("a",{href:"/"},"Home"),r.a.createElement("br",null),r.a.createElement("a",{href:"/about"},"About"))))};var v=class extends n.Component{constructor(e){super(e),this.state={currentPath:window.location.pathname}}componentDidMount(){window.onpopstate=(()=>{this.setState({currentPath:window.location.pathname})});const e=window.location.pathname;"/"===e||"/about"===e?this.setState({currentPath:e}):(this.setState({currentPath:"/notfound"}),window.history.pushState(null,"","/notfound"))}render(){const{currentPath:e}=this.state;let t;switch(e){case"/":t=r.a.createElement(i,null);break;case"/about":t=r.a.createElement(m,null);break;default:t=r.a.createElement(u,null)}return r.a.createElement("div",null,r.a.createElement(d,null),t)}};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(v,null))},8:function(e,t,a){e.exports=a(26)}},[[8,1,2]]]);
//# sourceMappingURL=main.c86793f5.chunk.js.map