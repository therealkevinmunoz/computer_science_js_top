class Node {
    constructor(data)
    {
        this.data = data
        //add left and right of branches
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(array)
    {
        //this assignment might need to be revised
        this.root = null
        array.forEach(element => {this.buildTree(element)});
    }

    buildTree(value)
    {
        let newNode = new Node(value)
        if(this.root == null)
        {
            this.root = newNode
            return this;
        }

        let current = this.root;

        while(current)
        {
            if(value == current.data)
            {
                return undefined;
            }

            if(value < current.data)
            {
                if(current.left == null)
                {
                    current.left = newNode
                    return this
                }
                current = current.left
            }
            else if(value > current.data)
            {
                if(current.right == null)
                {
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }

    insert(value)
    {
        let newNode = new Node(value)
        if(this.root == null)
        {
            this.root = newNode
            return this;
        }

        let current = this.root;

        while(current)
        {
            if(value == current.data)
            {
                return undefined;
            }

            if(value < current.data)
            {
                if(current.left == null)
                {
                    current.left = newNode
                    return this
                }
                current = current.left
            }
            else if(value > current.data)
            {
                if(current.right == null)
                {
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }


}


//Test function
const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
       return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

//let tree = new Tree()
let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
//treeArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
//treeArray.forEach(element => {tree.buildTree(element)});