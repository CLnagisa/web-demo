(function($) {
	$("div#like").each(function() {
		$(this).click(function() {
			console.log($("#body-left").height());
			console.log($("#body-right").height());
			if($(this).attr("class") == "state-ico state-ico-active") {
				$(this).removeClass("state-ico-active");
			} else {
				$(this).addClass("state-ico-active");
			}
		});
	});

	$(window).bind("scroll", function() {
		var aa = $(window).height() + $(document).scrollTop() - $(document).height();
		if(aa > -10) {
			$.aa();
			$.aa();
			$.aa();
			$.aa();
		}
	})

})(jQuery);

$.extend({
	'aa': function() {
		var aa = $("#body-left").height();
		var bb = $("#body-right").height();
		var left = '<div class="body-left"><div class="top-image"><a href="#"><img src="images/5.jpg" alt=""></a></div><div class="bottom-state"><div class="bottom-l"><img src="images/2.jpg" alt=""></div><div class="bottom-r"><div class="state-ico" id="like"></div><div class="count">123456</div></div></div></div>';
		var right = '<div class="body-right"><div class="top-image"><a href="#"><img src="images/5.jpg" alt=""></a></div><div class="bottom-state"><div class="bottom-l"><img src="images/2.jpg" alt=""></div><div class="bottom-r"><div class="state-ico" id="like"></div><div class="count">123456</div></div></div></div>';
		if(aa > bb) {
			$("#body-right").children().last().after(right);
		} else {
			$("#body-left").children().last().after(left);
		}
	}
});




