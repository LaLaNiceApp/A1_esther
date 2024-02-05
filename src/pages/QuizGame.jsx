import "../App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const item = [
	"/bear.png",
	"/cardboardbox.png",
	"/foodwaste.png",
	"/paper.jpg",
	"/toilettissue.png",
	"/eggtray.png",
	"/plant.png",
];

const correctAnswer = [1, 3, 5];

const QuizGame = () => {
	const [clickedStates, setClickedStates] = useState(
		item.reduce((acc, curr, index) => {
			acc[index] = false;
			return acc;
		}, {})
	);

	const [gotWrongAnswer, setGotWrongAnswer] = useState(true);

	const handleSelect = (index) => {
		const newClickedStates = {
			...clickedStates,
			[index]: !clickedStates[index],
		};
		setClickedStates(newClickedStates);
	};

	useEffect(() => {
		//clickStates {0: true, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false}

		for (let [key, value] of Object.entries(clickedStates)) {
			if (value === true && !correctAnswer.includes(parseInt(key))) {
				setGotWrongAnswer(true);
				break;
			}
			setGotWrongAnswer(false);
		}
	}, [clickedStates]);

	const navigate = useNavigate();

	const goToExplain = () => {
		navigate("/explainGameOne");
	};

	return (
		<>
			<div className="row">
				<div className="col-lg-5">
					<img
						src={gotWrongAnswer ? "/bluebin_unhappy.gif" : "/binwave.gif"}
						alt="blue trashbin"
						loading="lazy"
					/>
					<Box
						boxShadow={9}
						m={1}
						p={4}
						borderRadius={5}
						style={{
							backgroundColor:
								gotWrongAnswer &&
								Object.values(clickedStates).filter(Boolean).length > 0
									? "pink"
									: "lightgreen",
						}}
					>
						{!gotWrongAnswer &&
						Object.values(clickedStates).filter(Boolean).length === 3 ? (
							<div>
								<p>
									Correct, you can throw these items in the blue bin.
									<Box
										bgcolor="green"
										boxShadow={3}
										m={1}
										p={1}
										borderRadius={16}
										onClick={goToExplain}
									>
										<Button style={{ color: "white" }} m={1} p={1}>
											Next
										</Button>
									</Box>
								</p>
							</div>
						) : gotWrongAnswer ? (
							<div>
								<p>
									You got a wrong answer, please try again. You must select all
									three correct answers.
								</p>
							</div>
						) : (
							<div>
								<p>Select correct answers</p>
							</div>
						)}
					</Box>
				</div>
				<div className="col-lg-7">
					<Box bgcolor="white" boxShadow={3} m={4} p={7} borderRadius={16}>
						<div>
							<h1>What can you throw in this blue bin?</h1>
							<h4>
								Make the blue bin happy by selecting three images for him to
								eat.
							</h4>
						</div>
						{item.map((item, index) => (
							<img
								className="circular-image p-1 m-2"
								src={item}
								key={index}
								alt="item"
								onClick={() => handleSelect(index)}
								style={{
									border: clickedStates[index]
										? correctAnswer.includes(index)
											? "5px solid green"
											: "5px solid red"
										: "none",
									cursor: "pointer",
								}}
							/>
						))}
					</Box>
				</div>
			</div>
		</>
	);
};

export default QuizGame;
