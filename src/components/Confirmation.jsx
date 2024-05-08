import image from '../assets/images/icon-thank-you.svg'

const Confirmation = () =>{
    return(
        <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full lg:py-0 py-10">
            <div className="grid gap-5 justify-center items-center">
                <img className="mx-auto block lg:w-full lg:h-full w-16" src={image} alt={'Thank you'}/>

                <p className="grid text-center">
                    <span className="font-[600] lg:text-[36px] text-[30px] text-MarineBlue">Thank you!</span>
                    <span className="text-CoolGray">Thank you for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</span>
                </p>

            </div>
        </div>
    )
}
export default Confirmation;