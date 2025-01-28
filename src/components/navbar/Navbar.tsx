import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-blue-500 text-white'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">Famácia</Link>

                    <div className='flex gap-4'>
                        Produtos
                        Categorias
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar