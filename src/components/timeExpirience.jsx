
export default function TimeExp ({fechaIni}) {
    const fechaActual = new Date() 
    const fechaInicio = new Date(fechaIni);

    const diferencia = fechaActual - fechaInicio;
    const diasTotales = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const años = Math.floor(diasTotales / 365);
    const meses = Math.floor((diasTotales % 365) / 30);
    const dias = (diasTotales % 365) % 30;
    
    return (
        <span className="">{ años > 0 ? `${años} ${años === 1 ? 'year' : 'years'} and ${meses} ${meses === 1 ? 'month' : 'months'}` : `${meses} ${meses === 1 ? 'month' : 'months'}` }</span>
    )

    
    
}

