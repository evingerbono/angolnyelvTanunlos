import Model from "../model/model"
export default function Gepel(){
    const MODEL = new Model();
    const cim =MODEL.getcim();
    return(
        <h2>{cim}</h2>
    )
};