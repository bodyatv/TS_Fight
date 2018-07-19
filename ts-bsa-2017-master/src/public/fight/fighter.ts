export interface IFighter{
    setDamage(damage:number):void;
    hit(enemy:Fighter,point:number):void;
    knockout: () => Promise<void>;
    getName():string;
    getHealth():number;
    getPower():number;
}

export class Fighter implements IFighter{
    private name:string;
    private health:number;
    private power:number; 
    constructor(name:string="noName", health:number= 100, power:number = 10){
        this.name=name;
        this.health=health;
        this.power=power;
    }

    setDamage(damage:number=0):void{
        this.health = this.health - damage;
        console.log(`Health value: ${this.health}`);
    }

    hit(enemy:Fighter, point:number):void{
        enemy.setDamage(point * this.power);
    }

    knockout() {
        console.log("time is over");
        var promise = new Promise<void>((resolve, reject) => {
          setTimeout(resolve, 500);
        });

        promise.then(
            ()=>{console.log("KNOCKOUT!!");},
            ()=>{console.log('Promise rejected');}
        );
        return promise;
    }
    
    getName():string{
        return this.name;
    }
    
    getHealth():number{
        return this.health;
    }
    
    getPower():number{
        return this.power;
    }

}

