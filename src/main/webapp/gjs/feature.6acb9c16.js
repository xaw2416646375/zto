(window.webpackJsonp = window.webpackJsonp || []).push([
	["feature"], {
		qQmq: function(e, t, n) {
			"use strict";
			var l = n("YzrG"),
				s = function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}(n("eZTy"));
			var a = (0, l.builtins)(),
				r = (0, l.syntax)(),
				o = a.es2016.__all && a.es2017["Object.entries"] && a.es2017["Object.values"] && r.es2016.__all && r.es2017.__all,
				i = window.localStorage || {
					getItem: function() {
						return !1
					},
					setItem: function() {
						return !1
					},
					fake: !0
				};
			(0, s.default)(function() {
				setTimeout(function() {
					if(!o && !i.getItem("non-es")) {
						var e = document.createElement("div");
						if(e.innerHTML = 'æ‚¨çš„æµè§ˆå™¨å¯èƒ½æ— æ³•æ­£å¸¸ä½¿ç”¨è¯·è€ƒè™‘æ›´æ¢æœ€æ–°ç‰ˆ <a style="text-decoration: underline" href="https://cn.bing.com/search?q=Chrome+æµè§ˆå™¨">Chrome</a>ã€<a style="text-decoration: underline" href="https://www.mozilla.org/zh-CN/firefox/new">Firefox</a> ç­‰çŽ°ä»£æµè§ˆå™¨ï¼Œè°¢è°¢ï¼<br />', e.style.background = "rgba(0,0,0,0.6)", e.style.color = "white", e.className = "compatiblePrompt", e.style.textAlign = "center", e.style.top = "0", e.style.left = "0", e.style.right = "0", e.style.bottom = "0", e.style.zIndex = "99", e.style.position = "relative", e.style.padding = "0.5em", !i.fake) {
							var t = document.createElement("a");
							t.innerHTML = "å…³é—­æç¤º", t.style.color = "#fff", t.style.background = "#409eff", t.style.letterSpacing = "2px", t.style.padding = "8px 0", t.style.width = "70px", t.style.display = "block", t.style.textAlign = "center", t.style.borderRadius = "5px", t.style.fontSize = "12px", t.style.margin = "10px auto 0", t.href = "#", t.addEventListener("click", function(t) {
								e.style.display = "none", i.setItem("non-es", "true"), t.preventDefault()
							}), e.appendChild(t)
						}
						var n = document.getElementsByTagName("body")[0];
						document.getElementsByClassName("compatiblePrompt")[0] || n.insertAdjacentElement("afterbegin", e)
					}
				}, 1e3)
			})
		}
	},
	[
		["qQmq", "runtime", "chunk-libs"]
	]
]);