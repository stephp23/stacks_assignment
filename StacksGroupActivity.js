//Stacks Group Activity

//Given a string, check if it is a palindrome by using stacks methods only.
//Given an input string consisting of brackets such as "{ ( ) } [ ]" write a function to check whether the orders of each respective pair of brackets are correct. 
//Given an input stack, reverse the stack using recursion.
//	Hint: This may require the use of a helper function.
//Infix notation is when a mathematical function is written as A + B * C. Research postfix notation, and include a comment with the definition.
//Your task is to write a function that will convert an expression from infix notation to postfix notation using stack.

//Log at least 3 outputs with different test cases to the console for each problem.

//  Stack implementation
​
class Stack {
​
//     // Using an array to implement a stack
    constructor() {
        this.items = [];
    }
// ​
//     //  Push function
    push(element) {
        this.items.push(element);
    }
// ​
//     //  Pop function
  pop() {
    //  return the top most element in the stack, and remove it
    //  return error if stack is empty
    if (this.items.length === 0) {
      return "Underflow error";
    } else if {
      return this.items.pop();
    }
    }
// ​
//     //  Peek function
    peek() {
        //  return the top most element (last item inserted)
        //  but WILL NOT delete it
      return this.items[this.items.length - 1];
      
    }
// ​
//     //  isEmpty function
    isEmpty() {
        //  return true if stack is empty
        return this.items.length === 0;
    }
    
//     //  printStack function
//     //  Can also be done with while loop and .pop()
//     //  Will still be O(n) runtime
//     printStack() {
//         let str = "";
//         for (let i = 0; i < this.items.length; i++)
//             str += this.items[i] + " ";
//         return str;
//     }
}
​
//  Create object of the stack class
let newStrStack = new Stack();
​
//  Adding elements into my stack
// myStack.push(10);
// myStack.push(20);
// myStack.push(30);
​
//  Print the stack elements
// console.log(myStack.printStack());
// ​
//  Check element at the top
// console.log(myStack.peek());
​
// myStack.pop();
// myStack.pop();
// console.log(myStack.printStack());


let newStr = "mother"