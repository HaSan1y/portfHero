function PageTransitions() {
	const sections = document.querySelectorAll(".section");
	//const sectBtns = document.querySelectorAll(".controlls");
	const sectBtn = document.querySelectorAll(".control");
	const allsections = document.querySelector(".main-content");
	for (let i = 0; i < sectBtn.length; i++) {
		sectBtn[i].addEventListener("click", function () {
			let currentBtn = document.querySelector(".active-btn");
			currentBtn.className = currentBtn.className.replace("active-btn", "");
			this.className += " active-btn";
		});
	}

	allsections.addEventListener("click", (e) => {
		const idnodelist = e.target.dataset.id;
		if (idnodelist) {
			sectBtn.forEach((btn) => {
				btn.classList.remove("active");
			});
			e.target.classList.add("active");

			sections.forEach((section) => {
				section.classList.remove("active");
			});
			const element = document.getElementById(idnodelist);
			element.classList.add("active");
		}
	});

	const themeBtn = document.querySelector(".theme-btn");
	themeBtn.addEventListener("click", () => {
		document.body.classList.toggle("light-mode");
	});
}

PageTransitions();

// pdf link csp secure
document.getElementById("pdfLink").addEventListener("click", function (e) {
	e.preventDefault();
	window.open("./online2023.pdf");
});

//////////////////////////////////////// animation for about section
const scrollers = document.querySelectorAll(".asdf");

if (!window.matchMedia("(prefers-color-scheme: reduce)").matches) {
	addAnimation();
}

function addAnimation() {
	scrollers.forEach((scrollerElement) => {
		scrollerElement.classList.add("animated");
		const itemsToScroll = Array.from(scrollerElement.children);

		itemsToScroll.forEach((item) => {
			const dublicatedItem = item.cloneNode(true);
			dublicatedItem.setAttribute("aria-hidden", "true");
			scrollerElement.appendChild(dublicatedItem);
		});
	});
}
