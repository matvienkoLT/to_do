window.onload = function(){

	var coo = document.cookie.split(';');

	if (coo[0]) {
		var ft_list = document.getElementById('ft_list');
		var arr;
		var i = coo.length - 1;
		for (i; i >= 0; i--) {
			arr = coo[i].split('=');
			ft_list.innerHTML += '<div name="' + arr[0] + '" class="to_do" onclick="del_todo(this)">' + decodeURIComponent(arr[1]) + '</div>';
		}
	}


document.getElementById('new_todo').onclick = function(){

	var new_str = prompt('Type new TODO', '');
	 if (!new_str)
		return ;
	var ft_list = document.getElementById('ft_list');
	var tt = document.getElementsByClassName('to_do');

	if (tt){
		var new_todo = document.createElement('div');
		var text_node = document.createTextNode(new_str);
		new_todo.appendChild(text_node);
		new_todo.classList.add('to_do');
		new_todo.setAttribute('onclick', 'del_todo(this)');
		ft_list.insertBefore(new_todo, tt[0]);
	}
	else
	{
			ft_list.innerHTML += '<div class="to_do" onclick="del_todo(this)">' + todo_str + '</div>';
		}
	var d = new Date();
	var a = Math.floor(Math.random() * 1000) + 1;
	d.setTime(d.getTime() + (2 * 24 * 360 * 1000));
	var expires = "expires="+ d.toUTCString();
	var elem = document.getElementById('ft_list').children;
	var data = encodeURIComponent(elem[0].innerHTML);
	document.cookie = new_str + a + "=" + data + ";" + expires + ";path=/";
}
}

function del_todo(prmtr) {
	if (confirm('Are you sure you want to delete this item?')) {
		var task = document.getElementById('ft_list');
		task.removeChild(prmtr);
		var data = encodeURIComponent(prmtr.innerHTML);
		var d = new Date();
		d.setTime(d.getTime() + (-1 * 24 * 360 * 1000));
		var expires = "expires="+ d.toUTCString();
		alert(prmtr.getAttribute("name"));
		document.cookie = prmtr.getAttribute("name").trim() + "=" + data + ";" + expires + ";path=/";
	}
}
