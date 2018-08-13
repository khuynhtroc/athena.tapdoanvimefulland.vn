function AnimationDelay() {
    $(Itemx).each(function(e, t) {
        var a = 50
          , o = 250
          , i = Math.floor(e) * ((o - a) / 2 - a);
        $(t).css({
            "-webkit-animation-delay": i + "ms",
            "animation-delay": i + "ms"
        })
    })
}
function VideoFull() {
    function e(e) {
        e || (e = window.event),
        ThisVideo.pause(),
        ThisVideo.currentTime = 0,
        n.value = 0,
        f("playPause"),
        $(".player-vid").addClass("show").removeClass("hide"),
        $(".pic-video").removeClass("hide"),
        m() && (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(),
        h(!1))
    }
    if (supportsVideo) {
        var t = document.getElementById("videocontainer")
          , a = document.getElementById("videocontrols");
        ThisVideo.controls = !1,
        a.setAttribute("data-state", "visible");
        var o = document.getElementById("playpause")
          , i = document.getElementById("stop")
          , l = document.getElementById("mute")
          , n = document.getElementById("progress")
          , s = document.getElementById("progressbar")
          , r = document.getElementById("fullscreen")
          , c = void 0 !== document.createElement("progress").max;
        c || n.setAttribute("data-state", "fake");
        var d = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement("video").webkitRequestFullScreen);
        d || (r.style.display = "none");
        var u = function(e) {
            if (e) {
                var t = Math.floor(10 * ThisVideo.volume) / 10;
                "+" === e ? 1 > t && (ThisVideo.volume += .1) : "-" === e && t > 0 && (ThisVideo.volume -= .1),
                0 >= t ? ThisVideo.muted = !0 : ThisVideo.muted = !1
            }
            f("mute")
        }
          , h = function(e) {
            t.setAttribute("data-fullscreen", !!e),
            r.setAttribute("data-state", e ? "cancel-fullscreen" : "go-fullscreen"),
            1 == e ? $("body").addClass("fullvideo") : $("body").removeClass("fullvideo")
        }
          , m = function() {
            return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement)
        }
          , p = function() {
            m() ? (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(),
            h(!1)) : (t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullScreen ? ThisVideo.webkitRequestFullScreen() : t.msRequestFullscreen && t.msRequestFullscreen(),
            h(!0))
        };
        if (document.addEventListener) {
            ThisVideo.addEventListener("loadedmetadata", function() {
                n.setAttribute("max", ThisVideo.duration)
            });
            var f = function(e) {
                "playPause" == e ? ThisVideo.paused || ThisVideo.ended ? o.setAttribute("data-state", "play") : o.setAttribute("data-state", "pause") : "mute" == e && l.setAttribute("data-state", ThisVideo.muted ? "unmute" : "mute")
            };
            ThisVideo.addEventListener("play", function() {
                f("playPause")
            }, !1),
            ThisVideo.addEventListener("pause", function() {
                f("playPause")
            }, !1),
            ThisVideo.addEventListener("volumechange", function() {
                u()
            }, !1),
            o.addEventListener("click", function() {
                ThisVideo.paused || ThisVideo.ended ? (ThisVideo.play(),
                $(".player-vid").addClass("hide").removeClass("show")) : (ThisVideo.pause(),
                $(".player-vid").addClass("show").removeClass("hide"))
            }),
            i.addEventListener("click", function() {
                ThisVideo.pause(),
                ThisVideo.currentTime = 0,
                n.value = 0,
                f("playPause"),
                $(".player-vid").addClass("show").removeClass("hide"),
                $(".pic-video").removeClass("hide"),
                m() && (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(),
                h(!1))
            }),
            l.addEventListener("click", function() {
                ThisVideo.muted = !ThisVideo.muted,
                f("mute")
            }),
            r.addEventListener("click", function() {
                p()
            }),
            ThisVideo.addEventListener("timeupdate", function() {
                n.getAttribute("max") || n.setAttribute("max", ThisVideo.duration),
                n.value = ThisVideo.currentTime,
                s.style.width = Math.floor(ThisVideo.currentTime / ThisVideo.duration * 100) + "%"
            }),
            n.addEventListener("click", function(e) {
                var t = (e.pageX - (this.offsetLeft + this.offsetParent.offsetLeft + this.offsetParent.offsetParent.offsetLeft)) / this.offsetWidth;
                ThisVideo.currentTime = t * ThisVideo.duration
            }),
            document.addEventListener("fullscreenchange", function() {
                h(!(!document.fullScreen && !document.fullscreenElement))
            }),
            document.addEventListener("webkitfullscreenchange", function() {
                h(!!document.webkitIsFullScreen)
            }),
            document.addEventListener("mozfullscreenchange", function() {
                h(!!document.mozFullScreen)
            }),
            document.addEventListener("msfullscreenchange", function() {
                h(!!document.msFullscreenElement)
            }),
            ThisVideo.addEventListener("ended", e, !1),
            $(document).ready( function() {
                $(".player-vid").on("click", function(e) {
                    e.preventDefault(),
                        $(".center-content").addClass("fadeout"),
                        $(".pic-video").addClass("hide"),
                    (ThisVideo.paused || ThisVideo.ended) && (ThisVideo.play(),
                        $(".controls").addClass("addshow"),
                        $(".player-vid").addClass("hide").removeClass("show"))
                })
            }),

            isTouchDevice || null != isMobile.all ? (f("mute"),
            o.setAttribute("data-state", "pause")) : (f("mute"),
            o.setAttribute("data-state", "pause"),
            $(".video-full").on("click", function() {
                ThisVideo.paused || ThisVideo.ended ? (ThisVideo.play(),
                $(".player-vid").addClass("hide").removeClass("show")) : (ThisVideo.pause(),
                $(".player-vid").addClass("show").removeClass("hide"))
            }))
        }
    }
}
function NavClick() {
    $(".nav-click").on("click", function() {
        return $(".nav-click").hasClass("active") ? ($(".navigation").scrollTop(0),
        $(".nav-click").removeClass("active"),
        $(".sub-nav").removeClass("no-link"),
        $(".overlay-menu, .navigation").removeClass("show"),
        $("html, body").removeClass("no-scroll"),
        $(".box-video-center").length && StartPlay()) : ($(".navigation").scrollTop(0),
        $(".nav-click").addClass("active"),
        $(".sub-nav").addClass("no-link"),
        $(".overlay-menu, .navigation").addClass("show"),
        $("html, body").addClass("no-scroll"),
        $(".box-video-center").length && StopPlay()),
        !1
    }),
    $(".subscribe-icon").on("click", function() {
        return document.getElementById("register").reset(),
        $("html, body").addClass("no-scroll"),
        $(".register-form").scrollTop(0),
        $(".subscribe-icon").addClass("active"),
        $(".sub-nav").addClass("no-link"),
        $(".register-form").addClass("show"),
        $(".register-form h3").addClass("show"),
        $(".require-col").children().each(function() {
            var e = $(this);
            $(e).addClass("show")
        }),
        $(".box-video-center").length && StopPlay(),
        !1
    }),
    $(".close, .register-form span").on("click", function() {
        return $("html, body").removeClass("no-scroll"),
        $(".register-form").scrollTop(0),
        $(".subscribe-icon").removeClass("active"),
        $(".sub-nav").removeClass("no-link"),
        $(".register-form").removeClass("show"),
        $(".register-form h3, .register-form .require-col .input-text, .register-form .input-area, .register-form .input-but").removeClass("show"),
        $(".box-video-center").length && StartPlay(),
        !1
    }),
    $(".subscribe-icon").on("mouseenter", function() {
        $(".nav-click").hasClass("active") && $(".nav-click").trigger("click")
    }),
    $(".overlay-menu").on("click", function() {
        $(".nav-click").hasClass("active") && $(".nav-click").trigger("click")
    })
}
function BoxSlide() {
    function e() {
        setTimeout(function() {
            TweenMax.set($(".group-left").not($(".group-left")[l]), {
                y: "100%"
            }),
            TweenMax.set($(".box-cover").not($(".box-cover")[l]), {
                y: "-100%"
            }),
            TweenMax.set($(".group-right").not($(".group-right")[l]), {
                y: "100%"
            }),
            TweenMax.set($(".box-cover-right").not($(".box-cover-right")[l]), {
                y: "-100%"
            }),
            n = !1
        }, 1e3)
    }
    function t() {
        n = !0,
        TweenMax.set($(".group-left"), {
            zIndex: ""
        }),
        TweenMax.set($(".group-right"), {
            zIndex: ""
        }),
        $(".box-nav li").removeClass("active"),
        $(".box-nav li").eq(l).addClass("active"),
        $(".sub-nav li").removeClass("current"),
        $(".sub-nav li").eq(l).addClass("current"),
        $("#home-page").length && StopPlay(),
        $("#about-page").length && ScrollNiceHide(),
        TweenMax.fromTo($(".group-left")[l], 1, {
            zIndex: 2
        }, {
            y: "0%",
            ease: Quad.easeOut
        }),
        TweenMax.to($(".box-cover")[l], 1, {
            y: "0%",
            ease: Quad.easeOut,
            onComplete: e()
        }),
        TweenMax.fromTo($(".group-right")[l], .8, {
            zIndex: 1
        }, {
            y: "0%",
            delay: .4,
            ease: Quad.easeOut
        }),
        TweenMax.to($(".box-cover-right")[l], 1, {
            y: "0%",
            ease: Quad.easeOut,
            onComplete: function() {
                $(".group-left, .group-right").removeClass("select"),
                $(".group-left").eq(l).addClass("select"),
                $(".group-right").eq(l).addClass("select"),
                $("#home-page").length && (0 !== l && 4 !== l && $(".box-left").removeClass("visible"),
                o()),
                $("#about-page").length && (setTimeout(function() {
                    ScrollNiceA()
                }, 100),
                setTimeout(function() {
                    Check()
                }, 200))
            }
        })
    }
    function a() {
        n = !0,
        TweenMax.set($(".group-left"), {
            zIndex: ""
        }),
        TweenMax.set($(".group-right"), {
            zIndex: ""
        }),
        $(".box-nav li").removeClass("active"),
        $(".box-nav li").eq(l).addClass("active"),
        $(".sub-nav li").removeClass("current"),
        $(".sub-nav li").eq(l).addClass("current"),
        $("#home-page").length && StopPlay(),
        $("#about-page").length && ScrollNiceHide(),
        TweenMax.fromTo($(".group-left")[l], 1, {
            y: "-100%",
            zIndex: 2
        }, {
            y: "0%",
            ease: Quad.easeOut
        }),
        TweenMax.fromTo($(".box-cover")[l], 1, {
            y: "100%"
        }, {
            y: "0%",
            ease: Quad.easeOut,
            onComplete: e()
        }),
        TweenMax.fromTo($(".group-right")[l], .8, {
            y: "-100%",
            zIndex: 1
        }, {
            y: "0%",
            delay: .4,
            ease: Quad.easeOut
        }),
        TweenMax.fromTo($(".box-cover-right")[l], 1, {
            y: "100%"
        }, {
            y: "0%",
            ease: Quad.easeOut,
            onComplete: function() {
                $(".group-left, .group-right").removeClass("select"),
                $(".group-left").eq(l).addClass("select"),
                $(".group-right").eq(l).addClass("select"),
                $("#home-page").length && (0 !== l && 4 !== l && $(".box-left").removeClass("visible"),
                o()),
                $("#about-page").length && (setTimeout(function() {
                    ScrollNiceA()
                }, 100),
                setTimeout(function() {
                    Check()
                }, 200))
            }
        })
    }
    function o() {
        switch (l) {
        case 0:
            $(".box-left").addClass("visible"),
            $(".subscribe-icon").addClass("show"),
            StartPlay();
            break;
        case 1:
            $(".subscribe-icon").removeClass("show"),
            StopPlay();
            break;
        case 2:
            $(".subscribe-icon").removeClass("show"),
            StopPlay();
            break;
        case 3:
            $(".subscribe-icon").removeClass("show"),
            StopPlay();
            break;
        case 4:
            $(".box-left").addClass("visible"),
            $(".subscribe-icon").removeClass("show"),
            StopPlay();
            break;
        case 5:
            $(".box-left").addClass("visible"),
            $(".subscribe-icon").removeClass("show"),
            StopPlay()
        }
    }
    var i = $(".group-left").length
      , l = $(".group-left").index()
      , n = !1;
    TweenMax.set($(".group-left").not($(".group-left")[l]), {
        y: "100%"
    }),
    TweenMax.set($(".box-cover").not($(".box-cover")[l]), {
        y: "-100%"
    }),
    TweenMax.set($(".group-right").not($(".group-right")[l]), {
        y: "100%"
    }),
    TweenMax.set($(".box-cover-right").not($(".box-cover-right")[l]), {
        y: "-100%"
    });
    var s;
    $("#home-page").length && $(".group-left").each(function() {
        $(".box-nav").find("ul").append('<li><a href="javascript:void(0);"></a></li>')
    }),
    $(".box-nav li").on("click", function() {
        var e = $(this).index();
        return clearInterval(s),
        s = null,
        n ? !1 : (!n && e > l ? (l = e,
        t()) : !n && l > e && (l = e,
        a()),
        !1)
    }),
    $(".box-nav li:first-child").addClass("active"),
    $(".container").on("mousewheel", function(e) {
        if ($(window).width() > 1100 && !$("body").hasClass("fullvideo")) {
            var o;
            n === !1 && (o = function() {
                var t = Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY || -e.detail));
                return t
            }()),
            clearTimeout($.data(this, "timer")),
            $.data(this, "timer", setTimeout(function() {
                n = !1
            }, 1e3)),
            clearInterval(s),
            s = null,
            null != $(".group-left")[l] && 1 === parseInt(o) ? (l >= i - 1 ? l = 0 : l++,
            t()) : null != $(".group-left")[l] && -1 === parseInt(o) && (0 >= l ? l = i - 1 : l--,
            a())
        }
        e.preventDefault()
    })
}
function SlidePicture() {
    if ($("#home-page").length && $(window).width() > 1100 && ($(".box-left").addClass("visible"),
    $(".subscribe-icon").addClass("show"),
    $(".box-nav").append("<ul></ul>"),
    BoxSlide(),
    setTimeout(function() {
        $(".group-left:first-child, .group-right:first-child").addClass("select")
    }, 500),
    setTimeout(function() {
        addMove()
    }, 1e3)),
    $("#about-page").length && $(window).width() > 1100 && ($(".logo").addClass("show"),
    BoxSlide(),
    setTimeout(function() {
        $(".group-left:first-child, .group-right:first-child").addClass("select")
    }, 100),
    setTimeout(function() {
        ScrollNiceA()
    }, 200)),
    $("#library-page, #facilities-page, #apartment-page").length) {
        if ($(window).width() > 1100) {
            var e = new Swiper(".slide-bg",{
                speed: 1e3,
                paginationClickable: !0,
                pagination: ".pagination",
                direction: "vertical",
                simulateTouch: !1,
                mousewheelControl: !0,
                keyboardControl: !0,
                effect: "slide",
                onInit: function(e) {
                    $(".item-container").removeClass("show-text"),
                    $(".item-container").eq(e.activeIndex).addClass("show-text"),
                    $(".sub-nav").addClass("show"),
                    $(".show-text .note-facilities").addClass("show"),
                    $(".show-text .all-dot-top").children().each(function(e) {
                        var t = $(this);
                        setTimeout(function() {
                            $(t).addClass("fadeindown")
                        }, 200 * (e + 1))
                    })
                },
                onTransitionStart: function() {
                    $(".house-text").removeClass("show"),
                    $(".sub-nav li").removeClass("current")
                },
                onTransitionEnd: function(e) {
                    $(".item-container").removeClass("show-text"),
                    $(".note-facilities").removeClass("show"),
                    $(".dot-num").removeClass("fadeindown"),
                    $(".item-container").eq(e.activeIndex).addClass("show-text");
                    var t = $(".show-text").attr("data-hash");
                    $('.sub-nav li a[data-name= "' + t + '"]').parent().addClass("current"),
                    $(".show-text .note-facilities").addClass("show"),
                    $(".show-text .all-dot-top").children().each(function(e) {
                        var t = $(this);
                        setTimeout(function() {
                            $(t).addClass("fadeindown")
                        }, 200 * (e + 1))
                    });
                    var a = ($(".sub-nav li.current a").attr("data-name"),
                    $(".sub-nav li.current a").attr("href"))
                      , o = $(".sub-nav li.current a").attr("data-title")
                      , i = $(".sub-nav li.current a").attr("data-keyword")
                      , l = $(".sub-nav li.current a").attr("data-description")
                      , n = $(".sub-nav li.current a").attr("data-name");
                    changeUrl(a, o, l, i, n, o, l)
                }
            });
            setTimeout(function() {
                e.once("onInit")
            }, 200)
        }
        var t = $(".pic-center");
        $(t).each(function(e, t) {
            $(t).BTQSlider({
                pagination: !0,
                navigation: !0,
                slideSpeed: 600,
                paginationSpeed: 600,
                rewindNav: !1,
                itemsCustom: [[0, 1], [300, 1], [400, 1], [500, 1], [600, 2], [1100, 2]],
                afterAction: function() {
                    this.$BTQItems.removeClass("select"),
                    this.$BTQItems.eq(this.currentItem).addClass("select"),
                    Check()
                }
            })
        })
    }
    setTimeout(function() {
        Check()
    }, 200)
}
function Check() {
    var e = $(window).width()
      , t = $(".pic-center, .video-slide, .pdf-slide");
    if ($("#library-page").length && $(".slide-buttons").each(function(e, t) {
        var a = $(this).parent().parent().innerHeight();
        $(t).css({
            top: -a / 2
        })
    }),
    $(t).each(function() {
        var t = $(this).find(".slide-item").length;
        e > 1100 ? t >= 2 ? $(this).removeClass("TA-center") : $(this).addClass("TA-center") : e >= 600 && 1100 >= e ? t >= 2 ? $(this).removeClass("TA-center") : $(this).addClass("TA-center") : $(this).removeClass("TA-center")
    }),
    $("#about-page").length) {
        var a = $(".select .scrollA").height();
        a >= $(window).height() - 300 ? $(".select").find(".nicescroll-rails").css({
            display: "block"
        }) : $(".select").find(".nicescroll-rails").css({
            display: "none"
        })
    }
}
function StopPlay() {
	if(ThisVideo){
		ThisVideo.paused && ThisVideo.ended || ThisVideo.pause();
	}
}
function StartPlay() {
	if(ThisVideo){
    	(ThisVideo.paused || ThisVideo.ended) && ThisVideo.play();
	}
}
function addMove() {
    var e = $(".slogan").children().children().length
      , t = 100 * e;
    $(".group-left.select").find(".center-content").addClass("move"),
    $(".move .slogan").children().children().each(function(e) {
        var t = $(this);
        timer = setTimeout(function() {
            $(t).addClass("move")
        }, 50 * (e + 1))
    }),
    0 == Videoload && (Videoload = 1,
    setTimeout(function() {
        isTouchDevice || null != isMobile.all || $(".player-vid").trigger("click"),
        $(".center-content").addClass("fadeout"),
        $(".center-content").one(animationEnd, function() {
            $(".logo").addClass("show")
        })
    }, t + 500))
}
function AniText() {
    if ($(".title-page").addClass("show"),
    $(".title-page h1").children().children().each(function(e) {
        var t = $(this);
        setTimeout(function() {
            $(t).addClass("move")
        }, 100 * (e + 1))
    }),
    $("#home-page").length) {
        $(".slogan").children().children().length;
        $(".center-content").addClass("move"),
        $(".move .slogan").children().children().each(function(e) {
            var t = $(this);
            timer = setTimeout(function() {
                $(t).addClass("move")
            }, 60 * (e + 1))
        })
    }
    if ($("#contact-page").length) {
        $(".text-intro h3").children().children().length;
        $(".text-intro").addClass("move"),
        $(".move h3").children().children().each(function(e) {
            var t = $(this);
            timer = setTimeout(function() {
                $(t).addClass("move")
            }, 40 * (e + 1))
        })
    }
}
function NewsLoad(e, t) {
    var a = $(t).find(".news-text");
    $(a).length && $(a).remove(),
    $(".news-list").addClass("hide"),
    $(".scrollB").getNiceScroll().hide(),
        $(".loadicon").show(),
    $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            $(t).find(".news-content").append($(e).find('.news-content').length ? $(e).find('.news-content').html() : e),
            $(window).width() <= 1100 ? $(".news-text img").addClass("zoom-pic") : $(".news-text img").removeClass("zoom-pic"),
            ZoomPic(),
            $(".news-text a, .news-text p a").on("click", function(e) {
                e.preventDefault();
                var t = $(this).attr("href");
                return window.open(t, "_blank"),
                !1
            }),
            $(t).find(".news-content").stop().animate({
                opacity: 1
            }, 100, "linear", function() {
                $(window).width() > 1100 ? ScrollNiceC() : detectBut(),
                $(t).find(".news-text").addClass("fadein"),
                $(".loadicon").fadeOut(300, "linear", function() {
                    $(".loadicon")
                })
            }),
            $(".close-news, .click-hover").on("click", function() {
                $(".news-content").stop().animate({
                    opacity: 0
                }, 600, "linear", function() {
                    $(".colum-box-news").removeClass("show"),
                    $(".scrollC").scrollTop(0),
                    $(".scrollC").getNiceScroll().remove(),
                    $(".news-content").children().remove(),
                    $(".news-list").removeClass("hide"),
                    $(".logo, .hotline, .nav-click, .language, .subscribe-icon").removeClass("scale"),
                    $(".grid-item").hasClass("show") || $(".grid-item").addClass("show"),
                    ScrollNiceB();
                    var e = $(".nav li.current a").attr("href")
                      , t = $(".nav li.current a").attr("data-title")
                      , a = $(".nav li.current a").attr("data-keyword")
                      , o = $(".nav li.current a").attr("data-description")
                      , i = $(".nav li.current a").attr("data-name");
                    changeUrl(e, t, o, a, i, t, o)
                })
            })
        }
    })
}
function LoadProgress(e, t) {
    $(".scrollB").children().length && $(".scrollB").children().remove(),
    $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            $(".scrollB").append(e),
            $(".progress-list").stop().animate({
                opacity: 1
            }, 500, "linear", function() {
                $(window).width() > 1100 && ScrollNiceB(),
                $(".box-library h2").text(t).removeClass("fadeout").addClass("fadeindown"),
                $(".box-progress").each(function(e) {
                    var t = $(this);
                    setTimeout(function() {
                        $(t).addClass("fadein")
                    }, 100 * (e + 1))
                }),
                $(".select-list").addClass("fadein"),
                $(".loadicon").fadeOut(300, "linear", function() {
                    $(".loadicon")
                })
            }),
            $(".view-album").on("click", function(e) {
                e.preventDefault();
                var t = $(this).attr("data-href");
                return $(".loadicon").length || $("body").append('<div class="loadicon" style="display:block"></div>'),
                $("html, body").addClass("no-scroll"),
                $(".overlay-dark").addClass("show"),
                $(".all-album").fadeIn(300, "linear", function() {
                    AlbumLoad(t, 0)
                }),
                !1
            }),
            $(".box-progress").on("click", function(e) {
                return e.preventDefault(),
                $(this).find("a").trigger("click"),
                !1
            })
        }
    })
}
function ApartmentLoad(e, t) {
    $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            $(".load-apartment").append(e),
            $(".load-apartment .house-detail").length > 1 && $(".load-apartment .house-detail").last().remove(),
            $(".title-box h2 strong").text(t),
            $(".apartment-pic img").addClass("zoom-pic"),
            ZoomPic(),
            $(".loadicon").fadeOut(300, "linear", function() {
                $(".house-detail").addClass("show-house"),
                $(".go-back").addClass("show"),
                $(".loadicon").remove()
            }),
            $(".go-back, .overlay-dark").on("click", function() {
                var e = $(".go-back").attr("data-href")
                  , t = $(".go-back").attr("data-title")
                  , a = $(".go-back").attr("data-keyword")
                  , o = $(".go-back").attr("data-description")
                  , i = $(".go-back").attr("data-name");
                return changeUrl(e, t, o, a, i, t, o),
                $(".load-apartment").fadeOut(500, "linear", function() {
                    $(".overlay-dark").removeClass("show"),
                    $(".go-back").remove(),
                    $(".house-detail").remove(),
                    $("html, body").removeClass("no-scroll")
                }),
                !1
            })
        }
    })
}
function VideoLoad(e) {
    $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            function t() {
                o.play()
            }
            function a() {
                o.pause()
            }
            if ($(".allvideo").append(e),
            $("#view-video").length > 0)
                var o = document.getElementById("view-video");
            $(".nav-click").hasClass("active") && $(".nav-click").trigger("click"),
            $(".loadicon").fadeOut(300, "linear", function() {
                $("#view-video").length > 0 && t(),
                $(".loadicon").remove()
            });
            var i = $("#view-video").length;
            $(".close-video").on("click", function() {
                0 != i && a(),
                $(".allvideo").fadeOut(500, "linear", function() {
                    if ($(".overlay-dark").removeClass("show"),
                    $(".allvideo .video-list").remove(),
                    $("html, body").removeClass("no-scroll"),
                    $(".to-scrollV").length) {
                        var e = $(".to-scrollV").offset().top;
                        $(".to-scrollV").removeClass("to-scrollV"),
                        $(window).width() < 1100 && $("html, body").scrollTop(e - 60)
                    }
                })
            })
        }
    })
}
function AlbumLoad(e, t) {
    $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            function a() {
                clearTimeout(timex),
                $(".pic-name").removeClass("move"),
                $(".pic-name h3").children().children().removeClass("move"),
                $(".pic-name small").children().children().removeClass("move"),
                $(".item-active").find(".pic-name").addClass("move"),
                $(".move h3, .move  small").children().children().each(function(e) {
                    var t = $(this);
                    setTimeout(function() {
                        $(t).addClass("move")
                    }, 100 * (e + 1))
                })
            }
            if ($(".all-album").append(e),
            $(".all-album .album-load").length > 1 && $(".all-album .album-load").last().remove(),
            $(".pic-name > h3").lettering("words").children("span").lettering().children("span").lettering(),
            $(".pic-name > small").lettering("words").children("span").lettering().children("span").lettering(),
            $(window).width() > 1100)
                var o = 1;
            else if ($(window).width() > 740 && $(window).width() <= 1100)
                var o = 2;
            else
                var o = 3;
            new Swiper(".album-center",{
                zoom: !0,
                zoomMax: o,
                lazyLoading: !0,
                watchSlidesVisibility: !0,
                preloadImages: !1,
                slidesPerView: 1,
                speed: 600,
                grabCursor: !0,
                nextButton: ".next-pic",
                prevButton: ".prev-pic",
                spaceBetween: 0,
                centeredSlides: !0,
                keyboardControl: !0,
                mousewheelControl: !0,
                onInit: function(e) {
                    e.slideTo(t, 0, !0),
                    a(),
                    o > 1 && $(".container-zoom img").addClass("zoomscale")
                },
                onTransitionStart: function() {},
                onTransitionEnd: function() {
                    $(".container-zoom img").removeClass("zoomin"),
                    $(".close-album, .slide-pic-nav").removeClass("level-index-out"),
                    a()
                }
            });
            $(".album-load").animate({
                opacity: 1
            }, 100, "linear", function() {
                $(".album-pic-center").length > 1 && $(".slide-pic-nav").css({
                    display: "block"
                }),
                $(".loadicon").fadeOut(300, "linear", function() {
                    $(".loadicon").remove()
                })
            }),
            $(".close-album").on("click", function() {
                return $(".all-album").fadeOut(500, "linear", function() {
                    $(".overlay-dark").removeClass("show"),
                    $(".album-load").remove()
                }),
                $("html, body").removeClass("no-scroll"),
                !1
            });
            var i = document.querySelector(".all-album");
            i.addEventListener("touchmove", function(e) {
                e.preventDefault()
            })
        }
    })
}
function ZoomMap() {
    $(".viewer").addClass("desktop").addClass("fadein");
    var e = $(".viewer");
    e.find(".panzoom").panzoom({
        $zoomIn: e.find(".pic-zoom-in"),
        $zoomOut: e.find(".pic-zoom-out"),
        $zoomRange: e.find(".zoom-range"),
        $reset: e.find(".pic-reset"),
        maxScale: 4,
        minScale: 1,
        increment: .3,
        contain: "automatic"
    }).panzoom("zoom");
    var t = e.find(".panzoom").panzoom();
    t.on("mousewheel.focal", function(e) {
        e.preventDefault();
        var a = e.delta || e.originalEvent.wheelDelta
          , o = a ? 0 > a : e.originalEvent.deltaY > 0;
        t.panzoom("zoom", o, {
            increment: .1,
            animate: !1,
            focal: e
        })
    }),
    $(".map-img").addClass("show"),
    ScaleMap(),
    setTimeout(function() {
        $(".apartment-pointer").addClass("show")
    }, 1e3)
}
function ScaleMap() {
    $(".panzoom").css({
        "-webkit-transform": "matrix(1, 0, 0, 1, 0, 0)",
        transform: "matrix(1, 0, 0, 1, 0, 0)"
    });
    var e = $(window).height() / 1200;
    $(".map-img.show").scale(e)
}
function FocusText() {
    var e = "Họ và Tên (*)  Điện thoại (*) Email (*)  Địa chỉ Số CMND (*) Full name (*)  Phone numbers (*) Address ID card (*)"
      , t = "";
    $("input").focus(function() {
        t = $(this).val(),
        e.indexOf(t) >= 0 && $(this).val("")
    }),
    $("input").focusout(function() {
        "" == $(this).val() && $(this).val(t)
    });
    var a = "";
    $("textarea").focus(function() {
        a = $(this).val(),
        $(this).val("")
    }).focusout(function() {
        "" == $(this).val() && $(this).val(a)
    })
}
function ScrollNiceA() {
    $(window).width() <= 1100 ? ($(".scrollA").getNiceScroll().remove(),
    $(".scrollA").css({
        "overflow-x": "visible",
        "overflow-y": "visible"
    })) : ($(".select .scrollA").css({
        "overflow-x": "hidden",
        "overflow-y": "hidden"
    }),
    $(".select .scrollA").getNiceScroll().show(),
    $(".select .scrollA").niceScroll({
        touchbehavior: !0,
        horizrailenabled: !1,
        cursordragontouch: !0,
        grabcursorenabled: !1
    }),
    $(".select .scrollA").animate({
        scrollTop: "0px"
    }))
}
function ScrollNiceB() {
    $(window).width() <= 1100 ? ($(".scrollB").getNiceScroll().remove(),
    $(".scrollB").css({
        "overflow-x": "visible",
        "overflow-y": "visible"
    })) : ($(".scrollB").css({
        "overflow-x": "hidden",
        "overflow-y": "hidden"
    }),
    $(".scrollB").getNiceScroll().show(),
    $(".scrollB").niceScroll({
        touchbehavior: !0,
        horizrailenabled: !1,
        cursordragontouch: !0,
        grabcursorenabled: !1
    }),
    0 == News && $(".scrollB").animate({
        scrollTop: "0px"
    }))
}
function ScrollNiceC() {
    $(window).width() <= 1100 ? ($(".scrollC").getNiceScroll().remove(),
    $(".scrollC").css({
        "overflow-x": "visible",
        "overflow-y": "visible"
    })) : ($(".scrollC").css({
        "overflow-x": "hidden",
        "overflow-y": "hidden"
    }),
    $(".scrollC").getNiceScroll().show(),
    $(".scrollC").niceScroll({
        touchbehavior: !0,
        horizrailenabled: !1,
        cursordragontouch: !0,
        grabcursorenabled: !1
    }),
    $(".scrollC").animate({
        scrollTop: "0px"
    }))
}
function ScrollNiceHide() {
    $(".scrollA, .scrollB, .scrollC").getNiceScroll().remove()
}
function LinkPage() {
    $("a.link-load, a.go-page, .go-details, .apartment-pointer a").on("click", function(e) {
        e.preventDefault(),
        $(".mask").removeClass("hide"),
        ScrollNiceHide(),
        $("html, body").addClass("no-scroll");
        var t = $(this).attr("href");
        return $(".container").stop().animate({
            opacity: 1
        }, 500, "linear", function() {
            window.location = t
        }),
        !1
    })
}
function ContentLoad() {
    function e() {
        var e = new Date
          , t = e.getFullYear();
        $(".select-box li a[data-year='" + t + "']").trigger("click")
    }
    if (ResizeWindows(),
    AnimationDelay(),
    LinkPage(),
    FocusText(),
    NavClick(),
    Option(),
    ZoomPic(),
    $("html, body").removeClass("no-scroll"),
    $("#home-page").length || ($(".logo").css({
        cursor: "pointer"
    }),
    $(".logo").on("click", function() {
        $(".nav li:first-child a").trigger("click")
    })),
    $("#video-full").length && VideoFull(),
    setTimeout(function() {
        AniText()
    }, 200),
    $("#home-page").length && ($(".bottom-link > a").addClass("hidden"),
    $(".whell").addClass("show"),
    $(".box.news").on("click", function(e) {
        e.preventDefault(),
        $(this).find(".go-details").trigger("click")
    }),
    $(".box.video-home").on("click", function(e) {
        e.preventDefault(),
        $(this).find(".player").trigger("click")
    }),
    $(".box.album-home").on("click", function(e) {
        e.preventDefault(),
        $(this).find(".view-album").trigger("click")
    }),
    $(window).width() <= 1100),
    $("#about-page").length && ($(".whell").addClass("show"),
    $(".investor.desktop").removeClass("desktop"),
    $(".subscribe-icon").addClass("b-corner show"),
    $(".sub-nav li").on("click", function(e) {
        e.preventDefault(),
        $(".sub-nav li").removeClass("current"),
        $(this).addClass("current");
        var t = $(this).find("a").attr("data-target");
        return $(".box-nav li a[data-dot='" + t + "']").parent().trigger("click"),
        !1
    }),
    $(window).width() > 1100 && $(".sub-nav li:first-child").trigger("click")),
    $("#location-page").length && ($(".investor.desktop").removeClass("desktop"),
    $(".logo").addClass("show"),
    $(".subscribe-icon").addClass("b-corner show"),
    $(window).width() > 1100 && ZoomMap(),
    $(".zoom-box, .go-apartment").on("mouseenter", function() {
        var e = $(this).attr("data-target")
          , t = $(this).offset().left
          , a = $(this).offset().top;
        $('.show-box[data-box= "' + e + '"]').css({
            left: t + 10,
            top: a - 250
        }),
        $('.show-box[data-box= "' + e + '"]').addClass("showup")
    }),
    $(".zoom-box, .go-apartment").on("mouseleave", function() {
        $(".show-box").removeClass("showup")
    })),
    $("#facilities-page").length && ($(".investor.desktop").removeClass("desktop"),
    $(".logo").addClass("show"),
    $(".whell").addClass("show"),
    $(".subscribe-icon").addClass("b-corner show"),
    $(".bottom-link a:first-child").addClass("hidden"),
    $(".sub-nav li").click(function(e) {
        e.preventDefault(),
        $(".sub-nav li").removeClass("current"),
        $(this).addClass("current");
        var t = $(this).find("a").attr("data-name")
          , a = $(this).find("a").attr("href")
          , o = $(this).find("a").attr("data-title")
          , i = $(this).find("a").attr("data-keyword")
          , l = $(this).find("a").attr("data-description")
          , n = $(this).find("a").attr("data-name");
        if (changeUrl(a, o, l, i, n, o, l),
        $(window).width() > 1100) {
            var s = $(".slide-bg")[0].swiper
              , r = $(".item-container[data-hash='" + t + "']").index();
            s.slideTo(r, 1200, !0)
        }
        return !1
    }),
    $(window).width() > 1100 && ($(".sub-nav li.current").length ? $(".sub-nav li.current").trigger("click") : $(".sub-nav li:first-child").trigger("click")),
    $(".all-dot-top a").on("mouseenter", function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        $(".all-dot-top a, .note-facilities li").removeClass("current"),
        $(this).addClass("current"),
        $(".show-box-pic").removeClass("showup");
        var t = $(this).attr("data-name")
          , a = $(this).offset().left
          , o = $(this).offset().top
          , i = ($(this).width(),
        $(".show-box-pic").innerHeight(),
        $(".show-box-pic").width(),
        $(this).attr("data-box"));
        return $(window).width() > 1100 && (10 == i ? ($(".show-box-pic[data-pic='" + i + "']").css({
            left: a,
            top: o - 210
        }).addClass("showup"),
        $(".note-facilities li[data-text='" + t + "']").addClass("current")) : ($(".show-box-pic[data-pic='" + i + "']").css({
            left: a - 243,
            top: o - 210
        }).addClass("showup"),
        $(".note-facilities li[data-text='" + t + "']").addClass("current"))),
        !1
    }),
    $(".note-facilities li").on("mouseenter", function(e) {
        e.preventDefault(),
        e.stopPropagation();
        var t = $(this).attr("data-text")
          , a = $(".all-dot-top a[data-name ='" + t + "']");
        return $(".all-dot-top a, .note-facilities li").removeClass("current"),
        $(a).addClass("current"),
        $(".show-box-pic").removeClass("showup"),
        $(".all-dot-top a[data-name='" + t + "']").trigger("mouseenter"),
        !1
    }),
    $(".note-facilities li, .all-dot-top a").on("mouseleave", function() {
        $(".all-dot-top a, .note-facilities li").removeClass("current"),
        $(".show-box-pic").removeClass("showup")
    }),
    $(".all-dot-top a:not(.no-pic)").on("click", function(e) {
        if (e.preventDefault(),
        e.stopPropagation(),
        $(window).width() > 1100) {
            var t = $(this).attr("data-name");
            if ("" !== t) {
                var a = $(".show-box-pic[data-pic='" + t + "']").find("img").attr("data-srcl");
                a && ThumbZoom(a),
                $(".all-dot-top a, .note-facilities li").removeClass("current"),
                $(".show-box-pic").removeClass("showup")
            }
        }
        return !1
    }),
    $(".note-facilities li").on("click", function(e) {
        e.preventDefault(),
        e.stopPropagation();
        var t = $(this).attr("data-text");
        $(".all-dot-top a[data-name='" + t + "']").trigger("click")
    }),
    $(".show-box-pic").on("click", function(e) {
        e.preventDefault(),
        e.stopPropagation();
        var t = $(this).find("img").attr("data-srcl");
        return t && ThumbZoom(t),
        $(".all-dot-top a, .note-facilities li").removeClass("current"),
        $(".show-box-pic").removeClass("showup"),
        !1
    })),
    $("#apartment-page").length && ($(".investor.desktop").removeClass("desktop"),
    $(".logo").addClass("show"),
    $(".whell").addClass("show"),
    $(".subscribe-icon").addClass("b-corner show"),
    $(".bottom-link a:nth-child(2)").addClass("hidden"),
    setTimeout(function() {
        $(".apartment-pointer").addClass("show")
    }, 500),
    $(".sub-nav li").on("click", function(e) {
        e.preventDefault(),
        $(".sub-nav li").removeClass("current"),
        $(this).addClass("current");
        var t = $(this).find("a").attr("data-name");
        if ($(window).width() > 1100) {
            var a = $(".slide-bg")[0].swiper
              , o = $(".item-container[data-hash='" + t + "']").index();
            a.slideTo(o, 1200, !0)
        }
        return !1
    }),
    $(".onarea").hover(function(e) {
        if ($(window).width() > 1100) {
            $(".house-text").removeClass("show");
            var t = $(this).attr("data-name")
              , a = e.clientX
              , o = e.clientY
              , i = $(".house-text[data-block='" + t + "']").width();
            $(".house-text[data-block='" + t + "']").innerHeight();
            $(".house-text[data-block='" + t + "']").css({
                left: a + i / 2,
                top: o - 50
            }),
            $(".house-text[data-block='" + t + "']").addClass("show"),
            $(".num[data-num='" + t + "']").addClass("hide")
        }
    }, function() {
        $(window).width() > 1100 && ($(".house-text").removeClass("show"),
        $(".num").removeClass("hide"))
    }),
    $(".onarea").on("click", function(e) {
        e.preventDefault();
        var t = $(this).attr("href")
          , a = $(this).attr("data-name")
          , o = $(this).attr("href")
          , i = $(this).attr("data-title")
          , l = $(this).attr("data-keyword")
          , n = $(this).attr("data-description")
          , s = $(this).attr("data-name");
        return changeUrl(o, i, n, l, s, i, n),
        $(".loadicon").length || $("body").append('<div class="loadicon" style="display:block"></div>'),
        $("html, body").addClass("no-scroll"),
        $(".load-apartment").stop().fadeIn(300, "linear", function() {
            ApartmentLoad(t, a)
        }),
        !1
    }),
    $(".go-link").on("click", function(e) {
        e.preventDefault();
        var t = $(this).parent().attr("data-block");
        return $(".onarea[data-name='" + t + "']").trigger("click"),
        !1
    }),
    $(".ongoto, .pointer").on("click", function() {
        var e = $(this).attr("data-name");
        return $(window).width() > 1100 && $(".sub-nav li a[data-name='" + e + "']").trigger("click"),
        !1
    }),
    $(window).width() > 1100 ? $(".sub-nav li.current").length ? ($(".sub-nav li.current").trigger("click"),
    $(".onarea.current").length && setTimeout(function() {
        $(".onarea.current").trigger("click")
    }, 1e3)) : $(".sub-nav li:first-child").trigger("click") : $(".onarea.current").length && setTimeout(function() {
        $(".onarea.current").trigger("click")
    }, 1e3)),
    $("#virtual-page").length && ($(".investor.desktop").removeClass("desktop"),
    $(".logo").addClass("show"),
    $(".subscribe-icon").addClass("b-corner show"),
    $(".bg-degee").addClass("show").addClass("fadein")),
    $("#progress-page").length)
        if ($(".investor.desktop").removeClass("desktop"),
        $(".logo").addClass("show"),
        $(".bg-cover").addClass("show"),
        $(".bg-cover").addClass("show"),
        $(".subscribe-icon").addClass("r-corner show"),
        $(".select-header").bind("click", function() {
            $(".select-header").hasClass("onclick") ? ($(".select-header").removeClass("onclick"),
            $(this).next(".select-box").fadeOut(200, "linear")) : ($(this).addClass("onclick"),
            $(this).next(".select-box").fadeIn(200, "linear"),
            $(this).closest(".select-list").on("mouseleave", function() {
                $(this).find(".select-box").fadeOut(200, "linear"),
                $(".select-header").removeClass("onclick")
            }))
        }),
        $(".select-box li a").on("click", function(e) {
            e.preventDefault(),
            $(this).parent().parent().find("li").removeClass("selected"),
            $(this).parent().parent().parent().parent().find(".select-header h3").text($(this).text()),
            $(this).parent().addClass("selected"),
            $(this).closest(".select-box").fadeOut(200, "linear"),
            $(".box-library h2").removeClass("fadeindown").addClass("fadeout"),
            $(".select-header").removeClass("onclick");
            var t = ($(this).attr("data-year"),
            $(this).attr("href"))
              , a = $(this).find("h3").text()
              , o = $(this).attr("href")
              , i = $(this).attr("data-title")
              , l = $(this).attr("data-keyword")
              , n = $(this).attr("data-description")
              , s = $(this).attr("data-year");
            return changeUrl(o, i, n, l, s, i, n),
            $(".progress-list").stop().animate({
                opacity: 0
            }, 500, "linear", function() {
                LoadProgress(t, a)
            }),
            !1
        }),
        $(".select-box li.selected").length)
            $(".select-box li.selected a").trigger("click");
        else if ($(".select-box li a").length) {
            var t = new Date
              , a = t.getFullYear()
              , o = !1;
            $(".select-box li a").each(function(e, t) {
                $(t).attr("data-year") == a && (o = !0)
            }),
            1 == o ? e() : $(".select-box li:nth-child(1) a").trigger("click")
        } else
            $(".loadicon").remove();
    if ($("#library-page").length && ($(".investor.desktop").removeClass("desktop"),
    $(".logo").addClass("show"),
    $(".whell").addClass("show"),
    $(".subscribe-icon").addClass("b-corner show"),
    $(".sub-nav li").click(function(e) {
        e.preventDefault(),
        $(".sub-nav li").removeClass("current"),
        $(this).addClass("current");
        var t = $(this).find("a").attr("data-name");
        if ($(window).width() > 1100) {
            var a = $(".slide-bg")[0].swiper
              , o = $(".item-container[data-hash='" + t + "']").index();
            a.slideTo(o, 1200, !0)
        }
        return !1
    }),
    $(window).width() > 1100 && ($(".sub-nav li.current").length ? $(".sub-nav li.current").trigger("click") : $(".sub-nav li:first-child").trigger("click"))),
    $("#news-page").length) {
        $(".investor.desktop").removeClass("desktop"),
        $(".logo").addClass("show"),
        $(".bg-cover").addClass("show"),
        $(".subscribe-icon").addClass("r-corner show"),
        $(".link-page").on("click", function(e) {
            e.preventDefault(),
            News = 1,
            $(".loadicon").length || $("body").append('<div class="loadicon" style="display:block"></div>'),
            $(".logo, .hotline, .nav-click, .language, .subscribe-icon").addClass("scale"),
            $(".link-page").removeClass("current"),
            $(this).addClass("current");
            var t = $(this).parent().parent().parent().parent().parent().find(".colum-box-news");
            $(this).parent().parent().parent().parent().parent().attr("data-hash");
            $(t).addClass("show");
            var a = ($(this).find("a").attr("data-name"),
            $(this).find("a").attr("href"))
              , o = $(this).find("a").attr("data-title")
              , i = $(this).find("a").attr("data-keyword")
              , l = $(this).find("a").attr("data-description")
              , n = $(this).find("a").attr("data-name");
            changeUrl(a, o, l, i, n, o, l);
            var s = $(this).find("a").attr("href");
            return $(t).find(".news-content").stop().animate({
                opacity: 0
            }, 500, "linear", function() {
                NewsLoad(s, t)
            }),
            !1
        });
        var i = $(".newsid").text();
        $('.link-page a[data-name="n-' + i + '"]').parent().addClass("current"),
        $(window).width() > 1100 ? $(".link-page.current").length ? $(".link-page.current").trigger("click") : ($(".grid-item").addClass("show"),
        $(".loadicon").stop().fadeOut(500, function() {
            ScrollNiceB(),
            $(".loadicon").remove()
        })) : $(".colum-box-news").hasClass("show") || $(".news-list").each(function(e, t) {
            $(".link-page.current").length ? $(t).find(".link-page.current").trigger("click") : $(t).find(".grid-item:first-child .link-page").trigger("click")
        })
    }
    $("#contact-page").length && ($(".investor.desktop").removeClass("desktop"),
    $(".logo, .text-intro").addClass("show"),
    $(".subscribe-icon").addClass("b-corner show"),
    setTimeout(function() {
        $(".group-left").addClass("select")
    }, 1e3))
}
function ThumbZoom(e) {
    $("html, body").addClass("no-scroll"),
    $(this).parent().addClass("to-scroll"),
    $(".loadicon").length || $("body").append('<div class="loadicon" style="display:block"></div>'),
    $(".all-pics").addClass("show"),
    $(".all-pics").append('<div class="full"  style="display:block"></div>'),
    $(".overlay-dark").addClass("show");
    var t = e
      , a = t.replace("_s", "_l");
    $(".all-pics").find(".full").append('<img src ="' + a + '" alt="pic" />'),
    $(".all-pics").find(".full").append("<span></span>"),
    $("body").append('<a class="close-pics" href="javascript:void(0);">' + text_close + "</a>"),
    $(".all-pics").append('<a class="close-pics-small" href="javascript:void(0);"></a>'),
    $(".all-pics img").on("load", function() {
        $(".all-pics").addClass("show"),
        0 != TouchLenght && isTouchDevice ? ($(".full").addClass("pinch-zoom"),
        $(".pinch-zoom").each(function() {
            new Pic.PinchZoom($(this),{})
        })) : ($(".full").addClass("dragscroll"),
        $(".dragscroll").draptouch()),
        $(".full img").length > 1 && $(".full img").last().remove(),
        $(".loadicon").fadeOut(400, "linear", function() {
            0 != TouchLenght && isTouchDevice || detectMargin(),
            $(".full img").addClass("fadein"),
            $(".loadicon").remove()
        })
    }),
    $(window).width() > 1100 && $(".full span").on("click", function() {
        $(".close-pics").trigger("click")
    }),
    $(".close-pics, .close-pics-small").on("click", function() {
        $(".loadicon").remove(),
        $(".full").fadeOut(300, "linear", function() {
            if ($(".overlay-dark").removeClass("show"),
            $(".all-pics .full, .all-pics .text-length, .all-pics .pinch-zoom-container").remove(),
            $(".close-pics, .close-pics-small").remove(),
            $(".all-pics").removeClass("show"),
            $("html, body").removeClass("no-scroll"),
            $(".to-scroll").length) {
                var e = $(".to-scroll").offset().top;
                $(window).width() < 1100 && $("html, body").scrollTop(e - 60),
                $(".to-scroll").removeClass("to-scroll")
            }
        })
    })
}
function ZoomPic() {
    $("img").on("click", function() {
        if ($(window).width() <= 1100 && $(this).hasClass("zoom-pic")) {
            $("html, body").addClass("no-scroll"),
            $(this).parent().addClass("to-scrollZ"),
            $(".loadicon").length || $("body").append('<div class="loadicon" style="display:block"></div>'),
            $(".all-pics").addClass("show"),
            $(".all-pics").append('<div class="full"  style="display:block"></div>'),
            $(".overlay-dark").addClass("show");
            var e = $(this).attr("src");
            $(".all-pics").find(".full").append('<img src ="' + e + '" alt="pic" />'),
            $(".all-pics").append('<a class="close-pics-small href="javascript:void(0);""></a>'),
            $(".all-pics img").on("load", function() {
                $(".all-pics").addClass("show"),
                0 != TouchLenght && isTouchDevice ? ($(".full").addClass("pinch-zoom"),
                $(".pinch-zoom").each(function() {
                    new Pic.PinchZoom($(this),{})
                })) : ($(".full").addClass("dragscroll"),
                $(".dragscroll").draptouch()),
                $(".full img").length > 1 && $(".full img").last().remove(),
                $(".loadicon").fadeOut(400, "linear", function() {
                    0 != TouchLenght && isTouchDevice || detectMargin(),
                    $(".full img").addClass("fadein"),
                    $(".loadicon").remove()
                })
            }),
            $(".close-pics-small").on("click", function() {
                $(".loadicon").remove(),
                $(".full").fadeOut(300, "linear", function() {
                    if ($(".all-pics .full,  .all-pics .pinch-zoom-container").remove(),
                    $(".close-pics-small").remove(),
                    $(".all-pics").removeClass("show"),
                    $(".overlay-dark").removeClass("show"),
                    !$(".house-detail").length && ($("html, body").removeClass("no-scroll"),
                    $(".to-scrollZ").length)) {
                        var e = $(".to-scrollZ").offset().top;
                        $(".to-scrollZ").removeClass("to-scrollZ"),
                        $(window).width() < 1100 && $("html, body").scrollTop(e - 60)
                    }
                })
            })
        }
        return !1
    })
}
function Option() {
    $("a.link-pdf, .library-download a").on("click", function(e) {
        e.preventDefault();
        var t = $(this).attr("href");
        return window.open(t, "_blank"),
        !1
    }),
    $(".title-pdf").on("click", function(e) {
        e.preventDefault();
        var t = $(this).find("a").attr("href");
        return window.open(t, "_blank"),
        !1
    }),
    $(".pic-box").on("click", function(e) {
        return e.preventDefault(),
        $(this).find("a").trigger("click"),
        !1
    }),
    $(".view-album, .thumb-album").on("click", function(e) {
        e.preventDefault();
        var t = $(this).attr("data-href");
        return $(".loadicon").length || $("body").append('<div class="loadicon" style="display:block"></div>'),
        $("html, body").addClass("no-scroll"),
        $(".overlay-dark").addClass("show"),
        $(".all-album").fadeIn(300, "linear", function() {
            AlbumLoad(t, 0)
        }),
        !1
    }),
    $(".zoom.album").on("click", function(e) {
        e.preventDefault(),
        $(this).parent().addClass("viewalbum");
        var t = $(this).attr("data-href")
          , a = $(this).parent().parent().parent().index();
        return $(".loadicon").length || $("body").append('<div class="loadicon" style="display:block"></div>'),
        $("#facilities-page").length && $(".faci-slide").trigger("BTQ.stop"),
        $("html, body").addClass("no-scroll"),
        $(".overlay-dark").addClass("show"),
        $(".all-album").fadeIn(300, "linear", function() {
            AlbumLoad(t, a)
        }),
        !1
    }),
    $("a.player, a.link-video").on("click", function(e) {
        e.preventDefault(),
        $(this).parent().addClass("to-scrollV"),
        $(".popup-video img").length && ($(".popup-pics, .popup-video").removeClass("fadeinup").addClass("fadeout"),
        $(".close-popup").removeClass("fadeinup").addClass("fadeout")),
        $(".library-load").length && $(".library-center").trigger("BTQ.stop");
        var t = $(this).attr("data-href");
        return $(".loadicon").length || $("body").append('<div class="loadicon" style="display:block"></div>'),
        $("html, body").addClass("no-scroll"),
        $(".overlay-dark").addClass("show"),
        $(".allvideo").fadeIn(300, "linear", function() {
            VideoLoad(t)
        }),
        !1
    }),
    $(".zoom:not(.album),  .zoom-mobile").on("click", function() {
        $("html, body").addClass("no-scroll"),
        $(".loadicon").length || $("body").append('<div class="loadicon" style="display:block"></div>'),
        $(".all-pics").addClass("show"),
        $(".all-pics").append('<div class="full"  style="display:block"></div>'),
        $(".overlay-dark").addClass("show");
        var e = $(this).parent().find("img").attr("src") || $(this).parent().find("img").attr("data-src");
        if ($(this).attr("data-src"))
            var t = $(this).attr("data-src");
        else
            var t = e;
        return $(".all-pics").find(".full").append('<img src ="' + t + '" alt="pic" />'),
        $(".all-pics").find(".full").append("<span></span>"),
        $("body").append('<a class="close-pics" href="javascript:void(0);"></a>'),
        $(".all-pics").append('<a class="close-pics-small" href="javascript:void(0);">' + text_close + "</a>"),
        $(".all-pics img").on("load", function() {
            $(".all-pics").addClass("show"),
            0 != TouchLenght && isTouchDevice ? ($(".full").addClass("pinch-zoom"),
            $(".pinch-zoom").each(function() {
                new Pic.PinchZoom($(this),{})
            })) : ($(".full").addClass("dragscroll"),
            $(".dragscroll").draptouch()),
            $(".full img").length > 1 && $(".full img").last().remove(),
            $(".loadicon").fadeOut(400, "linear", function() {
                0 != TouchLenght && isTouchDevice || detectMargin(),
                $(".full img").addClass("fadein"),
                $(".loadicon").remove()
            })
        }),
        $(window).width() > 1100 && $(".full span").on("click", function() {
            $(".close-pics").trigger("click")
        }),
        $(".close-pics, .close-pics-small").on("click", function() {
            $(".loadicon").remove(),
            $(".full").fadeOut(300, "linear", function() {
                $(".overlay-dark").removeClass("show"),
                $(".all-pics .full, .all-pics .text-length, .all-pics .pinch-zoom-container").remove(),
                $(".close-pics, .close-pics-small").remove(),
                $(".all-pics").removeClass("show"),
                $("html, body").removeClass("no-scroll")
            })
        }),
        !1
    })
}
function turnWheelTouch() {
    doWheel = !0,
    doTouch = !0
}
function detectBut() {
    $("#news-page").length && $(".link-page").hasClass("current") && $(window).width() <= 1100 && $(".news-list").each(function(e, t) {
        var a = $(t)
          , o = $(t).find(".grid").offset().left
          , i = $(t).find(".link-page.current").parent().offset().left
          , l = $(".news-list").width() / 2 - $(".grid-item").width() / 2;
        $(a).stop().animate({
            scrollLeft: i - l - o
        }, "slow")
    })
}
function detectMargin() {
    var e = $(".full img").width()
      , t = $(".full  img").height()
      , a = $(window).height()
      , o = $(window).width();
    o > e ? $(".full img").css({
        "margin-left": o / 2 - e / 2
    }) : $(".full img").css({
        "margin-left": 0
    }),
    a > t ? $(".full img").css({
        "margin-top": a / 2 - t / 2
    }) : $(".full img").css({
        "margin-top": 0
    })
}
function LocationHash() {
    var e = window.location.hash;
    e = e.slice(1),
    Arrhash = e.split("/"),
    $(".link-page a[data-name='" + e + "']").trigger("click"),
    $(".sub-house li a[data-name='" + e + "']").trigger("click"),
    $(".select-box li a[data-year='" + e + "']").trigger("click"),
    $("#library-page, #facilities-page, #apartment-page").length && $(".sub-nav li a[data-name='" + e + "']").trigger("click")
}
!function(e) {
    var t = {
        on: e.fn.on,
        bind: e.fn.bind
    };
    e.each(t, function(a) {
        e.fn[a] = function() {
            var e, o = [].slice.call(arguments), i = o.pop(), l = o.pop();
            return o.push(function() {
                var t = this
                  , a = arguments;
                clearTimeout(e),
                e = setTimeout(function() {
                    l.apply(t, [].slice.call(a))
                }, i)
            }),
            t[a].apply(this, isNaN(i) ? arguments : o)
        }
    })
}(jQuery);
var timex, News = 0, Details = 0, Videoload = 0, doWheel = !0, doTouch = !0, Arrhash, windscroll = $(document).scrollTop(), Itemx = $(".nav li, .grid-item"), timer, timer2, text_close = $(".text-close").text(), supportsVideo = !!document.createElement("video").canPlayType, ThisVideo = document.getElementById("video-full");
$(document).ready(function() {
    $(document).bind("scroll", function() {
        var e = $(document).scrollTop();
        $(window).width() <= 1100 && (e > 50 ? $(".scroll-down").fadeOut(500, "linear") : $(".scroll-down").fadeIn(500, "linear"),
        e > $(window).height() / 2 ? $(".go-top").css({
            display: "block",
            opacity: 1
        }) : $(".go-top").css({
            display: "none",
            opacity: 0
        }),
        windscroll = e)
    }),
    document.addEventListener("keydown", function(e) {
        var t = e.keyCode || e.which;
        38 === t && $(".box-nav li.active").prev().trigger("click"),
        40 === t && $(".box-nav li.active").next().trigger("click")
    }),
    $(".go-top").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow")
    })
}),
window.onorientationchange = ResizeWindows,
$(window).on("orientationchange", function() {
    $(window).width() <= 1100 && (ScrollHoz(),
    $(".colum-box-news").hasClass("show") && detectBut())
}),
$(window).resize(function() {
    $(window).width() > 1100 && ($(".news-text img,  .box-location img").hasClass("zoom-pic") && $(".close-pics-small").trigger("click"),
    $("#apartment-detail-page").length && ($(".house-detail").hasClass("show-house") || BoxApartment())),
    ScrollNiceHide(),
    ResizeWindows()
}),
$(window).on("resize", function() {
    if (ResizeWindows(),
    $(window).width() > 1100) {
        if ($(".dragscroll").length && (detectMargin(),
        $(".dragscroll").draptouch()),
        $("#home-page, #about-page").length && ($(".group-left").hasClass("select") || SlidePicture()),
        $("#location-page").length && (ScaleMap(),
        $(".viewer").hasClass("desktop") || ZoomMap()),
        $("#library-page, #facilities-page, #apartment-page").length) {
            if ($(".item-active").length) {
                var e = $(".slide-bg")[0].swiper;
                e.onResize()
            } else
                SlidePicture();
            $("img.map").hasClass("area") || $(".map-background").length || $(".map").maphilight()
        }
        if ($("#apartment-detail-page").length && ($(".sub-house li").hasClass("current") ? $(".sub-house li.current").trigger("click") : $(".sub-house li:first-child").trigger("click")),
        $("#news-page").length && !$(".grid").hasClass("arrange")) {
            var t = $(".grid");
            t.isotope({
                itemSelector: ".grid-item",
                percentPosition: !0,
                transitionDuration: "0s"
            }),
            $(".grid").addClass("arrange")
        }
        $("#library-page, #facilities-page, #apartment-page").length && ($(".sub-nav li").hasClass("current") ? $(".sub-nav li.current").trigger("click") : $(".sub-nav li:first-child ").trigger("click")),
        $(".news-list,  .sub-block").hasClass("dragscroll") && ($(".news-list, .sub-news, .sub-block").removeClass("dragscroll draptouch-active draptouch-moving-left draptouch-moving-down"),
        $(".news-list, .sub-news, .sub-block").css({
            overflow: "visible"
        })),
        $(".news-list").hasClass("hide") ? setTimeout(function() {
            ScrollNiceC()
        }, 250) : $(".scrollA, .scrollB").length && setTimeout(function() {
            ScrollNiceA(),
            ScrollNiceB()
        }, 250)
    } else {
        if ($("#library-page, #facilities-page, #apartment-page").length) {
            if ($(".item-active").length) {
                var e = $(".slide-bg")[0].swiper;
                e.destroy(!0, !0)
            }
            $("img.map").hasClass("area") && $(".map").removeClass("area")
        }
        if ($("#news-page").length) {
            if ($(".grid").hasClass("arrange")) {
                var t = $(".grid");
                t.isotope("destroy"),
                $(".grid").removeClass("arrange")
            }
            $(".colum-box-news").hasClass("show") || $(".news-list").each(function(e, t) {
                $(".link-page.current").length ? $(t).find(".link-page.current").trigger("click") : $(t).find(".grid-item:first-child .link-page").trigger("click")
            })
        }
        $("#apartment-detail-page").length && $(".house-detail").hasClass("show-house") && $(".house-detail").removeClass("show-house"),
        0 != TouchLenght && isTouchDevice || (ScrollHoz(),
        $("#news-page").length && detectBut())
    }
}, 250),
$(window).bind("popstate", function(e) {
    $(window).width() > 1100 && e.preventDefault();
    var t = $(".httpserver").text();
    if ($(window).width() > 1100)
        if (null !== e.originalEvent.state) {
            var a = e.originalEvent.state.path
              , o = e.originalEvent.state.dataName
              , i = e.originalEvent.state.title
              , l = document.URL;
            changeUrl(a, i, "", "", o, "", "");
            var n = a.replace(t, "")
              , s = n.split("/");
            $("#news-page").length && ($(".news-content .news-text").length && $(".close-news").trigger("click"),
            $(".link-page a").each(function(e, t) {
                $(t).attr("href") == l && $(t).trigger("click")
            })),
            $("#progress-page").length && ($(".close-album").length && $(".close-album").trigger("click"),
            $(".nav li a").each(function(e, t) {
                $(t).attr("href") == a && window.history.back()
            }),
            $(".select-box li a").each(function(e, t) {
                $(t).attr("href") == a && $(t).trigger("click")
            })),
            $("#library-page").length && ($(".close-video").length && $(".close-video").trigger("click"),
            $(".close-album").length && $(".close-album").trigger("click"),
            $(".nav li a").each(function(e, t) {
                $(t).attr("href") == a && window.history.back()
            }),
            $(".sub-nav li a").each(function(e, t) {
                $(t).attr("href") == a && $(t).parent().trigger("click")
            })),
            $("#apartment-page").length && ($(".go-back").length ? $(".go-back").trigger("click") : ($(".nav li a").each(function(e, t) {
                $(t).attr("href") == a && window.history.back()
            }),
            $(".sub-nav li a").each(function(e, t) {
                $(t).attr("href") == a && $(t).trigger("click")
            }),
            $(".onarea").each(function(e, o) {
                $(o).attr("href") == a && ("" != s[2] && void 0 != s[2] && $('.sub-nav li a[data-href="' + t + s[0] + "/" + s[1] + "/" + s[2] + '.html"]').trigger("click"),
                $(o).trigger("click"))
            })))
        } else {
            var l = document.URL
              , n = l.replace(t, "")
              , s = n.split("/");
            $("#news-page").length && ($(".news-content .news-text").length && $(".close-news").trigger("click"),
            $(".link-page a").each(function(e, t) {
                $(t).attr("href") == l && $(t).trigger("click")
            })),
            $("#progress-page").length && ($(".close-album").length && $(".close-album").trigger("click"),
            $(".nav li a").each(function(e, t) {
                $(t).attr("href") == l && window.history.back()
            }),
            $(".select-box li a").each(function(e, t) {
                $(t).attr("href") == l && $(t).trigger("click")
            })),
            $("#library-page").length && ($(".close-video").length && $(".close-video").trigger("click"),
            $(".close-album").length && $(".close-album").trigger("click"),
            $(".nav  li a").each(function(e, t) {
                $(t).attr("href") == l && window.history.back()
            }),
            $(".sub-nav li a").each(function(e, t) {
                $(t).attr("href") == l && $(t).parent().trigger("click")
            })),
            $("#apartment-page").length && ($(".go-back").length ? $(".go-back").trigger("click") : ($(".nav li a").each(function(e, t) {
                $(t).attr("href") == l && window.history.back()
            }),
            $(".sub-nav li a").each(function(e, t) {
                $(t).attr("href") == l && $(t).trigger("click")
            }),
            $(".onarea").each(function(e, t) {
                $(t).attr("href") == l && $(t).trigger("click")
            })))
        }
    else {
        if (null !== e.originalEvent.state)
            var a = e.originalEvent.state.path;
        else
            var a = document.URL;
        var n = a.replace(t, "")
          , s = n.split("/");
        $("#news-page").length && ($(".nav li a").each(function(e, t) {
            $(t).attr("href") == a && window.history.back()
        }),
        $(".link-page a").each(function(e, t) {
            $(t).attr("href") == a && $(t).trigger("click")
        })),
        $("#progress-page").length && ($(".close-album").length && $(".close-album").trigger("click"),
        $(".nav li a").each(function(e, t) {
            $(t).attr("href") == a && window.history.back()
        }),
        $(".select-box li a").each(function(e, t) {
            $(t).attr("href") == a && location.reload()
        })),
        $("#library-page").length && ($(".close-video").length && $(".close-video").trigger("click"),
        $(".close-album").length && $(".close-album").trigger("click"),
        $(".nav li a").each(function(e, t) {
            $(t).attr("href") == a
        }),
        $(".sub-nav li a").each(function(e, t) {
            $(t).attr("href") == a && location.reload()
        })),
        $("#apartment-page").length && ($(".go-back").length ? $(".go-back").trigger("click") : ($(".nav li a").each(function(e, t) {
            $(t).attr("href") == a && window.history.back()
        }),
        $(".sub-nav li a").each(function(e, t) {
            $(t).attr("href") == a && location.reload()
        }),
        $(".onarea").each(function(e, t) {
            $(t).attr("href") == a && $(t).trigger("click")
        })))
    }
}),
iOS && $(window).bind("pageshow", function(e) {
    e.originalEvent.persisted && window.location.reload()
});
