/* eslint-disable no-unused-vars */
import Button from './Button'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Confirmation from './Confirmation';
import { useState } from 'react';

const Container = () =>{
    const [page , setPage] = useState(0)
    const displayPage = () =>{
        if (page === 0){
            return<Step1 title="Personal info" subtitle="Please provide your name, email address, and phone number."/>
        }
        else if (page === 1){
            return<Step2 title="Select your plan" subtitle="You have the option  of monthly or yearly billing."/>
        }
        else if (page === 2){
            return<Step3 title="Pick add-ons" subtitle="Add-ons help enhance your gaming experience." />
        }
        else if (page === 3){
            return<Step4 title="Finishing up" subtitle="Double-check everything looks OK before confirming." />
        }
        else if (page ===4 ){
            return<Confirmation/>
        }
    }

    const nextPage = () =>{
        setPage(page + 1)
    }

    const prevPage = () =>{
        setPage(page - 1)
    }

    return(
        <div>
            <div className="absolute lg:top-1/2 top-0 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-8/12 w-full lg:p-5 lg:mx-auto lg:bg-white rounded-lg h-fit">
                <div className="grid lg:grid-cols-3">
                    <div className="lg:w-full w-screen bg-no-repeat bg-contain lg:h-[80vh] h-[70vh] lg:bg-desktopbg bg-mobilebg">
                        <div className="lg:grid flex justify-center lg:justify-start items-center lg:gap-8 gap-4 lg:p-7 p-10">
                            <Button onClick={()=>{setPage(0)}} text='1' info='your info' className={`${page === 0 ? 'bg-LightGray text-MarineBlue outline-0 outline-transparent' : ''}`}/>
                            <Button onClick={()=>{setPage(1)}} text='2' info='select plan' className={`${page === 1 ? 'bg-LightGray text-MarineBlue outline-0 outline-transparent' : ''} `}/>
                            <Button onClick={()=>{setPage(2)}} text='3' info='add-ons' className={`${page === 2 ? 'bg-LightGray text-MarineBlue outline-0 outline-transparent' : ''} `}/>
                            <Button onClick={()=>{setPage(3)}}   text='4' info='summary' className={`${page === 3 ?  'bg-LightGray text-MarineBlue outline-0 outline-transparent' : ''} `}/>
                        </div>
                    </div>

                    <div className="lg:hidden block bg-white w-11/12 mx-auto p-7 rounded-md absolute left-1/2 -translate-x-1/2 top-[6.5rem]">
                        {displayPage()}
                    </div>

                    <div className="lg:relative lg:w-10/12 w-11/12 mx-auto col-span-2 pt-10">
                        <div className="lg:block hidden">
                             {displayPage()}
                        </div>
                        <div className="lg:mt-16">
                            <div className="flex items-center justify-between">
                                <button onClick={prevPage} disabled={page == 0} hidden={page == 4}  className="capitalize font-[400] text-CoolGray text-lg flex-shrink-0 flex-nowrap hover:text-MarineBlue">{page === 0 ? "" : "go back"}</button>
                                <button onClick={nextPage} hidden={page == 4} className="capitalize font-[400] bg-MarineBlue text-lg text-white flex-shrink-0 flex-nowrap rounded-md px-3 py-2 hover:bg-PurplishBlue" >{page === 3 ? "Confirm" : "next step"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Container;