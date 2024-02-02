import { useEffect, useState, useRef } from "react";
import { Cost } from "../costs";
import { Friend } from "../friends";


export function useCostsAndFriends(
  key: string,
  initialValue: Friend[] | Cost[],
  setter: (value: Friend[] | Cost[]) => void
) {
  const [data, setData] = useState<Friend[] | Cost[]>(initialValue);
  const initialValueRef = useRef<Friend[] | Cost[]>(initialValue);

  useEffect(() => {
    const savedDataStr = localStorage.getItem(key);
    const parsedData: Friend[] | Cost[] = savedDataStr
      ? JSON.parse(savedDataStr)
      : initialValueRef.current;

    if (JSON.stringify(parsedData) !== JSON.stringify(data)) {
      setter(parsedData);
      setData(parsedData);
    }
  }, [key, setter]);

  return data;
}
