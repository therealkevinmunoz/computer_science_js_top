function fibs(occurences)
{
    let fibArray = [];

    for(let i = 0; i < occurences; i++)
    {
       if(i === 0 || i === 1)
       fibArray.push(i)
       else
       {
        fibArray.push((fibArray[i-2] + fibArray[i-1]))
       }
    }

    return fibArray;
}

console.log(fibs(10));


function fibsRec(occurences)
{
    if(occurences === 1)
    {
         return [0, 1];
    }
    else
    {
        let array = fibsRec(occurences - 1);
        
        array.push((array[array.length - 2] + array[array.length -1]))

        return array;
    }
}

console.log(fibsRec(10));
