(this["webpackJsonpgoit-react-hw-02-bank-account"]=this["webpackJsonpgoit-react-hw-02-bank-account"]||[]).push([[0],{15:function(e,t,n){e.exports={balance:"Balance_balance__2d6xJ"}},16:function(e,t,n){e.exports={trText:"Transaction_trText__2PT05"}},21:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(3),c=n.n(o),s=n(9),l=n(12),i=n(13),u=n(19),m=n(14),h=n(20),p=n(6),d=n.n(p),b=n(2),E=(n(34),n(7)),f=n.n(E),g=function(e){var t=e.amount,n=e.handleChange,a=e.onDeposit,o=e.onWithdraw;return r.a.createElement("div",{className:f.a.container},r.a.createElement("section",{className:f.a.controls},r.a.createElement("input",{onChange:n,value:t,placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438...",type:"number",name:"amount"}),r.a.createElement("button",{onClick:a,type:"button"},"Deposit"),r.a.createElement("button",{onClick:o,value:t,type:"button"},"Wihtdraw")))},v=n(15),y=n.n(v),_=function(e){var t=e.balance,n=e.income,a=e.expenses;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:y.a.balance},r.a.createElement("span",null,"\u2b06\ufe0f ",n,"$"),r.a.createElement("span",null,"\u2b07\ufe0f ",a,"$"),r.a.createElement("span",null,"Balance: ",t,"$")))},x=n(8),w=n.n(x),C=n(16),T=n.n(C),k=function(e){var t=e.transactions,n=t.type,a=t.amount,o=t.date;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{className:T.a.trText},r.a.createElement("td",null,n),r.a.createElement("td",null,a),r.a.createElement("td",null,o)))},N=function(e){var t=e.transactions;return r.a.createElement("table",{className:w.a.history},r.a.createElement("thead",null,r.a.createElement("tr",{className:w.a.theadTitle},r.a.createElement("th",null,"Transaction"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement(k,{transactions:e,key:e.id})}))))};b.a.configure({position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});var O=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={transactions:[],amount:"",balance:0,income:0,expenses:0},n.resetAmount=function(){n.setState({amount:""})},n.handleChange=function(e){var t=Number(e.target.value);n.setState({amount:t})},n.onDeposit=function(){var e=n.state,t=e.amount,a=e.balance,r=e.transactions,o={id:d.a.generate(),type:"deposit",amount:t,date:(new Date).toLocaleString()};t>0?(b.a.success("\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u0430"),n.setState({balance:a+o.amount,transactions:[].concat(Object(s.a)(r),[o])}),n.income(),n.resetAmount()):(b.a.warning("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0443\u043b\u044f \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!"),n.resetAmount())},n.onWithdraw=function(){var e=n.state,t=e.amount,a=e.balance,r=e.transactions,o={id:d.a.generate(),type:"withdraw",amount:t,date:(new Date).toLocaleString()};t<=0?(b.a.warning("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0443\u043b\u044f \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!"),n.resetAmount()):a<t?(b.a.error("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!"),n.resetAmount()):(n.setState({balance:a-o.amount,transactions:[].concat(Object(s.a)(r),[o])}),b.a.success("\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u0430"),n.expenses(),n.resetAmount())},n.income=function(){var e=n.state.amount;n.setState((function(t){return{income:t.income+e}}))},n.expenses=function(){var e=n.state.amount;n.setState((function(t){return{expenses:t.expenses+e}}))},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.transactions,n=e.amount,a=e.balance,o=e.income,c=e.expenses;return r.a.createElement("div",{className:"dashboard"},r.a.createElement(g,{amount:n,handleChange:this.handleChange,onDeposit:this.onDeposit,onWithdraw:this.onWithdraw}),r.a.createElement(_,{balance:a,income:o,expenses:c}),r.a.createElement(N,{transactions:t}))}}]),t}(a.Component),S=function(){return r.a.createElement(O,null)};c.a.render(r.a.createElement(S,null),document.getElementById("root"))},7:function(e,t,n){e.exports={container:"Controls_container__2zPhm",controls:"Controls_controls__S0Zsv"}},8:function(e,t,n){e.exports={history:"TransactionHistory_history__1mNaZ",theadTitle:"TransactionHistory_theadTitle__Va8ay"}}},[[21,1,2]]]);
//# sourceMappingURL=main.440e52e2.chunk.js.map