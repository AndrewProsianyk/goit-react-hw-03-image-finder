(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1Bbqk",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3XuxI"}},22:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1GhKj"}},23:function(e,t,a){e.exports={button:"Button_button__dg0H_"}},25:function(e,t,a){e.exports={loader:"Loader_loader__2hnhJ"}},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1iQSg",SearchForm:"Searchbar_SearchForm__W-atw",SearchFormButton:"Searchbar_SearchFormButton__9GyTl",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2GWT3",SearchFormInput:"Searchbar_SearchFormInput__3Clyb"}},70:function(e,t,a){e.exports={App:"App_App__3Nr68",Overlay:"App_Overlay__3TCch",Modal:"App_Modal__SR03G"}},71:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(20),o=a.n(c),s=a(11),i=a(5),u=a(6),l=a(8),h=a(7),m=a(21),g=a.n(m),b=function(e){var t=e.searchQuery,a=void 0===t?"":t,r=e.currentPage,n=void 0===r?1:r,c=e.pageSize,o=void 0===c?12:c;return g.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(n,"&key=").concat("21944568-357b711266e3368e889ab4e4f","&image_type=photo&orientation=horizontal&per_page=").concat(o)).then((function(e){return e.data.hits}))},p=a(4),d=a.n(p),j=a(0),f=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.inputChange=function(t){e.setState({query:t.currentTarget.value})},e.inputSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:d.a.Searchbar,children:Object(j.jsxs)("form",{className:d.a.SearchForm,onSubmit:this.inputSubmit,children:[Object(j.jsx)("button",{type:"submit",className:d.a.SearchFormButton,children:Object(j.jsx)("span",{className:d.a.SearchFormButtonLabel,children:"Search"})}),Object(j.jsx)("input",{className:d.a.SearchFormInput,type:"text",value:this.state.query,onChange:this.inputChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.Component),y=a(10),O=a.n(y),_=function(e){var t=e.webformatURL,a=e.onClick,r=e.tags;return Object(j.jsx)("li",{className:O.a.ImageGalleryItem,children:Object(j.jsx)("img",{src:t,alt:r,className:O.a.ImageGalleryItemImage,onClick:a})})},S=a(22),I=a.n(S),x=function(e){var t=e.hits,a=e.onOpenModalImg;return Object(j.jsx)("ul",{className:I.a.ImageGallery,children:t.map((function(e){var t=e.id,r=e.webformatURL,n=e.LargeImageURL;return Object(j.jsx)("li",{children:Object(j.jsx)(_,{webformatURL:r,onClick:function(){return a(n)}})},t)}))})},v=function(){return Object(j.jsx)("div",{className:"Overlay",children:Object(j.jsx)("div",{className:"Modal",children:Object(j.jsx)("img",{src:"",alt:""})})})},L=a(23),w=a.n(L),C=function(e){var t=e.onClick;return Object(j.jsx)("button",{className:w.a.button,type:"button",onClick:t,children:"Load more"})},G=a(24),F=a.n(G),M=a(25),N=a.n(M),k=(a(69),function(){return Object(j.jsx)(F.a,{type:"ThreeDots",color:"#3f51b5",className:N.a.loader})}),Q=(a(70),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={hits:[],searchQuery:"",currentPage:1,isLoading:!1,showModal:!1,tags:"",error:"",largeImageURL:""},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,hits:[],error:null})},e.fetchHits=function(){var t=e.state,a={searchQuery:t.searchQuery,currentPage:t.currentPage};e.setState({isLoading:!0}),b(a).then((function(t){e.setState((function(e){return{hits:[].concat(Object(s.a)(e.hits),Object(s.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:"No pictures found"})})).finally((function(){return e.setState({isLoading:!1})}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onOpenModalImg=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.setState({largeImageURL:t}),e.toggleModal()},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchHits(),2!==this.state.searchQuery&&t.currentPage!==this.state.currentPage&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.hits,a=e.isLoading,r=e.showModal,n=e.largeImageURL,c=e.tags,o=e.error;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{onSubmit:this.onChangeQuery}),o&&Object(j.jsx)("p",{children:o}),Object(j.jsx)(x,{hits:t,onOpenModalImg:this.onOpenModalImg}),a&&Object(j.jsx)(k,{}),t.length>11&&!a&&Object(j.jsx)(C,{onClick:this.fetchHits}),r&&Object(j.jsx)(v,{children:Object(j.jsx)("img",{src:n,alt:c})})]})}}]),a}(r.Component));o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(Q,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.150caf92.chunk.js.map