import React from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';

class AccountAllocationChartD3 extends React.Component {

    state = {
		dataPoints: [
			{ y: 20, label: "Airfare" },
			{ y: 24, label: "Food & Drinks" },
			{ y: 20, label: "Accomodation" },
			{ y: 14, label: "Transportation" },
			{ y: 12, label: "Activities" },
			{ y: 10, label: "Misc" }	
		],
		data: [5,3,6,1,2]
	}

	componentDidMount() {
		this.createSvgContainer();
	}

	componentDidUpdate() {
		this.createSvgContainer();
	}

	createSvgContainer = () => {
		let svg = this.svg;

		let width = 250;
		let height = 250;
		let margin = 10;

		let radius = Math.min(width, height) / 2 - margin;

		let selection = d3.select(svg)
							.attr("width", width)
							.attr("height", height)
							.append("g")
							.attr("transform", "translate(" + width / 2 + "," + height / 2+ ")");

		let color = d3.scaleOrdinal()
						.domain(this.state.data)
						.range(d3.schemeSet2);
		
		let pie = d3.pie()
			.value(d => d.value);
		
		let data_ready = pie(d3.entries(this.state.data));

		let arcGenerator = d3.arc()
			.innerRadius(0)
			.outerRadius(radius);
			
		selection
			.selectAll("mySlices")
			.data(data_ready)
			.enter()
			.append("path")
				.attr("d", arcGenerator)
				.attr("fill", (d) => color(d.data.key))
				.attr("stroke", "black")
				.style("stroke-width", "2px")
				.style("opacity", 0.7)
		
		selection
			.selectAll('mySlices')
			.data(data_ready)
			.enter()
			.append('text')
			.text(d => "grp " + d.data.key)
			.attr("transform", d => "translate(" + arcGenerator.centroid(d) + ")")
			.style("text-anchor", "middle")
			.style("font-size", 17)
	}

	render() {
		return (
			<div style={{"height": 250, "width": 250, "display": "inline-block"}}>
				<svg ref={svg => (this.svg = svg)}></svg>
			</div>
		);
	}
}

AccountAllocationChartD3.propTypes = {

}

export default AccountAllocationChartD3;