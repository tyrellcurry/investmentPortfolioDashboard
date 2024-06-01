"use client";
import React, { useState } from 'react';

interface PanelProps {
	children: React.ReactNode
}
export default function Panel({ children }: PanelProps) {
	const [isOpen, setIsOpen] = useState(false);
	function handleOpen() {
		console.log("isOpen", isOpen);
		setIsOpen(!isOpen);
	}
	return (
		<div className={`w-full max-w-[1200px] m-auto p-12 bg-gray-100 rounded-lg absolute ${isOpen ? "top-[10vh]" : "top-[75vh]"} transition-[top] ease-in-out duration-[700ms]`} >
			<div className="flex justify-between">
				<h2 className="text-3xl font-semibold">Strategies</h2>
				<button className="bg-slate-300 p-1" onClick={handleOpen}>
					{isOpen ? "Close v" : "Open ^"}
				</button>
			</div>
			{children}
		</div >
	)
}
