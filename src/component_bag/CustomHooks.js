export const useStateWithCallback = (initialState) => {
    const [state, setState] = useState(initialState);
    const callbackRef = useRef(() => undefined);
  
    const setStateCB = (newState, callback) => {
      callbackRef.current = callback;
      setState(newState);
    };
  
    useEffect(() => {
      callbackRef.current?.();
    }, [state]);
  
    return [state, setStateCB];
  }
  export const REGEX = {
    //   SECRETE_CODE:"((?=(.*?\\d){2,2})(?=(.*?[a-zA-Z]){2,2}))",
      SECRETE_CODE:"((?=^.{4,4}$)(?=(.*?\\d){2,2})(?=(.*?[a-zA-Z]){2,2}))",
      EMAIL:"^(.+)@(\\S+)$",
      ORIGIN_ID:""
  }
  export const REGEX_CHECKER = (fieldName,myString, pattern)=>{
    if(pattern===null){
      return undefined;
    }
    else{
      let regex = new RegExp(pattern);
      let regexState = regex.test(myString);
      if(regexState){
        return null
      }
      else{
        return fieldName;
      }
    }
      
}
  export const CHECK_REGEX = (fieldNamemyString, pattern)=>{
    let regex = new RegExp(pattern);
    let regexState = regex.test(myString);
    return regexState;   
}