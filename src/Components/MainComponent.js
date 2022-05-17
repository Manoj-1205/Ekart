import Header from "./Header";
import Home from "./Home";
import {Route,Routes} from 'react-router-dom';
import Kart from "./kart";

function Main() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Kart />} />
			</Routes>
			
		</>
		);

}

export default Main;