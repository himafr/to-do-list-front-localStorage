var list = [
    { name: "hema", date: "10/20/2024" },
    ];

  let hond = JSON.parse(localStorage.getItem("tasks"));
  list = hond ?? [];
  function getThem() {

    document.getElementById("section").innerHTML = "";

    let index = 0;
    for (var element of list) {
      var zz = `
      <div class="card">
      <div class="container">
        <div class="right">
          <div class="text-wrap">
            <p class="text-content">
            ${element.name}
            </p>
            <div class="button-wrap">
              <p class="time">${element.date}</p>
              <button class="primary-cta" ="edit(${index})">View file</button>
              <button class="secondary-cta" onclick="dele(${index})">Mark as read</button>
            </div>
          </div>
        </div>
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
    let date =
      dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
    list.push({
      name: name,
      date: date,
    });
    setTask();
    getThem();
  });

  function dele(index) {
    let as = confirm("are you sure you wanna delete :");
    if (as) {
      list.splice(index,1);
      getThem();
    }
  }
  function edit(index) {
    console.log(index)
     document.getElementById("ehold").style.display="block";
     
     document.getElementById("back").addEventListener("click", () => {
     document.getElementById("ehold").style.display="none";
  })
     document.getElementById("eadd").addEventListener("click", () => {
       let ename = document.getElementById("ename").value;
       let edash = document.getElementById("edash").value;
       let as=list[index]
       as.name=ename
       as.desc=edash
       // setTask();
       getThem();
       document.getElementById("ehold").style.display="none";
});
}
  
  function setTask() {
    let str = JSON.stringify(list);
    localStorage.setItem("tasks", str);
  }