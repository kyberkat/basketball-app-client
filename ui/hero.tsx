import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["400", "700"]
})

const Hero = () => {
    return (
        <div className="flex w-full">
           <div className={`${merriweather.className} flex w-full h-[300px] mx-auto bg-green-900 text-neutral justify-center items-center text-2xl font-bold text-white`}>
                <div>BOSTON CELTICS 2024</div>
                <div>
                    <span className="text-blue-600">N</span><span className="text-red-600">B</span><span className="text-white">A</span>
                </div>
                <div>Champs</div>
            </div> 
        </div>
    )
}

export default Hero;