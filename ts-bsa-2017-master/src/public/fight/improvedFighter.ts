// Create class ImprovedFighter
import { Fighter } from "./fighter";

export class ImprovedFighter extends Fighter {
  doubleHit(enemy:Fighter, point:number):void{
    super.hit(enemy, point * 2);
  }
}
