import {Fighter} from "./fighter"

export { fight };


async function fight(fighter:Fighter, improvedFighter:Fighter, ...rest) {

  let indexOfPoint = 0;

  while (fighter.getHealth() > 0 && improvedFighter.getHealth() > 0) {
    switch (indexOfPoint % 2) {
      case 0:
        fighter.hit(improvedFighter, rest[indexOfPoint]);
        indexOfPoint++;
        break;

      case 1:
        improvedFighter.hit(fighter, rest[indexOfPoint]);
        indexOfPoint++;
        break;
    }
  }
  switch (indexOfPoint % 2) {
    case 0:
      console.log(`${fighter.getName()} knocked down`);
      var text = await improvedFighter.knockout();
      console.log(`${improvedFighter.getName()} won by K.O.`);
      break;

    case 1:
      console.log(`${improvedFighter.getName()} knocked down`);
      var text = await fighter.knockout();
      console.log(`${fighter.getName()} won by K.O.`);
      break;
  }
}
