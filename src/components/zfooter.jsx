export default function Footer(){
    return(
        <>
            <footer className="p-4 mx-auto text-slate-100 md:grid md:grid-cols-3 max-w-md ">
                <h2 className="text-lg text-center p-1">
                    Coded by: 
                    <a className=" p-1 rounded-lg hover:bg-slate-100 hover:text-zinc-800 transition-all duration-300" href="https://denito37.github.io/wdp/" target="_blank" rel="noopener noreferrer">
                        Me
                    </a> 
                </h2>
                <h2 className="text-lg text-center p-1">
                    <a className=" p-1 rounded-lg hover:bg-slate-100 hover:text-zinc-800 transition-all duration-300" href="https://github.com/Denito37" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                </h2>
                <h2 className=" text-lg text-center p-1">
                    <a  className=" p-1 rounded-lg hover:bg-slate-100 hover:text-zinc-800 transition-all duration-300" href="https://www.linkedin.com/in/dennes-lopez-99907618a/" target="_blank" rel="noopener noreferrer">
                        Linkedin
                    </a>
                </h2>
            </footer>
        </>
    )
}