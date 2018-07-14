"use strict";var precacheConfig=[["craftdelta/config/main.json","eec11bc212c052faae7ea0507dd0da3b"],["craftdelta/config/staging.json","4d6383d5aaff9cdf72b48e2c6b54a9e1"],["craftdelta/config/testnet.json","92954db6ec4b4b02708794c5f4de8e75"],["craftdelta/css/alertify-bootstrap.min.css","90c169a825440680d0543a6d774c4ede"],["craftdelta/css/alertify.min.css","66b95572cbebf0c83898f7a162275143"],["craftdelta/css/base_market_maker.css","5952f62bcdc6e966b368f3b0a2e66784"],["craftdelta/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["craftdelta/css/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["craftdelta/css/ie10-viewport-bug-workaround.css","631c61015480c581479c23afa0ab82da"],["craftdelta/css/jquery-ui.css","b82df8212517552f6073be3fc87e69bf"],["craftdelta/css/small.css","bc4af7282729244678444f01ccc106c5"],["craftdelta/css/theme.css","91ce1d141b0757a80fced5c52d97d466"],["craftdelta/css/trades.css","9be871358df111ee4a634a4e9f44a9ee"],["craftdelta/css/treema.css","0637da5cf001666f7ea568c6c2e71bb2"],["craftdelta/export.html","9a05d77b4f3423809ac30fd1074e3632"],["craftdelta/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["craftdelta/gntw.html","f5a55039f825951a532680d53cc15811"],["craftdelta/images/cancel.gif","f465a979ce43b853d4755001c48af597"],["craftdelta/images/craftdelta.png","621316f882288065b7fd5e55cdba1d49"],["craftdelta/images/craftdelta_header.png","baa1df0f8cd357638e0a83eb07f9c42d"],["craftdelta/images/deposit.gif","24a2c0337063957f25fb89d80bc0c24a"],["craftdelta/images/favicon.png","fc8d85c4d2e496fbd37742723ab04cb2"],["craftdelta/images/ledger.png","b8d1ac0a9a238451b4baf307f6036280"],["craftdelta/images/logo.png","fc8d85c4d2e496fbd37742723ab04cb2"],["craftdelta/images/logo.svg","1386d24750e8ad733ef7e4e54ea9415b"],["craftdelta/images/logo256.png","aca73e7d5073a96b48d1b5ca45fede50"],["craftdelta/images/metamask.gif","847d29fa73c20db02d880c79e45474a8"],["craftdelta/images/metamask.png","386749f8c56df955cf076059dfc7815c"],["craftdelta/images/mist.png","5d0c40b2d3301bcade37d9a68ec34932"],["craftdelta/images/order.gif","069199a312092a28408feab3c604b081"],["craftdelta/images/reddit_banner.png","5af7f42f6ac23d1e8cda78171455ceef"],["craftdelta/images/reddit_banner_small.png","0c0f70d217bacc3fd6ebe1180bab61cc"],["craftdelta/images/trade.gif","1a8ee37319fd395f3c3e1a46f5385e6e"],["craftdelta/images/withdraw.gif","5733c15d9e694683bad3761be1a9e317"],["craftdelta/index.html","42a86b03dc0e10b408881ce2d4c01041"],["craftdelta/js/alertify.min.js","6aa11a9cd06d87838fbb70353bd62b46"],["craftdelta/js/bootstrap.min.js","c5b5b2fa19bd66ff23211d9f844e0131"],["craftdelta/js/chrome-u2f-api.js","12adc393a166dc58743df122d0cf9ad7"],["craftdelta/js/ejs_production.js","bf9e301590ff13ac104b924e54632f7c"],["craftdelta/js/jquery-1.11.1.min.js","8101d596b2b8fa35fe3a634ea342d7c3"],["craftdelta/js/jquery.translate.js","63245bbb84548da46fe0f41643f9c15d"],["craftdelta/js/ledger.min.js","4c0ddeab715bfaaae1a35d4024dfaf97"],["craftdelta/js/main-unminified.js","a14b678a63f4f637d5236ab02043d10a"],["craftdelta/js/sidecar.v1.js","323570fa54867d536f89494ce29d2d04"],["craftdelta/js/trades.js","f0677a5d548bee234bd8a0ce43a2e63e"],["craftdelta/js/web3.min.js","17c4b28a17eada7fc27f40a7390bae44"],["craftdelta/trades.html","1f1a3640b265fac656b0a435e18b98c2"]],cacheName="sw-precache-v3-CraftDelta-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,!1);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(n=new URL("/craftdelta/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,r){function a(o,s){if(!n[o]){if(!t[o]){var i="function"==typeof require&&require;if(!s&&i)return i(o,!0);if(c)return c(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var u=n[o]={exports:{}};t[o][0].call(u.exports,function(e){var n=t[o][1][e];return a(n||e)},u,u.exports,e,t,n,r)}return n[o].exports}for(var c="function"==typeof require&&require,o=0;o<r.length;o++)a(r[o]);return a}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||i.debug)&&console.log("[sw-toolbox] "+e)}function a(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||i.cache.name,caches.open(t)}function c(e,t,n){var a=e.url,c=n.maxAgeSeconds,o=n.maxEntries,s=n.name,i=Date.now();return r("Updating LRU order for "+a+". Max entries is "+o+", max age is "+c),f.getDb(s).then(function(e){return f.setTimestampForUrl(e,a,i)}).then(function(e){return f.expireEntries(e,o,c,i)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function o(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var s,i=e("./options"),f=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||i.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&a(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||i.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&function(e,t,n){var r=c.bind(null,e,t,n);s=s?s.then(r):r()}(e,n,r)})}),r.clone()})},openCache:a,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,t){return a(t).then(function(t){return t.add(e)})},uncache:function(e,t){return a(t).then(function(t){return t.delete(e)})},precache:function(e){e instanceof Promise||o(e),i.preCacheItems=i.preCacheItems.concat(e)},validatePrecacheInput:o,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var r="sw-toolbox-",a=1,c="store",o="url",s="timestamp",i={};t.exports={getDb:function(e){return e in i||(i[e]=function(e){return new Promise(function(t,n){var i=indexedDB.open(r+e,a);i.onupgradeneeded=function(){i.result.createObjectStore(c,{keyPath:o}).createIndex(s,s,{unique:!1})},i.onsuccess=function(){t(i.result)},i.onerror=function(){n(i.error)}})}(e)),i[e]},setTimestampForUrl:function(e,t,n){return new Promise(function(r,a){var o=e.transaction(c,"readwrite");o.objectStore(c).put({url:t,timestamp:n}),o.oncomplete=function(){r(e)},o.onabort=function(){a(o.error)}})},expireEntries:function(e,t,n,r){return function(e,t,n){return t?new Promise(function(r,a){var i=1e3*t,f=[],u=e.transaction(c,"readwrite"),l=u.objectStore(c);l.index(s).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[s]){var r=t.value[o];f.push(r),l.delete(r),t.continue()}},u.oncomplete=function(){r(f)},u.onabort=a}):Promise.resolve([])}(e,n,r).then(function(n){return function(e,t){return t?new Promise(function(n,r){var a=[],i=e.transaction(c,"readwrite"),f=i.objectStore(c),u=f.index(s),l=u.count();u.count().onsuccess=function(){var e=l.result;e>t&&(u.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var c=r.value[o];a.push(c),f.delete(c),e-a.length>t&&r.continue()}})},i.oncomplete=function(){n(a)},i.onabort=r}):Promise.resolve([])}(e,t).then(function(e){return n.concat(e)})})}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var a=e("./helpers"),c=e("./router"),o=e("./options");t.exports={fetchListener:function(e){var t=c.match(e.request);t?e.respondWith(t(e.request)):c.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(c.default(e.request))},activateListener:function(e){a.debug("activate event fired");var t=o.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,o.cache.name))},installListener:function(e){var t=o.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then(function(e){return Promise.all(o.preCacheItems).then(r).then(a.validatePrecacheInput).then(function(t){return a.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,a=e("path-to-regexp"),c=function(e,t,n,c){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=a(t,this.keys)),this.method=e,this.options=c,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){var r=e("./route"),a=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),a=[];!r.done;){new RegExp(r.value[0]).test(t)&&a.push(r.value[1]),r=n.next()}return a},o=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){o.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),o.prototype.add=function(e,t,n,c){var o;c=c||{},t instanceof RegExp?o=RegExp:o=(o=c.origin||self.location.origin)instanceof RegExp?o.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(o),e=e.toLowerCase();var s=new r(e,t,n,c);this.routes.has(o)||this.routes.set(o,new Map);var i=this.routes.get(o);i.has(e)||i.set(e,new Map);var f=i.get(e),u=s.regexp||s.fullUrlRegExp;f.has(u.source)&&a.debug('"'+t+'" resolves to same regex as existing route.'),f.set(u.source,s)},o.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,a=n.pathname;return this._match(e,c(this.routes,r),a)||this._match(e,[this.routes.get(RegExp)],t)},o.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var a=t[r],o=a&&a.get(e.toLowerCase());if(o){var s=c(o,n);if(s.length>0)return s[0].makeHandler(n)}}return null},o.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new o},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){return n=n||{},a.debug("Strategy: cache first ["+e.url+"]",n),a.openCache(n).then(function(t){return t.match(e).then(function(t){var c=n.cache||r.cache,o=Date.now();return a.isResponseFresh(t,c.maxAgeSeconds,o)?t:a.fetchAndCache(e,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){return n=n||{},a.debug("Strategy: cache only ["+e.url+"]",n),a.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||r.cache,c=Date.now();if(a.isResponseFresh(e,t.maxAgeSeconds,c))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),a=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(c,o){var s=!1,i=[],f=function(e){i.push(e.toString()),s?o(new Error('Both cache and network failed: "'+i.join('", "')+'"')):s=!0},u=function(e){e instanceof Response?c(e):f("No result returned")};r.fetchAndCache(e.clone(),n).then(u,f),a(e,t,n).then(u,f)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){var c=(n=n||{}).successResponses||r.successResponses,o=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return a.debug("Strategy: network first ["+e.url+"]",n),a.openCache(n).then(function(t){var s,i,f=[];if(o){var u=new Promise(function(c){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||r.cache,o=Date.now(),s=t.maxAgeSeconds;a.isResponseFresh(e,s,o)&&c(e)})},1e3*o)});f.push(u)}var l=a.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),c.test(e.status))return e;throw a.debug("Response was an HTTP error: "+e.statusText,n),i=e,new Error("Bad response")}).catch(function(r){return a.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(i)return i;throw r})});return f.push(l),Promise.race(f)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),a=e("./router"),c=e("./helpers"),o=e("./strategies"),s=e("./listeners");c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:o.networkOnly,networkFirst:o.networkFirst,cacheOnly:o.cacheOnly,cacheFirst:o.cacheFirst,fastest:o.fastest,router:a,options:r,cache:c.cache,uncache:c.uncache,precache:c.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],a=0,c=0,o="",f=t&&t.delimiter||"/";null!=(n=p.exec(e));){var u=n[0],l=n[1],h=n.index;if(o+=e.slice(c,h),c=h+u.length,l)o+=l[1];else{var d=e[c],m=n[2],g=n[3],b=n[4],v=n[5],w=n[6],x=n[7];o&&(r.push(o),o="");var y=null!=m&&null!=d&&d!==m,R="+"===w||"*"===w,E="?"===w||"*"===w,C=n[2]||f,k=b||v;r.push({name:g||a++,prefix:m||"",delimiter:C,optional:E,repeat:R,partial:y,asterisk:!!x,pattern:k?i(k):x?".*":"[^"+s(C)+"]+?"})}}return c<e.length&&(o+=e.substr(c)),o&&r.push(o),r}function a(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function o(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},i=(r||{}).pretty?a:encodeURIComponent,f=0;f<e.length;f++){var u=e[f];if("string"!=typeof u){var l,h=s[u.name];if(null==h){if(u.optional){u.partial&&(o+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(d(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var p=0;p<h.length;p++){if(l=i(h[p]),!t[f].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(0===p?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?c(h):i(h),!t[f].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');o+=u.prefix+l}}else o+=u}return o}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function i(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function u(e){return e.sensitive?"":"i"}function l(e,t,n){d(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,a=!1!==n.end,c="",o=0;o<e.length;o++){var i=e[o];if("string"==typeof i)c+=s(i);else{var l=s(i.prefix),h="(?:"+i.pattern+")";t.push(i),i.repeat&&(h+="(?:"+l+h+")*"),c+=h=i.optional?i.partial?l+"("+h+")?":"(?:"+l+"("+h+"))?":l+"("+h+")"}}var p=s(n.delimiter||"/"),m=c.slice(-p.length)===p;return r||(c=(m?c.slice(0,-p.length):c)+"(?:"+p+"(?=$))?"),c+=a?"$":r&&m?"":"(?="+p+"|$)",f(new RegExp("^"+c,u(n)),t)}function h(e,t,n){return d(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}(e,t):d(e)?function(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(h(e[a],t,n).source);return f(new RegExp("(?:"+r.join("|")+")",u(n)),t)}(e,t,n):function(e,t,n){return l(r(e,n),t,n)}(e,t,n)}var d=e("isarray");t.exports=h,t.exports.parse=r,t.exports.compile=function(e,t){return o(r(e,t))},t.exports.tokensToFunction=o,t.exports.tokensToRegExp=l;var p=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});