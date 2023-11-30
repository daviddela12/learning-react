export function TitleWithSpreadOperator({title, enlace}) {
    return (
        <>
        <h1 style={{color: '#F00', fontFamily: 'system-ui'}}>{title}</h1>
        <a href={`http://${enlace}`}>Enlace ejemplo</a>
        </>
    )
}
