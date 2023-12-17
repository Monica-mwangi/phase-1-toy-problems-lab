# phase-1-toy-problems-lab
This is a java script function that prompts the user to put students marks and then calculated as follows;
   A: Marks greater than 79
B: Marks between 60 and 79 
C: Marks between 50 and 59 
D: Marks between 40 and 49 
E: Marks less than 40
   write the code in a javascript file with a .js file extension so that the java script engine knows its executing javascript code 
   create a function as follows function calculateGrade (){
    let marks = parseInt(prompt('student marks'))
    when writing the function you can use the variable let, Using let ensures that marks is only accessible within the function and is not visible outside of it
=>use the if and else if to write your condition e.g if (condition){write your block of code}
      if (marks > 79){
            return 'A';
        }
        else if (marks >= 60 & marks <=79){
            return 'B';
        }
        else if (marks >= 50 & marks <=60){
            return 'c';
        }
        else if (marks >= 40 & marks <=50){
            return 'D'
        }
        else {
            return 'E'
        }
        =>the above code shows if one has 79 the return grade is 'A'


