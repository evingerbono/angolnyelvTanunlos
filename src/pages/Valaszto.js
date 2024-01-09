import Model from "../model/model"
export default function Valaszto() {
    const MODEL = new Model();
    const cim = MODEL.getcim()
    const mondat = MODEL.aktMondat(2);
    return (
        <div>
            <h2>{cim}</h2>
            <p>{mondat}</p>
        </div>
    )
};