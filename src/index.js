let list = [{ name: "hema", date: "10/20/2024" }];
let myArray = JSON.parse(localStorage.getItem("tasks"));
list = myArray ?? [];
function getThem() {
  document.getElementById("section").innerHTML = "";

  let index = 0;
  for (var element of list) {
    var zz = `
      <div class="card" >
      <div class="container">
        <div class="right">
          <div class="text-wrap">
            <p class="text-content">
            ${element.name}
            </p>
            </div>
            </div>
            </div>
            <div class="button-wrap" dir="rtl">
            <p class="time">${element.date}</p>
            <button class="primary-cta" onclick="dele(${index})">Delete note</button>
            <button class="secondary-cta" style=" color: rgb(102, 102, 102);" id="card${index}" onclick="done(${index})">Mark as done</button>
            </div>
    </div>
  `;
    index++;
    document.getElementById("section").innerHTML += zz;
  }
}
getThem();

document.getElementById("add").addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let dt = new Date();
  let date = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
  list.push({
    name: name,
    date: date,
  });
  setTask();
  getThem();
});

function done(index) {
  let button = document.getElementById("card" + index);

  console.log(button.style.color);
  console.log(button.style.color === "rgb(102, 102, 102)");
  if (button.style.color == "rgb(102, 102, 102)") {
    button.style.color = "green";
    button.innerHTML = "Mark as undone";
  } else {
    button.style.color = "#666";
    button.innerHTML = "Mark as done";
  }
}
function dele(index) {
  let as = confirm("are you sure you wanna delete :");
  if (as) {
    list.splice(index, 1);
    setTask();
    getThem();
  }
}

function setTask() {
  let str = JSON.stringify(list);
  localStorage.setItem("tasks", str);
}
