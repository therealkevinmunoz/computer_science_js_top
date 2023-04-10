export function capitalize(string) {
    let sentenceArray = string.split(' ');

    let newString = '';

    for(let i = 0; i < sentenceArray.length; i++)
    {
        if(i > 0)
        {
            newString += " "
        }

        newString += sentenceArray[i].replace(sentenceArray[i].charAt(0), sentenceArray[i].charAt(0).toUpperCase());
           
    }

    return newString;
}

export function reverseString(string) {
    let newString = ''

    for(let i = string.length; i >= 0; i--)
    {
        newString += string.charAt(i)
    }

    return newString
}

export const calculator = {
    add(value1, value2) {
        return value1 + value2
    },
    subtract(value1, value2) {
        return value1 - value2
    },
    multiply(value1, value2) {
        return value1 * value2
    },
    divide(value1, value2) {
        return value1 / value2
    }
}

export function caeserCipher(sentence, shiftAmount) {
    let lettersDict = {'a': '1', 'b': '2', 'c': '3', 'd': '4', 'e': '5', 'f': '6', 'g': '7', 'h': '8', 'i': '9', 'j': '10', 'k': '11', 'l': '12', 'm': '13', 'n': '14', 'o': '15', 'p': '16', 'q': '17', 'r': '18', 's': '19', 't': '20', 'u': '21', 'v': '22', 'w': '23', 'x': '24', 'y': '25', 'z': '26', ' ': '27'}

    let formattedSentence = sentence.toLowerCase()
    let sentenceArray = []

    for(let i = 0; i < formattedSentence.length; i ++){
        let letterNumeral = parseInt(lettersDict[formattedSentence.charAt(i)]) -1

        sentenceArray.push(letterNumeral)
    }
    
    let newSentenceArray = []

    for(let i = 0; i < sentenceArray.length; i ++) {
        let newValue = parseInt(sentenceArray[i]) + shiftAmount
        
        if(newValue == 27){
            newSentenceArray.push(26)
        }   
        else if(newValue > 25) {
            newSentenceArray.push(newValue - 26)
        }
        else {
            newSentenceArray.push(newValue)
        }
    }
   
    let lettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']

    let newSentence = ''

    for (let i = 0; i < newSentenceArray.length; i ++){
        newSentence += lettersArray[newSentenceArray[i]]
    } 

    return newSentence
}

export function analyzeArray(array) {
    let initialTotal = 0;
    let total = array.reduce((prev, curr) => prev + curr, initialTotal)
    let length = array.length
    let average = total / length;

    let min = 0;
    let max = 0;
    for(let i = 0; i < length; i++)
    {
        if(i == 0)
        {
            min = array[i]
            max = array[i]
        }

        if(array[i] < min)
        {
            min = array[i]
        }

        if(array[i] > max)
        {
            max = array[i]
        }
    }
    
    return {average, min, max, length}
}