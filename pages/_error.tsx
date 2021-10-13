import { useRouter } from "next/router"
import { useEffect } from "react"
const _error = () => {
    const router = useRouter()
    useEffect(() => {
        router.replace('/')
    })

    return (
        <div>
            
        </div>
    )
}

export default _error
