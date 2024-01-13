// let myDiv = document.querySelector('div');
// myDiv.id = "root";
// myDiv.innerHTML = "app";
// let textNode = document.createTextNode('app1');
// myDiv.append(textNode);
// const vDom = {
// 	type: "div",
// 	props: {
// 		id: "root"
// 	},
// 	children:[{text: "app2"}]
// }
// var myDiv = document.querySelector(vDom.type);
// myDiv.id = vDom.props.id;
// let textNode = document.createTextNode(vDom.children.text);
// myDiv.append(textNode);

//动态渲染到页面
// function create(vDom){
// 	var myDiv = document.querySelector(vDom.type);
// 	myDiv.id = vDom.props.id;
// 	let textNode = document.createTextNode(vDom.children[0].text);
// 	myDiv.append(textNode);
// }
// create(vDom)

// 动态创建虚拟节点
// function createVdom(type,props,children){
// 	return {
// 		type,
// 		props,
// 		children:children,
// 	}
// }
let vDom1 = createVdom("div",{id:"app"},[{text: "app4"}])
// create(vDom1)

// 优化render函数
// function render(vDom,container){
// 	// render函数分三步：1.创建元素2.添加props3.append
// 	let inDom = vDom?.type=="text"||vDom.text ? document.createTextNode(vDom.text) : document.querySelector(vDom.type);
// 	console.log(inDom);
// 	vDom?.props && Object.keys(vDom.props).forEach(key => {
// 		inDom[key]	= vDom.props[key];
// 	});
// 	vDom?.children && vDom.children.forEach(child => render(child,inDom))
// 	container.append(inDom)
// }
// render(vDom1,document.querySelector("body"));
// const reactDom = {
// 	createRoot(container){
// 		return {
// 			render(App){
// 				render(App,container)
// 			}	
// 		}
// 	}
// }
// const App = createVdom("div",{id:"app"},[{text: "app5"}]) 
// reactDom.createRoot(document.querySelector("body")).render(App)





