const removeElement = <T>(arr: T[], element: T) => {
	arr.splice(arr.indexOf(element), 1);
};

export default removeElement;
