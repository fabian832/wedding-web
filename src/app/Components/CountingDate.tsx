"use client";
import React, { useEffect, useState } from 'react';

const CountingDate = () => {
    const targetDate = new Date("2024-12-31");
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const updateCountdown = () => {
            const currentDate = new Date();
            const timeDifference = targetDate.getTime() - currentDate.getTime();

            if (timeDifference < 0) {
                setTimeRemaining({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
                return; 
            }

            const daysRemaining = Math.floor(timeDifference / (1000 * 3600 * 24));
            const hoursRemaining = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
            const minutesRemaining = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
            const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

            setTimeRemaining({
                days: daysRemaining,
                hours: hoursRemaining,
                minutes: minutesRemaining,
                seconds: secondsRemaining,
            });
        };

        updateCountdown(); 

        const intervalId = setInterval(updateCountdown, 1000);

        return () => clearInterval(intervalId); 
    }, []); 

    return (
        <span className='font-bold'>
            {timeRemaining.days} DAYS, {timeRemaining.hours} HOURS, {timeRemaining.minutes} MINUTES, {timeRemaining.seconds} SECONDS TO GO!
        </span>
    );
}

export default CountingDate;
