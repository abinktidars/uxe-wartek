exports.ids = [1];
exports.modules = {

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("22581634", content, true, context)
};

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/bottomsheet/Bottomsheet.vue?vue&type=template&id=45ce8a8a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"bottomsheet-fade"}},[_c('div',{staticClass:"bottomsheet-overlay",attrs:{"aria-label":"Close Bottomsheet"},on:{"click":function($event){return _vm.$emit('close-bottomsheet')},"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.onEsc.apply(null, arguments)}}},[_c('div',{staticClass:"bottomsheet",attrs:{"role":"dialog","aria-labelledby":"bottomsheetTitle","aria-describedby":"bottomsheetDescription"},on:{"click":function($event){$event.stopPropagation();}}},[_c('div',{staticClass:"bottomsheet__head"},[_vm._v("\n          Share question\n      ")]),_vm._v(" "),_c('div',{staticClass:"bottomsheet__body"},[_c('div',{staticClass:"avatar"},[_c('div',{staticClass:"avatar__images"},[_c('img',{attrs:{"src":__webpack_require__(23),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"avatar__name"},[_vm._v("Jason Drill")])]),_vm._v(" "),_c('div',{staticClass:"avatar active"},[_c('div',{staticClass:"avatar__images"},[_c('img',{attrs:{"src":__webpack_require__(24),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"avatar__name"},[_vm._v("Dominic Schumblerger")])]),_vm._v(" "),_c('div',{staticClass:"avatar"},[_c('div',{staticClass:"avatar__images"},[_c('img',{attrs:{"src":__webpack_require__(25),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"avatar__name"},[_vm._v("Adrian Jay")])]),_vm._v(" "),_c('div',{staticClass:"avatar active"},[_c('div',{staticClass:"avatar__images"},[_c('img',{attrs:{"src":__webpack_require__(26),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"avatar__name"},[_vm._v("Jason Drill")])]),_vm._v(" "),_c('div',{staticClass:"avatar active"},[_c('div',{staticClass:"avatar__images"},[_c('img',{attrs:{"src":__webpack_require__(27),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"avatar__name"},[_vm._v("Fabinho Guiterez")])])]),_vm._v(" "),_c('div',{staticClass:"bottomsheet__footer"},[_c('div',{staticClass:"list"},[_c('div',{staticClass:"list__item"},[_c('img',{attrs:{"src":__webpack_require__(28),"alt":""}}),_vm._v(" Add question to Bookmarks\n          ")]),_vm._v(" "),_c('div',{staticClass:"list__item"},[_c('img',{attrs:{"src":__webpack_require__(29),"alt":""}}),_vm._v(" Share question via...\n          ")])]),_vm._v(" "),_c('button',{staticClass:"h-10 px-6 rounded-md bg-blue-500 text-white mt-4 w-full"},[_vm._v("\n          Send\n          ")])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/bottomsheet/Bottomsheet.vue?vue&type=template&id=45ce8a8a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./components/bottomsheet/bottomsheet.js?vue&type=script&lang=js&
/* harmony default export */ var bottomsheetvue_type_script_lang_js_ = ({
  name: "Bottomsheet",

  mounted() {
    document.addEventListener('keyup', this.onEsc);
  },

  methods: {
    onEsc() {
      this.$emit('escClick');
    },

    onEsc(e) {
      if (e.keyCode != 27) return;
      this.close();
      this.$emit('escClick');
    }

  }
});
// CONCATENATED MODULE: ./components/bottomsheet/bottomsheet.js?vue&type=script&lang=js&
 /* harmony default export */ var bottomsheet_bottomsheetvue_type_script_lang_js_ = (bottomsheetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/bottomsheet/Bottomsheet.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(30)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bottomsheet_bottomsheetvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "45ce8a8a",
  "53a25895"
  
)

/* harmony default export */ var Bottomsheet = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/photo-3.b1ce4bc.png";

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/photo-2.e95aefe.png";

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/photo-4.aeb4917.png";

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/photo-1.4eaf7fb.png";

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/photo-5.885ddf5.png";

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgM0MzIDIuMjA0MzUgMy4zMTYwNyAxLjQ0MTI5IDMuODc4NjggMC44Nzg2OEM0LjQ0MTI5IDAuMzE2MDcxIDUuMjA0MzUgMCA2IDBMMTggMEMxOC43OTU2IDAgMTkuNTU4NyAwLjMxNjA3MSAyMC4xMjEzIDAuODc4NjhDMjAuNjgzOSAxLjQ0MTI5IDIxIDIuMjA0MzUgMjEgM1YyMy4yNUMyMC45OTk5IDIzLjM4NTcgMjAuOTYzMSAyMy41MTg4IDIwLjg5MzMgMjMuNjM1MUMyMC44MjM2IDIzLjc1MTUgMjAuNzIzNiAyMy44NDY4IDIwLjYwNCAyMy45MTA4QzIwLjQ4NDQgMjMuOTc0OCAyMC4zNDk3IDI0LjAwNTIgMjAuMjE0MiAyMy45OTg4QzIwLjA3ODcgMjMuOTkyMyAxOS45NDc0IDIzLjk0OTIgMTkuODM0NSAyMy44NzRMMTIgMTkuNjUxNUw0LjE2NTUgMjMuODc0QzQuMDUyNTYgMjMuOTQ5MiAzLjkyMTM1IDIzLjk5MjMgMy43ODU4NCAyMy45OTg4QzMuNjUwMzMgMjQuMDA1MiAzLjUxNTYgMjMuOTc0OCAzLjM5NiAyMy45MTA4QzMuMjc2NCAyMy44NDY4IDMuMTc2NDEgMjMuNzUxNSAzLjEwNjY3IDIzLjYzNTFDMy4wMzY5NCAyMy41MTg4IDMuMDAwMDcgMjMuMzg1NyAzIDIzLjI1VjNaTTYgMS41QzUuNjAyMTggMS41IDUuMjIwNjQgMS42NTgwNCA0LjkzOTM0IDEuOTM5MzRDNC42NTgwNCAyLjIyMDY0IDQuNSAyLjYwMjE4IDQuNSAzVjIxLjg0OUwxMS41ODQ1IDE4LjEyNkMxMS43MDc2IDE4LjA0NDEgMTEuODUyMSAxOC4wMDA0IDEyIDE4LjAwMDRDMTIuMTQ3OSAxOC4wMDA0IDEyLjI5MjQgMTguMDQ0MSAxMi40MTU1IDE4LjEyNkwxOS41IDIxLjg0OVYzQzE5LjUgMi42MDIxOCAxOS4zNDIgMi4yMjA2NCAxOS4wNjA3IDEuOTM5MzRDMTguNzc5NCAxLjY1ODA0IDE4LjM5NzggMS41IDE4IDEuNUg2WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMTdMMi42MjEgMTkuNDg1QzIuNzI5MTUgMTkuOTE3NyAyLjk3ODgyIDIwLjMwMTggMy4zMzAzMyAyMC41NzYzQzMuNjgxODQgMjAuODUwOCA0LjExNTAxIDIwLjk5OTkgNC41NjEgMjFIMTkuNDM5QzE5Ljg4NSAyMC45OTk5IDIwLjMxODIgMjAuODUwOCAyMC42Njk3IDIwLjU3NjNDMjEuMDIxMiAyMC4zMDE4IDIxLjI3MDggMTkuOTE3NyAyMS4zNzkgMTkuNDg1TDIyIDE3TTEyIDNWMTVWM1pNMTIgM0w4IDdMMTIgM1pNMTIgM0wxNiA3TDEyIDNaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bottomsheet_vue_vue_type_style_index_0_id_45ce8a8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bottomsheet_vue_vue_type_style_index_0_id_45ce8a8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bottomsheet_vue_vue_type_style_index_0_id_45ce8a8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bottomsheet_vue_vue_type_style_index_0_id_45ce8a8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bottomsheet_vue_vue_type_style_index_0_id_45ce8a8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.bottomsheet-overlay[data-v-45ce8a8a]{\n  top:0;\n  display:flex;\n  justify-content:center;\n  background:rgba(0,0,0,.6)\n}\n.bottomsheet[data-v-45ce8a8a],.bottomsheet-overlay[data-v-45ce8a8a]{\n  position:fixed;\n  bottom:0;\n  left:0;\n  right:0\n}\n.bottomsheet[data-v-45ce8a8a]{\n  padding:8px 0;\n  background:#fff;\n  border-top-left-radius:16px;\n  border-top-right-radius:16px;\n  overflow:hidden;\n  transition:all .3s;\n  margin:auto;\n  max-height:400px;\n  max-width:768px\n}\n.bottomsheet__head[data-v-45ce8a8a]{\n  text-align:center;\n  font-size:14px;\n  padding:16px 0\n}\n.bottomsheet__body[data-v-45ce8a8a]{\n  border-top:1px solid #f2f2f2;\n  border-bottom:1px solid #f2f2f2;\n  padding:16px;\n  display:flex;\n  gap:8px;\n  overflow-x:auto\n}\n.bottomsheet__body .avatar[data-v-45ce8a8a]{\n  position:relative;\n  width:100px;\n  text-align:center;\n  min-width:80px\n}\n.bottomsheet__body .avatar__images img[data-v-45ce8a8a]{\n  width:48px;\n  border-radius:50%;\n  margin:auto\n}\n.bottomsheet__body .avatar__images img.active[data-v-45ce8a8a]{\n  border:1px solid #218dfe\n}\n.bottomsheet__body .avatar__name[data-v-45ce8a8a]{\n  font-size:12px;\n  white-space:nowrap;\n  text-overflow:ellipsis;\n  overflow:hidden\n}\n.bottomsheet__footer[data-v-45ce8a8a]{\n  padding:16px\n}\n.bottomsheet__footer .list[data-v-45ce8a8a]{\n  display:flex;\n  flex-direction:column;\n  gap:16px\n}\n.bottomsheet__footer .list__item[data-v-45ce8a8a]{\n  display:flex;\n  align-items:center;\n  gap:16px;\n  font-size:14px\n}\n.bottomsheet__footer .list__item-icon img[data-v-45ce8a8a]{\n  width:18px\n}\n.bottomsheet-fade-enter[data-v-45ce8a8a],.bottomsheet-fade-leave-to[data-v-45ce8a8a]{\n  opacity:0\n}\n.bottomsheet-fade-enter-active[data-v-45ce8a8a],.bottomsheet-fade-leave-active[data-v-45ce8a8a]{\n  transition:opacity .4s ease\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=bottomsheet.js.map