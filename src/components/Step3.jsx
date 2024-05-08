/* eslint-disable react/prop-types */
const Step3 = (props) =>{
    return(
        <div>
            <h1 className="grid pb-5">
                <span className="font-[700] text-[32px] text-MarineBlue">{props.title}</span>
                <span className="text-CoolGray">{props.subtitle}</span>
            </h1>
        </div>
    )
}
export default Step3;