function bmi(weight,height)
{
  
  var bmiCalc = weight/(height**2);
  //console.log(Math.round(bmiCalc));
  return Math.round(bmiCalc);
}
bmi(65, 1.8); 