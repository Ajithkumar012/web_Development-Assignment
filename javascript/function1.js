function getMilk(Money) {   
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
    var cost = Math.floor(Money/1.5) ;  
    console.log("Buy "+ cost +" Bottle of Milk");
    var balance = Money-cost;
    var round_bal = parseFloat(balance.toFixed(1)); //cutting off the decimal values
    console.log("get the balance money "+round_bal+ " from the shop");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  getMilk(10);
  