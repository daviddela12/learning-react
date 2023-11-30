export function UserName({formatUserName, name}) {
    return (
        <>
            <h1>UserName</h1>
            <h2>{formatUserName(name)}</h2>
        </>
    )
}
