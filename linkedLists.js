class LinkedList {
    constructor()
    {
        this.head = null
        this.size = 0
    }

    append(value)
    {
        let newNode = new Node(value)
        //add the first node to list
        if(this.head == null)
        {
            this.head = newNode
        }
        else
        {
            let current = this.head;
            while(current.nextNode)
            {
                current = current.nextNode
            }

            current.nextNode = newNode
        }
        //after node is added, update size
        this.size++
    }

    //BUG: Not adding to front of list
    prepend(value)
    {
        //create a new node to be added
        let newNode = new Node(value)
        //add the first node to list
        if(this.head == null)
        {
            this.head = newNode
        }
        else
        {
            newNode.nextNode = this.head
        }
        //after node is added, update size
        this.size++
    }

    getSize()
    {
        return this.size;
    }

    getHead()
    {
        return this.head
    }

    getTail()
    {
        let current = this.head;
        while(current.nextNode)
        {
            current = current.nextNode
        }

        return current
    }

    //BUG: Not locating node on loop
    findNode(index)
    {
        let startingIndex = 0 
        let current = this.head;

        if(index >= this.size){
            console.log("Error. Index is greater then size of list.");
            return false
        }

        while(startingIndex <= index)
        {
            current = current.nextNode
        }

        return current;
    }

    //BUG: Not removing last node
    removeLastNode()
    {
        let current = this.head;
        while(current.nextNode)
        {
            current = current.nextNode
        }

        current = null
        size --
    }

    isValueInNode(value)
    {
        let current = this.head
        while(current.nextNode)
        {
            if(value == current.value)
            {
                return true;
            }
            else
            {
                current = current.nextNode;
            }
        }

        if(current.newNode == null)
        {
            if(value == current.value)
            {
                return true;
            }
            else
            {
                return false
            }
        }
    }

    findIndex(value)
    {
        let index = 0
        let current = this.head
        while(current.nextNode)
        {
            if(value == current.value)
            {
                return index;
            }
            else
            {
                index ++
                current = current.nextNode;
            }
        }

        if(current.newNode == null)
        {
            if(value == current.value)
            {
                return index;
            }
            else
            {
                return null;
            }
            
        }
    }

    toString()
    {
        let string = "";
        let index = 0;
        let current = this.head
        while(current.nextNode)
        {
            string += `Node ${index}- value: ${current.value}, nextNode: ${current.nextNode}`
            index ++
            current = current.nextNode
        }

        if(current.newNode == null)
        {
            index ++
            string += `Node ${index}- value: ${current.value}, nextNode: ${current.nextNode}`
        }

        console.log(string)
    }

}

class Node {
    constructor(value){
        this.value = value
        this.nextNode = null
    }
}