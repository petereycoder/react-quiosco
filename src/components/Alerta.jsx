export default function Alerta({errors, filtro}) {
    const arr = errors ? Object.values(errors) : [];
    let error = '';

    arr.forEach(element => {
        element.forEach(m => {
            if(m.includes(filtro)){
                if(filtro === 'sinfiltro'){
                    let cad = m.replace("sinfiltro", '');
                    error = cad
                }else{
                    error = m
                }
            }else{
            }
        });
    });

    return (
        <div className="text-red-500 p-1 mt-2 font-bold">
            {error}
        </div>
    )
}
