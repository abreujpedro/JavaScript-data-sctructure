function selectionSort(userArray, arrayLength) {
    console.time("Selection Sort");
	for (j = 0; j < arrayLength - 1; j++) {
        minNumberOfArray = j;
		for (i = j; i < arrayLength; i++) {

			if (userArray[i] < userArray[minNumberOfArray]) {
				minNumberOfArray = i;
			}
		}
		if (userArray[j] != userArray[minNumberOfArray]) {
			temp = userArray[minNumberOfArray];
			userArray[minNumberOfArray] = userArray[j];
			userArray[j] = temp;
		}
	}
    console.timeEnd("Selection Sort");
    return userArray;
}

console.log(selectionSort([2, 5, 6 , 9 , 3, 7, 1, 8, 10, 4 ], 10));