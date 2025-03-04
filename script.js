//your JS code here. If required.
let promise1=()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let row=`<tr><td>Promise 1</td><td>2</td></tr>`
			resolve(row);
		},2000);
	});
};
	//your JS code here. If required.
let promise2=()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let row=`<tr><td>Promise 2</td><td>1</td></tr>`
			resolve(row);
		},2000);
	});
}
//your JS code here. If required.
let promise3=()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let row=`<tr><td>Promise 3</td><td>3</td></tr>`
			resolve(row);
		},2000)
	});
}
	//your JS code here. If required.
let total=()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let row=`<tr><td style="font-weight:bold">Total</td><td>3.006</td></tr>`
			resolve(row);
		},2000)
	});
}
	Promise.all([promise1(),promise2(),promise3(),total()]).then
((data)=>{let table=document.getElementById("output");
 table.innerHTML=data;
	 }
	)
	