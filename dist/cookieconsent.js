/*
 CookieConsent v2.4
 https://www.github.com/orestbida/cookieconsent
 Author Orest Bida
 Released under the MIT License
*/
(function(){function la(xa){function ma(a,b){return a.classList?a.classList.contains(b):!!a.className.match(new RegExp("(\\s|^)"+b+"(\\s|$)"))}function ea(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(\\s|^)"+b+"(\\s|$)")," ")}function B(a,b){a.classList?a.classList.add(b):ma(a,b)||(a.className+=" "+b)}function X(a){if("object"===typeof a){var b=[],c=0;for(b[c++]in a);return b}}function C(a,b,c,d){a.addEventListener?d?a.addEventListener(b,c,{passive:!0}):a.addEventListener(b,
c,!1):a.attachEvent("on"+b,c)}function ba(a,b,c){if("one"===b)var d=(d=document.cookie.match("(^|;)\\s*"+a+"\\s*=\\s*([^;]+)"))?c?d.pop():a:"";else if("all"===b)for(a=document.cookie.split(/;\s*/),d=[],b=0;b<a.length;b++)d.push(a[b].split("=")[0]);return d}function fa(){if(na){var a=document.querySelectorAll("script[data-cookiecategory]"),b=oa,c=JSON.parse(I).level||[],d=function(f,h){if(h<f.length){var k=f[h],g=k.getAttribute("data-cookiecategory");if(-1<L(c,g)){g=k.cloneNode(!0);var l=g.getAttribute("data-src")||
g.src;l&&(g.src=l);g.type="text/javascript";g.removeAttribute("data-cookiecategory");l&&(b?g.onload=g.onreadystatechange=function(){this.onload=this.onreadystatechange=null;d(f,++h)}:l=!1);k.parentNode.replaceChild(g,k);if(l)return}d(f,++h)}};d(a,0)}}function ya(a){function b(d,f,h,k,g,l,m){l=l&&l.split(" ")||[];if(-1<L(f,g)&&(B(d,g),-1<L(h,l[0])))for(f=0;f<l.length;f++)B(d,l[f]);-1<L(k,m)&&B(d,m)}if("object"===typeof a){var c=a.consent_modal;a=a.settings_modal;P&&c&&b(x,["box","bar","cloud"],["top",
"bottom"],["zoom","slide"],c.layout,c.position,c.transition);a&&b(D,["bar"],["left","right"],["zoom","slide"],a.layout,a.position,a.transition)}}function za(){var a=!1,b=!1;C(document,"keydown",function(c){c=c||window.event;"Tab"===c.key&&(r&&(c.shiftKey?document.activeElement===r[0]&&(r[1].focus(),c.preventDefault()):document.activeElement===r[1]&&(r[0].focus(),c.preventDefault()),b||Y||(b=!0,!a&&c.preventDefault(),c.shiftKey?r[3]?r[2]?r[2].focus():r[0].focus():r[1].focus():r[3]?r[3].focus():r[0].focus())),
!b&&(a=!0))});document.contains&&C(K,"click",function(c){c=c||window.event;ha?M.contains(c.target)?Y=!0:(p.hideSettings(0),Y=!1):Z&&x.contains(c.target)&&(Y=!0)},!0)}function e(a){var b=document.createElement(a);"button"===a&&b.setAttribute("type",a);return b}function L(a,b){for(var c=a.length,d=0;d<c;d++)if(a[d]==b)return d;return-1}function Aa(a,b){if("string"!==typeof a||""==a||document.getElementById("cc--style"))b();else{var c=e("style");c.id="cc--style";var d=new XMLHttpRequest;d.onreadystatechange=
function(){4==this.readyState&&200==this.status&&(c.setAttribute("type","text/css"),c.styleSheet?c.styleSheet.cssText=this.responseText:c.appendChild(document.createTextNode(this.responseText)),document.getElementsByTagName("head")[0].appendChild(c),setTimeout(function(){b()},10))};d.open("GET",a);d.send()}}function aa(a,b){var c=document.querySelectorAll(".c-tgl"),d="",f=[];if("number"===typeof c.length){switch(b){case -1:for(b=0;b<c.length;b++)c[b].checked?(d+='"'+c[b].value+'",',E[b]||(f.push(c[b].value),
E[b]=!0)):E[b]&&(f.push(c[b].value),E[b]=!1);break;case 0:for(b=0;b<c.length;b++)c[b].disabled?(d+='"'+c[b].value+'",',E[b]=!0):(c[b].checked=!1,E[b]&&(f.push(c[b].value),E[b]=!1));break;case 1:for(b=0;b<c.length;b++)c[b].checked=!0,d+='"'+c[b].value+'",',E[b]||f.push(c[b].value),E[b]=!0}d=d.slice(0,-1);if(a.autoclear_cookies&&Q&&0<f.length){c=a.languages[F].settings_modal.blocks;b=c.length;for(var h=-1,k=!1,g=ba("","all"),l=0;l<b;l++){var m=c[l];if(m.hasOwnProperty("toggle")&&!E[++h]&&m.hasOwnProperty("cookie_table")&&
-1<L(f,m.toggle.value)){var y=m.cookie_table,G=X(a.languages[F].settings_modal.cookie_table_headers[0])[0],N=y.length;"on_disable"===m.toggle.reload&&(k=!0);for(var J=0;J<N;J++){var n=y[J],A=[],q=n[G],t=n.path||!1;if(n.is_regex)for(n=0;n<g.length;n++)g[n].match(q)&&A.push(g[n]);else q=L(g,q),-1<q&&A.push(g[q]);if(0<A.length){t=t?t:"/";for(q=0;q<A.length;q++)document.cookie=A[q]+"=; Path="+t+"; Domain="+ca+"; Expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie=A[q]+"=; Path="+t+"; Domain=."+ca+
"; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";"on_clear"===m.toggle.reload&&(k=!0)}}}}k&&window.location.reload()}}I='{"level": ['+d+"]}";if(!Q||0<f.length)d=I,c=new Date,c.setTime(c.getTime()+864E5*pa),d="cc_cookie="+(d||"")+("; expires="+c.toUTCString())+"; Path="+qa+";",d+=" SameSite="+ra+";",-1<location.hostname.indexOf(".")&&(d+=" Domain="+ca+";"),"https:"===location.protocol&&(d+=" Secure;"),document.cookie=d;if("function"===typeof a.onAccept&&!Q)return Q=!0,fa(),a.onAccept(JSON.parse(I));"function"===
typeof a.onChange&&0<f.length&&(fa(),a.onChange(JSON.parse(I)))}function Ba(a,b){K=e("div");K.id="cc--main";K.style.position="fixed";K.style.zIndex="1000000";K.innerHTML='\x3c!--[if lt IE 9 ]><div id="cc_div" class="cc_div ie"></div><![endif]--\x3e\x3c!--[if (gt IE 8)|!(IE)]>\x3c!--\x3e<div id="cc_div" class="cc_div"></div>\x3c!--<![endif]--\x3e';var c=K.children[0],d=F,f="string"===typeof R.textContent?"textContent":"innerText";if(!a){x=e("div");var h=e("div"),k=e("div"),g=e("div"),l=e("div"),m=
e("div"),y=e("button"),G=e("button"),N=e("div");x.id="cm";h.id="c-inr";k.id="c-inr-i";g.id="c-ttl";l.id="c-txt";m.id="c-bns";y.id="c-p-bn";G.id="c-s-bn";N.id="cm-ov";y.className="c-bn";G.className="c-bn c_link";g.setAttribute("role","heading");g.setAttribute("aria-level","2");x.setAttribute("role","dialog");x.setAttribute("aria-modal","true");x.setAttribute("aria-hidden","false");x.setAttribute("aria-labelledby","c-ttl");x.setAttribute("aria-describedby","c-txt");x.style.visibility="hidden";g.insertAdjacentHTML("beforeend",
b.languages[d].consent_modal.title);l.insertAdjacentHTML("beforeend",b.languages[d].consent_modal.description);y[f]=b.languages[d].consent_modal.primary_btn.text;G[f]=b.languages[d].consent_modal.secondary_btn.text;"accept_all"==b.languages[d].consent_modal.primary_btn.role?C(y,"click",function(){p.hide();aa(b,1)}):C(y,"click",function(){p.hide();aa(b,-1)});"accept_necessary"==b.languages[d].consent_modal.secondary_btn.role?C(G,"click",function(){p.hide();aa(b,0)}):C(G,"click",function(){p.showSettings(0)});
k.appendChild(g);k.appendChild(l);m.appendChild(y);m.appendChild(G);h.appendChild(k);h.appendChild(m);x.appendChild(h);c.appendChild(x);c.appendChild(N)}D=e("div");h=e("div");k=e("div");g=e("div");M=e("div");l=e("div");m=e("div");var J=e("button");y=e("div");G=e("div");N=e("div");D.id="s-cnt";h.id="c-vln";g.id="c-s-in";k.id="cs";l.id="s-ttl";M.id="s-inr";m.id="s-hdr";G.id="s-bl";J.id="s-c-bn";N.id="cs-ov";y.id="s-c-bnc";J.className="c-bn";J.setAttribute("aria-label",b.languages[d].settings_modal.close_btn_label||
"Close");D.setAttribute("role","dialog");D.setAttribute("aria-modal","true");D.setAttribute("aria-hidden","true");D.setAttribute("aria-labelledby","s-ttl");l.setAttribute("role","heading");D.style.visibility="hidden";y.appendChild(J);C(h,"keydown",function(S){S=S||window.event;27==S.keyCode&&p.hideSettings(0)},!0);C(J,"click",function(){p.hideSettings(0)});d=b.languages[F].settings_modal.blocks;J=d.length;l.insertAdjacentHTML("beforeend",b.languages[F].settings_modal.title);for(var n=0;n<J;++n){var A=
e("div"),q=e("div"),t=e("div"),u=e("div");A.className="c-bl";q.className="desc";t.className="p";u.className="title";t.insertAdjacentHTML("beforeend",d[n].description);if("undefined"!==typeof d[n].toggle){var v="c-ac-"+n,O=e("button"),H=e("label"),w=e("input"),z=e("span"),T=e("span"),U=e("span"),V=e("span");O.className="b-tl";H.className="b-tg";w.className="c-tgl";U.className="on-i";V.className="off-i";z.className="c-tg";T.className="t-lb";O.setAttribute("aria-expanded","false");O.setAttribute("aria-controls",
v);w.type="checkbox";z.setAttribute("aria-hidden","true");var sa=d[n].toggle.value;w.value=sa;T[f]=d[n].title;O.insertAdjacentHTML("beforeend",d[n].title);u.appendChild(O);z.appendChild(U);z.appendChild(V);a?-1<L(JSON.parse(I).level,sa)?(w.checked=!0,E.push(!0)):E.push(!1):d[n].toggle.enabled&&(w.checked=!0);d[n].toggle.readonly&&(w.disabled=!0,w.setAttribute("aria-readonly","true"),B(z,"c-ro"));B(q,"b-acc");B(u,"b-bn");q.id=v;q.setAttribute("aria-hidden","true");H.appendChild(w);H.appendChild(z);
H.appendChild(T);u.appendChild(H);B(A,"b-ex");(function(S,ia,ta){C(O,"click",function(){ma(ia,"act")?(ea(ia,"act"),ta.setAttribute("aria-expanded","false"),S.setAttribute("aria-hidden","true")):(B(ia,"act"),ta.setAttribute("aria-expanded","true"),S.setAttribute("aria-hidden","false"))},!1)})(q,A,O)}else v=e("div"),v.className="b-tl",v.setAttribute("role","heading"),v.setAttribute("aria-level","3"),v.insertAdjacentHTML("beforeend",d[n].title),u.appendChild(v);A.appendChild(u);q.appendChild(t);if(!0!==
b.remove_cookie_tables&&"undefined"!==typeof d[n].cookie_table){H=document.createDocumentFragment();t=b.languages[F].settings_modal.cookie_table_headers;for(w=0;w<t.length;++w)z=e("th"),u=t[w],z.setAttribute("scope","col"),u&&(v=u&&X(u)[0],z[f]=t[w][v],H.appendChild(z));u=e("tr");u.appendChild(H);v=e("thead");v.appendChild(u);H=e("table");H.appendChild(v);w=document.createDocumentFragment();for(z=0;z<d[n].cookie_table.length;z++){T=e("tr");for(U=0;U<t.length;++U)if(u=t[U])v=X(u)[0],V=e("td"),V[f]=
d[n].cookie_table[z][v],V.setAttribute("data-column",u[v]),T.appendChild(V);w.appendChild(T)}t=e("tbody");t.appendChild(w);H.appendChild(t);q.appendChild(H)}A.appendChild(q);G.appendChild(A)}a=e("div");f=e("button");d=e("button");a.id="s-bns";f.id="s-sv-bn";d.id="s-all-bn";f.className="c-bn";d.className="c-bn";f.insertAdjacentHTML("beforeend",b.languages[F].settings_modal.save_settings_btn);d.insertAdjacentHTML("beforeend",b.languages[F].settings_modal.accept_all_btn);a.appendChild(d);a.appendChild(f);
C(f,"click",function(){p.hideSettings();p.hide();aa(b,-1)});C(d,"click",function(){p.hideSettings();p.hide();aa(b,1)});m.appendChild(l);m.appendChild(y);M.appendChild(m);M.appendChild(G);M.appendChild(a);g.appendChild(M);k.appendChild(g);h.appendChild(k);D.appendChild(h);c.appendChild(D);c.appendChild(N);(xa||document.body).appendChild(K)}function Ca(){function a(c,d){var f=!1,h=!1;try{for(var k=c.querySelectorAll(b.join(':not([tabindex="-1"]), ')),g,l=k.length,m=0;m<l;)g=k[m].getAttribute("data-focus"),
h||"1"!==g?"0"===g&&(f=k[m],h||"0"===k[m+1].getAttribute("data-focus")||(h=k[m+1])):h=k[m],m++}catch(y){return c.querySelectorAll(b.join(", "))}d[0]=k[0];d[1]=k[k.length-1];d[2]=f;d[3]=h}var b=["[href]","button","input","details",'[tabindex="0"]'];a(M,W);P&&a(x,ja)}function ua(a,b){if(b.hasOwnProperty(a))return a;if(0<X(b).length)return b.hasOwnProperty(F)?F:X(b)[0]}function Da(){for(var a=document.querySelectorAll('a[data-cc="c-settings"], button[data-cc="c-settings"]'),b=0;b<a.length;b++)a[b].setAttribute("aria-haspopup",
"dialog"),C(a[b],"click",function(c){p.showSettings(0);c.preventDefault?c.preventDefault():c.returnValue=!1})}function Ea(a){"number"===typeof a.cookie_expiration&&(pa=a.cookie_expiration);"boolean"===typeof a.autorun&&(va=a.autorun);"string"===typeof a.cookie_domain&&(ca=a.cookie_domain);"string"===typeof a.cookie_same_site&&(ra=a.cookie_same_site);"string"===typeof a.cookie_path&&(qa=a.cookie_path);na=!0===a.page_scripts;oa=!1!==a.page_scripts_order;if(!0===a.auto_language){var b=navigator.language||
navigator.browserLanguage;2<b.length&&(b=b[0]+b[1]);F=ua(b.toLowerCase(),a.languages)}else"string"===typeof a.current_lang&&(F=ua(a.current_lang,a.languages));!0===a.force_consent&&B(R,"force--consent")}var F="en",va=!0,pa=182,ca=location.hostname,qa="/",ra="Lax",na,oa,p={},I,P=!1,Q=!1,Z=!1,ha=!1,Y=!1,r,da,wa,ja=[],W=[],E=[],R=document.documentElement,K,x,D,M;p.allowedCategory=function(a){return-1<L(JSON.parse(ba("cc_cookie","one",!0)||"{}").level||[],a)};p.run=function(a){K||(Ea(a),I=ba("cc_cookie",
"one",!0),P=""==I,Aa(a.theme_css,function(){Ba(!P,a);ya(a.gui_options);Da();Ca();!I&&va&&p.show(a.delay||0);setTimeout(function(){B(K,"c--anim")},15);setTimeout(function(){za()},100)}),I&&(Q=!0),Q&&"function"===typeof a.onAccept&&(fa(),a.onAccept(JSON.parse(I||"{}"))))};p.showSettings=function(a){setTimeout(function(){B(R,"show--settings");D.setAttribute("aria-hidden","false");ha=!0;Z?wa=document.activeElement:da=document.activeElement;setTimeout(function(){0!==W.length&&(W[3]?W[3].focus():W[0].focus(),
r=W)},100)},0<a?a:0)};p.loadScript=function(a,b,c){var d="function"===typeof b;if(document.querySelector('script[src="'+a+'"]'))d&&b();else{var f=e("script");if(c&&0<c.length)for(var h=0;h<c.length;++h)c[h]&&f.setAttribute(c[h].name,c[h].value);d&&(f.readyState?f.onreadystatechange=function(){if("loaded"===f.readyState||"complete"===f.readyState)f.onreadystatechange=null,b()}:f.onload=b);f.src=a;(document.head?document.head:document.getElementsByTagName("head")[0]).appendChild(f)}};p.show=function(a){P&&
setTimeout(function(){B(R,"show--consent");x.setAttribute("aria-hidden","false");Z=!0;da=document.activeElement;r=ja},0<a?a:0)};p.hide=function(){P&&(ea(R,"show--consent"),x.setAttribute("aria-hidden","true"),Z=!1,da.focus(),r=null)};p.hideSettings=function(){ea(R,"show--settings");ha=!1;D.setAttribute("aria-hidden","true");Z?(wa.focus(),r=ja):(da.focus(),r=null);Y=!1};p.validCookie=function(a){return""!=ba(a,"one",!0)};return la=window[ka]=void 0,p}var ka="initCookieConsent";"function"!==typeof window[ka]&&
(window[ka]=la)})();
