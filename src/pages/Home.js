import React from 'react';
import ApplicationHelmet from './../components/ApplicationHelmet/ApplicationHelmet';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlinePlus } from 'react-icons/ai';
import rectLogo from '../assets/img/react.svg';
import reduxLogo from '../assets/img/redux.svg';
import pwaLogo from '../assets/img/pwa.png';

const Home = () => {
	/**
	 * @method {useSelector}
	 * To get the global redux store
	 *
	 * @param  {} => reduxStore
	 */
	const reduxStore = useSelector((reduxStore) => reduxStore);

	/**
	 * @method {useDispatch}
	 * To change the global redux store
	 */
	const dispatch = useDispatch();

	/**
	 * @method onChangeHandler
	 *
	 * @param  {'e'} => event
	 */
	const onChangeHandler = (e) => {
		dispatch({
			type: 'ADD_USER',
			payload: {
				username: e.target.value,
			},
		});
	};

	return (
		<>
			<ApplicationHelmet title="React+Redux+Pwa Boilerplate" />
			<div className="container text-center mt-5">
				<div className="logo d-inline-flex align-items-center">
					<a href="https://reactjs.org/" className="d-inline-block" target="_blank" rel="noreferrer">
						<img src={rectLogo} alt="React Logo" className="d-inline-block" height={100} />
					</a>
					<AiOutlinePlus size="2rem" className="me-3" />
					<a href="https://react-redux.js.org/" className="d-inline-block" target="_blank" rel="noreferrer">
						<img src={reduxLogo} alt="Redux Logo" className="d-inline-block" height={100} />
					</a>
					<AiOutlinePlus size="2rem" className="me-3" />
					<a href="hhttps://web.dev/progressive-web-apps" className="d-inline-block" target="_blank" rel="noreferrer">
						<img src={pwaLogo} alt="Pwa Logo" className="d-inline-block" height={100} />
					</a>
				</div>
				<h2 className="mt-3">welcome to react-redux-pwa-boilerplate</h2>
				<h5 className="my-1">edit me from 'src/pages/Home.js' </h5>
				<h5 className="mt-4">
					<small className="d-block text-primary mb-3">I'm form redux store , to change me you can dispatch via below the input tag </small>
					<label className="d-block col-md-6 col-lg-3 mx-auto" htmlFor="#">
						<input type="text" className="ps-2 form-control" name="username" value={reduxStore.userReducer.user.username} placeholder="write something..." onChange={(e) => onChangeHandler(e)} />
					</label>
					<small>{JSON.stringify(reduxStore)}</small>
				</h5>
			</div>
		</>
	);
};

export default Home;
