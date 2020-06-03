/**
* Minified by jsDelivr using Terser v3.14.1.
* Original file: /gh/BNDong/Cnblogs-Theme-SimpleMemory@1.1.9/src/script/simpleMemory.js
*
* Do NOT use SRI with dynamically generated files! More information:
https://www.jsdelivr.com/using-sri-with-dynamic-files
*/
if (initCheck()) {
    var sidebarHtml = '<div class="container">
        < div class="menu-wrap optiscroll" id = "menuWrap" style = "display:none" >
            <nav class="menu"> \x3c!-- 涓汉绠€浠� --\x3e <div class="introduce-box">
                <div class="introduce-head">
                    <div class="introduce-via" id="menuBlogAvatar"></div>
                </div>
                <div id="introduce"></div>
            </div> \x3c!-- 瀵艰埅 --\x3e <div class="nav-title"></div>
                <div class="icon-list">
                    <ul id="m-nav-list"> </ul>
                </div> \x3c!-- 鏃ュ巻 --\x3e <span id="calendar-box"></span> \x3c!-- 鎵炬壘鐪� --\x3e <div class="m-list-title">
                    <span>鎵炬壘鐪�</span></div>
                <div class="m-icon-list" id="sb-sidebarSearchBox"></div> \x3c!-- 绉垎涓庢帓鍚� --\x3e <div class="m-list-title">
                    <span>绉垎鎺掑悕</span></div>
                <div class="m-icon-list" id="sb-sidebarScorerank"></div> \x3c!-- 鏈€鏂伴殢绗� --\x3e <div class="m-list-title">
                    <span>鏈€鏂伴殢绗�</span></div>
                <div class="m-icon-list" id="sb-sidebarRecentposts"></div> \x3c!-- 鎴戠殑鏍囩 --\x3e <div class="m-list-title">
                    <span>鎴戠殑鏍囩</span></div>
                <div class="m-icon-list" id="sb-toptags"></div> \x3c!-- 闅忕瑪鍒嗙被 --\x3e <div class="m-list-title">
                    <span>闅忕瑪鍒嗙被</span></div>
                <div class="m-icon-list" id="sb-classify"></div> \x3c!-- 闅忕瑪妗ｆ --\x3e <div class="m-list-title">
                    <span>闅忕瑪妗ｆ</span></div>
                <div class="m-icon-list" id="sb-record"></div> \x3c!-- 鏂囩珷妗ｆ --\x3e <div class="m-list-title">
                    <span>鏂囩珷妗ｆ</span></div>
                <div class="m-icon-list" id="sb-articlearchive"></div> \x3c!-- 闃呰鎺掕 --\x3e <div class="m-list-title">
                    <span>闃呰鎺掕</span></div>
                <div class="m-icon-list" id="sb-topview"></div> \x3c!-- 鎺ㄨ崘鎺掕 --\x3e <div class="m-list-title">
                    <span>鎺ㄨ崘鎺掕</span></div>
                <div class="m-icon-list" id="sb-topDiggPosts"></div> \x3c!-- 鑷畾涔夊垪琛� --\x3e <span
                    id="menuCustomList"></span>
            </nav> <button class="close-button" id="close-button">Close Menu</button>
            <div class="morph-shape" id="morph-shape"
                data-morph-open="M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800"
                    preserveAspectRatio="none">
                    <path d="M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z" /> </svg> </div>
    </div > <button class="menu-button" id="open-button">MENU</button>
        <div class="content-wrap" id="content-wrap"></div>\x3c!-- / content - wrap--\x3e
</div >
        <div class="main-header"> <canvas id="notHomeTopCanvas"></canvas>
            <div class="vertical">
                <div class="main-header-content inner">
                    <link href="https://fonts.proxy.ustclug.org/css?family=Playball" rel="stylesheet">
                        <h1 class="page-title" style="font-family: \'Playball\', cursive;" id="homeTopTitle"></h1>
                        <h2 class="page-description" id="hitokoto"></h2>
                        <h3 class="page-author" id="hitokotoAuthor"></h3>
                        <h1 class="sb-title" id="sbTitle"></h1>
                        <p class="article-info" id="articleInfo"></p>
        </div>
                </div> <a class="scroll-down" href="javascript:void(0);" data-offset="-45"> <span class="hidden">Scroll Down</span>
                    <i class="scroll-down-icon iconfont icon-fanhui"></i> </a>
            </div>
            <div id="loading"></div>
            <div id="bottomProgressBar"></div>
            <div id="rightMenu"></div>'; window.cnblogsConfigDefault = {GhUserName: "BNDong", GhRepositories:
            "Cnblogs-Theme-SimpleMemory", GhVersions: "v1.1.2", CnVersions: "", blogUser: "", blogAvatar: "", blogStartDate:
"2019-01-01", menuCustomList: {}, menuNavList: [], menuUserInfoBgImg: "", webpageTitleOnblur: "(o锞焩锞�)銉� Hi",
            webpageTitleOnblurTimeOut: 500, webpageTitleFocus: "(*麓鈭囷絸*) 娆㈣繋鍥炴潵锛�", webpageTitleFocusTimeOut: 1e3, webpageIcon: "",
fontIconExtend: "", progressBar: {id: "top-progress-bar", color: "#77b6ff", height: "2px", duration: .2 }, loading: {
                rebound: {tension: 16, friction: 5 }, spinner: {id: "spinner", radius: 90, sides: 3, depth: 4, colors: {background:
            "#f0f0f0", stroke: "#272633", base: null, child: "#272633" }, alwaysForward: !0, restAt: .5, renderBase: !1 } },
homeTopAnimationRendered: !0, homeTopAnimation: {radius: 15, density: .2, color: "rgba(255,255,255, .2)", clearOffset:
.3 }, essayTopAnimationRendered: !0, essayTopAnimation: {triW: 14, triH: 20, neighbours: ["side", "top", "bottom"],
            speedTrailAppear: .1, speedTrailDisappear: .1, speedTriOpen: 1, trailMaxLength: 30, trailIntervalCreation: 100,
            delayBeforeDisappear: 2, colors: ["#96EDA6", "#5BC6A9", "#38668C", "#374D84", "#BED5CB", "#62ADC6", "#8EE5DE",
"#304E7B"] }, bgAnimationRendered: !0, backgroundAnimation: {colorSaturation: "60%", colorBrightness: "50%",
            colorAlpha: .5, colorCycleSpeed: 5, verticalPosition: "random", horizontalSpeed: 200, ribbonCount: 3, strokeSize: 0,
            parallaxAmount: -.2, animateSections: !0 }, homeTopImg:
            ["https://gitee.com/dbnuo/Cnblogs-Theme-SimpleMemory/raw/master/img/home_top_bg.jpg"], homeBannerText: "",
            homeBannerTextType: "jinrishici", essayTopImg:
            ["https://gitee.com/dbnuo/Cnblogs-Theme-SimpleMemory/raw/master/img/nothome_top_bg.jpg"], essayCodeHighlightingType:
"cnblogs", essayCodeHighlighting: "", essaySuffix: {codeImgUrl: "", aboutHtml: "", copyrightHtml: "", supportHtml: ""
}, bottomBlogroll: [], bottomText: {icon: "鉂わ笍", left: "", right: "" }, footerStyle: 2, consoleList: [], themeAuthor:
            !1 }, window.cnblogsConfig = $.extend(!0, window.cnblogsConfigDefault, window.cnblogsConfig), getVersionConfig(); var
url = window.location.href, tmp = [], user = (tmp = url.split("/"))[3], navListHtml = '<li><a
                href="https://www.cnblogs.com/' + user + '/" target="_self">棣栭〉</a></li>
            <li><a href="https://msg.cnblogs.com/send/' + user + '" target="_blank">鑱旂郴</a></li>
            <li><a href="https://www.cnblogs.com/' + user + '/rss" target="_blank">璁㈤槄</a></li>
            <li><a href="https://i.cnblogs.com/" target="_blank">绠＄悊</a></li>
            <li><a href="https://www.cnblogs.com/jianshuai520/p/11811389.html">鍙嬮摼</a></li>', menuNavList =
window.cnblogsConfig.menuNavList; menuNavList.length > 0 && $.each(menuNavList, function (i) {navListHtml += '<li><a
        href="' + menuNavList[i][1] + '" target="_blank">' + menuNavList[i][0] + "</a></li > " }),
    $("#blog-news").prepend(sidebarHtml), $("#m-nav-list").append(navListHtml), "" === window.cnblogsConfig.blogUser &&
        (window.cnblogsConfig.blogUser = user), $.ajaxSetup({ cache: !0 }), $.getScript(getJsDelivrUrl("loading.js"), function
            () {
                pageLoading.initRebound(), pageLoading.initSpinner(), pageLoading.spinner.init(pageLoading.spring, !0),
                $.getScript(getJsDelivrUrl("jquery.mCustomScrollbar.min.js"), function () {
                    $.getScript(getJsDelivrUrl("require.min.js"), function () {
                        $.getScript(getJsDelivrUrl("config.js"), function () {
                            require(["optiscroll_ToProgress_rotate", "snapSvg", "classie", "main4", "tools"], function () {
                                require(["base"],
                                    function () { (new Base).init() })
                            })
                        })
                    })
                })
        })
} else
    $('a[name="top"]').text("SimpleMemory锛氬熀纭€閰嶇疆鏈夎锛岃闃呰鏂囨。锛屾鏌ラ厤缃紒").css({
        display: "block", "text-align": "center",
        "padding-top": "45vh", "font-size": "20px", color: "#333"
    }); function initCheck() {
        var i =
            $("#mobile-style").attr("href"); if (void 0 !== i) {
                var e = i.split("/"); if (-1 !== $.inArray("SimpleMemory", e))
                    return !0
            } return !1
    } function getVersionConfig() {
        var i; if (window.cnblogsConfigDefault.CnVersions =
            window.cnblogsConfigDefault.GhVersions, "BNDong" === window.cnblogsConfigDefault.GhUserName)
            $.getScript("https://gitee.com/dbnuo/Cnblogs-Theme-SimpleMemory/raw/master/version.js", function () {
                i =
                window.themeVersion
            }); else {
                var e = "https://raw.githubusercontent.com/" + window.cnblogsConfigDefault.GhUserName +
                    "/" + window.cnblogsConfigDefault.GhRepositories + "/master/version.conf"; $.ajax({
                        type: "get", url: e, dataType:
                            "text", async: !1, success: function (e) { i = !!e && JSON.parse(e) }
                    })
        } var s = function e(s) {
            var n = ""; i &&
                $.each(i, function (e) { if (i[e][0] === s) return n = i[e][1], !1 }); return "" === n ? s : e(n)
        }(window.cnblogsConfigDefault.GhVersions); s && (window.cnblogsConfigDefault.GhVersions = s)
    } function
    getJsDelivrUrl(i, e) {
        return i = setFileNameMin(i, e), "https://cdn.jsdelivr.net/gh/" + window.cnblogsConfig.GhUserName
            + "/" + window.cnblogsConfig.GhRepositories + "@" + window.cnblogsConfig.GhVersions + "/" + (i || "")
} function
    setFileNameMin(i, e) {
        if (void 0 === i) return ""; var s = null, n = i.split("."); if (n.length > 0 && -1 !==
            $.inArray(n[n.length - 1], ["js", "css"])) switch (s = n.pop()) {
                case "js": e = "script"; break; case "css": e =
                    "style"
            } else { if (void 0 === e) return ""; switch (e) { case "js": e = "script"; break; case "css": e = "style" } }
    return -1 === i.search(".min") && n.push("min"), null != s && n.push(s), void 0 !== e ? "src/" + e + "/" + n.join(".") :
        n.join(".")
}
//# sourceMappingURL=/sm/45d9a966c8a11946824d5dd31c1612ae1f87ee89b576c9199106ec513cdbe495.map