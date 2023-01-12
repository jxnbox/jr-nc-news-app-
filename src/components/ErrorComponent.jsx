import { useEffect, useState } from "react";

function ErrorComponent({apiError, setError}) {
    const [errorMsg, setErrorMsg] = useState('')

    const [errObj, setErrObj] = useState({
        ERR_NETWORK : '503 Service Unavailable'
    })

    useEffect(() => {

    }, [apiError, errorMsg])

    console.log(apiError)
    return (
        <p className="errorMsg">ERROR: {errObj[apiError.code]}</p>
    )
}

export default ErrorComponent;