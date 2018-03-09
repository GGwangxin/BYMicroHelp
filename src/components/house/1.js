/**
 * Created by Administrator on 2018/1/25.
 * qq975769880
 * 也许不能在一起，但我永远不会忘记你   2018-1-24
 */
var SiteTracker = function(b, d, c, a) {
  if (b != undefined && b != null) {
    this.site = b
  }
  if (d != undefined && d != null) {
    this.page = d
  }
  if (c != undefined && c != null) {
    this.referer = c
  }
  if (a != undefined && a != null) {
    this.uid = a
  }
};
SiteTracker.prototype.getCookie = function(a) {
  if (!a || !this.hasItem(a)) {
    return null
  }
  return decodeURIComponent(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + encodeURIComponent(a).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"))
};
SiteTracker.prototype.hasItem = function(a) {
  return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(a).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie)
};
SiteTracker.prototype.track = function(d) {
  this.buildParams();
  var g = "",
    c, f = [],
    e, b = this;
  if (typeof(d) == "undefined" || typeof(d.target_url) == "undefined") {
    g = location.protocol + "//s.anjuke.com/st?__site=" + this.params.site + "&"
  } else {
    g = d.target_url + "?"
  }
  for (var a in b.params) {
    if (Object.prototype.hasOwnProperty.call(b.params, a)) {
      f.push(a + "=" + encodeURIComponent(this.params[a]))
    }
  }
  g += f.join("&");
  c = document.createElement("script");
  c.src = g;
  c.async = true;
  e = (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]);
  c.onload = function() {
    e.removeChild(c)
  };
  e.appendChild(c)
};
SiteTracker.prototype.buildParams = function() {
  var a = document.location.href;
  var b = this.getCookie(this.nGuid || "aQQ_ajkguid");
  var e = this.getCookie(this.nCtid || "ctid");
  var g = this.getCookie(this.nLiu || "lui");
  var d = this.getCookie(this.nSessid || "sessid");
  var c = this.getCookie(this.nUid || "ajk_member_id");
  if (this.uid != undefined && this.uid != null) {
    c = this.uid
  }
  if (c == undefined || c == null || c == "") {
    c = 0
  }
  var f = "";
  if (this.method != undefined && this.method != null) {
    f = this.method
  }
  this.params = new Object();
  this.params.p = this.page;
  this.params.h = a;
  this.params.r = this.referer;
  this.params.site = this.site;
  this.params.guid = b;
  this.params.ssid = d;
  this.params.uid = c;
  this.params.t = new Date().getTime();
  this.params.ctid = e;
  this.params.luid = g;
  this.params.m = f;
  this.params.pid = this.pid || "";
  if (this.screen != undefined) {
    this.params.sc = JSON.stringify(this.screen)
  }
  if (this.cst != undefined && /[0-9]{13}/.test(this.cst)) {
    this.params.lt = this.params.t - parseInt(this.cst)
  }
  if (this.pageName != undefined) {
    this.params.pn = this.pageName
  }
  if (this.customParam != undefined) {
    this.params.cp = this.customParam
  }
};
SiteTracker.prototype.setSite = function(a) {
  this.site = a
};
SiteTracker.prototype.setPage = function(a) {
  this.page = a
};
SiteTracker.prototype.setPageName = function(a) {
  this.pageName = a
};
SiteTracker.prototype.setCookieNames = function(a) {
  this.cookNames = a
};
SiteTracker.prototype.setReferer = function(a) {
  this.referer = a
};
SiteTracker.prototype.setUid = function(a) {
  this.uid = a
};
SiteTracker.prototype.setMethod = function(a) {
  this.method = a
};
SiteTracker.prototype.setNGuid = function(a) {
  this.nGuid = a
};
SiteTracker.prototype.setNCtid = function(a) {
  this.nCtid = a
};
SiteTracker.prototype.setNLiu = function(a) {
  this.nLiu = a
};
SiteTracker.prototype.setNSessid = function(a) {
  this.nSessid = a
};
SiteTracker.prototype.setNUid = function(a) {
  this.nUid = a
};
SiteTracker.prototype.setCst = function(a) {
  this.cst = a
};
SiteTracker.prototype.setScreen = function(a) {
  this.screen = a
};
SiteTracker.prototype.setCustomParam = function(a) {
  this.customParam = a
};
SiteTracker.prototype.getParams = function() {
  return this.params
};
SiteTracker.prototype.setPid = function(a) {
  this.pid = a
};
SiteTracker.prototype.getPid = function() {
  return this.pid
};
(function(g, m, d, l) {
  var k = g.APF || {},
    n = location.protocol,
    j = function() {
      return false
    };
  k.Config = {
    devLogURL: n + "//soj.dev.anjuke.com/ts.html?",
    logURL: n + "//m.anjuke.com/ts.html?",
    devSojURL: n + "//soj.front.anjuke.test/stb",
    isDev: /dev|test/.test(m.domain),
    blackList: ["Player", "baiduboxapphomepagetag", "onTouchMoveInPage", "diableNightMode", "v.src", "doPreloadClicked_BD"]
  };

  function e(u) {
    var r, s, t, q = k.Config.blackList;
    if (typeof u !== "string") {
      return true
    }
    for (r = 0, t = q.length; r < t; r++) {
      s = new RegExp(q[r], "g");
      if (s.test(u)) {
        return true
      }
    }
  }
  function a(q) {
    if (!q) {
      return j()
    }
    j = q
  }
  function c(w) {
    var r = "tp=error&site=kfstouch&msg=",
      t, s, q = [],
      u, v;
    if (typeof w === "string") {
      v = w
    }
    if (typeof w === "object") {
      for (t in w) {
        if (w.hasOwnProperty(t)) {
          q.push(t + ":" + encodeURIComponent(JSON.stringify(w[t])))
        }
      }
      v = q.join(",")
    }
    if (e(v)) {
      return false
    }
    u = new Image();
    if (k.Config.isDev) {
      s = k.Config.devLogURL + r + v
    } else {
      s = k.Config.logURL + r + v
    }
    u.src = s;
    return true
  }
  var p = g.onerror;
  g.onerror = function(w, u, s, t, v) {
    var q = "",
      r = "";
    r = "20180124_02";
    if (v && v.stack) {
      q = v.stack
    }
    c({
      message: w,
      url: u,
      line: s,
      col: t,
      stack: q,
      version: r,
      pageName: APF.info.pageName,
      pageUrl: location.href,
      UA: navigator.userAgent
    });
    if (d.isFunction(p)) {
      p.apply(g, Array.prototype.slice.call(arguments))
    }
  };
  if (!d.isFunction(g.getShareContents)) {
    g.getShareContents = function() {
      return ""
    }
  }
  if (!d.isFunction(g.getCollectContents)) {
    g.getCollectContents = function() {
      return ""
    }
  }
  function h(q) {
    q.preventDefault()
  }
  function o() {
    d(function() {
      try {
        if (window.top !== window.self) {
          return false
        }
        if (!(/is_mock_visited=1/.test(location.href))) {
          return false
        }
        var q = location.href.replace(/.from\=.*$/, "");
        history.pushState({}, "", q);
        history.back()
      } catch (r) {}
    })
  }
  function b(q) {
    return ("00" + q).match(/\d{2}$/)[0]
  }
  var f = function() {
    var q = {};
    q.w = (g.screen.width).toString();
    q.h = (g.screen.height).toString();
    q.r = (g.devicePixelRatio >= 2 ? 1 : 0).toString();
    f = function() {
      return q
    };
    return q
  };
  k.Namespace = {
    register: function(t) {
      var s = t.split("."),
        q = g,
        u, r;
      for (r = 0, u = s.length; r < u; r++) {
        if (typeof q[s[r]] == "undefined") {
          q[s[r]] = {}
        }
        q = q[s[r]]
      }
      return q
    }
  };
  k.Utils = {
    setCookie: function(s, u, q, x, t, w) {
      var r = new Date();
      r.setTime(r.getTime());
      if (q) {
        q = q * 1000 * 60 * 60 * 24
      }
      var v = new Date(r.getTime() + (q));
      m.cookie = s + "=" + escape(u) + ((q) ? ";expires=" + v.toGMTString() : "") + ((x) ? ";path=" + x : "") + ((t) ? ";domain=" + t : "") + ((w) ? ";secure" : "")
    },
    getCookie: function(q) {
      var w = m.cookie.split(";"),
        s = "",
        u = "",
        v = "",
        r, t = false;
      for (i = 0, r = w.length; i < r; i++) {
        s = w[i].split("=");
        u = s[0].replace(/^\s+|\s+$/g, "");
        if (u == q) {
          t = true;
          if (s.length > 1) {
            v = decodeURIComponent(s[1].replace(/^\s+|\s+$/g, ""))
          }
          return v;
          break
        }
        s = null;
        u = ""
      }
      if (!t) {
        return null
      }
    },
    deleteCookie: function(q, s, r) {
      if (this.getCookie(q)) {
        m.cookie = q + "=" + ((s) ? ";path=" + s : "") + ((r) ? ";domain=" + r : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT"
      }
    },
    touchClick: function() {
      var q = true;
      d(m).on("touchmove", function() {
        if (q) {
          m.addEventListener("click", h, true);
          q = false
        }
      });
      d(m).on("touchend", function() {
        m.removeEventListener("click", h, true);
        q = true
      })
    },
    checkPhone: function(r) {
      var q = /^1[3|4|5|7|8][0-9]\d{8}$/;
      if (q.test(r)) {
        return true
      }
      return false
    },
    sendSoj: function(v, s, t) {
      var q = t || "m_anjuke",
        u = new SiteTracker(),
        r;
      if (s) {
        u.setCustomParam(s)
      }
      if (k.Config.isDev) {
        r = {
          target_url: k.Config.devSojURL
        }
      }
      u.setPage(v);
      u.setPageName(v);
      u.setSite(q);
      u.setScreen(f());
      u.setReferer(m.referrer);
      u.track(r)
    },
    getGuid: function(x) {
      x = x || "T";
      var r = new Date(),
        v = r.getMonth() + 1,
        u = r.getDate(),
        q = r.getHours(),
        s = r.getMinutes(),
        w = r.getTime();
      var t = ("xxxxxxxx-yxxx-yxxx-yxxx-" + x + "xxx").replace(/[xy]/g, function(z) {
        var y = (w + Math.random() * 16) % 16 | 0;
        w = Math.floor(w / 3);
        return (z == "x" ? y : (y & 7 | 8)).toString(16)
      });
      return (t + b(v) + b(u) + b(q) + b(s)).toUpperCase()
    },
    log: function(q) {
      return c(q)
    },
    getCookieGuid: function() {
      return this.getCookie("aQQ_ajkguid")
    },
    replaceImg: function(A, y, q) {
      y = y ? y : "data-src";
      q = q === false ? false : true;
      var E = A && A.getAttribute(y);
      if (E != "" && E != null) {
        var D = E.split("/").pop().match(/\d+x\d+/g);
        if (D) {
          var z = parseInt(A.clientWidth),
            t = parseInt(A.clientHeight),
            x = 0,
            C = "";
          if (window.devicePixelRatio && window.devicePixelRatio != 1) {
            z = parseInt(z * window.devicePixelRatio);
            t = parseInt(t * window.devicePixelRatio)
          }
          if (!q) {
            if (z > 220 || t > 220) {
              var B = z / 220,
                r = t / 220,
                x = B > r ? B : r;
              x = Math.ceil(x);
              z = Math.floor(z / x);
              t = Math.floor(t / x)
            }
            if (x !== 0) {
              E = E.replace(/(\.\w+)$/g, "@" + x + "x$1")
            }
          }
          size = z + "x" + t;
          if (z && t) {
            E = E.replace(D, z + "x" + t)
          }
        }
        var u = new Image();
        u.src = E;
        u.onerror = function(s) {
          A.setAttribute(y, "");
          return false
        };
        u.onload = function() {
          A.setAttribute("src", E);
          A.setAttribute(y, "")
        }
      }
    },
    addLinkSoj: function(r, q, s) {
      d("body").on("click", r, function(x) {
        x.preventDefault();
        x.stopPropagation();
        var v = d(this).data(q || "soj") || d(this).attr(q || "soj") || "",
          w = d.trim(String(v)),
          t = d.trim(d(this).attr("href")),
          u = s || "from";
        if (!t) {
          return
        }
        if (t.toLowerCase().indexOf("javascript") === 0) {
          return
        }
        if (!w) {
          location.href = t
        }
        if (t.indexOf("?") !== -1) {
          location.href = t + "&" + u + "=" + w
        } else {
          location.href = t + "?" + u + "=" + w
        }
      })
    },
    LocalStorageHelper: function(s, r, u) {
      try {
        if (s == "setItem") {
          localStorage[s](r, u);
          return true
        } else {
          var q = localStorage[s](r);
          return q
        }
      } catch (t) {
        return false
      }
    }
  };
  o();
  APF.Utils.addLinkSoj("a.soj");
  g.APF = k;
  g.T = k.Utils;
  g.checkAjkAppUseGoBack = a
})(window, document, Zepto, window.J);
APF.Namespace.register("APF.Utils");
(function(b, j, h, e, g) {
  var d = function() {
    var k = {};
    k.w = (e.screen.width).toString();
    k.h = (e.screen.height).toString();
    k.r = (e.devicePixelRatio >= 2 ? 1 : 0).toString();
    d = function() {
      return k
    };
    return k
  };

  function c(q, m, n) {
    var k = n || "m_anjuke",
      p = new SiteTracker(),
      l;
    if (m) {
      p.setCustomParam(m)
    }
    if (APF.Config && APF.Config.isDev) {
      l = {
        target_url: APF.Config.devSojURL
      }
    }
    if (q === "Daogou_list") {
      p.setPid("123456")
    }
    p.setPage(q);
    p.setPageName(q);
    p.setSite(k);
    p.setScreen(d());
    p.setReferer(h.referrer);
    p.track(l);
    if (!/npv/.test(k)) {
      var o = p.getParams();
      delete o.cp;
      delete o.sc;
      window._trackURL = JSON.stringify(o)
    }
  }
  function a() {
    if (APF && APF.info && APF.info.clientInfo) {
      return APF.info.clientInfo || {}
    }
    return {}
  }
  function f(m) {
    var k = a();
    try {
      m = JSON.parse(m)
    } catch (l) {}
    if ((typeof m).toLowerCase() == "object" && m !== null && !(m instanceof Array)) {
      k = b.extend(true, m, k)
    } else {
      k.oldcp = m || ""
    }
    return JSON.stringify(k)
  }
  j.trackEvent = function(m, k, l) {
    if (g && g.logger && g.logger.trackEvent && APF.info.useTrackV2 === true) {
      g.logger.trackEvent({
        type: l || 2,
        action: m,
        customparam: k || "",
        pn: m
      })
    } else {
      c(m, f(k), l === 1 ? "" : "m_anjuke-npv")
    }
  };
  if ((APF.info && !APF.info.useTrackV2) || !window.J) {
    j.trackEvent(APF.info.pageName, APF.info.customparam, 1)
  }
}(Zepto, APF.Utils, document, window, window.J));
(function() {
  var b = location.protocol + "//tracklog.58.com/referrer_anjuke_m.js?_=" + Math.random(),
    a = $("<script><\/script>").attr("type", "text/javascript").attr("async", true).attr("src", b);
  $("head").append(a)
}());
APF.Namespace.register("kfstouch.global.component");
(function(a, b) {
  b.SingleHeader = function() {
    this.initParams();
    this.initEvents()
  };
  b.SingleHeader.prototype = {
    constructor: b.SingleHeader,
    initParams: function() {
      this.d = {
        gGoHome: a("#g-go-home"),
        gGoAlaDingHome: a("#g-go-alading-home"),
        gGoBack: a("#g-go-back"),
        gDoSearch: a("#g-do-search"),
        gGoHomeMenu: a("#g-go-home-menu"),
        gGoHomeMain: a("#g-go-home-main"),
        gGoPCenter: a("#g-go-person-center"),
        gDoShare: a("#g-do-share"),
        gDoCollect: a("#g-do-collect"),
        gDoCollectMenu: a("#g-do-collect-menu")
      };
      var d = this.constructor.options || {};
      this.p = {
        homeUrl: d.homeUrl || "",
        listUrl: d.listUrl || "",
        userCenterUrl: d.userCenterUrl || "",
        anjukeBaseDomain: d.anjukeBaseDomain || "",
        isReferrerWhiteDomain: d.isReferrerWhiteDomain
      };
      this.od = {
        gDoMenu: a("#g-do-menu"),
        gDoSheetlist: a(".item-title")
      };
      try {
        var c = window.top.location.href;
        if (/geniubuy/.test(c) && c !== location.href) {
          a("header.g-sheader").addClass("hide").hide()
        } else {
          a("header.g-sheader").removeClass("hide").show()
        }
      } catch (f) {}
    },
    initEvents: function() {
      for (var e in this.d) {
        if (this.d[e].length < 1) {
          continue
        }
        if (typeof this[e] == "function") {
          this.d[e].on("click", a.proxy(this[e], this))
        }
      }
      this.gDoMenu();
      this.gDoSheetlist();
      var c = APF.Utils.getCookie("app");
      var d = window.location.href;
      if ((c === "i-ajk" || c === "a-ajk" || c === "1") && /ugcpublish/.test(d) === false) {
        a(".g-sheader").hide();
        a("#app_down_new").hide();
        a(".component-tel").hide()
      }
    },
    gDoMenu: function() {
      var c = a("#menu-list");
      this.od.gDoMenu.on("click", function(d) {
        d.stopPropagation()
      });
      this.od.gDoMenu.on("touchstart", function(d) {
        c.toggle();
        d.stopPropagation()
      });
      a(document).on("click", function() {
        c.hide()
      });
      a(document).on("touchstart", function() {
        c.hide()
      });
      c.on("click", function(d) {
        d.stopPropagation()
      });
      c.on("touchstart", function(d) {
        d.stopPropagation()
      });
      c.on("click", "span", function() {
        var d = a(this).attr("data-href"),
          e = a(this).attr("data-soj");
        window.location.href = d + "?" + e
      })
    },
    gDoSheetlist: function() {
      var c = a("#sheet-list");
      this.od.gDoSheetlist.on("click", function(d) {
        d.stopPropagation()
      });
      this.od.gDoSheetlist.on("touchstart", function(d) {
        c.toggle();
        a(".sheet-marker").toggle();
        d.stopPropagation()
      });
      a(".sheet-marker").on("click", function() {
        c.hide();
        a(".sheet-marker").hide()
      });
      c.on("touchmove", function(d) {
        d.stopPropagation();
        d.preventDefault()
      });
      a(".sheet-marker").on("touchmove", function(d) {
        d.stopPropagation();
        d.preventDefault()
      })
    },
    gGoHome: function() {
      window.location.href = this.p.homeUrl
    },
    gGoAlaDingHome: function() {},
    gGoHomeMenu: function() {
      window.location.href = this.p.homeUrl
    },
    gGoHomeMain: function() {
      window.location.href = this.p.homeUrl
    },
    gGoBack: function() {
      var c = this.getReferrer();
      var d = this.p.anjukeBaseDomain;
      try {
        if (this.p.isReferrerWhiteDomain === "1" || c.indexOf(d) > -1) {
          window.history.back()
        } else {
          window.location.href = this.p.listUrl
        }
      } catch (f) {
        window.location.href = this.p.listUrl
      }
    },
    gGoPCenter: function() {
      window.location.href = this.p.userCenterUrl
    },
    getReferrer: function() {
      var c = "";
      try {
        c = window.top.document.referrer
      } catch (f) {
        if (window.parent) {
          try {
            c = window.parent.document.referrer
          } catch (d) {
            c = ""
          }
        }
      }
      if (c === "") {
        c = document.referrer
      }
      return c
    },
    clearCollected: function() {
      this.d.gDoCollect.length > 0 && this.d.gDoCollect.removeClass("item-collected")
    },
    setCollected: function() {
      this.d.gDoCollect.length > 0 && this.d.gDoCollect.addClass("item-collected")
    },
    isCollected: function() {
      return this.d.gDoCollect.length > 0 && this.d.gDoCollect.hasClass("item-collected")
    },
    on: function(d, e, c) {
      var f = this;
      if (!this.d[d] || this.d[d].length < 1) {
        return
      }
      this.d[d].on(e, function() {
        c.call(this, f);
        f.od.gDoMenu.children().eq(0).hide()
      })
    }
  }
}(Zepto, kfstouch.global.component));
APF.Namespace.register("kfstouch.component.map");
(function(a, b) {
  b.Ftl = function() {
    this._ftl = {
      metro: '<i class="c-mapicon c-micon c-subway-icon map-traffic"></i>',
      hospital: '<i class="c-mapicon c-micon c-hospital-icon map-hospital"></i>',
      bank: '<i class="c-mapicon c-micon c-bank-icon map-bank"></i>',
      restaurant: '<i class="c-mapicon c-micon c-catering-icon map-life"></i>',
      bus: '<i class="c-mapicon c-micon c-bus-icon map-traffic"></i>',
      education: '<i class="c-mapicon c-micon c-school-icon map-school"></i>',
      shop: '<i class="c-mapicon c-micon c-shop-icon map-life"></i>',
      loupanicon: '<i class="c-mapicon c-micon loupanicon"></i>',
      newloupanicon: '<a class="mark lpmark currentlp" href="javascript:;"><strong>{name}</strong><i></i></a>',
      nearWin: '<div class="mark markwindow"><h3>{head}<label>({distance}米)</label></h3><p>{content}</p><i class="c-mapicon downtriangle-icon"></i></div>',
      loupanlink: '<a class="mark lpmark map-nearby" href="javascript:;"><strong>{name}</strong><span>均价：<em>{price}</em></span><span class="more">查看更多详情</span><i class="c-mapicon downtriangle-icon"></i></a>',
      loupanlarge: '<a class="mark lpmark lpmarklager g-next nearbywin" href="{link}"><strong>{name}</strong><span>均价：<em>{price}</em></span><span class="more">查看更多详情</span><i class="c-mapicon downtriangle-icon"></i></a>',
      nav: '<div class="mapnav" id="mapnav"><span id="traffic"><i class="c-mapicon trafficicon"></i>交通</span><i class="line"></i><span id="life"><i class="c-mapicon lifeicon"></i>商业</span><i class="line"></i><span id="school"><i class="c-mapicon schoolicon"></i>教育</span><i class="line"></i><span id="hospital"><i class="c-mapicon hospitalicon"></i>医院</span><i class="line"></i><span class="nearby" id="nearby"><i class="c-mapicon nearbyicon"></i>附近楼盘</span></div>',
      hasbanknav: '<div class="mapnav" id="mapnav"><span id="traffic"><i class="c-mapicon trafficicon"></i>交通</span><i class="line"></i><span id="life"><i class="c-mapicon lifeicon"></i>商业</span><i class="line"></i><span id="school"><i class="c-mapicon schoolicon"></i>教育</span><i class="line"></i><span id="bank"><i class="bankicon iconfont icon-eafb"></i>银行</span><i class="line"></i><span class="nearby" id="nearby"><i class="c-mapicon nearbyicon"></i>附近楼盘</span></div>',
      nonearnav: '<div class="mapnav" id="mapnav"><span id="traffic"><i class="c-mapicon trafficicon"></i>交通</span><i class="line"></i><span id="life"><i class="c-mapicon lifeicon"></i>商业</span><i class="line"></i><span id="school"><i class="c-mapicon schoolicon"></i>教育</span><i class="line"></i><span id="hospital"><i class="c-mapicon hospitalicon"></i>医院</span></div>',
      pilot: '<div class="pilot" id="pilot"><i class="zoomicon add" id="add"></i><i id="reduce" class="zoomicon reduce"></i></div>',
      start: '<i class="c-mapicon c-micon starting"></i>'
    }
  };
  b.Ftl.prototype = {
    constructor: b.Ftl,
    getDom: function(e, d) {
      var c;
      if (!(e in this._ftl)) {
        return null
      }
      c = this._ftl[e];
      a.each(d || {}, function(g, f) {
        c = c.replace("{" + g + "}", f)
      });
      return a(c).get(0)
    }
  };
  b.MyOverlay = function(d, e, c) {
    this._mypoint = d;
    this.dom = e;
    this._isWin = c || false
  };
  b.MyOverlay.prototype = new BMap.Overlay();
  b.MyOverlay.prototype.initialize = function(c) {
    var d = this;
    this._map = c;
    c.getPanes().markerPane.appendChild(this.dom);
    this._offset = {
      height: a(d.dom).height() + 8,
      width: a(d.dom).width()
    };
    if (this._isWin) {
      a(this.dom).addClass("hidewindow")
    }
    return this.dom
  };
  b.MyOverlay.prototype.draw = function() {
    var c = this._map.pointToOverlayPixel(new BMap.Point(this._mypoint.lng, this._mypoint.lat));
    this.dom.style.left = c.x - this._offset.width / 2 + "px";
    this.dom.style.top = c.y - this._offset.height + "px"
  }
}(Zepto, kfstouch.component.map));
APF.Namespace.register("kfstouch.map");
(function(c, e, d, a) {
  function b(h, f, g) {
    this.dom = h;
    this.fun = f;
    this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
    this.defaultOffset = new BMap.Size(g.left, g.top)
  }
  b.prototype = new BMap.Control();
  b.prototype.initialize = function(f) {
    f.getContainer().appendChild(this.dom);
    c(this.dom).on("click", this.fun);
    return this.dom
  };
  e.Map = function(g) {
    this.ftl = new d();
    this.ops = g || {};
    this.clickFlag = 0;
    this.controlFlag = 0;
    this.moveFlag = 0;
    this.bMap = new BMap.Map("map");
    this.bMap.enableContinuousZoom();
    this.bMap.enableInertialDragging();
    this.bMap.setMinZoom(12);
    this.loupanOverlay = [];
    if (this.ops.source === "loupan" || this.ops.source === "loupanjkj") {
      var f = "nav";
      if (this.ops.source === "loupanjkj") {
        c("#map").height(c(window).height() + 45);
        f = "nonearnav"
      }
      if (this.ops.ext == "bank") {
        f = "hasbanknav"
      }
      this.point = new BMap.Point(this.ops.lng, this.ops.lat);
      this.bMap.centerAndZoom(this.point, 17);
      var j = new b(this.ftl.getDom(f), c.proxy(this.navClick, this), {
        left: 0,
        top: 55
      });
      this.bMap.addControl(j);
      var h = new b(this.ftl.getDom("pilot"), c.proxy(this.pilotClick, this), {
        left: 5,
        top: 105
      });
      this.bMap.addControl(h);
      this.init()
    } else {
      if (this.ops.source === "kanfangtuan") {
        this.addkfsLoupan()
      } else {
        if (this.ops.source === "tuangou") {
          this.point = new BMap.Point(this.ops.lng, this.ops.lat);
          this.bMap.centerAndZoom(this.point, 17);
          this.addnewLoupan()
        } else {
          this.point = new BMap.Point(this.ops.lng, this.ops.lat);
          this.bMap.centerAndZoom(this.point, 17);
          this.addCurrentLoupan()
        }
      }
    }
  };
  e.Map.prototype = {
    init: function() {
      var f = this;
      this.addnewLoupan();
      this.getNearBy();
      this.getLoupan();
      c("#map").on("touchend", ".c-micon", function(g) {
        g.preventDefault();
        g.stopPropagation();
        f.clickFlag = 1;
        var j = c(this).attr("id"),
          h;
        f.hideWindow();
        h = c("#" + j + "win");
        h.addClass("showwindow");
        T.trackEvent("xinfang_map_" + j + "_click")
      });
      c("#map").on("touchend", ".map-nearby", function(g) {
        g.preventDefault();
        g.stopPropagation();
        f.clickFlag = 1;
        f.hideWindow();
        var h = c(this).attr("id");
        setTimeout(function() {
          c("#" + h + "win").addClass("showwindow")
        }, 50);
        T.trackEvent("xinfang_map_loupan_click")
      });
      c("#map").on("touchend", ".lpmarklager", function() {
        location.href = c(this).attr("href")
      });
      c(document).on("touchmove", function(g) {
        g.preventDefault()
      });
      this.bMap.addEventListener("click", function(g) {
        setTimeout(function() {
          if (f.clickFlag == 1) {
            f.clickFlag = 0
          } else {
            var h = c(".showwindow");
            if (h.length > 0) {
              f.hideWindow();
              return
            }
            if (f.controlFlag === 0) {
              c("#mapnav").css("bottom", 0);
              c("#pilot").css("bottom", -45);
              f.controlFlag = 1
            } else {
              c("#mapnav").css("bottom", 55);
              c("#pilot").css("bottom", 100);
              f.controlFlag = 0
            }
          }
        }, 1)
      });
      c("#shadow").on("touchmove", function(g) {
        event.preventDefault()
      });
      c("#confirm").on("click", function(g) {
        event.stopPropagation();
        c("#shadow").hide()
      });
      c("#" + this.ops.type).addClass("focus");
      this.renderMap();
      c(window).resize(function(g) {
        window.scrollTo(0, 0)
      })
    },
    pilotClick: function(h) {
      var f = this.bMap.getZoom(),
        g = c(event.target);
      if (h.target.tagName.toUpperCase() === "DIV") {
        return
      }
      if (g.attr("id") === "add") {
        if (f === 17) {
          g.addClass("add2")
        }
        c("#reduce").removeClass("reduce2");
        if (f !== 18) {
          this.bMap.setZoom(f + 1)
        }
      } else {
        c("#add").removeClass("add2");
        if (f === 12) {
          return
        }
        if (f === 13) {
          c("#reduce").addClass("reduce2")
        }
        this.bMap.setZoom(f - 1)
      }
    },
    getNearBy: function() {
      var f;
      try {
        f = c.parseJSON(c("#nearbyinfo").val())
      } catch (g) {
        f = {}
      }
      this.nearBy = f;
      this.renderNearBy();
      this.renderMap()
    },
    addCurrentLoupan: function() {
      this.addOverlay(this.point, this.ftl.getDom("loupanicon"))
    },
    addnewLoupan: function() {
      var f = this;
      this.addOverlay(this.point, this.ftl.getDom("newloupanicon", {
        name: f.ops.loupanname
      }))
    },
    addkfsLoupan: function() {
      var g = this.ops.lnglat.split("|"),
        h = this.ops.loupans_name.split("|"),
        j = this.getMapShow(g, this.bMap),
        p = j.lng,
        n = j.lat,
        f = new BMap.Point(j.lng_min, j.lat_min),
        q = new BMap.Point(j.lng_max, j.lat_max),
        o = new Array();
      o.push(f);
      o.push(q);
      this.bMap.centerAndZoom(new BMap.Point(p, n), 18);
      this.bMap.setViewport(o);
      this.bMap.enableScrollWheelZoom();
      for (i = 0; i < g.length; i++) {
        var m = g[i].split(",")[0];
        var l = g[i].split(",")[1];
        var k = new BMap.Point(m, l);
        this.addOverlay(k, this.ftl.getDom("newloupanicon", {
          name: h[i]
        }))
      }
    },
    getMapShow: function(u, h) {
      if (u.length == 0) {
        return
      } else {
        if (u.length == 1) {
          var w = parseFloat(u[0].split(",")[0]),
            g = parseFloat(u[0].split(",")[1]),
            f = 18;
          var y = {
            lng: w,
            lat: g,
            zoom: f
          };
          return y
        }
      }
      var q = parseFloat(u[0].split(",")[0]),
        r = parseFloat(u[0].split(",")[0]),
        n = parseFloat(u[0].split(",")[1]),
        o = parseFloat(u[0].split(",")[1]),
        z, m, x, k, l, s, v = 0,
        j = 0,
        p = 0;
      for (var t = 0; t < u.length; t++) {
        z = parseFloat(u[t].split(",")[0]);
        m = parseFloat(u[t].split(",")[1]);
        if (z > r) {
          r = z
        } else {
          if (z < q) {
            q = z
          }
        }
        if (m > o) {
          o = m
        } else {
          if (m < n) {
            n = m
          }
        }
      }
      var w = (r + q) / 2,
        g = (o + n) / 2;
      var y = {
        lng: w,
        lat: g,
        lng_min: q,
        lng_max: r,
        lat_min: n,
        lat_max: o
      };
      return y
    },
    navClick: function(f) {
      f.stopPropagation();
      this.updateNavStyle(f);
      this.renderMap()
    },
    renderMap: function() {
      c("#mapnav>span").each(function(f, g) {
        var h = c(g).attr("id");
        if (c(g).hasClass("focus")) {
          c(".map-" + h).removeClass("hidewindow")
        } else {
          c(".map-" + h).addClass("hidewindow");
          c("." + h + "win").removeClass("showwindow")
        }
      })
    },
    hideWindow: function() {
      c(".showwindow").removeClass("showwindow")
    },
    renderNearBy: function() {
      var g = this,
        f = 0;
      c.each(this.nearBy, function(h, j) {
        c.each(j, function(k, l) {
          c.each(l, function(q, o) {
            var p, s, r, m, n;
            if (h === "education") {
              p = h
            } else {
              if (k === "mall") {
                p = "shop"
              } else {
                p = k
              }
            }
            m = {
              lng: parseFloat(o.lng),
              lat: parseFloat(o.lat)
            };
            n = {
              head: o.name,
              content: o.address,
              distance: o.distance
            };
            f += 1;
            s = g.ftl.getDom(p);
            c(s).attr("id", p + f);
            g.addOverlay(m, s, true);
            r = g.ftl.getDom("nearWin", n);
            c(r).attr("id", p + f + "win");
            g.addOverlay(m, r, true)
          })
        })
      })
    },
    delLoupan: function() {
      var f = this;
      if (c.isArray(this.loupanOverlay) && this.loupanOverlay.length > 0) {
        c.each(this.loupanOverlay, function(g, h) {
          f.bMap.removeOverlay(h)
        });
        this.bMap.loupanOverlay = []
      }
    },
    renderLoupan: function() {
      var j, h, f, g, k = this;
      if (!c.isArray(this.loupan)) {
        return
      }
      c.each(this.loupan, function(l, m) {
        if (m.loupan_id == k.ops.loupanid) {
          return
        }
        g = {
          link: m.loupan_url,
          name: m.loupan_name,
          price: parseInt(m.unit_price) === 0 ? "售价待定" : m.unit_price + "元/m²"
        };
        f = {
          lng: m.baidu_lng,
          lat: m.baidu_lat
        };
        j = k.ftl.getDom("loupanlink", g);
        c(j).attr("id", "loupan" + m.loupan_id);
        h = k.ftl.getDom("loupanlarge", g);
        c(h).attr("id", "loupan" + m.loupan_id + "win");
        c(h).addClass("nearbywin");
        k.addOverlay(f, j, true, true);
        k.addOverlay(f, h, true, false)
      })
    },
    getLoupan: function() {
      var g = this,
        f;
      if (c.isArray(this.loupan)) {
        return
      }
      f = {
        baidu_lat: g.ops.lat,
        baidu_lng: g.ops.lng,
        distance: 2
      };
      c.getJSON(this.ops.url, f, function(h) {
        g.loupan = h;
        g.renderLoupan();
        g.renderMap()
      })
    },
    getMapBoundsPoint: function() {
      var h, g, j, f;
      bounds = this.bMap.getBounds();
      g = bounds.getSouthWest();
      j = bounds.getNorthEast();
      f = {
        baidu_swlat: g.lat,
        baidu_swlng: g.lng,
        baidu_nelat: j.lat,
        baidu_nelng: j.lng
      };
      return f
    },
    moveMap: function(g, h, f) {},
    updateNavStyle: function(g) {
      var j = c(g.target),
        k, h, f;
      if (j.hasClass("line")) {
        return
      }
      h = j.get(0).tagName.toUpperCase();
      if (h === "DIV") {
        return
      }
      if (h === "I") {
        f = j.parent()
      } else {
        f = j
      }
      k = f.attr("id");
      if (!f.hasClass("focus")) {
        T.trackEvent("xinfang_map_" + k + "_select")
      } else {
        T.trackEvent("xinfang_map_" + k + "_cancel")
      }
      f.toggleClass("focus")
    },
    addOverlay: function(f, k, h, j) {
      var g = new a(f, k, h || false);
      if (j) {
        this.loupanOverlay.push(g)
      }
      this.bMap.addOverlay(g)
    }
  }
}(Zepto, kfstouch.map, kfstouch.component.map.Ftl, kfstouch.component.map.MyOverlay));
