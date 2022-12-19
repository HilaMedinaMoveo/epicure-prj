import React from "react";
import Hero from "../hero/Hero";
import LowerComponentCarruosel from "../lowerComponentCarruosel/LowerComponentCarruosel";
import UpperComponentCarrousel from "../upperHomepageCarrousel/UpperComponentCarrousel";

const Homepage = () => {
	return (
		<div>
			<Hero></Hero>
			<UpperComponentCarrousel></UpperComponentCarrousel>
			<LowerComponentCarruosel></LowerComponentCarruosel>
		</div>
	);
};

export default Homepage;
