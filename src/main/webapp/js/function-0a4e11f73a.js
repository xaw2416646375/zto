function ztoAlert(s, o) {
	o = '<div class="zto_alert"><span class="zto_alert_close"></span><h2>' + s + "</h2><p>" + o + '</p><em class="zto_alert_confirm">确定</em></div>';
	$("body").append(o)
}

function error_show(s) {
	var o = "";
	o += '<div class="error">' + s + "</div>", $(".message-box-dialog").empty().append(o), $(".message-box-dialog").addClass("show"), setTimeout(function() {
		$(".message-box-dialog").removeClass("show")
	}, 2500)
}

function success_show(s) {
	var o = "";
	o += '<div class="success">' + s + "</div>", $(".message-box-dialog").empty().append(o), $(".message-box-dialog").addClass("show"), setTimeout(function() {
		$(".message-box-dialog").removeClass("show")
	}, 2500)
}
$(document).on("click", ".zto_alert_close, .zto_alert_confirm", function() {
	$(".zto_alert").remove()
});