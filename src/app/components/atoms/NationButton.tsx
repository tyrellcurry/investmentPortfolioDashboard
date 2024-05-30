interface ButtonProps {
	variant?: 'primary' | 'green' | 'add' | 'delete';
	onClick?: () => void;
	children: React.ReactNode;
}


const NationButton: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
	let buttonClass = '';
	let icon = null;

	switch (variant) {
		case 'primary':
			buttonClass = 'bg-blue-500 hover:bg-blue-700 text-white';
			break;
		case 'green':
			buttonClass = 'bg-green-500 text-white';
			break;
		case 'add':
			buttonClass = 'bg-slate-500 text-white flex items-center';
			icon = <span className="mr-2">+</span>;
			break;
		case 'delete':
			buttonClass = 'bg-red-500 text-white flex items-center';
			icon = <span className="mr-2">🗑️</span>;
			break;
	}
	return (
		<button className={`p-2 rounded ${buttonClass}`} onClick={onClick}>
			{icon}
			{children}
		</button>
	);
}

export default NationButton;
