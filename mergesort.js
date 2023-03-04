function mergeSort(array)
{
    if(array.length < 2)
    {
        return array
    }
    else
    {
        let firstHalf = mergeSort(array.slice(0, Math.ceil(array.length/2)));
        let secondHalf = mergeSort(array.slice(Math.ceil(array.length/2)));

        console.log(firstHalf);
        console.log(secondHalf);

        if(firstHalf[0] < secondHalf[0])
        {
            array[0] = (firstHalf[0]);
            array[1] = (secondHalf[0]);

            return array;
        }
        else if(secondHalf[0] <= firstHalf[0])
        {
            array[0] =(secondHalf[0]);
            array[1] = (firstHalf[0]);

            return array;
        }
    }
}

console.log(mergeSort([5,3,4,8,1]))