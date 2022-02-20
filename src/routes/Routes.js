import React from 'react';
import { Routes as PathWays, Route } from 'react-router-dom';
// import ProtectedRoute from './ProtectedRoute';

// pages
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const Routes = () => {
	return (
		<>
			<PathWays>
				<Route path="/" element={<Home />} />
				{/* <Route path="/private" element={<ProtectedRoute isAuth={true} redirectTo="/login" />}>
					<Route path="" element={<Home />} />
				</Route> */}
				<Route path="*" element={<NotFound />} />
			</PathWays>
		</>
	);
};
export default Routes;
