!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,g=Math.max,m=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var o,r,u,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function T(e){return c=e,f=setTimeout(w,t),s?b(e):a}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function w(){var e=p();if(h(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-l);return d?m(n,u-(e-c)):n}(e))}function O(e){return f=void 0,v&&o?b(e):(o=r=void 0,a)}function E(){var e=p(),n=h(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return T(l);if(d)return f=setTimeout(w,t),b(l)}return void 0===f&&(f=setTimeout(w,t)),a}return t=j(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?g(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),E.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},E.flush=function(){return void 0===f?a:O(p())},E}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=a.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};var T=document.querySelector(".feedback-form"),h="feedback-form";T.addEventListener("input",e(t)((function(e){console.log(e),e.preventDefault();var t=e.target.elements,n=t.email,o=t.message;console.dir(e),console.log(n.value),console.log(o.value),h={Email:n.value,Message:o.value},localStorage.setItem(h,JSON.stringify(elements)||0)})),500),T.addEventListener("submit",(function(e){if(e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(h),""===email.value||""===message.value)return;console.log(Email),console.log(Message)}))}();
//# sourceMappingURL=03-feedback.19fee3d4.js.map