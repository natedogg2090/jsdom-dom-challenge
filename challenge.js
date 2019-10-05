document.addEventListener("DOMContentLoaded", () => {
	// let counter = document.getElementById("counter").innerText
	let count = 0;

	const pause = document.getElementById("pause");
	const plus = document.getElementById("plus");
	const minus = document.getElementById("minus");
	const heart = document.getElementById("heart");
	const likesUl = document.getElementById("likes");

	function myCounter() {
		++count;
		document.getElementById("counter").innerText = count.toString();
	}

	function myTimer() {
		timer = setInterval(myCounter, 1000);
	};

	myTimer();

	plus.addEventListener("click", function() {
		myCounter();
	});

	minus.addEventListener("click", function() {
		--count;
		document.getElementById("counter").innerText = count.toString();
	});

	pause.addEventListener("click", function () {
		if (pause.innerText === "pause") {
			clearInterval(timer);
			pause.innerText = "resume";
			plus.disabled = true;
			minus.disabled = true;
			heart.disabled = true;
		} else if (pause.innerText === "resume") {
			myTimer();
			pause.innerText = "pause";
			plus.disabled = false;
			minus.disabled = false;
			heart.disabled = false;
		}
	});

	heart.addEventListener("click", function() {
		// 2 has been liked 1 time
		let node = document.createElement("LI");
		let textnode = document.createTextNode(`${count.toString()} has been liked 1 time`);
		node.appendChild(textnode);

		likesUl.appendChild(node);

	});

})