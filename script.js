//your JS code here. If required.
function getrandom() {
	return Math.floor(Math.random()*2000)+1000;
}
let ttime=0;
let table=document.getElementById("output");
table.innerHTML = `<tr id="loading-row"><td colspan="2">Loading...</td></tr>`;
let promise1 = () => {
	let time = getrandom();
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(time);
		}, time);
	});
};

let promise2 = () => {
	let time = getrandom();
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(time);
		}, time);
	});
};

let promise3 = () => {
	let time = getrandom();
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(time);
		}, time);
	});
};
	//your JS code here. If required.
Promise.all([promise1(), promise2(), promise3()]).then((times) => {
	let total = Math.max(...times);
	let table = document.getElementById("output");
	table.innerHTML = `
		<tr><td>Promise 1</td><td>${(times[0]/1000).toFixed(3)}</td></tr>
		<tr><td>Promise 2</td><td>${(times[1]/1000).toFixed(3)}</td></tr>
		<tr><td>Promise 3</td><td>${(times[2]/1000).toFixed(3)}</td></tr>
		<tr><td style="font-weight:bold">Total</td><td>${(total/1000).toFixed(3)}</td></tr>
	`;
});