import { PrismaClient } from "@prisma/client";
let instance:any=null;
class StateUtility {
    prismaCl ;
  constructor() {
    
    if (instance) {
      return;
    }
    this.prismaCl = new PrismaClient();
    instance = this;
  }
}

let stateUtilityInstance = Object.freeze(new StateUtility());
const prisma = stateUtilityInstance.prismaCl
export default prisma||new PrismaClient();