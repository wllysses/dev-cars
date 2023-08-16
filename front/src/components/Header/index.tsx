import { Link } from "react-router-dom";
import { Menu } from "../Menu";

export function Header() {

    return(
        <div className="p-4 border-b animate-myFade">
            <div className="container mx-auto">
                <header className="flex items-center justify-between">
                    <Link to="/">
                        <h1 className="text-36"><span className="font-bold">Dev</span>Cars</h1>
                    </Link>
                    
                    <Menu />
                </header>
            </div>
        </div>
    )
}
