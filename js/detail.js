$(function() {
	var url = "../js/booklist.json";
	var ip = window.location.href;
	var num = ip.substring(ip.length-1);
//	console.log(num);
	var setting = function(data){
			
		$.each(data,function() {
			if(this.id == num) {
				var rightdata = this;
				console.log(rightdata);
				var html = template("tp", rightdata );
				$("body").html(html);
			}
		});
		
		/*start to add loacalstoarge*/
		function addGood(o) {
			var d = localStorage.getItem(Static.good);
			d ? (d = JSON.parse(d), d.push(o)) : d = [o], localStorage.setItem(Static.good, JSON.stringify(d))
		}
		var Static = {
				good: "goodlist"
			};
	    $("body").on("click",".add",function() {
	    	var dataType = this.getAttribute("data-id")
	    	addGood(dataType)
	    	console.log(dataType);
	    })
		/*end to add loacalstoarge*/
	}
	$.get(url,setting);
	
})
