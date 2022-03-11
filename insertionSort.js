function insertionSort(userArray, arrayLength) {
    console.time("Insertion Sort");
	var x, mainNumber;
	for (i = 1; i < arrayLength; i++)
	{
		x = i - 1;
		mainNumber = userArray[i];
		while (x >= 0 && userArray[x] > mainNumber) {

			temp = userArray[x];
			userArray[x] = userArray[x + 1];
			userArray[x + 1] = temp;
			x--;
		}
	}
    console.timeEnd("Insertion Sort");
	return userArray;
}

console.log(insertionSort([2, 5, 6 , 9 , 3, 7, 1, 8, 10, 4 ], 10));