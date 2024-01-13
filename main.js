// let myDiv = document.querySelector('div');
// myDiv.id = "root";
// myDiv.innerHTML = "app";
// let textNode = document.createTextNode('app1');
// myDiv.append(textNode);
const vDom = {
	type: "div",
	props: {
		id: "root"
	},
	children:{
		text: "app1"
	},
}
var myDiv = document.querySelector(vDom.type);
myDiv.id = vDom.props.id;
let textNode = document.createTextNode(vDom.children.text);
myDiv.append(textNode);



