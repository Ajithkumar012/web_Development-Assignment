function isleep(year)
{
    if(year%4===0){
        if(year%100===0){
          if(year%400===0){
            return "is leep year."
          }
          else
          {
            return "not a leep yaer"
          }
        }
        else
        {
            return "is leep year."
        }
        
    }
    else{
        return "not a leep yaer"
    }
}
var leep = isleep(1985);
console.log(leep)