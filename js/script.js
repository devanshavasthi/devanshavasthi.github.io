function home(){
	let x=document.getElementById('about');
		if(x.style.display!="none")
			x.style.display="none";
	let y=document.getElementById('contact');
		if(y.style.display!="none")
			y.style.display="none";
	let z=document.getElementById('home');
		if(z.style.display=="none")
			z.style.display="block";
	
}

function about(){
	let x=document.getElementById('home');
		if(x.style.display!="none")
			x.style.display="none";
	let y=document.getElementById('contact');
		if(y.style.display!="none")
			y.style.display="none";
	let z=document.getElementById('about');
		if(z.style.display=="none")
			z.style.display="block";
	
}

function contact(){
	let x=document.getElementById('home');
		if(x.style.display!="none")
			x.style.display="none";
	let y=document.getElementById('about');
		if(y.style.display!="none")
			y.style.display="none";
	let z=document.getElementById('contact');
		if(z.style.display=="none")
			z.style.display="block";
	
}

function check(i) {
	  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  	return i;
}

function startTime() {
 	 const x = new Date();
 	 var x1=x.getDate()+ "/" + (x.getMonth() + 1) + "/" + x.getFullYear(); 
 	 let h = x.getHours();
 	 let m = x.getMinutes();
 	 let s = x.getSeconds();
 	 m = check(m);
 	 s = check(s);
 	 document.getElementById('clocktime').innerHTML =x1 + "-" + h + ":" + m + ":" + s;
 	 setTimeout(startTime, 1000);
}

