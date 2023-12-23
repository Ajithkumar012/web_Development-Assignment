function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        var finalAge = 90;
        var remainAge = finalAge-age;
        
        var No_days = 365*remainAge;
        var No_weeks = 52*remainAge;
        var No_Months =12*remainAge;
        
        
        console.log("You have "+No_days+" days, "+ No_weeks+" weeks, and "+No_Months+" months left");
        
    /*************Don't change the code below**********/
    }
    
    lifeInWeeks(56);