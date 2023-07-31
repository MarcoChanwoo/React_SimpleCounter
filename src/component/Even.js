import { useEffect } from "react";

function Even(){
    useEffect(()=>{
        return()=>{
            console.log("Even component unmount");
        };
    }, []);
    
    return <div>Even Number</div>;
}
export default Even;