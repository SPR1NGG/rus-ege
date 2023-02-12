export default function getRandomElement(arr: any[]) {
	// return 'довезЁнный';
	return arr[Math.floor(Math.random() * arr.length)];
}
