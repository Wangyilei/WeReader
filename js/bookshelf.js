$(function() {
	var url="../js/booklist.json";

	var setting = {
		dataType:"json",
		success : function(data) {
		console.log(data);
		
			var arr=localStorage.getItem("goodlist");
			var arrSign = [];
			$.each(data,function() {
				if(arr.indexOf(this.id)>-1){
					arrSign.push(this);
				}
			});
			console.log(arrSign);
			
			
			console.log({list:arrSign});
			var html=template("tp",{list:arrSign})
			
			$("section").html(html);
			
		},
		error:function() {
			alert("获取失败！");
		}
	}
	$.ajax(url,setting);
})




