export function Title({title, enlace}) {
    const a = "v"
    return (
        <>
        <h1 style={{color: '#F00', fontFamily: 'system-ui'}}>{title}</h1>
        <a href={`http://${enlace}`}>Enlace ejemplo</a>
        </>
    )
}
