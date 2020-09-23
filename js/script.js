$(document).ready(function(){
	
	loadDoc("slider.json", openJson);
	let slid, txt;
	let t;
	let imgs = [];
	let cardTxt = [];
	let textCard = document.getElementById("text-card");
	let imgTags;
	let inc = 0;

	function createList(){
		for ( i=1; i <= imgs.length; i++ ){
			$("#tumbs").append('<div>'+ i +'</div>');
		}
	}
	//console.log(imgs)
	//console.log(imgsTags)
	
	function loadDoc(url, cFunction) {
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				cFunction(this);
			}
		};
		xhttp.open("GET", url, true);
		xhttp.send();
	}
	
	function openJson(xml) {
		slid = JSON.parse(xml.responseText).slider; //array
		
		for (i = 0; i <slid.length; i++) {
			txt = slid[i];
			imgs[i] = txt.image;
			cardTxt[i] = txt.text;
		}
		createList();
		start();
	}
	
	function show(){
		if( inc >= imgs.length ) inc = 0;
		if( inc < 0 ) inc = imgs.length - 1;
		$("#slider")
			.css("background","url('img/"+ imgs[inc] +" ') center/cover no-repeat")
			.fadeOut(0)
			.fadeIn("slow")
			content();
			
	}
	
	function content() {
		let kod = "";
		kod += '<h1>' + cardTxt[inc].h1 + '</h1>';
		kod += '<p>' + cardTxt[inc].p + '</p>';
		//console.log(cardTxt[0].h1);
		textCard.innerHTML = kod;
		//console.log(textCard)
	}
	
	function start() {
		stop();
		show();
		t = setInterval( ()=>{
			inc ++;
			show();
		},3000)
	}
	
	function stop(){ clearInterval(t) }
})