const api_url = "https://jsonplaceholder.typicode.com/posts";
async function getData() {
  const res = await fetch(api_url);
  var data = await res.json();
  console.log(data);
  if (res) {
    hideloader();
  }
  show(data);
}

function hideloader() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("btn").style.display = "none";
}

function show(data) {
  let tab = `The DATa has ARRIved :3`;

  for (let d of data) {
    tab += `<ul>
        <li>Title = ${d.title}</li>
        <li> Body = ${d.body}</li>
        </ul>`;
  }

  document.getElementById("parag").innerHTML = tab;
}
