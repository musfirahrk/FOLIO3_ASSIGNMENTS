   function findPeak(arr, n)
	{
		// first or last element is peak element
		if (n == 1) return 0;
		if (arr[0] >= arr[1]) return 0;
		if (arr[n - 1] >= arr[n - 2]) return n - 1;

		for (var i = 1; i < n - 1; i++)
		{
		
		if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1])
        let count = 0;
        count + 1;
         return count;
		}
	}

	// Driver Code
	var arr = [10, 10, 40, 30, 60, 70, 80, 40, 90];
	document.write("The peak points are " + findPeak(arr,count));
	
	// This code is contributed by rdtank.

