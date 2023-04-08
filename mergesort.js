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
            array = firstHalf.concat(secondHalf);

            return array;
        }
        else
        {
            array = secondHalf.concat(firstHalf);

            return array;
        }
    }
}

console.log(mergeSort([5,3,4,8,1]))