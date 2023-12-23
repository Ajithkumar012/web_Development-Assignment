function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
    
    if(year%4===0||year%100===0||year%100===0)
    {
     return "Leap year.";
     
    }
    else{
        return "Not Leap year.";
    }
    
    /**************Don't change the code below****************/    
    }
   var leep= isLeap(1989);
   console.log(leep);