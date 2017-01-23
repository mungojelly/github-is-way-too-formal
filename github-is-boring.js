backgroundColor = "#330033";

resize_canvas = function () {
    canvas = document.getElementById("boring");
    ctx = canvas.getContext("2d");
    if (canvas.width  < window.innerWidth) {
	canvas.width  = window.innerWidth;
    }
    if (canvas.width  > window.innerWidth) {
	canvas.width  = window.innerWidth;
    }
    if (canvas.height < window.innerHeight) {
	canvas.height = window.innerHeight;
    }
    if (canvas.height > window.innerHeight) {
	canvas.height = window.innerHeight;
    }
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

github = function() {
    canvas = document.getElementById("boring");
    ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillStyle = "#F030A0";
    ctx.fillText("Github",
		   Math.random() * canvas.width,
		   Math.random() * canvas.height);
    setTimeout(function() { is() }, 1000);
}

is = function() {
    canvas = document.getElementById("boring");
    ctx = canvas.getContext("2d");
    ctx.font = "20px Arial";
    ctx.fillStyle = "#D030A0";
    ctx.fillText("is",
		   Math.random() * canvas.width,
		   Math.random() * canvas.height);
    setTimeout(function() { boring() }, 800);
}

boring = function() {
    canvas = document.getElementById("boring");
    ctx = canvas.getContext("2d");
    ctx.font = "40px Arial";
    ctx.fillStyle = "#FF60A0";
    ctx.fillText("BORING",
		   Math.random() * canvas.width,
		   Math.random() * canvas.height);
    setTimeout(function() { github() }, 2500);
}


resize_canvas()
window.addEventListener("resize", resize_canvas)
github()
