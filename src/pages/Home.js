import React from 'react';
import Greetings from '../components/Greetings/Greetings';
import ApplicationHelmet from './../components/ApplicationHelmet/ApplicationHelmet';

const Home = () => {
	return (
		<>
			<ApplicationHelmet title="React Boilerplate" description="Description" />
			<Greetings />
		</>
	);
};

export default Home;
