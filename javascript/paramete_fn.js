function getMilk(Money, costPerbottle) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
       //Round down decimal value
    console.log("Buy "+ calcBottle(Money,costPerbottle)  +" Bottle of Milk");
    //cutting off the decimal values
   
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    calcChange(Money, costPerbottle);
  }
  function calcBottle(startMoney, costPerbottle)
  {
    var cost = Math.floor(startMoney/ costPerbottle) ;  
    return cost;
  }
  function calcChange(startMoney, costPerbottle)
  {
    var change = startMoney % costPerbottle;
    console.log(change);
  }
  var getChange = getMilk(10, 1.5);
  