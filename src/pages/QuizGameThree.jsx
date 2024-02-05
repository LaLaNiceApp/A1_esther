import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Item from "../components/Item";
import Bin from "../components/Bin";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const correctAnswers = [
	"Banana Peel",
	"Apple Core",
	"Eggshell",
	"Coffee Grounds",
	"Corrugated Cardboard",
];

const QuizGameThree = () => {
	const navigate = useNavigate();
	const [items, setItems] = useState([
		"Banana Peel",
		"Apple Core",
		"Eggshell",
		"Coffee Grounds",
		"Corrugated Cardboard",
		"Cheese",
		"Medication",
		"Pet Waste",
		"Fish Bones",
	]);
	const [binnedItems, setBinnedItems] = useState([]);
	const [showPopup, setShowPopup] = useState(false);
	const [showHint, setShowHint] = useState(false);
	const [showError, setShowError] = useState(false);

	const HintCliked = () => {
		setShowHint(true);
	};

	const handleRemoveFromBin = (itemName) => {
		setBinnedItems((prevBinnedItems) => {
			const updatedBinnedItems = prevBinnedItems.filter(
				(item) => item !== itemName
			);
			return updatedBinnedItems;
		});

		setItems((prevItems) => {
			// Check if the item already exists in items
			if (!prevItems.includes(itemName)) {
				return [...prevItems, itemName];
			} else {
				// If the item already exists, return the previous state
				return prevItems;
			}
		});
	};

	useEffect(() => {
		console.log(binnedItems);
	}, [binnedItems]);

	useEffect(() => {
		console.log(items);
	}, [items]);

	const endGame = () => {
		navigate("/byebye");
	};

	const submitAnswers = () => {
		if (binnedItems.length === 5) {
			for (let i = 0; i < binnedItems.length; i++) {
				if (!correctAnswers.includes(binnedItems[i])) {
					//if the binned items are not the correct answers
					setShowPopup(false);
					setShowError(true);
					return;
				}
			}
			//if the binned items are the correct answers
			setShowPopup(true);
			setShowError(false);
		} else {
			//if the binned items are not the correct answers
			setShowError(true);
			setShowPopup(false);
		}
	};

	return (
		<>
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
				<div>
					<p>
						A study shows per year the average human produces 215 kg of food
						waste (ClassicKitchenSupplies.com, 2020). Please drag and drop the
						correct waste items into the food waste composter.
					</p>
				</div>

				<DndProvider backend={HTML5Backend}>
					<div className="container">
						<div className="row text-center">
							<div className="col-lg-6 col-sm-14 container text-center">
								<div
									className="container"
									style={{
										fontFamily: "Roboto",
										color: "black",
										fontSize: "20px",
										textAlign: "center",
									}}
								>
									<div key={items.join(",")} className="row text-center">
										{items.map((item) => (
											<Item
												key={
													new Date().getTime() +
													Math.floor(Math.random() * 1000)
												}
												item={item}
												binnedItems={binnedItems}
												setBinnedItems={setBinnedItems}
												setItems={setItems}
											/>
										))}
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-sm-14 container text-center">
								<Bin
									binnedItems={binnedItems}
									onRemoveFromBin={handleRemoveFromBin}
								/>
								<button className="m-3" onClick={HintCliked}>
									<HelpOutlineIcon />
									Hint
								</button>
							</div>
						</div>
					</div>
				</DndProvider>
				<Box
					bgcolor="green"
					boxShadow={3}
					m={2}
					p={3}
					borderRadius={16}
					onClick={submitAnswers}
				>
					<Button style={{ color: "white" }} m={1} p={4}>
						Submit Answers
					</Button>
				</Box>
			</Box>
			<div
				style={{
					backgroundColor: "white",
					fontFamily: "Roboto",
					color: "black",
					fontSize: "20px",
					textAlign: "center",
					borderRadius: "16px",
					padding: "10px",
				}}
			>
				<p>
					Reference: <br></br>
					<a
						href="https://www.epa.gov/recycle/composting-home"
						target="_blank"
						rel="noopener noreferrer"
					>
						Composting At Home | US EPA. (2023, June 14). US EPA. Retrieved Feb
						2, 2024.
					</a>
					<br></br>
					<a
						href="https://horticulture.co.uk/how-to-start-a-compost-bin/"
						target="_blank"
						rel="noopener noreferrer"
					>
						HOW TO START AND USE A COMPOST BIN AT HOME. (2023, June 28).
						horticulture.co.uk . Retrieved Feb 2, 2024.
					</a>
				</p>
			</div>
			{showPopup && (
				<Box
					bgcolor="white"
					boxShadow={5}
					m={4}
					p={5}
					borderRadius={2}
					position="fixed"
					top="0"
					left="0"
					bottom="0"
					right="0"
					display="grid"
					placeItems="center"
					zIndex="modal"
					overflow="auto"
				>
					<div style={{ position: "absolute", top: 5, right: 5 }}>
						<CloseIcon fontSize="large" onClick={() => setShowPopup(false)} />
					</div>
					<div
						className="text-center"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
							height: "100%",
						}}
					>
						<h2>Good Job! You got all the answers correct!</h2>
						<img
							className="img-fluid"
							src="/estherthumbsup.png"
							alt="happy face"
							style={{ maxHeight: "350px" }}
						/>
						<Box
							bgcolor="green"
							boxShadow={3}
							m={1}
							p={3}
							borderRadius={16}
							onClick={endGame}
							style={{ minWidth: "200px" }}
							className="text-center"
						>
							<Button style={{ color: "white" }} m={1} p={1}>
								Next
							</Button>
						</Box>
					</div>
				</Box>
			)}
			{showHint && (
				<Box
					bgcolor="white"
					boxShadow={5}
					m={4}
					p={5}
					borderRadius={2}
					position="fixed"
					top="0"
					left="0"
					bottom="0"
					right="0"
					display="grid"
					placeItems="center"
					zIndex="modal"
					overflow="auto"
				>
					<div style={{ position: "absolute", top: 5, right: 5 }}>
						<CloseIcon fontSize="large" onClick={() => setShowHint(false)} />
					</div>
					<div>
						<h2>What can you put in the food waste composter?</h2>
						<p>
							You can put in the food waste composter: Banana Peel, Apple Core,
							Eggshell, Coffee Grounds, and Corrugated Cardboard.
						</p>
						<img
							className="img-fluid"
							src="/whattoputincomposter.jpg"
							alt="what to put in composter"
							style={{ height: "400px" }}
						/>
					</div>
				</Box>
			)}

			{showError && (
				<Box
					bgcolor="white"
					boxShadow={5}
					m={4}
					p={5}
					borderRadius={2}
					position="fixed"
					top="0"
					left="0"
					bottom="0"
					right="0"
					display="grid"
					placeItems="center"
					zIndex="modal"
					overflow="auto"
				>
					<div style={{ position: "absolute", top: 5, right: 5 }}>
						<CloseIcon fontSize="large" onClick={() => setShowError(false)} />
					</div>
					<div>
						<h2>Try Again!</h2>
						<p>You have not binned all the correct items. Please try again.</p>
						<img
							className="img-fluid"
							src="/esthersad.png"
							alt="happy face"
							style={{ maxHeight: "350px" }}
						/>
					</div>
				</Box>
			)}
		</>
	);
};

export default QuizGameThree;
