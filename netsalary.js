//function to calculate payee
function calculatePayee(grossSalary){
    
    if (grossSalary <= 24000){
        return  0.1 * grossSalary

    }
    else if (grossSalary <= 32333){
        return  0.25 * grossSalary
    }
    else if (grossSalary <= 500000){
        return  0.3 * grossSalary
    }
    else if (grossSalary <= 800000){
        return  0.325 * grossSalary
    }
    else if (grossSalary > 800000){
        return  0.35 * grossSalary
    }
}
//function to calculate NHIF deductions
function calculateNHIF(grossSalary){
    
    if(grossSalary <= 5999){
        return 150;
    }
    else if(grossSalary <= 7999){
        return 300;
    }
    else if(grossSalary <= 11999){
        return  400;
    }
    else if(grossSalary <= 14999){
        return  500;
    }
    else if(grossSalary <= 19999){
        return  600;
    }
    else if(grossSalary <= 24999){
        return  850;
    }
    else if(grossSalary <= 34999){
        return  900;
    }
    else if(grossSalary <= 39999){
        return 950;
    }
    else if(grossSalary <= 44999){
        return 1000;
    }
    else if(grossSalary <= 49999){
        return  1100;
    }
    else if(grossSalary <= 59999){
        return 1200;
    }
    else if(grossSalary <= 69999){
        return 1300;
    }
    else if(grossSalary <= 79999){
        return  1400;
    }
    else if (grossSalary <= 89999){
        return  1500;
    }
    else if(grossSalary <= 99999){
        return  1600;
    }
    else if (grossSalary > 100000){
        return 1700;
    }
}
//function to calculate NSSF deductions
function calculateNSSF(grossSalary){
    
        return NSSF = 0.06 * grossSalary

}

//function to calculate net salary
function calculateNetSalary(basicSalary, benefits){
    let grossSalary = basicSalary + benefits
    let payee = calculatePayee(grossSalary);
    let NHIF = calculateNHIF(grossSalary); 
    let NSSF = calculateNSSF(grossSalary);
    let deductions = payee + NHIF + NSSF
    let netSalary = grossSalary - deductions
    return netSalary;
}

console.log(calculateNetSalary(70000, 12000));

