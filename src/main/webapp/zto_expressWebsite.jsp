<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2021/4/23
  Time: 8:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en"><head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="UTF-8">
    <meta content="中通快递官网为您提供中通快递单号(运单)跟踪查询,投诉电话查询,运费报价查询,中通营业网点查询,在线下单(寄件)等服务,全国统一客服热线：95311" name="Description">
    <meta content="中通快递单号查询,网点查询,投诉电话查询,在线寄件" name="Keywords">
    <meta content="中通快递官网为您提供中通快递单号(运单)跟踪查询,投诉电话查询,运费报价查询,中通营业网点查询,在线下单(寄件)等服务,全国统一客服热线：95311" name="searchtitle">
    <script charset="utf-8" src="js/s.js"></script><script src="js/hm.js"></script><script>
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?53a93979e64ab8e76c06653f6830c385";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>
    <title>服务网点 - 中通快递</title>
    <link rel="stylesheet" type="text/css" href="css/expressWebsite.css">
    <link rel="shortcut icon" type="image/x-icon" href="img/logo.ico" media="screen" />
    <link type="text/css" rel="stylesheet" href="../../../../../Desktop/服务网点%20-%20中通快递_files/skin.css">
    <link rel="stylesheet" type="text/css" href="css/bmap_autocomplete.css"><style>html #hm_t_undefined .hm-t-feedback-trigger {position: fixed;display: block;right: 2px;bottom: 2px;z-index: 99998;cursor: pointer;width: 40px;height: 37px!important;text-align: center;text-decoration: none;white-space: normal;font-size: 14px;line-height: 17px;padding-top: 3px;color: #fff;background: #666;_position: absolute;_top: expression(eval(document.documentElement.scrollTop+(document.documentElement.clientHeight||document.body.clientHeight)-this.offsetHeight-2));}</style><style>html #hm_t_undefined .hm-t-feedback-trigger{_top:expression(eval(document.documentElement.scrollTop+(document.documentElement.clientHeight||document.body.clientHeight)-this.offsetHeight-2-0));}</style><style type="text/css">.BMap_mask{background:transparent url(https://api.map.baidu.com/images/blank.gif);}  .BMap_noscreen{display:none;}  .BMap_button{cursor:pointer;}  .BMap_zoomer{background-image:url(https://api.map.baidu.com/images/mapctrls1d3.gif);background-repeat:no-repeat;overflow:hidden;font-size:1px;position:absolute;width:7px;height:7px;}  .BMap_stdMpCtrl div{position:absolute;}  .BMap_stdMpPan{width:44px;height:44px;overflow:hidden;background:url(https://api.map.baidu.com/images/mapctrls2d0.png) no-repeat;}  .BMap_ie6 .BMap_stdMpPan{background:none;}  .BMap_ie6 .BMap_smcbg{left:0;width:44px;height:464px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="https://api.map.baidu.com/images/mapctrls2d0.png");}  .BMap_ie6 .BMap_stdMpPanBg{z-index:-1;}  .BMap_stdMpPan .BMap_button{height:15px;width:15px;}  .BMap_panN,.BMap_panW,.BMap_panE,.BMap_panS{overflow:hidden;}  .BMap_panN{left:14px;top:0;}  .BMap_panW{left:1px;top:12px;}  .BMap_panE{left:27px;top:12px;}  .BMap_panS{left:14px;top:25px;}  .BMap_stdMpZoom{top:45px;overflow:hidden;}  .BMap_stdMpZoom .BMap_button{width:22px;height:21px;left:12px;overflow:hidden;background-image:url(https://api.map.baidu.com/images/mapctrls2d0.png);background-repeat:no-repeat;z-index:10;}  .BMap_ie6 .BMap_stdMpZoom .BMap_button{background:none;}  .BMap_stdMpZoomIn{background-position:0 -221px;}  .BMap_stdMpZoomOut{background-position:0 -265px;}  .BMap_ie6 .BMap_stdMpZoomIn div{left:0;top:-221px;}  .BMap_ie6 .BMap_stdMpZoomOut div{left:0;top:-265px;}  .BMap_stdMpType4 .BMap_stdMpZoom .BMap_button{left:0;overflow:hidden;background:-webkit-gradient(linear,50% 0,50% 100%,from(rgba(255,255,255,0.85)),to(rgba(217,217,217,0.85)));z-index:10;-webkit-border-radius:22px;width:34px;height:34px;border:1px solid rgba(255,255,255,0.5);-webkit-box-shadow:0 2px 3.6px #CCC;display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;-webkit-box-sizing:border-box;}  .BMap_stdMpType4 .BMap_smcbg{position:static;background:url(https://api.map.baidu.com/images/mapctrls2d0_mb.png) 0 0 no-repeat;-webkit-background-size:24px 32px;}  .BMap_stdMpType4 .BMap_stdMpZoomIn{background-position:0 0;}  .BMap_stdMpType4 .BMap_stdMpZoomIn .BMap_smcbg{width:24px;height:24px;background-position:0 0;}  .BMap_stdMpType4 .BMap_stdMpZoomOut{background-position:0 0;}  .BMap_stdMpType4 .BMap_stdMpZoomOut .BMap_smcbg{width:24px;height:6px;background-position:0 -25px;}  .BMap_stdMpSlider{width:37px;top:18px;}  .BMap_stdMpSliderBgTop{left:18px;width:10px;overflow:hidden;background:url(https://api.map.baidu.com/images/mapctrls2d0.png) no-repeat -23px -226px;}  .BMap_stdMpSliderBgBot{left:19px;height:8px;width:10px;top:124px;overflow:hidden;background:url(https://api.map.baidu.com/images/mapctrls2d0.png) no-repeat -33px bottom;}  .BMap_ie6 .BMap_stdMpSliderBgTop,.BMap_ie6 .BMap_stdMpSliderBgBot{background:none;}  .BMap_ie6 .BMap_stdMpSliderBgTop div{left:-23px;top:-226px;}  .BMap_ie6 .BMap_stdMpSliderBgBot div{left:-33px;bottom:0;}  .BMap_stdMpSliderMask{height:100%;width:24px;left:10px;cursor:pointer;}  .BMap_stdMpSliderBar{height:11px;width:19px;left:13px;top:80px;overflow:hidden;background:url(https://api.map.baidu.com/images/mapctrls2d0.png) no-repeat 0 -309px;}  .BMap_stdMpSliderBar.h{background:url(https://api.map.baidu.com/images/mapctrls2d0.png) no-repeat 0 -320px;}  .BMap_ie6 .BMap_stdMpSliderBar,.BMap_ie6 .BMap_stdMpSliderBar.h{background:none;}  .BMap_ie6 .BMap_stdMpSliderBar div{top:-309px;}  .BMap_ie6 .BMap_stdMpSliderBar.h div{top:-320px;}  .BMap_zlSt,.BMap_zlCity,.BMap_zlProv,.BMap_zlCountry{position:absolute;left:34px;height:21px;width:28px;background-image:url(https://api.map.baidu.com/images/mapctrls2d0.png);background-repeat:no-repeat;font-size:0;cursor:pointer;}  .BMap_ie6 .BMap_zlSt,.BMap_ie6 .BMap_zlCity,.BMap_ie6 .BMap_zlProv,.BMap_ie6 .BMap_zlCountry{background:none;overflow:hidden;}  .BMap_zlHolder{display:none;position:absolute;top:0;}  .BMap_zlHolder.hvr{display:block;}  .BMap_zlSt{background-position:0 -380px;top:21px;}  .BMap_zlCity{background-position:0 -401px;top:52px;}  .BMap_zlProv{background-position:0 -422px;top:76px;}  .BMap_zlCountry{background-position:0 -443px;top:100px;}  .BMap_ie6 .BMap_zlSt div{top:-380px;}  .BMap_ie6 .BMap_zlCity div{top:-401px;}  .BMap_ie6 .BMap_zlProv div{top:-422px;}  .BMap_ie6 .BMap_zlCountry div{top:-443px;}  .BMap_stdMpType1 .BMap_stdMpSlider,.BMap_stdMpType2 .BMap_stdMpSlider,.BMap_stdMpType3 .BMap_stdMpSlider,.BMap_stdMpType4 .BMap_stdMpSlider,.BMap_stdMpType2 .BMap_stdMpZoom,.BMap_stdMpType3 .BMap_stdMpPan,.BMap_stdMpType4 .BMap_stdMpPan{display:none;}  .BMap_stdMpType3 .BMap_stdMpZoom{top:0;}  .BMap_stdMpType4 .BMap_stdMpZoom{top:0;}  .BMap_cpyCtrl a{font-size:11px;color:#7979CC;}  .BMap_scaleCtrl{height:23px;overflow:hidden;}  .BMap_scaleCtrl div.BMap_scaleTxt{font-size:11px;font-family:Arial,sans-serif;}  .BMap_scaleCtrl div{position:absolute;overflow:hidden;}  .BMap_scaleHBar img,.BMap_scaleLBar img,.BMap_scaleRBar img{position:absolute;width:37px;height:442px;left:0;}  .BMap_scaleHBar{width:100%;height:5px;font-size:0;bottom:0;}  .BMap_scaleHBar img{top:-437px;width:100%;}  .BMap_scaleLBar,.BMap_scaleRBar{width:3px;height:9px;bottom:0;font-size:0;z-index:1;}  .BMap_scaleLBar img{top:-427px;left:0;}  .BMap_scaleRBar img{top:-427px;left:-5px;}  .BMap_scaleLBar{left:0;}  .BMap_scaleRBar{right:0;}  .BMap_scaleTxt{text-align:center;width:100%;cursor:default;line-height:18px;}  .BMap_omCtrl{background-color:#fff;overflow:hidden;}  .BMap_omOutFrame{position:absolute;width:100%;height:100%;left:0;top:0;}  .BMap_omInnFrame{position:absolute;border:1px solid #999;background-color:#ccc;overflow:hidden;}  .BMap_omMapContainer{position:absolute;overflow:hidden;width:100%;height:100%;left:0;top:0;}  .BMap_omViewMv{border-width:1px;border-style:solid;border-left-color:#84b0df;border-top-color:#adcff4;border-right-color:#274b8b;border-bottom-color:#274b8b;position:absolute;z-index:600;}  .BMap_omViewInnFrame{border:1px solid #3e6bb8;}  .BMap_omViewMask{width:1000px;height:1000px;position:absolute;left:0;top:0;background-color:#68c;opacity:.2;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=20);}  .BMap_omBtn{height:13px;width:13px;position:absolute;cursor:pointer;overflow:hidden;background:url(https://api.map.baidu.com/images/mapctrls1d3.gif) no-repeat;z-index:1210;}  .anchorBR .BMap_omOutFrame{border-top:1px solid #999;border-left:1px solid #999;}  .quad4 .BMap_omBtn{background-position:-26px -27px;}  .quad4 .BMap_omBtn.hover{background-position:0 -27px;}  .quad4 .BMap_omBtn.BMap_omBtnClosed{background-position:-39px -27px;}  .quad4 .BMap_omBtn.BMap_omBtnClosed.hover{background-position:-13px -27px;}  .anchorTR .BMap_omOutFrame{border-bottom:1px solid #999;border-left:1px solid #999;}  .quad1 .BMap_omBtn{background-position:-39px -41px;}  .quad1 .BMap_omBtn.hover{background-position:-13px -41px;}  .quad1 .BMap_omBtn.BMap_omBtnClosed{background-position:-26px -41px;}  .quad1 .BMap_omBtn.BMap_omBtnClosed.hover{background-position:0 -41px;}  .anchorBL .BMap_omOutFrame{border-top:1px solid #999;border-right:1px solid #999;}  .quad3 .BMap_omBtn{background-position:-27px -40px;}  .quad3 .BMap_omBtn.hover{background-position:-1px -40px;}  .quad3 .BMap_omBtn.BMap_omBtnClosed{background-position:-40px -40px;}  .quad3 .BMap_omBtn.BMap_omBtnClosed.hover{background-position:-14px -40px;}  .anchorTL .BMap_omOutFrame{border-bottom:1px solid #999;border-right:1px solid #999;}  .quad2 .BMap_omBtn{background-position:-40px -28px;}  .quad2 .BMap_omBtn.hover{background-position:-14px -28px;}  .quad2 .BMap_omBtn.BMap_omBtnClosed{background-position:-27px -28px;}  .quad2 .BMap_omBtn.BMap_omBtnClosed.hover{background-position:-1px -28px;}  .anchorR .BMap_omOutFrame{border-bottom:1px solid #999;border-left:1px solid #999;border-top:1px solid #999;}  .anchorL .BMap_omOutFrame{border-bottom:1px solid #999;border-right:1px solid #999;border-top:1px solid #999;}  .anchorB .BMap_omOutFrame{border-top:1px solid #999;border-left:1px solid #999;border-right:1px solid #999;}  .anchorT .BMap_omOutFrame{border-bottom:1px solid #999;border-right:1px solid #999;border-left:1px solid #999;}  .anchorNon .BMap_omOutFrame,.withOffset .BMap_omOutFrame{border:1px solid #999;}  .BMap_zoomMask0,.BMap_zoomMask1{position:absolute;left:0;top:0;width:100%;height:100%;background:transparent url(https://api.map.baidu.com/images/blank.gif);z-index:1000;}  .BMap_contextMenu{position:absolute;border-top:1px solid #adbfe4;border-left:1px solid #adbfe4;border-right:1px solid #8ba4d8;border-bottom:1px solid #8ba4d8;padding:0;margin:0;width:auto;visibility:hidden;background:#fff;z-index:10000000;}  .BMap_cmShadow{position:absolute;background:#000;opacity:.3;filter:alpha(opacity=30);visibility:hidden;z-index:9000000;}  div.BMap_cmDivider{border-bottom:1px solid #adbfe4;font-size:0;padding:1px;margin:0 6px;}  div.BMap_cmFstItem{margin-top:2px;}  div.BMap_cmLstItem{margin-bottom:2px;}  .BMap_shadow img{border:0 none;margin:0;padding:0;height:370px;width:1144px;}  .BMap_pop .BMap_top{border-top:1px solid #ababab;background-color:#fff;}  .BMap_pop .BMap_center{border-left:1px solid #ababab;border-right:1px solid #ababab;background-color:#fff;}  .BMap_pop .BMap_bottom{border-bottom:1px solid #ababab;background-color:#fff;}  .BMap_shadow,.BMap_shadow img,.BMap_shadow div{-moz-user-select:none;-webkit-user-select:none;}  .BMap_checkbox{background:url(https://api.map.baidu.com/images/mapctrls1d3.gif);vertical-align:middle;display:inline-block;width:11px;height:11px;margin-right:4px;background-position:-14px 90px;}  .BMap_checkbox.checked{background-position:-2px 90px;}  .BMap_pop .BMap_top img,.BMap_pop .BMap_center img,.BMap_pop .BMap_bottom img{display:none;}@media print{.BMap_noprint{display:none;}  .BMap_noscreen{display:block;}  .BMap_mask{background:none;}  .BMap_pop .BMap_top img,.BMap_pop .BMap_center img,.BMap_pop .BMap_bottom img{display:block;}}  .BMap_vectex{cursor:pointer;width:11px;height:11px;position:absolute;background-repeat:no-repeat;background-position:0 0;}  .BMap_vectex_nodeT{background-image:url(https://api.map.baidu.com/images/nodeT.gif);}  .BMap_vectex_node{background-image:url(https://api.map.baidu.com/images/node.gif);}  .iw{width:100%;-webkit-box-sizing:border-box;border:.3em solid transparent;-webkit-background-clip:padding;}  .iw_rt{position:relative;height:46px;width:195px;-webkit-box-sizing:border-box;display:-webkit-box;-webkit-box-align:center;margin:2px 5px 0 2px;background-color:rgba(0,0,0,0.8);-webkit-box-shadow:2px 2px 7px rgba(0,0,0,0.3);-webkit-border-radius:2px;color:#fff;}  .iw_rt:after{content:"";position:absolute;left:50%;bottom:-8px;width:0;height:0;border-left:5px solid transparent;border-top:8px solid rgba(0,0,0,0.8);border-right:5px solid transparent;margin:0 0 0 -6px;}  .iw_s{text-align:center;vertical-align:middle;height:100%;-webkit-box-sizing:border-box;}  .iw_rt .iw_s1{color:#cbcbcb;}  .iw_rt b{color:#fff;font-weight:bold;}  .iw_rt_gr{margin-left:-4px;}  .iw_busline{margin:32px 0 0 -3px;}  .iw_busline .iw_cc{text-align:center;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;padding:0 6px;}  .iw_r{-webkit-box-ordinal-group:3;}  .iw_r,.iw_l{height:100%;font-size:4.5em;text-align:center;color:#747474;border:none;-webkit-box-sizing:border-box;-webkit-border-radius:0;line-height:.7em;border:1px solid rgba(255,255,255,0.2);width:41px;}  .iw_r{border-style:none none none solid;}  .iw_l{border-style:none solid none none;}  .iw_search,.iw_l{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEz NDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNl SUQ9InhtcC5paWQ6QjA3NjMyREJDNzQ2MTFFMTlBQUM5QzlCRDZGODZCQkYiIHhtcE1NOkRvY3Vt ZW50SUQ9InhtcC5kaWQ6QjA3NjMyRENDNzQ2MTFFMTlBQUM5QzlCRDZGODZCQkYiPiA8eG1wTU06 RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMDc2MzJEOUM3NDYxMUUxOUFB QzlDOUJENkY4NkJCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMDc2MzJEQUM3NDYxMUUx OUFBQzlDOUJENkY4NkJCRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1w bWV0YT4gPD94cGFja2V0IGVuZD0iciI/PllB9T8AAAKuSURBVHjaxFjRcdpAEAX+mVEqiFxB5AoQ HZAKElcArsBWBSgVQCoAVwCuwEoFlivwGQpI7jKrzGXn7ep0EsPO7BjLp/O73bdv9xifTqdRpCXW c+sz65n1lNy3mvzZemX9aN34C6bTKdx8HAHMgVlaX0QeaGv9J4EcBJgD9EA/hzAH7N4Cq/oAW1tf KX+vKEXP7PlMSLFvhQX32BWY49GBOIRO7FKy57wBlnoUQHu5yJX+g4mymdvgFWzkAM3JtwGgmiJw a2/pvQoEYBQCLKNI8RfuaeNjT245gAUdqgHdmkqUPiOctLdJVYkithkAVO/K5cC+M30KAZVSxboo /ybnn1eIR5r5qUyI7P4GX6nqJHskbQsxQ7wqu6aSn2qrgHLrXjqAat5ZC0WlRuzVE0J3uhtBCjRt a3qjX92JIMiOIqYtYgumzpo+7RRtu/E0zvknokMF5GgdQv4Ze/5DWL8CFVe2aNuedGsLCi1vS+WL F4WKNkL2Dnh414FnO1b1R5vKuRaxjKUF2YKBqjuCGtF6nyL5+XxOJWCcL2/CpjzdRYRuGpDShQQs ARUj9U/OnRh7Yr9/CW1JXU4fYxXoHIMCu+iB+gBLIt/LgShDYCYktGCDfCBgvyRgVQgZwTy/jIzy EnQNMZV1QCT4bJ+3XFCkS81/WijdkiYAdSak04BWtabWEmIbsNZYgU00YE+gjyErQeo31GpShVMH Yc+/dwsEzh97/D6ojT2ZMlM1XwN8WP9Ma7NAbZvbtBoEjE+jBT2TusCu5SIbI7z/wLWN1rdKi0o6 cqwTuAmYyTm5NQW/82atWvlnBbo7apxD98qDJxl7mkC76JQ2Qm0CI1xKF95Gb4oLXHJDwJlxjy/u LgruGtNFM8lqnNtfK2JqN3CVeW1gzWj9jThd0xd59R8BBgAAiefGO1Bt1gAAAABJRU5ErkJggg==") no-repeat 50% 50%;-webkit-background-size:19px 19px;}  .iw_line_s,.iw_r{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAmCAYAAABDClKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEz NDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNl SUQ9InhtcC5paWQ6QjA3NjMyREZDNzQ2MTFFMTlBQUM5QzlCRDZGODZCQkYiIHhtcE1NOkRvY3Vt ZW50SUQ9InhtcC5kaWQ6QjA3NjMyRTBDNzQ2MTFFMTlBQUM5QzlCRDZGODZCQkYiPiA8eG1wTU06 RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMDc2MzJEREM3NDYxMUUxOUFB QzlDOUJENkY4NkJCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMDc2MzJERUM3NDYxMUUx OUFBQzlDOUJENkY4NkJCRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1w bWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqheQ+MAAAEtSURBVHja7JftDYIwEIbB8JeEUXACZQPd oGygE+gGxAnQEZzAOgEdwREIDKBXUgjBIqW5Npj0kvcHpG0erveFX1WVZ8l2oBhEhRoLw/BroW8J KgeR3vMVlI5BrSwAHQZAnngmYxtMe4oIL41ZAp6iNqF4/BQTa0oBxmxAcaAHKFJY+wKtAaw0CRUJ oHjGHiY8VpqCKmYCdRkJUKmJ7Ms1gZqkqOs6w/bUGXRCOGePCcXjaItwDsW8PoZ0zhM70IeeyiZi jH/Isf+CF9MAOdCppDj+LJ6yim6j9802B6VqQa818BFjY6AHakHp9Crj15ctCaiFIi7Q/wCKLRHq vjSoVNKWunH4rTBDv5Cv7NKeKfvvU2nINzHAuexzUA7KQTkoB6UxDicKvc+qfQQYABaiUBxugCsr AAAAAElFTkSuQmCC") no-repeat 50% 50%;-webkit-background-size:19px 19px;}  .iw_line{height:64px;width:228px;padding:0 11px;line-height:20px;}  .iw_bustrans .iw_cc{text-align:center;}  .iw_c{color:#FFFFFF;text-decoration:none;overflow:hidden;display:-webkit-box;-webkit-box-align:center;-webkit-box-flex:1;}  .iw_cc{-webkit-box-sizing:border-box;width:100%;border:none;}  .gray_background{filter:alpha(opacity=50);-moz-opacity:0.5;-khtml-opacity:0.5;opacity: 0.5}  .light_gray_background {filter:alpha(opacity=70);-moz-opacity:0.7;-khtml-opacity:0.7;opacity: 0.7}  .panoInfoBox {cursor: pointer; }  .panoInfoBox {position: relative; width: 323px; height: 101px; margin-bottom: 4px; cursor: pointer; }  .panoInfoBox .panoInfoBoxTitleBg {width: 323px; height: 19px; position: absolute; left: 0; bottom: 0; z-index: 2; background-color: #000; opacity: .7; }  .panoInfoBox .panoInfoBoxTitleContent {font-size: 12px; color: #fff; position: absolute; bottom: 2px; left: 5px; z-index: 3; text-decoration: none; }  .RouteAddressOuterBkg{position:relative; padding: 32px 4px 4px 3px; background-color:#ffdd99; }  .RouteAddressInnerBkg{padding: 3px 5px 8px 8px; background-color:#ffffff; }  #RouteAddress_DIV1{margin-top: 5px; }  .RouteAddressTip{position:absolute; width:100%; top:0px; text-align:center; height:30px; line-height:30px; color:#994c00; }  .route_tip_con {position:absolute;top:145px;}  .route_tip_con .route_tip{position:absolute;width:233px;height:29px;color:#803300;text-align:center;line-height:29px;border:#cc967a solid 1px;background:#fff2b2;z-index:100000;}  .route_tip_con .route_tip span{position:absolute;top:0;right:0;_right:-1px;width:14px;height:13px;background:url(https://api.map.baidu.com/images/addrPage.png?v=20121107) no-repeat 0 -121px;cursor:pointer;}  .route_tip_con .route_tip_shadow{width:233px;height:29px;  position:absolute;left:1px;top:1px;background:#505050;border:1px solid #505050;opacity:0.2;filter:alpha(opacity=20)}  .sel_body_body_page{margin:5px 0}  .sel_n{margin-top:5px;overflow:hidden;}  .sel_n .sel_top{background:url(https://api.map.baidu.com/images/bgs.gif) no-repeat 0 -418px;height:4px;font-size:0px;}  .sel_n .sel_body_top{height:32px;width:100%;background:url(https://api.map.baidu.com/images/addrPage.png?v=20121107) no-repeat 0 -41px;}  .sel_n .sel_body_title{float:left;width:100%;height:31px;}  .sel_n .sel_body_sign{margin-top:1px;width:30px;height:31px;float:left;background:url(https://api.map.baidu.com/images/bgs.gif) no-repeat -79px -387px;}  .sel_n .sel_body_name{height: 10px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin:0 20px 0 30px;padding:8px 7px 7px;font-size:14px;color:#FA8722;}  .sel_n .sel_body_button{float:left;width:55px;margin-left:-55px;padding-top:8px;}  .sel_n .sel_body_button a{}  .sel_n .sel_bottom{background:url(https://api.map.baidu.com/images/bgs.gif) no-repeat 0 -415px;height:4px;font-size:0px;}  .sel_n .sel_body_body{padding:3px 0 0 0}  .sel_n1{margin-top:5px;width:329px;overflow:hidden;}  .sel_n1 .sel_top{background:url(https://api.map.baidu.com/images/bgs.gif) no-repeat 0 -418px;height:4px;font-size:0px;}  .sel_n1 .sel_body_top{height:31px;width:100%;background:url(https://api.map.baidu.com/images/sel_body_n_top.gif) repeat-x;}  .sel_n1 .sel_body_top{height:32px;width:100%;background:url(https://api.map.baidu.com/images/addrPage.png?v=20121107) no-repeat 0 -41px}  .sel_n1 .sel_body_title{float:left;width:100%;height:31px;cursor:pointer;}  .sel_n1 .sel_body_sign{margin-top:1px;width:30px;height:31px;float:left;background:url(https://api.map.baidu.com/images/bgs.gif) no-repeat -79px -387px;}  .sel_n1 .sel_body_name{margin:0 20px 0 30px;padding:8px 7px 7px;font-size:14px;color:#FA8722;}  .sel_n1 .sel_body_button{float:left;width:20px;height:31px;margin-left:-23px;background:url(https://api.map.baidu.com/images/bgs.gif) no-repeat -253px -382px;overflow:hidden;zoom:1;cursor:pointer;}  .sel_n1 .sel_body_button a{display:none;}  .sel_n1 .sel_body_body{display:none}  .sel_n1 .sel_bottom{background:url(https://api.map.baidu.com/images/bgs.gif) no-repeat 0 -415px;height:4px;font-size:0px;}  .sel_y{margin-top:5px;overflow:hidden;}  .sel_y .sel_top{background:url(https://api.map.baidu.com/images/bgs.gif) no-repeat 0 -439px;height:4px;zoom:1;font-size:0px;}  .sel_y .sel_body_top{height:32px;width:100%;background:url(https://api.map.baidu.com/images/addrPage.png?v=20121107) no-repeat 0 0}  .sel_y .sel_body_title{float:left;width:100%;height:31px;cursor:pointer;}  .sel_y .sel_body_sign{margin-top:1px;width:30px;height:31px;float:left;background:url(https://api.map.baidu.com/images/bgs.gif) no-repeat -167px -384px;}  .sel_y .sel_body_name{margin:0 20px 0 30px;padding:8px 7px 7px;font-size:14px;color:#5B7BCB;}  .sel_y .sel_body_button{float:left;width:20px;height:31px;margin-left:-20px;background:url(https://api.map.baidu.com/images/bgs.gif) no-repeat -269px -297px;cursor:pointer;}  .sel_y .sel_body_button a{display:none;}  .sel_y .sel_body_body{display:none;height:0px}  .sel_y .sel_body_body_div{}  .sel_y .sel_bottom{background:url(https://api.map.baidu.com/images/bgs.gif) no-repeat 0 -436px;height:4px;font-size:0px;}  .sel_y .sel_body_body_page{display:none;height:0px;}  .sel_x{margin-top:5px;width:329px;overflow:hidden;}  .sel_x .sel_top{background:url(https://api.map.baidu.com/images/bgs.gif) no-repeat 0 -418px;height:4px;font-size:0px;}  .sel_x .sel_body_top{height:32px;width:100%;background:url(https://api.map.baidu.com/images/addrPage.png?v=20121107) no-repeat 0 -41px;}  .sel_x .sel_body_title{float:left;width:100%;height:31px;}  .sel_x .sel_body_sign{margin-top:1px;width:30px;height:31px;float:left;background:url(https://api.map.baidu.com/images/bgs.gif) no-repeat -122px -384px;}  .sel_x .sel_body_name{margin:0 20px 0 30px;padding:8px 7px 7px;font-size:14px;color:#FA8722;}  .sel_x .sel_body_button{float:left;width:55px;margin-left:-55px;padding-top:8px;}  .sel_x .sel_body_button a{}  .sel_x .sel_body_body{}  .sel_x .sel_body_body_div{padding:5px 5px 0 5px;}  .sel_x .sel_bottom{background:url(https://api.map.baidu.com/images/bgs.gif) no-repeat 0 -415px;height:4px;font-size:0px;}  .sel_x1{margin-top:5px;width:329px;overflow:hidden;}  .sel_x1 .sel_top{background:url(https://api.map.baidu.com/images/bgs.gif) no-repeat 0 -418px;height:4px;font-size:0px;}  .sel_x1 .sel_body_top{height:32px;width:100%;background:url(https://api.map.baidu.com/images/addrPage.png?v=20121107) no-repeat 0 -41px}  .sel_x1 .sel_body_title{float:left;width:100%;height:31px;cursor:pointer;}  .sel_x1 .sel_body_sign{margin-top:1px;width:30px;height:31px;float:left;background:url(https://api.map.baidu.com/images/bgs.gif) no-repeat -122px -384px;}  .sel_x1 .sel_body_name{margin:0 20px 0 30px;padding:8px 7px 7px;font-size:14px;color:#FA8722;}  .sel_x1 .sel_body_button{float:left;width:55px;height:31px;margin-left:-55px;}  .sel_x1 .sel_body_button a{display:none;}  .sel_x1 .sel_body_body{display:none;height:0px;}  .sel_x1 .sel_body_body_div{padding:5px 5px 0 5px;}  .sel_x1 .sel_bottom{background:url(https://api.map.baidu.com/images/bgs.gif) no-repeat 0 -415px;height:4px;font-size:0px;}  .sel_body_citylist{height:100px;padding: 0 0 0 5px}  .sel_body_resitem{table-layout:fixed;overflow-x:hidden;overflow-y:hidden;}  .sel_body_resitem table {margin-right:5px;}  .sel_body_resitem tr{cursor:pointer;}  .sel_body_resitem th{padding-top:5px;padding-left:5px;text-align:left;vertical-align:top;width:22px;}  .sel_body_resitem th div.iconbg{background:url(https://api.map.baidu.com/images/markers_new_ie6.png) no-repeat scroll 0 0;height:29px;width:24px;}  .sel_body_resitem th div.icon{cursor:pointer}  .sel_body_resitem th div#no_0_1, .sel_body_resitem th div#no_1_1{background-position:0 -64px}  .sel_body_resitem th div#no_0_2, .sel_body_resitem th div#no_1_2{background-position:-24px -64px}  .sel_body_resitem th div#no_0_3, .sel_body_resitem th div#no_1_3{background-position:-48px -64px}  .sel_body_resitem th div#no_0_4, .sel_body_resitem th div#no_1_4{background-position:-72px -64px}  .sel_body_resitem th div#no_0_5, .sel_body_resitem th div#no_1_5{background-position:-96px -64px}  .sel_body_resitem th div#no_0_6, .sel_body_resitem th div#no_1_6{background-position:-120px -64px}  .sel_body_resitem th div#no_0_7, .sel_body_resitem th div#no_1_7{background-position:-144px -64px}  .sel_body_resitem th div#no_0_8, .sel_body_resitem th div#no_1_8{background-position:-168px -64px}  .sel_body_resitem th div#no_0_9, .sel_body_resitem th div#no_1_9{background-position:-192px -64px}  .sel_body_resitem th div#no_0_10, .sel_body_resitem th div#no_1_10{background-position:-216px -64px}  .sel_body_resitem td{line-height:160%;padding:3px 0 3px 3px;vertical-align:top;}  .sel_body_resitem div.ra_td_title{float:left;margin-right:40px;}  .sel_body_resitem div.ra_td_button{float:right; width:40px;}  .sel_body_resitem div.ra_td_button input{height:18px;font-size:12px;width:40px;}  .sel_body_resitem div.clear{clear:both;height:0px;width:100%;}  .sel_body_resitem td .selBtn {width:70px;height:29px;background:url(https://api.map.baidu.com/images/addrPage.png?v=20121107) no-repeat -21px -81px;text-align:center;line-height:29px;visibility:hidden;color:#b35900;display:inline-block;*display:inline;*zoom:1;}  .sel_body_resitem td .list_street_view_poi {display:inline-block;float:none;margin-right:6px;position:static;*vertical-align:-3px;_vertical-align:-5px;*display:inline;*zoom:1;}  .selInfoWndBtn {width:70px;height:29px;background:url(https://api.map.baidu.com/images/addrPage.png?v=20121107) no-repeat -21px -81px;text-align:center;line-height:29px;margin: 0 auto;cursor:pointer;color:#b35900}  .sel_body_body td a{text-decoration: none; cursor: auto; }  .sel_body_body td a:hover,.sel_body_body td a:focus{text-decoration:underline; }  .panoInfoBox{cursor:pointer}  .panoInfoBox{position:relative;width:323px;height:101px;margin-bottom:4px;cursor:pointer}  .panoInfoBox .panoInfoBoxTitleBg{width:323px;height:19px;position:absolute;left:0;bottom:0;z-index:2;background-color:#000;opacity:.7}  .panoInfoBox .panoInfoBoxTitleContent{font-size:12px;color:#fff;position:absolute;bottom:2px;left:5px;z-index:3;text-decoration:none}  .pano_switch_left,.pano_switch_right{position:absolute;width:28px;height:38px;cursor:pointer;background-color:#252525;background-color:rgba(37,37,37,.9)}  .pano_switch_left{background:url(https://api.map.baidu.com/images/panorama/zuojiantou.png) no-repeat;-webkit-background-size:100% 100%;background-size:100% 100%}  .pano_switch_right{background:url(https://api.map.baidu.com/images/panorama/youjiantou.png) no-repeat;-webkit-background-size:100% 100%;background-size:100% 100%}  .pano_switch_left:hover{background:url(https://api.map.baidu.com/images/panorama/zuojiantou_hover.png) no-repeat;-webkit-background-size:100% 100%;background-size:100% 100%}  .pano_switch_right:hover{background:url(https://api.map.baidu.com/images/panorama/youjiantou_hover.png) no-repeat;-webkit-background-size:100% 100%;background-size:100% 100%}  .pano_switch_left.pano_switch_disable,.pano_switch_right.pano_switch_disable{background:0 0;border:none}  .pano_poi_1,.pano_poi_2,.pano_poi_4{display:inline-block;width:16px;height:16px;vertical-align:middle;background:url(https://gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv/newmap/static/common/images/pano_whole/guide_icons_4b871b2.png) no-repeat;background-position:0 0}  .pano_photo_arrow_l,.pano_photo_arrow_r{position:absolute;top:0;width:20px;height:100%;background:#f3eeee}  .pano_photo_arrow_l{left:0}  .pano_photo_arrow_r{right:0}  .pano_arrow_l,.pano_arrow_r{display:inline-block;width:18px;height:18px;background:url(https://gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv/newmap/static/common/images/pano_whole/pano-icons_223a291.png) no-repeat}  .pano_catlogLi{cursor:pointer;position:relative;line-height:10px;font-size:10px;text-align:center;color:#abb0b2;border:1px solid #53565c;padding:3px 0;margin-top:3px;margin-left:2px;width:90%}  .pano_catlogLi:hover{color:#3DAAFC;border:1px solid #3DAAFC}  .pano_catlogLiActive{color:#3DAAFC;border:1px solid #3DAAFC}  .pano_arrow_l{background-position:0 -36px}  .pano_arrow_r{background-position:-54px -36px}  .pano_photo_arrow_l:hover .pano_arrow_l{background-position:-18px -36px}  .pano_photo_arrow_r:hover .pano_arrow_r{background-position:-72px -36px}  .pano_photo_arrow_l.pano_arrow_disable .pano_arrow_l{background-position:-36px -36px}  .pano_photo_arrow_r.pano_arrow_disable .pano_arrow_r{background-position:-90px -36px}  .pano_photo_item{position:relative;float:left;line-height:0;padding-left:8px}  .pano_photo_decs{position:absolute;bottom:1px;left:0;padding:2px 0;text-indent:5px;margin-left:8px;display:inline-block;color:#fff;background:#000;opacity:.5;filter:alpha(opacity=50)9;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}  .pano_photo_item img{display:inline-block;border:solid 1px #252525}  .pano_photo_item:hover img{border-color:#005efc}  .pano_photo_item_seleted{position:absolute;top:0;left:-100000px;border:3px solid #097df3}  .pano_close{position:absolute;right:10px;top:10px;width:40px;cursor:pointer;height:40px;line-height:40px;border-radius:3px;background-color:rgba(37,37,37,.9);background-image:url(https://api.map.baidu.com/images/panorama/close.png);background-repeat:no-repeat;background-position:center center;background-size:90%}  .pano_close:hover{background-image:url(https://api.map.baidu.com/images/panorama/close_hover.png)}  .pano_pc_indoor_exit{position:absolute;right:60px;top:10px;width:89px;cursor:pointer;height:40px;line-height:40px;color:#ebedf0;border-radius:3px;background-color:#252525;background-color:rgba(37,37,37,.9);background-image:url(https://api.map.baidu.com/images/panorama/indoor_exit.png);background-repeat:no-repeat;background-position:15px 12px}  .pano_pc_indoor_exit:hover{background-image:url(https://api.map.baidu.com/images/panorama/indoor_exit_hover.png);color:#2495ff}  .pano_m_indoor_exit{font-size:16px;position:absolute;right:30px;top:10px;width:89px;cursor:pointer;height:40px;line-height:40px;color:#ebedf0;border-radius:3px;background-color:#252525;background-color:rgba(37,37,37,.9);background-image:url(https://api.map.baidu.com/images/panorama/indoor_exit.png);background-repeat:no-repeat;background-position:15px 12px}  .navtrans-table tr{color:#666}  .navtrans-table tr:hover{color:#333}  .navtrans-navlist-icon{float:left;width:18px;height:18px;background:url(https://api.map.baidu.com/images/new-direction-icon.png) no-repeat -1px -1px;background-size: 130px 137px;_background:url(https://gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv/wolfman/static/common/images/nav-icon_ie6_134841b.png) no-repeat 0px 0px;margin-right:5px}  .navtrans-navlist-icon.s-1{background-position:-1px -1px}  .navtrans-navlist-icon.s-2{background-position:-19px -1px}  .navtrans-navlist-icon.s-3{background-position:-36px -1px}  .navtrans-navlist-icon.s-4{background-position:-54px -1px}  .navtrans-navlist-icon.s-5{background-position:-73px -1px}  .navtrans-navlist-icon.s-6{background-position:-91px -1px}  .navtrans-navlist-icon.s-7{background-position:-1px -20px}  .navtrans-navlist-icon.s-8{background-position:-19px -19px}  .navtrans-navlist-icon.s-9{background-position:-37px -19px}  .navtrans-navlist-icon.s-10{background-position:-54px -19px}  .navtrans-navlist-icon.s-11{background-position:-72px -19px}  .navtrans-navlist-icon.s-12{background-position:-90px -19px}  .navtrans-navlist-icon.s-13{background-position:-1px -39px}  .navtrans-navlist-icon.s-14{background-position:-19px -38px}  .navtrans-navlist-icon.s-18{background-position:-38px -38px}  .navtrans-navlist-icon.s-19{background-position:-56px -38px}  .navtrans-navlist-icon.s-20{background-position:-74px -38px}  .navtrans-navlist-icon.s-21{background-position:-92px -38px}  .nav-st{margin-top: 2px;}  .navtrans-navlist-icon.nav-st,.navtrans-navlist-icon.nav-through{background:url(https://gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv/wolfman/static/common/images/nav-icon_b5c3223.png) no-repeat 0px 0px;background-position:-18px -70px}  .navtrans-navlist-icon.nav-ed{background:url(https://gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv/wolfman/static/common/images/nav-icon_b5c3223.png) no-repeat 0px 0px;background-position:-1px -70px}  .navtrans-view{border-top:1px solid #e4e6e7;border-left:1px solid #e4e6e7;border-right:1px solid #e4e6e7}  .navtrans-view:hover{cursor:pointer}  .navtrans-view .navtrans-arrow{position:absolute;top:8px;right:5px;width:7px;height:4px;background-image:url(https://api.map.baidu.com/images/new-direction-icon.png);background-repeat:no-repeat;background-position:-40px -70px;margin-top:3px;margin-right:3px;_background-image:url(https://gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv/wolfman/static/common/images/nav-icon_ie6_134841b.png)}  .navtrans-view.expand:hover .navtrans-arrow{background-position:-61px -70px}  .navtrans-view.expand .navtrans-arrow{background-position:-54px -70px}  .navtrans-view:hover .navtrans-arrow{background-position:-47px -70px}  .navtrans-navlist-content{overflow:hidden}  .navtrans-res{border-bottom:1px solid #E4E6E7;border-left:1px solid #E4E6E7;border-right:1px solid #E4E6E7}  .navtrans-bus-icon{display:inline-block;float:left;background-image:url(https://gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv/wolfman/static/common/images/ui3/mo_banner_e1aa2e6.png);background-repeat:no-repeat;left:-5px}  .navtrans-bus-icon.bus{background:url(https://api.map.baidu.com/images/new-direction-icon.png) no-repeat 0 0;background-size: 130px 137px; width:18px;height:18px;background-position:-55px -57px;position:relative;top:2px}  .navtrans-bus-icon.walk{background:url(https://api.map.baidu.com/images/new-direction-icon.png) no-repeat 0 0;background-size: 130px 137px;width:18px;height:18px;background-position:-19px -57px;position:relative;top:2px;left:-5px}  .navtrans-bus-desc{line-height:24px;margin-left:20px}  .navtrans-busstation{color:#36c;font-weight:600}  .tranroute-plan-list.expand .trans-title{border-bottom:1px solid #e4e6e7;background-color:#ebf1fb}  .trans-plan-content tr td:hover .bus{background:url(https://api.map.baidu.com/images/new-direction-icon.png) no-repeat 0 0;background-size: 130px 137px;background-position:-37px -57px}  .trans-plan-content tr td:hover .walk{background:url(https://api.map.baidu.com/images/new-direction-icon.png) no-repeat 0 0;background-size: 130px 137px; background-position:-1px -57px}  .suggest-plan{position:absolute;background-color:#0C88E8;padding:0px 15px;line-height:20px;color:#fff;left:0px;top:0px}  .suggest-plan-des{text-align:left;padding:29px 0px 0px 25px;font-size:13px;color:#000}  .bmap-clearfix{*+height:1%}  .bmap-clearfix:after{content:".";display:block;height:0px;clear:both;visibility:hidden}  .bmap-link{width: 1px;height: 8px;display: inline-block;background: #C4C7CE;top: 19px;position: absolute;left: 9px; margin-left: -1px;}  .BMap_CityListCtrl{font-size:12px}  .BMap_CityListCtrl a{text-decoration:none!important}  .BMap_CityListCtrl a:hover{text-decoration:underline!important}  .BMap_CityListCtrl .citylist_popup_main{border:1px solid #cdcdcd;z-index:2;position:relative;width:100%;height:100%;background:#fafafa;overflow:hidden;box-shadow:1px 1px 1px rgba(0,0,0,.1)}  .ui_city_change_top .ui_city_change_inner,.ui_city_change_bottom .ui_city_change_inner{display:inline-block;height:24px;line-height:24px;border:1px solid #c4c7cc;background-color:#fff;padding:0 10px 0 10px;color:#000}  .ui_city_change_top .ui_city_change_inner i,.ui_city_change_bottom .ui_city_change_inner i{width:8px;height:6px;display:inline-block;position:relative;top:9px;left:5px;-webkit-transition:all ease-in-out .15s;transition:all ease-in-out .15s;display:none9}  .ui_city_change_click .ui_city_change_inner i,.ui_city_change_click_close .ui_city_change_inner i{-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}  .ui_city_change_top .ui_city_change_inner:hover em{border-top-color:#0C88E8}  .ui_city_change_top .ui_city_change_inner em{width:0;height:0;border-color:rgba(255,255,255,0);border-top-color:#D0D4DA;border-style:solid;border-width:4px}  .ui_city_change_top .ui_city_change_inner:hover,.ui_city_change_bottom .ui_city_change_inner:hover{text-decoration:none!important;color:#3d6dcc}  .ui_city_change_bottom .ui_city_change_inner:hover em{border-bottom-color:#0C88E8}  .ui_city_change_bottom .ui_city_change_inner em{width:0;height:0;border-color:rgba(255,255,255,0);border-bottom-color:#D0D4DA;border-style:solid;border-width:4px;position:relative;top:-18px}  .citylist_popup_main .citylist_ctr_title{background:#f9f9f9;border-bottom:1px solid #dadada;height:25px;line-height:25px;font-size:12px;color:#4c4c4c;padding-left:7px}  .citylist_popup_main .city_content_top{position:relative;height:30px;padding:15px 10px 0px 10px;border-bottom:1px solid #CCC;margin:0px 10px}  .citylist_popup_main .city_content_top .cur_city_info{display:inline-block;margin:0;padding:0;}  #city_ctrl_form{position:absolute;right:12px;top:10px}  #selCityWd{border:1px solid #ccc;height:20px;width:121px;line-height:20px;text-indent:4px;outline:none}  #selCitySubmit:hover{background-position:-355px -98px}  #selCitySubmit{float:right;background:url(https://gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv/wolfman/static/common/images/index_a2f1ac4.png) no-repeat scroll -302px -98px;height:24px;line-height:24px;width:48px;cursor:pointer;margin-left:5px;text-align:center}  #sel_city_letter_list{padding-top:10px}  #sel_city_letter_list a{white-space:nowrap;margin-right:11px;line-height:18px;font-size:13px;font-family:Arial,Helvetica,SimSun,sans-serif}  .city_content_medium{padding:10px 10px 10px 10px;border-bottom:1px solid #CCC;margin:0px 10px}  .city_content_bottom{padding:10px 10px 10px 8px;margin:9px 5px 5px 5px;height:218px;overflow-y:auto}  #city_detail_table tr td{vertical-align:top}  .sel_city_hotcity a{color:#3d6dcc}  .sel_city_letter{padding:0 14px 0 3px}  .sel_city_letter div{font-size:24px;line-height:24px;font-weight:700;color:#ccc;padding:0;margin:0;font-family:Arial,Helvetica,SimSun,sans-serif}  .sel_city_sf{padding-right:8px;font-weight:700}  .sel_city_sf a{white-space:nowrap;line-height:18px;color:#3d6dcc}  .city_names_wrap{margin-bottom:9px}  .sel_city_name{color:#3d6dcc;white-space:nowrap;margin-right:9px;line-height:18px;float:left}  #popup_close{outline:none;position:absolute;z-index:50;top:7px;right:6px;width:12px;height:12px;background:url(https://gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv/wolfman/static/common/images/popup_close_15d2283.gif) no-repeat;border:0;cursor:pointer}</style></head>
<link  href="static/css/city-picker.css" rel="stylesheet"/>
<script type="text/javascript" src="static/js/jquery.js" ></script>
<script type="text/javascript" src="static/js/city-picker.data.js" ></script>
<script type="text/javascript" src="static/js/city-picker.js" ></script>
<style>
    #backgroundhover:hover{
        background-color: rgb(0,0,0,0.1);
    }
    .info {
        z-index: 999;
        width: auto;
        padding: .75rem 1.25rem;
        margin-left: 1.25rem;
        position: fixed;
        top: 1rem;
        background-color: rgba(265, 265, 265, 0.9);
        border-radius: .25rem;
        font-size: 14px;
        color: #666;
        box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.3);
    }
</style>
<body>
<scirpt src="../js/tingyun-rum.js?v=e21304b160"></scirpt>
<div id="header">
    <div class="header-main">
        <div class="header-left">
            <div class="logo-box">
                <img src="js_01/logo.png" alt="logo" class="logo">
            </div>

        </div>
        <div class="header-middle">
            <ul>
                <li><span
                        class="js-home-page" >首页</span></li>
                <li class="business">
                    <span >物流业务</span>
                    <div class="business-menu clearboth international-add-new">
                        <div class="menu-box box-1">
                            <span class="menu-title">国内业务</span>
                            <div class="menu-room clearboth">
                                <div class="menu_list">
                                    <em>时效件</em>
                                    <a href="javascript:void(0)" class="menu-item js-business-today">当天件</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-rick">次晨达</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-morrow">次日达</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-onAlternateDays">隔日达</a>
                                </div>
                                <div class="menu_list">
                                    <em>增值业务</em>
                                    <a  href="javascript:void(0)" class="menu-item js-business-twoHours">尊享2小时</a>
                                    <a  href="javascript:void(0)" class="menu-item js-business-payOnDelivery">代收货款</a>
                                    <a  href="javascript:void(0)" class="menu-item js-business-supportValue">保价</a>
                                    <a  href="javascript:void(0)" class="menu-item js-business-stores">门店直发</a>
                                    <a  href="javascript:void(0)" class="menu-item js-business-freshDelivery">优鲜送</a>
                                    <a  href="javascript:void(0)" class="menu-item js-business-freightCollectExpressItem">到付件</a>
                                    <a  href="javascript:void(0)" class="menu-item js-business-signTheBillToReturn">签单返还</a>
                                </div>
                                <div class="menu_list">
                                    <em>数字产品</em>
                                    <a href="javascript:void(0)"
                                       class="menu-item js-business-electronicsSurfaceSingle">电子面单</a>
                                    <a href="javascript:void(0)"
                                       class="menu-item js-business-privacySurfaceSingle">隐私面单</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-cloudPrint">云打印</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-enterpriseOrder">企业下单
                                        <!-- <i>hot</i> -->
                                    </a>
                                    <a href="javascript:void(0)" class="menu-item js-business-recheneinheit">统一结算
                                        <!-- <i>hot</i> -->
                                    </a>
                                    <a href="javascript:void(0)" class="menu-item js-zop" target="_blank"
                                       id="nav_zop">开放平台</a>
                                    <a href="javascript:void(0)" class="menu-item js-zpa" target="_blank"
                                       id="nav_zpa">快递管家</a>

                                </div>
                                <div class="menu_list">
                                    <em>售后宝</em>
                                    <a href="javascript:void(0)" class="menu-item js-business-afterSalesService">售后宝</a>
                                </div>
                            </div>
                        </div>
                        <div class="menu-box box-2">
                            <span class="menu-title">国际&台港澳业务</span>
                            <div class="menu-room clearboth">
                                <div class="menu_list">
                                    <em>港台件</em>
                                    <a href="javascript:void(0)" class="menu-item js-business-hongkong">香港专线</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-taiwan">台湾专线</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-hongkongDhl">香港DHL</a>
                                </div>
                                <div class="menu_list">
                                    <em>国际件</em>
                                    <a href="javascript:void(0)" class="menu-item js-business-asia">东南亚自营运输网络</a>
                                    <a href="javascript:void(0)"class="menu-item js-business-cross">跨境业务</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-overseas">海外转运</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-localization">本地化落地配</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-warehousing">仓储</a>
                                </div>
                            </div>
                        </div>
                        <div class="menu-box box-3">
                            <span class="menu-title">仓储业务</span>
                            <div class="menu-room clearboth">
                                <div class="menu_list">
                                    <em>仓储业务</em>
                                    <a href="javascript:void(0)" class="menu-item js-business-cloudChamber">关于云仓</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-serviceProducts">产品服务</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-serviceScope">服务范围</a>
                                    <a href="javascript:void(0)"
                                       class="menu-item js-business-cooperativePartner">合作伙伴</a>
                                </div>
                            </div>
                        </div>
                        <div class="menu-box box-4">
                            <span class="menu-title">冷链业务</span>
                        </div>
                    </div>
                </li>
                <li>
                    <span  class="active-nav" >客户服务</span>
                    <div class="business-menu clearboth">
                        <div class="menu-box box-11">
                            <span class="menu-title">寄件服务</span>
                            <div class="menu-room clearboth">
                                <div class="menu_list">
                                    <a href="javascript:void(0)" class="menu-item js-express-ship">在线寄件</a>
                                    <a href="https://www.ztoglobal.com/" target="_blank" class="menu-item ">国际件</a>
                                </div>
                            </div>
                        </div>
                        <div class="menu-box box-12">
                            <span class="menu-title">查询服务</span>
                            <div class="menu-room clearboth">
                                <div class="menu_list long_one">
                                    <a href="expressCheck.jsp" class="menu-item js-express-check">查件（物流追踪）</a>
                                    <a href="javascript:void(0)" class="menu-item js-express-website">服务网点查询</a>
                                    <a href="javascript:void(0)" class="menu-item js-express-price">运费时效查询</a>
                                    <a href="javascript:void(0)" class="menu-item js-express-prohibited">违禁品查询</a>
                                </div>
                            </div>
                        </div>
                        <div class="menu-box box-13">
                            <span class="menu-title">客户支持</span>
                            <div class="menu-room clearboth">
                                <div class="menu_list long_one">
                                    <!--<a href="javascript:void(0)" class="menu-item js-express-complain">客户投诉电话</a>-->
                                    <a href="javascript:void(0)" class="menu-item js-express-questions">常见问题</a>
                                    <a href="javascript:void(0)" class="menu-item js-express-suggest">投诉建议</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <span >加盟合作</span>
                    <div class="business-menu clearboth">
                        <div class="menu-box box-6">
                            <span class="menu-title">加盟合作</span>
                            <div class="menu-room clearboth">
                                <div class="menu_list">
                                    <a href="javascript:void(0)" class="menu-item js-express-outlets">加盟快递网点</a>
                                    <a href="javascript:void(0)" class="menu-item js-cooperate">商家合作</a>
                                    <a href="javascript:void(0)" class="menu-item js-supplier">供应商合作</a>
                                    <a href="http://supplier.zt-express.com/" class="menu-item" target="_blank">供应商门户</a>
                                    <a href="https://icloud.zto.com/#/welcome" class="menu-item" target="_blank">短信解决方案</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li><span
                        class="js-finance" >金融</span></li>
                <li>
                    <span  class="js-goHr">招聘</span>
                    <!--                    <div class="business-menu clearboth">-->
                    <!--                        <div class="menu-box box-9">-->
                    <!--                            <span class="menu-title">招聘</span>-->
                    <!--                            <div class="menu-room clearboth">-->
                    <!--                                <div class="menu_list">-->
                    <!--                                    <a href="http://hr.zto.com/index.html" class="menu-item" target="_blank">投递简历</a>-->
                    <!--                                    <a href="http://hr.zto.com/social/index.html" class="menu-item"-->
                    <!--                                        target="_blank">社会招聘</a>-->
                    <!--                                    <a href="http://hr.zto.com/school/index.html" class="menu-item"-->
                    <!--                                        target="_blank">校园招聘</a>-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                </li>
                <li>
                    <span >关于中通</span>
                    <div class="business-menu clearboth">
                        <div class="menu-box box-7">
                            <span class="menu-title">关于中通</span>
                            <div class="menu-room clearboth">
                                <div class="menu_list long_one">
                                    <em>企业介绍</em>
                                    <a href="javascript:void(0)" class="menu-item js-company-profile">企业概述</a>
                                    <a href="javascript:void(0)" class="menu-item js-corporate-development">中通大事记</a>
                                    <a href="javascript:void(0)" class="menu-item js-leadership-concern">领导关怀</a>
                                </div>
                                <div class="menu_list long_one">
                                    <em>企业文化</em>
                                    <a href="javascript:void(0)" class="menu-item js-corporate-culture">文化理念</a>

                                    <a href="javascript:void(0)" class="menu-item js-story">中通故事</a>

                                </div>
                                <div class="menu_list long_one">
                                    <em>企业展示</em>
                                    <a href="javascript:void(0)" class="menu-item js-enterprise-video">企业视频</a>
                                    <a href="javascript:void(0)" class="menu-item js-responsibility-honor">责任荣誉</a>
                                    <a href="javascript:void(0)" class="menu-item js-charity">中通公益</a>
                                </div>
                                <div class="menu_list long_one">
                                    <em>新闻动态</em>
                                    <a href="javascript:void(0)" class="menu-item js-new-list">公司动态</a>
                                    <a href="javascript:void(0)" class="menu-item js-industry-new">行业新闻</a>
                                </div>
                                <div class="menu_list long_one">
                                    <em>联系我们</em>
                                    <a href="javascript:void(0)" class="nav-item js-contact-us">联系我们</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <span >投资者关系</span>
                    <div class="business-menu clearboth">
                        <div class="menu-box box-14">
                            <span class="menu-title">投资者关系</span>
                            <div class="menu-room clearboth">
                                <div class="menu_list">
                                    <a href="javascript:void(0)" class="menu-item js-investor-cn-index">投资者关系</a>
                                </div>
                            </div>
                            <div class="menu-room clearboth hktzz">
                                <div class="menu_list">
                                    <a href="javascript:void(0)" class="menu-item js-investor-hk-index">投資者關係</a>
                                </div>
                            </div>
                            <div class="menu-room clearboth">
                                <div class="menu_list">
                                    <a href="http://zto.investorroom.com/" class="menu-item" target="_blank">Investors</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="header-right">
            <div class="phone-number">
                <div class="phone-number-box">
                    <img src="static/picture/phonenumber.png" alt="全国统一热线">
                </div>
            </div>
            <input type="hidden" id="customerId" value="${customer.customerId}">
            <c:if test="${empty customer}" >
                <a  href="login.html"  class="login">
                    <img id="skin-login-icon" style="top:2px;" class="login-img" src="static/picture/login.png" alt="登录"> <span class="login-text">登录</span>
                </a>
                <a href="register.html"  class="registere">
                    <img id="skin-register-icon" class="login-img" src="static/picture/register.png" alt="注册"> <span class="login-text">注册</span>
                </a>
            </c:if>
            <c:if test="${!empty customer}">
                <div class="users" style="position: absolute;top: 32px;
                                            right: 80px;
                                            padding-right: 10px;
                                            font-size: 12px;
                                            font-family: '宋体';
                                            color: #5e5e5e;
                                            border-right: 1px solid #eaeaea;">
                    <img src="static/picture/login.png" style="top:2px;" alt="用户">
                    <c:if test="${null!=customer.nickName}">
                        <a href="myZto.jsp" style="cursor: pointer;color: #25a4bb;">${customer.nickName}</a>
                    </c:if>
                    <c:if test="${null==customer.nickName}">
                        <a href="myZto.jsp" style="cursor: pointer;color: #25a4bb;">${customer.phone}</a>
                    </c:if>
                </div>
            </c:if>
            <div class="backold">
                <a href="https://en.zto.com/" target="_blank" title="Switch to English version">EN</a>
            </div>
            <div class="intl">
                <a href="https://www.ztoglobal.com/" target="_blank" title="Switch to intl ">intl</a>
            </div>
        </div>
    </div>
</div>
<!-- 我就是一个分隔符 -->
<div id="js-header-wrap" class="header-wrap">
    <div id="content">
        <div class="link">
            <ul>
                <li id="btn_customerService">
                    <a href="javascript:;" target="_blank" id="contactUs" class="line-server">
                        <div class="line-server-bgimg"></div>
                        <p class="link-font">
                            在线客服
                        </p>
                    </a>
                </li>
                <li id="btn_complaintsSuggestions">
                    <a href="https://my.zto.com/feedback"  class="complaint-suggestion js-express-suggest">
                        <div class="complaint-suggestion-bgimg"></div>
                        <p class="link-font">
                            投诉建议
                        </p>
                    </a>
                </li>
                <li class="js-back-top">
                    <a href="javaScript:void(0)" class="back-top">
                        <div class="back-top-bgimg"></div>
                        <p class="link-font">
                            返回顶部
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
<div id="banner">
    <div class="banner_box">
        <img src="static/picture/express_banner.jpg" />
    </div>
</div>
<div id="content">
    <div class="content-main">
        <div class="nav-zto js-nav-fixed">
            <div class="nav-zto-bgimg"></div>
            <div class="nav-zto-room">
                <h1>客户服务</h1>
                <ul>
                    <li>
                        <div class="nav-zto-font">
                <span class="nav-item js-express-ship">寄件服务
                  <i></i>
                </span>
                        </div>
                    </li>
                    <li>
                        <div class="nav-zto-font show">
                <span class="nav-item">查询服务
                  <i></i>
                </span>
                            <div class="nav-zto-menu">
                                <span class="menu-item " id="queryParcel">查件（物流追踪）</span>
                                <span class="menu-item checked">服务网点查询</span>
                                <span class="menu-item js-express-price" id="queryPrice">运费时效查询</span>
                                <span class="menu-item js-express-prohibited" id="queryProhibited">违禁品查询</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="nav-zto-font">
                <span class="nav-item">客服支持
                  <i></i>
                </span>
                            <div class="nav-zto-menu">
                                <span class="menu-item js-express-questions">常见问题</span>
                                <span class="menu-item js-express-suggest">投诉建议</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <i class="jag"></i>
            </div>
        </div>
        <div class="express-cont overall website" style="padding: 0;">
            <!--<h2 class="express-title exWebsite clearboth">服务网点查询<a target="_blank" href="https://wj.qq.com/s/1928490/a861">填问卷赢20元礼券</a></h2>-->
            <!-- <p class="website-hint">中通快递的服务网点达到
                        <em>2.89</em>万多个，网络通达中国
                        <em>97.69</em>%以上的市县。</p> -->
            <div class="website-handle clearboth">
                <form id="websiteForm">
                    <div class="txt-box">
                        <input style="height: 40px" data-toggle="city-picker" type="text"  id="site" name="site" readonly="readonly" placeholder="请选择省市区  (必选)" >
                    </div>

                    <div class="txt-box">
                        <input id="cityName" type="text" placeholder="请输入详细地址" maxlength="20" id="keyword" class="website-txt" autocomplete="off">
                        <i class="address-clear"></i>
                    </div>

                    <div class="txt-box" style="width: 600px; display: none;">
                        <input style="width: 560px;" type="text" class="website-txt address" maxlength="20" id="address" name="address" placeholder="可输入地址/小区名/道路名" autocomplete="off">
                        <div id="searchResultPanel" style="border:1px solid #C0C0C0; width:150px; height:auto; display:none;"></div>
                        <i class="address-clear"></i>
                    </div>

                    <input onclick="theLocation()" type="button" class="website-btn query" data-type="" value="查询" style="background: rgb(51, 162, 247) none repeat scroll 0% 0%;">
                </form>
            </div>

            <div class="query-history" style="display: none;">
                <span>最近查询记录：</span>
                <i>无</i></div>
            <div class="website-result">
                <!-- <div class="type-menu">
                              <span class="menu-item list show">列表模式</span>
                              <span class="menu-item map">地图模式</span>
                          </div> -->
                <div class="type-box clearboth show map" style="position: relative;">
                    <div class="website-nearby" style="overflow-y:auto">
                        <!-- <div class="website-sel">
                                          <span><i>5</i><em>km</em></span>
                                          <div class="sel-list">
                                              <em class="sel-item"><i>3</i>km</em>
                                              <em class="sel-item"><i>5</i>km</em>
                                              <em class="sel-item"><i>10</i>km</em>
                                              <em class="sel-item"><i>全部</i></em>
                                          </div>
                                      </div> -->

                        <strong class="nearby-titel">推荐结果:</strong>
                        <p class="nearby-text" style="">共找到
                            <i></i>${count}个快递网点</p>
                        <h3 class="area-title">${count}个网点</h3>
                            <c:forEach var="list" items="${branchList}">
                                <br/>
                                <div  style="padding: 5px" id="backgroundhover" class="${list.branchId}id" style="cursor:Pointer">
                                    <table>
                                        <tr>
                                            <td></td><td style="height: 25px;font-size: 15px">${list.branchAddress}</td>
                                        </tr>
                                        <tr>
                                            <td></td><td style="height: 25px;color: darkgrey">${list.branchPhone}</td>
                                        </tr>
                                    </table>
                                </div>
                                <hr/>
                            </c:forEach>

                    </div>
                    <div class="map-room" id="container_01" style="overflow: hidden; position: relative; z-index: 0; background-color: rgb(243, 241, 236); color: rgb(0,0,0); text-align: left;"><div style="overflow: visible; position: absolute; z-index: 0; left: 3947px; top: -1442px; cursor: grab;">

                    </div>
                        <span class="back-china" id="backChina" style="display: inline;">返回全国</span>
                    </div>
                    <div class="type-box list site-group">
                        <p class="site-sum" style="display: block;">共找到16个快递网点</p>
                        <div class="site-list-box"><div class="area-title clearboth cur"><p>null-<em>16个网点</em></p><i></i></div><table class="cur"><tbody><tr><th>网点名称</th><th>详细地址</th><th>网点经理</th><th>网点电话</th></tr><tr data-code="73121"><td>长沙中转部</td><td>桔园小区综合楼B栋110房</td><td>贺宋</td><td>0731-85014799、0731-89560542</td></tr><tr data-code="73150"><td>长沙中转部</td><td>五一新村g15栋中通快递</td><td>刘任杰</td><td>0731-89560482</td></tr><tr data-code="73124"><td>长沙中转部</td><td>车站南路福乐康城商业街119-120中通快递</td><td>张文胜</td><td>0731-89975038、18670067304</td></tr><tr data-code="73129"><td>长沙中转部</td><td>梓园路321号君悦紫园1楼中通快递</td><td>蔡新田</td><td>18075158342、0731-89560493</td></tr><tr data-code="73116"><td>长沙中转部</td><td>振东路海王建筑有限公司院内</td><td>华林锋</td><td>0731-89560537</td></tr><tr data-code="73156"><td>长沙中转部</td><td>高福星小区27栋1-2门面</td><td>胡萍</td><td>15386441903</td></tr><tr data-code="73283"><td>长沙中转部</td><td>树木岭自然村新塘组民营工业园家家乐超市斜对面中通快递</td><td>黄静</td><td>13077330030、13272442469</td></tr><tr data-code="731040"><td>长沙中转部</td><td>雨花路88裕华名苑向北F3门面</td><td>李宪法</td><td>15387549530</td></tr><tr data-code="731053"><td>长沙中转部</td><td>韶山北路449号福乐名园</td><td>戴星</td><td>0731-85490212</td></tr><tr data-code="731095"><td>长沙中转部</td><td>长沙市雨花区香樟东路349号世达工业区</td><td>周浩堃</td><td>0731-89560723、13357222525、18163702873</td></tr><tr data-code="731103"><td>长沙中转部</td><td>长沙市雨花区古曲南路大桥二小区</td><td>罗洲</td><td>13217316630、15274968831</td></tr><tr data-code="731111"><td>长沙中转部</td><td>湖南省长沙市雨花区粟塘小区40栋一楼</td><td>刘点强</td><td>15074893866、15111380803</td></tr><tr data-code="731117"><td>长沙中转部</td><td>长沙市雨花区板塘村50号中通快递</td><td>郭立将</td><td>13319503979、13319503826</td></tr><tr data-code="731125"><td>长沙中转部</td><td>长沙市雨花区洞井街道板塘村南瓦屋组</td><td>黄国文</td><td>0731-89562291</td></tr><tr data-code="731149"><td>长沙中转部</td><td>长沙市雨花区劳动中路382号顺特变压器厂65号仓库对面</td><td>唐春叶</td><td>95013599070</td></tr><tr data-code="731148"><td>长沙中转部</td><td>长沙市雨花区金林路134号金井馨苑A5栋4单元</td><td>向星乾</td><td>0731-89562906</td></tr></tbody></table></div>
                    </div>
                    <div id="block_address" class="website_detail_popup" style="display: none;">
                        <div class="website_detail_gray"></div>
                    </div>
                    <!-- <div class="nearby-message">
                                  <div class="message-top">
                                      <strong>网点-青浦城区</strong>
                                      <a href="https://my.zto.com/order" class="send-link" target="_blank">在线寄件</a>
                                      <a href="" class="service-link" target="_blank">在线客服</a>
                                      <em class="packup">收起</em>
                                  </div>
                                  <div class="message-cont">
                                      <div class="message-menu">
                                          <span class="message-menu-item checked">网点详情</span>
                                          <span class="message-menu-item">配送范围</span>
                                          <span class="message-menu-item">增值服务</span>
                                      </div>
                                      <div class="message-tab">
                                          <div class="message-box show">
                                              <table class="website-table">
                                                  <tr>
                                                      <th>网点名称：</th>
                                                      <td>
                                                          <span class="website-name"></span>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <th>上级公司：</th>
                                                      <td>
                                                          <span class="website-company"></span>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <th>公司地址：</th>
                                                      <td>
                                                          <span class="website-site"></span>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <th>网点经理：</th>
                                                      <td>
                                                          <span class="website-manager"></span>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <th>联系电话：</th>
                                                      <td>
                                                          <span class="website-phone">查询：021-69220480、18201872238；
                                                              <br>业务咨询：021-69220480；
                                                              <br>传真电话：021-69220480；
                                                              <br>投诉：021-69220480；</span>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <th>备注：</th>
                                                      <td>
                                                          <span class="website-remark"></span>
                                                      </td>
                                                  </tr>
                                              </table>
                                              <div class="website-imgbox">
                                                  <div class="website-img">
                                                      <img src="../images/express/website1.jpg" />
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="message-box">
                                              <table class="website-table long">
                                                  <tr>
                                                      <th>派送范围：</th>
                                                      <td>
                                                          <span class="website-dispatchRange"></span>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <th>不派送范围：</th>
                                                      <td>
                                                          <span class="website-notDispatchRange "></span>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <th>延迟派送：</th>
                                                      <td>
                                                          <span class="website-deliveryDelay"></span>
                                                      </td>
                                                  </tr>
                                              </table>
                                          </div>
                                          <div class="message-box clearboth">
                                              <div class="service-item Topayment">到付业务</div>
                                              <div class="service-item AgentMoney">代收货款</div>
                                          </div>
                                      </div>
                                  </div>
                              </div> -->
                </div>
            </div>
        </div>
    </div>

    <div class="website_detail_popup">
        <div class="website_detail_gray"></div>

        <div class="website_detail_box">
            <span class="close"></span>

            <div class="header clearboth">
                <h2 class="d-siteName">网点-青浦城区</h2>
                <!-- <i>更新时间：2017年10月12日</i> -->
                <div class="link-box">
                    <a class="service" target="_blank" href="https://kfapi.zto.com/im?channel=official&amp;siteCode=21092">在线客服</a>
                    <a class="send js-express-ship" href="javascript:void(0)" target="_blank">在线寄件</a>
                </div>
            </div>

            <div class="container">
                <div class="tab_menu clearboth">
                    <em class="cur">网点详情</em>
                    <em>配送范围</em>
                    <em>增值业务</em>
                </div>

                <div class="tab_content">
                    <div class="detail" style="display: block;">
                        <p class="d-siteNameS">网点名称：
                            <em>青浦城区</em>
                        </p>
                        <p class="d-topCompany">上级公司：
                            <em>上海</em>
                        </p>
                        <p class="d-adress">公司地址：
                            <em>上海市青浦区华志路1685号</em>
                        </p>
                        <p class="d-manage">网点经理：
                            <em>陈封（18212124578）</em>
                        </p>
                        <p class="d-note">备注：
                            <em></em>
                        </p>

                        <h3>查询电话：</h3>
                        <table class="d-searchTel">
                            <tbody><tr>
                                <th>网点名称</th>
                                <th>查询服务</th>
                                <th>业务咨询</th>
                                <th>投诉</th>
                                <th>传真</th>
                            </tr>
                            <tr>
                                <td>XXX网点</td>
                                <td>021-12458956</td>
                                <td>021-12458956</td>
                                <td>021-12458956</td>
                                <td>021-12458956</td>
                            </tr>
                            </tbody></table>
                    </div>
                    <div class="range">
                        <p class="d-range clearboth">
                            <i>派送范围：</i>
                            <em>徐家汇路，建国东路，建国中路，肇周路，永年路，瑞金南路，打浦路，绍兴路，建德路，泰康路</em>
                        </p>
                        <p class="d-noRange clearboth">
                            <i>不派送范围：</i>
                            <em>无</em>
                        </p>
                        <!-- <p class="d-lateDispatch clearboth">
                          <i>延迟派送：</i>
                          <em></em>
                        </p> -->
                    </div>
                    <div class="business d-business clearboth">
                        <!-- <span class="d-pay">到付业务</span>
                        <span class="d-collect">代收货款</span> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="js-footer-wrap">
        <div id="about" class="js-footer">
            <div class="about-main">
                <div class="about">
                    <div class="about-font">
                        <ul>
                            <h3>业务产品</h3>
                            <span></span>
                            <li><a href="https://www.zto.com/business/twoHours.html">增值业务</a></li>
                            <li><a href="https://www.zto.com/business/hongkong.html">港台件</a></li>
                            <li><a href="https://www.zto.com/business/asia.html">国际件</a></li>
                            <li><a href="https://www.zto.com/business/afterSalesService.html">售后服务</a></li>
                        </ul>
                        <ul>
                            <h3>客户服务</h3>
                            <span></span>
                            <li><a href="https://my.zto.com/create">在线寄件</a></li>
                            <li><a href="https://www.zto.com/express/expressCheck.html">运单查询</a></li>
                            <li><a href="https://www.zto.com/express/expressWebsite.html">服务网点查询</a></li>
                            <li><a href="https://www.zto.com/express/expressPrice.html">运费时效查询</a></li>
                            <li><a href="https://www.zto.com/express/expressProhibited.html">违禁品查询</a></li>
                            <li><a href="https://kfapi.zto.com/im?channel=official" target="_blank">客服支持</a></li>
                        </ul>
                        <ul>
                            <h3>关于中通</h3>
                            <span></span>
                            <li><a href="https://www.zto.com/companyIntroduce/companyProfile.html">企业概况</a></li>
                            <li><a href="https://www.zto.com/companyIntroduce/corporateCulture.html">企业文化</a></li>

                            <li><a href="https://www.zto.com/companyIntroduce/responsibilityHonor.html">责任与荣誉</a></li>
                            <li><a href="https://www.zto.com/companyIntroduce/newList.html">新闻动态</a></li>
                            <li><a href="https://www.zto.com/companyIntroduce/contactUs.html">联系我们</a></li>
                        </ul>
                        <ul>
                            <h3>加盟合作</h3>
                            <span></span>
                            <li><a href="https://www.zto.com/league/expressOutlets.html">网点加盟</a></li>
                            <li><a href="https://www.zto.com/league/cooperate.html">商家合作</a></li>
                            <li><a href="https://www.zto.com/league/supplier.html">供应商合作</a></li>
                            <li><a href="http://supplier.zt-express.com/" class="menu-item" target="_blank">供应商门户</a></li>
                            <li><a href="https://icloud.zto.com/#/welcome" class="menu-item" target="_blank">短信解决方案</a></li>
                        </ul>
                        <ul>
                            <h3>其他</h3>
                            <span></span>
                            <li><a href="http://hr.zto.com/" target="_blank">人才招聘</a></li>
                            <li><a href="http://zto.investorroom.com/" target="_blank">Investors</a></li>
                            <!-- <li><a href="javascript:viod(0)" target="_blank">英文</a></li> -->
                        </ul>
                    </div>
                    <div class="about-img">
                        <h3>关于我们</h3>
                        <span></span>
                        <ul class="friendLink">
                            <li id="btn_foorterWechat">
                                <a><span class="wechat"></span></a>
                                <div class="img-box wechat-box">
                                    <img src="js_01/wechat.png" class="wechat-img detail-img">
                                </div>
                            </li>
                            <li id="btn_foorterWeibo">
                                <a href="http://weibo.com/zto200258" target="_blank"><span class="weibo"></span></a>
                            </li>
                            <li id="btn_foorterQQ">
                                <a><span class="qq"></span></a>
                                <div class="img-box qq-box">
                                    <img src="js_01/qq.png" class="qq-img detail-img">
                                </div>
                            </li>
                            <li id="btn_foorterAlipay">
                                <a><span class="alipay"></span></a>
                                <div class="img-box alipay-box">
                                    <img src="js_01/alipay-1.png" class="alipay-img detail-img">
                                </div>
                            </li>
                            <li id="btn_footerMinPhone">
                                <a><span class="min-phone"></span></a>
                                <div class="img-box app-box">
                                    <img src="js_01/app.png" class="app-img detail-img">

                                </div>
                            </li>
                            <li>
                                <a href="https://kfapi.zto.com/im?channel=official" target="_blank"><span class="service"></span></a>
                            </li>
                        </ul>
                        <div class="tel-box">
                            <img src="js_01/tel1.png" alt="全国统一客服热线" class="tel">
                            <img src="js_01/phone1.png" alt="全国统一客服热线" class="phone1">
                            <span></span>
                            <img src="js_01/tel2.png" alt="全国统一客服热线" class="tel">
                            <img src="js_01/phone2.png" alt="全国统一客服热线" class="phone2">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="footer">
            <div class="footer-main">
                <div class="footer-left">
                    <div class="logo"></div>
                </div>
                <div class="footer-middle">
                    <ul>
                        <li><a href="https://www.zto.com/service/service.html" target="_blank" class="service-nav">快递服务协议</a></li>
                        <li><a href="https://www.zto.com/legal&amp;privacy/privacy.html" target="_blank">隐私政策</a></li>
                        <li><a href="https://www.zto.com/legal&amp;privacy/legal.html" target="_blank">法律声明</a></li>
                        <li><a href="https://sec.zto.com/" target="_blank">安全响应中心</a></li>
                        <li><a href="http://www.spb.gov.cn/" target="_blank">国家邮政局</a></li>
                        <li><a href="http://www.cea.org.cn/" target="_blank" class="express-nav">快递协会</a></li>
                    </ul>
                    <p>
                        总部地址：上海市青浦区华新镇华志路1685号&nbsp;邮政编码：201708
                    </p>
                    <p>简历投递邮箱：<span>zp-hr@zto.com</span></p>
                </div>
                <div class="footer-right">
                    <p style="line-height: 1.5; margin-bottom:6px">
                        已通过ISO27001:2013 信息安全认证<br>
                        中通版权所有&nbsp;中通快递股份有限公司©版权所有&nbsp;<br><a href="http://beian.miit.gov.cn/" target="_blank" class="num">沪ICP备13044869号-2</a>
                    </p>
                    <div class="administration">
                        <div class="industry bg-img-cursor"></div>
                        <div class="credit bg-img-cursor"></div>
                        <div class="sincerity bg-img-cursor"></div>
                        <div class="net bg-img-cursor"></div>

                        <img class="bg-img-cursor" src="js_01/aqkx_83x30.png">
                    </div>
                </div>
            </div>
        </div>
    </div>




    <script src="static/js/bundle.js"></script>
    <script src="static/js/public.js"></script><script type="text/javascript" src="js/skin.js"></script>
    <!-- <script src="./../js/jquery-validate.js"></script> -->
    <script src="static/js/jquery.js"></script>
    <!--<script src="//libs.zto.cn/dynamicdata/allregion.js"></script>-->
    <script async="" src="js/citySet.js"></script>
    <script src="../../../../../Desktop/服务网点%20-%20中通快递_files/api" type="text/javascript"></script><script type="text/javascript" src="../../../../../Desktop/服务网点%20-%20中通快递_files/getscript"></script>
    <!--<script type="text/javascript" src="https://libs.zto.cn/dynamicdata/allregion.js"></script>-->
    <script type="text/javascript" src="../../../../../Desktop/服务网点%20-%20中通快递_files/echarts.js"></script>
    <script async="" type="text/javascript" src="js/china.js"></script>
    <script async="" src="js/expressWebsite.js"></script>
    <script>
        <c:forEach var="list" items="${listparent}">
            $(".${list.branchId}id").click(function () {
                $("#block_address").show();
            })
        </c:forEach>
        $("#queryParcel").click(function (){
            window.location.href="expressCheck.jsp";
        });
        $("#queryPrice").click(function (){
            window.location.href="expressPrice.jsp";
        });
        $("#queryProhibited").click(function (){
            window.location.href="expressProhibited.jsp";
        });
    </script>
    <script async="">
        $(".js-home-page").click(function (){
            window.location.href="http://localhost:8080/zto/index";
        });
        function goDetail(e) {
            $(".nearby-message").removeClass("long");
            $(".nearby-message").height(490);
            $(".nearby-message .message-cont").height(405);
            $(".nearby-message .website-table").width(300);
            $(".nearby-message .website-table.long").css("width", "100%");
            siteDetail($(e).attr('data-code'));
        }

        function siteDetail(code) {
            HrPost("Site_GetDetailByCode", {
                "code": code
            }, function(res) {
                if (res) {
                    $('.d-siteName').html('网点-' + res.result.name);
                    $('.d-siteNameS em').html(res.result.name);
                    $('.d-topCompany em').html(res.result.companyName);
                    $('.d-adress em').html('[' + res.result.province + '-' + res.result.city + '-' + res.result.district + ']' + res.result.address);
                    $('.d-manage em').html(res.result.masterMobile ? res.result.master + '(' + res.result.masterMobile + ')' : res.result.master);
                    $('.d-searchTel').html('<tr><th>网点名称</th><th>查询服务</th><th>业务咨询</th><th>传真</th></tr><tr><td>' + res.result.name + '</td><td>' + res.result.outerPhone + '</td><td>' + res.result.businessPhone + '</td><td>' + res.result.fax + '</td></tr>');
                    $('.d-range em').html(res.result.dispatchRange);
                    $('.d-noRange em').html(res.result.notDispatchRange ? res.result.notDispatchRange : '无');
                    $('.d-business').html('');
                    if (res.result.allowTopayment) {
                        $('.d-business').append('<span class="d-pay">到付业务</span>')
                    }
                    if (res.result.allowAgentMoney) {
                        $('.d-business').append('<span class="d-collect">代收货款</span>')
                    }
                }
            });
            $(".website_detail_popup").show();
        }
    </script>
    <script src="//api.map.baidu.com/api?type=webgl&v=3.0&ak=Ddfdgx7gkEFgfDpRgEtS1nEt36REUqAP"></script>
    <script type="text/javascript">
        var map = new BMapGL.Map('container_01');
        map.centerAndZoom(new BMapGL.Point(113.011392, 28.142072), 17);
        function theLocation(){
            var city = document.getElementById("cityName").value;
            var address_01=$("#site").val();
            var address = address_01+city;
            if(address != ""){
                map.centerAndZoom(address,16);      // 用城市名设置地图中心点
            }
        }
        map.enableScrollWheelZoom(true);
        <c:forEach var="list" items="${coordinateList}">
            $(".${list.branch_id}id").click(function(){
                map.centerAndZoom(new BMapGL.Point(${list.longitude},${list.latitude}),16);
            })
            var point${list.count} =  new BMapGL.Point(${list.longitude},${list.latitude});
            var marker${list.count} = new BMapGL.Marker(point${list.count});
            var label${list.count} = new BMapGL.Label(${list.count});
            label${list.count}.setStyle({
                color: 'white',
                background: 'none',
                border:'none',
                marginLeft:'-5px',
                marginTop:'-22px',
            });
            marker${list.count}.setLabel(label${list.count});
            map.addOverlay(marker${list.count});
            var opts${list.count} = {
                width: 300,
                height: 125,
                title: '中通网点-${list.count}'
            };
            var infoWindow${list.count} = new BMapGL.InfoWindow
            ("<hr/><table style='font-size: 11px'>" +
                "<tr><td align='right'>联系人：</td><td style='color: darkgrey'>${list.compellation}</td></tr>" +
                "<tr><td align='right'>网点电话：</td><td style='color: darkgrey'>${list.branch_phone}</td></tr>" +
                "<tr><td align='right'>地址：</td><td style='color: darkgrey'>${list.branch_address}</td></tr>" +
                "<tr><td></td><td><a href='' style='font-size: 15px'>网点详情</a></td></tr>" +
                "</table>", opts${list.count});
            marker${list.count}.addEventListener('click', function () {
                map.openInfoWindow(infoWindow${list.count}, point${list.count}); // 开启信息窗口
            });
        </c:forEach>
    </script>
    <div style="position: absolute; display: none; left: 0px; top: -1px;" class="tangram-suggestion-main" id="tangram-suggestion--TANGRAM__1m-main" data-guid="TANGRAM__1m"><div id="tangram-suggestion--TANGRAM__1m" class="tangram-suggestion" style="position:relative; top:0px; left:0px"></div></div><div id="hm_t_undefined" class="hm-t-container"><div class="hm-t-feedback-trigger hm-t-unfold-button hm-t-unfold-button-txt" title="开具发票" style="bottom: 2px; font-size: 14px; line-height: 17px; padding-top: 3px; height: 37px;">开具发票</div></div><script type="text/javascript" src="js/xizang.js"></script></body></html>