const reactDom = {
	createRoot(container){
		return {
			render(App){
				render(App,container)
			}	
		}
	}
}
const App = createVdom("div",{id:"app"},[{text: "app5"}]) 
reactDom.createRoot(document.querySelector("body")).render(App)