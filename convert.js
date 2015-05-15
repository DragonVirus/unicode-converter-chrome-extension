chrome.contextMenus.create({
	"title" : "Convert to Unicode",
	"contexts": ["page", "selection"],
	"onclick" : function(e) {
		var text = e.selectionText;
		var url = "http://mmconverter.hexcores.com/api/v1/zg2uni";

		var data = new FormData();

		data.append('q', text);

		var request = new XMLHttpRequest();
		request.onreadystatechange = function () {
			if(request.readyState == 4 && request.status == 200) {
				var response = JSON.parse(request.responseText);
				alert(response.convertedText);
			}
		}
		request.open("POST", url, true);
		request.send(data);
	}
});