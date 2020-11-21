(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{107:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(16),o=a.n(l),c=(a(104),a(105),a(106),a(107),a(22)),s=a(23),m=a(25),i=a(24),u=a(21),d=a(157),E=a(158),h=a(159),f=a(160),g=a(161),p=a(162),b=a(163),v=a(164),N=a(184),y=a(165),w=a(166),O=a(167),M=a(168),L=a(169),k=a(170),j=a(9),S="https://confusion-server-1001.herokuapp.com/",C="/confusion",x=a(17),A=a(93),D=a(94),F=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this)).state={isNavOpen:!1},n.toggleNav=n.toggleNav.bind(Object(u.a)(n)),n.toggleModal=n.toggleModal.bind(Object(u.a)(n)),n.handleLogin=n.handleLogin.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen,isModalOpen:!1})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+"\nPassword: "+this.password.value+"\nRemember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(E.a,{onClick:this.toggleNav}),r.a.createElement(h.a,{className:"mr-auto",href:C+"/home"},r.a.createElement("img",{src:"/confusion/logo.png",height:"30",width:"41",alt:"Restorante Con Fusion"})),r.a.createElement(f.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(g.a,{navbar:!0},r.a.createElement(p.a,null,r.a.createElement(j.c,{className:"nav-link",to:C+"/home",style:{fontSize:20}},r.a.createElement(x.e,{style:{verticalAlign:"text-bottom"}}),r.a.createElement("span",null," Home"))),r.a.createElement(p.a,null,r.a.createElement(j.c,{className:"nav-link",to:C+"/aboutus",style:{fontSize:20}},r.a.createElement(A.a,{style:{verticalAlign:"text-bottom"}}),r.a.createElement("span",null," About Us"))),r.a.createElement(p.a,null,r.a.createElement(j.c,{className:"nav-link",to:C+"/menu",style:{fontSize:20}},r.a.createElement(D.a,{style:{verticalAlign:"text-bottom"}}),r.a.createElement("span",null," Menu"))),r.a.createElement(p.a,null,r.a.createElement(j.c,{className:"nav-link",to:C+"/contactus",style:{fontSize:20}},r.a.createElement(x.a,{style:{verticalAlign:"text-bottom"}}),r.a.createElement("span",null," Contact Us")))),r.a.createElement(g.a,{className:"ml-auto",navbar:!0},r.a.createElement(p.a,null,r.a.createElement(b.a,{outline:!0,onClick:this.toggleModal,style:{fontSize:20}},r.a.createElement(x.h,{style:{verticalAlign:"text-bottom"}}),r.a.createElement("span",null," Login"))))))),r.a.createElement(v.a,{style:{backgroundImage:"url(/confusion/assets/images/bg.jpg)"}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante ",r.a.createElement("br",null),"Fusion Taj"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creation will tickle your culinary senses!"))))),r.a.createElement(N.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(y.a,{toggle:this.toggleModal},"Login"),r.a.createElement(w.a,null,r.a.createElement(O.a,{onSubmit:this.handleLogin},r.a.createElement(M.a,null,r.a.createElement(L.a,{htmlFor:"username"},"Username"),r.a.createElement(k.a,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})),r.a.createElement(M.a,null,r.a.createElement(L.a,{htmlFor:"password"},"Password"),r.a.createElement(k.a,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(M.a,{check:!0},r.a.createElement(L.a,{check:!0},r.a.createElement(k.a,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me")),r.a.createElement(b.a,{type:"submit",value:"submit",color:"primary",className:"mt-3"},"Login")))))}}]),a}(n.Component),I=a(48);var T=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(j.b,{to:C+"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(j.b,{to:C+"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(j.b,{to:C+"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(j.b,{to:C+"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"Apollo Bandar",r.a.createElement("br",null),"Colaba, Mumbai - 400001",r.a.createElement("br",null),"India",r.a.createElement("br",null),r.a.createElement(x.g,null)," : +9152 1234 5678",r.a.createElement("br",null),r.a.createElement(x.c,null)," : +9152 8765 4321",r.a.createElement("br",null),r.a.createElement(I.a,null)," :",r.a.createElement("a",{href:"mailto:confusion@food.net"},"\xa0confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon",href:"http://google.com/+"},r.a.createElement(x.d,null)),r.a.createElement("a",{className:"btn btn-social-icon",href:"http://www.facebook.com/profile.php?id="},r.a.createElement(x.b,null)),r.a.createElement("a",{className:"btn btn-social-icon",href:"http://www.linkedin.com/in/"},r.a.createElement(x.f,null)),r.a.createElement("a",{className:"btn btn-social-icon",href:"http://twitter.com/"},r.a.createElement(x.i,null)),r.a.createElement("a",{className:"btn btn-social-icon",href:"http://youtube.com/"},r.a.createElement(x.j,null)),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement(I.a,null))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2020 Ristorante Fusion Taj")))))},R=a(171),_=a(172),P=a(173),q=a(174),H=a(175),U=a(176),W=function(){return r.a.createElement("div",{className:"col-12 mt-3"},r.a.createElement("p",{className:"text-center"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"})),r.a.createElement("p",{className:"text-center"},"Loading. . ."))},Y=a(29);function z(e){var t=e.item,a=e.isLoading,n=e.errMsg;return a?r.a.createElement(W,null):n?r.a.createElement("h4",null,n):r.a.createElement(Y.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(R.a,null,r.a.createElement(_.a,{src:S+t.image,alt:t.name}),r.a.createElement(P.a,null,r.a.createElement(q.a,null,t.name),t.designation?r.a.createElement(H.a,null,t.designation):null,r.a.createElement(U.a,null,t.description))))}var G=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(z,{item:e.dish,isLoading:e.dishesLoading,errMsg:e.dishesErrMsg})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(z,{item:e.promotion,isLoading:e.promosLoading,errMsg:e.promosErrMsg})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(z,{item:e.leader,isLoading:e.leadersLoading,errMsg:e.leadersErrMsg}))))},B=a(177),J=a(178),Z=a(179);function $(e){var t=e.dish;e.onClick;return r.a.createElement(R.a,null,r.a.createElement(j.b,{to:"".concat(C,"/menu/").concat(t._id)},r.a.createElement(_.a,{width:"100%",src:S+t.image,alt:t.name}),r.a.createElement(B.a,null,r.a.createElement(q.a,null,t.name))))}var K=function(e){var t=e.dishes.dishes.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},r.a.createElement($,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(W,null))):e.dishes.errMsg?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMsg))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(J.a,null,r.a.createElement(Z.a,null,r.a.createElement(j.b,{to:"/home"},"Home")),r.a.createElement(Z.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},t))},Q=a(11),V=function(e){return function(t){return!t||t.length<=e}},X=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,t=this;return r.a.createElement("div",null,r.a.createElement(b.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"}," Submit Comment")),r.a.createElement(N.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(y.a,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(w.a,null,r.a.createElement(Q.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)}},r.a.createElement(L.a,{htmlFor:"rating"},"Rating"),r.a.createElement(Q.Control.select,{model:".rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")),r.a.createElement(L.a,{htmlFor:"author",className:"mt-2"},"Your Name"),r.a.createElement(Q.Control.text,{model:".author",id:"author",name:"author",className:"form-control",validators:{minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:V(15)}}),r.a.createElement(Q.Errors,{className:"text-danger",model:".author",show:"touched",messages:{minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}),r.a.createElement(L.a,{htmlFor:"comment",className:"mt-2"},"Comment"),r.a.createElement(Q.Control.textarea,{model:".comment",id:"comment",name:"comment",className:"form-control",rows:"6"}),r.a.createElement(b.a,{type:"submit",value:"submit",color:"primary",className:"mt-3"},"Submit")))))}}]),a}(n.Component);function ee(e){var t=e.dishName,a=e.dishImage,n=e.dishDesc;return null!=t?r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(Y.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(R.a,null,r.a.createElement(_.a,{width:"100%",src:S+a,alt:t}),r.a.createElement(P.a,null,r.a.createElement(q.a,null,t),r.a.createElement(U.a,null,n))))):r.a.createElement("div",null)}function te(e){var t=e.comments,a=e.postComment,n=e.dishId;if(null!=t){var l=t.map((function(e){return r.a.createElement(Y.Fade,{in:!0},r.a.createElement("li",{key:e._id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author,", ",new Date(e.updatedAt).toLocaleString())))}));return r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h4",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(Y.Stagger,{in:!0},l)),r.a.createElement(X,{postComment:a,dishId:n}))}return r.a.createElement("div",null,r.a.createElement(X,{postComment:a,dishId:n}))}var ae=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(W,null))):e.errMsg?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMsg))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(J.a,null,r.a.createElement(Z.a,null,r.a.createElement(j.b,{to:"/home"},"Home")),r.a.createElement(Z.a,null,r.a.createElement(j.b,{to:"/menu"},"Menu")),r.a.createElement(Z.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(ee,{dishName:e.dish.name,dishImage:e.dish.image,dishDesc:e.dish.description}),r.a.createElement(te,{comments:e.dish.comments,postComment:e.postComment,dishId:e.dish._id}))):r.a.createElement("div",null)},ne=a(180),re=a(181),le=function(e){return e&&e.length},oe=function(e){return function(t){return!t||t.length<=e}},ce=function(e){return function(t){return t&&t.length>=e}},se=function(e){return!isNaN(Number(e))},me=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i.test(e)},ie=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this)).handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"handleSubmit",value:function(e){console.log("Current State is : "+JSON.stringify(e)),this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(J.a,null,r.a.createElement(Z.a,null,r.a.createElement(j.b,{to:"/home"},"Home")),r.a.createElement(Z.a,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"Apollo Bandar",r.a.createElement("br",null),"Colaba, Mumbai - 400001",r.a.createElement("br",null),"India",r.a.createElement("br",null),r.a.createElement(x.g,null)," : +9152 1234 5678",r.a.createElement("br",null),r.a.createElement(x.c,null)," : +9152 8765 4321",r.a.createElement("br",null),r.a.createElement(I.a,null)," :",r.a.createElement("a",{href:"mailto:confusion@food.net"},"\xa0confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"./contactus"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us Your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(Q.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(ne.a,{className:"form-group"},r.a.createElement(L.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(re.a,{md:10},r.a.createElement(Q.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:le,minLength:ce(3),maxLength:oe(15)}}),r.a.createElement(Q.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(ne.a,{className:"form-group"},r.a.createElement(L.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(re.a,{md:10},r.a.createElement(Q.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:le,minLength:ce(3),maxLength:oe(15)}}),r.a.createElement(Q.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(ne.a,{className:"form-group"},r.a.createElement(L.a,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(re.a,{md:10},r.a.createElement(Q.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Contact Tel.",className:"form-control",validators:{required:le,minLength:ce(10),maxLength:oe(10),isNumber:se}}),r.a.createElement(Q.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Contact must be of 10 digits",maxLength:"Contact must be of 10 digits",isNumber:"Contact must be a number"}}))),r.a.createElement(ne.a,{className:"form-group"},r.a.createElement(L.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(re.a,{md:10},r.a.createElement(Q.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:le,validEmail:me}}),r.a.createElement(Q.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid email address"}}))),r.a.createElement(ne.a,{className:"form-group"},r.a.createElement(re.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(L.a,{check:!0},r.a.createElement(Q.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(re.a,{md:{size:3,offset:1}},r.a.createElement(Q.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(ne.a,{className:"form-group"},r.a.createElement(L.a,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(re.a,{md:10},r.a.createElement(Q.Control.textarea,{model:".message",id:"message",className:"form-control",name:"message",rows:"12"}))),r.a.createElement(ne.a,{className:"form-group"},r.a.createElement(re.a,{md:{size:10,offset:2}},r.a.createElement(b.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),a}(n.Component),ue=a(182),de=a(183);function Ee(e){var t=e.leader,a=e.isLoading,n=e.errMsg;return a?r.a.createElement(W,null):n?r.a.createElement("h3",null,n):r.a.createElement("div",{key:t.id,className:"col-12 mt-5"},r.a.createElement(ue.a,{tag:"li"},r.a.createElement(ue.a,{left:!0,middle:!0},r.a.createElement(ue.a,{object:!0,src:S+t.image,alt:t.name,style:{borderRadius:50}})),r.a.createElement(ue.a,{body:!0,className:"ml-5"},r.a.createElement(ue.a,{heading:!0},t.name),r.a.createElement("p",null,t.designation),r.a.createElement("p",null,t.description))))}var he=function(e){var t=function(t){var a=t.leaders,n=t.isLoading,l=t.errMsg,o=a.map((function(t){return r.a.createElement(Y.Fade,{in:!0},r.a.createElement(Ee,{leader:t,isLoading:e.leaders.isLoading,errMsg:e.leaders.errMsg}))}));return n?r.a.createElement(W,null):l?r.a.createElement("h4",null,l):r.a.createElement(ue.a,{list:!0},r.a.createElement(Y.Stagger,{in:!0},o))};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(J.a,null,r.a.createElement(Z.a,null,r.a.createElement(j.b,{to:"/home"},"Home")),r.a.createElement(Z.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante Fusion Taj quickly established itself as a culinary icon par excellence in India. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in India.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(R.a,null,r.a.createElement(de.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(P.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"Tata Groups"),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"258"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(R.a,null,r.a.createElement(P.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(t,{leaders:e.leaders.leaders,isLoading:e.leaders.isLoading,errMsg:e.leaders.errMsg}))))},fe=a(12),ge=a(27),pe=function(e){return{type:"ADD_COMMENT",payload:e}},be=function(e){alert("Feedback successfully submitted\nId     : "+e.id+"\nName   : "+e.firstname+" "+e.lastname+"\nTelnum : "+e.telnum+"\nEmail  : "+e.email+"\nAgree  : "+e.agree+"\nContact: "+e.contacttype+"\nMessage: "+e.message)},ve=function(){return{type:"DISHES_LOADING"}},Ne=function(e){return{type:"DISHES_FAILED",payload:e}},ye=function(e){return{type:"ADD_DISHES",payload:e}},we=function(){return{type:"PROMOS_LOADING"}},Oe=function(e){return{type:"PROMOS_FAILED",payload:e}},Me=function(e){return{type:"ADD_PROMOS",payload:e}},Le=function(){return{type:"LEADERS_LOADING"}},ke=function(e){return{type:"ADD_LEADERS",payload:e}},je=a(59),Se=a(91),Ce=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement(je.a,null,r.a.createElement(Se.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(fe.d,{location:this.props.location},r.a.createElement(fe.b,{path:C+"/home",component:function(){return r.a.createElement(G,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMsg:e.props.dishes.errMsg,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrMsg:e.props.promotions.errMsg,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMsg:e.props.leaders.errMsg})}}),r.a.createElement(fe.b,{exact:!0,path:C+"/menu",component:function(){return r.a.createElement(K,{dishes:e.props.dishes})}}),r.a.createElement(fe.b,{path:C+"/menu/:dishId",component:function(t){var a=t.match;return r.a.createElement(ae,{dish:e.props.dishes.dishes.filter((function(e){return e._id===a.params.dishId}))[0],isLoading:e.props.dishes.isLoading,errMsg:e.props.dishes.errMsg,postComment:e.props.postComment})}}),r.a.createElement(fe.b,{exact:!0,path:C+"/contactus",component:function(){return r.a.createElement(ie,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(fe.b,{exact:!0,path:C+"/aboutus",component:function(){return r.a.createElement(he,{leaders:e.props.leaders})}}),r.a.createElement(fe.a,{to:C+"/home"})))),r.a.createElement(T,null))}}]),a}(n.Component),xe=Object(fe.g)(Object(ge.connect)((function(e){return{dishes:e.dishes,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(t,a,n,r){return e(function(e,t,a,n){return function(r){var l={rating:t,author:a,comment:n};return l.date=(new Date).toISOString(),fetch(S+"dishes/"+e+"/comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return r(pe(e))})).catch((function(e){console.log("Post error : "+e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(t,a,n,r))},postFeedback:function(t,a,n,r,l,o,c){return e(function(e,t,a,n,r,l,o){return function(c){var s={firstname:e,lastname:t,telnum:a,email:n,agree:r,contacttype:l,message:o};return s.date=(new Date).toISOString(),fetch(S+"feedback",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return be(e)})).catch((function(e){console.log("Post error : "+e.message),alert("Your feedback could not be posted\nError: "+e.message)}))}}(t,a,n,r,l,o,c))},fetchDishes:function(){e((function(e){return e(ve(!0)),fetch(S+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ye(t))})).catch((function(t){e(Ne(t.message))}))}))},resetFeedbackForm:function(){e(Q.actions.reset("feedback"))},fetchPromos:function(){e((function(e){return e(we(!0)),fetch(S+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Me(t))})).catch((function(t){e(Oe(t.message))}))}))},fetchLeaders:function(){e((function(e){return e(Le(!0)),fetch(S+"leaders").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ke(t))})).catch((function(t){e(Oe(t.message))}))}))}}}))(Ce)),Ae=a(8),De=a(28),Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMsg:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DISHES":return Object(Ae.a)(Object(Ae.a)({},e),{},{isLoading:!1,errMsg:null,dishes:t.payload});case"DISHES_LOADING":return Object(Ae.a)(Object(Ae.a)({},e),{},{isLoading:!0,errMsg:null,dishes:[]});case"DISHES_FAILED":return Object(Ae.a)(Object(Ae.a)({},e),{},{isLoading:!1,errMsg:t.payload,dishes:[]});default:return e}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMsg:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object(Ae.a)(Object(Ae.a)({},e),{},{errMsg:null,comments:t.payload});case"COMMENTS_FAILED":return Object(Ae.a)(Object(Ae.a)({},e),{},{errMsg:t.payload,comments:[]});case"ADD_COMMENT":return Object(Ae.a)(Object(Ae.a)({},e),{},{comments:e.comments.concat(t.payload)});default:return e}},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMsg:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROMOS":return Object(Ae.a)(Object(Ae.a)({},e),{},{isLoading:!1,errMsg:null,promotions:t.payload});case"PROMOS_LOADING":return Object(Ae.a)(Object(Ae.a)({},e),{},{isLoading:!0,errMsg:null,promotions:[]});case"PROMOS_FAILED":return Object(Ae.a)(Object(Ae.a)({},e),{},{isLoading:!1,errMsg:t.payload,promotions:[]});default:return e}},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMsg:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LEADERS":return Object(Ae.a)(Object(Ae.a)({},e),{},{isLoading:!1,errMsg:null,leaders:t.payload});case"LEADERS_LOADING":return Object(Ae.a)(Object(Ae.a)({},e),{},{isLoading:!0,errMsg:null,leaders:[]});case"LEADERS_FAILED":return Object(Ae.a)(Object(Ae.a)({},e),{},{isLoading:!1,errMsg:t.payload,leaders:[]});default:return e}},_e={firstname:"",lastname:"",telnum:"",emial:"",agree:!1,contactType:"Tel.",message:""},Pe=a(96),qe=a(97),He=a.n(qe),Ue=(a(155),Object(De.createStore)(Object(De.combineReducers)(Object(Ae.a)({dishes:Fe,comments:Ie,promotions:Te,leaders:Re},Object(Q.createForms)({feedback:_e}))),Object(De.applyMiddleware)(Pe.a,He.a))),We=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(ge.Provider,{store:Ue},r.a.createElement(j.a,null,r.a.createElement("div",null,r.a.createElement(xe,null))))}}]),a}(n.Component),Ye=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ze(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(We,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/confusion",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/confusion","/service-worker.js");Ye?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ze(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ze(t,e)}))}}()},99:function(e,t,a){e.exports=a(156)}},[[99,1,2]]]);
//# sourceMappingURL=main.5ece5fce.chunk.js.map