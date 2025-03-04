//your JS code here. If required.
function getrandom() {
	return Math.floor(Math.random()*2000)+1000;
}
let ttime=0;
let table=document.getElementById("output");
table.innerHTML = `<tr id="loading-row"><td colspan="2">Loading...</td></tr>`;
let promise1=()=>{
	let time=getrandom();
let	stime=time;
	ttime+=time;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let row=`<tr><td>Promise 1</td><td>${(stime/1000).toFixed(3)}</td></tr>`
			resolve(row);
		},time);
	});
};
	//your JS code here. If required.
let promise2=()=>{
	let time=getrandom();
let	stime=time;
	ttime+=time;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let row=`<tr><td>Promise 2</td><td>${(stime/1000).toFixed(3)}</td></tr>`
			resolve(row);
		},time);
	});
}
//your JS code here. If required.
let promise3=()=>{
	
	let time=getrandom();
let	stime=time;
	ttime+=time;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let row=`<tr><td>Promise 3</td><td>${(stime/1000).toFixed(3)}</td></tr>`
			resolve(row);
		},time)
	});
}
	//your JS code here. If required.
let total=()=>{
	let time=ttime
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let row=`<tr><td style="font-weight:bold">Total</td><td>${(time/1000).toFixed(3)}</td></tr>`
			resolve(row);
		},ttime)
	});
}
	Promise.all([promise1(),promise2(),promise3(),total()]).then
((data)=>{let table=document.getElementById("output");
 table.innerHTML=data;
	 }
	)
	