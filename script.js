function getrandom() {
  return Math.floor(Math.random() * 2000) + 1000;
}

let table = document.getElementById("output");
table.innerHTML = `<tr id="loading"><td colspan="2">Loading...</td></tr>`;

let promise1 = () => {
  let time = getrandom();
  return new Promise((resolve) => {
    setTimeout(() => {
      let row = `<tr><td>Promise 1</td><td>${(time / 1000).toFixed(3)}</td></tr>`;
      resolve({ row, time });
    }, time);
  });
};

let promise2 = () => {
  let time = getrandom();
  return new Promise((resolve) => {
    setTimeout(() => {
      let row = `<tr><td>Promise 2</td><td>${(time / 1000).toFixed(3)}</td></tr>`;
      resolve({ row, time });
    }, time);
  });
};

let promise3 = () => {
  let time = getrandom();
  return new Promise((resolve) => {
    setTimeout(() => {
      let row = `<tr><td>Promise 3</td><td>${(time / 1000).toFixed(3)}</td></tr>`;
      resolve({ row, time });
    }, time);
  });
};

Promise.all([promise1(), promise2(), promise3()]).then((data) => {
  let totalTime = data.reduce((sum, item) => sum + item.time, 0); // Sum all times

  let totalRow = `<tr><td style="font-weight:bold">Total</td><td>${(totalTime / 1000).toFixed(3)}</td></tr>`;

  let table = document.getElementById("output");
  table.innerHTML = data.map((item) => item.row).join("") + totalRow;
});
