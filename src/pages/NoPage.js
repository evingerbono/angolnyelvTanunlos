import Model from "../model/model"
export default function NoPage(){
    const MODEL = new Model();
    const cim =MODEL.getcim()
    return(
        <h2>{cim}</h2>
    )
};
