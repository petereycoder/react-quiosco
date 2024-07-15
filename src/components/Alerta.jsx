export default function Alerta({errors, filtro}) {
    const arr = errors ? Object.values(errors) : [];
    let error = '';

    arr.forEach(element => {
        element.forEach(m => {
            if(m.includes(filtro)){
                error = m
            }
        });
    });

    return (
        <div className="text-red-500 p-1 mt-2 font-bold">
            {error}
        </div>
    )
}
