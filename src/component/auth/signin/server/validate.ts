
export  function Validate(username:string|undefined,password:string|undefined)
{
    if(username=== undefined || password===undefined)
    {
        return false;
    }
    return true;
}