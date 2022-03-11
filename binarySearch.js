 function binarySearch( userArray,  arrayLength,  elementToFind) {
	 left = 0;
	 rigth = arrayLength - 1;
	 middle = Math.trunc(rigth /  2);

	while (elementToFind != userArray[middle] && left != rigth) {
		if (elementToFind < userArray[middle]) {
			rigth = middle - 1;
		}
		if (elementToFind > userArray[middle]) {
			left = middle + 1;
		}
		middle = Math.trunc(((rigth + left) / 2));
	}
	if (elementToFind == userArray[middle]) {
		return middle;
	}
	return null;
}

console.log(binarySearch([3, 5, 7, 8, 10, 15, 18, 226, 352],9,18));