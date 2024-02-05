import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import "../App.css";

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

const Item = ({ item, binnedItems, setBinnedItems, setItems }) => {
	const [{ isDragging }, drag] = useDrag(
		() => ({
			type: "item",
			item: { name: item },
			end: (item, monitor) => {
				const dropResult = monitor.getDropResult();
				if (item && dropResult) {
					console.log(`You dropped ${item.name} into ${dropResult.name}!`);
					// let tempList = binnedItems;
					setBinnedItems((prevBinnedItems) => {
						// Check if the item already exists in binnedItems
						if (!prevBinnedItems.includes(item.name)) {
							return [...prevBinnedItems, item.name];
						} else {
							// If the item already exists, return the previous state
							return prevBinnedItems;
						}
					});
					setItems((prevItems) => prevItems.filter((i) => i !== item.name));
					// localStorage.setItem("binnedItems", JSON.stringify(tempList));
					// window.location.reload();
				}
			},
			collect: (monitor) => ({
				isDragging: !!monitor.isDragging(),
			}),
		}),
		[]
	);
	return (
		<>
			<div
				ref={drag}
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
				className="col-lg-3 col-md-3 col-sm-6 container text-center"
			>
				{item}
				<img
					className="img-fluid p-1 m-2"
					src={itemImageSource[item]}
					alt="happy face"
					style={{ maxHeight: "250px" }}
				/>
			</div>
		</>
	);
};

Item.propTypes = {
	item: PropTypes.string.isRequired,
	binnedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
	setBinnedItems: PropTypes.func.isRequired,
	setItems: PropTypes.func.isRequired,
};

export default Item;
