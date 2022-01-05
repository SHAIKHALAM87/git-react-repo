import React from 'react';
import FakeapiFetch from './Pages/Fakeapifetch';
import { useSelector } from 'react-redux';

function Home (){

	return (
	<div>
		<h1>Welcome to the world of Geeks! </h1>
		{
		 <FakeapiFetch/>
		}
		

	</div>
	)

}

export default Home;
