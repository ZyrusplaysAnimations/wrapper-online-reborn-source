﻿  var _kmq = _kmq || [];





  optimizelyCode = function() {
    var DATA = {
      "log_host": "log.optimizely.com",
      "goal_expressions": {
        "102481666": ["^plusfeature\\_page\\_basic\\_signup\\_click$"],
        "85664517": ["^business\\_plan\\_section\\_click$"],
        "85751051": ["^buy\\_now\\_button\\_click$"],
        "84840595": ["^basic\\_signup$"],
        "28261014": ["^click\\ google\\ account\\ login$"],
        "28261015": ["^login$"],
        "28261016": ["^bought\\_plus12m\\_goplus$"],
        "85740314": ["^first\\_section\\_\\(video\\_player\\)\\_click$"],
        "75778159": ["^business\\_new\\_signup\\_revenue$"],
        "246457542": ["(https?://)?(www\\.)?goanimate\\.com\\/business\\-video\\/video\\-plans/?"],
        "151924183": ["^more\\_on\\_business\\_accounts\\_click$"],
        "143939548": ["^(https?://)?(www\\.)?goanimate\\.com\\/business\\/buy/?(\\?.*)?(#.*)?$"],
        "71297068": ["^goplus\\_upgrade\\_click$"],
        "246389438": ["(https?://)?(www\\.)?goanimate\\.com\\/business\\-video\\/buy/?"],
        "28220357": ["^sign\\ up$"],
        "28220358": ["^bought\\_goplus$"],
        "28220359": ["^completeauthorization$"],
        "28220360": ["^completeauthorization$"],
        "28220361": ["^sign\\ up\\ link$"],
        "28220362": ["^sign\\ up\\ completed$"],
        "28220363": ["^bought\\_plus1mtrial\\_goplus$"],
        "28220364": ["^bought\\_plus3m\\_goplus$"],
        "28220365": ["^(https?://)?(www\\.)?gosignup\\('signup'\\)\\;/?(\\?.*)?(#.*)?$"],
        "28220366": ["^bought\\_plus24m\\_goplus$"],
        "212520144": ["(https?://)?(www\\.)?goanimate\\.com\\/business\\/videoplans/?"],
        "212305363": ["(https?://)?(www\\.)?goanimate\\.com\\/business\\/buy/?"],
        "85740374": ["^features\\_section\\_click$"],
        "85659991": ["^goanimate\\_at\\_a\\_glance\\_section\\_click$"],
        "28200280": ["^bought\\_12m\\_goplus\\_no\\_gobucks$"],
        "28200281": ["^terms\\ of\\ use$"],
        "28200282": ["^signup\\_goplus$"],
        "28200283": ["^(https?://)?(www\\.)?dosignup\\(\\)\\;/?(\\?.*)?(#.*)?$"],
        "28200284": ["^login$"],
        "28200285": ["^bought\\_plus24m\\_goplus$"],
        "28200286": ["^bought\\_gobucks$"],
        "28200287": ["^facebook\\ login$"],
        "28200288": ["^sign\\ up\\ button$"],
        "28200289": ["^signup\\_basic$"],
        "129445223": ["^click\\_take\\-a\\-sneak\\-peek$"],
        "28112745": ["^bought\\_plus3m\\_goplus$"],
        "28112746": ["^bought\\_goplus$"],
        "28112747": ["^signup\\_goplus$"],
        "28112748": ["^engagement$"],
        "28112749": ["^clicked\\ authorize$"],
        "28112750": ["^signup\\_goplus$"],
        "28112751": ["^terms\\ of\\ use$"],
        "28112752": ["^bought\\_plus6m\\_goplus$"],
        "28112753": ["^bought\\_plus12m\\_goplus$"],
        "28112754": ["^clicked\\ authorize$"],
        "74430710": ["^goplus\\_signup\\_v1$"],
        "71256696": ["^version\\_a\\_upgrade\\_click\\_01$"],
        "71399165": ["^page\\_click\\_anywhere$"]
      },
      "experiments": {
        "849453028": {
          "name": "Homepage",
          "conditions": [{
            "type": "url",
            "values": [{
              "value": "http://web.archive.org/web/20140715044754/http://goanimate.com",
              "match": "simple"
            }]
          }, {
            "only_first_time": true,
            "type": "visitor",
            "value": "all"
          }],
          "enabled_variation_ids": ["849483050", "842893166", "828384116"],
          "variation_ids": ["849483050", "842893166", "828384116"]
        },
        "1020790247": {
          "name": "Plans Page",
          "conditions": [{
            "type": "url",
            "values": [{
              "value": "http://web.archive.org/web/20140715044754/http://goanimate.com/business/videoplans",
              "match": "simple"
            }]
          }, {
            "only_first_time": true,
            "type": "visitor",
            "value": "all"
          }],
          "enabled_variation_ids": ["1021870692", "1023570675"],
          "variation_ids": ["1021870692", "1023570675"]
        },
        "382611220": {
          "name": "G4B Payment Page Test",
          "conditions": [{
            "type": "url",
            "values": [{
              "value": "http://web.archive.org/web/20140715044754/https://goanimate.com/business/buy",
              "match": "simple"
            }]
          }, {
            "only_first_time": true,
            "type": "visitor",
            "value": "all"
          }],
          "enabled_variation_ids": ["385390857"],
          "variation_ids": ["384001561", "385390857"]
        },
        "339594109": {
          "name": "Biz Plans and Pricing (1)",
          "conditions": [{
            "type": "url",
            "values": [{
              "value": "http://web.archive.org/web/20140715044754/http://goanimate.com/business/videoplans",
              "match": "simple"
            }]
          }, {
            "only_first_time": true,
            "type": "visitor",
            "value": "all"
          }],
          "enabled_variation_ids": ["339295038"],
          "variation_ids": ["339032089", "339295038"]
        },
        "1013842751": {
          "name": "Biz Plans and Pricing (2)",
          "conditions": [{
            "type": "url",
            "values": [{
              "value": "http://web.archive.org/web/20140715044754/http://goanimate.com/business/videoplans",
              "match": "simple"
            }]
          }, {
            "only_first_time": true,
            "type": "visitor",
            "value": "all"
          }],
          "enabled_variation_ids": ["999667725"],
          "variation_ids": ["1019516385", "999667725"]
        }
      },
      "www_host": "www.optimizely.com",
      "public_suffixes": {
        "goanimate.com": ["goanimate.com"]
      },
      "kissmetrics": true,
      "version": "master-1519.377089877663211291",
      "admin_account_id": 4554059,
      "blacklisted_experiments": [7578112, 6573062, 81011207, 265122135, 238421517, 91336209, 204809746, 99882003, 8144046, 4644453616713728, 89639464, 4775004, 83703338, 211039787, 121242158, 6643247, 5654081, 122549314, 9336327, 138762311, 4819016, 80959569, 4946004, 100553820, 4839010, 248978020, 111226470, 5265005, 174522479, 4774002, 114581117, 93473919, 144465543, 84840584, 99533961, 333594252, 128470171, 117800093, 5968035, 7592110, 399040182, 4835005, 4835006, 7085247, 6672065, 95892169, 114363595, 102510797, 5658130, 4856028, 9771026, 6500069, 132757228, 5282031, 113806069, 117776119, 150915323, 7523069, 100560638, 251199231, 7457031, 91352331, 268723470, 212811028, 104689436, 11503901, 4789024, 246450469, 7080239, 9677616, 80995634, 227531068, 4873021, 4872001, 7103303, 75716424, 8093001, 257157451, 4850001, 238601045, 255608663, 4871001, 245121372, 6727006, 85683556, 116773221, 111210854, 89681258, 214917995, 8015336, 206475128, 4763003, 151906174, 7035264, 4784003, 206474121, 152729488, 70757269, 9833879, 4571039, 75762592, 7074211, 5876140, 73472941, 4798024, 248777652, 113804214, 132105655, 4867001, 4995005, 4890016, 8056258, 5144008, 4866003, 196676056, 259337177, 206472154, 206437852, 257181157, 7044070, 4840017, 206437864, 573472745, 80755692, 8025070, 205045743, 139825138, 7047159, 122510959, 227509244],
      "project_id": 4554059,
      "revision": 895,
      "installation_verified": true,
      "token_hash": "ca802af8a2a1db6f97b3e64b6314b4acd19e0b7ddae04f8214dbf8e0476cf6d6",
      "api_host": "api.optimizely.com",
      "variations": {
        "1019516385": {
          "name": "Original"
        },
        "1021870692": {
          "name": "Original"
        },
        "385390857": {
          "code": "$('.case-studies').show();$('.testimonial').remove();",
          "name": "Variation #1"
        },
        "849483050": {
          "name": "Original"
        },
        "999667725": {
          "code": "$(\".gopublish .pricing-plan-tagline\").replaceWith(\"<div class=\\\"pricing-plan-tagline\\\">Most cost-effective business plan.</div>\");\n$(\".gopro .pricing-plan-tagline\").replaceWith(\"<div class=\\\"pricing-plan-tagline\\\">Produce HD videos.  Link to external sites.</div>\");\n$(\".gopremium .pricing-plan-tagline\").replaceWith(\"<div class=\\\"pricing-plan-tagline\\\">Produce Full HD videos with no watermark.</div>\");",
          "name": "Variation #1"
        },
        "842893166": {
          "code": "$('.hp-main').addClass('character').html('<div class=\"hp-main-container\"><div class=\"hp-main-content\"><h1>Make your own professional animated videos.</h1><p class=\"hp-main-tagline\">Drag &amp; drop tools. Automatic lip-sync. Very affordable. Thousands of pre-animated assets.</p><a class=\"hp-main-btn orange\" href=\"/business/videoplans\">Plans &amp; Pricing</a><a class=\"hp-main-btn green\" href=\"https://goanimate.com/signup\">Sign Up For Free</a></div><div class=\"watch-video\"><a class=\"watch-video-link\" href=\"#\" title=\"How does it work?\">Watch video</a></div><div class=\"press\"></div></div>');",
          "name": "Variation #1"
        },
        "1023570675": {
          "name": "Variation #1"
        },
        "828384116": {
          "code": "$('.hp-main').addClass('lady2').html('<div class=\"hp-main-container\"><div class=\"container\"><div class=\"hp-main-content\"><h1>Make your own <br>professional animated videos.</h1><p class=\"hp-main-tagline\">Drag &amp; drop tools. Automatic lip-sync. Very affordable. <br>Thousands of pre-animated assets.</p><a class=\"hp-main-btn orange\" href=\"/business/videoplans\">Plans &amp; Pricing</a><a class=\"hp-main-btn green\" href=\"https://goanimate.com/signup\">Sign Up For Free</a></div><div class=\"watch-video\"><a class=\"watch-video-link\" href=\"#\" title=\"How does it work?\">Watch video</a></div></div><div class=\"press\"></div></div>');",
          "name": "Variation #2"
        },
        "384001561": {
          "name": "Original"
        },
        "339032089": {
          "name": "Original"
        },
        "339295038": {
          "code": "$(\".gopublish .pricing-plan-tagline\").replaceWith(\"<div class=\\\"pricing-plan-tagline\\\">Most cost-effective business plan.</div>\");\n$(\".gopro .pricing-plan-tagline\").replaceWith(\"<div class=\\\"pricing-plan-tagline\\\">Produce HD videos.  Link to external sites.</div>\");\n$(\".gopremium .pricing-plan-tagline\").replaceWith(\"<div class=\\\"pricing-plan-tagline\\\">Produce Full HD videos with no watermark.</div>\");",
          "name": "Variation #1"
        }
      },
      "click_goals": [{
        "event_name": "Clicked Authorize",
        "experiments": {
          "6672065": true,
          "7047159": true,
          "6500069": true,
          "7085247": true,
          "6643247": true
        },
        "selector": "div#v3 a.btn_authorize,div#v2 a.btn_authorize,div#v1 a.btn_authorize"
      }, {
        "event_name": "Terms of Use",
        "experiments": {
          "6672065": true,
          "7047159": true,
          "6500069": true,
          "7085247": true,
          "6643247": true
        },
        "selector": "div#v2 div.authorize a:eq(0),div#v3 div.authorize a:eq(0),div#v1 div.authorize a:eq(0)"
      }, {
        "event_name": "Clicked Authorize",
        "experiments": {
          "7074211": true,
          "7103303": true
        },
        "selector": "div.confirm a.btn_authorize,div#v3 a.btn_authorize,div#v2 a.btn_authorize,div#v1 a.btn_authorize"
      }, {
        "event_name": "Terms of Use",
        "experiments": {
          "7074211": true,
          "7103303": true
        },
        "selector": "div#v2 div.authorize a:eq(0),div.footnote a:eq(0),div#v3 div.authorize a:eq(0),div#v1 div.authorize a:eq(0)"
      }, {
        "event_name": "Login",
        "experiments": {
          "5265005": true
        },
        "selector": "div#header_links a:eq(2)"
      }, {
        "event_name": "Facebook Login",
        "experiments": {
          "5265005": true
        },
        "selector": "a#header_fb_connect"
      }, {
        "event_name": "Sign Up Button",
        "experiments": {
          "5265005": true
        },
        "selector": "a.buttonbase"
      }, {
        "event_name": "Sign up",
        "experiments": {
          "11503901": true
        },
        "selector": "a#signup_link,a#btn_signup"
      }, {
        "event_name": "Sign Up Link",
        "experiments": {
          "5265005": true
        },
        "selector": "div#header_links a:eq(1)"
      }, {
        "event_name": "Click Google Account Login",
        "experiments": {
          "8144046": true
        },
        "selector": "a.btn_authorize,div#v4c button.gg,div#v4b button.gg,div#v4a button.gg"
      }, {
        "event_name": "Login",
        "experiments": {
          "11503901": true
        },
        "selector": "a#login_link,a#bth_login,a#btn_facebook_login,div.options > a:eq(0)"
      }, {
        "event_name": "version_a_upgrade_click_01",
        "experiments": {
          "122549314": true,
          "111226470": true,
          "102510797": true,
          "80959569": true,
          "113806069": true,
          "104689436": true,
          "114581117": true,
          "151906174": true,
          "70757269": true
        },
        "selector": "#lbl_upgrade_now2 .goButton, #lbl_upgrade_now .goButton, #feature_comparison_button .goButton, .goplusplan a"
      }, {
        "event_name": "goanimate_at_a_glance_section_click",
        "experiments": {
          "83703338": true
        },
        "selector": ".index-bottom-inside > div:eq(3) > a:eq(0)"
      }, {
        "event_name": "business_plan_section_click",
        "experiments": {
          "83703338": true
        },
        "selector": ".index-plans-wrap .biz-button"
      }, {
        "event_name": "first_section_(video_player)_click",
        "experiments": {
          "83703338": true
        },
        "selector": ".index-top-inside .biz-button, #index-points .biz-button"
      }, {
        "event_name": "features_section_click",
        "experiments": {
          "83703338": true
        },
        "selector": ".index-features-bottom .biz-button"
      }, {
        "event_name": "buy_now_button_click",
        "experiments": {
          "111210854": true,
          "138762311": true,
          "206437864": true,
          "83703338": true,
          "132757228": true,
          "121242158": true,
          "174522479": true,
          "205045743": true,
          "113804214": true,
          "132105655": true,
          "196676056": true,
          "128470171": true,
          "100553820": true,
          "117800093": true,
          "122510959": true
        },
        "selector": "#biz-menu-buy"
      }, {
        "event_name": "plusfeature_page_basic_signup_click",
        "experiments": {
          "122549314": true,
          "111226470": true,
          "102510797": true,
          "113806069": true,
          "104689436": true,
          "114581117": true,
          "151906174": true
        },
        "selector": "#lbl_upgrade_now4 .goBtnGrey, #header_links > a:eq(0)"
      }, {
        "event_name": "click_take-a-sneak-peek",
        "experiments": {
          "128470171": true,
          "132757228": true,
          "132105655": true
        },
        "selector": "#theme_showcase_TakeASneakPeek_button"
      }, {
        "event_name": "more_on_business_accounts_click",
        "experiments": {
          "151906174": true
        },
        "selector": ".bizplan a"
      }]
    };

    var optly = {
      nativity: {}
    };
    optly.nativity.getNativeGetElementsByClassName = function() {
      var a = document.getElementsByClassName;
      if (!optly.nativity.isNativeFunction(a)) var a = (window.optimizely || {}).getElementsByClassName,
        b = (window.optly || {}).getElementsByClassName,
        a = optly.nativity.isNativeFunction(a) ? a : optly.nativity.isNativeFunction(b) ? b : null;
      return a
    };
    optly.nativity.isNativeFunction = function(a) {
      return a && -1 !== String(a).indexOf("[native code]")
    };
    optly.Cleanse = {};
    optly.Cleanse.each = function(a, b, d) {
      var h = !!Object.prototype.__lookupGetter__,
        e = !!Object.prototype.__lookupSetter__,
        c;
      for (c in a)
        if (a.hasOwnProperty(c)) {
          var f = h ? a.__lookupGetter__(c) : null,
            g = e ? a.__lookupSetter__(c) : null;
          try {
            b.call(d, c, !f ? a[c] : null, f, g)
          } catch (i) {}
        }
    };
    optly.Cleanse.finish = function() {
      if (optly.Cleanse.running) {
        optly.Cleanse.running = !1;
        optly.Cleanse.each(optly.Cleanse.types, function(a, d) {
          Object.prototype.__defineGetter__ && optly.Cleanse.each(optly.Cleanse.getters[a], function(c, b) {
            d.prototype.__defineGetter__(c, b);
            optly.Cleanse.log("restored getter", a, c)
          });
          Object.prototype.__defineSetter__ && optly.Cleanse.each(optly.Cleanse.setters[a], function(c, b) {
            d.prototype.__defineSetter__(c, b);
            optly.Cleanse.log("restored setter", a, c)
          });
          optly.Cleanse.each(optly.Cleanse.properties[a],
            function(b, f) {
              d.prototype[b] = f;
              optly.Cleanse.log("restored property", a, b)
            })
        });
        optly.Cleanse.unfixGetElementsByClassName();
        optly.Cleanse.log("finish");
        var a = window.console;
        if ((-1 !== window.location.hash.indexOf("optimizely_log=true") || -1 !== window.location.search.indexOf("optimizely_log=true")) && a && a.log)
          for (var b = optly.Cleanse.logs, d = 0; d < b.length; d++) a.log(b[d])
      }
    };
    optly.Cleanse.log = function(a, b, d) {
      b ? (b = b.replace(/_/g, ""), optly.Cleanse.logs.push("Optimizely / Info / Cleanse / " + a + ": " + b + "." + d)) : optly.Cleanse.logs.push("Optimizely / Info / Cleanse / " + a)
    };
    optly.Cleanse.start = function() {
      var a = window.location.hostname;
      if (!(-1 !== a.indexOf("optimizely") && -1 === a.indexOf("edit") && -1 === a.indexOf("preview") && -1 === a.indexOf("test")))
        if (optly.Cleanse.running) optly.Cleanse.log("already running so didn't start");
        else {
          optly.Cleanse.log("start");
          optly.Cleanse.running = !0;
          for (var b in optly.Cleanse.types) optly.Cleanse.types[b] || delete optly.Cleanse.types[b];
          optly.Cleanse.each(optly.Cleanse.types, function(a, b) {
            optly.Cleanse.getters[a] = {};
            optly.Cleanse.properties[a] = {};
            optly.Cleanse.setters[a] = {};
            optly.Cleanse.each(b.prototype, function(e, c, f, g) {
              optly.nativity.isNativeFunction(c) || optly.nativity.isNativeFunction(f) || optly.nativity.isNativeFunction(g) ? optly.Cleanse.log("ignore native code", a, e) : (f ? (optly.Cleanse.getters[a][e] = f, optly.Cleanse.log("cleansed getter", a, e)) : (optly.Cleanse.properties[a][e] = c, optly.Cleanse.log("cleansed property", a, e)), g && (optly.Cleanse.setters[a][e] = g, optly.Cleanse.log("cleansed setter", a, e)), delete b.prototype[e])
            })
          });
          optly.Cleanse.fixGetElementsByClassName();
          optly.Cleanse.hasRunStart = !0
        }
    };
    optly.Cleanse.fixGetElementsByClassName = function() {
      if (!optly.nativity.isNativeFunction(document.getElementsByClassName)) {
        var a = optly.nativity.getNativeGetElementsByClassName();
        a ? (optly.Cleanse.getElementsByClassName = document.getElementsByClassName, document.getElementsByClassName = a) : optly.Cleanse.log("Error: native HTMLElement.prototype.getElementsByClassName missing")
      }
    };
    optly.Cleanse.unfixGetElementsByClassName = function() {
      optly.Cleanse.getElementsByClassName && (document.getElementsByClassName = optly.Cleanse.getElementsByClassName, optly.Cleanse.getElementsByClassName = null)
    };
    optly.Cleanse.getElementsByClassName = null;
    optly.Cleanse.getters = {};
    optly.Cleanse.logs = [];
    optly.Cleanse.properties = {};
    optly.Cleanse.setters = {};
    optly.Cleanse.types = {
      HTMLElement_: window.HTMLElement,
      Object_: Object
    };
    window.optly = window.optly || {};
    window.optly.Cleanse = {
      finish: optly.Cleanse.finish,
      logs: optly.Cleanse.logs,
      start: optly.Cleanse.start
    };
    optly.Cleanse.start();
    var $ = jQuery;

    function h(a) {
      throw a;
    }
    var j = void 0,
      k = !0,
      m = null,
      n = !1;

    function aa() {}

    function ba(a, b, c) {
      return a.call.apply(a.bind, arguments)
    }

    function ca(a, b, c) {
      a || h(Error());
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
          var c = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(c, d);
          return a.apply(b, c)
        }
      }
      return function() {
        return a.apply(b, arguments)
      }
    }

    function p(a, b, c) {
      p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ba : ca;
      return p.apply(m, arguments)
    }

    function ea(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function() {
        var b = Array.prototype.slice.call(arguments);
        b.unshift.apply(b, c);
        return a.apply(this, b)
      }
    };

    function fa(a, b) {
      var c = {},
        c = j,
        d = q("custom_revenue_goals");
      d && (a in d && ha(d[a])) && (c = d[a]);
      var c = b && ha(b) ? {
          a: Number(b)
        } : b && b.revenue ? {
          a: b.revenue
        } : c ? {
          a: c
        } : b,
        d = ia(),
        e = {};
      r(d, function(a) {
        e[a] = k
      });
      $.extend(c, {
        h: e
      });
      ja(a, "custom", c)
    }

    function ja(a, b, c) {
      c = c || {};
      u && (ka.push({
        name: a,
        type: b,
        options: c
      }), la ? (ma(), v("Tracker", "Tracking event '" + a + "'")) : v("Tracker", "Queued tracking event '" + a + "'"))
    }

    function na() {
      oa();
      $("html").bind("mousedown", pa);
      $("html").bind("touchstart", qa)
    }

    function oa() {
      $("html").unbind("touchstart", qa);
      $("html").unbind("mousedown touchend", pa);
      $("html").unbind("touchmove", na)
    }

    function qa() {
      $("html").bind("touchend", pa);
      $("html").bind("touchmove", na)
    }

    function ra() {
      var a = document.location.href,
        b = q("pageview_revenue_goals");
      b && 0 < w(b) ? r(w(b), function(c) {
        ja(a, "pageview", {
          a: c,
          h: b[c]
        })
      }) : ja(a, "pageview")
    }

    function ta(a) {
      var b = q("goal_expressions"),
        c = [],
        d;
      for (d in b) b.hasOwnProperty(d) && $.each(b[d], function(b, f) {
        try {
          if (a.match(RegExp(f, "i"))) return c.push(d), n
        } catch (g) {}
        return k
      });
      return c
    }

    function ua() {
      var a = y("optimizelyPendingLogEvents") || "[]",
        b = [];
      try {
        b = va(a)
      } catch (c) {}
      if (z(b))
        for (var a = 0, d = b.length; a < d; a++) {
          var e = b[a];
          if ("string" !== typeof e) {
            b = [];
            break
          } else try {
            va(e);
            b = [];
            break
          } catch (f) {}
        } else b = [];
      return b
    }

    function wa(a, b) {
      if (xa && -1 !== a.indexOf(ya)) try {
        var c = new XMLHttpRequest;
        if ("withCredentials" in c) {
          c.onload = b;
          c.open("GET", a, k);
          c.withCredentials = k;
          c.send();
          return
        }
        xa = n;
        v("Tracker", "Found that XHR with credentials is not supported in this browser.")
      } catch (d) {
        v("Tracker", "XHR not supported"), xa = n
      }
      var c = a,
        e = new Image;
      e.onload = b;
      c = c.replace("&" + ya, "");
      e.src = c;
      za.push(e)
    }

    function Aa(a) {
      var b = (a = a === k || "true" === a) ? "true" : "false";
      a ? (A("optimizelyOptOut", b, Ca), A("optimizelyBuckets", b, Ca), alert("You have successfully opted out of Optimizely for this domain.")) : (A("optimizelyOptOut", b, Ca), alert("You are NOT opted out of Optimizely for this domain."))
    }

    function pa() {
      oa();
      ja("engagement")
    }
    var ka = [],
      la = n;

    function ma() {
      var a = ["a=" + Da(), "d=" + Ea(), "y=" + !!q("ip_anonymization")];
      Fa && a.push("override=true");
      r(Ga(), function(b) {
        var c = B(b);
        a.push("x" + c + "=" + b)
      });
      r(Ha(), function(b, c) {
        a.push("s" + b + "=" + c)
      });
      var b = [];
      r(ka, function(a) {
        var c = [],
          d = [];
        a.name && (c.push("n=" + encodeURIComponent(a.name)), d = d.concat(ta(a.name)));
        if (a.type && "pageview" === a.type) {
          var d = d.concat(C.concat(E)),
            e = Ia;
          e && (e = B(e), d.push(e))
        }
        0 < d.length && c.push("g=" + d.join(","));
        a.options.anonymous !== k && c.push("u=" + Ja());
        xa && c.push(ya);
        c.push("t=" +
          +new Date);
        Ka && c.push("dtpc=" + Ka);
        if (a.options && a.options.a) {
          var d = ia(),
            f = a.options.h,
            d = La(d, function(a) {
              return !f[a]
            }),
            e = [];
          0 < d.length && (e = c.concat(["f=" + d.join(",")]), b.push(e.join("&")));
          c.push("v=" + encodeURIComponent(a.options.a));
          0 < w(f).length && (e = c.concat(["f=" + w(f).join(",")]), b.push(e.join("&")))
        } else c.push("f=" + ia().join(",")), b.push(c.join("&"));
        if ("custom" === a.type) try {
          var g = a.name,
            i = Ja(),
            l = y("optimizelyCustomEvents") || "{}";
          try {
            l = va(l)
          } catch (o) {
            l = {}
          }
          var Q = l[i] || (l[i] = []),
            Q = z(Q) ? Q : []; - 1 !==
            $.inArray(g, Q) && Q.splice($.inArray(g, Q), 1);
          Q.push(g);
          10 < Q.length && Q.shift();
          l[i] = Q;
          var a = 0,
            c = m,
            g = 0,
            sa;
          for (sa in l) l.hasOwnProperty(sa) && (a++, l[sa].length > g && sa !== i && (c = sa, g = l[sa].length));
          10 < a && c !== m && delete l[c];
          A("optimizelyCustomEvents", Ma(l), Ca)
        } catch (Ze) {}
      });
      var c = b.concat(ua());
      Na(c);
      var d = a.join("&"),
        c = Oa ? b : c;
      Oa = k;
      for (var e = 0, f = c.length; e < f; e++) {
        var g = c[e],
          i = d + "&" + g;
        v("Tracker", "Making a log request.");
        var l = Da(),
          o = q("log_host");
        l && (o = l.toString() + "." + o);
        l = document.location.protocol;
        "chrome-extension:" ===
        l && (l = "http:");
        wa(l + "//" + o + "/event?" + i, function() {
          for (var a = g, b = ua(), c = 0, d = b.length; c < d; c++)
            if (b[c] === a) {
              b.splice(c, 1);
              break
            } Na(b);
          v("Tracker", "Removed a pending log event from the pending events cookie.")
        })
      }
      ka = [];
      la = k
    }

    function Na(a) {
      for (var b = Ma(a); 1536 < b.length;) a = a.slice(0, -1), b = Ma(a);
      A("optimizelyPendingLogEvents", b, 15)
    }
    var za = [],
      Oa = n,
      ya = "wxhr=true",
      xa = k;

    function Pa() {
      var a = window.navigator,
        b = a.userAgent,
        c = Qa([{
          id: "gc",
          substring: "Chrome",
          g: "Chrome"
        }, {
          id: "safari",
          ia: a.vendor,
          substring: "Apple",
          g: "Version"
        }, {
          id: "ff",
          substring: "Firefox",
          g: "Firefox"
        }, {
          id: "opera",
          prop: window.opera,
          g: "Opera"
        }, {
          id: "ie",
          substring: "MSIE",
          g: "MSIE"
        }, {
          id: "ie",
          substring: "Trident",
          g: "rv"
        }], b),
        d = Qa([{
          id: "android",
          substring: "Android"
        }, {
          id: "blackberry",
          substring: "BlackBerry"
        }, {
          id: "ipad",
          substring: "iPad"
        }, {
          id: "iphone",
          substring: "iPhone"
        }, {
          id: "ipod",
          substring: "iPod"
        }, {
          id: "windows phone",
          substring: "Windows Phone"
        }], b),
        e = m,
        f = c.g;
      f && (e = Ra(b, f) || Ra(a.appVersion, f));
      return {
        L: c.id || "unknown",
        M: e || "unknown",
        fa: d.id || "unknown"
      }
    }

    function Ra(a, b) {
      var c = a.indexOf(b),
        d = m; - 1 !== c && (c += b.length + 1, d = parseFloat(a.substring(c)));
      return d
    }

    function Qa(a, b) {
      return r(a, function(a) {
        var d = a.ia || b;
        if (d && -1 !== d.indexOf(a.substring) || a.prop) return a
      }) || {}
    };

    function Ea() {
      return q("admin_account_id")
    }

    function Sa(a) {
      a = q("audiences", a, "segment_id");
      return !a ? m : a
    }

    function Ta() {
      if (!Ua) {
        var a = q("click_goals") || [];
        Ua = [];
        for (var b = 0, c = a.length; b < c; b++)
          for (var d = a[b], e = d.selector.split(","), f = 0, g = e.length; f < g; f++) {
            var i = e[f];
            i && (i = {
              event_name: d.event_name,
              selector: i
            }, "experiments" in d ? i.experiments = d.experiments : "url_conditions" in d && (i.url_conditions = d.url_conditions), "revenue" in d && (i.revenue = d.revenue), Ua.push(i))
          }
      }
      return Ua
    }

    function Va(a) {
      a = q("dimensions", a.toString(), "condition_type");
      return !a ? m : a
    }

    function ia() {
      var a = La(Wa(), Xa);
      ia = function() {
        return a
      };
      return a
    }

    function Ya(a) {
      var b = G(),
        c;
      for (c in b)
        if (Object.prototype.hasOwnProperty.call(b, c)) {
          var d = b[c];
          if (d && d.api_name === a) return String(c)
        } return m
    }

    function Za() {
      return q("experiments") || {}
    }

    function Wa() {
      return w(q("experiments") || {})
    }

    function $a(a) {
      return H(a, "manual") || n
    }

    function ab(a) {
      return H(a, "name") || "Exp " + a
    }

    function I(a) {
      return 'experiment "' + ab(a) + '" (' + a + ")"
    }

    function bb(a) {
      return H(a, "section_ids") || []
    }

    function cb(a) {
      return H(a, "variation_ids") || []
    }

    function Da() {
      return q("project_id")
    }

    function G() {
      return q("segments") || {}
    }

    function db(a, b) {
      for (var c = bb(a), d = 0; d < c.length; d++) {
        var e = eb(c[d]);
        if (fb(e, b)) return c[d]
      }
      return ""
    }

    function gb(a) {
      var b = {},
        c = q("public_suffixes") || {};
      r(c, function(a, c) {
        r(c, function(c) {
          b[c] = a
        })
      });
      gb = function(a) {
        return b[a] || ""
      };
      return gb.call(m, a)
    }

    function eb(a) {
      return q("sections", a, "variation_ids") || []
    }

    function hb(a) {
      var b = [];
      r(a.split("_"), function(a) {
        (a = q("variations", a, "code")) && b.push(a)
      });
      return b.join("\n")
    }

    function B(a) {
      var b = {};
      r(Wa(), function(a) {
        r(bb(a), function(d) {
          r(eb(d), function(d) {
            b[d] = a
          })
        });
        r(cb(a), function(d) {
          b[d] = a
        })
      });
      B = function(a) {
        return b[a.split("_")[0]] || ""
      };
      return B.call(m, a)
    }

    function ib(a) {
      var b = B(a),
        c = bb(b);
      if (0 === c.length) {
        c = cb(b);
        for (b = 0; b < c.length; b++)
          if (c[b] === a) return b
      } else {
        for (var a = a.split("_"), b = [], d = 0; d < c.length; d++)
          for (var e = eb(c[d]), f = 0; f < e.length; f++) e[f] === a[d] && b.push(f);
        if (b !== []) return b
      }
      return -1
    }

    function jb(a) {
      var b;
      return kb(a).join(b || ", ")
    }

    function kb(a) {
      var b = [];
      r(a.split("_"), function(a) {
        b.push(q("variations", a, "name") || "Var " + a)
      });
      return b
    }

    function Xa(a) {
      return !!H(a, "enabled")
    }

    function H(a, b) {
      return q("experiments", a, b)
    }

    function lb(a) {
      return H(a, "google_analytics")
    }

    function mb(a, b) {
      var c = H(a, "universal_analytics");
      return J(c) ? c[b] : m
    }

    function nb(a, b) {
      var c = H(a, "at_internet");
      return J(c) ? c[b] : m
    }

    function q(a) {
      var b = DATA;
      if (r(arguments, function(a) {
          a = b[a];
          if (J(a)) b = a;
          else return m
        }) !== m) return b
    }

    function ob(a, b) {
      return q("segments", a, b)
    }

    function pb() {
      var a = q("rum_sampling_rate");
      return J(a) ? a : 0.0010
    }
    var Ua = m;
    var K;

    function qb() {
      function a() {
        return K.L
      }
      K = K || Pa();
      qb = a;
      return a()
    }

    function rb() {
      function a() {
        return K.M
      }
      K = K || Pa();
      rb = a;
      return a()
    }

    function sb(a) {
      if (!a) return "";
      try {
        return a.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1]
      } catch (b) {
        return ""
      }
    }

    function Ja() {
      var a = y("optimizelyEndUserId");
      a || (a = "oeu" + +new Date + "r" + Math.random(), A("optimizelyEndUserId", a, Ca));
      return a
    }

    function tb() {
      var a = "";
      try {
        a = window.optimizely.data.visitor.ip
      } catch (b) {}
      return L(a)
    }

    function ub() {
      var a = {};
      try {
        a = window.optimizely.data.visitor.location
      } catch (b) {}
      a = a || {};
      return {
        city: L(a.city),
        continent: L(a.continent),
        country: L(a.country),
        region: L(a.region)
      }
    }

    function L(a) {
      if (!a) return "";
      a = a.toUpperCase();
      return "N/A" == a ? "" : a
    }

    function vb() {
      function a() {
        return K.fa
      }
      K = K || Pa();
      vb = a;
      return a()
    }

    function wb() {
      return xb ? "returning" : "new"
    }

    function yb() {
      var a = navigator.appVersion || "",
        b = ""; - 1 !== a.indexOf("Win") && (b = "Windows"); - 1 !== a.indexOf("Mac") && (b = "Mac"); - 1 !== a.indexOf("Linux") && (b = "Linux");
      return b
    }

    function zb(a) {
      M("User", "Setting current URL to %s", a);
      Ab = a
    }
    var Ab = j,
      xb = j;

    function Bb() {
      try {
        return window.performance.now() - (Cb || 0)
      } catch (a) {
        return (new Date).getTime() - (Cb || 0)
      }
    }
    var Cb = Bb();

    function Db(a) {
      var b = Eb;
      b.t[a] || (b.t[a] = Bb())
    }
    var Fb;
    try {
      Fb = !document.getElementsByTagName("body")[0]
    } catch (Gb) {
      Fb = m
    }
    var Hb = m;
    try {
      window.requestAnimationFrame(function() {
        Hb = Bb()
      })
    } catch (Ib) {}
    var Jb = /\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;

    function Kb() {
      try {
        var a = La(window.performance.getEntries(), function(a) {
          return !!Jb.test(a.name)
        })[0];
        if (!a) return m;
        var a = Lb({}, a),
          b;
        for (b in a) {
          var c = a[b];
          (0 === c || "string" === typeof c) && delete a[b]
        }
        return a
      } catch (d) {
        return m
      }
    }
    var Eb = new function() {
      this.t = {};
      this.aa = Math.random() < pb()
    };

    function Mb(a, b, c) {
      var d = a.split("?");
      if (d[1]) {
        var e = [];
        $.each(d[1].split("&"), function() {
          0 !== this.indexOf(Nb) && e.push(this)
        });
        d[1] = e.join("&");
        a = d.join("?")
      }
      switch (c) {
        case "exact":
          return a = Ob(a), a === Ob(b);
        case "regex":
          try {
            return Boolean(a.match(b))
          } catch (f) {
            return n
          }
          case "simple":
            return a = Ob(Pb(a)), b = Ob(Pb(b)), a === b;
          case "substring":
            return a = Ob(a, k), b = Ob(b, k), -1 !== a.indexOf(b);
          default:
            return n
      }
    }

    function Pb(a) {
      var b = a.indexOf("?"); - 1 !== b && (a = a.substring(0, b));
      b = a.indexOf("#"); - 1 !== b && (a = a.substring(0, b));
      return a
    }

    function Ob(a, b) {
      var a = a.replace("/?", "?"),
        a = a.toLowerCase().replace(/[/&?]+$/, ""),
        c = Qb.slice(0);
      b || (c = c.concat(Rb));
      for (var d = c.length, e = 0; e < d; e++) a = a.replace(RegExp("^" + c[e]), "");
      return a
    }
    var Qb = ["https?://.*?.?optimizelyedit.(com|test)/", "https?://.*.?optimizelypreview.(com|test)/", "https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/", "https?://.*?.?optimizelyedit(-hrd)?.appspot.com/", "https?://"],
      Rb = ["www."],
      Nb = "optimizely_";

    function Sb(a) {
      a = a || {};
      if (u) {
        a && a.sVariable && (Tb = a.sVariable);
        var b = Tb || ("undefined" !== typeof window.s ? window.s : m);
        if (b)
          if (Ub) {
            if ((a = Vb) && b) try {
              M("Integrator", "Fixing SiteCatalyst referrer to %s", a), b.referrer = String(a)
            } catch (c) {
              M("Integrator", "Error setting SiteCatalyst referrer: %s", c)
            }
            M("Integrator", "Tracking with SiteCatalyst");
            r(Wb(), function(a) {
              var c = B(a),
                a = N(c, a, 100, 100, 25, k),
                f = a.key + ": " + a.value,
                a = [],
                g = H(c, "site_catalyst_evar") || m,
                c = H(c, "site_catalyst_prop") || m;
              g !== m && a.push("eVar" + g);
              c !==
                m && a.push("prop" + c);
              r(a, function(a) {
                M("Integrator", "Setting SiteCatalyst %s='%s'", a, f);
                b[a] = f
              })
            })
          } else Xb = k;
        else v("Integrator", "Error with SiteCatalyst integration: 's' variable not defined")
      }
    }

    function Yb(a) {
      a = ha(a) ? Number(a) : -1;
      if (-1 !== [1, 2, 3].indexOf(a)) Zb = a;
      else return Zb
    }

    function $b() {
      if (u) {
        var a = Vb;
        if (a) try {
          M("Integrator", "Fixing _gaq._setReferrerOverride with %s", a), _gaq.push(["_setReferrerOverride", a])
        } catch (b) {
          M("Integrator", "Error setting Google Analytics referrer: %s", b)
        }
        r(Wb(), function(a) {
          var b = B(a);
          if (H(b, "chartbeat")) {
            var c = ac;
            ac = "";
            var g = N(b, a, 10, 10, 5, n);
            ac = c;
            c = ib(a);
            bc = g.key + ": " + String(c);
            try {
              M("Integrator", "Calling _cbq.push"), _cbq.push(["_optlyx", bc])
            } catch (i) {
              v("Integrator", "Error sending Chartbeat data for " + I(b))
            }
          }
          if (H(b, "crazyegg")) {
            g = N(b, a, 100,
              100, 15, n);
            try {
              M("Integrator", "Defining CE_SNAPSHOT_NAME"), window.CE_SNAPSHOT_NAME = g.key + ": " + g.value
            } catch (l) {
              v("Integrator", "Error sending CrazyEgg data for " + I(b))
            }
          }
          if (lb(b)) {
            g = lb(b);
            c = 0;
            J(g) && (c = g.slot || c);
            var g = c,
              c = lb(b),
              o = "";
            J(c) && (o = c.tracker || o);
            c = o;
            o = N(b, a, 28, 24, 5, k);
            try {
              var t = "";
              "" !== c && (t = c + ".");
              M("Integrator", "Calling _gaq._setCustomVar for slot %d and scope %d", g, Zb);
              _gaq.push([t + "_setCustomVar", g, o.key, o.value, Zb])
            } catch (x) {
              v("Integrator", "Error sending Google Analytics data for " + I(b))
            }
          }
          if (q("kissmetrics")) {
            g =
              N(b, a, 100, 100, 15, k);
            c = {};
            c[g.key] = g.value;
            try {
              M("Integrator", "Calling _kmq.set"), _kmq.push(["set", c])
            } catch (D) {
              v("Integrator", "Error sending KISSmetrics data for " + I(b))
            }
          }
          if (H(b, "mixpanel")) {
            g = N(b, a, 100, 100, 15, n);
            c = {};
            c[g.key] = g.value;
            try {
              M("Integrator", "Calling mixpanel.push"), mixpanel.push(["register", c])
            } catch (da) {
              v("Integrator", "Error sending Mixpanel data for " + I(b))
            }
          }
          if (nb(b, "acct_no")) {
            g = nb(b, "acct_no");
            c = nb(b, "url");
            o = N(b, a, 28, 24, 5, k);
            a = c + "/hit.xiti?s=" + g + "&abmvc=" + (b + "[" + encodeURIComponent(o.key) +
              "]-0-" + a + "[" + encodeURIComponent(o.value) + "]") + "&type=mvt";
            try {
              M("Integrator", "Sending AT Internet log call for account %s", g), wa(a, m)
            } catch (Ba) {
              v("Integrator", "Error sending AT Internet data for " + I(b))
            }
          }
        });
        a = y("optimizelyChartbeat") || "";
        try {
          if (a && bc != a && (M("Integrator", "Calling _cbq.push for referral"), _cbq.push(["_optlyr", a])), bc != a) M("Integrator", "Set new Chartbeat referral cookie."), A("optimizelyChartbeat", bc)
        } catch (c) {
          v("Integrator", "Error sending Chartbeat referral for " + a)
        }
        Ub = k;
        cc && (dc(), cc =
          n);
        Xb && (Sb(), Xb = n)
      }
    }

    function ec() {
      if (window.ClickTaleContext) {
        try {
          window.ClickTaleContext.getAggregationContextAsync("1", function(a) {
            a.Location && window.optimizely.push(["overrideUrl", a.Location]);
            for (var b in a.PageEvents) {
              var e = a.PageEvents[b][2].match(/x[0-9]+=[0-9_]+/g);
              M("Integrator", "Playback ClickTale Integration - %s", e);
              for (b = 0; b < e.length; b++) {
                M("Integrator", "Playback ClickTale Integration - %s", e[b]);
                for (var f = e[b].split("=")[0].substr(1), g = e[b].split("=")[1].split("_"), i = 0; i < g.length; i++) fc(g[i]) ? M("Integrator",
                  "Skip activation for redirect.") : window.optimizely.push(["activate", f, g[i], {
                  force: k
                }])
              }
            }
          })
        } catch (a) {
          M("Integrator", "Playback ClickTale Aggregation Integration failed.")
        }
        try {
          window.ClickTaleContext.getRecordingContextAsync("1.1", function(a) {
            if (a.inSingleRecordingScope) {
              a.location && window.optimizely.push(["overrideUrl", a.location]);
              M("Integrator", "Playback ClickTale getRecordingContextAsync callback");
              for (var b in a.fields) M("Integrator", "Playback ClickTale Integration - %s=%s", b, a.fields[b]), fc(a.fields[b]) ?
                M("Integrator", "Skip activation for redirect.") : window.optimizely.push(["activate", b, a.fields[b], {
                  force: k
                }])
            }
          })
        } catch (b) {
          M("Integrator", "Playback ClickTale Recording Integration failed.")
        }
      } else M("Integrator", "ClickTaleContext not defined.")
    }

    function gc() {
      M("Integrator", "Tracking with ClickTale.");
      "function" == typeof window.ClickTaleField ? r(Wb(), function(a) {
        var b = B(a),
          c = N(b, a, 100, 100, 15, n),
          c = c.key + ": " + c.value + " (x" + b + "=" + a + ")";
        M("Integrator", "Setting ClickTale - %s", c);
        window.ClickTaleField(b, a);
        window.ClickTaleEvent(c)
      }) : M("Integrator", "ClickTaleField() not defined.")
    }

    function hc(a) {
      ac = a
    }

    function ic(a) {
      Tb = a
    }

    function jc(a, b) {
      return a.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g, "_").substring(0, b)
    }

    function Wb() {
      var a = C.concat(E),
        b = [];
      r(Ga(), function(c) {
        var e = B(c),
          f = n;
        if (Xa(e)) {
          var g = jb(c);
          fb(a, e) && (M("Integrator", '"%s" relevant because experiment active', g), f = k);
          f && b.push(c)
        }
      });
      var c = Ia;
      c && b.push(c);
      return b
    }

    function fc(a) {
      return (a = kc(hb(a))) ? a[1] : m
    }

    function dc() {
      if (u)
        if (Ub) {
          var a = window.ga;
          if (a) {
            var b = Vb;
            if (b) try {
              M("Integrator", "Fixing Universal Analytics set referrer with %s", b);
              for (var c = ga.getAll(), d = 0; d < c.length; ++d) c[d].set("referrer", b)
            } catch (e) {
              M("Integrator", "Error setting Universal Analytics referrer: %s", e)
            }
            M("Integrator", "Tracking with Universal Analytics");
            r(Wb(), function(b) {
              var c = B(b);
              if (mb(c, "slot")) {
                var d = mb(c, "slot"),
                  e = mb(c, "tracker"),
                  o = N(c, b, 100, 100, 25, k),
                  b = o.key + " (" + c + "): " + o.value;
                150 < b.length && (b = o.key.substring(0, 80) + " (" +
                  c + "): " + o.value, b = b.substring(0, 149));
                c = e ? e + "." : "";
                M("Integrator", "Calling ua set dimension - ga(%sset, dimension%d, %s)", c, d, b);
                a(c + "set", "dimension" + d, b)
              }
            })
          } else v("Integrator", "Error with Universal Analytics integration: 'ga' variable not defined")
        } else cc = k
    }

    function N(a, b, c, d, e, f) {
      a = ac + ab(a);
      b = kb(b);
      1 < b.length ? (b = $.map(b, function(a) {
        return a.substr(0, e - 1)
      }), b = b.join("~")) : b = b[0];
      f ? (a = jc(a, c), b = jc(b.replace("#", ""), d)) : (a = a.substring(0, c), b = b.substring(0, d));
      return {
        key: a,
        value: b
      }
    }
    var cc = n,
      Xb = n,
      bc = "",
      Zb = 2,
      Ub = n,
      ac = "Optimizely ",
      Tb = m;
    var lc, mc;

    function nc(a, b, c) {
      if (!O) return n;
      var d = "number" === typeof b || "string" === typeof b ? String(b) : m,
        e = b === k || b && b.force === k || c && c.force === k,
        c = ("object" === typeof b ? b : c) || {},
        f = c.skip === k,
        b = c.skipPageview === k,
        g = c.enabledStatus;
      if (d) try {
        oc(a, d, k)
      } catch (i) {
        v("API", "Error while activating experiment " + a + " for variation " + d + " -- proceeding without bucketing user.")
      }
      var l = m,
        o = [],
        t = [];
      ha(a) ? o.push(a) : r(Wa(), function(a) {
        $a(a) && o.push(a)
      });
      v("API", "Testing experiments to activate");
      r(o, function(a) {
        if (!e && !pc(a)) qc(a);
        else if (e || rc(a, {
            manualMode: k,
            objectType: "experiment",
            enabledStatus: g,
            visitor: R
          }))(l = sc(a, f)) && t.push(a)
      });
      tc(t, o);
      uc();
      $b();
      O && !b && ja(document.location.href, "pageview")
    }

    function vc() {
      if (!O) return n;
      v("API", "Testing geodelayed segments");
      r(wc, function(a) {
        xc(a)
      });
      var a = m,
        b = yc,
        c = [];
      v("API", "Testing geodelayed experiments");
      r(b, function(b) {
        rc(b, {
          manualMode: k,
          objectType: "experiment",
          visitor: R
        }) && (a = sc(b)) && c.push(b)
      });
      tc(c, b);
      uc();
      $b();
      O && !zc && ja(document.location.href, "pageview");
      yc = [];
      wc = [];
      window.optimizelyGeo = {};
      Ac("Geo Activating");
      return k
    }

    function qc(a) {
      Db("geo");
      Bc("Geo Activating");
      yc.push(a)
    }

    function Cc(a, b) {
      var c = Ya(a) || a,
        d = G()[c];
      d ? d.audience_id ? R.k(d.audience_id, n) : d.dimension_id ? R.q(d.dimension_id, b || k, n) : Dc(c, b) : v("API", "Unable to find segment: " + c)
    }

    function oc(a, b, c) {
      Fa = k;
      O && c !== k && ja(document.location.href);
      var a = String(a),
        b = String(b),
        d = m,
        e = b.split("_"),
        f = bb(a),
        b = f && 0 !== f.length;
      if ("-1" === e[0]) {
        c = a;
        Ec[c] && delete Ec[c];
        Fc[c] && delete Fc[c];
        for (e = 0; e < S.length; e++) S[e].l === c && S.splice(e, 1);
        Gc()
      } else if (b && e.length == f.length) d = [], r(e, function(a, b) {
        256 >= Number(a) ? d.push(eb(f[b])[a]) : d.push(a)
      }), d = d.join("_");
      else if (!b && 1 == e.length && 256 >= Number(e[0])) {
        var c = String,
          e = e[0],
          g = cb(a),
          i = m;
        try {
          i = g[e]
        } catch (l) {}
        d = c(i)
      } else 1 == e.length ? d = e[0] : v("API", "Error: could not bucket user. Unknown arguments.");
      d && (b && db(a, d) ? (b = d, c = db(a, b), Hc[a] = Hc[a] || {}, Hc[a][c] = b, v("Distributor", "Preferring variation partial " + b + " of section " + c + " of experiment " + a), a = Ic(a), 1 === a.length && Jc(a[0], "api.bucketUser", k)) : Jc(d, "api.bucketUser", k));
      uc()
    }

    function Kc(a) {
      a && "tracking" === a || (O = n);
      u = n
    }

    function Lc() {
      v("API", "Finalizing API.");
      Mc();
      lc = k
    }

    function Nc(a, b) {
      var c = [],
        d = b;
      z(b) && (c = Oc(b, 1), d = b[0]);
      var e = a[d];
      e ? (v("API", 'Called function "' + d + '"'), e.apply(m, c)) : v("API", 'Error for unknown function "' + d + '"');
      Pc()
    }

    function Qc(a, b) {
      lc ? v("API", "Error: can't add custom tags after Optimizely loads") : (mc = mc || {}, 2 == arguments.length ? mc[a] = b : 1 == arguments.length && $.extend(k, mc, a))
    }

    function Rc(a, b) {
      var c = Ya(a) || a,
        b = J(b) ? b : k,
        d = G()[c];
      d ? d.audience_id ? R.p(d.audience_id, n) : d.dimension_id ? R.q(d.dimension_id, m) : Sc(c, b) : v("API", "Unable find segment for: " + c)
    }

    function Tc() {
      var a = w(G());
      r(a, function(a) {
        Rc(a, n)
      });
      Uc()
    }

    function Mc() {
      Vc = {};
      Wc = {};
      Xc = {};
      r(Ga(), function(a) {
        var b = B(a);
        Vc[b] = a.split("_");
        Wc[b] = ib(a);
        Xc[b] = jb(a)
      });
      T = {};
      var a = q("audiences");
      a && (T.audiences = a);
      T.experiments = {};
      T.sections = {};
      T.segments = {};
      T.state = {};
      T.variations = {};
      T.visitor = {};
      T.customTags = mc;
      for (var b = Wa(), a = 0; a < b.length; a++) {
        var c = b[a],
          d = {};
        d.code = H(c, "code") || "";
        d.name = ab(c);
        d.manual = $a(c);
        d.section_ids = bb(c);
        d.variation_ids = cb(c);
        T.experiments[c] = d
      }
      b = w(G());
      for (a = 0; a < b.length; a++) c = b[a], T.segments[c] = {
        name: ob(c, "name") || "Seg " + c
      };
      b =
        w(q("sections") || {});
      for (a = 0; a < b.length; a++) c = b[a], d = {}, d.name = q("sections", c, "name") || "Sec " + c, d.variation_ids = eb(c), T.sections[c] = d;
      b = w(q("variations") || {});
      for (a = 0; a < b.length; a++) c = b[a], d = {}, d.name = jb(c), d.code = hb(c), T.variations[c] = d;
      b = {};
      a = qb();
      b.browser = {
        ff: "Firefox",
        ie: "Internet Explorer",
        safari: "Safari",
        gc: "Google Chrome",
        opera: "Opera"
      } [a] || "";
      b.location = ub();
      b.ip = tb();
      b.params = {};
      c = Yc();
      c.reverse();
      a = 0;
      for (d = c.length; a < d; a++) try {
        b.params[Zc(c[a][0])] = Zc(c[a][1])
      } catch (e) {
        v("API", "Failed to decode parameter " +
          c[a][0] + "=" + c[a][1])
      }
      b.referrer = String(document.referrer);
      b.segments = Ha();
      b.mobile = "unknown" !== vb();
      b.os = yb();
      b.dimensions = R.d;
      b.audiences = R.b;
      T.visitor = b;
      a = {};
      a.activeExperiments = C || [];
      a.variationIdsMap = Vc;
      a.variationMap = Wc;
      a.variationNamesMap = Xc;
      T.state = a;
      Lb(window.optimizely, {
        activeExperiments: C,
        allExperiments: Za(),
        all_experiments: Za(),
        data: T,
        variationIdsMap: Vc,
        variationMap: Wc,
        variationNamesMap: Xc,
        variation_map: Wc
      })
    }

    function $c(a) {
      if (!ha(a)) return n;
      ad = Number(a)
    }

    function bd() {
      Ka = k
    }

    function cd(a) {
      var b = "";
      "number" !== typeof a ? (b = "must be a number.", a = 31536E4) : a = Math.floor(86400 * a);
      7776E3 > a && (b = "less then minimum.", a = 7776E3);
      v("API", (b && "Days argument " + b) + " Cookie expiration set to " + a + " seconds.");
      Ca = a;
      dd()
    }

    function ed() {
      zc = k
    }

    function fd() {
      y("optimizelyReportableFix") ? v("API", "skipping because cookie is set") : (r(q("audiences"), function(a) {
        Sa(a) && (v("API", "Removing from reportable audience: " + a), R.p(a, n))
      }), A("optimizelyReportableFix", "1", 7776E3))
    }
    var T = {},
      yc = [],
      wc = [],
      Vc = {},
      Wc = {},
      Xc = {},
      R = m;
    var gd = Math.pow(2, 32);

    function sc(a, b) {
      var b = b === k,
        c, d = m;
      r(S, function(b) {
        a == b.l && (d = b.id)
      });
      if ((c = d) && 0 < c.length) return v("Distributor", "Not distributing experiment " + a + " (already in plan)"), k;
      if (b || a in Ec) return v("Distributor", "Not distributing experiment " + a + " (is ignored)"), n;
      c = H(a, "enabled_variation_ids") || [];
      if (0 === c.length) return v("Distributor", "Permanently ignoring experiment " + a + " (no enabled variations)"), hd(a), n;
      var e = H(a, "ignore") || 0;
      if (e > Math.floor(100 * id(a, 0))) return v("Distributor", "Permanently ignoring experiment " +
        a + "(" + e + "% likelihood)"), hd(a), n;
      e = c;
      Hc[a] !== j && (v("Distributor", "Taking into account bucketUser variations for experiment " + a), e = Ic(a));
      var f;
      f = e;
      var g = [],
        i = H(a, "variation_weights") || {};
      r(f, function(a) {
        g.push(i[a])
      });
      f = jd(a, g);
      e = e[f];
      v("Distributor", "Picked variation " + e + " [index " + f + " of " + c.length + "]");
      Jc(e, "distributor");
      return k
    }

    function id(a, b) {
      function c(a, b) {
        var c = b & 65535;
        return ((b - c) * a | 0) + (c * a | 0) | 0
      }
      for (var d = Ja() + a, e = d.length, f = b || 0, g = e & -4, i, l = 0; l < g; l += 4) i = d.charCodeAt(l) & 255 | (d.charCodeAt(l + 1) & 255) << 8 | (d.charCodeAt(l + 2) & 255) << 16 | (d.charCodeAt(l + 3) & 255) << 24, i = c(i, 3432918353), i = (i & 131071) << 15 | i >>> 17, i = c(i, 461845907), f ^= i, f = (f & 524287) << 13 | f >>> 19, f = 5 * f + 3864292196 | 0;
      i = 0;
      switch (e % 4) {
        case 3:
          i = (d.charCodeAt(g + 2) & 255) << 16;
        case 2:
          i |= (d.charCodeAt(g + 1) & 255) << 8;
        case 1:
          i |= d.charCodeAt(g) & 255, i = c(i, 3432918353), f ^= c((i & 131071) << 15 |
            i >>> 17, 461845907)
      }
      f ^= e;
      f = c(f ^ f >>> 16, 2246822507);
      f = c(f ^ f >>> 13, 3266489909);
      return ((f ^ f >>> 16) >>> 0) / gd
    }

    function jd(a, b) {
      var c = b.length;
      if (0 === c) return m;
      if (1 === c) return 0;
      for (var d = 0, e = 0; e < c; e++) d += b[e];
      d *= id(a, 1);
      for (e = 0; e < c; e++) {
        if (d < b[e]) return e;
        d -= b[e]
      }
      return Math.floor(id(a, 2) * c)
    }

    function Ic(a) {
      var b = [];
      r(H(a, "enabled_variation_ids") || [], function(c) {
        var d = k,
          e;
        for (e in Hc[a]) - 1 === c.indexOf(Hc[a][e]) && (d = n);
        d && b.push(c)
      });
      return b
    }
    var Hc = {};

    function Yc() {
      var a = window.location.search || "";
      0 === a.indexOf("?") && (a = a.substring(1));
      for (var a = a.split("&"), b = [], c = 0; c < a.length; c++) {
        var d = "",
          e = "",
          f = a[c].split("=");
        0 < f.length && (d = f[0]);
        1 < f.length && (e = f[1]);
        b.push([d, e])
      }
      return b
    }

    function kd() {
      for (var a = window.location.search, b, c = /optimizely_([^=]+)=([^&]*)/g, d = {}; b = c.exec(a);) d[b[1]] = Zc(b[2]);
      return d
    }
    var ld = /x(\d+)/;

    function md(a) {
      return a && -1 !== String(a).indexOf("[native code]")
    };

    function kc(a) {
      return a.match(/_optimizely_redirect(?:_no_cookie)?=(\S+)/)
    }

    function nd(a) {
      return -1 !== a.indexOf("_optimizely_redirect_no_cookie")
    }

    function od(a) {
      var a = a || "",
        b = y("optimizelyRedirect");
      return nd(a) || !b || b && "true" === b.split("|")[1] ? k : n
    }
    var Vb = m,
      Ia = "";
    var pd = window.OPTIMIZELY_TEST_MODULE,
      qd = "com local net org xxx edu es gov biz info fr nl ca de kr it me ly tv mx cn jp il in iq test".split(" "),
      rd = /\/\*\s*_optimizely_variation_url( +include="([^"]*)")?( +exclude="([^"]*)")?( +match_type="([^"]*)")?( +include_match_types="([^"]*)")?( +exclude_match_types="([^"]*)")?( +id="([^"]*)")?\s*\*\//;
    var ad = 0,
      O = k,
      sd = n,
      Ka = n,
      td = "",
      ud = n,
      U = "",
      vd = n,
      V = n,
      wd = n,
      Fa = n,
      zc = n,
      u = k,
      Ca = 31536E4;

    function xd(a) {
      var b = a || yd;
      v("Segmenter", "Loading segments cookie.");
      if (a = y("optimizelySegments")) {
        try {
          a = va(a)
        } catch (c) {
          a = {}
        }
        r(a, function(a, c) {
          var d = G()[a];
          v("Segmenter", "Segments cookie contains segment id: " + a);
          d && d.audience_id ? b.k(d.audience_id, n) : d && d.dimension_id ? b.q(d.dimension_id, c, n) : W[a] = c
        })
      }
      v("Segmenter", "Evaluating all segments.");
      for (var a = w(G()), d = 0; d < a.length; d++) {
        var e = a[d];
        ob(e, "is_api_only") ? v("Segmenter", "Not doing anything since segment " + e + " is api only.") : (v("Segmenter", "Testing whether to add to segment " +
          e), pc(e) ? xc(e) : wc.push(e))
      }
      zd.push(dd);
      Uc();
      v("Integrator", "Loading third-party segments.");
      if (window.bk_results) {
        a = window.bk_results;
        v("Integrator", "Loading BlueKai segments.");
        try {
          r(a.campaigns, function(a) {
            a = a.seg_id;
            G()[a] ? Dc(a, k) : q("audiences", a) && b.k(a)
          })
        } catch (f) {
          v("Integrator", "Error loading BlueKai segments.")
        }
      }
    }

    function dd() {
      var a = {};
      r(W, function(b, c) {
        c && (a[b] = c)
      });
      A("optimizelySegments", Ma(a), Ca)
    }

    function Dc(a, b) {
      a && !isNaN(parseInt(a, 10)) ? (!b && "" !== b && (b = k), W[a] = b, Uc()) : v("Segmenter", "Unable to find segment for ID: " + a)
    }

    function Uc() {
      r(zd, function(a) {
        a()
      })
    }

    function xc(a) {
      v("Segmenter", "Evaluating Segment " + a);
      var b = rc(a, {
        objectType: "segment"
      });
      Ad(a, "add");
      if (b) {
        a: {
          var c = b = m;
          switch (ob(a, "segment_value_type") || "") {
            case "browser":
              b = X.C();
              c = "unknown";
              break;
            case "campaign":
              b = X.S();
              c = "none";
              break;
            case "country":
              b = X.n().country;
              c = "unknown";
              break;
            case "language":
              b = X.u();
              c = "none";
              break;
            case "mobile":
              b = "unknown" !== X.G();
              break;
            case "os":
              b = X.V();
              c = "unknown";
              break;
            case "referrer":
              b = X.W();
              c = "none";
              break;
            case "source_type":
              b = X.X();
              c = "direct";
              break;
            default:
              b = "true";
              break a
          }
          if (b === m) {
            if (W.hasOwnProperty(a)) {
              b = m;
              break a
            }
            b = c
          }
          b = Bd(b)
        }
        b !== m && Dc(a, b)
      }
    }

    function Cd() {
      var a = X.w();
      if (X.f("utm_source") || X.f("gclid") || X.f("otm_source")) return "campaign";
      for (var b = ["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)", "https://(www)?\\.google\\..*?/$", "bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)", "yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search", "baidu\\.\\w{2,3}(\\.\\w{2,3})?/s?"], c = 0; c < b.length; c++)
        if (a.match(b[c])) return "search";
      return a && sb(a) !== sb(X.m()) ? "referral" : m
    }

    function Dd() {
      var a = [];
      r(W, function(b, c) {
        c && a.push(b)
      });
      return a
    }

    function Ha() {
      var a = {};
      r(W, function(b, c) {
        c && (a[String(b)] = c)
      });
      return a
    }

    function Ed(a) {
      return r(W, function(b, c) {
        if ((ob(b, "segment_value_type") || "") == a) return c
      })
    }

    function Sc(a, b) {
      var c = Ya(a) || a;
      W[c] ? (W[c] = n, ("undefined" === typeof b || b) && Uc()) : v("Segmenter", "Not removing " + a + ", not found")
    }

    function Bd(a, b) {
      var c, b = J(b) ? b : k;
      c = c || Fd;
      a = Zc(a);
      a = String(a);
      b && (a = a.toLowerCase());
      a = a.substring(0, c);
      return encodeURIComponent(a)
    }
    var Ad = aa,
      zd = [],
      W = {},
      Fd = 20;

    function Jc(a, b, c) {
      var d;
      d = n === k;
      var c = c === k,
        e = n,
        f = B(a);
      if (f && (c || !Gd(f))) {
        e = k;
        if (c && Gd(f))
          for (c = 0; c < S.length; c++) S[c].l === f && S.splice(c, 1);
        S.push({
          l: f,
          id: a,
          source: b
        });
        d && (E = E || [], E.push(f));
        Fc[f] = k;
        Gc();
        v("Plan", "Added experiment " + f + " and variation id " + a + " to the plan, source is " + b, k)
      }
      return e
    }

    function Gd(a) {
      return a in Ec || a in Fc
    }

    function Ga(a) {
      var b = [],
        c = !J(a),
        a = a || [];
      r(S, function(d) {
        (c || fb(a, d.l)) && b.push(d.id)
      });
      return b
    }

    function hd(a) {
      var b;
      if (b === k || !Gd(a)) Ec[a] = k, Gc()
    }

    function uc() {
      var a = {};
      r(Hd, function(b, c) {
        a[b] = c
      });
      r(S, function(b) {
        var c = B(b.id);
        a[c] = b.id
      });
      r(Ec, function(b) {
        a[b] = "0"
      });
      r(q("blacklisted_experiments") || {}, function(b) {
        b in a && delete a[b]
      });
      A("optimizelyBuckets", Ma(a), Ca)
    }

    function Gc() {
      r(Id, function(a) {
        a()
      })
    }

    function Jd(a, b, c, d) {
      if (-1 !== a.indexOf("_optimizely_redirect")) b.push({
        code: a,
        type: "code forced (redirect)",
        r: d
      });
      else {
        for (var a = a.split("\n"), e = n, f = n, g = [], i = []; 0 < a.length;) {
          var l;
          l = a.shift().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
          var o = 0 < i.length;
          if (l)
            if (Boolean(l.match(/_optimizely_evaluate\s{0,9}=\s{0,9}force/i))) f = k;
            else if (Boolean(l.match(/_optimizely_evaluate\s{0,9}=\s{0,9}safe/i)) || Boolean(l.match(/_optimizely_evaluate\s{0,9}=\s{0,9}end_force/i))) f = n;
          else if (Boolean(l.match(/_optimizely_evaluate\s{0,9}=\s{0,9}editor_only/i))) e =
            k;
          else if (Boolean(l.match(/_optimizely_evaluate\s{0,9}=\s{0,9}end_editor_only/i))) e = n;
          else if (!Kd.exec(l) && !e)
            if (f) g.push(l);
            else {
              if (!o) {
                var t = Ld.exec(l),
                  x = [];
                t ? (x.push(t[1].replace(/^['"]|['"]$/g, "")), (t = Md.exec(l)) && 4 < t.length && x.push(t[4]), c.push({
                  code: l,
                  c: x,
                  type: "safe jquery",
                  j: k,
                  r: d
                })) : o = k
              }
              o && i.push(l)
            }
        }
        0 < g.length && b.push({
          code: g.join("\n"),
          type: "forced evaluation",
          r: d
        });
        0 < i.length && c.push({
          code: i.join("\n"),
          type: "safe non-jquery",
          ja: k,
          r: d
        })
      }
    }

    function Nd(a, b, c) {
      for (var d = {
          values: []
        }, e = 0, f = a.length; e < f; e++) d.values.push({
        value: a[e],
        match: b[e] || c
      });
      return d
    }
    var Id = [],
      Hd = {},
      Ec = {},
      Md = /^\$j?\(['"](.+?)['"]\)\.detach\(\)\.(appendTo|insertAfter|insertBefore|prependTo)\(['"](.+?)['"]\);(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/,
      Kd = /^(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/,
      Ld = /^\$j?\((['"].+?['"]|document)\)\..+;(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/,
      Fc = {},
      S = [];

    function Od(a, b) {
      if (a && b)
        if (Pd) v("Evaluator", "Bound event " + b + " to selector " + a), Qd(a, b);
        else {
          var c = {
            e: b,
            c: a,
            type: "event '" + b + "' (click goal)",
            j: k
          };
          v("Evaluator", "Add step to bind event " + c.e + " to selector " + c.c);
          Rd.push(c)
        }
    }

    function tc(a, b) {
      if (O) {
        z(a) ? Sd(a) : (a = [], Sd(b));
        a = a.concat(E);
        E = [];
        for (var c = 0; c < a.length; c++) fb(C, a[c]) || C.push(a[c]);
        c = a;
        c === j ? c = [] : ha(c) && (c = [c]);
        for (var d = Ga(c), e = [], f = [], g = [], i = [], l = La(Ta(), function(a) {
            return a.experiments ? n : Td(a.url_conditions || [])
          }), o = 0, t = l.length; o < t; o++) {
          var x = {
            e: l[o].event_name,
            c: l[o].selector,
            type: "event '" + l[o].event_name + "' (click goal)",
            j: k
          };
          "revenue" in l[o] && (x.revenue = l[o].revenue);
          e.push(x)
        }
        r(c, function(a) {
          var b = {},
            c = H(a, "events") || {};
          r(c, function(a, c) {
            b[a] = [c]
          });
          var c = La(Ta(), function(b) {
              return "experiments" in b ? a in b.experiments : n
            }),
            d = 0;
          for (; d < c.length; d++) {
            var l = c[d];
            b[l.selector] || (b[l.selector] = []);
            b[l.selector].push({
              eventName: l.event_name,
              revenue: l.revenue,
              experimentIds: l.experiments
            })
          }
          r(b, function(b, c) {
            r(c, function(c) {
              e.push({
                e: c.eventName,
                h: c.experimentIds,
                a: c.revenue,
                c: b,
                type: "event '" + c.eventName + "' (experiment " + a + ")",
                j: k
              })
            })
          });
          c = H(a, "css") || "";
          d = H(a, "code") || "";
          c && g.push({
            code: '$("body").append("<style>' + c.replace(/([\f\n\r\t\\'"])/g, "\\$1") +
              '</style>");',
            c: "body",
            type: "global css (experiment " + a + ")",
            j: k
          });
          d && Jd(d, f, i)
        });
        r(d, function(a) {
          for (var b = hb(a), b = b.split("\n"), c = [], d = k, e = 0, g = b.length; e < g; e++) {
            var l = $.trim(b[e]);
            if (l === "/* _optimizely_variation_url_end */") d = k;
            else if (l !== "") {
              var o = rd.exec(l);
              if (o && o.length === 13) {
                var t = o[2] ? o[2].split(" ") : [],
                  l = o[4] ? o[4].split(" ") : [],
                  x = o[6] ? o[6] : "substring",
                  Zd = o[8] ? o[8].split(" ") : [],
                  o = o[10] ? o[10].split(" ") : [];
                if (t.length > 0) {
                  d = Nd(t, Zd, x);
                  d = Td(d)
                }
                if (d && l.length > 0) {
                  d = Nd(l, o, x);
                  d = !Td(d)
                }
              } else d &&
                c.push(l)
            }
          }
          b = c.join("\n");
          Jd(b, f, i, a)
        });
        c = [];
        c.push.apply(c, f);
        c.push.apply(c, g);
        c.push.apply(c, i);
        c.push.apply(c, e);
        Rd.push.apply(Rd, c);
        Ud()
      }
    }

    function Ud() {
      var a = n;
      Vd = m;
      for (v("Evaluator", Wd + " times waited"); !a && 0 < Rd.length;) {
        v("Evaluator", Rd.length + " steps remaining");
        var b = Rd.shift(),
          c = b,
          a = n;
        if (c.ja && !Pd) v("Evaluator", "Document not ready yet"), a = k;
        else if (c.j && !Pd && (c = c.c))
          for (var c = z(c) ? c : [c], d = 0; d < c.length; d++) {
            var e = c[d];
            if (!(e === m || e === j || !e.length))
              if (0 === ("document" == e ? $(document) : $(e)).length) v("Evaluator", "'" + e + "' not found"), a = k
          }
        a ? Rd.unshift(b) : b.e ? (Xd(), Bc("Bind Events"), v("Evaluator", "Bound event " + b.e + " to selector " + b.c),
          c = {}, b.a && (c = {
            a: b.a,
            h: b.h
          }), Qd(b.c, b.e, c)) : b.code && (v("Evaluator", "Run code: " + b.code), Yd(b.code, b.r))
      }
      a ? (Vd = setTimeout(Ud, 0 === Wd ? 10 : 50), Wd++) : (v("Evaluator", Wd + " total times waited"), Xd(), Ac("Bind Events"), Ac("Client Evaluate"))
    }

    function Xd() {
      Db("flash");
      Ac("Potential Flash");
      0 !== yc.length || Db("flashGeo")
    }

    function Yd(a, b) {
      a = a.replace($d, ae);
      if (kc(a))
        if (v("Evaluator", "Redirect detected"), od(a)) {
          v("Evaluator", "OK to redirect");
          var c = nd(a);
          v("Evaluator", "setting a redirect cookie" + (b ? " for variation: " + b : ""));
          A("optimizelyRedirect", (b || "unknown variation") + "|" + (c ? "true" : "false"), 5);
          A("optimizelyReferrer", document.referrer, 5)
        } else {
          v("Evaluator", "NOT OK to redirect");
          return
        } eval("var $j = $;");
      try {
        eval(a)
      } catch (d) {
        c = V, V = k, v("Evaluator", "Error: " + d.message), v("Evaluator", "Code: " + a), V = c, v("Evaluator", "Failed to run code: " +
          d.message)
      }
    }

    function Qd(a, b, c) {
      c = c || {};
      if (!be[a] || !be[a][b]) {
        var d = function() {
            ja(b, "custom", c)
          },
          e = $(a);
        if (0 < e.length) {
          var f = function() {
              e.unbind("touchend", d);
              e.unbind("touchmove", f);
              e.unbind("mousedown", d)
            },
            g = function() {
              f();
              e.bind("touchmove", f);
              e.bind("touchend", d)
            };
          e.bind("mousedown", d);
          e.bind("touchstart", g)
        } else e = $("html"), f = function() {
          e.undelegate(a, "touchend", d);
          e.undelegate(a, "touchmove", f);
          e.undelegate(a, "mousedown", d)
        }, e.delegate(a, "touchstart", function() {
          f();
          e.delegate(a, "touchend", d);
          e.delegate(a,
            "touchmove", f)
        }), e.delegate(a, "mousedown", d);
        be[a] || (be[a] = {});
        be[a][b] = "mousedown touchstart"
      }
    }

    function ce(a) {
      de = a
    }

    function Sd(a) {
      a || (a = Wa());
      for (var b = 0; b < a.length; b++) I(a[b])
    }
    var be = {},
      C = [],
      E = E || [],
      de = 0,
      Pd = n,
      Rd = [],
      Vd = m,
      Wd = 0;
    $(function() {
      Db("docReady");
      Pd = k;
      Vd !== m && (v("Evaluator", "Document is ready"), clearTimeout(Vd), 0 < de ? setTimeout(Ud, de) : Ud())
    });

    function Y(a, b) {
      var c = n;
      r(a, function(a) {
        if (b(a)) return c = k
      });
      return c
    }

    function fb(a, b) {
      for (var c = 0; c < a.length; c++)
        if (b == a[c]) return k;
      return n
    }

    function ee(a, b) {
      var c = Oc(arguments, 1);
      return function() {
        var b = Oc(arguments);
        b.unshift.apply(b, c);
        return a.apply(this, b)
      }
    }

    function r(a, b) {
      var c = m;
      if (z(a))
        for (var d = a.length, e = 0; e < d && !(c = b.call(j, a[e], e), J(c)); ++e);
      else
        for (d in a)
          if (Object.prototype.hasOwnProperty.call(a, d) && (c = b.call(j, d, a[d]), J(c))) break;
      return c
    }

    function Lb(a, b) {
      r(b, function(b, d) {
        a[b] = d
      });
      return a
    }

    function La(a, b) {
      for (var c = [], d = 0, e = a.length; d < e; d++) {
        var f = a[d];
        b(f) && c.push(f)
      }
      return c
    }

    function fe(a, b) {
      return r(b, function(b) {
        if (b === a) return k
      }) || n
    }

    function z(a) {
      return a && "object" === typeof a && a.length && "number" === typeof a.length
    }

    function J(a) {
      return "undefined" !== typeof a
    }

    function ha(a) {
      return ("number" === typeof a || "string" === typeof a) && Number(a) == a
    }

    function w(a) {
      w = Object.la || function(a) {
        var c = [];
        r(a, function(a) {
          c.push(a)
        });
        return c
      };
      return w.call(m, a)
    }

    function ge(a, b) {
      function c() {
        var b = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
          c = document.createElement("script");
        c.src = a;
        c.type = "text/javascript";
        b.appendChild(c)
      }
      if (b) try {
        "loading" === document.readyState ? document.write('<script src="' + a + '"><\/script>') : h(Error("Not safe to attempt document.write"))
      } catch (d) {
        try {
          var e = new XMLHttpRequest;
          e.open("GET", a, n);
          e.onload = function() {
            eval(e.responseText)
          };
          e.onerror = function() {
            h(Error())
          };
          e.send()
        } catch (f) {
          M("Common", "Failed to load %s synchronously",
            a), c()
        }
      } else c()
    }

    function M(a, b, c) {
      var d = window.console;
      if (V && d && d.log) {
        var e = Oc(arguments, 1);
        e[0] = "Optimizely / " + a + " / " + b;
        Function.prototype.apply.call(d.log, d, e)
      }
    }

    function Zc(a) {
      try {
        return decodeURIComponent(a)
      } catch (b) {
        return a
      }
    }

    function Oc(a, b) {
      return Array.prototype.slice.call(a, b || 0, a.length)
    };

    function y(a) {
      var b = RegExp("^" + a + "=?(.*)"),
        c = [];
      r((document.cookie || "").split(/\s*;\s*/), function(a) {
        (a = a.match(b)) && c.push(Zc(a[1]))
      });
      var d = c.length;
      1 < d && M("Cookie", "Values found for %s: %s", a, d);
      return 0 === d ? m : c[0]
    }

    function A(a, b, c) {
      var d = he || ie || je,
        e = document.location.hostname,
        b = b || "";
      !ie && q("remote_public_suffix") && ke.push({
        ka: c,
        name: a,
        value: b
      });
      d && (d === ie && d !== je) && (le(a, e), le(a, je));
      me(a, b, d, c);
      var f = y(a);
      f === b ? M("Cookie", "Successful set %s=%s on %s", a, b, d) : (M("Cookie", "Setting %s on %s apparently failed (%s != %s)", a, d, f, b), M("Cookie", "Setting %s on %s", a, e), me(a, b, e, c), f = y(a), f === b ? (M("Cookie", "Setting %s on %s worked; saving as new public suffix", a, e), je = e) : (M("Cookie", "Could not set cookie %s, disabling event tracking.",
        a), u = n))
    }

    function le(a, b) {
      M("Cookie", "Deleting %s on %s", a, b);
      document.cookie = [a, "=; domain=.", b, "; path=/; expires=", (new Date(0)).toUTCString()].join("")
    }

    function me(a, b, c, d) {
      a = [a, "=", encodeURIComponent(b), "; domain=.", c, "; path=/"];
      d && a.push("; expires=", (new Date(+new Date + 1E3 * d)).toUTCString());
      document.cookie = a.join("")
    }

    function ne(a) {
      var b = he || ie || je;
      b !== a && (he = String(a) || "", M("Cookie", "Api public suffix set to: %s", he), dd(), le("optimizelySegments", b))
    }
    var je = "",
      he = "",
      ie = "",
      ke = [];

    function oe() {}
    Lb(oe.prototype, {
      C: qb,
      R: rb,
      G: vb,
      B: function() {
        return {
          id: this.C(),
          version: this.R(),
          mobileId: this.G()
        }
      },
      S: function() {
        return this.f("utm_campaign")
      },
      D: y,
      v: tb,
      u: function() {
        var a = "";
        try {
          a = navigator.userLanguage || window.navigator.language, a = a.toLowerCase()
        } catch (b) {
          a = ""
        }
        return a
      },
      n: ub,
      m: function() {
        return Ab || window.location.href
      },
      H: wb,
      Q: Yc,
      V: yb,
      w: function() {
        return y("optimizelyReferrer") || document.referrer || ""
      },
      W: function() {
        return sb(this.w())
      },
      I: Dd,
      X: Cd,
      U: function() {
        return document.referrer
      },
      f: function(a) {
        a: {
          for (var b =
              this.Q(), b = b || Yc(), c = 0; c < b.length; c++) {
            var d = b[c];
            if (d[0] === a) {
              a = d[1];
              break a
            }
          }
          a = m
        }
        return a
      },
      T: function() {
        return mc
      },
      F: function(a) {
        return (this.T() || {})[a]
      },
      Y: function() {
        var a = y("optimizelyCustomEvents") || "{}";
        try {
          a = va(a)
        } catch (b) {
          a = {}
        }
        a = a[Ja()] || [];
        return z(a) ? a : []
      },
      Z: function(a) {
        var b = this.I();
        return fb(b, a)
      },
      K: function(a) {
        return fb(this.Y(), a)
      },
      getDate: function() {
        return new Date
      }
    });
    var X = new oe;

    function pe() {
      this.b = {};
      this.d = {};
      this.i = {}
    }
    pe.prototype.ca = function(a) {
      if (!this.b.hasOwnProperty(a) || !this.i.hasOwnProperty(a)) try {
        var b = this.b,
          c = q("audiences", a);
        c || h(Error("Unable to find audience for id: " + a));
        var d = qe(this, c.conditions);
        v("Visitor", "Checking if in audience " + a + ": " + d);
        b[a] = d
      } catch (e) {
        v("Visitor", e.toString())
      }
      return this.b[a]
    };

    function re(a, b, c, d, e) {
      if (q("audiences", b)) {
        if (a.b[b] = c, d ? a.i[b] = k : delete a.i[b], (b = Sa(b)) && (c ? Dc(b, c) : Sc(b)), d && !e) {
          var f = [];
          r(a.i, p(function(a) {
            this.b[a] && f.push(a)
          }, a));
          f.sort();
          A("optimizelyAudiences", f.join(","), 31536E4)
        }
      } else v("Visitor", "Unable to find audience " + b)
    }
    pe.prototype.k = function(a, b) {
      b = J(b) ? b : k;
      re(this, a, k, b)
    };
    pe.prototype.p = function(a, b) {
      b = J(b) ? b : k;
      re(this, a, n, b)
    };
    pe.prototype.ha = function() {
      r(this.b, p(function(a) {
        this.p(a, !!this.i.hasOwnProperty(a))
      }, this))
    };

    function se(a, b, c, d) {
      d = !J(d) || d;
      J(c) && c !== m && String(c) ? (d && (c = Bd(String(c), n)), a.d[b] = c) : delete a.d[b];
      return a.d[b]
    }
    pe.prototype.q = function(a, b, c) {
      q("dimensions", a) ? q("dimensions", a) && "custom_dimension" === Va(a) ? (b = se(this, a, b, c), c = q("dimensions", a.toString(), "segment_id"), (c = !c ? m : c) && (b ? Dc(c, b) : Sc(c)), v("Visitor", 'Set dimension "' + a + '" to "' + b + '"')) : v("Visitor", 'Unknown dimension "' + a + '"') : v("Visitor", "Unable to find dimension " + a)
    };
    var yd = new pe;

    function te(a) {
      var b = a.split(":");
      2 !== b.length && h(Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string " + a));
      return 60 * parseInt(b[0], 10) + parseInt(b[1], 10)
    };

    function pc(a) {
      if (!H(a, "uses_geotargeting") && !ob(a, "uses_geotargeting")) return k;
      var b = X.n();
      if (b.continent || b.country || b.region || b.city || X.v()) return k;
      v("Condition", "Not ready to test (geotargeting): " + a);
      return n
    }

    function rc(a, b) {
      var c = b.manualMode === k,
        d = b.objectType ? b.objectType : "experiment",
        e = "experiment" === d,
        f = b.enabledStatus,
        g = b.visitor || yd;
      v("Condition", "Testing " + d + " " + a);
      var f = e && (J(f) ? !!f : Xa(a)),
        i = e && $a(a),
        l;
      a: switch (d) {
        case "experiment":
          l = H(a, "conditions");
          break a;
        case "segment":
          l = ob(a, "add_condition");
          break a;
        default:
          l = []
      }
      if (e && !f) return v("Condition", "Failed for " + d + " " + a + " (paused)"), n;
      if (e && !c && i) return v("Condition", " Failed for " + d + " " + a + " (manual activation mode)"), n;
      if (l) {
        var o = "experiment" ===
          (d || "experiment"),
          t = k;
        r(l, function(b) {
          var c = b.type;
          if (o && b.only_first_time && Gd(a)) v("Condition", c + " condition passed because it only gets checked when bucketing", k);
          else {
            var d = !b.not,
              b = (0, ue[c])(b),
              e = b !== d;
            v("Condition", "Found that " + ("the visitor " + (b ? "passed" : "failed") + " a " + c + " targeting condition  when it needed to " + (d ? "pass" : "fail")), !e);
            if (e) return t = n
          }
        });
        if (!t) return v("Condition", "Failed for " + d + " " + a + " (condition failed)"), n
      } else {
        a: {
          c = [];e = [];
          if ("experiment" === d) c = H(a, "audiences") || [],
          e =
          H(a, "urls") || [];
          else if ("segment" === d)(f = ob(a, "audience_id")) && (c = [f]);
          else {
            v("Condition", "Not a valid objectType: " + d);
            d = n;
            break a
          }
          if (0 < c.length && (v("Condition", "Testing audiences for " + d + " " + a + ": " + c), !Y(c, p(g.ca, g)))) {
            v("Condition", "Failed to match any audiences for " + d + " " + a);
            d = n;
            break a
          }
          if (0 < e.length) {
            v("Condition", "Testing URLs for " + d + " " + a);
            var g = e,
              x = X.m(),
              D = [],
              da = [];
            r(g, function(a) {
              a.negate ? da.push(a) : D.push(a)
            });
            g = function(a) {
              return Y(a, function(a) {
                return ve(x, a)
              })
            };
            if (g(da) || !(0 === D.length ||
                g(D))) {
              v("Condition", "Failed to match any URL for " + d + " " + a);
              d = n;
              break a
            }
          }
          d = k
        }
        if (!d) return n
      }
      return k
    }

    function we(a, b) {
      var c = b.value,
        d = a.id,
        e = a.version,
        f = a.mobileId;
      return f && "unknown" !== f ? (v("Condition", f, k), "mobile" === c || c === f) : 0 === c.indexOf(d) ? (c = c.substr(d.length), "" === c || c <= e && e < Number(c) + 1) : n
    }

    function xe(a, b) {
      var c = b.value;
      if (c === j) return k;
      try {
        return Boolean(eval(c))
      } catch (d) {
        return n
      }
    }

    function ye(a, b) {
      var c = b.value;
      return !J(c) ? J(a) && a !== m : a == c
    }

    function ze(a, b) {
      return !J(b.value) ? J(a) : b.value === String(a)
    }

    function Ae(a, b) {
      var c = b.value;
      switch (b.match) {
        case "exact":
          if (a == c && "" != a) return k;
          break;
        case "prefix":
          if (0 == a.indexOf(c)) return k;
          break;
        case "regex":
          try {
            var d = RegExp(c)
          } catch (e) {
            break
          }
          if (d.test(a)) return k;
          break;
        case "cidr":
          try {
            var f;
            a: {
              var g = new Be(c),
                i = Ce(a);i === m && h(Error("Invalid ip: " + a));
              for (c = 0; 4 > c; c++)
                if ((i[c] & g.z[c]) !== g.A[c]) {
                  f = n;
                  break a
                } f = k
            }
            return f
          } catch (l) {}
      }
      return n
    }

    function De(a, b) {
      var c = b.value;
      return "any" === c || 0 === a.indexOf(c)
    }

    function Ee(a, b) {
      var c = b.value.split("|"),
        d = $.trim(c[0]),
        e = $.trim(c[1]),
        f = $.trim(c[2]),
        g = $.trim(c[3]);
      switch (c.length) {
        case 1:
          if (L(a.country) === d) return k;
          break;
        case 2:
          if (L(a.region) === e && L(a.country) === d) return k;
          break;
        case 3:
          if (L(a.city) === f && (L(a.region) === e || "" === e) && L(a.country) === d) return k;
          break;
        case 4:
          if (L(a.continent) === g) return k
      }
      return n
    }

    function Fe(a, b) {
      var c = b.value;
      return !J(c) ? J(a) && a !== m : a == c
    }

    function Ge(a, b) {
      var c = b.value,
        d = b.match;
      v("Condition", "Testing referrer " + a + " against  " + c + " (" + d + ")", k);
      return Mb(a, c, d)
    }

    function He(a) {
      return !!a
    }

    function Td(a) {
      var b = X.m();
      return Y(a.values, ea(ve, b))
    }

    function ve(a, b) {
      var c = b.value,
        d = b.match;
      v("Condition", "Testing URL " + a + " against  " + c + " (" + d + ")", k);
      return Mb(a, c, d)
    }

    function Ie(a, b) {
      switch (b.value) {
        case "new":
          if ("returning" === a) return n;
          break;
        case "returning":
          return "returning" === a
      }
      return k
    }

    function qe(a, b) {
      var c = {
        and: function(b) {
          var c = ea(qe, a),
            d = k;
          r(b, function(a) {
            if (!c(a)) return d = n
          });
          return d
        },
        or: function(b) {
          return Y(b, ea(qe, a))
        },
        not: function(b) {
          1 !== b.length && h(Error('"not" argument too long: ' + Ma(b)));
          return !qe(a, b[0])
        }
      };
      if (z(b)) {
        if (b[0] in c) return c[b[0]](b.slice(1));
        h(Error("Not an operator"))
      }
      var c = b.dimension_id,
        d = Va(c),
        e = b.value;
      d || h(Error("No dimension type for dimension: " + c));
      var f = Je[d];
      f || h(Error("Unknown dimension type: " + d));
      d = j;
      if (a.d.hasOwnProperty(c)) d = a.d[c];
      else try {
        var g =
          q("dimensions", c),
          i = g.condition_type,
          l, o;
        g || h(Error("Unable to find dimension for id: " + c));
        "custom_dimension" === i && h(Error("calculateDimensionValue called on custom dimension " + c));
        (l = {
          browser: p(X.B, X),
          campaign: ea(Ed, "campaign"),
          cookies: p(X.D, X),
          custom_tag: p(X.F, X),
          event: p(X.K, X),
          ip: p(X.v, X),
          language: p(X.u, X),
          location: p(X.n, X),
          query: p(X.f, X),
          referrer: p(X.w, X),
          segment: p(X.Z, X),
          source_type: ea(Ed, "source_type"),
          time_and_day: p(X.getDate, X),
          url: p(X.m, X),
          visitor: p(X.H, X)
        } [i]) && (o = l(g.name));
        v("Visitor",
          "Got dimension value " + c + ": " + o);
        d = o
      } catch (t) {
        v("Visitor", t.toString())
      }
      return f(d, {
        value: e,
        match: b.match || "exact"
      })
    }
    var ue = {
        browser: function(a) {
          var b = X.B();
          return Y(a.values, function(a) {
            return we(b, {
              value: a
            })
          })
        },
        code: function(a) {
          return xe(0, a)
        },
        cookies: function(a) {
          for (var b = a.names || [], a = a.values || [], c, d = 0; d < b.length; d++)
            if (c = b[d], ye(X.D(c), {
                value: a[d] || j
              })) return k;
          return n
        },
        custom_tag: function(a) {
          return Y(a.values, function(a) {
            return ze(X.F(a.key), {
              value: a.value
            })
          })
        },
        event: function(a) {
          return Y(a.values, function(a) {
            return X.K(a)
          })
        },
        ip: function(a) {
          var b = X.v();
          return Y(a.values, ea(Ae, b))
        },
        language: function(a) {
          var b =
            X.u();
          return Y(a.values, function(a) {
            return De(b, {
              value: a
            })
          })
        },
        location: function(a) {
          var b = X.n();
          return Y(a.values, function(a) {
            return Ee(b, {
              value: a
            })
          })
        },
        query: function(a) {
          return 0 === a.values.length ? k : Y(a.values, function(a) {
            return Fe(X.f(a.key), {
              value: a.value
            })
          })
        },
        referrer: function(a) {
          return Y(a.values, ea(Ge, X.U()))
        },
        segment: function(a) {
          var b = X.I();
          return Y(a.values, function(a) {
            return He(fe(a, b))
          })
        },
        url: Td,
        visitor: function(a) {
          var b = X.H();
          return Ie(b, a)
        }
      },
      Je = {
        browser: we,
        campaign: function(a, b) {
          return !b.value ?
            a !== m && "none" !== a : b.value === a
        },
        code: xe,
        cookies: ye,
        custom_dimension: function(a, b) {
          var c = b.value;
          return !J(c) ? J(a) : c == a
        },
        custom_tag: ze,
        event: function(a) {
          return a
        },
        ip: Ae,
        language: De,
        location: Ee,
        query: Fe,
        referrer: Ge,
        segment: He,
        source_type: function(a, b) {
          return b.value === a
        },
        time_and_day: function(a, b) {
          var c, d, e;
          c = b.value;
          e = c.split("_");
          3 !== e.length && h(Error("Invalid time and day string " + c));
          c = e[0];
          d = e[1];
          e = e[2].split(",");
          c = te(c);
          d = te(d);
          var f = 60 * a.getHours() + a.getMinutes(),
            g = "sunday monday tuesday wednesday thursday friday saturday".split(" ")[a.getDay()];
          return f >= c && f <= d && -1 !== $.inArray(g, e)
        },
        url: ve,
        visitor: Ie
      };
    var va, Ma;
    (function() {
      function a(a) {
        d.lastIndex = 0;
        return d.test(a) ? '"' + a.replace(d, function(a) {
          var b = g[a];
          return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
      }

      function b(c, d) {
        var g, x, D, da, Ba = e,
          P, F = d[c];
        "function" === typeof i && (F = i.call(d, c, F));
        switch (typeof F) {
          case "string":
            return a(F);
          case "number":
            return isFinite(F) ? String(F) : "null";
          case "boolean":
          case "null":
            return String(F);
          case "object":
            if (!F) return "null";
            e += f;
            P = [];
            if ("[object Array]" === Object.prototype.toString.apply(F)) {
              da = F.length;
              for (g = 0; g < da; g += 1) P[g] = b(g, F) || "null";
              D = 0 === P.length ? "[]" : e ? "[\n" + e + P.join(",\n" + e) + "\n" + Ba + "]" : "[" + P.join(",") + "]";
              e = Ba;
              return D
            }
            if (i && "object" === typeof i) {
              da = i.length;
              for (g = 0; g < da; g += 1) "string" === typeof i[g] && (x = i[g], (D = b(x, F)) && P.push(a(x) + (e ? ": " : ":") + D))
            } else
              for (x in F) Object.prototype.hasOwnProperty.call(F, x) && (D = b(x, F)) && P.push(a(x) + (e ? ": " : ":") + D);
            D = 0 === P.length ? "{}" : e ? "{\n" + e + P.join(",\n" + e) + "\n" + Ba + "}" : "{" + P.join(",") + "}";
            e = Ba;
            return D
        }
      }
      var c = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        d = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        e, f, g = {
          "\b": "\\b",
          "\t": "\\t",
          "\n": "\\n",
          "\f": "\\f",
          "\r": "\\r",
          '"': '\\"',
          "\\": "\\\\"
        },
        i;
      Ma = function(a, c, d) {
        var g;
        f = e = "";
        if ("number" === typeof d)
          for (g = 0; g < d; g += 1) f += " ";
        else "string" === typeof d && (f = d);
        (i = c) && ("function" !== typeof c && ("object" !== typeof c || "number" !== typeof c.length)) && h(Error("JSON.stringify"));
        return b("", {
          "": a
        })
      };
      va = function(a, b) {
        function d(a, c) {
          var e, f, g = a[c];
          if (g && "object" === typeof g)
            for (e in g) Object.prototype.hasOwnProperty.call(g, e) && (f = d(g, e), f !== j ? g[e] = f : delete g[e]);
          return b.call(a, c, g)
        }
        var e, a = String(a);
        c.lastIndex = 0;
        c.test(a) && (a = a.replace(c, function(a) {
          return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" ===
          typeof b ? d({
            "": e
          }, "") : e;
        h(new SyntaxError("JSON.parse"))
      }
    })();

    function ae(a, b) {
      var c;
      c = $.trim(b);
      var d = "";
      if (window.optimizely && window.optimizely.data)
        if (d = c.match(Ke)) d = window.optimizely.data.visitor.params[d[1]], d === j && (d = "");
        else {
          for (var d = c.split("."), e = window.optimizely, f = 0, g = d.length; f < g; f++)
            if (e = e[d[f]], e === j || e === m) {
              e = "";
              break
            } d = "" + e
        } v("Template", c + " evaluated to: '" + d + "'");
      return d
    }
    var $d = /\{\{ *optimizely\.([^\n\r{}<>]*)\}\}/g,
      Ke = /^data\.visitor\.params\.(.*)$/;

    function Le(a) {
      W = {};
      xd(a)
    };

    function Be(a) {
      this.O = $.trim(a);
      a = Me(this.O);
      a === m && h(Error("Invalid CIDR specification"));
      this.A = a.A;
      this.z = a.z
    }

    function Me(a) {
      a = a.split("/");
      if (2 != a.length) return m;
      var b = parseInt(a[1], 10);
      if (isNaN(b) || 0 > b || 32 < b) return m;
      a = Ce(a[0]);
      if (a === m) return m;
      if (0 > b || 32 < b) b = m;
      else {
        for (var c = [], d = 0; 4 > d; d++) c[d] = 0;
        for (var e = Math.floor(b / 8), d = 0; d < e; d++) c[d] = 255;
        4 > e && (c[e] = Ne[b % 8]);
        b = c
      }
      for (c = 0; 4 > c; c++) a[c] &= b[c];
      return {
        A: a,
        z: b
      }
    }

    function Ce(a) {
      a = a.split(".");
      if (4 != a.length) return m;
      for (var b = [], c = 0; 4 > c; c++) {
        var d;
        d = a[c];
        if (3 < d.length) d = m;
        else {
          var e = parseInt(d, 10);
          d = isNaN(e) || d !== e.toString() || 0 > e || 255 < e ? m : e
        }
        if (d === m) return m;
        b[c] = d
      }
      return b
    }
    var Ne = [0, 128, 192, 224, 240, 248, 252, 254, 255];

    function v(a, b, c) {
      Oe.push({
        P: new Date,
        N: a,
        message: b,
        J: c || n
      });
      Pe && Pc();
      Qe(a, b)
    }

    function Re() {
      V = k
    }

    function Se() {
      wd = V = k
    }

    function Pc() {
      V && (r(Oe, function(a) {
        if (!a.ea && (!a.J || a.J === wd)) {
          var b = +a.P;
          M(a.N, a.message + (" [time " + (Te ? b - Te : 0) + " +" + (Ue ? b - Ue : 0) + "]"));
          Ue = b;
          Te || (Te = b);
          a.ea = k
        }
      }), Pe = k)
    }
    var Ue = m,
      Te = m,
      Oe = [],
      Pe = n,
      Bc = aa,
      Ac = aa,
      Qe = aa;

    function Ve(a) {
      return function(b) {
        if ("object" === typeof b && We()) {
          var c = m,
            d;
          for (d in b) b.hasOwnProperty(d) && (c = a.call(this, d, b[d]));
          return c
        }
        return a.apply(this, arguments)
      }
    }

    function We() {
      for (var a in {}) return k;
      return n
    };

    function Xe() {
      var a = U,
        b = document.createElement("a");
      b.href = a;
      for (var a = 0, c = Ye.length; a < c; a++) {
        var d = Ye[a];
        if (d.test(b.pathname)) return n
      }
      a = 0;
      for (c = $e.length; a < c; a++)
        if (d = $e[a], d.test(b.hostname)) return n;
      return RegExp(af).test(b.hostname) || "" === b.hostname
    }
    var $e = [/.*?\.?optimizelyedit\.(com|test)/, /.*\.?optimizelypreview\.(com|test)/, /(edit|preview)(-local)?(-hrd)?\.optimizely\.(com|test)/, /optimizelyedit(-hrd)?\.appspot\.com/, /cdn[^\.]*\.optimizely\.com/],
      Ye = [/^\/?api\/client/],
      af = window.optlyConfig && window.optlyConfig.domain ? window.optlyConfig.domain.whiteList : "(\.optimizely\.appspot\.com$)|(\.optimizely\-hrd\.appspot\.com$)|(\-dot\-optimizely\.appspot\.com$)|(\-dot\-optimizely\-hrd\.appspot\.com$)|(\.optimizely\.com$)|(\.optimizely\.at$)|(\.optimizely\.be$)|(\.optimizely\.bg$)|(\.optimizely\.by$)|(\.optimizely\.ch$)|(\.optimizely\.cl$)|(\.optimizely\.co\.il$)|(\.optimizely\.co\.nz$)|(\.optimizely\.co\.uk$)|(\.optimizely\.com\.br$)|(\.optimizely\.com\.hr$)|(\.optimizely\.com\.mx$)|(\.optimizely\.cz$)|(\.optimizely\.de$)|(\.optimizely\.es$)|(\.optimizely\.dk$)|(\.optimizely\.fr$)|(\.optimizely\.gr$)|(\.optimizely\.hk$)|(\.optimizely\.ie$)|(\.optimizely\.it$)|(\.optimizely\.jp$)|(\.optimizely\.lt$)|(\.optimizely\.lu$)|(\.optimizely\.lv$)|(\.optimizely\.nl$)|(\.optimizely\.mx$)|(\.optimizely\.pl$)|(\.optimizely\.pt$)|(\.optimizely\.ro$)|(\.optimizely\.ru$)|(\.optimizely\.se$)|(\.optimizely\.sg$)|(\.optimisely\.com$)|(\.optimisely\.at$)|(\.optimisely\.be$)|(\.optimisely\.bg$)|(\.optimisely\.by$)|(\.optimisely\.ch$)|(\.optimisely\.cl$)|(\.optimisely\.co\.il$)|(\.optimisely\.co\.nz$)|(\.optimisely\.co\.uk$)|(\.optimisely\.com\.br$)|(\.optimisely\.com\.hr$)|(\.optimisely\.com\.mx$)|(\.optimisely\.cz$)|(\.optimisely\.de$)|(\.optimisely\.es$)|(\.optimisely\.dk$)|(\.optimisely\.fr$)|(\.optimisely\.gr$)|(\.optimisely\.hk$)|(\.optimisely\.ie$)|(\.optimisely\.it$)|(\.optimisely\.jp$)|(\.optimisely\.lt$)|(\.optimisely\.lu$)|(\.optimisely\.lv$)|(\.optimisely\.nl$)|(\.optimisely\.mx$)|(\.optimisely\.pl$)|(\.optimisely\.pt$)|(\.optimisely\.ro$)|(\.optimisely\.ru$)|(\.optimisely\.se$)|(\.optimisely\.sg$)|(\.optimizely\.test$)|(www\-devel\.optimizely\.com$)|(www\-devel\.optimizely\.appspot\.com$)|(www\-devel\-dot\-optimizely\.appspot\.com$)";

    function Z() {
      if (!pd) {
        var a = $;
        a.fn.attr = Ve(a.fn.attr);
        a.fn.css = Ve(a.fn.css);
        a.fn.extend = Ve(a.fn.extend);
        var b = a.each;
        a.each = function(c, d, e) {
          if (!(c.length === j || a.isFunction(c)) || !We()) b.apply(this, arguments);
          else if (e)
            for (var f in c) {
              if (c.hasOwnProperty(f) && d.apply(c[f], e) === n) break
            } else
              for (f in c)
                if (c.hasOwnProperty(f) && !d.call(c[f], f, c[f]) === n) break;
          return c
        };
        var c = a.fn.ba,
          d = function(a, b, d) {
            return new c(a, b, d)
          },
          e, f = document.getElementsByClassName;
        if (!md(f)) var f = (window.optimizely || {}).getElementsByClassName,
          g = (window.optly || {}).getElementsByClassName,
          f = md(f) ? f : md(g) ? g : m;
        e = f;
        a.fn.ba = function(b, c, f) {
          var g = d,
            i = document.getElementsByClassName;
          !md(i) && e && (g = function(a, b, c) {
            document.getElementsByClassName = e;
            a = d(a, b, c);
            document.getElementsByClassName = i;
            return a
          });
          if (!("string" === typeof b && c && "object" === a.type(c) && We())) return g(b, c, f);
          b = g(b, j, f);
          b.attr(c);
          return b
        }
      }
      Bc("Client Evaluate");
      v("Main", "Started, revision " + q("revision"));
      var f = kd(),
        g = n,
        i;
      for (i in f)
        if (ld.exec(i)) {
          g = k;
          break
        }("true" === f.opt_out || "false" ===
          f.opt_out) && Aa("true" === f.opt_out);
      O = "true" !== f.disable && "true" !== f.opt_out && "true" !== y("optimizelyOptOut");
      sd = "true" === f.editor;
      vd = "true" === f.show_preview;
      td = f.token || m;
      U = !td && f.load_script;
      V = "true" === f.log;
      wd = "true" === f.verbose;
      u = !(vd || g) || "true" === f.force_tracking;
      "false" === f.client && (O = n, U = "js/" + Da() + ".js");
      U && !Xe() && (v("Query", "Blocked request to load unsafe script: " + U), U = "");
      if (td) Z.da();
      else if (vd && !td) Z.o("This preview link has expired. Please return to Optimizely and preview again to get a new link.");
      else {
        Bc("client.Main#initialize");
        i = document.location.hostname;
        var f = i.split("."),
          g = i,
          l = f[f.length - 1];
        2 < f.length && "appspot" === f[f.length - 2] && "com" === l ? g = f[f.length - 3] + ".appspot.com" : 1 < f.length && fe(l, qd) && (g = f[f.length - 2] + "." + l);
        je = g;
        M("Cookie", "Guessed public suffix: %s", je);
        ie = gb(i);
        M("Cookie", "Public suffix (from data): %s", ie);
        he && M("Cookie", "Api public suffix (from api): %s", he);
        i = y("optimizelyBuckets");
        xb = i !== j && i !== m;
        a: {
          i = "googlebot;yahoo! slurp;bingbot;bingpreview;msnbot;keynote;ktxn;khte;gomezagent;alertsite;yottaamonitor;pingdom.com_bot".split(";");
          f = navigator.userAgent;f = f.toLowerCase();
          for (g = 0; g < i.length; g++)
            if (-1 !== f.indexOf(i[g])) {
              i = k;
              break a
            } i = n
        }
        i && (u = n);
        if (i = y("optimizelyBuckets")) {
          try {
            i = va(i)
          } catch (o) {
            i = {}
          }
          var t = {};
          r(i, function(a, b) {
            var b = String(b),
              c = B(b);
            if (bb(c).length > 1 && b.indexOf("_") === -1) {
              t[c] = t[c] || {};
              t[c][a] = b
            } else b !== "0" ? Jc(b, "cookie") || (Hd[a] = b) : hd(a)
          });
          r(t, function(a, b) {
            var c;
            a: {
              c = [];
              for (var d = bb(a), e = 0; e < d.length; e++) {
                var f = b[d[e]];
                if (f === "0") {
                  c = "";
                  break a
                }
                c.push(f)
              }
              c = c.join("_")
            }
            c.length > 0 ? Jc(c, "cookie") : hd(a)
          })
        }
        xd();
        Ia =
          (y("optimizelyRedirect") || "|").split("|")[0];
        if ((i = y("optimizelyReferrer")) && 0 < i.length) Vb = i, A("optimizelyReferrer", "");
        var x = !q("force_variation");
        i = kd();
        r(i, function(a, b) {
          var c = ld.exec(a);
          if (c)
            if (x) {
              ud = k;
              M("Query", "Ignored parameter %s", a)
            } else {
              c = c[1];
              oc(c, b, k);
              rc(c, {}) || nc(c, {
                force: k,
                skipPageviewTracking: k
              })
            }
        });
        if (ud) Z.o("Force parameters are disabled for this project. See Project Code Settings.");
        else {
          i = yd;
          (f = y("optimizelyAudiences")) && 0 < f.length && r(f.split(","), p(function(a) {
              re(this, a, k, k, k)
            },
            i));
          r(Dd(), p(function(a) {
            var b = G()[a];
            b && b.audience_id ? this.b[b.audience_id] = k : b && b.dimension_id && se(this, b.dimension_id, W[a], n)
          }, i));
          R = yd;
          lc = n;
          zd.push(Mc);
          Id.push(Mc);
          i = {
            $: $,
            activeExperiments: C || [],
            allExperiments: Za(),
            all_experiments: Za(),
            allVariations: q("variations") || {},
            data: T,
            getElementsByClassName: document.getElementsByClassName,
            revision: q("revision"),
            variationIdsMap: Vc,
            variation_map: Wc,
            variationMap: Wc,
            variationNamesMap: Xc
          };
          var f = {},
            D = ee(Nc, f);
          Lb(f, {
            activate: nc,
            activateGeoDelayedExperiments: vc,
            activateSiteCatalyst: Sb,
            activateUniversalAnalytics: dc,
            addToAudience: p(R.k, R),
            addToSegment: Cc,
            bindTrackElement: Od,
            bucketUser: oc,
            bucketVisitor: oc,
            clickTaleRecord: gc,
            clickTalePlayback: ec,
            customTag: Qc,
            delayDomReadyEval: ce,
            delayPageviewTracking: $c,
            disable: Kc,
            log: Re,
            getAccountId: Ea,
            getProjectId: Da,
            googleAnalyticsCustomVariableScope: Yb,
            integrationPrefix: hc,
            optOut: Aa,
            overrideUrl: zb,
            push: D,
            removeFromAllAudiences: p(R.ha, R),
            removeFromAllSegments: Tc,
            removeFromAudience: p(R.p, R),
            removeFromSegment: Rc,
            sc_activate: Sb,
            sc_svar: ic,
            setCookieDomain: ne,
            skipPageTracking: ed,
            optOutThirdPartyCookies: bd,
            setCookieExpiration: cd,
            setDimensionValue: p(R.q, R),
            timeout: Kc,
            trackEvent: fa,
            verbose: Se
          });
          f.removeFromReportableAudiences = fd;
          Lb(i, f);
          f = window.optimizely;
          z(f) && r(f, function(a) {
            D(a)
          });
          window.optimizely = i;
          window.optimizely.iapi = {
            evaluateSegments: ea(Le, j)
          };
          Ac("client.Main#initialize");
          Z.log();
          U && ge(U);
          O && (r(Wa(), function(a) {
            if (!fe(a, E))
              if (pc(a)) {
                if (rc(a, {
                    objectType: "experiment"
                  })) {
                  v("Distributor", "Going to distribute " + I(a));
                  if (sc(a)) {
                    E =
                      E || [];
                    E.push(a)
                  }
                }
              } else !$a(a) && !fb(C, a) && qc(a)
          }), uc(), na(), zc || (0 < ad ? setTimeout(function() {
            ra()
          }, ad) : ra()), ma(), $b());
          V && (r(Ec, function(a) {
            var b = ab(a);
            v("Plan", "Ignore experiment '" + b + "' (" + a + ")")
          }), r(S, function(a) {
            var b = B(a.id),
              c = jb(a.id);
            v("Plan", I(b) + ' in variation "' + c + '" (' + a.id + ")")
          }));
          sd ? Lc() : O && (tc(), Lc(), Pc(), !q("installation_verified") && u && (i = "//" + q("www_host") + "/account/snippet_installed?project_id=" + Da() + "&wxhr=true", v("Tracker", "Making snippet verification request."), wa(i, m)));
          setTimeout(function() {
            window.optimizelyCode = {}
          }, 0);
          setTimeout(function() {
            try {
              window.optimizely.iapi.geoTimedOut = !(window.optimizely.data.visitor.location.city !== "" || window.optimizely.data.visitor.location.continent !== "" || window.optimizely.data.visitor.location.country !== "" || window.optimizely.data.visitor.location.region !== "");
              window.optimizely.activateGeoDelayedExperiments = j
            } catch (a) {
              Db("geoTimeout")
            }
          }, 2E3);
          setTimeout(function() {
            if (u) {
              var a = Eb;
              if (a.aa) {
                var b = {
                  user: Ja(),
                  project: Da(),
                  sync: Fb,
                  timebase: Cb,
                  render: Hb,
                  sampleRate: pb(),
                  numExps: C.concat(E).length,
                  codeVersion: q("version"),
                  wxhr: k
                };
                Lb(b, Kb() || {});
                Lb(b, a.t);
                var a = [],
                  c;
                for (c in b) Object.prototype.hasOwnProperty.call(b, c) && a.push(window.encodeURIComponent(c) + "=" + window.encodeURIComponent(b[c]));
                wa("http://web.archive.org/web/20140715044754/https://rum.optimizely.com/rum?" + a.join("&"), m)
              }
            }
          }, 3E3);
          $(function() {
            q("badge_html") && $("body").append(q("badge_html"))
          });
          v("Main", "End of main");
          Db("mainEnd")
        }
      }
    }
    Z.log = function() {
      v("Info", "Is enabled: " + O);
      v("Info", "Diagnostic enabled: false");
      v("Info", "Force variation enabled: " + !!q("force_variation"));
      v("Info", "Script to load: " + (U || "none"));
      v("Info", "Browser type: " + qb());
      v("Info", "Browser version: " + rb());
      var a = vb();
      "unknown" !== a && v("Info", "Mobile browser type: " + a);
      v("Info", "New vs returning: " + wb());
      v("Info", "Source type: " + Cd());
      v("Info", "User ID: " + Ja())
    };
    Z.da = function() {
      ge(["//web.archive.org/web/20140715044754/http://optimizely.s3.amazonaws.com/js/preview/", td, ".js"].join(""), k);
      vd && Z.o('Loading Preview<br /><img alt="loading" src="//web.archive.org/web/20140715044754/http://www.optimizely.com/static/img/loading-32.gif" style="padding-top:20px" />')
    };
    Z.o = function(a) {
      0 === $("body").length ? setTimeout(function() {
        Z.o(a)
      }, 20) : $("body").append('<div id="optimizely-loading" style="position:absolute;top:0;right:0;left:0;bottom:0;background-color:white;opacity:0.9;z-index: 3271000;"><h2 style="color:#9a9a9a;top:40%;position:absolute;font-size:2.25em;text-align:center;width:100%;font-family:\'Lucida Grande\',sans-serif;">' + a + "</h2></div>")
    };
    Z();
    optly.Cleanse.finish();
  };
  optimizelyCode();