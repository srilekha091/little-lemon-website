import './App.css';
import Homepage from './components/Homepage';
import NavigationBar from './components/NavigationBar';
import MainMenu from './components/MainMenu';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<NavigationBar />
			<Homepage />
			<MainMenu />
			<Footer />
		</div>
	);
}

export default App;
