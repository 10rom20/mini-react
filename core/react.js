function createVdom(type,props,children){
	return {
		type,
		props,
		children:children,
	}
}
function render(vDom,container){
	// render函数分三步：1.创建元素2.添加props3.append
	let inDom = vDom?.type=="text"||vDom.text ? document.createTextNode(vDom.text) : document.querySelector(vDom.type);
	console.log(inDom);
	vDom?.props && Object.keys(vDom.props).forEach(key => {
		inDom[key]	= vDom.props[key];
	});
	vDom?.children && vDom.children.forEach(child => render(child,inDom))
	container.append(inDom)
}

