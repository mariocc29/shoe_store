import React, { useEffect, useState } from 'react'

export const useInterval = () => {
  const minutesAgo = 10;
  const [minutesAgoDate, setMinutesAgoDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedMinutesAgoDate = new Date();
      updatedMinutesAgoDate.setMinutes(updatedMinutesAgoDate.getMinutes() - minutesAgo);
      setMinutesAgoDate(updatedMinutesAgoDate);
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return minutesAgoDate;
}