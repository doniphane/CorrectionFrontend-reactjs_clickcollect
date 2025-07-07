import { NavLink } from "react-router-dom"
import Logo from "./Logo"
import { ShoppingCart } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md rounded-b-2xl">
      <NavLink to="/" end className="flex items-center hover:bg-gray-100 rounded-xl px-2 py-1 transition">
        <Logo />
      </NavLink>
      <NavLink to="/products" end className="mx-2 text-gray-700 font-medium hover:text-primary transition-colors">My Products</NavLink> 
      <div className="flex items-center gap-6">
        <NavLink 
          to="/cart" 
          end 
          className="flex items-center hover:bg-gray-100 rounded-xl px-3 py-2 transition"
        >
          <ShoppingCart className="h-6 w-6" />
        </NavLink>
        <NavLink 
          to="/login" 
          end 
        
        >
          <span className="font-medium"><Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar></span>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
