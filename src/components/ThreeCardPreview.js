import React from "react";
import styles from "./ThreeCardPreview.module.css";
import SedanIcon from "../images/icon-sedans.svg";
import SuvIcon from "../images/icon-suvs.svg";
import LuxuryIcon from "../images/icon-luxury.svg";

function ThreeCardPreview(props) {
	return (
		<div className={styles.container}>
			<div className={styles.sedanContainer}>
				<div className={styles.detailsContainer}>
					<img src={SedanIcon} alt="sedan-icon" />
					<h1>SEDANS</h1>
					<p>
						Choose a sedan for its affordability and excellent fuel economy.
						Ideal for cruising in the city or on your next road trip.
					</p>
				</div>
				<button>Learn More</button>
			</div>
			<div className={styles.suvContainer}>
				<div className={styles.detailsContainer}>
					<img src={SuvIcon} alt="suv-icon" />
					<h1>SUVS</h1>
					<p>
						Take an SUV for its spacious interior, power, and versatility.
						Perfect for your next family vacation and off-road adventures.
					</p>
				</div>
				<button>Learn More</button>
			</div>
			<div className={styles.luxuryContainer}>
				<div className={styles.detailsContainer}>
					<img src={LuxuryIcon} alt="luxury-icon" />
					<h1>LUXURY</h1>
					<p>
						Cruise in the best car brands without the bloated prices. Enjoy the
						enhanced comfort of a luxury rental and arrive in style.
					</p>
				</div>
				<button>Learn More</button>
			</div>
		</div>
	);
}

export default ThreeCardPreview;
