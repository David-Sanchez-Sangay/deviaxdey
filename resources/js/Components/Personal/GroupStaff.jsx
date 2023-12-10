import { SubStaff } from "./SubStaff"
import { TitleStaff } from "./TitleStaff"

export const GroupStaff = ({category}) => {
  return (
    <div>
        {
            Object.entries(category).map(([categoria, personal]) => {
                return (
                    <div key={categoria}>
                        <TitleStaff>{categoria}</TitleStaff>
                        <SubStaff>{personal}</SubStaff>
                    </div>
                )
            })
        }
    </div>
  )
}
