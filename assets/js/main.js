! function(l) {
    "use strict";
    var c = l("body"),
        a = l(".preloader"),
        i = l(".site-slider"),
        v = l(".site-slider-inner"),
        m = l(".site-slider-item"),
        g = l(".site-slider-item").length,
        u = l(".navbar-container .navbar"),
        e = l(".navbar-container .navbar-toggler"),
        t = l(".navbar-container .navbar-collapse"),
        f = l(".arrow-nav"),
        p = !1,
        h = !1,
        b = .5;

    function w() {
        return Math.max(l(document).width(), document.body.clientWidth)
    }

    function n() {
        if (0 < i.length) {
            var a = g * w();
            v.css("width", a), m.css("width", w()), 992 <= Math.max(l(window).width(), window.innerWidth) && "true" === e.attr("aria-expanded") && (e.attr("aria-expanded", "false"), t.removeClass("show").css("display", ""))
        }
    }

    function s(a) {
        if (0 < l(a).length) {
            if (l(a).hasClass("active")) return !1;
            var e = l(a).index(),
                t = v.find(".site-slider-item.active").index(),
                i = v.find(".site-slider-item.active"),
                n = e * w(),
                s = "" != l(a).attr("data-navbar-style") ? l(a).attr("data-navbar-style") : "dark",
                o = "" != l(a).attr("data-arrow-nav-style") ? l(a).attr("data-arrow-nav-style") : "light";
            if (0 < e && (n *= -1), 0 < l(".bg-parallax").length) {
                var r = l(a),
                    d = 0;
                h = !0, t + 1 < e || e + 1 < t ? (r = l(a), d = 0) : t < e ? (r = l(a).prev(), d = w() * b) : e < t && (r = l(a).next(), d = w() * b * -1)
            }
            m.removeClass("last active").find("input, select, textarea, button, a, area").blur().attr("tabindex", "-1"), i.addClass("last"), 0 < l(".bg-parallax").length && (m.not(".active,.last").find(".bg-parallax").css("transform", ""), r.find(".bg-parallax").css("transform", "translate3d(" + d + "px, 0px, 0px)")), v.css("transform", "translate3d(" + n + "px, 0px, 0px)"), l("#site-navbar-nav li").removeClass("active"), l('#site-navbar-nav a.go-to[href="' + a + '"]').parents("li").addClass("active"), l(a).addClass("active").find("input, select, textarea, button, a, area").attr("tabindex", 0), u.removeClass("navbar-light navbar-dark").addClass("navbar-" + s), 0 < f.length && (f.removeClass("arrow-nav-light arrow-nav-dark").addClass("arrow-nav-" + o), 0 === e ? f.find("#go-to-prev").prop("disabled", !0) : f.find("#go-to-prev").prop("disabled", !1), e === g - 1 ? f.find("#go-to-next").prop("disabled", !0) : f.find("#go-to-next").prop("disabled", !1)), setTimeout(function() {
                !c.hasClass("mobile") && !1 == !!matchMedia("(prefers-reduced-motion)").matches && 0 < l(".site-slider-item .animated").length && (m.not(a).find(".animated").each(function() {
                    var a = l(this),
                        e = a.data("animation");
                    a.hasClass("visible") && a.removeClass(e + " visible")
                }), l(a).find(".animated").each(function() {
                    var a = l(this),
                        e = a.data("animation");
                    if (!a.hasClass("visible")) {
                        var t = a.data("animation-delay");
                        p = !0, t ? setTimeout(function() {
                            a.addClass(e + " visible"), p = !1
                        }, t) : (a.addClass(e + " visible"), p = !1)
                    }
                })), h = !1
            }, 1e3)
        }
    }
    l(window).on("load", function() {
        n(),
            function() {
                if (0 < !i.length) return;
                var a = "" != window.location.hash ? window.location.hash : "#home";
                l(a).hasClass("site-slider-item") && (l(window).scrollTop(0), s(a))
            }(), a.delay(1200).fadeOut(500)
    }), l(document).ready(function(a) {
        n(),
            function() {
                if (l(".collapse").on("show.bs.collapse", function(a) {
                        l("#" + this.id).hasClass("navbar-collapse") && l(document).find('[data-toggle="collapse"][data-target="#' + this.id + '"]').parents(".navbar").addClass("navbar-toggled-show")
                    }), l(".collapse").on("hide.bs.collapse", function(a) {
                        l("#" + this.id).hasClass("navbar-collapse") && l(document).find('[data-toggle="collapse"][data-target="#' + this.id + '"]').parents(".navbar").removeClass("navbar-toggled-show")
                    }), "top" === l(".navbar").attr("data-sticky")) {
                    var a = l(".navbar").innerHeight();
                    l(".navbar-container").css({
                        "min-height": a,
                        "margin-bottom": -a
                    })
                }
                l(document).on("click", "a.go-to", function(a) {
                    "" !== this.hash && 0 < l(this.hash).length && (a.preventDefault(), s(this.hash), "true" === e.attr("aria-expanded") && e.trigger("click"))
                }), l(document).on("click", "#go-to-prev", function(a) {
                    var e = l("#site-navbar-nav li.active");
                    0 === l("#site-navbar-nav li.active").length && (e = l("#site-navbar-nav li").first()), s(e.prev().find("a.go-to").attr("href"))
                }), l(document).on("click", "#go-to-next", function(a) {
                    var e = l("#site-navbar-nav li.active");
                    0 === l("#site-navbar-nav li.active").length && (e = l("#site-navbar-nav li").first()), s(e.next().find("a.go-to").attr("href"))
                }), l(document).keydown(function(a) {
                    if (37 == a.keyCode || 39 == a.keyCode) {
                        if (l("input, select, textarea, area").is(":focus")) return !0;
                        if (!0 === h || !0 === p) return !0;
                        var e = l("#site-navbar-nav li.active");
                        if (0 === l("#site-navbar-nav li.active").length && (e = l("#site-navbar-nav li").first()), 37 == a.keyCode) var t = e.prev().find("a.go-to").attr("href");
                        else if (39 == a.keyCode) t = e.next().find("a.go-to").attr("href");
                        s(t)
                    }
                })
            }(),
            function() {
                var a = l(".bg-image-holder");
                if (a.length && a.each(function() {
                        var a = l(this),
                            e = a.children("img").attr("src");
                        a.css("background-image", "url(" + e + ")").children("img").hide()
                    }), c.hasClass("slideshow-background") && c.vegas({
                        preload: !0,
                        timer: !1,
                        delay: 5e3,
                        transition: "fade",
                        transitionDuration: 1e3,
                        slides: [{
                            src: "demo/images/image-3.jpg"
                        }, {
                            src: "demo/images/image-4.jpg"
                        }, {
                            src: "demo/images/image-2.jpg"
                        }, {
                            src: "demo/images/image-7.jpg"
                        }]
                    }), c.hasClass("slideshow-zoom-background") && c.vegas({
                        preload: !0,
                        timer: !1,
                        delay: 7e3,
                        transition: "zoomOut",
                        transitionDuration: 4e3,
                        slides: [{
                            src: "demo/images/image-4.jpg"
                        }, {
                            src: "demo/images/image-7.jpg"
                        }, {
                            src: "demo/images/image-2.jpg"
                        }, {
                            src: "demo/images/image-3.jpg"
                        }]
                    }), c.hasClass("slideshow-video-background") && c.vegas({
                        preload: !0,
                        timer: !1,
                        delay: 5e3,
                        transition: "fade",
                        transitionDuration: 1e3,
                        slides: [{
                            src: "demo/images/image-3.jpg"
                        }, {
                            src: "demo/video/marine.jpg",
                            video: {
                                src: ["demo/video/marine.mp4", "demo/video/marine.webm", "demo/video/marine.ogv"],
                                loop: !1,
                                mute: !0
                            }
                        }, {
                            src: "demo/images/image-4.jpg"
                        }, {
                            src: "demo/images/image-2.jpg"
                        }]
                    }), c.hasClass("kenburns-background")) {
                    c.vegas({
                        preload: !0,
                        transition: "swirlLeft2",
                        transitionDuration: 4e3,
                        timer: !1,
                        delay: 1e4,
                        slides: [{
                            src: "demo/images/image-3.jpg",
                            valign: "top"
                        }, {
                            src: "demo/images/image-5.jpg",
                            valign: "top"
                        }, {
                            src: "demo/images/image-2.jpg",
                            valign: "top"
                        }],
                        walk: function(a) {}
                    })
                }
                if (0 < l("#youtube-background").length) {
                    var e = [{
                        videoURL: "2NBKDiqEtn4",
                        showControls: false,
                        containment: ".overlay-video",
                        autoPlay: true,
                        mute: true,
                        startAt: 0,
                        opacity: 1,
                        loop: true,
                        showYTLogo: false,
                        optimizeDisplay: true,
                        realfullscreen: false,
                        addRaster: false
                    }];
                    l(".player").YTPlaylist(e, !0)
                }
                if (0 < l("#youtube-multiple-background").length) {
                    e = [{
                        videoURL: "CG20eBusRg0",
                        showControls: !1,
                        containment: ".overlay-video",
                        autoPlay: !0,
                        mute: !0,
                        startAt: 0,
                        opacity: 1,
                        loop: !1,
                        showYTLogo: !1,
                        realfullscreen: !0,
                        addRaster: !0
                    }, {
                        videoURL: "iXkJmJa4NvE",
                        showControls: !1,
                        containment: ".overlay-video",
                        autoPlay: !0,
                        mute: !0,
                        startAt: 0,
                        opacity: 1,
                        loop: !1,
                        showYTLogo: !1,
                        realfullscreen: !0,
                        addRaster: !0
                    }];
                    l(".player").YTPlaylist(e, !0)
                }
                c.hasClass("mobile") && l(".video-wrapper").css("display", "none"), l("[data-gradient-bg]").each(function(a, e) {
                    var t = l(this),
                        i = "granim-" + a,
                        n = (n = (n = t.attr("data-gradient-bg")).replace(" ", "")).replace(/'/g, '"');
                    n = JSON.parse(n), t.prepend('<canvas id="' + i + '"></canvas>');
                    new Granim({
                        element: "#" + i,
                        name: "basic-gradient",
                        direction: "left-right",
                        opacity: [1, 1],
                        isPausedWhenNotInView: !0,
                        states: {
                            "default-state": {
                                gradients: n
                            }
                        }
                    })
                })
            }(),
            function() {
                var a = l(".countdown[data-countdown]");
                0 < a.length && a.each(function() {
                    var e = l(this),
                        a = e.data("countdown");
                    e.countdown(a, function(a) {
                        e.html(a.strftime('<div class="countdown-container row"> <div class="col-6 col-sm-auto"><div class="countdown-item"><div class="number">%-D</div><span class="title">Day%!d</span></div></div><div class="col-6 col-sm-auto"><div class="countdown-item"><div class="number">%H</div><span class="title">Hours</span></div></div><div class="col-6 col-sm-auto"><div class="countdown-item"><div class="number">%M</div><span class="title">Minutes</span></div></div><div class="col-6 col-sm-auto"><div class="countdown-item"><div class="number">%S</div><span class="title">Seconds</span></div></div></div>'))
                    })
                })
            }(),
            function() {
                var a = l(".subscribe-form");
                if (a.length < 1) return;
                a.each(function() {
                    var a = l(this),
                        t = a.find(".subscribe-form-result");
                    a.find("form").validate({
                        submitHandler: function(e) {
                            t.fadeOut(500), l(e).ajaxSubmit({
                                target: t,
                                dataType: "json",
                                resetForm: !0,
                                success: function(a) {
                                    t.html(a.message).fadeIn(500), "error" != a.alert && (l(e).clearForm(), setTimeout(function() {
                                        t.fadeOut(500)
                                    }, 5e3))
                                }
                            })
                        }
                    })
                })
            }(),
            function() {
                var a = l(".contact-form");
                if (a.length < 1) return;
                a.each(function() {
                    var a = l(this),
                        t = a.find(".contact-form-result");
                    a.find("form").validate({
                        submitHandler: function(e) {
                            t.fadeOut(500), l(e).ajaxSubmit({
                                target: t,
                                dataType: "json",
                                success: function(a) {
                                    t.html(a.message).fadeIn(500), "error" != a.alert && (l(e).clearForm(), setTimeout(function() {
                                        t.fadeOut(500)
                                    }, 5e3))
                                }
                            })
                        }
                    })
                })
            }(), l('[data-toggle="tooltip"]').tooltip(), l('[data-toggle="popover"]').popover()
    }), l(window).on("resize", function() {
        n(),
            function() {
                if (0 < !i.length) return;
                var a = l("#site-navbar-nav li.active a.go-to").attr("href");
                0 === l("#site-navbar-nav li.active").length && (a = l("#site-navbar-nav li").first().find("a.go-to").attr("href"));
                var e = l(a).index();
                0 < e && (e *= -1);
                var t = e * w();
                v.css("transition", "unset").css("transform", "translate3d(" + t + "px, 0px, 0px)"), setTimeout(function() {
                    v.css("transition", "")
                }, 100)
            }()
    }), l(window).on("scroll", function() {
        0 < l(window).scrollTop() ? l(".navbar").addClass("position-fixed scrolled") : l(".navbar").removeClass("position-fixed scrolled")
    })
}(jQuery);