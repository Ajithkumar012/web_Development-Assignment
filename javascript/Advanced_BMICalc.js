function bmiCalculator(weight, height) {
     var bmi = weight/Math.pow(height,2);
     bmi = bmi.toFixed(1);
     console.log(bmi);
     if(bmi<18.5)
     {
        return "Your BMI is " +bmi+ ", so you are underweight.";
     }   
     if(bmi>=18.5 && bmi<24.9)
     {
        return "Your BMI is " +bmi+ ", so you are Normal.";
     }
      if(bmi>=24.9)
      {
        return "Your BMI is " +bmi+ ", so you are Overweightweight.";
      }
}
var Bmicalc = bmiCalculator(80,1.8);
console.log(Bmicalc);