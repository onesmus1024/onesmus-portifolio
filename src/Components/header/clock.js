import { useEffect, useState } from 'react';

export default function Clock() {
    const [second, setSecond] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hour, setHour] = useState(0);
    
    useEffect(() => {

        const interval = setInterval(() =>{
            setSecond(second + 1);
            if (second === 59) {
                setSecond(0);
                setMinutes(minutes + 1);
                if (minutes === 59) {
                    setMinutes(0);
                    setHour(hour + 1);
                }
            }
        }, 1000)

        return () => clearInterval(interval);  

    });
    
    return (
        <div class="clock">
            <p><span>{hour.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:{second.toString().padStart(2, "0")}</span></p>
        </div>
    );
}