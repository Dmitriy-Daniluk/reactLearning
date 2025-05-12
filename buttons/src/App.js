import classes from "./App.module.css";
import Buttons from "./components/Buttons";

function App() {
	return (
		<div class={classes.app}>
			<h2 class={classes.title}>CSS Module Buttons</h2>
			<div class={classes.wrapper}>
				<Buttons />
			</div>
		</div>
	);
}
export default App;