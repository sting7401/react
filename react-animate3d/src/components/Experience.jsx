import { OrbitControls } from '@react-three/drei';
import React from 'react';

const Experience = () => {
	return (
		<>
			<OrbitControls />
			<mesh>
				<boxBufferGeometry />
				<meshNormalMaterial />
			</mesh>
		</>
	);
};

export default Experience;
