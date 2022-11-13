import { useState } from "react"

export const useFetching = (callback) => {
    const [error, setError] = useState('')

    const fetching = async () => {
        try {
            await callback()
        } catch(e) {
            setError(e.message)
        } finally { }
    }

    return [fetching, error]
}