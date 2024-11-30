import './CustomButton.css';

export const CustomButton = ({ text, warnMessage, hint }) => {
	const buttonClass = warnMessage ? 'warn' : hint ? 'hint' : '';
	const clickButton = () => {};
	return (
		<>
			<button className={buttonClass} onClick={clickButton}>
				{text}
			</button>
		</>
	);
};
