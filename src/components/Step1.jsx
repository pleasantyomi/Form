/* eslint-disable react/prop-types */
import { useState } from "react";

const Step1 = (props) =>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")


    return(
        <div>
            <h1 className="grid pb-5">
                <span className="font-[700] text-[32px] text-MarineBlue">{props.title}</span>
                <span className="text-CoolGray">{props.subtitle}</span>
            </h1>

            <form className="grid gap-5">
                <div className="grid gap-2">
                    <label className="text-MarineBlue">Name</label>
                    <input placeholder="e.g Stephen King" type="name" value={name} onChange={(e)=> setName(e.target.value)} className="w-full outline outline-[1px] outline-LightGray font-[500] text-LightGray py-2 px-2 rounded-md focus:outline-[1px] focus:outline-MarineBlue"/>
                </div>

                <div className="grid gap-2">
                    <label className="text-Primary-MarineBlue">Email Address</label>
                    <input placeholder="e.g StephenKing@lorem.com" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="w-full outline outline-[1px] outline-LightGray font-[500] text-LightGray py-2 px-2 rounded-md focus:outline-[1px] focus:outline-MarineBlue"/>
                </div>

                <div className="grid gap-2">
                    <label className="text-Primary-MarineBlue">Phone Number</label>
                    <input placeholder="e.g +1 234 567 890" type="phone" value={phone} onChange={(e)=> setPhone(e.target.value)} className="w-full outline outline-[1px] outline-LightGray font-[500] text-LightGray py-2 px-2 rounded-md focus:outline-[1px] focus:outline-MarineBlue"/>
                </div>
            </form>
            
        </div>
    )
}
export default Step1;