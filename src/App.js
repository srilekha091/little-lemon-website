import Homepage from './components/Homepage';
import NavigationBar from './components/NavigationBar';
import MainMenu from './components/MainMenu';
import Footer from './components/Footer';
import './App.css';
import ToDo from './components/ToDo';

function App() {
	return (
		<div className='App'>
			{/* <NavigationBar />
			<Homepage />
			<MainMenu />
			<Footer /> */}
			<ToDo />
		</div>
	);
}

export default App;
