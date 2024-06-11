
import Menu from "../components/Menu"


function Home() {
    return (
        <>
        <Menu/>
        <section className="flex justify-start bg-[url('assets/Writer.jpg')] h-screen m-8 opacity-85">
            <h1 className="h-40 rounded-lg font-Dosis font-medium text-4xl text-zinc-950 shadow-2xl py-4 px-2 mx-4 my-4">Your Space is your place to share your creativity.<br/>
                <br/>Show the whole world your work.
            </h1>
        </section>
        </>
    )
}

export default Home
