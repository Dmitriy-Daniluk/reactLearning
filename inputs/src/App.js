import classes from "./App.module.css"; 
import Inputs from "./components/Inputs"; 

function App() {
	return (
		<div class={classes.app}>
			<h2 class={classes.title}>CSS Module Inputs</h2>
			<div class={classes.wrapper}>
				<Inputs />
			</div>
		</div>
	);
}
export default App;
