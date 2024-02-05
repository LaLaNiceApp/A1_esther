import "./App.css";
import { Routes, Route } from "react-router-dom";
import QuizGame from "./pages/QuizGame";
import Welcome from "./pages/Welcome";
import Explain from "./pages/Explain";
import QuizGameTwo from "./pages/QuizGameTwo";
import QuizGameThree from "./pages/QuizGameThree";
import End from "./pages/End";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/quizgame" element={<QuizGame />} />
				<Route path="/explainGameOne" element={<Explain />} />
				<Route path="/quizgameTwo" element={<QuizGameTwo />} />
				<Route path="/quizgameThree" element={<QuizGameThree />} />
				<Route path="/byebye" element={<End />} />
			</Routes>
		</>
	);
}

export default App;
