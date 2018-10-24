(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{1565:function(e,t,n){"use strict";n.r(t);var o,r=n(534),a=n(557),i=n(550),s=n(567),l=n(536),c=n(7),u=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(e){function t(t){var n=e.call(this,t)||this;return n.handleSubmit=function(){return n.props.onSubmit({description:n.state.description,name:n.state.name}).then(n.props.onClose)},n.handleDescriptionChange=function(e){n.setState({description:e.currentTarget.value})},n.handleNameChange=function(e){n.setState({name:e.currentTarget.value})},n.state={description:t.group&&t.group.description||"",name:t.group&&t.group.name||""},n}return u(t,e),t.prototype.render=function(){var e=this;return r.createElement(s.a,{header:this.props.header,onClose:this.props.onClose,onSubmit:this.handleSubmit},function(t){var n=t.onCloseClick,o=t.onFormSubmit,a=t.submitting;return r.createElement("form",{onSubmit:o},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,e.props.header)),r.createElement("div",{className:"modal-body"},r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"create-group-name"},Object(c.l)("name"),r.createElement("em",{className:"mandatory"},"*")),r.createElement("input",{autoFocus:!0,id:"create-group-name",maxLength:255,name:"name",onChange:e.handleNameChange,required:!0,size:50,type:"text",value:e.state.name})),r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"create-group-description"},Object(c.l)("description")),r.createElement("textarea",{id:"create-group-description",name:"description",onChange:e.handleDescriptionChange,value:e.state.description}))),r.createElement("footer",{className:"modal-foot"},r.createElement(i.a,{className:"spacer-right",loading:a}),r.createElement(l.f,{disabled:a},e.props.confirmButtonText),r.createElement(l.e,{onClick:n},Object(c.l)("cancel"))))})},t}(r.PureComponent),d=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={createModal:!1},t.handleCreateClick=function(){t.setState({createModal:!0})},t.handleClose=function(){t.mounted&&t.setState({createModal:!1})},t.handleSubmit=function(e){return t.props.onCreate(e)},t}return d(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return r.createElement(r.Fragment,null,r.createElement("header",{className:"page-header",id:"groups-header"},r.createElement("h1",{className:"page-title"},Object(c.l)("user_groups.page")),r.createElement(i.a,{loading:this.props.loading}),r.createElement("div",{className:"page-actions"},r.createElement(l.a,{id:"groups-create",onClick:this.handleCreateClick},Object(c.l)("groups.create_group"))),r.createElement("p",{className:"page-description"},Object(c.l)("user_groups.page.description"))),this.state.createModal&&r.createElement(p,{confirmButtonText:Object(c.l)("create"),header:Object(c.l)("groups.create_group"),onClose:this.handleClose,onSubmit:this.handleSubmit}))},t}(r.PureComponent),h=n(551),f=n.n(h);function g(e){var t=e.group,n=e.onClose,o=e.onSubmit,a=Object(c.l)("groups.delete_group");return r.createElement(s.a,{header:a,onClose:n,onSubmit:o},function(e){var n=e.onCloseClick,o=e.onFormSubmit,s=e.submitting;return r.createElement("form",{onSubmit:o},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,a)),r.createElement("div",{className:"modal-body"},Object(c.m)("groups.delete_group.confirmation",t.name)),r.createElement("footer",{className:"modal-foot"},r.createElement(i.a,{className:"spacer-right",loading:s}),r.createElement(l.f,{className:"button-red",disabled:s},Object(c.l)("delete")),r.createElement(l.e,{disabled:s,onClick:n},Object(c.l)("cancel"))))})}var b=n(571),y=n.n(b),v=n(633),E=n.n(v),C=n(548),O=n(690),_=n(595),j=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),S=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0,users:[],selectedUsers:[]},t.handleSearch=function(e,n){return Object(_.d)({name:t.props.group.name,organization:t.props.organization,ps:100,q:""!==e?e:void 0,selected:n}).then(function(e){t.mounted&&t.setState({loading:!1,users:e.users,selectedUsers:e.users.filter(function(e){return e.selected}).map(function(e){return e.login})})},function(){t.mounted&&t.setState({loading:!1})})},t.handleSelect=function(e){return Object(_.a)({name:t.props.group.name,login:e,organization:t.props.organization}).then(function(){t.mounted&&t.setState(function(t){return{selectedUsers:t.selectedUsers.concat([e])}})})},t.handleUnselect=function(e){return Object(_.e)({name:t.props.group.name,login:e,organization:t.props.organization}).then(function(){t.mounted&&t.setState(function(t){return{selectedUsers:y()(t.selectedUsers,e)}})})},t.renderElement=function(e){var n=E()(t.state.users,{login:e});return r.createElement("div",{className:"select-list-list-item"},void 0===n?e:r.createElement(r.Fragment,null,n.name,r.createElement("br",null),r.createElement("span",{className:"note"},n.login)))},t}return j(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.handleSearch("",O.a.Selected)},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=Object(c.l)("users.update");return r.createElement(C.a,{contentLabel:e,onRequestClose:this.props.onClose},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,e)),r.createElement("div",{className:"modal-body"},r.createElement(i.a,{loading:this.state.loading},r.createElement(O.b,{elements:this.state.users.map(function(e){return e.login}),onSearch:this.handleSearch,onSelect:this.handleSelect,onUnselect:this.handleUnselect,renderElement:this.renderElement,selectedElements:this.state.selectedUsers}))),r.createElement("footer",{className:"modal-foot"},r.createElement(l.e,{onClick:this.props.onClose},Object(c.l)("Done"))))},t}(r.PureComponent),N=n(770),k=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),w=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={modal:!1},t.handleMembersClick=function(){t.setState({modal:!0})},t.handleModalClose=function(){t.mounted&&(t.setState({modal:!1}),t.props.onEdit())},t}return k(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return r.createElement(r.Fragment,null,r.createElement(l.b,{className:"button-small",onClick:this.handleMembersClick},r.createElement(N.a,null)),this.state.modal&&r.createElement(S,{group:this.props.group,onClose:this.handleModalClose,organization:this.props.organization}))},t}(r.PureComponent),P=n(581),q=n(17),x=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),z=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},M=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={deleteForm:!1,editForm:!1},t.handleDeleteClick=function(){t.setState({deleteForm:!0})},t.handleEditClick=function(){t.setState({editForm:!0})},t.closeDeleteForm=function(){t.mounted&&t.setState({deleteForm:!1})},t.closeEditForm=function(){t.mounted&&t.setState({editForm:!1})},t.handleDeleteFormSubmit=function(){return t.props.onDelete(t.props.group.name)},t.handleEditFormSubmit=function(e){var n=e.name,o=e.description,r=t.props.group;return t.props.onEdit(z({description:o,id:r.id},Object(q.omitNil)({name:n!==r.name?n:void 0})))},t}return x(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.group;return r.createElement("tr",{"data-id":e.id},r.createElement("td",{className:" width-20"},r.createElement("strong",{className:"js-group-name"},e.name),e.default&&r.createElement("span",{className:"little-spacer-left"},"(",Object(c.l)("default"),")")),r.createElement("td",{className:"width-10"},r.createElement("div",{className:"display-flex-center"},r.createElement("span",{className:"spacer-right"},e.membersCount),!e.default&&r.createElement(w,{group:e,onEdit:this.props.onEditMembers,organization:this.props.organization}))),r.createElement("td",{className:"width-40"},r.createElement("span",{className:"js-group-description"},e.description)),r.createElement("td",{className:"thin nowrap text-right"},!e.default&&r.createElement(P.c,null,r.createElement(P.b,{className:"js-group-update",onClick:this.handleEditClick},Object(c.l)("update_details")),r.createElement(P.a,null),r.createElement(P.b,{className:"js-group-delete",destructive:!0,onClick:this.handleDeleteClick},Object(c.l)("delete")))),this.state.deleteForm&&r.createElement(g,{group:e,onClose:this.closeDeleteForm,onSubmit:this.handleDeleteFormSubmit}),this.state.editForm&&r.createElement(p,{confirmButtonText:Object(c.l)("update_verb"),group:e,header:Object(c.l)("groups.update_group"),onClose:this.closeEditForm,onSubmit:this.handleEditFormSubmit}))},t}(r.PureComponent);function F(e){return r.createElement("div",{className:"boxed-group boxed-group-inner"},r.createElement("table",{id:"groups-list",className:"data zebra zebra-hover"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null),r.createElement("th",{className:"nowrap"},Object(c.l)("members")),r.createElement("th",{className:"nowrap"},Object(c.l)("description")),r.createElement("th",null))),r.createElement("tbody",null,e.showAnyone&&r.createElement("tr",{className:"js-anyone",key:"anyone"},r.createElement("td",{className:"width-20"},r.createElement("strong",{className:"js-group-name"},Object(c.l)("groups.anyone"))),r.createElement("td",{className:"width-10"}),r.createElement("td",{className:"width-40",colSpan:2},r.createElement("span",{className:"js-group-description"},Object(c.l)("user_groups.anyone.description")))),f()(e.groups,function(e){return e.name.toLowerCase()}).map(function(t){return r.createElement(M,{group:t,key:t.id,onDelete:e.onDelete,onEdit:e.onEdit,onEditMembers:e.onEditMembers,organization:e.organization})}))))}var L=n(694),D=n(555),U=n(575),A=n(584),T=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),B=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e};t.default=Object(L.a)(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0,query:""},t.makeFetchGroupsRequest=function(e){return t.setState({loading:!0}),Object(_.f)(B({organization:t.organization,q:t.state.query},e))},t.stopLoading=function(){t.mounted&&t.setState({loading:!1})},t.fetchGroups=function(e){t.makeFetchGroupsRequest(e).then(function(e){var n=e.groups,o=e.paging;t.mounted&&t.setState({groups:n,loading:!1,paging:o})},t.stopLoading)},t.fetchMoreGroups=function(){var e=t.state.paging;e&&e.total>e.pageIndex*e.pageSize&&t.makeFetchGroupsRequest({p:e.pageIndex+1}).then(function(e){var n=e.groups,o=e.paging;t.mounted&&t.setState(function(e){var t=e.groups;return{groups:(void 0===t?[]:t).concat(n),loading:!1,paging:o}})},t.stopLoading)},t.search=function(e){t.fetchGroups({q:e}),t.setState({query:e})},t.refresh=function(){t.fetchGroups({q:t.state.query})},t.handleCreate=function(e){return Object(_.b)(B({},e,{organization:t.organization})).then(function(e){t.mounted&&t.setState(function(t){var n=t.groups;return{groups:(void 0===n?[]:n).concat([e])}})})},t.handleDelete=function(e){return Object(_.c)({name:e,organization:t.organization}).then(function(){t.mounted&&t.setState(function(t){var n=t.groups;return{groups:(void 0===n?[]:n).filter(function(t){return t.name!==e})}})})},t.handleEdit=function(e){return Object(_.g)(e).then(function(){t.mounted&&t.setState(function(t){var n=t.groups;return{groups:(void 0===n?[]:n).map(function(t){return t.id===e.id?B({},t,e):t})}})})},t}return T(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchGroups()},t.prototype.componentWillUnmount=function(){this.mounted=!1},Object.defineProperty(t.prototype,"organization",{get:function(){return this.props.organization&&this.props.organization.key},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this.state,t=e.groups,n=e.loading,o=e.paging,i=e.query,s=void 0===this.props.organization&&"anyone".includes(i.toLowerCase());return r.createElement(r.Fragment,null,r.createElement(D.a,{suggestions:"user_groups"}),r.createElement(a.Helmet,{title:Object(c.l)("user_groups.page")}),r.createElement("div",{className:"page page-limited",id:"groups-page"},r.createElement(m,{loading:n,onCreate:this.handleCreate}),r.createElement(A.a,{className:"big-spacer-bottom",id:"groups-search",minLength:2,onChange:this.search,placeholder:Object(c.l)("search.search_by_name"),value:i}),void 0!==t&&r.createElement(F,{groups:t,onDelete:this.handleDelete,onEdit:this.handleEdit,onEditMembers:this.refresh,organization:this.organization,showAnyone:s}),void 0!==t&&void 0!==o&&r.createElement("div",{id:"groups-list-footer"},r.createElement(U.a,{count:s?t.length+1:t.length,loadMore:this.fetchMoreGroups,ready:!n,total:s?o.total+1:o.total}))))},t}(r.PureComponent))},548:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n(534),r=n(570),a=n(535),i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e};function s(e){return o.createElement(r,i({className:a("modal",{"modal-medium":e.medium,"modal-large":e.large}),isOpen:!0,overlayClassName:"modal-overlay"},e))}r.setAppElement("#content")},555:function(e,t,n){"use strict";var o,r=n(534),a=n(538),i=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.componentDidMount=function(){this.context.suggestions.addSuggestions(this.props.suggestions)},t.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.context.suggestions.removeSuggestions(this.props.suggestions),this.context.suggestions.addSuggestions(e.suggestions))},t.prototype.componentWillUnmount=function(){this.context.suggestions.removeSuggestions(this.props.suggestions)},t.prototype.render=function(){return null},t.contextTypes={suggestions:a.object.isRequired},t}(r.PureComponent);t.a=s},567:function(e,t,n){"use strict";var o,r=n(534),a=n(548),i=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={submitting:!1},t.stopSubmitting=function(){t.mounted&&t.setState({submitting:!1})},t.handleCloseClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.props.onClose()},t.handleFormSubmit=function(e){e.preventDefault(),t.submit()},t.handleSubmitClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.submit()},t.submit=function(){var e=t.props.onSubmit();e&&(t.setState({submitting:!0}),e.then(t.stopSubmitting,t.stopSubmitting))},t}return i(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return r.createElement(a.a,{contentLabel:this.props.header,onRequestClose:this.props.onClose},this.props.children({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},t}(r.Component);t.a=s},568:function(e,t,n){"use strict";var o,r=n(534),a=n(535),i=n(550),s=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.disabled||t.props.onCheck(!t.props.checked,t.props.id)},t}return s(t,e),t.prototype.render=function(){var e=a("icon-checkbox",{"icon-checkbox-checked":this.props.checked,"icon-checkbox-single":this.props.thirdState,"icon-checkbox-disabled":this.props.disabled});return this.props.children?r.createElement("a",{className:a("link-checkbox",this.props.className,{note:this.props.disabled,disabled:this.props.disabled}),href:"#",id:this.props.id,onClick:this.handleClick},r.createElement(i.a,{loading:Boolean(this.props.loading)},r.createElement("i",{className:e})),this.props.children):this.props.loading?r.createElement(i.a,null):r.createElement("a",{className:a(e,this.props.className),href:"#",id:this.props.id,onClick:this.handleClick})},t.defaultProps={thirdState:!1},t}(r.PureComponent);t.a=l},575:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n(534),r=n(535),a=n(7),i=n(546),s=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n};function l(e){var t=e.ready,n=void 0===t||t,l=s(e,["ready"]),c=l.total&&l.total>l.count,u=o.createElement("a",{className:"spacer-left",href:"#",onClick:function(e){e.preventDefault(),e.currentTarget.blur(),l.loadMore&&l.loadMore()}},Object(a.l)("show_more")),p=r("spacer-top note text-center",{"new-loading":!n},l.className);return o.createElement("footer",{className:p},Object(a.m)("x_of_y_shown",Object(i.formatMeasure)(l.count,"INT",null),Object(i.formatMeasure)(l.total,"INT",null)),null!=l.loadMore&&c?u:null)}},577:function(e,t,n){var o=n(615),r=1/0,a=1.7976931348623157e308;e.exports=function(e){return e?(e=o(e))===r||e===-r?(e<0?-1:1)*a:e==e?e:0:0===e?e:0}},581:function(e,t,n){"use strict";var o=n(534),r=n(535),a=n(541),i=n(556),s=n(563),l=n(537);function c(e){var t=e.className,n=e.fill,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?14:a;return o.createElement(l.a,{className:t,size:i,viewBox:"0 0 14 14"},o.createElement("g",{transform:"matrix(0.0364583,0,0,0.0364583,0,-1.16667)"},o.createElement("path",{d:"M256,224C256,206.333 249.75,191.25 237.25,178.75C224.75,166.25 209.667,160 192,160C174.333,160 159.25,166.25 146.75,178.75C134.25,191.25 128,206.333 128,224C128,241.667 134.25,256.75 146.75,269.25C159.25,281.75 174.333,288 192,288C209.667,288 224.75,281.75 237.25,269.25C249.75,256.75 256,241.667 256,224ZM384,196.75L384,252.25C384,254.25 383.333,256.167 382,258C380.667,259.833 379,260.917 377,261.25L330.75,268.25C327.583,277.25 324.333,284.833 321,291C326.833,299.333 335.75,310.833 347.75,325.5C349.417,327.5 350.25,329.583 350.25,331.75C350.25,333.917 349.5,335.833 348,337.5C343.5,343.667 335.25,352.667 323.25,364.5C311.25,376.333 303.417,382.25 299.75,382.25C297.75,382.25 295.583,381.5 293.25,380L258.75,353C251.417,356.833 243.833,360 236,362.5C233.333,385.167 230.917,400.667 228.75,409C227.583,413.667 224.583,416 219.75,416L164.25,416C161.917,416 159.875,415.292 158.125,413.875C156.375,412.458 155.417,410.667 155.25,408.5L148.25,362.5C140.083,359.833 132.583,356.75 125.75,353.25L90.5,380C88.833,381.5 86.75,382.25 84.25,382.25C81.917,382.25 79.833,381.333 78,379.5C57,360.5 43.25,346.5 36.75,337.5C35.583,335.833 35,333.917 35,331.75C35,329.75 35.667,327.833 37,326C39.5,322.5 43.75,316.958 49.75,309.375C55.75,301.792 60.25,295.917 63.25,291.75C58.75,283.417 55.333,275.167 53,267L7.25,260.25C5.083,259.917 3.333,258.875 2,257.125C0.667,255.375 0,253.417 0,251.25L0,195.75C0,193.75 0.667,191.833 2,190C3.333,188.167 4.917,187.083 6.75,186.75L53.25,179.75C55.583,172.083 58.833,164.417 63,156.75C56.333,147.25 47.417,135.75 36.25,122.25C34.583,120.25 33.75,118.25 33.75,116.25C33.75,114.583 34.5,112.667 36,110.5C40.333,104.5 48.542,95.542 60.625,83.625C72.708,71.708 80.583,65.75 84.25,65.75C86.417,65.75 88.583,66.583 90.75,68.25L125.25,95C132.583,91.167 140.167,88 148,85.5C150.667,62.833 153.083,47.333 155.25,39C156.417,34.333 159.417,32 164.25,32L219.75,32C222.083,32 224.125,32.708 225.875,34.125C227.625,35.542 228.583,37.333 228.75,39.5L235.75,85.5C243.917,88.167 251.417,91.25 258.25,94.75L293.75,68C295.25,66.5 297.25,65.75 299.75,65.75C301.917,65.75 304,66.583 306,68.25C327.5,88.083 341.25,102.25 347.25,110.75C348.417,112.083 349,113.917 349,116.25C349,118.25 348.333,120.167 347,122C344.5,125.5 340.25,131.042 334.25,138.625C328.25,146.208 323.75,152.083 320.75,156.25C325.083,164.583 328.5,172.75 331,180.75L376.75,187.75C378.917,188.083 380.667,189.125 382,190.875C383.333,192.625 384,194.583 384,196.75Z",style:{fill:r}})))}var u=n(536);n.d(t,"c",function(){return m}),n.d(t,"b",function(){return h}),n.d(t,"a",function(){return f});var p,d=(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}p(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function m(e){return o.createElement(i.b,{className:e.className,onOpen:e.onOpen,overlay:o.createElement("ul",{className:"menu"},e.children)},o.createElement(u.a,{className:r("dropdown-toggle",e.toggleClassName,{"button-small":e.small})},o.createElement(c,{size:e.small?12:14}),o.createElement(s.a,{className:"little-spacer-left"})))}var h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onClick&&t.props.onClick()},t}return d(t,e),t.prototype.render=function(){var e=r(this.props.className,{"text-danger":this.props.destructive});return this.props.download&&"string"==typeof this.props.to?o.createElement("li",null,o.createElement("a",{className:e,download:this.props.download,href:this.props.to,id:this.props.id},this.props.children)):this.props.to?o.createElement("li",null,o.createElement(a.Link,{className:e,id:this.props.id,to:this.props.to},this.props.children)):o.createElement("li",null,o.createElement("a",{className:e,href:"#",id:this.props.id,onClick:this.handleClick},this.props.children))},t}(o.PureComponent);function f(){return o.createElement("li",{className:"divider"})}},592:function(e,t,n){var o=n(577);e.exports=function(e){var t=o(e),n=t%1;return t==t?n?t-n:t:0}},595:function(e,t,n){"use strict";n.d(t,"f",function(){return a}),n.d(t,"d",function(){return i}),n.d(t,"a",function(){return s}),n.d(t,"e",function(){return l}),n.d(t,"b",function(){return c}),n.d(t,"g",function(){return u}),n.d(t,"c",function(){return p});var o=n(17),r=n(552);function a(e){return Object(o.getJSON)("/api/user_groups/search",e).catch(r.a)}function i(e){return Object(o.getJSON)("/api/user_groups/users",e).catch(r.a)}function s(e){return Object(o.post)("/api/user_groups/add_user",e).catch(r.a)}function l(e){return Object(o.post)("/api/user_groups/remove_user",e).catch(r.a)}function c(e){return Object(o.postJSON)("/api/user_groups/create",e).then(function(e){return e.group},r.a)}function u(e){return Object(o.post)("/api/user_groups/update",e).catch(r.a)}function p(e){return Object(o.post)("/api/user_groups/delete",e).catch(r.a)}},607:function(e,t){e.exports=function(e,t,n,o){for(var r=e.length,a=n+(o?1:-1);o?a--:++a<r;)if(t(e[a],a,e))return a;return-1}},625:function(e,t,n){var o=n(63),r=n(668),a=n(65);e.exports=function(e){return function(t,n,i){var s=Object(t);if(!r(t)){var l=o(n,3);t=a(t),n=function(e){return l(s[e],e,s)}}var c=e(t,n,i);return c>-1?s[l?t[c]:c]:void 0}}},632:function(e,t,n){var o=n(607),r=n(63),a=n(592),i=Math.max;e.exports=function(e,t,n){var s=null==e?0:e.length;if(!s)return-1;var l=null==n?0:a(n);return l<0&&(l=i(s+l,0)),o(e,r(t,3),l)}},633:function(e,t,n){var o=n(625)(n(632));e.exports=o},636:function(e,t,n){"use strict";var o,r=n(534),a=n(535),i=n(543),s=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleChange=function(e){var n=e.currentTarget.value;t.props.onCheck(n)},t.renderOption=function(e){var n=e.value===t.props.value,o=t.props.name+"__"+e.value;return r.createElement("li",{key:e.value},r.createElement("input",{type:"radio",disabled:e.disabled,name:t.props.name,value:e.value,id:o,checked:n,onChange:t.handleChange}),r.createElement(i.a,{overlay:e.tooltip||void 0},r.createElement("label",{htmlFor:o},e.label)))},t}return s(t,e),t.prototype.render=function(){return r.createElement("ul",{className:a("radio-toggle",this.props.className)},this.props.options.map(this.renderOption))},t.defaultProps={disabled:!1,value:null},t}(r.PureComponent);t.a=l},690:function(e,t,n){"use strict";var o,r=n(534),a=n(535),i=n(568),s=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1},t.stopLoading=function(){t.mounted&&t.setState({loading:!1})},t.handleCheck=function(e){t.setState({loading:!0}),(e?t.props.onSelect:t.props.onUnselect)(t.props.element).then(t.stopLoading,t.stopLoading)},t}return s(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return r.createElement("li",{className:a({"select-list-list-disabled":this.props.disabled})},r.createElement(i.a,{checked:this.props.selected,className:a("select-list-list-checkbox",{active:this.props.active}),disabled:this.props.disabled,loading:this.state.loading,onCheck:this.handleCheck},r.createElement("span",{className:"little-spacer-left"},this.props.renderElement(this.props.element))))},t}(r.PureComponent),c=n(550),u=n(7),p=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1},t.stopLoading=function(){t.mounted&&t.setState({loading:!1})},t.isDisabled=function(e){return t.props.readOnly||t.props.disabledElements.includes(e)},t.isSelected=function(e){return t.props.selectedElements.includes(e)},t.handleBulkChange=function(e){t.setState({loading:!0}),e?Promise.all(t.props.elements.map(function(e){return t.props.onSelect(e)})).then(t.stopLoading).catch(t.stopLoading):Promise.all(t.props.selectedElements.map(function(e){return t.props.onUnselect(e)})).then(t.stopLoading).catch(t.stopLoading)},t}return p(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.renderBulkSelector=function(){var e=this.props,t=e.elements,n=e.readOnly,o=e.selectedElements;return r.createElement(r.Fragment,null,r.createElement("li",null,r.createElement(i.a,{checked:o.length>0,disabled:this.state.loading||n,onCheck:this.handleBulkChange,thirdState:o.length>0&&t.length!==o.length},r.createElement("span",{className:"big-spacer-left"},Object(u.l)("update_key.bulk_update"),r.createElement(c.a,{className:"spacer-left",loading:this.state.loading,timeout:10})))),r.createElement("li",{className:"divider"}))},t.prototype.render=function(){var e=this,t=this.props,n=t.allowBulkSelection,o=t.elements,i=t.filter,s=o.filter(function(t){if(i===f.All)return!0;var n=e.isSelected(t);return i===f.Selected?n:!n});return r.createElement("div",{className:a("select-list-list-container spacer-top")},r.createElement("ul",{className:"menu"},n&&o.length>0&&i===f.All&&this.renderBulkSelector(),s.map(function(t){return r.createElement(l,{disabled:e.isDisabled(t),element:t,key:t,onSelect:e.props.onSelect,onUnselect:e.props.onUnselect,renderElement:e.props.renderElement,selected:e.isSelected(t)})})))},t}(r.PureComponent),m=n(584),h=n(636);n(705);n.d(t,"a",function(){return f});var f,g=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();!function(e){e.All="all",e.Selected="selected",e.Unselected="deselected"}(f||(f={}));var b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={filter:f.Selected,loading:!1,query:""},t.stopLoading=function(){t.mounted&&t.setState({loading:!1})},t.changeFilter=function(e){t.setState({filter:e,loading:!0}),t.props.onSearch(t.state.query,e).then(t.stopLoading,t.stopLoading)},t.handleQueryChange=function(e){t.setState({loading:!0,query:e}),t.props.onSearch(e,t.getFilter()).then(t.stopLoading,t.stopLoading)},t.getFilter=function(){return""===t.state.query?t.state.filter:f.All},t}return g(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.labelSelected,n=void 0===t?Object(u.l)("selected"):t,o=e.labelUnselected,a=void 0===o?Object(u.l)("unselected"):o,i=e.labelAll,s=void 0===i?Object(u.l)("all"):i,l=this.state.filter,c=""!==this.state.query;return r.createElement("div",{className:"select-list"},r.createElement("div",{className:"display-flex-center"},r.createElement(h.a,{className:"spacer-right",name:"filter",onCheck:this.changeFilter,options:[{disabled:c,label:n,value:f.Selected},{disabled:c,label:a,value:f.Unselected},{disabled:c,label:s,value:f.All}],value:l}),r.createElement(m.a,{autoFocus:!0,loading:this.state.loading,onChange:this.handleQueryChange,placeholder:Object(u.l)("search_verb"),value:this.state.query})),r.createElement(d,{allowBulkSelection:this.props.allowBulkSelection,disabledElements:this.props.disabledElements||[],elements:this.props.elements,filter:this.getFilter(),onSelect:this.props.onSelect,onUnselect:this.props.onUnselect,readOnly:this.props.readOnly,renderElement:this.props.renderElement,selectedElements:this.props.selectedElements}))},t}(r.PureComponent);t.b=b},694:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var o,r=n(534),a=n(544),i=n(541),s=n(545),l=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n};function p(e){var t=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return l(n,t),n.prototype.render=function(){var t=this.props,n=t.customOrganizations,o=t.router,a=u(t,["customOrganizations","router"]);return!a.params.organizationKey&&n?(o.replace("/not_found"),null):r.createElement(e,c({},a))},n.displayName="forSingleOrganization("+e.displayName+")}",n}(r.Component);return Object(a.connect)(function(e){return{customOrganizations:Object(s.areThereCustomOrganizations)(e)}})(Object(i.withRouter)(t))}},704:function(e,t,n){(e.exports=n(540)(!1)).push([e.i,".select-list-container{min-width:500px;box-sizing:border-box}.select-list-control{margin-bottom:10px;box-sizing:border-box}.select-list-list-container{border:1px solid #bfbfbf;box-sizing:border-box;height:400px;overflow:auto}.select-list-list-checkbox i{display:inline-block;vertical-align:middle;margin-right:10px}.select-list-list-disabled{cursor:not-allowed}.select-list-list-disabled>a{pointer-events:none}.select-list-list-item{display:inline-block;vertical-align:middle}",""])},705:function(e,t,n){var o=n(704);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(539)(o,r);o.locals&&(e.exports=o.locals)},770:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n(534),r=n(537);function a(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,i=e.size;return o.createElement(r.a,{className:t,size:i},o.createElement("path",{d:"M2.968 11.274v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM2.968 8.255v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM2.968 5.235v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM15.045 11.274v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177zM2.968 2.216v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM15.045 8.255v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177zM15.045 5.235v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177zM15.045 2.216v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177z",style:{fill:a}}))}}}]);
//# sourceMappingURL=265.8d89291d.chunk.js.map