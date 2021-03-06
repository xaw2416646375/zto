/*global ActiveXObject, window, console, define, module, jQuery */
//jshint unused:false, strict: false

/*
    PDFObject v2.1.1
    https://github.com/pipwerks/PDFObject
    Copyright (c) 2008-2018 Philip Hutchison
    MIT-style license: http://pipwerks.mit-license.org/
    UMD module pattern from https://github.com/umdjs/umd/blob/master/templates/returnExports.js
*/

(function(root, factory) {
	if(typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], factory);
	} else if(typeof module === 'object' && module.exports) {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	} else {
		// Browser globals (root is window)
		root.PDFObject = factory();
	}
}(this, function() {

	"use strict";
	//jshint unused:true

	//PDFObject is designed for client-side (browsers), not server-side (node)
	//Will choke on undefined navigator and window vars when run on server
	//Return boolean false and exit function when running server-side

	if(typeof window === "undefined" || typeof navigator === "undefined") {
		return false;
	}

	var pdfobjectversion = "2.1.1",
		ua = window.navigator.userAgent,

		//declare booleans
		supportsPDFs,
		isIE,
		supportsPdfMimeType = (typeof navigator.mimeTypes['application/pdf'] !== "undefined"),
		supportsPdfActiveX,
		isModernBrowser = (function() {
			return(typeof window.Promise !== "undefined");
		})(),
		isFirefox = (function() {
			return(ua.indexOf("irefox") !== -1);
		})(),
		isFirefoxWithPDFJS = (function() {
			//Firefox started shipping PDF.js in Firefox 19.
			//If this is Firefox 19 or greater, assume PDF.js is available
			if(!isFirefox) {
				return false;
			}
			//parse userAgent string to get release version ("rv")
			//ex: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:57.0) Gecko/20100101 Firefox/57.0
			return(parseInt(ua.split("rv:")[1].split(".")[0], 10) > 18);
		})(),
		isIOS = (function() {
			return(/iphone|ipad|ipod/i.test(ua.toLowerCase()));
		})(),

		//declare functions
		createAXO,
		buildFragmentString,
		log,
		embedError,
		embed,
		getTargetElement,
		generatePDFJSiframe,
		generateEmbedElement;

	/* ----------------------------------------------------
	   Supporting functions
	   ---------------------------------------------------- */

	createAXO = function(type) {
		var ax;
		try {
			ax = new ActiveXObject(type);
		} catch(e) {
			ax = null; //ensure ax remains null
		}
		return ax;
	};

	//IE11 still uses ActiveX for Adobe Reader, but IE 11 doesn't expose
	//window.ActiveXObject the same way previous versions of IE did
	//window.ActiveXObject will evaluate to false in IE 11, but "ActiveXObject" in window evaluates to true
	//so check the first one for older IE, and the second for IE11
	//FWIW, MS Edge (replacing IE11) does not support ActiveX at all, both will evaluate false
	//Constructed as a method (not a prop) to avoid unneccesarry overhead -- will only be evaluated if needed
	isIE = function() {
		return !!(window.ActiveXObject || "ActiveXObject" in window);
	};

	//If either ActiveX support for "AcroPDF.PDF" or "PDF.PdfCtrl" are found, return true
	//Constructed as a method (not a prop) to avoid unneccesarry overhead -- will only be evaluated if needed
	supportsPdfActiveX = function() {
		return !!(createAXO("AcroPDF.PDF") || createAXO("PDF.PdfCtrl"));
	};

	//Determines whether PDF support is available
	supportsPDFs = (
		//as of iOS 12, inline PDF rendering is still not supported in Safari or native webview
		//3rd-party browsers (eg Chrome, Firefox) use Apple's webview for rendering, and thus the same result as Safari
		//Therefore if iOS, we shall assume that PDF support is not available
		!isIOS && (
			//Modern versions of Firefox come bundled with PDFJS
			isFirefoxWithPDFJS ||
			//Browsers that still support the original MIME type check
			supportsPdfMimeType || (
				//Pity the poor souls still using IE
				isIE() && supportsPdfActiveX()
			)
		)
	);

	//Create a fragment identifier for using PDF Open parameters when embedding PDF
	buildFragmentString = function(pdfParams) {

		var string = "",
			prop;

		if(pdfParams) {

			for(prop in pdfParams) {
				if(pdfParams.hasOwnProperty(prop)) {
					string += encodeURIComponent(prop) + "=" + encodeURIComponent(pdfParams[prop]) + "&";
				}
			}

			//The string will be empty if no PDF Params found
			if(string) {

				string = "#" + string;

				//Remove last ampersand
				string = string.slice(0, string.length - 1);

			}

		}

		return string;

	};

	log = function(msg) {
		if(typeof console !== "undefined" && console.log) {
			console.log("[PDFObject] " + msg);
		}
	};

	embedError = function(msg) {
		log(msg);
		return false;
	};

	getTargetElement = function(targetSelector) {

		//Default to body for full-browser PDF
		var targetNode = document.body;

		//If a targetSelector is specified, check to see whether
		//it's passing a selector, jQuery object, or an HTML element

		if(typeof targetSelector === "string") {

			//Is CSS selector
			targetNode = document.querySelector(targetSelector);

		} else if(typeof jQuery !== "undefined" && targetSelector instanceof jQuery && targetSelector.length) {

			//Is jQuery element. Extract HTML node
			targetNode = targetSelector.get(0);

		} else if(typeof targetSelector.nodeType !== "undefined" && targetSelector.nodeType === 1) {

			//Is HTML element
			targetNode = targetSelector;

		}

		return targetNode;

	};

	generatePDFJSiframe = function(targetNode, url, pdfOpenFragment, PDFJS_URL, id) {

		var fullURL = PDFJS_URL + "?file=" + encodeURIComponent(url) + pdfOpenFragment;
		var scrollfix = (isIOS) ? "-webkit-overflow-scrolling: touch; overflow-y: scroll; " : "overflow: hidden; ";
		var iframe = "<div style='" + scrollfix + "position: absolute; top: 0; right: 0; bottom: 0; left: 0;'><iframe  " + id + " src='" + fullURL + "' style='border: none; width: 100%; height: 100%;' frameborder='0'></iframe></div>";
		targetNode.className += " pdfobject-container";
		targetNode.style.position = "relative";
		targetNode.style.overflow = "auto";
		targetNode.innerHTML = iframe;
		return targetNode.getElementsByTagName("iframe")[0];

	};

	generateEmbedElement = function(targetNode, targetSelector, url, pdfOpenFragment, width, height, id) {

		var style = "";

		if(targetSelector && targetSelector !== document.body) {
			style = "width: " + width + "; height: " + height + ";";
		} else {
			style = "position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;";
		}

		targetNode.className += " pdfobject-container";
		targetNode.innerHTML = "<embed " + id + " class='pdfobject' src='" + url + pdfOpenFragment + "' type='application/pdf' style='overflow: auto; " + style + "'/>";

		return targetNode.getElementsByTagName("embed")[0];

	};

	embed = function(url, targetSelector, options) {

		//Ensure URL is available. If not, exit now.
		if(typeof url !== "string") {
			return embedError("URL is not valid");
		}

		//If targetSelector is not defined, convert to boolean
		targetSelector = (typeof targetSelector !== "undefined") ? targetSelector : false;

		//Ensure options object is not undefined -- enables easier error checking below
		options = (typeof options !== "undefined") ? options : {};

		//Get passed options, or set reasonable defaults
		var id = (options.id && typeof options.id === "string") ? "id='" + options.id + "'" : "",
			page = (options.page) ? options.page : false,
			pdfOpenParams = (options.pdfOpenParams) ? options.pdfOpenParams : {},
			fallbackLink = (typeof options.fallbackLink !== "undefined") ? options.fallbackLink : true,
			width = (options.width) ? options.width : "100%",
			height = (options.height) ? options.height : "100%",
			assumptionMode = (typeof options.assumptionMode === "boolean") ? options.assumptionMode : true,
			forcePDFJS = (typeof options.forcePDFJS === "boolean") ? options.forcePDFJS : false,
			PDFJS_URL = (options.PDFJS_URL) ? options.PDFJS_URL : false,
			targetNode = getTargetElement(targetSelector),
			fallbackHTML = "",
			pdfOpenFragment = "",
			fallbackHTML_default = "<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href='[url]'>Download PDF</a></p>";

		//If target element is specified but is not valid, exit without doing anything
		if(!targetNode) {
			return embedError("Target element cannot be determined");
		}

		//page option overrides pdfOpenParams, if found
		if(page) {
			pdfOpenParams.page = page;
		}

		//Stringify optional Adobe params for opening document (as fragment identifier)
		pdfOpenFragment = buildFragmentString(pdfOpenParams);

		//Do the dance

		//If the forcePDFJS option is invoked, skip everything else and embed as directed
		if(forcePDFJS && PDFJS_URL) {

			return generatePDFJSiframe(targetNode, url, pdfOpenFragment, PDFJS_URL, id);

			//If traditional support is provided, or if this is a modern browser and not iOS (see comment for supportsPDFs declaration)
		} else if(supportsPDFs || (assumptionMode && isModernBrowser && !isIOS)) {

			return generateEmbedElement(targetNode, targetSelector, url, pdfOpenFragment, width, height, id);

			//If everything else has failed and a PDFJS fallback is provided, try to use it
		} else if(PDFJS_URL) {

			return generatePDFJSiframe(targetNode, url, pdfOpenFragment, PDFJS_URL, id);

		} else {

			//Display the fallback link if available
			if(fallbackLink) {

				fallbackHTML = (typeof fallbackLink === "string") ? fallbackLink : fallbackHTML_default;
				targetNode.innerHTML = fallbackHTML.replace(/\[url\]/g, url);

			}

			return embedError("This browser does not support embedded PDFs");

		}

	};

	return {
		embed: function(a, b, c) {
			return embed(a, b, c);
		},
		pdfobjectversion: (function() {
			return pdfobjectversion;
		})(),
		supportsPDFs: (function() {
			return supportsPDFs;
		})()
	};

}));
//jQuery v1.10.1 

(function(e, t) {
	var n, r, i = typeof t,
		o = e.location,
		a = e.document,
		s = a.documentElement,
		l = e.jQuery,
		u = e.$,
		c = {},
		p = [],
		f = "1.10.1",
		d = p.concat,
		h = p.push,
		g = p.slice,
		m = p.indexOf,
		y = c.toString,
		v = c.hasOwnProperty,
		b = f.trim,
		x = function(e, t) {
			return new x.fn.init(e, t, r)
		},
		w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		T = /\S+/g,
		C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		E = /^[\],:{}\s]*$/,
		S = /(?:^|:|,)(?:\s*\[)+/g,
		A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
		D = /^-ms-/,
		L = /-([\da-z])/gi,
		H = function(e, t) {
			return t.toUpperCase()
		},
		q = function(e) {
			(a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
		},
		_ = function() {
			a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
		};
	x.fn = x.prototype = {
		jquery: f,
		constructor: x,
		init: function(e, n, r) {
			var i, o;
			if(!e) return this;
			if("string" == typeof e) {
				if(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
				if(i[1]) {
					if(n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))
						for(i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
					return this
				}
				if(o = a.getElementById(i[2]), o && o.parentNode) {
					if(o.id !== i[2]) return r.find(e);
					this.length = 1, this[0] = o
				}
				return this.context = a, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
		},
		selector: "",
		length: 0,
		toArray: function() {
			return g.call(this)
		},
		get: function(e) {
			return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
		},
		pushStack: function(e) {
			var t = x.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return x.each(this, e, t)
		},
		ready: function(e) {
			return x.ready.promise().done(e), this
		},
		slice: function() {
			return this.pushStack(g.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		map: function(e) {
			return this.pushStack(x.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: h,
		sort: [].sort,
		splice: [].splice
	}, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
		var e, n, r, i, o, a, s = arguments[0] || {},
			l = 1,
			u = arguments.length,
			c = !1;
		for("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)
			if(null != (o = arguments[l]))
				for(i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
		return s
	}, x.extend({
		expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
		noConflict: function(t) {
			return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? x.readyWait++ : x.ready(!0)
		},
		ready: function(e) {
			if(e === !0 ? !--x.readyWait : !x.isReady) {
				if(!a.body) return setTimeout(x.ready);
				x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
			}
		},
		isFunction: function(e) {
			return "function" === x.type(e)
		},
		isArray: Array.isArray || function(e) {
			return "array" === x.type(e)
		},
		isWindow: function(e) {
			return null != e && e == e.window
		},
		isNumeric: function(e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
		},
		isPlainObject: function(e) {
			var n;
			if(!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
			try {
				if(e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch(r) {
				return !1
			}
			if(x.support.ownLast)
				for(n in e) return v.call(e, n);
			for(n in e);
			return n === t || v.call(e, n)
		},
		isEmptyObject: function(e) {
			var t;
			for(t in e) return !1;
			return !0
		},
		error: function(e) {
			throw Error(e)
		},
		parseHTML: function(e, t, n) {
			if(!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || a;
			var r = k.exec(e),
				i = !n && [];
			return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
		},
		parseJSON: function(n) {
			return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
		},
		parseXML: function(n) {
			var r, i;
			if(!n || "string" != typeof n) return null;
			try {
				e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
			} catch(o) {
				r = t
			}
			return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
		},
		noop: function() {},
		globalEval: function(t) {
			t && x.trim(t) && (e.execScript || function(t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function(e) {
			return e.replace(D, "ms-").replace(L, H)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, n) {
			var r, i = 0,
				o = e.length,
				a = M(e);
			if(n) {
				if(a) {
					for(; o > i; i++)
						if(r = t.apply(e[i], n), r === !1) break
				} else
					for(i in e)
						if(r = t.apply(e[i], n), r === !1) break
			} else if(a) {
				for(; o > i; i++)
					if(r = t.call(e[i], i, e[i]), r === !1) break
			} else
				for(i in e)
					if(r = t.call(e[i], i, e[i]), r === !1) break;
			return e
		},
		trim: b && !b.call("\ufeff\u00a0") ? function(e) {
			return null == e ? "" : b.call(e)
		} : function(e) {
			return null == e ? "" : (e + "").replace(C, "")
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
		},
		inArray: function(e, t, n) {
			var r;
			if(t) {
				if(m) return m.call(t, e, n);
				for(r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
					if(n in t && t[n] === e) return n
			}
			return -1
		},
		merge: function(e, n) {
			var r = n.length,
				i = e.length,
				o = 0;
			if("number" == typeof r)
				for(; r > o; o++) e[i++] = n[o];
			else
				while(n[o] !== t) e[i++] = n[o++];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			var r, i = [],
				o = 0,
				a = e.length;
			for(n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
			return i
		},
		map: function(e, t, n) {
			var r, i = 0,
				o = e.length,
				a = M(e),
				s = [];
			if(a)
				for(; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
			else
				for(i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
			return d.apply([], s)
		},
		guid: 1,
		proxy: function(e, n) {
			var r, i, o;
			return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function() {
				return e.apply(n || this, r.concat(g.call(arguments)))
			}, i.guid = e.guid = e.guid || x.guid++, i) : t
		},
		access: function(e, n, r, i, o, a, s) {
			var l = 0,
				u = e.length,
				c = null == r;
			if("object" === x.type(r)) {
				o = !0;
				for(l in r) x.access(e, n, l, r[l], !0, a, s)
			} else if(i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
					return c.call(x(e), n)
				})), n))
				for(; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
			return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
		},
		now: function() {
			return(new Date).getTime()
		},
		swap: function(e, t, n, r) {
			var i, o, a = {};
			for(o in t) a[o] = e.style[o], e.style[o] = t[o];
			i = n.apply(e, r || []);
			for(o in t) e.style[o] = a[o];
			return i
		}
	}), x.ready.promise = function(t) {
		if(!n)
			if(n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);
			else if(a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);
		else {
			a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
			var r = !1;
			try {
				r = null == e.frameElement && a.documentElement
			} catch(i) {}
			r && r.doScroll && function o() {
				if(!x.isReady) {
					try {
						r.doScroll("left")
					} catch(e) {
						return setTimeout(o, 50)
					}
					_(), x.ready()
				}
			}()
		}
		return n.promise(t)
	}, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		c["[object " + t + "]"] = t.toLowerCase()
	});

	function M(e) {
		var t = e.length,
			n = x.type(e);
		return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}
	r = x(a),
		function(e, t) {
			var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date,
				w = e.document,
				T = 0,
				C = 0,
				N = lt(),
				k = lt(),
				E = lt(),
				S = !1,
				A = function() {
					return 0
				},
				j = typeof t,
				D = 1 << 31,
				L = {}.hasOwnProperty,
				H = [],
				q = H.pop,
				_ = H.push,
				M = H.push,
				O = H.slice,
				F = H.indexOf || function(e) {
					var t = 0,
						n = this.length;
					for(; n > t; t++)
						if(this[t] === e) return t;
					return -1
				},
				B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				P = "[\\x20\\t\\r\\n\\f]",
				R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				W = R.replace("w", "w#"),
				$ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
				I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
				z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
				X = RegExp("^" + P + "*," + P + "*"),
				U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
				V = RegExp(P + "*[+~]"),
				Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
				J = RegExp(I),
				G = RegExp("^" + W + "$"),
				Q = {
					ID: RegExp("^#(" + R + ")"),
					CLASS: RegExp("^\\.(" + R + ")"),
					TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
					ATTR: RegExp("^" + $),
					PSEUDO: RegExp("^" + I),
					CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
					bool: RegExp("^(?:" + B + ")$", "i"),
					needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
				},
				K = /^[^{]+\{\s*\[native \w/,
				Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				et = /^(?:input|select|textarea|button)$/i,
				tt = /^h\d$/i,
				nt = /'|\\/g,
				rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
				it = function(e, t, n) {
					var r = "0x" + t - 65536;
					return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
				};
			try {
				M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
			} catch(ot) {
				M = {
					apply: H.length ? function(e, t) {
						_.apply(e, O.call(t))
					} : function(e, t) {
						var n = e.length,
							r = 0;
						while(e[n++] = t[r++]);
						e.length = n - 1
					}
				}
			}

			function at(e, t, n, i) {
				var o, a, s, l, u, c, d, m, y, x;
				if((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;
				if(1 !== (l = t.nodeType) && 9 !== l) return [];
				if(h && !i) {
					if(o = Z.exec(e))
						if(s = o[1]) {
							if(9 === l) {
								if(a = t.getElementById(s), !a || !a.parentNode) return n;
								if(a.id === s) return n.push(a), n
							} else if(t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n
						} else {
							if(o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
							if((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n
						}
					if(r.qsa && (!g || !g.test(e))) {
						if(m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
							c = bt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
							while(u--) c[u] = m + xt(c[u]);
							y = V.test(e) && t.parentNode || t, x = c.join(",")
						}
						if(x) try {
							return M.apply(n, y.querySelectorAll(x)), n
						} catch(T) {} finally {
							d || t.removeAttribute("id")
						}
					}
				}
				return At(e.replace(z, "$1"), t, n, i)
			}

			function st(e) {
				return K.test(e + "")
			}

			function lt() {
				var e = [];

				function t(n, r) {
					return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
				}
				return t
			}

			function ut(e) {
				return e[b] = !0, e
			}

			function ct(e) {
				var t = f.createElement("div");
				try {
					return !!e(t)
				} catch(n) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function pt(e, t, n) {
				e = e.split("|");
				var r, i = e.length,
					a = n ? null : t;
				while(i--)(r = o.attrHandle[e[i]]) && r !== t || (o.attrHandle[e[i]] = a)
			}

			function ft(e, t) {
				var n = e.getAttributeNode(t);
				return n && n.specified ? n.value : e[t] === !0 ? t.toLowerCase() : null
			}

			function dt(e, t) {
				return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}

			function ht(e) {
				return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t
			}

			function gt(e, t) {
				var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
				if(r) return r;
				if(n)
					while(n = n.nextSibling)
						if(n === t) return -1;
				return e ? 1 : -1
			}

			function mt(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return "input" === n && t.type === e
				}
			}

			function yt(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return("input" === n || "button" === n) && t.type === e
				}
			}

			function vt(e) {
				return ut(function(t) {
					return t = +t, ut(function(n, r) {
						var i, o = e([], n.length, t),
							a = o.length;
						while(a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
					})
				})
			}
			s = at.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return t ? "HTML" !== t.nodeName : !1
			}, r = at.support = {}, p = at.setDocument = function(e) {
				var n = e ? e.ownerDocument || e : w,
					i = n.parentWindow;
				return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.frameElement && i.attachEvent("onbeforeunload", function() {
					p()
				}), r.attributes = ct(function(e) {
					return e.innerHTML = "<a href='#'></a>", pt("type|href|height|width", dt, "#" === e.firstChild.getAttribute("href")), pt(B, ft, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className")
				}), r.input = ct(function(e) {
					return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
				}), pt("value", ht, r.attributes && r.input), r.getElementsByTagName = ct(function(e) {
					return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
				}), r.getElementsByClassName = ct(function(e) {
					return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
				}), r.getById = ct(function(e) {
					return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
				}), r.getById ? (o.find.ID = function(e, t) {
					if(typeof t.getElementById !== j && h) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, o.filter.ID = function(e) {
					var t = e.replace(rt, it);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}) : (delete o.find.ID, o.filter.ID = function(e) {
					var t = e.replace(rt, it);
					return function(e) {
						var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), o.find.TAG = r.getElementsByTagName ? function(e, n) {
					return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
				} : function(e, t) {
					var n, r = [],
						i = 0,
						o = t.getElementsByTagName(e);
					if("*" === e) {
						while(n = o[i++]) 1 === n.nodeType && r.push(n);
						return r
					}
					return o
				}, o.find.CLASS = r.getElementsByClassName && function(e, n) {
					return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
				}, m = [], g = [], (r.qsa = st(n.querySelectorAll)) && (ct(function(e) {
					e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
				}), ct(function(e) {
					var t = n.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
				})), (r.matchesSelector = st(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ct(function(e) {
					r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
				}), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = st(d.contains) || d.compareDocumentPosition ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
				} : function(e, t) {
					if(t)
						while(t = t.parentNode)
							if(t === e) return !0;
					return !1
				}, r.sortDetached = ct(function(e) {
					return 1 & e.compareDocumentPosition(n.createElement("div"))
				}), A = d.compareDocumentPosition ? function(e, t) {
					if(e === t) return S = !0, 0;
					var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
					return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
				} : function(e, t) {
					var r, i = 0,
						o = e.parentNode,
						a = t.parentNode,
						s = [e],
						l = [t];
					if(e === t) return S = !0, 0;
					if(!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
					if(o === a) return gt(e, t);
					r = e;
					while(r = r.parentNode) s.unshift(r);
					r = t;
					while(r = r.parentNode) l.unshift(r);
					while(s[i] === l[i]) i++;
					return i ? gt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
				}, n) : f
			}, at.matches = function(e, t) {
				return at(e, null, null, t)
			}, at.matchesSelector = function(e, t) {
				if((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
					var n = y.call(e, t);
					if(n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
				} catch(i) {}
				return at(t, f, null, [e]).length > 0
			}, at.contains = function(e, t) {
				return(e.ownerDocument || e) !== f && p(e), v(e, t)
			}, at.attr = function(e, n) {
				(e.ownerDocument || e) !== f && p(e);
				var i = o.attrHandle[n.toLowerCase()],
					a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
				return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
			}, at.error = function(e) {
				throw Error("Syntax error, unrecognized expression: " + e)
			}, at.uniqueSort = function(e) {
				var t, n = [],
					i = 0,
					o = 0;
				if(S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
					while(t = e[o++]) t === e[o] && (i = n.push(o));
					while(i--) e.splice(n[i], 1)
				}
				return e
			}, a = at.getText = function(e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if(i) {
					if(1 === i || 9 === i || 11 === i) {
						if("string" == typeof e.textContent) return e.textContent;
						for(e = e.firstChild; e; e = e.nextSibling) n += a(e)
					} else if(3 === i || 4 === i) return e.nodeValue
				} else
					for(; t = e[r]; r++) n += a(t);
				return n
			}, o = at.selectors = {
				cacheLength: 50,
				createPseudo: ut,
				match: Q,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
					},
					PSEUDO: function(e) {
						var n, r = !e[5] && e[2];
						return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = bt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(rt, it).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = N[e + " "];
						return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
							return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
						})
					},
					ATTR: function(e, t, n) {
						return function(r) {
							var i = at.attr(r, e);
							return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
						}
					},
					CHILD: function(e, t, n, r, i) {
						var o = "nth" !== e.slice(0, 3),
							a = "last" !== e.slice(-4),
							s = "of-type" === t;
						return 1 === r && 0 === i ? function(e) {
							return !!e.parentNode
						} : function(t, n, l) {
							var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
								m = t.parentNode,
								y = s && t.nodeName.toLowerCase(),
								v = !l && !s;
							if(m) {
								if(o) {
									while(g) {
										p = t;
										while(p = p[g])
											if(s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
										h = g = "only" === e && !h && "nextSibling"
									}
									return !0
								}
								if(h = [a ? m.firstChild : m.lastChild], a && v) {
									c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
									while(p = ++d && p && p[g] || (f = d = 0) || h.pop())
										if(1 === p.nodeType && ++f && p === t) {
											c[e] = [T, d, f];
											break
										}
								} else if(v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];
								else
									while(p = ++d && p && p[g] || (f = d = 0) || h.pop())
										if((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break;
								return f -= i, f === r || 0 === f % r && f / r >= 0
							}
						}
					},
					PSEUDO: function(e, t) {
						var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
						return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? ut(function(e, n) {
							var i, o = r(e, t),
								a = o.length;
							while(a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
						}) : function(e) {
							return r(e, 0, n)
						}) : r
					}
				},
				pseudos: {
					not: ut(function(e) {
						var t = [],
							n = [],
							r = l(e.replace(z, "$1"));
						return r[b] ? ut(function(e, t, n, i) {
							var o, a = r(e, null, i, []),
								s = e.length;
							while(s--)(o = a[s]) && (e[s] = !(t[s] = o))
						}) : function(e, i, o) {
							return t[0] = e, r(t, null, o, n), !n.pop()
						}
					}),
					has: ut(function(e) {
						return function(t) {
							return at(e, t).length > 0
						}
					}),
					contains: ut(function(e) {
						return function(t) {
							return(t.textContent || t.innerText || a(t)).indexOf(e) > -1
						}
					}),
					lang: ut(function(e) {
						return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
							function(t) {
								var n;
								do
									if(n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function(e) {
						return e === d
					},
					focus: function(e) {
						return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return e.disabled === !1
					},
					disabled: function(e) {
						return e.disabled === !0
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
					},
					empty: function(e) {
						for(e = e.firstChild; e; e = e.nextSibling)
							if(e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
						return !0
					},
					parent: function(e) {
						return !o.pseudos.empty(e)
					},
					header: function(e) {
						return tt.test(e.nodeName)
					},
					input: function(e) {
						return et.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
					},
					first: vt(function() {
						return [0]
					}),
					last: vt(function(e, t) {
						return [t - 1]
					}),
					eq: vt(function(e, t, n) {
						return [0 > n ? n + t : n]
					}),
					even: vt(function(e, t) {
						var n = 0;
						for(; t > n; n += 2) e.push(n);
						return e
					}),
					odd: vt(function(e, t) {
						var n = 1;
						for(; t > n; n += 2) e.push(n);
						return e
					}),
					lt: vt(function(e, t, n) {
						var r = 0 > n ? n + t : n;
						for(; --r >= 0;) e.push(r);
						return e
					}),
					gt: vt(function(e, t, n) {
						var r = 0 > n ? n + t : n;
						for(; t > ++r;) e.push(r);
						return e
					})
				}
			};
			for(n in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) o.pseudos[n] = mt(n);
			for(n in {
					submit: !0,
					reset: !0
				}) o.pseudos[n] = yt(n);

			function bt(e, t) {
				var n, r, i, a, s, l, u, c = k[e + " "];
				if(c) return t ? 0 : c.slice(0);
				s = e, l = [], u = o.preFilter;
				while(s) {
					(!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
						value: n,
						type: r[0].replace(z, " ")
					}), s = s.slice(n.length));
					for(a in o.filter) !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
						value: n,
						type: a,
						matches: r
					}), s = s.slice(n.length));
					if(!n) break
				}
				return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
			}

			function xt(e) {
				var t = 0,
					n = e.length,
					r = "";
				for(; n > t; t++) r += e[t].value;
				return r
			}

			function wt(e, t, n) {
				var r = t.dir,
					o = n && "parentNode" === r,
					a = C++;
				return t.first ? function(t, n, i) {
					while(t = t[r])
						if(1 === t.nodeType || o) return e(t, n, i)
				} : function(t, n, s) {
					var l, u, c, p = T + " " + a;
					if(s) {
						while(t = t[r])
							if((1 === t.nodeType || o) && e(t, n, s)) return !0
					} else
						while(t = t[r])
							if(1 === t.nodeType || o)
								if(c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
									if((l = u[1]) === !0 || l === i) return l === !0
								} else if(u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0
				}
			}

			function Tt(e) {
				return e.length > 1 ? function(t, n, r) {
					var i = e.length;
					while(i--)
						if(!e[i](t, n, r)) return !1;
					return !0
				} : e[0]
			}

			function Ct(e, t, n, r, i) {
				var o, a = [],
					s = 0,
					l = e.length,
					u = null != t;
				for(; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
				return a
			}

			function Nt(e, t, n, r, i, o) {
				return r && !r[b] && (r = Nt(r)), i && !i[b] && (i = Nt(i, o)), ut(function(o, a, s, l) {
					var u, c, p, f = [],
						d = [],
						h = a.length,
						g = o || St(t || "*", s.nodeType ? [s] : s, []),
						m = !e || !o && t ? g : Ct(g, f, e, s, l),
						y = n ? i || (o ? e : h || r) ? [] : a : m;
					if(n && n(m, y, s, l), r) {
						u = Ct(y, d), r(u, [], s, l), c = u.length;
						while(c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
					}
					if(o) {
						if(i || e) {
							if(i) {
								u = [], c = y.length;
								while(c--)(p = y[c]) && u.push(m[c] = p);
								i(null, y = [], u, l)
							}
							c = y.length;
							while(c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
						}
					} else y = Ct(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
				})
			}

			function kt(e) {
				var t, n, r, i = e.length,
					a = o.relative[e[0].type],
					s = a || o.relative[" "],
					l = a ? 1 : 0,
					c = wt(function(e) {
						return e === t
					}, s, !0),
					p = wt(function(e) {
						return F.call(t, e) > -1
					}, s, !0),
					f = [function(e, n, r) {
						return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
					}];
				for(; i > l; l++)
					if(n = o.relative[e[l].type]) f = [wt(Tt(f), n)];
					else {
						if(n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
							for(r = ++l; i > r; r++)
								if(o.relative[e[r].type]) break;
							return Nt(l > 1 && Tt(f), l > 1 && xt(e.slice(0, l - 1).concat({
								value: " " === e[l - 2].type ? "*" : ""
							})).replace(z, "$1"), n, r > l && kt(e.slice(l, r)), i > r && kt(e = e.slice(r)), i > r && xt(e))
						}
						f.push(n)
					}
				return Tt(f)
			}

			function Et(e, t) {
				var n = 0,
					r = t.length > 0,
					a = e.length > 0,
					s = function(s, l, c, p, d) {
						var h, g, m, y = [],
							v = 0,
							b = "0",
							x = s && [],
							w = null != d,
							C = u,
							N = s || a && o.find.TAG("*", d && l.parentNode || l),
							k = T += null == C ? 1 : Math.random() || .1;
						for(w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
							if(a && h) {
								g = 0;
								while(m = e[g++])
									if(m(h, l, c)) {
										p.push(h);
										break
									}
								w && (T = k, i = ++n)
							}
							r && ((h = !m && h) && v--, s && x.push(h))
						}
						if(v += b, r && b !== v) {
							g = 0;
							while(m = t[g++]) m(x, y, l, c);
							if(s) {
								if(v > 0)
									while(b--) x[b] || y[b] || (y[b] = q.call(p));
								y = Ct(y)
							}
							M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
						}
						return w && (T = k, u = C), x
					};
				return r ? ut(s) : s
			}
			l = at.compile = function(e, t) {
				var n, r = [],
					i = [],
					o = E[e + " "];
				if(!o) {
					t || (t = bt(e)), n = t.length;
					while(n--) o = kt(t[n]), o[b] ? r.push(o) : i.push(o);
					o = E(e, Et(i, r))
				}
				return o
			};

			function St(e, t, n) {
				var r = 0,
					i = t.length;
				for(; i > r; r++) at(e, t[r], n);
				return n
			}

			function At(e, t, n, i) {
				var a, s, u, c, p, f = bt(e);
				if(!i && 1 === f.length) {
					if(s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
						if(t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
						e = e.slice(s.shift().value.length)
					}
					a = Q.needsContext.test(e) ? 0 : s.length;
					while(a--) {
						if(u = s[a], o.relative[c = u.type]) break;
						if((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
							if(s.splice(a, 1), e = i.length && xt(s), !e) return M.apply(n, i), n;
							break
						}
					}
				}
				return l(e, f)(i, t, !h, n, V.test(e)), n
			}
			o.pseudos.nth = o.pseudos.eq;

			function jt() {}
			jt.prototype = o.filters = o.pseudos, o.setFilters = new jt, r.sortStable = b.split("").sort(A).join("") === b, p(), [0, 0].sort(A), r.detectDuplicates = S, x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
		}(e);
	var O = {};

	function F(e) {
		var t = O[e] = {};
		return x.each(e.match(T) || [], function(e, n) {
			t[n] = !0
		}), t
	}
	x.Callbacks = function(e) {
		e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
		var n, r, i, o, a, s, l = [],
			u = !e.once && [],
			c = function(t) {
				for(r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)
					if(l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
						r = !1;
						break
					}
				n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
			},
			p = {
				add: function() {
					if(l) {
						var t = l.length;
						(function i(t) {
							x.each(t, function(t, n) {
								var r = x.type(n);
								"function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
							})
						})(arguments), n ? o = l.length : r && (s = t, c(r))
					}
					return this
				},
				remove: function() {
					return l && x.each(arguments, function(e, t) {
						var r;
						while((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
					}), this
				},
				has: function(e) {
					return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
				},
				empty: function() {
					return l = [], o = 0, this
				},
				disable: function() {
					return l = u = r = t, this
				},
				disabled: function() {
					return !l
				},
				lock: function() {
					return u = t, r || p.disable(), this
				},
				locked: function() {
					return !u
				},
				fireWith: function(e, t) {
					return t = t || [], t = [e, t.slice ? t.slice() : t], !l || i && !u || (n ? u.push(t) : c(t)), this
				},
				fire: function() {
					return p.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return p
	}, x.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", x.Callbacks("once memory"), "resolved"],
					["reject", "fail", x.Callbacks("once memory"), "rejected"],
					["notify", "progress", x.Callbacks("memory")]
				],
				n = "pending",
				r = {
					state: function() {
						return n
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return x.Deferred(function(n) {
							x.each(t, function(t, o) {
								var a = o[0],
									s = x.isFunction(e[t]) && e[t];
								i[o[1]](function() {
									var e = s && s.apply(this, arguments);
									e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? x.extend(e, r) : r
					}
				},
				i = {};
			return r.pipe = r.then, x.each(t, function(e, o) {
				var a = o[2],
					s = o[3];
				r[o[1]] = a.add, s && a.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = a.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function(e) {
			var t = 0,
				n = g.call(arguments),
				r = n.length,
				i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
				o = 1 === i ? e : x.Deferred(),
				a = function(e, t, n) {
					return function(r) {
						t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
					}
				},
				s, l, u;
			if(r > 1)
				for(s = Array(r), l = Array(r), u = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
			return i || o.resolveWith(u, n), o.promise()
		}
	}), x.support = function(t) {
		var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
		if(d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
		s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
		try {
			delete d.test
		} catch(h) {
			t.deleteExpando = !1
		}
		o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
			t.noCloneEvent = !1
		}), d.cloneNode(!0).click());
		for(f in {
				submit: !0,
				change: !0,
				focusin: !0
			}) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
		d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
		for(f in x(t)) break;
		return t.ownLast = "0" !== f, x(function() {
			var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				l = a.getElementsByTagName("body")[0];
			l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
				zoom: 1
			} : {}, function() {
				t.boxSizing = 4 === d.offsetWidth
			}), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
				width: "4px"
			}).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
		}), n = s = l = u = r = o = null, t
	}({});
	var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		P = /([A-Z])/g;

	function R(e, n, r, i) {
		if(x.acceptData(e)) {
			var o, a, s = x.expando,
				l = e.nodeType,
				u = l ? x.cache : e,
				c = l ? e[s] : e[s] && s;
			if(c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {
				toJSON: x.noop
			}), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
		}
	}

	function W(e, t, n) {
		if(x.acceptData(e)) {
			var r, i, o = e.nodeType,
				a = o ? x.cache : e,
				s = o ? e[x.expando] : x.expando;
			if(a[s]) {
				if(t && (r = n ? a[s] : a[s].data)) {
					x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
					while(i--) delete r[t[i]];
					if(n ? !I(r) : !x.isEmptyObject(r)) return
				}(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
			}
		}
	}
	x.extend({
		cache: {},
		noData: {
			applet: !0,
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(e) {
			return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
		},
		data: function(e, t, n) {
			return R(e, t, n)
		},
		removeData: function(e, t) {
			return W(e, t)
		},
		_data: function(e, t, n) {
			return R(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return W(e, t, !0)
		},
		acceptData: function(e) {
			if(e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
			var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
			return !t || t !== !0 && e.getAttribute("classid") === t
		}
	}), x.fn.extend({
		data: function(e, n) {
			var r, i, o = null,
				a = 0,
				s = this[0];
			if(e === t) {
				if(this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
					for(r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
					x._data(s, "parsedAttrs", !0)
				}
				return o
			}
			return "object" == typeof e ? this.each(function() {
				x.data(this, e)
			}) : arguments.length > 1 ? this.each(function() {
				x.data(this, e, n)
			}) : s ? $(s, e, x.data(s, e)) : null
		},
		removeData: function(e) {
			return this.each(function() {
				x.removeData(this, e)
			})
		}
	});

	function $(e, n, r) {
		if(r === t && 1 === e.nodeType) {
			var i = "data-" + n.replace(P, "-$1").toLowerCase();
			if(r = e.getAttribute(i), "string" == typeof r) {
				try {
					r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
				} catch(o) {}
				x.data(e, n, r)
			} else r = t
		}
		return r
	}

	function I(e) {
		var t;
		for(t in e)
			if(("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}
	x.extend({
		queue: function(e, n, r) {
			var i;
			return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = x.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = x._queueHooks(e, t),
				a = function() {
					x.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return x._data(e, n) || x._data(e, n, {
				empty: x.Callbacks("once memory").add(function() {
					x._removeData(e, t + "queue"), x._removeData(e, n)
				})
			})
		}
	}), x.fn.extend({
		queue: function(e, n) {
			var r = 2;
			return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
				var t = x.queue(this, e, n);
				x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				x.dequeue(this, e)
			})
		},
		delay: function(e, t) {
			return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var r = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(r)
				}
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, n) {
			var r, i = 1,
				o = x.Deferred(),
				a = this,
				s = this.length,
				l = function() {
					--i || o.resolveWith(a, [a])
				};
			"string" != typeof e && (n = e, e = t), e = e || "fx";
			while(s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
			return l(), o.promise(n)
		}
	});
	var z, X, U = /[\t\r\n\f]/g,
		V = /\r/g,
		Y = /^(?:input|select|textarea|button|object)$/i,
		J = /^(?:a|area)$/i,
		G = /^(?:checked|selected)$/i,
		Q = x.support.getSetAttribute,
		K = x.support.input;
	x.fn.extend({
		attr: function(e, t) {
			return x.access(this, x.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				x.removeAttr(this, e)
			})
		},
		prop: function(e, t) {
			return x.access(this, x.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = x.propFix[e] || e, this.each(function() {
				try {
					this[e] = t, delete this[e]
				} catch(n) {}
			})
		},
		addClass: function(e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				l = "string" == typeof e && e;
			if(x.isFunction(e)) return this.each(function(t) {
				x(this).addClass(e.call(this, t, this.className))
			});
			if(l)
				for(t = (e || "").match(T) || []; s > a; a++)
					if(n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
						o = 0;
						while(i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
						n.className = x.trim(r)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				l = 0 === arguments.length || "string" == typeof e && e;
			if(x.isFunction(e)) return this.each(function(t) {
				x(this).removeClass(e.call(this, t, this.className))
			});
			if(l)
				for(t = (e || "").match(T) || []; s > a; a++)
					if(n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
						o = 0;
						while(i = t[o++])
							while(r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
						n.className = e ? x.trim(r) : ""
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e,
				r = "boolean" == typeof t;
			return x.isFunction(e) ? this.each(function(n) {
				x(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if("string" === n) {
					var o, a = 0,
						s = x(this),
						l = t,
						u = e.match(T) || [];
					while(o = u[a++]) l = r ? l : !s.hasClass(o), s[l ? "addClass" : "removeClass"](o)
				} else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			var t = " " + e + " ",
				n = 0,
				r = this.length;
			for(; r > n; n++)
				if(1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
			return !1
		},
		val: function(e) {
			var n, r, i, o = this[0]; {
				if(arguments.length) return i = x.isFunction(e), this.each(function(n) {
					var o;
					1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
						return null == e ? "" : e + ""
					})), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
				});
				if(o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
			}
		}
	}), x.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = x.find.attr(e, "value");
					return null != t ? t : e.text
				}
			},
			select: {
				get: function(e) {
					var t, n, r = e.options,
						i = e.selectedIndex,
						o = "select-one" === e.type || 0 > i,
						a = o ? null : [],
						s = o ? i + 1 : r.length,
						l = 0 > i ? s : o ? i : 0;
					for(; s > l; l++)
						if(n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
							if(t = x(n).val(), o) return t;
							a.push(t)
						}
					return a
				},
				set: function(e, t) {
					var n, r, i = e.options,
						o = x.makeArray(t),
						a = i.length;
					while(a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		},
		attr: function(e, n, r) {
			var o, a, s = e.nodeType;
			if(e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
				o = t && t.match(T);
			if(o && 1 === e.nodeType)
				while(n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if(!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, n, r) {
			var i, o, a, s = e.nodeType;
			if(e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = x.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), X = {
		set: function(e, t, n) {
			return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
		var r = x.expr.attrHandle[n] || x.find.attr;
		x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
			var o = x.expr.attrHandle[n],
				a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
			return x.expr.attrHandle[n] = o, a
		} : function(e, n, r) {
			return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
		}
	}), K && Q || (x.attrHooks.value = {
		set: function(e, n, r) {
			return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
		}
	}), Q || (z = {
		set: function(e, n, r) {
			var i = e.getAttributeNode(r);
			return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
		}
	}, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
		var i;
		return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
	}, x.valHooks.button = {
		get: function(e, n) {
			var r = e.getAttributeNode(n);
			return r && r.specified ? r.value : t
		},
		set: z.set
	}, x.attrHooks.contenteditable = {
		set: function(e, t, n) {
			z.set(e, "" === t ? !1 : t, n)
		}
	}, x.each(["width", "height"], function(e, n) {
		x.attrHooks[n] = {
			set: function(e, r) {
				return "" === r ? (e.setAttribute(n, "auto"), r) : t
			}
		}
	})), x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
		x.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	}), x.support.style || (x.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || t
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	}), x.support.optSelected || (x.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		x.propFix[this.toLowerCase()] = this
	}), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function() {
		x.valHooks[this] = {
			set: function(e, n) {
				return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
			}
		}, x.support.checkOn || (x.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var Z = /^(?:input|select|textarea)$/i,
		et = /^key/,
		tt = /^(?:mouse|contextmenu)|click/,
		nt = /^(?:focusinfocus|focusoutblur)$/,
		rt = /^([^.]*)(?:\.(.+)|)$/;

	function it() {
		return !0
	}

	function ot() {
		return !1
	}

	function at() {
		try {
			return a.activeElement
		} catch(e) {}
	}
	x.event = {
		global: {},
		add: function(e, n, r, o, a) {
			var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
			if(v) {
				r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
					return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
				}, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
				while(u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
					type: g,
					origType: y,
					data: o,
					handler: r,
					guid: r.guid,
					selector: a,
					needsContext: a && x.expr.match.needsContext.test(a),
					namespace: m.join(".")
				}, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
				e = null
			}
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
			if(m && (c = m.events)) {
				t = (t || "").match(T) || [""], u = t.length;
				while(u--)
					if(s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
						p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
						while(o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
						l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
					} else
						for(d in c) x.event.remove(e, d + t[u], n, r, !0);
				x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
			}
		},
		trigger: function(n, r, i, o) {
			var s, l, u, c, p, f, d, h = [i || a],
				g = v.call(n, "type") ? n.type : n,
				m = v.call(n, "namespace") ? n.namespace.split(".") : [];
			if(u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
				if(!o && !p.noBubble && !x.isWindow(i)) {
					for(c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;
					f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
				}
				d = 0;
				while((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
				if(n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
					f = i[l], f && (i[l] = null), x.event.triggered = g;
					try {
						i[g]()
					} catch(y) {}
					x.event.triggered = t, f && (i[l] = f)
				}
				return n.result
			}
		},
		dispatch: function(e) {
			e = x.event.fix(e);
			var n, r, i, o, a, s = [],
				l = g.call(arguments),
				u = (x._data(this, "events") || {})[e.type] || [],
				c = x.event.special[e.type] || {};
			if(l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
				s = x.event.handlers.call(this, e, u), n = 0;
				while((o = s[n++]) && !e.isPropagationStopped()) {
					e.currentTarget = o.elem, a = 0;
					while((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
				}
				return c.postDispatch && c.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, n) {
			var r, i, o, a, s = [],
				l = n.delegateCount,
				u = e.target;
			if(l && u.nodeType && (!e.button || "click" !== e.type))
				for(; u != this; u = u.parentNode || this)
					if(1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
						for(o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
						o.length && s.push({
							elem: u,
							handlers: o
						})
					}
			return n.length > l && s.push({
				elem: this,
				handlers: n.slice(l)
			}), s
		},
		fix: function(e) {
			if(e[x.expando]) return e;
			var t, n, r, i = e.type,
				o = e,
				s = this.fixHooks[i];
			s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
			while(t--) n = r[t], e[n] = o[n];
			return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, n) {
				var r, i, o, s = n.button,
					l = n.fromElement;
				return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if(this !== at() && this.focus) try {
						return this.focus(), !1
					} catch(e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === at() && this.blur ? (this.blur(), !1) : t
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
				},
				_default: function(e) {
					return x.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== t && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = x.extend(new x.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, x.removeEvent = a.removeEventListener ? function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		var r = "on" + t;
		e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
	}, x.Event = function(e, n) {
		return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
	}, x.Event.prototype = {
		isDefaultPrevented: ot,
		isPropagationStopped: ot,
		isImmediatePropagationStopped: ot,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = it, this.stopPropagation()
		}
	}, x.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(e, t) {
		x.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return(!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), x.support.submitBubbles || (x.event.special.submit = {
		setup: function() {
			return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
				var n = e.target,
					r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
				r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
					e._submit_bubble = !0
				}), x._data(r, "submitBubbles", !0))
			}), t)
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function() {
			return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
		}
	}), x.support.changeBubbles || (x.event.special.change = {
		setup: function() {
			return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), x.event.add(this, "click._change", function(e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
			})), !1) : (x.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
					!this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
				}), x._data(t, "changeBubbles", !0))
			}), t)
		},
		handle: function(e) {
			var n = e.target;
			return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
		},
		teardown: function() {
			return x.event.remove(this, "._change"), !Z.test(this.nodeName)
		}
	}), x.support.focusinBubbles || x.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = 0,
			r = function(e) {
				x.event.simulate(t, e.target, x.event.fix(e), !0)
			};
		x.event.special[t] = {
			setup: function() {
				0 === n++ && a.addEventListener(e, r, !0)
			},
			teardown: function() {
				0 === --n && a.removeEventListener(e, r, !0)
			}
		}
	}), x.fn.extend({
		on: function(e, n, r, i, o) {
			var a, s;
			if("object" == typeof e) {
				"string" != typeof n && (r = r || n, n = t);
				for(a in e) this.on(a, n, r, e[a], o);
				return this
			}
			if(null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
			else if(!i) return this;
			return 1 === o && (s = i, i = function(e) {
				return x().off(e), s.apply(this, arguments)
			}, i.guid = s.guid || (s.guid = x.guid++)), this.each(function() {
				x.event.add(this, e, i, r, n)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, n, r) {
			var i, o;
			if(e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if("object" == typeof e) {
				for(o in e) this.off(o, n, e[o]);
				return this
			}
			return(n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
				x.event.remove(this, e, r, n)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				x.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, n) {
			var r = this[0];
			return r ? x.event.trigger(e, n, r, !0) : t
		}
	});
	var st = /^.[^:#\[\.,]*$/,
		lt = /^(?:parents|prev(?:Until|All))/,
		ut = x.expr.match.needsContext,
		ct = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	x.fn.extend({
		find: function(e) {
			var t, n = [],
				r = this,
				i = r.length;
			if("string" != typeof e) return this.pushStack(x(e).filter(function() {
				for(t = 0; i > t; t++)
					if(x.contains(r[t], this)) return !0
			}));
			for(t = 0; i > t; t++) x.find(e, r[t], n);
			return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		has: function(e) {
			var t, n = x(e, this),
				r = n.length;
			return this.filter(function() {
				for(t = 0; r > t; t++)
					if(x.contains(this, n[t])) return !0
			})
		},
		not: function(e) {
			return this.pushStack(ft(this, e || [], !0))
		},
		filter: function(e) {
			return this.pushStack(ft(this, e || [], !1))
		},
		is: function(e) {
			return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
		},
		closest: function(e, t) {
			var n, r = 0,
				i = this.length,
				o = [],
				a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
			for(; i > r; r++)
				for(n = this[r]; n && n !== t; n = n.parentNode)
					if(11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
						n = o.push(n);
						break
					}
			return this.pushStack(o.length > 1 ? x.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
				r = x.merge(this.get(), n);
			return this.pushStack(x.unique(r))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	});

	function pt(e, t) {
		do e = e[t]; while (e && 1 !== e.nodeType);
		return e
	}
	x.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return x.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return x.dir(e, "parentNode", n)
		},
		next: function(e) {
			return pt(e, "nextSibling")
		},
		prev: function(e) {
			return pt(e, "previousSibling")
		},
		nextAll: function(e) {
			return x.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return x.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return x.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return x.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return x.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return x.sibling(e.firstChild)
		},
		contents: function(e) {
			return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
		}
	}, function(e, t) {
		x.fn[e] = function(n, r) {
			var i = x.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
		}
	}), x.extend({
		filter: function(e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
				return 1 === e.nodeType
			}))
		},
		dir: function(e, n, r) {
			var i = [],
				o = e[n];
			while(o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
			return i
		},
		sibling: function(e, t) {
			var n = [];
			for(; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	});

	function ft(e, t, n) {
		if(x.isFunction(t)) return x.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		});
		if(t.nodeType) return x.grep(e, function(e) {
			return e === t !== n
		});
		if("string" == typeof t) {
			if(st.test(t)) return x.filter(t, e, n);
			t = x.filter(t, e)
		}
		return x.grep(e, function(e) {
			return x.inArray(e, t) >= 0 !== n
		})
	}

	function dt(e) {
		var t = ht.split("|"),
			n = e.createDocumentFragment();
		if(n.createElement)
			while(t.length) n.createElement(t.pop());
		return n
	}
	var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		gt = / jQuery\d+="(?:null|\d+)"/g,
		mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
		yt = /^\s+/,
		vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		bt = /<([\w:]+)/,
		xt = /<tbody/i,
		wt = /<|&#?\w+;/,
		Tt = /<(?:script|style|link)/i,
		Ct = /^(?:checkbox|radio)$/i,
		Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		kt = /^$|\/(?:java|ecma)script/i,
		Et = /^true\/(.*)/,
		St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		At = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		jt = dt(a),
		Dt = jt.appendChild(a.createElement("div"));
	At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
		text: function(e) {
			return x.access(this, function(e) {
				return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Lt(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Lt(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			var n, r = e ? x.filter(e, this) : this,
				i = 0;
			for(; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			var e, t = 0;
			for(; null != (e = this[t]); t++) {
				1 === e.nodeType && x.cleanData(Ft(e, !1));
				while(e.firstChild) e.removeChild(e.firstChild);
				e.options && x.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return x.clone(this, e, t)
			})
		},
		html: function(e) {
			return x.access(this, function(e) {
				var n = this[0] || {},
					r = 0,
					i = this.length;
				if(e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
				if(!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(vt, "<$1></$2>");
					try {
						for(; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
						n = 0
					} catch(o) {}
				}
				n && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = x.map(this, function(e) {
					return [e.nextSibling, e.parentNode]
				}),
				t = 0;
			return this.domManip(arguments, function(n) {
				var r = e[t++],
					i = e[t++];
				i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
			}, !0), t ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t, n) {
			e = d.apply([], e);
			var r, i, o, a, s, l, u = 0,
				c = this.length,
				p = this,
				f = c - 1,
				h = e[0],
				g = x.isFunction(h);
			if(g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function(r) {
				var i = p.eq(r);
				g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
			});
			if(c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
				for(a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
				if(o)
					for(s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
				l = r = null
			}
			return this
		}
	});

	function Lt(e, t) {
		return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function Ht(e) {
		return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
	}

	function qt(e) {
		var t = Et.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function _t(e, t) {
		var n, r = 0;
		for(; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
	}

	function Mt(e, t) {
		if(1 === t.nodeType && x.hasData(e)) {
			var n, r, i, o = x._data(e),
				a = x._data(t, o),
				s = o.events;
			if(s) {
				delete a.handle, a.events = {};
				for(n in s)
					for(r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r])
			}
			a.data && (a.data = x.extend({}, a.data))
		}
	}

	function Ot(e, t) {
		var n, r, i;
		if(1 === t.nodeType) {
			if(n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
				i = x._data(t);
				for(r in i.events) x.removeEvent(t, r, i.handle);
				t.removeAttribute(x.expando)
			}
			"script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}
	x.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		x.fn[e] = function(e) {
			var n, r = 0,
				i = [],
				o = x(e),
				a = o.length - 1;
			for(; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
			return this.pushStack(i)
		}
	});

	function Ft(e, n) {
		var r, o, a = 0,
			s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
		if(!s)
			for(s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
		return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
	}

	function Bt(e) {
		Ct.test(e.type) && (e.defaultChecked = e.checked)
	}
	x.extend({
		clone: function(e, t, n) {
			var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
			if(x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
				for(r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]);
			if(t)
				if(n)
					for(s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]);
				else Mt(e, o);
			return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
		},
		buildFragment: function(e, t, n, r) {
			var i, o, a, s, l, u, c, p = e.length,
				f = dt(t),
				d = [],
				h = 0;
			for(; p > h; h++)
				if(o = e[h], o || 0 === o)
					if("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
					else if(wt.test(o)) {
				s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
				while(i--) s = s.lastChild;
				if(!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
					o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
					while(i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
				}
				x.merge(d, s.childNodes), s.textContent = "";
				while(s.firstChild) s.removeChild(s.firstChild);
				s = f.lastChild
			} else d.push(t.createTextNode(o));
			s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
			while(o = d[h++])
				if((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
					i = 0;
					while(o = s[i++]) kt.test(o.type || "") && n.push(o)
				}
			return s = null, f
		},
		cleanData: function(e, t) {
			var n, r, o, a, s = 0,
				l = x.expando,
				u = x.cache,
				c = x.support.deleteExpando,
				f = x.event.special;
			for(; null != (n = e[s]); s++)
				if((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
					if(a.events)
						for(r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
					u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
				}
		},
		_evalUrl: function(e) {
			return x.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}
	}), x.fn.extend({
		wrapAll: function(e) {
			if(x.isFunction(e)) return this.each(function(t) {
				x(this).wrapAll(e.call(this, t))
			});
			if(this[0]) {
				var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					var e = this;
					while(e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return x.isFunction(e) ? this.each(function(t) {
				x(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = x(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = x.isFunction(e);
			return this.each(function(n) {
				x(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
			}).end()
		}
	});
	var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
		It = /opacity\s*=\s*([^)]*)/,
		zt = /^(top|right|bottom|left)$/,
		Xt = /^(none|table(?!-c[ea]).+)/,
		Ut = /^margin/,
		Vt = RegExp("^(" + w + ")(.*)$", "i"),
		Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
		Jt = RegExp("^([+-])=(" + w + ")", "i"),
		Gt = {
			BODY: "block"
		},
		Qt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Kt = {
			letterSpacing: 0,
			fontWeight: 400
		},
		Zt = ["Top", "Right", "Bottom", "Left"],
		en = ["Webkit", "O", "Moz", "ms"];

	function tn(e, t) {
		if(t in e) return t;
		var n = t.charAt(0).toUpperCase() + t.slice(1),
			r = t,
			i = en.length;
		while(i--)
			if(t = en[i] + n, t in e) return t;
		return r
	}

	function nn(e, t) {
		return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
	}

	function rn(e, t) {
		var n, r, i, o = [],
			a = 0,
			s = e.length;
		for(; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
		for(a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
		return e
	}
	x.fn.extend({
		css: function(e, n) {
			return x.access(this, function(e, n, r) {
				var i, o, a = {},
					s = 0;
				if(x.isArray(n)) {
					for(o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o);
					return a
				}
				return r !== t ? x.style(e, n, r) : x.css(e, n)
			}, e, n, arguments.length > 1)
		},
		show: function() {
			return rn(this, !0)
		},
		hide: function() {
			return rn(this)
		},
		toggle: function(e) {
			var t = "boolean" == typeof e;
			return this.each(function() {
				(t ? e : nn(this)) ? x(this).show(): x(this).hide()
			})
		}
	}), x.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if(t) {
						var n = Wt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": x.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, n, r, i) {
			if(e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, a, s, l = x.camelCase(n),
					u = e.style;
				if(n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
				if(a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
					u[n] = r
				} catch(c) {}
			}
		},
		css: function(e, n, r, i) {
			var o, a, s, l = x.camelCase(n);
			return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
		}
	}), e.getComputedStyle ? (Rt = function(t) {
		return e.getComputedStyle(t, null)
	}, Wt = function(e, n, r) {
		var i, o, a, s = r || Rt(e),
			l = s ? s.getPropertyValue(n) || s[n] : t,
			u = e.style;
		return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
	}) : a.documentElement.currentStyle && (Rt = function(e) {
		return e.currentStyle
	}, Wt = function(e, n, r) {
		var i, o, a, s = r || Rt(e),
			l = s ? s[n] : t,
			u = e.style;
		return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
	});

	function on(e, t, n) {
		var r = Vt.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}

	function an(e, t, n, r, i) {
		var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
			a = 0;
		for(; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
		return a
	}

	function sn(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = Rt(e),
			a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
		if(0 >= i || null == i) {
			if(i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
			r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
	}

	function ln(e) {
		var t = a,
			n = Gt[e];
		return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
	}

	function un(e, t) {
		var n = x(t.createElement(e)).appendTo(t.body),
			r = x.css(n[0], "display");
		return n.remove(), r
	}
	x.each(["height", "width"], function(e, n) {
		x.cssHooks[n] = {
			get: function(e, r, i) {
				return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
					return sn(e, n, i)
				}) : sn(e, n, i) : t
			},
			set: function(e, t, r) {
				var i = r && Rt(e);
				return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), x.support.opacity || (x.cssHooks.opacity = {
		get: function(e, t) {
			return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				r = e.currentStyle,
				i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				o = r && r.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
		}
	}), x(function() {
		x.support.reliableMarginRight || (x.cssHooks.marginRight = {
			get: function(e, n) {
				return n ? x.swap(e, {
					display: "inline-block"
				}, Wt, [e, "marginRight"]) : t
			}
		}), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
			x.cssHooks[n] = {
				get: function(e, r) {
					return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
				}
			}
		})
	}), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
		return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
	}, x.expr.filters.visible = function(e) {
		return !x.expr.filters.hidden(e)
	}), x.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		x.cssHooks[e + t] = {
			expand: function(n) {
				var r = 0,
					i = {},
					o = "string" == typeof n ? n.split(" ") : [n];
				for(; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, Ut.test(e) || (x.cssHooks[e + t].set = on)
	});
	var cn = /%20/g,
		pn = /\[\]$/,
		fn = /\r?\n/g,
		dn = /^(?:submit|button|image|reset|file)$/i,
		hn = /^(?:input|select|textarea|keygen)/i;
	x.fn.extend({
		serialize: function() {
			return x.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = x.prop(this, "elements");
				return e ? x.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
			}).map(function(e, t) {
				var n = x(this).val();
				return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(fn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(fn, "\r\n")
				}
			}).get()
		}
	}), x.param = function(e, n) {
		var r, i = [],
			o = function(e, t) {
				t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if(n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
			o(this.name, this.value)
		});
		else
			for(r in e) gn(r, e[r], n, o);
		return i.join("&").replace(cn, "+")
	};

	function gn(e, t, n, r) {
		var i;
		if(x.isArray(t)) x.each(t, function(t, i) {
			n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
		});
		else if(n || "object" !== x.type(t)) r(e, t);
		else
			for(i in t) gn(e + "[" + i + "]", t[i], n, r)
	}
	x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		x.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), x.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var mn, yn, vn = x.now(),
		bn = /\?/,
		xn = /#.*$/,
		wn = /([?&])_=[^&]*/,
		Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Nn = /^(?:GET|HEAD)$/,
		kn = /^\/\//,
		En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		Sn = x.fn.load,
		An = {},
		jn = {},
		Dn = "*/".concat("*");
	try {
		yn = o.href
	} catch(Ln) {
		yn = a.createElement("a"), yn.href = "", yn = yn.href
	}
	mn = En.exec(yn.toLowerCase()) || [];

	function Hn(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(T) || [];
			if(x.isFunction(n))
				while(r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}

	function qn(e, n, r, i) {
		var o = {},
			a = e === jn;

		function s(l) {
			var u;
			return o[l] = !0, x.each(e[l] || [], function(e, l) {
				var c = l(n, r, i);
				return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
			}), u
		}
		return s(n.dataTypes[0]) || !o["*"] && s("*")
	}

	function _n(e, n) {
		var r, i, o = x.ajaxSettings.flatOptions || {};
		for(i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
		return r && x.extend(!0, e, r), e
	}
	x.fn.load = function(e, n, r) {
		if("string" != typeof e && Sn) return Sn.apply(this, arguments);
		var i, o, a, s = this,
			l = e.indexOf(" ");
		return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
			url: e,
			type: a,
			dataType: "html",
			data: n
		}).done(function(e) {
			o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
		}).complete(r && function(e, t) {
			s.each(r, o || [e.responseText, t, e])
		}), this
	}, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		x.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), x.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: yn,
			type: "GET",
			isLocal: Cn.test(mn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Dn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": x.parseJSON,
				"text xml": x.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
		},
		ajaxPrefilter: Hn(An),
		ajaxTransport: Hn(jn),
		ajax: function(e, n) {
			"object" == typeof e && (n = e, e = t), n = n || {};
			var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n),
				f = p.context || p,
				d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
				h = x.Deferred(),
				g = x.Callbacks("once memory"),
				m = p.statusCode || {},
				y = {},
				v = {},
				b = 0,
				w = "canceled",
				C = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if(2 === b) {
							if(!c) {
								c = {};
								while(t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
							}
							t = c[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === b ? a : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return b || (e = v[n] = v[n] || e, y[e] = t), this
					},
					overrideMimeType: function(e) {
						return b || (p.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if(e)
							if(2 > b)
								for(t in e) m[t] = [m[t], e[t]];
							else C.always(e[C.status]);
						return this
					},
					abort: function(e) {
						var t = e || w;
						return u && u.abort(t), k(0, t), this
					}
				};
			if(h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;
			l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
			for(i in p.headers) C.setRequestHeader(i, p.headers[i]);
			if(p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
			w = "abort";
			for(i in {
					success: 1,
					error: 1,
					complete: 1
				}) C[i](p[i]);
			if(u = qn(jn, p, n, C)) {
				C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
					C.abort("timeout")
				}, p.timeout));
				try {
					b = 1, u.send(y, k)
				} catch(N) {
					if(!(2 > b)) throw N;
					k(-1, N)
				}
			} else k(-1, "No Transport");

			function k(e, n, r, i) {
				var c, y, v, w, T, N = n;
				2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
			}
			return C
		},
		getJSON: function(e, t, n) {
			return x.get(e, t, n, "json")
		},
		getScript: function(e, n) {
			return x.get(e, t, n, "script")
		}
	}), x.each(["get", "post"], function(e, n) {
		x[n] = function(e, r, i, o) {
			return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
				url: e,
				type: n,
				dataType: o,
				data: r,
				success: i
			})
		}
	});

	function Mn(e, n, r) {
		var i, o, a, s, l = e.contents,
			u = e.dataTypes;
		while("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
		if(o)
			for(s in l)
				if(l[s] && l[s].test(o)) {
					u.unshift(s);
					break
				}
		if(u[0] in r) a = u[0];
		else {
			for(s in r) {
				if(!u[0] || e.converters[s + " " + u[0]]) {
					a = s;
					break
				}
				i || (i = s)
			}
			a = a || i
		}
		return a ? (a !== u[0] && u.unshift(a), r[a]) : t
	}

	function On(e, t, n, r) {
		var i, o, a, s, l, u = {},
			c = e.dataTypes.slice();
		if(c[1])
			for(a in e.converters) u[a.toLowerCase()] = e.converters[a];
		o = c.shift();
		while(o)
			if(e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
				if("*" === o) o = l;
				else if("*" !== l && l !== o) {
			if(a = u[l + " " + o] || u["* " + o], !a)
				for(i in u)
					if(s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
						a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
						break
					}
			if(a !== !0)
				if(a && e["throws"]) t = a(t);
				else try {
					t = a(t)
				} catch(p) {
					return {
						state: "parsererror",
						error: a ? p : "No conversion from " + l + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}
	x.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return x.globalEval(e), e
			}
		}
	}), x.ajaxPrefilter("script", function(e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), x.ajaxTransport("script", function(e) {
		if(e.crossDomain) {
			var n, r = a.head || x("head")[0] || a.documentElement;
			return {
				send: function(t, i) {
					n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
						(t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
					}, r.insertBefore(n, r.firstChild)
				},
				abort: function() {
					n && n.onload(t, !0)
				}
			}
		}
	});
	var Fn = [],
		Bn = /(=)\?(?=&|$)|\?\?/;
	x.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Fn.pop() || x.expando + "_" + vn++;
			return this[e] = !0, e
		}
	}), x.ajaxPrefilter("json jsonp", function(n, r, i) {
		var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
		return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
			return s || x.error(o + " was not called"), s[0]
		}, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
			s = arguments
		}, i.always(function() {
			e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
		}), "script") : t
	});
	var Pn, Rn, Wn = 0,
		$n = e.ActiveXObject && function() {
			var e;
			for(e in Pn) Pn[e](t, !0)
		};

	function In() {
		try {
			return new e.XMLHttpRequest
		} catch(t) {}
	}

	function zn() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch(t) {}
	}
	x.ajaxSettings.xhr = e.ActiveXObject ? function() {
		return !this.isLocal && In() || zn()
	} : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function(n) {});
	var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
		Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
		Jn = /queueHooks$/,
		Gn = [nr],
		Qn = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					r = n.cur(),
					i = Yn.exec(t),
					o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
					a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
					s = 1,
					l = 20;
				if(a && a[3] !== o) {
					o = o || a[3], i = i || [], a = +r || 1;
					do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
				}
				return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
			}]
		};

	function Kn() {
		return setTimeout(function() {
			Xn = t
		}), Xn = x.now()
	}

	function Zn(e, t, n) {
		var r, i = (Qn[t] || []).concat(Qn["*"]),
			o = 0,
			a = i.length;
		for(; a > o; o++)
			if(r = i[o].call(n, t, e)) return r
	}

	function er(e, t, n) {
		var r, i, o = 0,
			a = Gn.length,
			s = x.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if(i) return !1;
				var t = Xn || Kn(),
					n = Math.max(0, u.startTime + u.duration - t),
					r = n / u.duration || 0,
					o = 1 - r,
					a = 0,
					l = u.tweens.length;
				for(; l > a; a++) u.tweens[a].run(o);
				return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
			},
			u = s.promise({
				elem: e,
				props: x.extend({}, t),
				opts: x.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Xn || Kn(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
					return u.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? u.tweens.length : 0;
					if(i) return this;
					for(i = !0; r > n; n++) u.tweens[n].run(1);
					return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
				}
			}),
			c = u.props;
		for(tr(c, u.opts.specialEasing); a > o; o++)
			if(r = Gn[o].call(u, e, c, u.opts)) return r;
		return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
			elem: e,
			anim: u,
			queue: u.opts.queue
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}

	function tr(e, t) {
		var n, r, i, o, a;
		for(n in e)
			if(r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
				o = a.expand(o), delete e[r];
				for(n in o) n in e || (e[n] = o[n], t[n] = i)
			} else t[r] = i
	}
	x.Animation = x.extend(er, {
		tweener: function(e, t) {
			x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			var n, r = 0,
				i = e.length;
			for(; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? Gn.unshift(e) : Gn.push(e)
		}
	});

	function nr(e, t, n) {
		var r, i, o, a, s, l, u = this,
			c = {},
			p = e.style,
			f = e.nodeType && nn(e),
			d = x._data(e, "fxshow");
		n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
			s.unqueued || l()
		}), s.unqueued++, u.always(function() {
			u.always(function() {
				s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function() {
			p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
		}));
		for(r in t)
			if(i = t[r], Vn.exec(i)) {
				if(delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
				c[r] = d && d[r] || x.style(e, r)
			}
		if(!x.isEmptyObject(c)) {
			d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function() {
				x(e).hide()
			}), u.done(function() {
				var t;
				x._removeData(e, "fxshow");
				for(t in c) x.style(e, t, c[t])
			});
			for(r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
		}
	}

	function rr(e, t, n, r, i) {
		return new rr.prototype.init(e, t, n, r, i)
	}
	x.Tween = rr, rr.prototype = {
		constructor: rr,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = rr.propHooks[this.prop];
			return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = rr.propHooks[this.prop];
			return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
		}
	}, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, x.each(["toggle", "show", "hide"], function(e, t) {
		var n = x.fn[t];
		x.fn[t] = function(e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
		}
	}), x.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(nn).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(e, t, n, r) {
			var i = x.isEmptyObject(e),
				o = x.speed(t, n, r),
				a = function() {
					var t = er(this, x.extend({}, e), o);
					(i || x._data(this, "finish")) && t.stop(!0)
				};
			return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(e, n, r) {
			var i = function(e) {
				var t = e.stop;
				delete e.stop, t(r)
			};
			return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
				var t = !0,
					n = null != e && e + "queueHooks",
					o = x.timers,
					a = x._data(this);
				if(n) a[n] && a[n].stop && i(a[n]);
				else
					for(n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
				for(n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
				(t || !r) && x.dequeue(this, e)
			})
		},
		finish: function(e) {
			return e !== !1 && (e = e || "fx"), this.each(function() {
				var t, n = x._data(this),
					r = n[e + "queue"],
					i = n[e + "queueHooks"],
					o = x.timers,
					a = r ? r.length : 0;
				for(n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for(t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	});

	function ir(e, t) {
		var n, r = {
				height: e
			},
			i = 0;
		for(t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}
	x.each({
		slideDown: ir("show"),
		slideUp: ir("hide"),
		slideToggle: ir("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, t) {
		x.fn[e] = function(e, n, r) {
			return this.animate(t, e, n, r)
		}
	}), x.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? x.extend({}, e) : {
			complete: n || !n && t || x.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !x.isFunction(t) && t
		};
		return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
		}, r
	}, x.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function() {
		var e, n = x.timers,
			r = 0;
		for(Xn = x.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
		n.length || x.fx.stop(), Xn = t
	}, x.fx.timer = function(e) {
		e() && x.timers.push(e) && x.fx.start()
	}, x.fx.interval = 13, x.fx.start = function() {
		Un || (Un = setInterval(x.fx.tick, x.fx.interval))
	}, x.fx.stop = function() {
		clearInterval(Un), Un = null
	}, x.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
		return x.grep(x.timers, function(t) {
			return e === t.elem
		}).length
	}), x.fn.offset = function(e) {
		if(arguments.length) return e === t ? this : this.each(function(t) {
			x.offset.setOffset(this, e, t)
		});
		var n, r, o = {
				top: 0,
				left: 0
			},
			a = this[0],
			s = a && a.ownerDocument;
		if(s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
			top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
			left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
		}) : o
	}, x.offset = {
		setOffset: function(e, t, n) {
			var r = x.css(e, "position");
			"static" === r && (e.style.position = "relative");
			var i = x(e),
				o = i.offset(),
				a = x.css(e, "top"),
				s = x.css(e, "left"),
				l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
				u = {},
				c = {},
				p, f;
			l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
		}
	}, x.fn.extend({
		position: function() {
			if(this[0]) {
				var e, t, n = {
						top: 0,
						left: 0
					},
					r = this[0];
				return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - x.css(r, "marginTop", !0),
					left: t.left - n.left - x.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var e = this.offsetParent || s;
				while(e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent;
				return e || s
			})
		}
	}), x.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, n) {
		var r = /Y/.test(n);
		x.fn[e] = function(i) {
			return x.access(this, function(e, i, o) {
				var a = or(e);
				return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
			}, e, i, arguments.length, null)
		}
	});

	function or(e) {
		return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
	}
	x.each({
		Height: "height",
		Width: "width"
	}, function(e, n) {
		x.each({
			padding: "inner" + e,
			content: n,
			"": "outer" + e
		}, function(r, i) {
			x.fn[i] = function(i, o) {
				var a = arguments.length && (r || "boolean" != typeof i),
					s = r || (i === !0 || o === !0 ? "margin" : "border");
				return x.access(this, function(n, r, i) {
					var o;
					return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
				}, n, a ? i : t, a, null)
			}
		})
	}), x.fn.size = function() {
		return this.length
	}, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function() {
		return x
	}))
})(window);

//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
! function(a, b) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function() {
	"use strict";

	function a() {
		return sd.apply(null, arguments)
	}

	function b(a) {
		sd = a
	}

	function c(a) {
		return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a)
	}

	function d(a) {
		return null != a && "[object Object]" === Object.prototype.toString.call(a)
	}

	function e(a) {
		var b;
		for(b in a) return !1;
		return !0
	}

	function f(a) {
		return void 0 === a
	}

	function g(a) {
		return "number" == typeof a || "[object Number]" === Object.prototype.toString.call(a)
	}

	function h(a) {
		return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
	}

	function i(a, b) {
		var c, d = [];
		for(c = 0; c < a.length; ++c) d.push(b(a[c], c));
		return d
	}

	function j(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	}

	function k(a, b) {
		for(var c in b) j(b, c) && (a[c] = b[c]);
		return j(b, "toString") && (a.toString = b.toString), j(b, "valueOf") && (a.valueOf = b.valueOf), a
	}

	function l(a, b, c, d) {
		return sb(a, b, c, d, !0).utc()
	}

	function m() {
		return {
			empty: !1,
			unusedTokens: [],
			unusedInput: [],
			overflow: -2,
			charsLeftOver: 0,
			nullInput: !1,
			invalidMonth: null,
			invalidFormat: !1,
			userInvalidated: !1,
			iso: !1,
			parsedDateParts: [],
			meridiem: null,
			rfc2822: !1,
			weekdayMismatch: !1
		}
	}

	function n(a) {
		return null == a._pf && (a._pf = m()), a._pf
	}

	function o(a) {
		if(null == a._isValid) {
			var b = n(a),
				c = ud.call(b.parsedDateParts, function(a) {
					return null != a
				}),
				d = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c);
			if(a._strict && (d = d && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour), null != Object.isFrozen && Object.isFrozen(a)) return d;
			a._isValid = d
		}
		return a._isValid
	}

	function p(a) {
		var b = l(NaN);
		return null != a ? k(n(b), a) : n(b).userInvalidated = !0, b
	}

	function q(a, b) {
		var c, d, e;
		if(f(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), f(b._i) || (a._i = b._i), f(b._f) || (a._f = b._f), f(b._l) || (a._l = b._l), f(b._strict) || (a._strict = b._strict), f(b._tzm) || (a._tzm = b._tzm), f(b._isUTC) || (a._isUTC = b._isUTC), f(b._offset) || (a._offset = b._offset), f(b._pf) || (a._pf = n(b)), f(b._locale) || (a._locale = b._locale), vd.length > 0)
			for(c = 0; c < vd.length; c++) d = vd[c], e = b[d], f(e) || (a[d] = e);
		return a
	}

	function r(b) {
		q(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), wd === !1 && (wd = !0, a.updateOffset(this), wd = !1)
	}

	function s(a) {
		return a instanceof r || null != a && null != a._isAMomentObject
	}

	function t(a) {
		return a < 0 ? Math.ceil(a) || 0 : Math.floor(a)
	}

	function u(a) {
		var b = +a,
			c = 0;
		return 0 !== b && isFinite(b) && (c = t(b)), c
	}

	function v(a, b, c) {
		var d, e = Math.min(a.length, b.length),
			f = Math.abs(a.length - b.length),
			g = 0;
		for(d = 0; d < e; d++)(c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++;
		return g + f
	}

	function w(b) {
		a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
	}

	function x(b, c) {
		var d = !0;
		return k(function() {
			if(null != a.deprecationHandler && a.deprecationHandler(null, b), d) {
				for(var e, f = [], g = 0; g < arguments.length; g++) {
					if(e = "", "object" == typeof arguments[g]) {
						e += "\n[" + g + "] ";
						for(var h in arguments[0]) e += h + ": " + arguments[0][h] + ", ";
						e = e.slice(0, -2)
					} else e = arguments[g];
					f.push(e)
				}
				w(b + "\nArguments: " + Array.prototype.slice.call(f).join("") + "\n" + (new Error).stack), d = !1
			}
			return c.apply(this, arguments)
		}, c)
	}

	function y(b, c) {
		null != a.deprecationHandler && a.deprecationHandler(b, c), xd[b] || (w(c), xd[b] = !0)
	}

	function z(a) {
		return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
	}

	function A(a) {
		var b, c;
		for(c in a) b = a[c], z(b) ? this[c] = b : this["_" + c] = b;
		this._config = a, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
	}

	function B(a, b) {
		var c, e = k({}, a);
		for(c in b) j(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {}, k(e[c], a[c]), k(e[c], b[c])) : null != b[c] ? e[c] = b[c] : delete e[c]);
		for(c in a) j(a, c) && !j(b, c) && d(a[c]) && (e[c] = k({}, e[c]));
		return e
	}

	function C(a) {
		null != a && this.set(a)
	}

	function D(a, b, c) {
		var d = this._calendar[a] || this._calendar.sameElse;
		return z(d) ? d.call(b, c) : d
	}

	function E(a) {
		var b = this._longDateFormat[a],
			c = this._longDateFormat[a.toUpperCase()];
		return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function(a) {
			return a.slice(1)
		}), this._longDateFormat[a])
	}

	function F() {
		return this._invalidDate
	}

	function G(a) {
		return this._ordinal.replace("%d", a)
	}

	function H(a, b, c, d) {
		var e = this._relativeTime[c];
		return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
	}

	function I(a, b) {
		var c = this._relativeTime[a > 0 ? "future" : "past"];
		return z(c) ? c(b) : c.replace(/%s/i, b)
	}

	function J(a, b) {
		var c = a.toLowerCase();
		Hd[c] = Hd[c + "s"] = Hd[b] = a
	}

	function K(a) {
		return "string" == typeof a ? Hd[a] || Hd[a.toLowerCase()] : void 0
	}

	function L(a) {
		var b, c, d = {};
		for(c in a) j(a, c) && (b = K(c), b && (d[b] = a[c]));
		return d
	}

	function M(a, b) {
		Id[a] = b
	}

	function N(a) {
		var b = [];
		for(var c in a) b.push({
			unit: c,
			priority: Id[c]
		});
		return b.sort(function(a, b) {
			return a.priority - b.priority
		}), b
	}

	function O(b, c) {
		return function(d) {
			return null != d ? (Q(this, b, d), a.updateOffset(this, c), this) : P(this, b)
		}
	}

	function P(a, b) {
		return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
	}

	function Q(a, b, c) {
		a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
	}

	function R(a) {
		return a = K(a), z(this[a]) ? this[a]() : this
	}

	function S(a, b) {
		if("object" == typeof a) {
			a = L(a);
			for(var c = N(a), d = 0; d < c.length; d++) this[c[d].unit](a[c[d].unit])
		} else if(a = K(a), z(this[a])) return this[a](b);
		return this
	}

	function T(a, b, c) {
		var d = "" + Math.abs(a),
			e = b - d.length,
			f = a >= 0;
		return(f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
	}

	function U(a, b, c, d) {
		var e = d;
		"string" == typeof d && (e = function() {
			return this[d]()
		}), a && (Md[a] = e), b && (Md[b[0]] = function() {
			return T(e.apply(this, arguments), b[1], b[2])
		}), c && (Md[c] = function() {
			return this.localeData().ordinal(e.apply(this, arguments), a)
		})
	}

	function V(a) {
		return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
	}

	function W(a) {
		var b, c, d = a.match(Jd);
		for(b = 0, c = d.length; b < c; b++) Md[d[b]] ? d[b] = Md[d[b]] : d[b] = V(d[b]);
		return function(b) {
			var e, f = "";
			for(e = 0; e < c; e++) f += z(d[e]) ? d[e].call(b, a) : d[e];
			return f
		}
	}

	function X(a, b) {
		return a.isValid() ? (b = Y(b, a.localeData()), Ld[b] = Ld[b] || W(b), Ld[b](a)) : a.localeData().invalidDate()
	}

	function Y(a, b) {
		function c(a) {
			return b.longDateFormat(a) || a
		}
		var d = 5;
		for(Kd.lastIndex = 0; d >= 0 && Kd.test(a);) a = a.replace(Kd, c), Kd.lastIndex = 0, d -= 1;
		return a
	}

	function Z(a, b, c) {
		ce[a] = z(b) ? b : function(a, d) {
			return a && c ? c : b
		}
	}

	function $(a, b) {
		return j(ce, a) ? ce[a](b._strict, b._locale) : new RegExp(_(a))
	}

	function _(a) {
		return aa(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
			return b || c || d || e
		}))
	}

	function aa(a) {
		return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
	}

	function ba(a, b) {
		var c, d = b;
		for("string" == typeof a && (a = [a]), g(b) && (d = function(a, c) {
				c[b] = u(a)
			}), c = 0; c < a.length; c++) de[a[c]] = d
	}

	function ca(a, b) {
		ba(a, function(a, c, d, e) {
			d._w = d._w || {}, b(a, d._w, d, e)
		})
	}

	function da(a, b, c) {
		null != b && j(de, a) && de[a](b, c._a, c, a)
	}

	function ea(a, b) {
		return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
	}

	function fa(a, b) {
		return a ? c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || oe).test(b) ? "format" : "standalone"][a.month()] : c(this._months) ? this._months : this._months.standalone
	}

	function ga(a, b) {
		return a ? c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[oe.test(b) ? "format" : "standalone"][a.month()] : c(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
	}

	function ha(a, b, c) {
		var d, e, f, g = a.toLocaleLowerCase();
		if(!this._monthsParse)
			for(this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; d < 12; ++d) f = l([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
		return c ? "MMM" === b ? (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : null) : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : null) : "MMM" === b ? (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : null)) : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : null))
	}

	function ia(a, b, c) {
		var d, e, f;
		if(this._monthsParseExact) return ha.call(this, a, b, c);
		for(this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) {
			if(e = l([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
			if(c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
			if(!c && this._monthsParse[d].test(a)) return d
		}
	}

	function ja(a, b) {
		var c;
		if(!a.isValid()) return a;
		if("string" == typeof b)
			if(/^\d+$/.test(b)) b = u(b);
			else if(b = a.localeData().monthsParse(b), !g(b)) return a;
		return c = Math.min(a.date(), ea(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a
	}

	function ka(b) {
		return null != b ? (ja(this, b), a.updateOffset(this, !0), this) : P(this, "Month")
	}

	function la() {
		return ea(this.year(), this.month())
	}

	function ma(a) {
		return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (j(this, "_monthsShortRegex") || (this._monthsShortRegex = re), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex)
	}

	function na(a) {
		return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (j(this, "_monthsRegex") || (this._monthsRegex = se), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex)
	}

	function oa() {
		function a(a, b) {
			return b.length - a.length
		}
		var b, c, d = [],
			e = [],
			f = [];
		for(b = 0; b < 12; b++) c = l([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
		for(d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++) d[b] = aa(d[b]), e[b] = aa(e[b]);
		for(b = 0; b < 24; b++) f[b] = aa(f[b]);
		this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")
	}

	function pa(a) {
		return qa(a) ? 366 : 365
	}

	function qa(a) {
		return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
	}

	function ra() {
		return qa(this.year())
	}

	function sa(a, b, c, d, e, f, g) {
		var h = new Date(a, b, c, d, e, f, g);
		return a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
	}

	function ta(a) {
		var b = new Date(Date.UTC.apply(null, arguments));
		return a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
	}

	function ua(a, b, c) {
		var d = 7 + b - c,
			e = (7 + ta(a, 0, d).getUTCDay() - b) % 7;
		return -e + d - 1
	}

	function va(a, b, c, d, e) {
		var f, g, h = (7 + c - d) % 7,
			i = ua(a, d, e),
			j = 1 + 7 * (b - 1) + h + i;
		return j <= 0 ? (f = a - 1, g = pa(f) + j) : j > pa(a) ? (f = a + 1, g = j - pa(a)) : (f = a, g = j), {
			year: f,
			dayOfYear: g
		}
	}

	function wa(a, b, c) {
		var d, e, f = ua(a.year(), b, c),
			g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
		return g < 1 ? (e = a.year() - 1, d = g + xa(e, b, c)) : g > xa(a.year(), b, c) ? (d = g - xa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
			week: d,
			year: e
		}
	}

	function xa(a, b, c) {
		var d = ua(a, b, c),
			e = ua(a + 1, b, c);
		return(pa(a) - d + e) / 7
	}

	function ya(a) {
		return wa(a, this._week.dow, this._week.doy).week
	}

	function za() {
		return this._week.dow
	}

	function Aa() {
		return this._week.doy
	}

	function Ba(a) {
		var b = this.localeData().week(this);
		return null == a ? b : this.add(7 * (a - b), "d")
	}

	function Ca(a) {
		var b = wa(this, 1, 4).week;
		return null == a ? b : this.add(7 * (a - b), "d")
	}

	function Da(a, b) {
		return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
	}

	function Ea(a, b) {
		return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a
	}

	function Fa(a, b) {
		return a ? c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()] : c(this._weekdays) ? this._weekdays : this._weekdays.standalone
	}

	function Ga(a) {
		return a ? this._weekdaysShort[a.day()] : this._weekdaysShort
	}

	function Ha(a) {
		return a ? this._weekdaysMin[a.day()] : this._weekdaysMin
	}

	function Ia(a, b, c) {
		var d, e, f, g = a.toLocaleLowerCase();
		if(!this._weekdaysParse)
			for(this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; d < 7; ++d) f = l([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
		return c ? "dddd" === b ? (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : null) : "ddd" === b ? (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : null) : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null) : "dddd" === b ? (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : "ddd" === b ? (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : null)))
	}

	function Ja(a, b, c) {
		var d, e, f;
		if(this._weekdaysParseExact) return Ia.call(this, a, b, c);
		for(this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
			if(e = l([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
			if(c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
			if(c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
			if(!c && this._weekdaysParse[d].test(a)) return d
		}
	}

	function Ka(a) {
		if(!this.isValid()) return null != a ? this : NaN;
		var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
		return null != a ? (a = Da(a, this.localeData()), this.add(a - b, "d")) : b
	}

	function La(a) {
		if(!this.isValid()) return null != a ? this : NaN;
		var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
		return null == a ? b : this.add(a - b, "d")
	}

	function Ma(a) {
		if(!this.isValid()) return null != a ? this : NaN;
		if(null != a) {
			var b = Ea(a, this.localeData());
			return this.day(this.day() % 7 ? b : b - 7)
		}
		return this.day() || 7
	}

	function Na(a) {
		return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (j(this, "_weekdaysRegex") || (this._weekdaysRegex = ye), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex)
	}

	function Oa(a) {
		return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (j(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ze), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
	}

	function Pa(a) {
		return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (j(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ae), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
	}

	function Qa() {
		function a(a, b) {
			return b.length - a.length
		}
		var b, c, d, e, f, g = [],
			h = [],
			i = [],
			j = [];
		for(b = 0; b < 7; b++) c = l([2e3, 1]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), j.push(d), j.push(e), j.push(f);
		for(g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++) h[b] = aa(h[b]), i[b] = aa(i[b]), j[b] = aa(j[b]);
		this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i")
	}

	function Ra() {
		return this.hours() % 12 || 12
	}

	function Sa() {
		return this.hours() || 24
	}

	function Ta(a, b) {
		U(a, 0, 0, function() {
			return this.localeData().meridiem(this.hours(), this.minutes(), b)
		})
	}

	function Ua(a, b) {
		return b._meridiemParse
	}

	function Va(a) {
		return "p" === (a + "").toLowerCase().charAt(0)
	}

	function Wa(a, b, c) {
		return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
	}

	function Xa(a) {
		return a ? a.toLowerCase().replace("_", "-") : a
	}

	function Ya(a) {
		for(var b, c, d, e, f = 0; f < a.length;) {
			for(e = Xa(a[f]).split("-"), b = e.length, c = Xa(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
				if(d = Za(e.slice(0, b).join("-"))) return d;
				if(c && c.length >= b && v(e, c, !0) >= b - 1) break;
				b--
			}
			f++
		}
		return null
	}

	function Za(a) {
		var b = null;
		if(!Fe[a] && "undefined" != typeof module && module && module.exports) try {
			b = Be._abbr, require("./locale/" + a), $a(b)
		} catch(a) {}
		return Fe[a]
	}

	function $a(a, b) {
		var c;
		return a && (c = f(b) ? bb(a) : _a(a, b), c && (Be = c)), Be._abbr
	}

	function _a(a, b) {
		if(null !== b) {
			var c = Ee;
			if(b.abbr = a, null != Fe[a]) y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), c = Fe[a]._config;
			else if(null != b.parentLocale) {
				if(null == Fe[b.parentLocale]) return Ge[b.parentLocale] || (Ge[b.parentLocale] = []), Ge[b.parentLocale].push({
					name: a,
					config: b
				}), null;
				c = Fe[b.parentLocale]._config
			}
			return Fe[a] = new C(B(c, b)), Ge[a] && Ge[a].forEach(function(a) {
				_a(a.name, a.config)
			}), $a(a), Fe[a]
		}
		return delete Fe[a], null
	}

	function ab(a, b) {
		if(null != b) {
			var c, d = Ee;
			null != Fe[a] && (d = Fe[a]._config), b = B(d, b), c = new C(b), c.parentLocale = Fe[a], Fe[a] = c, $a(a)
		} else null != Fe[a] && (null != Fe[a].parentLocale ? Fe[a] = Fe[a].parentLocale : null != Fe[a] && delete Fe[a]);
		return Fe[a]
	}

	function bb(a) {
		var b;
		if(a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Be;
		if(!c(a)) {
			if(b = Za(a)) return b;
			a = [a]
		}
		return Ya(a)
	}

	function cb() {
		return Ad(Fe)
	}

	function db(a) {
		var b, c = a._a;
		return c && n(a).overflow === -2 && (b = c[fe] < 0 || c[fe] > 11 ? fe : c[ge] < 1 || c[ge] > ea(c[ee], c[fe]) ? ge : c[he] < 0 || c[he] > 24 || 24 === c[he] && (0 !== c[ie] || 0 !== c[je] || 0 !== c[ke]) ? he : c[ie] < 0 || c[ie] > 59 ? ie : c[je] < 0 || c[je] > 59 ? je : c[ke] < 0 || c[ke] > 999 ? ke : -1, n(a)._overflowDayOfYear && (b < ee || b > ge) && (b = ge), n(a)._overflowWeeks && b === -1 && (b = le), n(a)._overflowWeekday && b === -1 && (b = me), n(a).overflow = b), a
	}

	function eb(a) {
		var b, c, d, e, f, g, h = a._i,
			i = He.exec(h) || Ie.exec(h);
		if(i) {
			for(n(a).iso = !0, b = 0, c = Ke.length; b < c; b++)
				if(Ke[b][1].exec(i[1])) {
					e = Ke[b][0], d = Ke[b][2] !== !1;
					break
				}
			if(null == e) return void(a._isValid = !1);
			if(i[3]) {
				for(b = 0, c = Le.length; b < c; b++)
					if(Le[b][1].exec(i[3])) {
						f = (i[2] || " ") + Le[b][0];
						break
					}
				if(null == f) return void(a._isValid = !1)
			}
			if(!d && null != f) return void(a._isValid = !1);
			if(i[4]) {
				if(!Je.exec(i[4])) return void(a._isValid = !1);
				g = "Z"
			}
			a._f = e + (f || "") + (g || ""), lb(a)
		} else a._isValid = !1
	}

	function fb(a) {
		var b, c, d, e, f, g, h, i, j = {
				" GMT": " +0000",
				" EDT": " -0400",
				" EST": " -0500",
				" CDT": " -0500",
				" CST": " -0600",
				" MDT": " -0600",
				" MST": " -0700",
				" PDT": " -0700",
				" PST": " -0800"
			},
			k = "YXWVUTSRQPONZABCDEFGHIKLM";
		if(b = a._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), c = Ne.exec(b)) {
			if(d = c[1] ? "ddd" + (5 === c[1].length ? ", " : " ") : "", e = "D MMM " + (c[2].length > 10 ? "YYYY " : "YY "), f = "HH:mm" + (c[4] ? ":ss" : ""), c[1]) {
				var l = new Date(c[2]),
					m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][l.getDay()];
				if(c[1].substr(0, 3) !== m) return n(a).weekdayMismatch = !0, void(a._isValid = !1)
			}
			switch(c[5].length) {
				case 2:
					0 === i ? h = " +0000" : (i = k.indexOf(c[5][1].toUpperCase()) - 12, h = (i < 0 ? " -" : " +") + ("" + i).replace(/^-?/, "0").match(/..$/)[0] + "00");
					break;
				case 4:
					h = j[c[5]];
					break;
				default:
					h = j[" GMT"]
			}
			c[5] = h, a._i = c.splice(1).join(""), g = " ZZ", a._f = d + e + f + g, lb(a), n(a).rfc2822 = !0
		} else a._isValid = !1
	}

	function gb(b) {
		var c = Me.exec(b._i);
		return null !== c ? void(b._d = new Date(+c[1])) : (eb(b), void(b._isValid === !1 && (delete b._isValid, fb(b), b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b)))))
	}

	function hb(a, b, c) {
		return null != a ? a : null != b ? b : c
	}

	function ib(b) {
		var c = new Date(a.now());
		return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
	}

	function jb(a) {
		var b, c, d, e, f = [];
		if(!a._d) {
			for(d = ib(a), a._w && null == a._a[ge] && null == a._a[fe] && kb(a), null != a._dayOfYear && (e = hb(a._a[ee], d[ee]), (a._dayOfYear > pa(e) || 0 === a._dayOfYear) && (n(a)._overflowDayOfYear = !0), c = ta(e, 0, a._dayOfYear), a._a[fe] = c.getUTCMonth(), a._a[ge] = c.getUTCDate()), b = 0; b < 3 && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
			for(; b < 7; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
			24 === a._a[he] && 0 === a._a[ie] && 0 === a._a[je] && 0 === a._a[ke] && (a._nextDay = !0, a._a[he] = 0), a._d = (a._useUTC ? ta : sa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[he] = 24)
		}
	}

	function kb(a) {
		var b, c, d, e, f, g, h, i;
		if(b = a._w, null != b.GG || null != b.W || null != b.E) f = 1, g = 4, c = hb(b.GG, a._a[ee], wa(tb(), 1, 4).year), d = hb(b.W, 1), e = hb(b.E, 1), (e < 1 || e > 7) && (i = !0);
		else {
			f = a._locale._week.dow, g = a._locale._week.doy;
			var j = wa(tb(), f, g);
			c = hb(b.gg, a._a[ee], j.year), d = hb(b.w, j.week), null != b.d ? (e = b.d, (e < 0 || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f
		}
		d < 1 || d > xa(c, f, g) ? n(a)._overflowWeeks = !0 : null != i ? n(a)._overflowWeekday = !0 : (h = va(c, d, e, f, g), a._a[ee] = h.year, a._dayOfYear = h.dayOfYear)
	}

	function lb(b) {
		if(b._f === a.ISO_8601) return void eb(b);
		if(b._f === a.RFC_2822) return void fb(b);
		b._a = [], n(b).empty = !0;
		var c, d, e, f, g, h = "" + b._i,
			i = h.length,
			j = 0;
		for(e = Y(b._f, b._locale).match(Jd) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match($(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && n(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), Md[f] ? (d ? n(b).empty = !1 : n(b).unusedTokens.push(f), da(f, d, b)) : b._strict && !d && n(b).unusedTokens.push(f);
		n(b).charsLeftOver = i - j, h.length > 0 && n(b).unusedInput.push(h), b._a[he] <= 12 && n(b).bigHour === !0 && b._a[he] > 0 && (n(b).bigHour = void 0), n(b).parsedDateParts = b._a.slice(0), n(b).meridiem = b._meridiem, b._a[he] = mb(b._locale, b._a[he], b._meridiem), jb(b), db(b)
	}

	function mb(a, b, c) {
		var d;
		return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b) : b
	}

	function nb(a) {
		var b, c, d, e, f;
		if(0 === a._f.length) return n(a).invalidFormat = !0, void(a._d = new Date(NaN));
		for(e = 0; e < a._f.length; e++) f = 0, b = q({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], lb(b), o(b) && (f += n(b).charsLeftOver, f += 10 * n(b).unusedTokens.length, n(b).score = f, (null == d || f < d) && (d = f, c = b));
		k(a, c || b)
	}

	function ob(a) {
		if(!a._d) {
			var b = L(a._i);
			a._a = i([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function(a) {
				return a && parseInt(a, 10)
			}), jb(a)
		}
	}

	function pb(a) {
		var b = new r(db(qb(a)));
		return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
	}

	function qb(a) {
		var b = a._i,
			d = a._f;
		return a._locale = a._locale || bb(a._l), null === b || void 0 === d && "" === b ? p({
			nullInput: !0
		}) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), s(b) ? new r(db(b)) : (h(b) ? a._d = b : c(d) ? nb(a) : d ? lb(a) : rb(a), o(a) || (a._d = null), a))
	}

	function rb(b) {
		var e = b._i;
		f(e) ? b._d = new Date(a.now()) : h(e) ? b._d = new Date(e.valueOf()) : "string" == typeof e ? gb(b) : c(e) ? (b._a = i(e.slice(0), function(a) {
			return parseInt(a, 10)
		}), jb(b)) : d(e) ? ob(b) : g(e) ? b._d = new Date(e) : a.createFromInputFallback(b)
	}

	function sb(a, b, f, g, h) {
		var i = {};
		return f !== !0 && f !== !1 || (g = f, f = void 0), (d(a) && e(a) || c(a) && 0 === a.length) && (a = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = f, i._i = a, i._f = b, i._strict = g, pb(i)
	}

	function tb(a, b, c, d) {
		return sb(a, b, c, d, !1)
	}

	function ub(a, b) {
		var d, e;
		if(1 === b.length && c(b[0]) && (b = b[0]), !b.length) return tb();
		for(d = b[0], e = 1; e < b.length; ++e) b[e].isValid() && !b[e][a](d) || (d = b[e]);
		return d
	}

	function vb() {
		var a = [].slice.call(arguments, 0);
		return ub("isBefore", a)
	}

	function wb() {
		var a = [].slice.call(arguments, 0);
		return ub("isAfter", a)
	}

	function xb(a) {
		for(var b in a)
			if(Re.indexOf(b) === -1 || null != a[b] && isNaN(a[b])) return !1;
		for(var c = !1, d = 0; d < Re.length; ++d)
			if(a[Re[d]]) {
				if(c) return !1;
				parseFloat(a[Re[d]]) !== u(a[Re[d]]) && (c = !0)
			}
		return !0
	}

	function yb() {
		return this._isValid
	}

	function zb() {
		return Sb(NaN)
	}

	function Ab(a) {
		var b = L(a),
			c = b.year || 0,
			d = b.quarter || 0,
			e = b.month || 0,
			f = b.week || 0,
			g = b.day || 0,
			h = b.hour || 0,
			i = b.minute || 0,
			j = b.second || 0,
			k = b.millisecond || 0;
		this._isValid = xb(b), this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = bb(), this._bubble()
	}

	function Bb(a) {
		return a instanceof Ab
	}

	function Cb(a) {
		return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a)
	}

	function Db(a, b) {
		U(a, 0, 0, function() {
			var a = this.utcOffset(),
				c = "+";
			return a < 0 && (a = -a, c = "-"), c + T(~~(a / 60), 2) + b + T(~~a % 60, 2)
		})
	}

	function Eb(a, b) {
		var c = (b || "").match(a);
		if(null === c) return null;
		var d = c[c.length - 1] || [],
			e = (d + "").match(Se) || ["-", 0, 0],
			f = +(60 * e[1]) + u(e[2]);
		return 0 === f ? 0 : "+" === e[0] ? f : -f
	}

	function Fb(b, c) {
		var d, e;
		return c._isUTC ? (d = c.clone(), e = (s(b) || h(b) ? b.valueOf() : tb(b).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : tb(b).local()
	}

	function Gb(a) {
		return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
	}

	function Hb(b, c, d) {
		var e, f = this._offset || 0;
		if(!this.isValid()) return null != b ? this : NaN;
		if(null != b) {
			if("string" == typeof b) {
				if(b = Eb(_d, b), null === b) return this
			} else Math.abs(b) < 16 && !d && (b = 60 * b);
			return !this._isUTC && c && (e = Gb(this)), this._offset = b, this._isUTC = !0, null != e && this.add(e, "m"), f !== b && (!c || this._changeInProgress ? Xb(this, Sb(b - f, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this
		}
		return this._isUTC ? f : Gb(this)
	}

	function Ib(a, b) {
		return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
	}

	function Jb(a) {
		return this.utcOffset(0, a)
	}

	function Kb(a) {
		return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Gb(this), "m")), this
	}

	function Lb() {
		if(null != this._tzm) this.utcOffset(this._tzm, !1, !0);
		else if("string" == typeof this._i) {
			var a = Eb($d, this._i);
			null != a ? this.utcOffset(a) : this.utcOffset(0, !0)
		}
		return this
	}

	function Mb(a) {
		return !!this.isValid() && (a = a ? tb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0)
	}

	function Nb() {
		return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
	}

	function Ob() {
		if(!f(this._isDSTShifted)) return this._isDSTShifted;
		var a = {};
		if(q(a, this), a = qb(a), a._a) {
			var b = a._isUTC ? l(a._a) : tb(a._a);
			this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0
		} else this._isDSTShifted = !1;
		return this._isDSTShifted
	}

	function Pb() {
		return !!this.isValid() && !this._isUTC
	}

	function Qb() {
		return !!this.isValid() && this._isUTC
	}

	function Rb() {
		return !!this.isValid() && (this._isUTC && 0 === this._offset)
	}

	function Sb(a, b) {
		var c, d, e, f = a,
			h = null;
		return Bb(a) ? f = {
			ms: a._milliseconds,
			d: a._days,
			M: a._months
		} : g(a) ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (h = Te.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = {
			y: 0,
			d: u(h[ge]) * c,
			h: u(h[he]) * c,
			m: u(h[ie]) * c,
			s: u(h[je]) * c,
			ms: u(Cb(1e3 * h[ke])) * c
		}) : (h = Ue.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = {
			y: Tb(h[2], c),
			M: Tb(h[3], c),
			w: Tb(h[4], c),
			d: Tb(h[5], c),
			h: Tb(h[6], c),
			m: Tb(h[7], c),
			s: Tb(h[8], c)
		}) : null == f ? f = {} : "object" == typeof f && ("from" in f || "to" in f) && (e = Vb(tb(f.from), tb(f.to)), f = {}, f.ms = e.milliseconds, f.M = e.months), d = new Ab(f), Bb(a) && j(a, "_locale") && (d._locale = a._locale), d
	}

	function Tb(a, b) {
		var c = a && parseFloat(a.replace(",", "."));
		return(isNaN(c) ? 0 : c) * b
	}

	function Ub(a, b) {
		var c = {
			milliseconds: 0,
			months: 0
		};
		return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
	}

	function Vb(a, b) {
		var c;
		return a.isValid() && b.isValid() ? (b = Fb(b, a), a.isBefore(b) ? c = Ub(a, b) : (c = Ub(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
			milliseconds: 0,
			months: 0
		}
	}

	function Wb(a, b) {
		return function(c, d) {
			var e, f;
			return null === d || isNaN(+d) || (y(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Sb(c, d), Xb(this, e, a), this
		}
	}

	function Xb(b, c, d, e) {
		var f = c._milliseconds,
			g = Cb(c._days),
			h = Cb(c._months);
		b.isValid() && (e = null == e || e, f && b._d.setTime(b._d.valueOf() + f * d), g && Q(b, "Date", P(b, "Date") + g * d), h && ja(b, P(b, "Month") + h * d), e && a.updateOffset(b, g || h))
	}

	function Yb(a, b) {
		var c = a.diff(b, "days", !0);
		return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse"
	}

	function Zb(b, c) {
		var d = b || tb(),
			e = Fb(d, this).startOf("day"),
			f = a.calendarFormat(this, e) || "sameElse",
			g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);
		return this.format(g || this.localeData().calendar(f, this, tb(d)))
	}

	function $b() {
		return new r(this)
	}

	function _b(a, b) {
		var c = s(a) ? a : tb(a);
		return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf())
	}

	function ac(a, b) {
		var c = s(a) ? a : tb(a);
		return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf())
	}

	function bc(a, b, c, d) {
		return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
	}

	function cc(a, b) {
		var c, d = s(a) ? a : tb(a);
		return !(!this.isValid() || !d.isValid()) && (b = K(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf()))
	}

	function dc(a, b) {
		return this.isSame(a, b) || this.isAfter(a, b)
	}

	function ec(a, b) {
		return this.isSame(a, b) || this.isBefore(a, b)
	}

	function fc(a, b, c) {
		var d, e, f, g;
		return this.isValid() ? (d = Fb(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = gc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : t(g)) : NaN) : NaN
	}

	function gc(a, b) {
		var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
			f = a.clone().add(e, "months");
		return b - f < 0 ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) || 0
	}

	function hc() {
		return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
	}

	function ic() {
		if(!this.isValid()) return null;
		var a = this.clone().utc();
		return a.year() < 0 || a.year() > 9999 ? X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : z(Date.prototype.toISOString) ? this.toDate().toISOString() : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
	}

	function jc() {
		if(!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
		var a = "moment",
			b = "";
		this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", b = "Z");
		var c = "[" + a + '("]',
			d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
			e = "-MM-DD[T]HH:mm:ss.SSS",
			f = b + '[")]';
		return this.format(c + d + e + f)
	}

	function kc(b) {
		b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
		var c = X(this, b);
		return this.localeData().postformat(c)
	}

	function lc(a, b) {
		return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({
			to: this,
			from: a
		}).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
	}

	function mc(a) {
		return this.from(tb(), a)
	}

	function nc(a, b) {
		return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({
			from: this,
			to: a
		}).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
	}

	function oc(a) {
		return this.to(tb(), a)
	}

	function pc(a) {
		var b;
		return void 0 === a ? this._locale._abbr : (b = bb(a), null != b && (this._locale = b), this)
	}

	function qc() {
		return this._locale
	}

	function rc(a) {
		switch(a = K(a)) {
			case "year":
				this.month(0);
			case "quarter":
			case "month":
				this.date(1);
			case "week":
			case "isoWeek":
			case "day":
			case "date":
				this.hours(0);
			case "hour":
				this.minutes(0);
			case "minute":
				this.seconds(0);
			case "second":
				this.milliseconds(0)
		}
		return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
	}

	function sc(a) {
		return a = K(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"))
	}

	function tc() {
		return this._d.valueOf() - 6e4 * (this._offset || 0)
	}

	function uc() {
		return Math.floor(this.valueOf() / 1e3)
	}

	function vc() {
		return new Date(this.valueOf())
	}

	function wc() {
		var a = this;
		return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
	}

	function xc() {
		var a = this;
		return {
			years: a.year(),
			months: a.month(),
			date: a.date(),
			hours: a.hours(),
			minutes: a.minutes(),
			seconds: a.seconds(),
			milliseconds: a.milliseconds()
		}
	}

	function yc() {
		return this.isValid() ? this.toISOString() : null
	}

	function zc() {
		return o(this)
	}

	function Ac() {
		return k({}, n(this))
	}

	function Bc() {
		return n(this).overflow
	}

	function Cc() {
		return {
			input: this._i,
			format: this._f,
			locale: this._locale,
			isUTC: this._isUTC,
			strict: this._strict
		}
	}

	function Dc(a, b) {
		U(0, [a, a.length], 0, b)
	}

	function Ec(a) {
		return Ic.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
	}

	function Fc(a) {
		return Ic.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
	}

	function Gc() {
		return xa(this.year(), 1, 4)
	}

	function Hc() {
		var a = this.localeData()._week;
		return xa(this.year(), a.dow, a.doy)
	}

	function Ic(a, b, c, d, e) {
		var f;
		return null == a ? wa(this, d, e).year : (f = xa(a, d, e), b > f && (b = f), Jc.call(this, a, b, c, d, e))
	}

	function Jc(a, b, c, d, e) {
		var f = va(a, b, c, d, e),
			g = ta(f.year, 0, f.dayOfYear);
		return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
	}

	function Kc(a) {
		return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
	}

	function Lc(a) {
		var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
		return null == a ? b : this.add(a - b, "d")
	}

	function Mc(a, b) {
		b[ke] = u(1e3 * ("0." + a))
	}

	function Nc() {
		return this._isUTC ? "UTC" : ""
	}

	function Oc() {
		return this._isUTC ? "Coordinated Universal Time" : ""
	}

	function Pc(a) {
		return tb(1e3 * a)
	}

	function Qc() {
		return tb.apply(null, arguments).parseZone()
	}

	function Rc(a) {
		return a
	}

	function Sc(a, b, c, d) {
		var e = bb(),
			f = l().set(d, b);
		return e[c](f, a)
	}

	function Tc(a, b, c) {
		if(g(a) && (b = a, a = void 0), a = a || "", null != b) return Sc(a, b, c, "month");
		var d, e = [];
		for(d = 0; d < 12; d++) e[d] = Sc(a, d, c, "month");
		return e
	}

	function Uc(a, b, c, d) {
		"boolean" == typeof a ? (g(b) && (c = b, b = void 0), b = b || "") : (b = a, c = b, a = !1, g(b) && (c = b, b = void 0), b = b || "");
		var e = bb(),
			f = a ? e._week.dow : 0;
		if(null != c) return Sc(b, (c + f) % 7, d, "day");
		var h, i = [];
		for(h = 0; h < 7; h++) i[h] = Sc(b, (h + f) % 7, d, "day");
		return i
	}

	function Vc(a, b) {
		return Tc(a, b, "months")
	}

	function Wc(a, b) {
		return Tc(a, b, "monthsShort")
	}

	function Xc(a, b, c) {
		return Uc(a, b, c, "weekdays")
	}

	function Yc(a, b, c) {
		return Uc(a, b, c, "weekdaysShort")
	}

	function Zc(a, b, c) {
		return Uc(a, b, c, "weekdaysMin")
	}

	function $c() {
		var a = this._data;
		return this._milliseconds = df(this._milliseconds), this._days = df(this._days), this._months = df(this._months), a.milliseconds = df(a.milliseconds), a.seconds = df(a.seconds), a.minutes = df(a.minutes), a.hours = df(a.hours), a.months = df(a.months), a.years = df(a.years), this
	}

	function _c(a, b, c, d) {
		var e = Sb(b, c);
		return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
	}

	function ad(a, b) {
		return _c(this, a, b, 1)
	}

	function bd(a, b) {
		return _c(this, a, b, -1)
	}

	function cd(a) {
		return a < 0 ? Math.floor(a) : Math.ceil(a)
	}

	function dd() {
		var a, b, c, d, e, f = this._milliseconds,
			g = this._days,
			h = this._months,
			i = this._data;
		return f >= 0 && g >= 0 && h >= 0 || f <= 0 && g <= 0 && h <= 0 || (f += 864e5 * cd(fd(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = t(f / 1e3), i.seconds = a % 60, b = t(a / 60), i.minutes = b % 60, c = t(b / 60), i.hours = c % 24, g += t(c / 24), e = t(ed(g)), h += e, g -= cd(fd(e)), d = t(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
	}

	function ed(a) {
		return 4800 * a / 146097
	}

	function fd(a) {
		return 146097 * a / 4800
	}

	function gd(a) {
		if(!this.isValid()) return NaN;
		var b, c, d = this._milliseconds;
		if(a = K(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + ed(b), "month" === a ? c : c / 12;
		switch(b = this._days + Math.round(fd(this._months)), a) {
			case "week":
				return b / 7 + d / 6048e5;
			case "day":
				return b + d / 864e5;
			case "hour":
				return 24 * b + d / 36e5;
			case "minute":
				return 1440 * b + d / 6e4;
			case "second":
				return 86400 * b + d / 1e3;
			case "millisecond":
				return Math.floor(864e5 * b) + d;
			default:
				throw new Error("Unknown unit " + a)
		}
	}

	function hd() {
		return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12) : NaN
	}

	function id(a) {
		return function() {
			return this.as(a)
		}
	}

	function jd(a) {
		return a = K(a), this.isValid() ? this[a + "s"]() : NaN
	}

	function kd(a) {
		return function() {
			return this.isValid() ? this._data[a] : NaN
		}
	}

	function ld() {
		return t(this.days() / 7)
	}

	function md(a, b, c, d, e) {
		return e.relativeTime(b || 1, !!c, a, d)
	}

	function nd(a, b, c) {
		var d = Sb(a).abs(),
			e = uf(d.as("s")),
			f = uf(d.as("m")),
			g = uf(d.as("h")),
			h = uf(d.as("d")),
			i = uf(d.as("M")),
			j = uf(d.as("y")),
			k = e <= vf.ss && ["s", e] || e < vf.s && ["ss", e] || f <= 1 && ["m"] || f < vf.m && ["mm", f] || g <= 1 && ["h"] || g < vf.h && ["hh", g] || h <= 1 && ["d"] || h < vf.d && ["dd", h] || i <= 1 && ["M"] || i < vf.M && ["MM", i] || j <= 1 && ["y"] || ["yy", j];
		return k[2] = b, k[3] = +a > 0, k[4] = c, md.apply(null, k)
	}

	function od(a) {
		return void 0 === a ? uf : "function" == typeof a && (uf = a, !0)
	}

	function pd(a, b) {
		return void 0 !== vf[a] && (void 0 === b ? vf[a] : (vf[a] = b, "s" === a && (vf.ss = b - 1), !0))
	}

	function qd(a) {
		if(!this.isValid()) return this.localeData().invalidDate();
		var b = this.localeData(),
			c = nd(this, !a, b);
		return a && (c = b.pastFuture(+this, c)), b.postformat(c)
	}

	function rd() {
		if(!this.isValid()) return this.localeData().invalidDate();
		var a, b, c, d = wf(this._milliseconds) / 1e3,
			e = wf(this._days),
			f = wf(this._months);
		a = t(d / 60), b = t(a / 60), d %= 60, a %= 60, c = t(f / 12), f %= 12;
		var g = c,
			h = f,
			i = e,
			j = b,
			k = a,
			l = d,
			m = this.asSeconds();
		return m ? (m < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
	}
	var sd, td;
	td = Array.prototype.some ? Array.prototype.some : function(a) {
		for(var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++)
			if(d in b && a.call(this, b[d], d, b)) return !0;
		return !1
	};
	var ud = td,
		vd = a.momentProperties = [],
		wd = !1,
		xd = {};
	a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;
	var yd;
	yd = Object.keys ? Object.keys : function(a) {
		var b, c = [];
		for(b in a) j(a, b) && c.push(b);
		return c
	};
	var zd, Ad = yd,
		Bd = {
			sameDay: "[Today at] LT",
			nextDay: "[Tomorrow at] LT",
			nextWeek: "dddd [at] LT",
			lastDay: "[Yesterday at] LT",
			lastWeek: "[Last] dddd [at] LT",
			sameElse: "L"
		},
		Cd = {
			LTS: "h:mm:ss A",
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D, YYYY",
			LLL: "MMMM D, YYYY h:mm A",
			LLLL: "dddd, MMMM D, YYYY h:mm A"
		},
		Dd = "Invalid date",
		Ed = "%d",
		Fd = /\d{1,2}/,
		Gd = {
			future: "in %s",
			past: "%s ago",
			s: "a few seconds",
			ss: "%d seconds",
			m: "a minute",
			mm: "%d minutes",
			h: "an hour",
			hh: "%d hours",
			d: "a day",
			dd: "%d days",
			M: "a month",
			MM: "%d months",
			y: "a year",
			yy: "%d years"
		},
		Hd = {},
		Id = {},
		Jd = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
		Kd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
		Ld = {},
		Md = {},
		Nd = /\d/,
		Od = /\d\d/,
		Pd = /\d{3}/,
		Qd = /\d{4}/,
		Rd = /[+-]?\d{6}/,
		Sd = /\d\d?/,
		Td = /\d\d\d\d?/,
		Ud = /\d\d\d\d\d\d?/,
		Vd = /\d{1,3}/,
		Wd = /\d{1,4}/,
		Xd = /[+-]?\d{1,6}/,
		Yd = /\d+/,
		Zd = /[+-]?\d+/,
		$d = /Z|[+-]\d\d:?\d\d/gi,
		_d = /Z|[+-]\d\d(?::?\d\d)?/gi,
		ae = /[+-]?\d+(\.\d{1,3})?/,
		be = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
		ce = {},
		de = {},
		ee = 0,
		fe = 1,
		ge = 2,
		he = 3,
		ie = 4,
		je = 5,
		ke = 6,
		le = 7,
		me = 8;
	zd = Array.prototype.indexOf ? Array.prototype.indexOf : function(a) {
		var b;
		for(b = 0; b < this.length; ++b)
			if(this[b] === a) return b;
		return -1
	};
	var ne = zd;
	U("M", ["MM", 2], "Mo", function() {
		return this.month() + 1
	}), U("MMM", 0, 0, function(a) {
		return this.localeData().monthsShort(this, a)
	}), U("MMMM", 0, 0, function(a) {
		return this.localeData().months(this, a)
	}), J("month", "M"), M("month", 8), Z("M", Sd), Z("MM", Sd, Od), Z("MMM", function(a, b) {
		return b.monthsShortRegex(a)
	}), Z("MMMM", function(a, b) {
		return b.monthsRegex(a)
	}), ba(["M", "MM"], function(a, b) {
		b[fe] = u(a) - 1
	}), ba(["MMM", "MMMM"], function(a, b, c, d) {
		var e = c._locale.monthsParse(a, d, c._strict);
		null != e ? b[fe] = e : n(c).invalidMonth = a
	});
	var oe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
		pe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		qe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		re = be,
		se = be;
	U("Y", 0, 0, function() {
		var a = this.year();
		return a <= 9999 ? "" + a : "+" + a
	}), U(0, ["YY", 2], 0, function() {
		return this.year() % 100
	}), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), J("year", "y"), M("year", 1), Z("Y", Zd), Z("YY", Sd, Od), Z("YYYY", Wd, Qd), Z("YYYYY", Xd, Rd), Z("YYYYYY", Xd, Rd), ba(["YYYYY", "YYYYYY"], ee), ba("YYYY", function(b, c) {
		c[ee] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b)
	}), ba("YY", function(b, c) {
		c[ee] = a.parseTwoDigitYear(b)
	}), ba("Y", function(a, b) {
		b[ee] = parseInt(a, 10)
	}), a.parseTwoDigitYear = function(a) {
		return u(a) + (u(a) > 68 ? 1900 : 2e3)
	};
	var te = O("FullYear", !0);
	U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), J("week", "w"), J("isoWeek", "W"), M("week", 5), M("isoWeek", 5), Z("w", Sd), Z("ww", Sd, Od), Z("W", Sd), Z("WW", Sd, Od), ca(["w", "ww", "W", "WW"], function(a, b, c, d) {
		b[d.substr(0, 1)] = u(a)
	});
	var ue = {
		dow: 0,
		doy: 6
	};
	U("d", 0, "do", "day"), U("dd", 0, 0, function(a) {
		return this.localeData().weekdaysMin(this, a)
	}), U("ddd", 0, 0, function(a) {
		return this.localeData().weekdaysShort(this, a)
	}), U("dddd", 0, 0, function(a) {
		return this.localeData().weekdays(this, a)
	}), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), J("day", "d"), J("weekday", "e"), J("isoWeekday", "E"), M("day", 11), M("weekday", 11), M("isoWeekday", 11), Z("d", Sd), Z("e", Sd), Z("E", Sd), Z("dd", function(a, b) {
		return b.weekdaysMinRegex(a)
	}), Z("ddd", function(a, b) {
		return b.weekdaysShortRegex(a)
	}), Z("dddd", function(a, b) {
		return b.weekdaysRegex(a)
	}), ca(["dd", "ddd", "dddd"], function(a, b, c, d) {
		var e = c._locale.weekdaysParse(a, d, c._strict);
		null != e ? b.d = e : n(c).invalidWeekday = a
	}), ca(["d", "e", "E"], function(a, b, c, d) {
		b[d] = u(a)
	});
	var ve = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		we = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
		ye = be,
		ze = be,
		Ae = be;
	U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, Ra), U("k", ["kk", 2], 0, Sa), U("hmm", 0, 0, function() {
		return "" + Ra.apply(this) + T(this.minutes(), 2)
	}), U("hmmss", 0, 0, function() {
		return "" + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2)
	}), U("Hmm", 0, 0, function() {
		return "" + this.hours() + T(this.minutes(), 2)
	}), U("Hmmss", 0, 0, function() {
		return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2)
	}), Ta("a", !0), Ta("A", !1), J("hour", "h"), M("hour", 13), Z("a", Ua), Z("A", Ua), Z("H", Sd), Z("h", Sd), Z("k", Sd), Z("HH", Sd, Od), Z("hh", Sd, Od), Z("kk", Sd, Od), Z("hmm", Td), Z("hmmss", Ud), Z("Hmm", Td), Z("Hmmss", Ud), ba(["H", "HH"], he), ba(["k", "kk"], function(a, b, c) {
		var d = u(a);
		b[he] = 24 === d ? 0 : d
	}), ba(["a", "A"], function(a, b, c) {
		c._isPm = c._locale.isPM(a), c._meridiem = a
	}), ba(["h", "hh"], function(a, b, c) {
		b[he] = u(a), n(c).bigHour = !0
	}), ba("hmm", function(a, b, c) {
		var d = a.length - 2;
		b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d)), n(c).bigHour = !0
	}), ba("hmmss", function(a, b, c) {
		var d = a.length - 4,
			e = a.length - 2;
		b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d, 2)), b[je] = u(a.substr(e)), n(c).bigHour = !0
	}), ba("Hmm", function(a, b, c) {
		var d = a.length - 2;
		b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d))
	}), ba("Hmmss", function(a, b, c) {
		var d = a.length - 4,
			e = a.length - 2;
		b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d, 2)), b[je] = u(a.substr(e))
	});
	var Be, Ce = /[ap]\.?m?\.?/i,
		De = O("Hours", !0),
		Ee = {
			calendar: Bd,
			longDateFormat: Cd,
			invalidDate: Dd,
			ordinal: Ed,
			dayOfMonthOrdinalParse: Fd,
			relativeTime: Gd,
			months: pe,
			monthsShort: qe,
			week: ue,
			weekdays: ve,
			weekdaysMin: xe,
			weekdaysShort: we,
			meridiemParse: Ce
		},
		Fe = {},
		Ge = {},
		He = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		Ie = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		Je = /Z|[+-]\d\d(?::?\d\d)?/,
		Ke = [
			["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
			["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
			["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
			["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
			["YYYY-DDD", /\d{4}-\d{3}/],
			["YYYY-MM", /\d{4}-\d\d/, !1],
			["YYYYYYMMDD", /[+-]\d{10}/],
			["YYYYMMDD", /\d{8}/],
			["GGGG[W]WWE", /\d{4}W\d{3}/],
			["GGGG[W]WW", /\d{4}W\d{2}/, !1],
			["YYYYDDD", /\d{7}/]
		],
		Le = [
			["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
			["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
			["HH:mm:ss", /\d\d:\d\d:\d\d/],
			["HH:mm", /\d\d:\d\d/],
			["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
			["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
			["HHmmss", /\d\d\d\d\d\d/],
			["HHmm", /\d\d\d\d/],
			["HH", /\d\d/]
		],
		Me = /^\/?Date\((\-?\d+)/i,
		Ne = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
	a.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(a) {
		a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
	}), a.ISO_8601 = function() {}, a.RFC_2822 = function() {};
	var Oe = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
			var a = tb.apply(null, arguments);
			return this.isValid() && a.isValid() ? a < this ? this : a : p()
		}),
		Pe = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
			var a = tb.apply(null, arguments);
			return this.isValid() && a.isValid() ? a > this ? this : a : p()
		}),
		Qe = function() {
			return Date.now ? Date.now() : +new Date
		},
		Re = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
	Db("Z", ":"), Db("ZZ", ""), Z("Z", _d), Z("ZZ", _d), ba(["Z", "ZZ"], function(a, b, c) {
		c._useUTC = !0, c._tzm = Eb(_d, a)
	});
	var Se = /([\+\-]|\d\d)/gi;
	a.updateOffset = function() {};
	var Te = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
		Ue = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
	Sb.fn = Ab.prototype, Sb.invalid = zb;
	var Ve = Wb(1, "add"),
		We = Wb(-1, "subtract");
	a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
	var Xe = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
		return void 0 === a ? this.localeData() : this.locale(a)
	});
	U(0, ["gg", 2], 0, function() {
		return this.weekYear() % 100
	}), U(0, ["GG", 2], 0, function() {
		return this.isoWeekYear() % 100
	}), Dc("gggg", "weekYear"), Dc("ggggg", "weekYear"), Dc("GGGG", "isoWeekYear"), Dc("GGGGG", "isoWeekYear"), J("weekYear", "gg"), J("isoWeekYear", "GG"), M("weekYear", 1), M("isoWeekYear", 1), Z("G", Zd), Z("g", Zd), Z("GG", Sd, Od), Z("gg", Sd, Od), Z("GGGG", Wd, Qd), Z("gggg", Wd, Qd), Z("GGGGG", Xd, Rd), Z("ggggg", Xd, Rd), ca(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) {
		b[d.substr(0, 2)] = u(a)
	}), ca(["gg", "GG"], function(b, c, d, e) {
		c[e] = a.parseTwoDigitYear(b)
	}), U("Q", 0, "Qo", "quarter"), J("quarter", "Q"), M("quarter", 7), Z("Q", Nd), ba("Q", function(a, b) {
		b[fe] = 3 * (u(a) - 1)
	}), U("D", ["DD", 2], "Do", "date"), J("date", "D"), M("date", 9), Z("D", Sd), Z("DD", Sd, Od), Z("Do", function(a, b) {
		return a ? b._dayOfMonthOrdinalParse || b._ordinalParse : b._dayOfMonthOrdinalParseLenient
	}), ba(["D", "DD"], ge), ba("Do", function(a, b) {
		b[ge] = u(a.match(Sd)[0], 10)
	});
	var Ye = O("Date", !0);
	U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), J("dayOfYear", "DDD"), M("dayOfYear", 4), Z("DDD", Vd), Z("DDDD", Pd), ba(["DDD", "DDDD"], function(a, b, c) {
		c._dayOfYear = u(a)
	}), U("m", ["mm", 2], 0, "minute"), J("minute", "m"), M("minute", 14), Z("m", Sd), Z("mm", Sd, Od), ba(["m", "mm"], ie);
	var Ze = O("Minutes", !1);
	U("s", ["ss", 2], 0, "second"), J("second", "s"), M("second", 15), Z("s", Sd), Z("ss", Sd, Od), ba(["s", "ss"], je);
	var $e = O("Seconds", !1);
	U("S", 0, 0, function() {
		return ~~(this.millisecond() / 100)
	}), U(0, ["SS", 2], 0, function() {
		return ~~(this.millisecond() / 10)
	}), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function() {
		return 10 * this.millisecond()
	}), U(0, ["SSSSS", 5], 0, function() {
		return 100 * this.millisecond()
	}), U(0, ["SSSSSS", 6], 0, function() {
		return 1e3 * this.millisecond()
	}), U(0, ["SSSSSSS", 7], 0, function() {
		return 1e4 * this.millisecond()
	}), U(0, ["SSSSSSSS", 8], 0, function() {
		return 1e5 * this.millisecond()
	}), U(0, ["SSSSSSSSS", 9], 0, function() {
		return 1e6 * this.millisecond()
	}), J("millisecond", "ms"), M("millisecond", 16), Z("S", Vd, Nd), Z("SS", Vd, Od), Z("SSS", Vd, Pd);
	var _e;
	for(_e = "SSSS"; _e.length <= 9; _e += "S") Z(_e, Yd);
	for(_e = "S"; _e.length <= 9; _e += "S") ba(_e, Mc);
	var af = O("Milliseconds", !1);
	U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
	var bf = r.prototype;
	bf.add = Ve, bf.calendar = Zb, bf.clone = $b, bf.diff = fc, bf.endOf = sc, bf.format = kc, bf.from = lc, bf.fromNow = mc, bf.to = nc, bf.toNow = oc, bf.get = R, bf.invalidAt = Bc, bf.isAfter = _b, bf.isBefore = ac, bf.isBetween = bc, bf.isSame = cc, bf.isSameOrAfter = dc, bf.isSameOrBefore = ec, bf.isValid = zc, bf.lang = Xe, bf.locale = pc, bf.localeData = qc, bf.max = Pe, bf.min = Oe, bf.parsingFlags = Ac, bf.set = S, bf.startOf = rc, bf.subtract = We, bf.toArray = wc, bf.toObject = xc, bf.toDate = vc, bf.toISOString = ic, bf.inspect = jc, bf.toJSON = yc, bf.toString = hc, bf.unix = uc, bf.valueOf = tc, bf.creationData = Cc, bf.year = te, bf.isLeapYear = ra, bf.weekYear = Ec, bf.isoWeekYear = Fc, bf.quarter = bf.quarters = Kc, bf.month = ka, bf.daysInMonth = la, bf.week = bf.weeks = Ba, bf.isoWeek = bf.isoWeeks = Ca, bf.weeksInYear = Hc, bf.isoWeeksInYear = Gc, bf.date = Ye, bf.day = bf.days = Ka, bf.weekday = La, bf.isoWeekday = Ma, bf.dayOfYear = Lc, bf.hour = bf.hours = De, bf.minute = bf.minutes = Ze, bf.second = bf.seconds = $e, bf.millisecond = bf.milliseconds = af, bf.utcOffset = Hb, bf.utc = Jb, bf.local = Kb, bf.parseZone = Lb, bf.hasAlignedHourOffset = Mb, bf.isDST = Nb, bf.isLocal = Pb, bf.isUtcOffset = Qb, bf.isUtc = Rb, bf.isUTC = Rb, bf.zoneAbbr = Nc, bf.zoneName = Oc, bf.dates = x("dates accessor is deprecated. Use date instead.", Ye), bf.months = x("months accessor is deprecated. Use month instead", ka), bf.years = x("years accessor is deprecated. Use year instead", te), bf.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ib), bf.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ob);
	var cf = C.prototype;
	cf.calendar = D, cf.longDateFormat = E, cf.invalidDate = F, cf.ordinal = G, cf.preparse = Rc, cf.postformat = Rc, cf.relativeTime = H, cf.pastFuture = I, cf.set = A, cf.months = fa, cf.monthsShort = ga, cf.monthsParse = ia, cf.monthsRegex = na, cf.monthsShortRegex = ma, cf.week = ya, cf.firstDayOfYear = Aa, cf.firstDayOfWeek = za, cf.weekdays = Fa, cf.weekdaysMin = Ha, cf.weekdaysShort = Ga, cf.weekdaysParse = Ja, cf.weekdaysRegex = Na, cf.weekdaysShortRegex = Oa, cf.weekdaysMinRegex = Pa, cf.isPM = Va, cf.meridiem = Wa, $a("en", {
		dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
		ordinal: function(a) {
			var b = a % 10,
				c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
			return a + c
		}
	}), a.lang = x("moment.lang is deprecated. Use moment.locale instead.", $a), a.langData = x("moment.langData is deprecated. Use moment.localeData instead.", bb);
	var df = Math.abs,
		ef = id("ms"),
		ff = id("s"),
		gf = id("m"),
		hf = id("h"),
		jf = id("d"),
		kf = id("w"),
		lf = id("M"),
		mf = id("y"),
		nf = kd("milliseconds"),
		of = kd("seconds"),
		pf = kd("minutes"),
		qf = kd("hours"),
		rf = kd("days"),
		sf = kd("months"),
		tf = kd("years"),
		uf = Math.round,
		vf = {
			ss: 44,
			s: 45,
			m: 45,
			h: 22,
			d: 26,
			M: 11
		},
		wf = Math.abs,
		xf = Ab.prototype;
	return xf.isValid = yb, xf.abs = $c, xf.add = ad, xf.subtract = bd, xf.as = gd, xf.asMilliseconds = ef, xf.asSeconds = ff, xf.asMinutes = gf, xf.asHours = hf, xf.asDays = jf, xf.asWeeks = kf, xf.asMonths = lf, xf.asYears = mf, xf.valueOf = hd, xf._bubble = dd, xf.get = jd, xf.milliseconds = nf, xf.seconds = of , xf.minutes = pf, xf.hours = qf, xf.days = rf, xf.weeks = ld, xf.months = sf, xf.years = tf, xf.humanize = qd, xf.toISOString = rd, xf.toString = rd, xf.toJSON = rd, xf.locale = pc, xf.localeData = qc, xf.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", rd), xf.lang = Xe, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), Z("x", Zd), Z("X", ae), ba("X", function(a, b, c) {
		c._d = new Date(1e3 * parseFloat(a, 10))
	}), ba("x", function(a, b, c) {
		c._d = new Date(u(a))
	}), a.version = "2.18.1", b(tb), a.fn = bf, a.min = vb, a.max = wb, a.now = Qe, a.utc = l, a.unix = Pc, a.months = Vc, a.isDate = h, a.locale = $a, a.invalid = p, a.duration = Sb, a.isMoment = s, a.weekdays = Xc, a.parseZone = Qc, a.localeData = bb, a.isDuration = Bb, a.monthsShort = Wc, a.weekdaysMin = Zc, a.defineLocale = _a, a.updateLocale = ab, a.locales = cb, a.weekdaysShort = Yc, a.normalizeUnits = K, a.relativeTimeRounding = od, a.relativeTimeThreshold = pd, a.calendarFormat = Yb, a.prototype = bf, a
});
(function e(t, n, r) {
	function s(o, u) {
		if(!n[o]) {
			if(!t[o]) {
				var a = typeof require == "function" && require;
				if(!u && a) return a(o, !0);
				if(i) return i(o, !0);
				var f = new Error("Cannot find module '" + o + "'");
				throw f.code = "MODULE_NOT_FOUND", f
			}
			var l = n[o] = {
				exports: {}
			};
			t[o][0].call(l.exports, function(e) {
				var n = t[o][1][e];
				return s(n ? n : e)
			}, l, l.exports, e, t, n, r)
		}
		return n[o].exports
	}
	var i = typeof require == "function" && require;
	for(var o = 0; o < r.length; o++) s(r[o]);
	return s
})({
	1: [function(require, module, exports) {
		var FilterCSS = require("cssfilter").FilterCSS;
		var getDefaultCSSWhiteList = require("cssfilter").getDefaultWhiteList;
		var _ = require("./util");

		function getDefaultWhiteList() {
			return {
				a: ["target", "href", "title"],
				abbr: ["title"],
				address: [],
				area: ["shape", "coords", "href", "alt"],
				article: [],
				aside: [],
				audio: ["autoplay", "controls", "loop", "preload", "src"],
				b: [],
				bdi: ["dir"],
				bdo: ["dir"],
				big: [],
				blockquote: ["cite"],
				br: [],
				caption: [],
				center: [],
				cite: [],
				code: [],
				col: ["align", "valign", "span", "width"],
				colgroup: ["align", "valign", "span", "width"],
				dd: [],
				del: ["datetime"],
				details: ["open"],
				div: [],
				dl: [],
				dt: [],
				em: [],
				font: ["color", "size", "face"],
				footer: [],
				h1: [],
				h2: [],
				h3: [],
				h4: [],
				h5: [],
				h6: [],
				header: [],
				hr: [],
				i: [],
				img: ["src", "alt", "title", "width", "height"],
				ins: ["datetime"],
				li: [],
				mark: [],
				nav: [],
				ol: [],
				p: [],
				pre: [],
				s: [],
				section: [],
				small: [],
				span: [],
				sub: [],
				sup: [],
				strong: [],
				table: ["width", "border", "align", "valign"],
				tbody: ["align", "valign"],
				td: ["width", "rowspan", "colspan", "align", "valign"],
				tfoot: ["align", "valign"],
				th: ["width", "rowspan", "colspan", "align", "valign"],
				thead: ["align", "valign"],
				tr: ["rowspan", "align", "valign"],
				tt: [],
				u: [],
				ul: [],
				video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
			}
		}
		var defaultCSSFilter = new FilterCSS;

		function onTag(tag, html, options) {}

		function onIgnoreTag(tag, html, options) {}

		function onTagAttr(tag, name, value) {}

		function onIgnoreTagAttr(tag, name, value) {}

		function escapeHtml(html) {
			return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;")
		}

		function safeAttrValue(tag, name, value, cssFilter) {
			value = friendlyAttrValue(value);
			if(name === "href" || name === "src") {
				value = _.trim(value);
				if(value === "#") return "#";
				if(!(value.substr(0, 7) === "http://" || value.substr(0, 8) === "https://" || value.substr(0, 7) === "mailto:" || value[0] === "#" || value[0] === "/")) {
					return ""
				}
			} else if(name === "background") {
				REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
				if(REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
					return ""
				}
			} else if(name === "style") {
				REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
				if(REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
					return ""
				}
				REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
				if(REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
					REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
					if(REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
						return ""
					}
				}
				if(cssFilter !== false) {
					cssFilter = cssFilter || defaultCSSFilter;
					value = cssFilter.process(value)
				}
			}
			value = escapeAttrValue(value);
			return value
		}
		var REGEXP_LT = /</g;
		var REGEXP_GT = />/g;
		var REGEXP_QUOTE = /"/g;
		var REGEXP_QUOTE_2 = /&quot;/g;
		var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
		var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
		var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
		var REGEXP_DEFAULT_ON_TAG_ATTR_3 = /\/\*|\*\//gm;
		var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi;
		var REGEXP_DEFAULT_ON_TAG_ATTR_5 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:/gi;
		var REGEXP_DEFAULT_ON_TAG_ATTR_6 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:\s*image\//gi;
		var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
		var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;

		function escapeQuote(str) {
			return str.replace(REGEXP_QUOTE, "&quot;")
		}

		function unescapeQuote(str) {
			return str.replace(REGEXP_QUOTE_2, '"')
		}

		function escapeHtmlEntities(str) {
			return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str, code) {
				return code[0] === "x" || code[0] === "X" ? String.fromCharCode(parseInt(code.substr(1), 16)) : String.fromCharCode(parseInt(code, 10))
			})
		}

		function escapeDangerHtml5Entities(str) {
			return str.replace(REGEXP_ATTR_VALUE_COLON, ":").replace(REGEXP_ATTR_VALUE_NEWLINE, " ")
		}

		function clearNonPrintableCharacter(str) {
			var str2 = "";
			for(var i = 0, len = str.length; i < len; i++) {
				str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i)
			}
			return _.trim(str2)
		}

		function friendlyAttrValue(str) {
			str = unescapeQuote(str);
			str = escapeHtmlEntities(str);
			str = escapeDangerHtml5Entities(str);
			str = clearNonPrintableCharacter(str);
			return str
		}

		function escapeAttrValue(str) {
			str = escapeQuote(str);
			str = escapeHtml(str);
			return str
		}

		function onIgnoreTagStripAll() {
			return ""
		}

		function StripTagBody(tags, next) {
			if(typeof next !== "function") {
				next = function() {}
			}
			var isRemoveAllTag = !Array.isArray(tags);

			function isRemoveTag(tag) {
				if(isRemoveAllTag) return true;
				return _.indexOf(tags, tag) !== -1
			}
			var removeList = [];
			var posStart = false;
			return {
				onIgnoreTag: function(tag, html, options) {
					if(isRemoveTag(tag)) {
						if(options.isClosing) {
							var ret = "[/removed]";
							var end = options.position + ret.length;
							removeList.push([posStart !== false ? posStart : options.position, end]);
							posStart = false;
							return ret
						} else {
							if(!posStart) {
								posStart = options.position
							}
							return "[removed]"
						}
					} else {
						return next(tag, html, options)
					}
				},
				remove: function(html) {
					var rethtml = "";
					var lastPos = 0;
					_.forEach(removeList, function(pos) {
						rethtml += html.slice(lastPos, pos[0]);
						lastPos = pos[1]
					});
					rethtml += html.slice(lastPos);
					return rethtml
				}
			}
		}

		function stripCommentTag(html) {
			return html.replace(STRIP_COMMENT_TAG_REGEXP, "")
		}
		var STRIP_COMMENT_TAG_REGEXP = /<!--[\s\S]*?-->/g;

		function stripBlankChar(html) {
			var chars = html.split("");
			chars = chars.filter(function(char) {
				var c = char.charCodeAt(0);
				if(c === 127) return false;
				if(c <= 31) {
					if(c === 10 || c === 13) return true;
					return false
				}
				return true
			});
			return chars.join("")
		}
		exports.whiteList = getDefaultWhiteList();
		exports.getDefaultWhiteList = getDefaultWhiteList;
		exports.onTag = onTag;
		exports.onIgnoreTag = onIgnoreTag;
		exports.onTagAttr = onTagAttr;
		exports.onIgnoreTagAttr = onIgnoreTagAttr;
		exports.safeAttrValue = safeAttrValue;
		exports.escapeHtml = escapeHtml;
		exports.escapeQuote = escapeQuote;
		exports.unescapeQuote = unescapeQuote;
		exports.escapeHtmlEntities = escapeHtmlEntities;
		exports.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
		exports.clearNonPrintableCharacter = clearNonPrintableCharacter;
		exports.friendlyAttrValue = friendlyAttrValue;
		exports.escapeAttrValue = escapeAttrValue;
		exports.onIgnoreTagStripAll = onIgnoreTagStripAll;
		exports.StripTagBody = StripTagBody;
		exports.stripCommentTag = stripCommentTag;
		exports.stripBlankChar = stripBlankChar;
		exports.cssFilter = defaultCSSFilter;
		exports.getDefaultCSSWhiteList = getDefaultCSSWhiteList
	}, {
		"./util": 4,
		cssfilter: 8
	}],
	2: [function(require, module, exports) {
		var DEFAULT = require("./default");
		var parser = require("./parser");
		var FilterXSS = require("./xss");

		function filterXSS(html, options) {
			var xss = new FilterXSS(options);
			return xss.process(html)
		}
		exports = module.exports = filterXSS;
		exports.FilterXSS = FilterXSS;
		for(var i in DEFAULT) exports[i] = DEFAULT[i];
		for(var i in parser) exports[i] = parser[i];
		if(typeof window !== "undefined") {
			window.filterXSS = module.exports
		}
	}, {
		"./default": 1,
		"./parser": 3,
		"./xss": 5
	}],
	3: [function(require, module, exports) {
		var _ = require("./util");

		function getTagName(html) {
			var i = html.indexOf(" ");
			if(i === -1) {
				var tagName = html.slice(1, -1)
			} else {
				var tagName = html.slice(1, i + 1)
			}
			tagName = _.trim(tagName).toLowerCase();
			if(tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
			if(tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
			return tagName
		}

		function isClosing(html) {
			return html.slice(0, 2) === "</"
		}

		function parseTag(html, onTag, escapeHtml) {
			"user strict";
			var rethtml = "";
			var lastPos = 0;
			var tagStart = false;
			var quoteStart = false;
			var currentPos = 0;
			var len = html.length;
			var currentHtml = "";
			var currentTagName = "";
			for(currentPos = 0; currentPos < len; currentPos++) {
				var c = html.charAt(currentPos);
				if(tagStart === false) {
					if(c === "<") {
						tagStart = currentPos;
						continue
					}
				} else {
					if(quoteStart === false) {
						if(c === "<") {
							rethtml += escapeHtml(html.slice(lastPos, currentPos));
							tagStart = currentPos;
							lastPos = currentPos;
							continue
						}
						if(c === ">") {
							rethtml += escapeHtml(html.slice(lastPos, tagStart));
							currentHtml = html.slice(tagStart, currentPos + 1);
							currentTagName = getTagName(currentHtml);
							rethtml += onTag(tagStart, rethtml.length, currentTagName, currentHtml, isClosing(currentHtml));
							lastPos = currentPos + 1;
							tagStart = false;
							continue
						}
						if((c === '"' || c === "'") && html.charAt(currentPos - 1) === "=") {
							quoteStart = c;
							continue
						}
					} else {
						if(c === quoteStart) {
							quoteStart = false;
							continue
						}
					}
				}
			}
			if(lastPos < html.length) {
				rethtml += escapeHtml(html.substr(lastPos))
			}
			return rethtml
		}
		var REGEXP_ATTR_NAME = /[^a-zA-Z0-9_:\.\-]/gim;

		function parseAttr(html, onAttr) {
			"user strict";
			var lastPos = 0;
			var retAttrs = [];
			var tmpName = false;
			var len = html.length;

			function addAttr(name, value) {
				name = _.trim(name);
				name = name.replace(REGEXP_ATTR_NAME, "").toLowerCase();
				if(name.length < 1) return;
				var ret = onAttr(name, value || "");
				if(ret) retAttrs.push(ret)
			}
			for(var i = 0; i < len; i++) {
				var c = html.charAt(i);
				var v, j;
				if(tmpName === false && c === "=") {
					tmpName = html.slice(lastPos, i);
					lastPos = i + 1;
					continue
				}
				if(tmpName !== false) {
					if(i === lastPos && (c === '"' || c === "'") && html.charAt(i - 1) === "=") {
						j = html.indexOf(c, i + 1);
						if(j === -1) {
							break
						} else {
							v = _.trim(html.slice(lastPos + 1, j));
							addAttr(tmpName, v);
							tmpName = false;
							i = j;
							lastPos = i + 1;
							continue
						}
					}
				}
				if(c === " ") {
					if(tmpName === false) {
						j = findNextEqual(html, i);
						if(j === -1) {
							v = _.trim(html.slice(lastPos, i));
							addAttr(v);
							tmpName = false;
							lastPos = i + 1;
							continue
						} else {
							i = j - 1;
							continue
						}
					} else {
						j = findBeforeEqual(html, i - 1);
						if(j === -1) {
							v = _.trim(html.slice(lastPos, i));
							v = stripQuoteWrap(v);
							addAttr(tmpName, v);
							tmpName = false;
							lastPos = i + 1;
							continue
						} else {
							continue
						}
					}
				}
			}
			if(lastPos < html.length) {
				if(tmpName === false) {
					addAttr(html.slice(lastPos))
				} else {
					addAttr(tmpName, stripQuoteWrap(_.trim(html.slice(lastPos))))
				}
			}
			return _.trim(retAttrs.join(" "))
		}

		function findNextEqual(str, i) {
			for(; i < str.length; i++) {
				var c = str[i];
				if(c === " ") continue;
				if(c === "=") return i;
				return -1
			}
		}

		function findBeforeEqual(str, i) {
			for(; i > 0; i--) {
				var c = str[i];
				if(c === " ") continue;
				if(c === "=") return i;
				return -1
			}
		}

		function isQuoteWrapString(text) {
			if(text[0] === '"' && text[text.length - 1] === '"' || text[0] === "'" && text[text.length - 1] === "'") {
				return true
			} else {
				return false
			}
		}

		function stripQuoteWrap(text) {
			if(isQuoteWrapString(text)) {
				return text.substr(1, text.length - 2)
			} else {
				return text
			}
		}
		exports.parseTag = parseTag;
		exports.parseAttr = parseAttr
	}, {
		"./util": 4
	}],
	4: [function(require, module, exports) {
		module.exports = {
			indexOf: function(arr, item) {
				var i, j;
				if(Array.prototype.indexOf) {
					return arr.indexOf(item)
				}
				for(i = 0, j = arr.length; i < j; i++) {
					if(arr[i] === item) {
						return i
					}
				}
				return -1
			},
			forEach: function(arr, fn, scope) {
				var i, j;
				if(Array.prototype.forEach) {
					return arr.forEach(fn, scope)
				}
				for(i = 0, j = arr.length; i < j; i++) {
					fn.call(scope, arr[i], i, arr)
				}
			},
			trim: function(str) {
				if(String.prototype.trim) {
					return str.trim()
				}
				return str.replace(/(^\s*)|(\s*$)/g, "")
			}
		}
	}, {}],
	5: [function(require, module, exports) {
		var FilterCSS = require("cssfilter").FilterCSS;
		var DEFAULT = require("./default");
		var parser = require("./parser");
		var parseTag = parser.parseTag;
		var parseAttr = parser.parseAttr;
		var _ = require("./util");

		function isNull(obj) {
			return obj === undefined || obj === null
		}

		function getAttrs(html) {
			var i = html.indexOf(" ");
			if(i === -1) {
				return {
					html: "",
					closing: html[html.length - 2] === "/"
				}
			}
			html = _.trim(html.slice(i + 1, -1));
			var isClosing = html[html.length - 1] === "/";
			if(isClosing) html = _.trim(html.slice(0, -1));
			return {
				html: html,
				closing: isClosing
			}
		}

		function shallowCopyObject(obj) {
			var ret = {};
			for(var i in obj) {
				ret[i] = obj[i]
			}
			return ret
		}

		function FilterXSS(options) {
			options = shallowCopyObject(options || {});
			if(options.stripIgnoreTag) {
				if(options.onIgnoreTag) {
					console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time')
				}
				options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll
			}
			options.whiteList = options.whiteList || DEFAULT.whiteList;
			options.onTag = options.onTag || DEFAULT.onTag;
			options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
			options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
			options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
			options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
			options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
			this.options = options;
			if(options.css === false) {
				this.cssFilter = false
			} else {
				options.css = options.css || {};
				this.cssFilter = new FilterCSS(options.css)
			}
		}
		FilterXSS.prototype.process = function(html) {
			html = html || "";
			html = html.toString();
			if(!html) return "";
			var me = this;
			var options = me.options;
			var whiteList = options.whiteList;
			var onTag = options.onTag;
			var onIgnoreTag = options.onIgnoreTag;
			var onTagAttr = options.onTagAttr;
			var onIgnoreTagAttr = options.onIgnoreTagAttr;
			var safeAttrValue = options.safeAttrValue;
			var escapeHtml = options.escapeHtml;
			var cssFilter = me.cssFilter;
			if(options.stripBlankChar) {
				html = DEFAULT.stripBlankChar(html)
			}
			if(!options.allowCommentTag) {
				html = DEFAULT.stripCommentTag(html)
			}
			var stripIgnoreTagBody = false;
			if(options.stripIgnoreTagBody) {
				var stripIgnoreTagBody = DEFAULT.StripTagBody(options.stripIgnoreTagBody, onIgnoreTag);
				onIgnoreTag = stripIgnoreTagBody.onIgnoreTag
			}
			var retHtml = parseTag(html, function(sourcePosition, position, tag, html, isClosing) {
				var info = {
					sourcePosition: sourcePosition,
					position: position,
					isClosing: isClosing,
					isWhite: tag in whiteList
				};
				var ret = onTag(tag, html, info);
				if(!isNull(ret)) return ret;
				if(info.isWhite) {
					if(info.isClosing) {
						return "</" + tag + ">"
					}
					var attrs = getAttrs(html);
					var whiteAttrList = whiteList[tag];
					var attrsHtml = parseAttr(attrs.html, function(name, value) {
						var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
						var ret = onTagAttr(tag, name, value, isWhiteAttr);
						if(!isNull(ret)) return ret;
						if(isWhiteAttr) {
							value = safeAttrValue(tag, name, value, cssFilter);
							if(value) {
								return name + '="' + value + '"'
							} else {
								return name
							}
						} else {
							var ret = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
							if(!isNull(ret)) return ret;
							return
						}
					});
					var html = "<" + tag;
					if(attrsHtml) html += " " + attrsHtml;
					if(attrs.closing) html += " /";
					html += ">";
					return html
				} else {
					var ret = onIgnoreTag(tag, html, info);
					if(!isNull(ret)) return ret;
					return escapeHtml(html)
				}
			}, escapeHtml);
			if(stripIgnoreTagBody) {
				retHtml = stripIgnoreTagBody.remove(retHtml)
			}
			return retHtml
		};
		module.exports = FilterXSS
	}, {
		"./default": 1,
		"./parser": 3,
		"./util": 4,
		cssfilter: 8
	}],
	6: [function(require, module, exports) {
		var DEFAULT = require("./default");
		var parseStyle = require("./parser");
		var _ = require("./util");

		function isNull(obj) {
			return obj === undefined || obj === null
		}

		function shallowCopyObject(obj) {
			var ret = {};
			for(var i in obj) {
				ret[i] = obj[i]
			}
			return ret
		}

		function FilterCSS(options) {
			options = shallowCopyObject(options || {});
			options.whiteList = options.whiteList || DEFAULT.whiteList;
			options.onAttr = options.onAttr || DEFAULT.onAttr;
			options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT.onIgnoreAttr;
			this.options = options
		}
		FilterCSS.prototype.process = function(css) {
			css = css || "";
			css = css.toString();
			if(!css) return "";
			var me = this;
			var options = me.options;
			var whiteList = options.whiteList;
			var onAttr = options.onAttr;
			var onIgnoreAttr = options.onIgnoreAttr;
			var retCSS = parseStyle(css, function(sourcePosition, position, name, value, source) {
				var check = whiteList[name];
				var isWhite = false;
				if(check === true) isWhite = check;
				else if(typeof check === "function") isWhite = check(value);
				else if(check instanceof RegExp) isWhite = check.test(value);
				if(isWhite !== true) isWhite = false;
				var opts = {
					position: position,
					sourcePosition: sourcePosition,
					source: source,
					isWhite: isWhite
				};
				if(isWhite) {
					var ret = onAttr(name, value, opts);
					if(isNull(ret)) {
						return name + ":" + value
					} else {
						return ret
					}
				} else {
					var ret = onIgnoreAttr(name, value, opts);
					if(!isNull(ret)) {
						return ret
					}
				}
			});
			return retCSS
		};
		module.exports = FilterCSS
	}, {
		"./default": 7,
		"./parser": 9,
		"./util": 10
	}],
	7: [function(require, module, exports) {
		function getDefaultWhiteList() {
			var whiteList = {};
			whiteList["align-content"] = false;
			whiteList["align-items"] = false;
			whiteList["align-self"] = false;
			whiteList["alignment-adjust"] = false;
			whiteList["alignment-baseline"] = false;
			whiteList["all"] = false;
			whiteList["anchor-point"] = false;
			whiteList["animation"] = false;
			whiteList["animation-delay"] = false;
			whiteList["animation-direction"] = false;
			whiteList["animation-duration"] = false;
			whiteList["animation-fill-mode"] = false;
			whiteList["animation-iteration-count"] = false;
			whiteList["animation-name"] = false;
			whiteList["animation-play-state"] = false;
			whiteList["animation-timing-function"] = false;
			whiteList["azimuth"] = false;
			whiteList["backface-visibility"] = false;
			whiteList["background"] = true;
			whiteList["background-attachment"] = true;
			whiteList["background-clip"] = true;
			whiteList["background-color"] = true;
			whiteList["background-image"] = true;
			whiteList["background-origin"] = true;
			whiteList["background-position"] = true;
			whiteList["background-repeat"] = true;
			whiteList["background-size"] = true;
			whiteList["baseline-shift"] = false;
			whiteList["binding"] = false;
			whiteList["bleed"] = false;
			whiteList["bookmark-label"] = false;
			whiteList["bookmark-level"] = false;
			whiteList["bookmark-state"] = false;
			whiteList["border"] = true;
			whiteList["border-bottom"] = true;
			whiteList["border-bottom-color"] = true;
			whiteList["border-bottom-left-radius"] = true;
			whiteList["border-bottom-right-radius"] = true;
			whiteList["border-bottom-style"] = true;
			whiteList["border-bottom-width"] = true;
			whiteList["border-collapse"] = true;
			whiteList["border-color"] = true;
			whiteList["border-image"] = true;
			whiteList["border-image-outset"] = true;
			whiteList["border-image-repeat"] = true;
			whiteList["border-image-slice"] = true;
			whiteList["border-image-source"] = true;
			whiteList["border-image-width"] = true;
			whiteList["border-left"] = true;
			whiteList["border-left-color"] = true;
			whiteList["border-left-style"] = true;
			whiteList["border-left-width"] = true;
			whiteList["border-radius"] = true;
			whiteList["border-right"] = true;
			whiteList["border-right-color"] = true;
			whiteList["border-right-style"] = true;
			whiteList["border-right-width"] = true;
			whiteList["border-spacing"] = true;
			whiteList["border-style"] = true;
			whiteList["border-top"] = true;
			whiteList["border-top-color"] = true;
			whiteList["border-top-left-radius"] = true;
			whiteList["border-top-right-radius"] = true;
			whiteList["border-top-style"] = true;
			whiteList["border-top-width"] = true;
			whiteList["border-width"] = true;
			whiteList["bottom"] = false;
			whiteList["box-decoration-break"] = true;
			whiteList["box-shadow"] = true;
			whiteList["box-sizing"] = true;
			whiteList["box-snap"] = true;
			whiteList["box-suppress"] = true;
			whiteList["break-after"] = true;
			whiteList["break-before"] = true;
			whiteList["break-inside"] = true;
			whiteList["caption-side"] = false;
			whiteList["chains"] = false;
			whiteList["clear"] = true;
			whiteList["clip"] = false;
			whiteList["clip-path"] = false;
			whiteList["clip-rule"] = false;
			whiteList["color"] = true;
			whiteList["color-interpolation-filters"] = true;
			whiteList["column-count"] = false;
			whiteList["column-fill"] = false;
			whiteList["column-gap"] = false;
			whiteList["column-rule"] = false;
			whiteList["column-rule-color"] = false;
			whiteList["column-rule-style"] = false;
			whiteList["column-rule-width"] = false;
			whiteList["column-span"] = false;
			whiteList["column-width"] = false;
			whiteList["columns"] = false;
			whiteList["contain"] = false;
			whiteList["content"] = false;
			whiteList["counter-increment"] = false;
			whiteList["counter-reset"] = false;
			whiteList["counter-set"] = false;
			whiteList["crop"] = false;
			whiteList["cue"] = false;
			whiteList["cue-after"] = false;
			whiteList["cue-before"] = false;
			whiteList["cursor"] = false;
			whiteList["direction"] = false;
			whiteList["display"] = true;
			whiteList["display-inside"] = true;
			whiteList["display-list"] = true;
			whiteList["display-outside"] = true;
			whiteList["dominant-baseline"] = false;
			whiteList["elevation"] = false;
			whiteList["empty-cells"] = false;
			whiteList["filter"] = false;
			whiteList["flex"] = false;
			whiteList["flex-basis"] = false;
			whiteList["flex-direction"] = false;
			whiteList["flex-flow"] = false;
			whiteList["flex-grow"] = false;
			whiteList["flex-shrink"] = false;
			whiteList["flex-wrap"] = false;
			whiteList["float"] = false;
			whiteList["float-offset"] = false;
			whiteList["flood-color"] = false;
			whiteList["flood-opacity"] = false;
			whiteList["flow-from"] = false;
			whiteList["flow-into"] = false;
			whiteList["font"] = true;
			whiteList["font-family"] = true;
			whiteList["font-feature-settings"] = true;
			whiteList["font-kerning"] = true;
			whiteList["font-language-override"] = true;
			whiteList["font-size"] = true;
			whiteList["font-size-adjust"] = true;
			whiteList["font-stretch"] = true;
			whiteList["font-style"] = true;
			whiteList["font-synthesis"] = true;
			whiteList["font-variant"] = true;
			whiteList["font-variant-alternates"] = true;
			whiteList["font-variant-caps"] = true;
			whiteList["font-variant-east-asian"] = true;
			whiteList["font-variant-ligatures"] = true;
			whiteList["font-variant-numeric"] = true;
			whiteList["font-variant-position"] = true;
			whiteList["font-weight"] = true;
			whiteList["grid"] = false;
			whiteList["grid-area"] = false;
			whiteList["grid-auto-columns"] = false;
			whiteList["grid-auto-flow"] = false;
			whiteList["grid-auto-rows"] = false;
			whiteList["grid-column"] = false;
			whiteList["grid-column-end"] = false;
			whiteList["grid-column-start"] = false;
			whiteList["grid-row"] = false;
			whiteList["grid-row-end"] = false;
			whiteList["grid-row-start"] = false;
			whiteList["grid-template"] = false;
			whiteList["grid-template-areas"] = false;
			whiteList["grid-template-columns"] = false;
			whiteList["grid-template-rows"] = false;
			whiteList["hanging-punctuation"] = false;
			whiteList["height"] = true;
			whiteList["hyphens"] = false;
			whiteList["icon"] = false;
			whiteList["image-orientation"] = false;
			whiteList["image-resolution"] = false;
			whiteList["ime-mode"] = false;
			whiteList["initial-letters"] = false;
			whiteList["inline-box-align"] = false;
			whiteList["justify-content"] = false;
			whiteList["justify-items"] = false;
			whiteList["justify-self"] = false;
			whiteList["left"] = false;
			whiteList["letter-spacing"] = true;
			whiteList["lighting-color"] = true;
			whiteList["line-box-contain"] = false;
			whiteList["line-break"] = false;
			whiteList["line-grid"] = false;
			whiteList["line-height"] = false;
			whiteList["line-snap"] = false;
			whiteList["line-stacking"] = false;
			whiteList["line-stacking-ruby"] = false;
			whiteList["line-stacking-shift"] = false;
			whiteList["line-stacking-strategy"] = false;
			whiteList["list-style"] = true;
			whiteList["list-style-image"] = true;
			whiteList["list-style-position"] = true;
			whiteList["list-style-type"] = true;
			whiteList["margin"] = true;
			whiteList["margin-bottom"] = true;
			whiteList["margin-left"] = true;
			whiteList["margin-right"] = true;
			whiteList["margin-top"] = true;
			whiteList["marker-offset"] = false;
			whiteList["marker-side"] = false;
			whiteList["marks"] = false;
			whiteList["mask"] = false;
			whiteList["mask-box"] = false;
			whiteList["mask-box-outset"] = false;
			whiteList["mask-box-repeat"] = false;
			whiteList["mask-box-slice"] = false;
			whiteList["mask-box-source"] = false;
			whiteList["mask-box-width"] = false;
			whiteList["mask-clip"] = false;
			whiteList["mask-image"] = false;
			whiteList["mask-origin"] = false;
			whiteList["mask-position"] = false;
			whiteList["mask-repeat"] = false;
			whiteList["mask-size"] = false;
			whiteList["mask-source-type"] = false;
			whiteList["mask-type"] = false;
			whiteList["max-height"] = true;
			whiteList["max-lines"] = false;
			whiteList["max-width"] = true;
			whiteList["min-height"] = true;
			whiteList["min-width"] = true;
			whiteList["move-to"] = false;
			whiteList["nav-down"] = false;
			whiteList["nav-index"] = false;
			whiteList["nav-left"] = false;
			whiteList["nav-right"] = false;
			whiteList["nav-up"] = false;
			whiteList["object-fit"] = false;
			whiteList["object-position"] = false;
			whiteList["opacity"] = false;
			whiteList["order"] = false;
			whiteList["orphans"] = false;
			whiteList["outline"] = false;
			whiteList["outline-color"] = false;
			whiteList["outline-offset"] = false;
			whiteList["outline-style"] = false;
			whiteList["outline-width"] = false;
			whiteList["overflow"] = false;
			whiteList["overflow-wrap"] = false;
			whiteList["overflow-x"] = false;
			whiteList["overflow-y"] = false;
			whiteList["padding"] = true;
			whiteList["padding-bottom"] = true;
			whiteList["padding-left"] = true;
			whiteList["padding-right"] = true;
			whiteList["padding-top"] = true;
			whiteList["page"] = false;
			whiteList["page-break-after"] = false;
			whiteList["page-break-before"] = false;
			whiteList["page-break-inside"] = false;
			whiteList["page-policy"] = false;
			whiteList["pause"] = false;
			whiteList["pause-after"] = false;
			whiteList["pause-before"] = false;
			whiteList["perspective"] = false;
			whiteList["perspective-origin"] = false;
			whiteList["pitch"] = false;
			whiteList["pitch-range"] = false;
			whiteList["play-during"] = false;
			whiteList["position"] = false;
			whiteList["presentation-level"] = false;
			whiteList["quotes"] = false;
			whiteList["region-fragment"] = false;
			whiteList["resize"] = false;
			whiteList["rest"] = false;
			whiteList["rest-after"] = false;
			whiteList["rest-before"] = false;
			whiteList["richness"] = false;
			whiteList["right"] = false;
			whiteList["rotation"] = false;
			whiteList["rotation-point"] = false;
			whiteList["ruby-align"] = false;
			whiteList["ruby-merge"] = false;
			whiteList["ruby-position"] = false;
			whiteList["shape-image-threshold"] = false;
			whiteList["shape-outside"] = false;
			whiteList["shape-margin"] = false;
			whiteList["size"] = false;
			whiteList["speak"] = false;
			whiteList["speak-as"] = false;
			whiteList["speak-header"] = false;
			whiteList["speak-numeral"] = false;
			whiteList["speak-punctuation"] = false;
			whiteList["speech-rate"] = false;
			whiteList["stress"] = false;
			whiteList["string-set"] = false;
			whiteList["tab-size"] = false;
			whiteList["table-layout"] = false;
			whiteList["text-align"] = true;
			whiteList["text-align-last"] = true;
			whiteList["text-combine-upright"] = true;
			whiteList["text-decoration"] = true;
			whiteList["text-decoration-color"] = true;
			whiteList["text-decoration-line"] = true;
			whiteList["text-decoration-skip"] = true;
			whiteList["text-decoration-style"] = true;
			whiteList["text-emphasis"] = true;
			whiteList["text-emphasis-color"] = true;
			whiteList["text-emphasis-position"] = true;
			whiteList["text-emphasis-style"] = true;
			whiteList["text-height"] = true;
			whiteList["text-indent"] = true;
			whiteList["text-justify"] = true;
			whiteList["text-orientation"] = true;
			whiteList["text-overflow"] = true;
			whiteList["text-shadow"] = true;
			whiteList["text-space-collapse"] = true;
			whiteList["text-transform"] = true;
			whiteList["text-underline-position"] = true;
			whiteList["text-wrap"] = true;
			whiteList["top"] = false;
			whiteList["transform"] = false;
			whiteList["transform-origin"] = false;
			whiteList["transform-style"] = false;
			whiteList["transition"] = false;
			whiteList["transition-delay"] = false;
			whiteList["transition-duration"] = false;
			whiteList["transition-property"] = false;
			whiteList["transition-timing-function"] = false;
			whiteList["unicode-bidi"] = false;
			whiteList["vertical-align"] = false;
			whiteList["visibility"] = false;
			whiteList["voice-balance"] = false;
			whiteList["voice-duration"] = false;
			whiteList["voice-family"] = false;
			whiteList["voice-pitch"] = false;
			whiteList["voice-range"] = false;
			whiteList["voice-rate"] = false;
			whiteList["voice-stress"] = false;
			whiteList["voice-volume"] = false;
			whiteList["volume"] = false;
			whiteList["white-space"] = false;
			whiteList["widows"] = false;
			whiteList["width"] = true;
			whiteList["will-change"] = false;
			whiteList["word-break"] = true;
			whiteList["word-spacing"] = true;
			whiteList["word-wrap"] = true;
			whiteList["wrap-flow"] = false;
			whiteList["wrap-through"] = false;
			whiteList["writing-mode"] = false;
			whiteList["z-index"] = false;
			return whiteList
		}

		function onAttr(name, value, options) {}

		function onIgnoreAttr(name, value, options) {}
		exports.whiteList = getDefaultWhiteList();
		exports.getDefaultWhiteList = getDefaultWhiteList;
		exports.onAttr = onAttr;
		exports.onIgnoreAttr = onIgnoreAttr
	}, {}],
	8: [function(require, module, exports) {
		var DEFAULT = require("./default");
		var FilterCSS = require("./css");

		function filterCSS(html, options) {
			var xss = new FilterCSS(options);
			return xss.process(html)
		}
		exports = module.exports = filterCSS;
		exports.FilterCSS = FilterCSS;
		for(var i in DEFAULT) exports[i] = DEFAULT[i];
		if(typeof window !== "undefined") {
			window.filterCSS = module.exports
		}
	}, {
		"./css": 6,
		"./default": 7
	}],
	9: [function(require, module, exports) {
		var _ = require("./util");

		function parseStyle(css, onAttr) {
			css = _.trimRight(css);
			if(css[css.length - 1] !== ";") css += ";";
			var cssLength = css.length;
			var isParenthesisOpen = false;
			var lastPos = 0;
			var i = 0;
			var retCSS = "";

			function addNewAttr() {
				if(!isParenthesisOpen) {
					var source = _.trim(css.slice(lastPos, i));
					var j = source.indexOf(":");
					if(j !== -1) {
						var name = _.trim(source.slice(0, j));
						var value = _.trim(source.slice(j + 1));
						if(name) {
							var ret = onAttr(lastPos, retCSS.length, name, value, source);
							if(ret) retCSS += ret + "; "
						}
					}
				}
				lastPos = i + 1
			}
			for(; i < cssLength; i++) {
				var c = css[i];
				if(c === "/" && css[i + 1] === "*") {
					var j = css.indexOf("*/", i + 2);
					if(j === -1) break;
					i = j + 1;
					lastPos = i + 1;
					isParenthesisOpen = false
				} else if(c === "(") {
					isParenthesisOpen = true
				} else if(c === ")") {
					isParenthesisOpen = false
				} else if(c === ";") {
					if(isParenthesisOpen) {} else {
						addNewAttr()
					}
				} else if(c === "\n") {
					addNewAttr()
				}
			}
			return _.trim(retCSS)
		}
		module.exports = parseStyle
	}, {
		"./util": 10
	}],
	10: [function(require, module, exports) {
		module.exports = {
			indexOf: function(arr, item) {
				var i, j;
				if(Array.prototype.indexOf) {
					return arr.indexOf(item)
				}
				for(i = 0, j = arr.length; i < j; i++) {
					if(arr[i] === item) {
						return i
					}
				}
				return -1
			},
			forEach: function(arr, fn, scope) {
				var i, j;
				if(Array.prototype.forEach) {
					return arr.forEach(fn, scope)
				}
				for(i = 0, j = arr.length; i < j; i++) {
					fn.call(scope, arr[i], i, arr)
				}
			},
			trim: function(str) {
				if(String.prototype.trim) {
					return str.trim()
				}
				return str.replace(/(^\s*)|(\s*$)/g, "")
			},
			trimRight: function(str) {
				if(String.prototype.trimRight) {
					return str.trimRight()
				}
				return str.replace(/(\s*$)/g, "")
			}
		}
	}, {}]
}, {}, [2]);