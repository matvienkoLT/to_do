
function delete_todo(param) {
	if (confirm('Do you sure to delete this?')) {
		$(param).remove();
		setCookie($(param).attr("name"), encodeURIComponent($(param).html()), -1);
	}
}

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

$('document').ready(function() {
	var coo = document.cookie.split(';');
	
	if (coo[0]) {
		var arr;
		var i = coo.length - 1;
		for (i; i >= 0; i--) {
			var arr = coo[i].split('=');
			$('#ft_list').append('<div name="' + arr[0] + '" class="to_do" onclick="delete_todo(this)">' + decodeURIComponent(arr[1]) + '</div>');
		}
	}

	$('#new_todo').click(function() {
		var todo_str = prompt('Type some task!', '');
		if (todo_str == null || todo_str == false) {
			return ;
		}

		$('#ft_list').prepend('<div class="to_do" onclick="delete_todo(this)">' + todo_str + '</div>');

		setCookie(getRndInteger(0, 100000), encodeURIComponent(todo_str), 2);
	});
});