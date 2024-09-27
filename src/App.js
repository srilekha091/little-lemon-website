import './App.css';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import MainMenu from './components/MainMenu';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<h1>Little Lemon Website</h1>
			<NavigationBar />
			<Header />
			<MainMenu />
			<Footer />
		</div>
	);
}

export default App;
