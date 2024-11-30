import { CustomButton } from './Components/CustomButton';
import './App.css';
function App() {
	return (
		<>
			<div className="app-container">
				<CustomButton text={'warn'} warnMessage={true} hint={false} />
				<CustomButton text={'hint'} warnMessage={false} hint={true} />
				<CustomButton text={'normal text'} warnMessage={false} hint={false} />
			</div>
		</>
	);
}

export default App;
