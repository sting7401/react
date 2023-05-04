import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import './index.css';

function App() {
	return (
		<div className="App w-full h-full min-h-screen">
			<Canvas>
				<Experience />
			</Canvas>
		</div>
	);
}

export default App;
