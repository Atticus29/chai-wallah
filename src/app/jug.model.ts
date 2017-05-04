export class Jug {
  public dateAdded: Date = new Date();
  public volume: number = 64;
  constructor(public name: string, public brand: string, public price: number, public flavor: string) { }

  removeCup(){
    if(this.volume >= 8){
      this.volume -= 8;
    } else{
      alert("Can't pour a cup that doesn't exist!");
    }
  }

  pour(number){
    if(this.volume >= number){
      this.volume -= number;
    } else{
      alert("Not enough chai remains");
    }
  }
}
