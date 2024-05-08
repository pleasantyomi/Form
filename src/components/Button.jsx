/* eslint-disable react/prop-types */
const Button = ({text, onClick, info, className}) =>{
    return(
        <button onClick={onClick} className="flex items-center gap-5">
            <button className={`${className} w-8 h-8 rounded-full outline outline-[1px] outline-white text-white font-[500] `}>{text}</button>
            <p className="lg:grid hidden leading-[1.2] uppercase font-[600] text-white text-left">
                <span className="font-thin text-[12px] text-LightGray">step {text}</span>
                <span>{info}</span>
            </p>
        </button>
    )
}
export default Button;{'${page === 0} : bg-LightGray  text-PurplishBlue outline-0 ? '}