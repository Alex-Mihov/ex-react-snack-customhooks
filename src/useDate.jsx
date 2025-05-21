import { useState, useEffect } from "react"


export default function useDate() {

    const [currDate, setCurrDate] = useState(new Date())

    useEffect(() => {

        const intervalID = setInterval(() => {
            setCurrDate(new Date())
        }, 1000);

    }, []);

    return currDate
}
