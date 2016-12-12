$(function() {
	var myscroll=null;
	var url = "../js/booklist.json";
	var setting1 = function(data) {
		var arr = [];
		$.each(data,function() {
			if(this.type == "recomend") {
				var hotData = this;
				arr.push(hotData);
			}
		});
		var html = template("book", {list:arr} );
		$(".booklist1").html(html);
	}
	var setting2 = function(data) {
		var arr = [];
		$.each(data,function() {
			if(this.type == "free") {
				var hotData = this;
				arr.push(hotData);
			}
		});
		var html = template("book", {list:arr} );
		$(".booklist2").html(html);
	}
	
	var setting3 = function(data) {
		var arr = [];
		$.each(data,function() {
			if(this.type == "new") {
				var hotData = this;
				arr.push(hotData);
			}
		});
		var html = template("book", {list:arr} );
		$(".booklist3").html(html);
	}
	var setting4 = function(data) {
		var arr = [];
		$.each(data,function() {
			if(this.type == "bargain") {
				var hotData = this;
				arr.push(hotData);
			}
		});
		var html = template("book", {list:arr} );
		$(".booklist4").html(html);
	}
	
	$.get(url,setting1);
	$.get(url,setting2);
	$.get(url,setting3);  
	$.get(url,setting4);
	
	myscroll=new IScroll("#wraper",{
		click:true
	});
});

	
	











