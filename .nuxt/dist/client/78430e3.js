(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{223:function(t,e,o){var content=o(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(99).default)("22581634",content,!0,{sourceMap:!1})},224:function(t,e,o){"use strict";o.r(e);var n=o(32),M={name:"Bottomsheet",mounted:function(){document.addEventListener("keyup",this.onEsc)},methods:Object(n.a)({onEsc:function(){this.$emit("escClick")}},"onEsc",(function(t){27==t.keyCode&&(this.close(),this.$emit("escClick"))}))},c=(o(232),o(42)),component=Object(c.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"bottomsheet-fade"}},[n("div",{staticClass:"bottomsheet-overlay",attrs:{"aria-label":"Close Bottomsheet"},on:{click:function(e){return t.$emit("close-bottomsheet")},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.onEsc.apply(null,arguments)}}},[n("div",{staticClass:"bottomsheet",attrs:{role:"dialog","aria-labelledby":"bottomsheetTitle","aria-describedby":"bottomsheetDescription"},on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"bottomsheet__head"},[t._v("\n          Share question\n      ")]),t._v(" "),n("div",{staticClass:"bottomsheet__body"},[n("div",{staticClass:"avatar"},[n("div",{staticClass:"avatar__images"},[n("img",{attrs:{src:o(225),alt:""}})]),t._v(" "),n("div",{staticClass:"avatar__name"},[t._v("Jason Drill")])]),t._v(" "),n("div",{staticClass:"avatar active"},[n("div",{staticClass:"avatar__images"},[n("img",{attrs:{src:o(226),alt:""}})]),t._v(" "),n("div",{staticClass:"avatar__name"},[t._v("Dominic Schumblerger")])]),t._v(" "),n("div",{staticClass:"avatar"},[n("div",{staticClass:"avatar__images"},[n("img",{attrs:{src:o(227),alt:""}})]),t._v(" "),n("div",{staticClass:"avatar__name"},[t._v("Adrian Jay")])]),t._v(" "),n("div",{staticClass:"avatar active"},[n("div",{staticClass:"avatar__images"},[n("img",{attrs:{src:o(228),alt:""}})]),t._v(" "),n("div",{staticClass:"avatar__name"},[t._v("Jason Drill")])]),t._v(" "),n("div",{staticClass:"avatar active"},[n("div",{staticClass:"avatar__images"},[n("img",{attrs:{src:o(229),alt:""}})]),t._v(" "),n("div",{staticClass:"avatar__name"},[t._v("Fabinho Guiterez")])])]),t._v(" "),n("div",{staticClass:"bottomsheet__footer"},[n("div",{staticClass:"list"},[n("div",{staticClass:"list__item"},[n("img",{attrs:{src:o(230),alt:""}}),t._v(" Add question to Bookmarks\n          ")]),t._v(" "),n("div",{staticClass:"list__item"},[n("img",{attrs:{src:o(231),alt:""}}),t._v(" Share question via...\n          ")])]),t._v(" "),n("button",{staticClass:"h-10 px-6 rounded-md bg-blue-500 text-white mt-4 w-full"},[t._v("\n          Send\n          ")])])])])])}),[],!1,null,"45ce8a8a",null);e.default=component.exports},225:function(t,e,o){t.exports=o.p+"img/photo-3.b1ce4bc.png"},226:function(t,e,o){t.exports=o.p+"img/photo-2.e95aefe.png"},227:function(t,e,o){t.exports=o.p+"img/photo-4.aeb4917.png"},228:function(t,e,o){t.exports=o.p+"img/photo-1.4eaf7fb.png"},229:function(t,e,o){t.exports=o.p+"img/photo-5.885ddf5.png"},230:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgM0MzIDIuMjA0MzUgMy4zMTYwNyAxLjQ0MTI5IDMuODc4NjggMC44Nzg2OEM0LjQ0MTI5IDAuMzE2MDcxIDUuMjA0MzUgMCA2IDBMMTggMEMxOC43OTU2IDAgMTkuNTU4NyAwLjMxNjA3MSAyMC4xMjEzIDAuODc4NjhDMjAuNjgzOSAxLjQ0MTI5IDIxIDIuMjA0MzUgMjEgM1YyMy4yNUMyMC45OTk5IDIzLjM4NTcgMjAuOTYzMSAyMy41MTg4IDIwLjg5MzMgMjMuNjM1MUMyMC44MjM2IDIzLjc1MTUgMjAuNzIzNiAyMy44NDY4IDIwLjYwNCAyMy45MTA4QzIwLjQ4NDQgMjMuOTc0OCAyMC4zNDk3IDI0LjAwNTIgMjAuMjE0MiAyMy45OTg4QzIwLjA3ODcgMjMuOTkyMyAxOS45NDc0IDIzLjk0OTIgMTkuODM0NSAyMy44NzRMMTIgMTkuNjUxNUw0LjE2NTUgMjMuODc0QzQuMDUyNTYgMjMuOTQ5MiAzLjkyMTM1IDIzLjk5MjMgMy43ODU4NCAyMy45OTg4QzMuNjUwMzMgMjQuMDA1MiAzLjUxNTYgMjMuOTc0OCAzLjM5NiAyMy45MTA4QzMuMjc2NCAyMy44NDY4IDMuMTc2NDEgMjMuNzUxNSAzLjEwNjY3IDIzLjYzNTFDMy4wMzY5NCAyMy41MTg4IDMuMDAwMDcgMjMuMzg1NyAzIDIzLjI1VjNaTTYgMS41QzUuNjAyMTggMS41IDUuMjIwNjQgMS42NTgwNCA0LjkzOTM0IDEuOTM5MzRDNC42NTgwNCAyLjIyMDY0IDQuNSAyLjYwMjE4IDQuNSAzVjIxLjg0OUwxMS41ODQ1IDE4LjEyNkMxMS43MDc2IDE4LjA0NDEgMTEuODUyMSAxOC4wMDA0IDEyIDE4LjAwMDRDMTIuMTQ3OSAxOC4wMDA0IDEyLjI5MjQgMTguMDQ0MSAxMi40MTU1IDE4LjEyNkwxOS41IDIxLjg0OVYzQzE5LjUgMi42MDIxOCAxOS4zNDIgMi4yMjA2NCAxOS4wNjA3IDEuOTM5MzRDMTguNzc5NCAxLjY1ODA0IDE4LjM5NzggMS41IDE4IDEuNUg2WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="},231:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMTdMMi42MjEgMTkuNDg1QzIuNzI5MTUgMTkuOTE3NyAyLjk3ODgyIDIwLjMwMTggMy4zMzAzMyAyMC41NzYzQzMuNjgxODQgMjAuODUwOCA0LjExNTAxIDIwLjk5OTkgNC41NjEgMjFIMTkuNDM5QzE5Ljg4NSAyMC45OTk5IDIwLjMxODIgMjAuODUwOCAyMC42Njk3IDIwLjU3NjNDMjEuMDIxMiAyMC4zMDE4IDIxLjI3MDggMTkuOTE3NyAyMS4zNzkgMTkuNDg1TDIyIDE3TTEyIDNWMTVWM1pNMTIgM0w4IDdMMTIgM1pNMTIgM0wxNiA3TDEyIDNaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"},232:function(t,e,o){"use strict";o(223)},233:function(t,e,o){var n=o(98)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.bottomsheet-overlay[data-v-45ce8a8a]{\n  top:0;\n  display:flex;\n  justify-content:center;\n  background:rgba(0,0,0,.6)\n}\n.bottomsheet[data-v-45ce8a8a],.bottomsheet-overlay[data-v-45ce8a8a]{\n  position:fixed;\n  bottom:0;\n  left:0;\n  right:0\n}\n.bottomsheet[data-v-45ce8a8a]{\n  padding:8px 0;\n  background:#fff;\n  border-top-left-radius:16px;\n  border-top-right-radius:16px;\n  overflow:hidden;\n  transition:all .3s;\n  margin:auto;\n  max-height:400px;\n  max-width:768px\n}\n.bottomsheet__head[data-v-45ce8a8a]{\n  text-align:center;\n  font-size:14px;\n  padding:16px 0\n}\n.bottomsheet__body[data-v-45ce8a8a]{\n  border-top:1px solid #f2f2f2;\n  border-bottom:1px solid #f2f2f2;\n  padding:16px;\n  display:flex;\n  gap:8px;\n  overflow-x:auto\n}\n.bottomsheet__body .avatar[data-v-45ce8a8a]{\n  position:relative;\n  width:100px;\n  text-align:center;\n  min-width:80px\n}\n.bottomsheet__body .avatar__images img[data-v-45ce8a8a]{\n  width:48px;\n  border-radius:50%;\n  margin:auto\n}\n.bottomsheet__body .avatar__images img.active[data-v-45ce8a8a]{\n  border:1px solid #218dfe\n}\n.bottomsheet__body .avatar__name[data-v-45ce8a8a]{\n  font-size:12px;\n  white-space:nowrap;\n  text-overflow:ellipsis;\n  overflow:hidden\n}\n.bottomsheet__footer[data-v-45ce8a8a]{\n  padding:16px\n}\n.bottomsheet__footer .list[data-v-45ce8a8a]{\n  display:flex;\n  flex-direction:column;\n  gap:16px\n}\n.bottomsheet__footer .list__item[data-v-45ce8a8a]{\n  display:flex;\n  align-items:center;\n  gap:16px;\n  font-size:14px\n}\n.bottomsheet__footer .list__item-icon img[data-v-45ce8a8a]{\n  width:18px\n}\n.bottomsheet-fade-enter[data-v-45ce8a8a],.bottomsheet-fade-leave-to[data-v-45ce8a8a]{\n  opacity:0\n}\n.bottomsheet-fade-enter-active[data-v-45ce8a8a],.bottomsheet-fade-leave-active[data-v-45ce8a8a]{\n  transition:opacity .4s ease\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},234:function(t,e,o){var content=o(239);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(99).default)("1600e197",content,!0,{sourceMap:!1})},238:function(t,e,o){"use strict";o(234)},239:function(t,e,o){var n=o(98)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.component{\n  max-width:768px\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},243:function(t,e,o){"use strict";o.r(e);var n={components:{Bottomsheet:o(224).default},name:"Content",data:function(){return{showBottomsheet:!1}}},M=(o(238),o(42)),component=Object(M.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"max-w-screen-xl flex-3"},[o("div",{staticClass:"p-5 w-full"},[o("div",{staticClass:"component"},[o("div",{staticClass:"bg-gray-50 w-full p-6 rounded-xl"},[o("div",{staticClass:"component"},[o("div",{staticClass:"component__content"},[o("h2",{staticClass:"text-2xl mb-2 font-semibold"},[t._v("Bottom Sheet Share ")]),t._v(" "),o("p",{staticClass:"mb-2"},[t._v("\n              Bottom sheets are surfaces containing supplementary content that are anchored to the bottom of the screen.\n              Modal bottom sheets are alternatives to menus or simple dialogs. They can also present deep-linked content from other apps. They are primarily for mobile.              \n            ")]),t._v(" "),o("button",{staticClass:"h-10 px-6 font-semibold rounded-md bg-blue-500 mt-4 text-white mb-3",on:{click:function(e){t.showBottomsheet=!0}}},[t._v("\n              Open Bottom Sheet\n            ")])]),t._v(" "),o("Bottomsheet",{directives:[{name:"show",rawName:"v-show",value:t.showBottomsheet,expression:"showBottomsheet"}],on:{"close-bottomsheet":function(e){t.showBottomsheet=!1}}})],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Bottomsheet:o(224).default})}}]);