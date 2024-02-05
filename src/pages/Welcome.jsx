import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import "bootstrap/dist/css/bootstrap.min.css";


const Welcome = () => {
	const navigate = useNavigate();

	const startGame = () => {
		navigate("/quizgame");
	};
	return (
		<>
			<div className="row">
				<div className="col-lg-5">
					<img src="/mygreenface.png" alt="greenface" loading="lazy" />
				</div>
				<div className="col-lg-7">
					<Box bgcolor="white" boxShadow={3} m={4} p={10} borderRadius={16}>
						<div>
							<h1>Welcome</h1>
							<p>GreenGreenGame</p>
							<Button aria-label="" onClick={startGame}>
								Start Game
							</Button>
						</div>
					</Box>
				</div>
			</div>
		</>
	);
};

export default Welcome;
