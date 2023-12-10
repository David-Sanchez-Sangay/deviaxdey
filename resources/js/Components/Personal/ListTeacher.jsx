import { useEffect, useState } from "react"
import { GroupStaff } from "./GroupStaff"
import { getTeachers } from "../../api";

export const ListTeacher = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [teachers, setTeachers] = useState([])
    const [category, setCategory] = useState({})

    useEffect(() => {
      async function LoadTeachers () {
        try {
          const responseData = await getTeachers()
          setTeachers(responseData)
          setIsLoading(false)
        } catch (error) {
          console.log("Error: ", error)
          setIsLoading(false)
        }
      }
      LoadTeachers()
    },[])

    useEffect(() => {
      if (!isLoading) {
        const personalPorCargo = Object.values(teachers).reduce((grupos, personal) => {
          const cargo = personal.cargo
          if (!grupos[cargo]) {
            grupos[cargo] = {}
          }
          grupos[cargo][personal.id] = personal
          return grupos
        }, {})
        setCategory(personalPorCargo)
      }
    }, [isLoading, teachers])


    return (
    <div>
      {
          isLoading
          ? 'Cargando...'
          : ''
        }
         <GroupStaff category={category} />
    </div>
  )
}