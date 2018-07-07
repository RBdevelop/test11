
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");

	
});
 
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-check'></i></span> " + todoText + "</li>")
	}
});


// $("input").keyup(function (e) {
//     if (e.keyCode === 13) {
//       	var text = $("#jello").val();
//       	 $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + text + "</li>");
//       	 $(this).val("")
//     };
//   });

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});