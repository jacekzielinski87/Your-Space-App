
import Menu from "../components/Menu"


function Home() {
    return (
        <>
        <Menu/>
        <section className="bg-[url('assets/Writer.jpg')] h-screen py-40">
            <h1 className="flex justify-center items-center font-Rubik text-5xl text-slate-900/95 p-2">Your Space is your place to share your creativity</h1>
            <h1 className="flex justify-center items-center text-slate-900/95 font-Rubik text-5xl p-2">Show the whole world yours works</h1>
        </section>
       </>
    )
}

export default Home
