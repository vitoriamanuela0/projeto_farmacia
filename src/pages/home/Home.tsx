function Home() {
    return (
        <>
            <div className="bg-indigo-500 flex justify-center py-10">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 text-white">
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-bold text-center">
                            Seja Bem Vindo!
                        </h2>
                        <p className="text-xl text-center">
                            Farmácia Generation
                        </p>

                        <div className="flex justify-center gap-4 mt-6">
                            <div className="rounded text-white border-white border-solid border-2 py-2 px-4 cursor-pointer hover:bg-white hover:text-indigo-400 transition-all">
                                Nova Consulta
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-6 sm:mt-0">
                        <img
                            src="https://e-dtp.pl/wp-content/uploads/2021/04/linkedinZasob-2img.png"
                            alt="Imagem Página Home"
                            width="400px"
                            className="w-2/3 max-w-full"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;