import { useEffect, useState } from "react"

export const TitleStaff = ({ children }) => {
  
  const [title, setTitle] = useState('');
  
  useEffect(() => {
    const titlesMapping = {
      'directiva': 'PLANA DIRECTIVA',
      'docente-1': 'PLANA DOCENTE - PRIMERO GRADO',
      'docente-2': 'PLANA DOCENTE - SEGUNDO GRADO',
      'docente-3': 'PLANA DOCENTE - TERCERO GRADO',
      'docente-4': 'PLANA DOCENTE - CUARTO GRADO',
      'docente-5': 'PLANA DOCENTE - QUINTO GRADO',
      'docente-6': 'PLANA DOCENTE - SEXTO GRADO',
      'fisica': 'PLANA DOCENTE - EDUCACIÓN FÍSICA',
      'aip': 'PLANA DOCENTE - AIP',
      'administrativo': 'PERSONAL ADMINISTRATIVO',
      'psicologia': 'PERSONAL DE PSICOLOGÍA'
    };

    setTitle(titlesMapping[children]);
  }, [children]);

  
  return (
    <div className="bg-slate-100 ">
        <h1 className="py-4 text-red-800 text-center text-5xl font-bold">{title}</h1>
    </div>
  )
}
