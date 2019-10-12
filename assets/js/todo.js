$("ul").on("click", "li", function(){          // ul is already loaded,so, on is applied on li through ul
	$(this).toggleClass("completed");          // "this" refers to the selected li

});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){  // "this" refers to span
		$(this).remove();                      // "this" refers to li
	});
	event.stopPropagation();                   // Prevents "Event Bubbling"

});

$("input[type='text']").keypress(function(event){
	if(event.which === 13)					   // 13 = Enter
	{
		var todo = $(this).val();
		$(this).val("");                       // Clears the input
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todo + "</li>");
	}
});

/*$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});*/