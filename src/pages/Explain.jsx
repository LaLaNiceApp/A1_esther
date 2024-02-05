import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Explain = () => {
	const navigate = useNavigate();

	const startGameTwo = () => {
		navigate("/quizgameTwo");
	};

	return (
		<div>
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
				<h2 style={{ fontStyle: "bold" }}>Lack of Knowledge in Recycling</h2>
				<p className="mt-1">
					In Singapore, people are very busy and do not have time to recycle.
					Also, there is a general lack of understanding or interest in
					recycling means that even when Singaporeans make use of those big blue
					recycling bins situated in their housing estates, they chuck in things
					that do not belong, such as food waste or containers that are still
					dirty from food, and end up contaminating the whole bin (DBS, 2019)
				</p>
				Read more at:{" "}
				<a
					href="https://www.dbs.com/livemore/community/trash-talk-no-time-waste-dealing-singapores-mounting-trash-problem.html#:~:text=A%20general%20lack%20of%20understanding,contaminating%20the%20whole%20bin%2C%20he"
					target="_blank"
					rel="noopener noreferrer"
				>
					DBS Article
				</a>
				<p className="mt-2">
					Ask yourself, do you know what can be recycled? And how can you help
					this situation? How can you improve the blue bins design to increase
					recycling rate?
				</p>
				<p>
					{" "}
					Please read this article to understand what can be recycled: <br />
					<a
						href="https://www.nea.gov.sg/docs/default-source/our-services/waste-management/list-of-items-that-are-recyclable-and-not.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						NEA Article: List of Items that are Recyclable and Not in Blue Bin
					</a>
				</p>
				<img
					src="./bluebinfailed.jpg"
					alt="blue trashbin"
					loading="lazy"
					style={{
						height: "50vh",
						width: "40vh",
						borderRadius: "16px",
						marginBottom: "20px",
					}}
				/>
				<Box
					bgcolor="green"
					boxShadow={3}
					m={1}
					p={3}
					borderRadius={16}
					onClick={startGameTwo}
				>
					<Button style={{ color: "white" }} m={1} p={4}>
						Next Question
					</Button>
				</Box>
			</Box>
		</div>
	);
};

export default Explain;
