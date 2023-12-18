//function to calculate grades
function calculateGrade (){
    let marks = parseInt(prompt('student marks'))
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
        
    }
    console.log(calculateGrade());
    

    


    
        
    
    

