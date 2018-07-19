import { Fighter } from "./fight/fighter";
import { ImprovedFighter } from "./fight/improvedFighter";
import { fight } from "./fight/fight";

// create two instances
var unit1 = new Fighter("Mike", 100, 1);
var unit2 = new ImprovedFighter("Bob", 120, 1);

// call fight function
fight(unit1, unit2, 20, 50, 60, 40);


