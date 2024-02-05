import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import AspectRatio from "@mui/joy/AspectRatio";
import CloseIcon from "@mui/icons-material/Close";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CssBaseline from "@mui/material/CssBaseline";

const shopProducts = {
	Apple: [0.24, "/apple.png"],
	Banana: [0.21, "/banana.png"],
	"T-shirt": [7, "/tshirt.jpg"],
	Jeans: [80, "/jeans.png"],
	Laptop: [422.5, "/laptop.png"],
	"Plastic Water Bottle": [3, "/bottle.png"],
	"Disposable Diapers": [4, "/diapers.png"],
	"Single-use Plastic Bags": [1.58, "/bags.png"],
	Smartphone: [60, "/smartphone.png"],
	"Aluminum Can": [96.8, "/can.png"],
	"New Car": [24000, "/car.png"],
	"Plastic Toys": [7, "/toys.png"],
};

const tips = {
	Apple:
		"🍎 Apples have a relatively low carbon footprint of 0.24 kg (0.53 lbs) of CO2e per pound of produce compared to other fruits (IMPACTFUL NINJA, 2024).",
	Banana:
		"🍌Bananas have a moderate carbon footprint of 0.21 kg (0.48 lb) of CO2e per pound of bananas (IMPACTFUL NINJA, 2024).",
	"New Car":
		"🚗 Try to drive less and use 🚆 public transport instead. It is 💰 cheaper and more 🌱 sustainable. The average new car in the EU emits 110g CO2/km (ACEA, 2024). A typical medium sized family car will create around 24 tonnes of CO2 during its life cycle (Zemo Partnership, 2015).",
	"Single-use Plastic Bags":
		"🛍️ You should use less Plastic Bags. They are not biodegradable, try to use reusable bags instead. Additionally, one single-use plastic bag is equivalent to 1.58kg CO2e, or 8km of driving (co2everything, 2024).",
	"Plastic Water Bottle":
		"🌍 Try to use fewer Plastic Water Bottles. Bring your own bottles and 💰 save money!",
	Smartphone:
		"📱 Try to change your cellphone less frequently. It is better for your 💵 pocket and the 🌳 environment. The average carbon footprint of a smartphone is around 63 kg CO2e (Infomineo, 2022).",
	"Aluminum Can":
		"♻️ Aluminum cans are recyclable! Try to recycle more. The cradle-to- grave carbon footprint of an average aluminum can is 96.8g CO2 equivalent. Recycling a single can saves 1.56 megajoules of energy, or 98.7g CO2 equivalent (The Aluminum Association, 2021). Recycling a 12-pack worth of aluminum cans will save enough energy to power a typical passenger car for more than 3 miles.",
	"Plastic Toys":
		"🧸 Plastic toys are not biodegradable. Try to use toys made of wood instead.",
	"Disposable Diapers":
		"👶 Disposable diapers are not biodegradable. Try to use reusable diapers instead.",
	"T-shirt":
		"👕 The average carbon footprint of a t-shirt is 7 kg CO2 equivalent. The lowest is Cotton (recycled), made in Vietnam (5 kgCO2e), the highest is Cotton, made in India (10 kgCO2e) (CarbonFact, 2024).",
	Jeans:
		"Research estimates suggest that a single pair of jeans can have a carbon footprint ranging from 33 to 80 kilograms of CO2 equivalent emissions (The Commons.Earth, 2023).",
	Laptop:
		"Do you know that a laptop can last 3-5 years (Starlabs, 2024). So try to not change a laptop frequently. The carbon footprint of a laptop is 422.5kgs of CO2e. This sum includes emissions during manufacture and shipping (8billiontrees, 2023).",
};

const QuizGameTwo = () => {
	const [cart, setCart] = useState([]);
	const totalCarbonFootprint = Object.values(cart).reduce(
		(sum, item) => sum + item[0] * item[1],
		0
	);

	const [showPopup, setShowPopup] = useState(false);

	const navigate = useNavigate();

	const startGameThree = () => {
		navigate("/quizgameThree");
	};

	const addItemToCart = (item, carbonFootprint) => {
		// {item: [CarbonFootprint, Qty]}
		const newCart = { ...cart };
		if (item in newCart) {
			newCart[item][1] += 1;
		} else {
			newCart[item] = [carbonFootprint, 1];
		}
		setCart(newCart);
	};

	const removeItemFromCart = (item) => {
		const newCart = { ...cart };
		if (item in newCart) {
			if (newCart[item][1] > 1) {
				newCart[item][1] -= 1;
			} else {
				delete newCart[item];
			}
		}
		setCart(newCart);
	};

	useEffect(() => {
		if (showPopup) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		// Cleanup function to reset overflow when component unmounts
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [showPopup]);

	return (
		<div className="gameTwo">
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
					<div>
						<h2 style={{ textDecoration: "underline" }}>
							Your total carbon footprint is{" "}
							{parseFloat(totalCarbonFootprint.toFixed(1))}.
						</h2>
						{totalCarbonFootprint > 500 ? (
							<>
								<p style={{ color: "red" }}>
									😞 This is terrible! Your carbon footprint is terribly high.
								</p>
							</>
						) : (
							<p style={{ color: "green" }}>
								😊 Great job! Your carbon footprint is low.
							</p>
						)}
						<div>
							<TableContainer stickyHeader>
								<h4 style={{ marginTop: "20px" }}>Receipt</h4>
								<Table>
									<TableHead>
										<TableRow>
											<TableCell>Item</TableCell>
											<TableCell>Quantity</TableCell>
											<TableCell>Carbon Footprint per Item</TableCell>
											<TableCell>Sub Total Carbon Footprint</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{Object.entries(cart).map(([item, values]) => (
											<TableRow key={item}>
												<TableCell>{item}</TableCell>
												<TableCell>{values[1]}</TableCell>
												<TableCell>{values[0]}</TableCell>
												<TableCell>{values[0] * values[1]}</TableCell>
											</TableRow>
										))}
										<TableRow>
											<TableCell colSpan={3}>Total Carbon Footprint</TableCell>
											<TableCell>
												{Number(totalCarbonFootprint.toFixed(1))}
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
						</div>
					</div>
					<Box m={1} p={3}>
						{Object.entries(cart).map(([item, values]) => {
							if (values[1] > 0) {
								return <p key={item}>{tips[item]}</p>;
							}
							return null;
						})}
					</Box>
					<Box
						bgcolor="green"
						boxShadow={3}
						m={1}
						p={3}
						borderRadius={16}
						onClick={startGameThree}
					>
						<Button style={{ color: "white" }} m={1} p={4}>
							Next Game
						</Button>
					</Box>
				</Box>
			)}

			<Box bgcolor="white" boxShadow={3} m={2} p={8} borderRadius={16}>
				<Typography variant="h4" gutterBottom>
					Let us go shopping
				</Typography>
				<Typography variant="body1" gutterBottom>
					Choose the items you would usually buy and add them to your cart.
				</Typography>
				<div className="row">
					{Object.entries(shopProducts).map(([item, list], index) => {
						return (
							<div className="col col-sm-6 col-lg-4 p-3" key={index}>
								<Box sx={{ boxShadow: 3, borderRadius: 1, padding: 1 }}>
									<AspectRatio objectFit="contain">
										<img
											className="shopping-image-large m-2"
											src={list[1]}
											alt="item"
											style={{
												cursor: "pointer",
											}}
										/>
									</AspectRatio>
									{showPopup && (
										<p>
											{item}
											<br></br>Carbon Footprint: {list[0]}
										</p>
									)}

									<div>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												marginBottom: 1,
											}}
										>
											<Button onClick={() => removeItemFromCart(item)}>
												<RemoveIcon />
											</Button>
											<Typography>{cart[item] ? cart[item][1] : 0}</Typography>
											<Button onClick={() => addItemToCart(item, list[0])}>
												<AddIcon />
											</Button>
										</Box>
									</div>
								</Box>
							</div>
						);
					})}
				</div>
			</Box>

			<Box
				bgcolor="green"
				boxShadow={3}
				m={1}
				p={3}
				borderRadius={16}
				onClick={() => setShowPopup(true)}
			>
				<Button style={{ color: "white" }} m={1} p={4}>
					Check out
				</Button>
			</Box>
		</div>
	);
};

export default QuizGameTwo;
