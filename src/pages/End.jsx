import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RedoIcon from "@mui/icons-material/Redo";
import { useState, useEffect } from "react";
import Confetti from "react-dom-confetti";

const End = () => {
	const navigate = useNavigate();
	const StartAgain = () => {
		navigate("/");
	};

	const [confetti, setConfetti] = useState(false);

	useEffect(() => {
		setConfetti(true);
	}, []);

	const config = {
		angle: 270,
		spread: 360,
		startVelocity: 50,
		elementCount: 200,
		dragFriction: 0.12,
		duration: 7000,
		stagger: 1,
		width: "20px",
		height: "50px",
		perspective: "500px",
		colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
	};

	return (
		<div
			className="text-center"
			style={{ position: "relative", height: "100vh", overflow: "hidden" }}
		>
			<Confetti
				active={confetti}
				config={config}
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
					pointerEvents: "none",
				}}
			/>
			<Box
				bgcolor="white"
				boxShadow={3}
				m={4}
				p={7}
				borderRadius={16}
				style={{
					fontFamily: "Roboto",
					color: "black",
					fontSize: "20px",
					textAlign: "center",
				}}
			>
				<h1>Bye Bye</h1>
				<h2>Please keep the environment safe!</h2>
				<img
					className="img-fluid"
					src="/estherbyebye.png"
					alt="happy face"
					style={{ maxHeight: "400px" }}
				/>
				<br></br>
				<button onClick={StartAgain} style={{ minWidth: "400px" }}>
					Play Again <RedoIcon />
				</button>
			</Box>
		</div>
	);
};

export default End;
