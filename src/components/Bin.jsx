import "./dropbox.css";
import { useDrop } from "react-dnd";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const itemImageSource = {
	"Banana Peel": "/bananapeel.png",
	"Apple Core": "/apple_core.png",
	Eggshell: "/eggshell.png",
	"Coffee Grounds": "/coffeegr.png",
	"Corrugated Cardboard": "/board.png",
	Cheese: "/cheese.png",
	Medication: "/medication.jpg",
	"Pet Waste": "/poop.png",
	"Fish Bones": "/fishbone.png",
};

const Bin = ({ binnedItems, onRemoveFromBin }) => {
	const [{ canDrop, isOver }, drop] = useDrop(
		() => ({
			accept: "item",
			drop: () => ({
				name: "Bin",
			}),
			collect: (monitor) => ({
				isOver: !!monitor.isOver(),
				canDrop: !!monitor.canDrop(),
			}),
		}),
		[]
	);

	return (
		<div className="drag-box container-fluid" ref={drop}>
			{/* <h2>Composter</h2> */}
			<div className="container">
				<div className="row text-center">
					<p
						className="text-center overlay-text"
						style={{ backgroundColor: "white" }}
					>
						Drop items here
					</p>
					{binnedItems.map((item, i) => (
						<div
							className="col-6 col-sm-4 container-fluid text-center"
							key={i}
							style={{
								fontFamily: "Roboto",
								color: "black",
								fontSize: "20px",
								textAlign: "center",
								backgroundColor: "lightgreen",
								boxShadow: "5px 5px 5px grey",
								borderRadius: "16px",
								padding: "10px",
								margin: "20px",
							}}
						>
							<p>{item}</p>
							<img
								className="img-fluid p-1 m-2"
								src={itemImageSource[item]}
								alt="happy face"
								style={{ maxHeight: "250px" }}
							/>
							<IconButton onClick={() => onRemoveFromBin(item)} size="small">
								<CloseIcon fontSize="medium" />
							</IconButton>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Bin;
