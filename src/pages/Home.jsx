
import Menu from "../components/Menu"


function Home() {
    return (
        <div>
        <Menu/>
        <section className="bg-[url('assets/Writer.jpg')] h-screen py-16">
            <h1 className="flex justify-center items-center font-Rubik text-3xl text-slate-900/95 my-2 p-2">
            Your space to Twoja przestrzeń do plublikacji swojej twórczości.</h1>
            <h1 className="flex justify-center items-center text-slate-900/95 font-Rubik text-3xl">Dziel się z innymi swoimi pracami, aby mogli je komentować i oceniać.</h1>
        </section>
       </div>
    )
}

export default Home
