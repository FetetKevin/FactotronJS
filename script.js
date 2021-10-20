let factArea = document.getElementById("factArea");
let element = document.getElementById("factZone");


function userFact() {
  let userEntry = factArea.value;
  let userRadio = document.querySelector('input[name="options"]:checked')?.value;
  console.log(userEntry);
  console.log(userRadio);
}

function addNodeFact() {
  let userEntry = factArea.value;
  let userRadio = document.querySelector('input[name="options"]:checked')?.value;

  let node = document.createElement("h4");
  let textnode = document.createTextNode('"'+ userEntry +'"');
  node.appendChild(textnode);
  element.appendChild(node);

  let node2 = document.createElement("p");
  let textnode2 = document.createTextNode('Cette fact est ' + userRadio + ' !');

  node2.appendChild(textnode2);
  element.appendChild(node2);

  let node3 = document.createElement("hr");

  element.appendChild(node3);
}

















// let element = document.getElementById('list');
// function addLi() {
//     let node = document.createElement("h1");
//     let textnode = document.createTextNode("blablabla");
//     node.appendChild(textnode);
//     element.appendChild(node);
// }