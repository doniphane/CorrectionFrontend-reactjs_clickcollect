import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/store/authStore"


function LoginPage() {
  const {login,logout} = useAuthStore()

  function handleClick(){
    login("coucou");
  }
  return (
    <div>
      <Button onClick={handleClick}>Login</Button>
      <Button onClick={logout}>Logout</Button>



    </div>
  )
}

export default LoginPage