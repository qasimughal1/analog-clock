




function update_needles() {

	const now = new Date();
	var secondHand = document.querySelector('.second-hand');
	var minuteHand = document.querySelector('.minute-hand');
	var hourHand = document.querySelector('.hour-hand');

	const seconds = now.getSeconds();
	const secondsRotation = ((seconds / 60) * 360);
	secondHand.style.transform = `rotate(${secondsRotation}deg)`;

	
	const minutes = now.getMinutes();
	const minutesRotation = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
	minuteHand.style.transform = `rotate(${minutesRotation}deg)`;

	const hours = now.getHours();
	const hoursRotation = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
	hourHand.style.transform = `rotate(${hoursRotation}deg)`;

}

function run() {
	setInterval(update_needles, 1000);
}
