import {useState} from "react";

export function ButtonWithState({initialValue}) {
    const [isFollowing, setIsFollowing] = useState(initialValue)
    const text = isFollowing ? "Siguiendo" : "Seguir"
    return (
        <>
        <button onClick={() => setIsFollowing(!isFollowing)}>{text}</button>
        </>
    )
}
