interface StoreFunc{
   [key:string]:any
}
class BrokerWithKey {
   static replyFunc:StoreFunc={}
   get(key:string){
    return BrokerWithKey.replyFunc[key];
   }
   set(key:string,val:any){
      BrokerWithKey.replyFunc[key] = val;
   }

}

const MyBroker = new BrokerWithKey();
export default MyBroker;