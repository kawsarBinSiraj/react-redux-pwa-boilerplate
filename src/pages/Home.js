import React from 'react';
import Greetings from '../components/Greetings/Greetings';
import ApplicationHelmet from './../components/ApplicationHelmet/ApplicationHelmet';

const Home = () => {
	return (
		<>
			<ApplicationHelmet title="React+Redux+Pwa Boilerplate" description="" />
			<Greetings />
		</>
	);
};

export default Home;
