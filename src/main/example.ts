export class Example {

    //Create constructor for class Example and receive two parameters
    // constructor(a: number, b: number){
    // }
    add(a: number, b: number) {
        return a + b;
    }
}

 let num = new Example();
 console.log(num.add(5, 4));
