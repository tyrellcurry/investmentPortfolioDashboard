
"use client";
import React, { MouseEvent, useRef } from 'react';
import type { InteractionItem } from 'chart.js';
import {
	Chart as ChartJS,
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
} from 'chart.js';
import {
	Chart,
	getDatasetAtEvent,
	getElementAtEvent,
	getElementsAtEvent,
} from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
ChartJS.register(
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip
);

const options = {
	scales: {
		y: {
			beginAtZero: true,
		},
	},
};

const labels = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6'];

const data = {
	labels,
	datasets: [
		{
			type: 'line' as const,
			label: 'Dataset 1',
			borderColor: 'rgb(255, 99, 132)',
			borderWidth: 2,
			fill: false,
			data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
		},
		{
			type: 'bar' as const,
			label: 'Dataset 2',
			backgroundColor: 'rgb(75, 192, 192)',
			data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
			borderColor: 'white',
			borderWidth: 2,
		},
		{
			type: 'bar' as const,
			label: 'Dataset 3',
			backgroundColor: 'rgb(53, 162, 235)',
			data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
		},
	],
};

export function Tester() {
	return (
		"I am an awesome test"
	)
}
export default function ChartJSComponent() {
	const printDatasetAtEvent = (dataset: InteractionItem[]) => {
		if (!dataset.length) return;

		const datasetIndex = dataset[0].datasetIndex;

		console.log(data.datasets[datasetIndex].label);
	};

	const printElementAtEvent = (element: InteractionItem[]) => {
		if (!element.length) return;

		const { datasetIndex, index } = element[0];

		console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
	};

	const printElementsAtEvent = (elements: InteractionItem[]) => {
		if (!elements.length) return;

		console.log(elements.length);
	};

	const chartRef = useRef<ChartJS>(null);

	const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
		const { current: chart } = chartRef;

		if (!chart) {
			return;
		}

		printDatasetAtEvent(getDatasetAtEvent(chart, event));
		printElementAtEvent(getElementAtEvent(chart, event));
		printElementsAtEvent(getElementsAtEvent(chart, event));
	};

	return (
		<Chart
			ref={chartRef}
			type='bar'
			onClick={onClick}
			options={options}
			data={data}
		/>
	);
}

