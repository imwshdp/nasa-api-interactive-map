import { useState } from "react"

const useFetching = (callback) => {
    const [error, setError] = useState('')

    const fetching = async () => {
        try {
            await callback()
        } catch (e) {
            setError(e.message)
        } finally { }
    }

    return [fetching, error]
}

export default useFetching;