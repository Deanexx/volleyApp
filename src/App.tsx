import './styles/App.scss';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getVotes } from './store/reducers/vote/ActionCreators';
import Header from "./components/header/Header";
import { useEffect } from 'react';

function App() {
	const dispatch = useAppDispatch();
	const voteData = useAppSelector((state) => state.vote);

	useEffect(() => {
		dispatch(getVotes());
	}, ["dispatch"])

	return (
	<div className="App">
			<Header/>
			<div>
				{JSON.stringify(voteData.votes, null, 2)}
			</div>
	</div>
	);
}

export default App;
