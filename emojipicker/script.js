$(document).ready(function() {
	$("#emojionearea1").emojioneArea({
  	
		pickerPosition: "right",
    tonesStyle: "bullet",
		events: {
         	keyup: function (editor, event) {d
           		console.log(editor.html());
           		console.log(this.getText());
        	}
    	}
	});
  
     $('#divOutside').click(function () {
                $('.emojionearea-button').click()
            })
            
            
});

$('#lala').click(function () {
alert($("#emojionearea1").val());
 $("#nnnnn").append($("#emojionearea1").val());
})