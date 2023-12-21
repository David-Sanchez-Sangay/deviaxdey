import { deleteTeacher } from "../../api";

export const DeleteButton = ({index}) => {
    

    const borrarPersonal = () => {
        deleteTeacher(index)
    }
  
      return (
          <div className="flex items-center justify-center">
              <button 
              onClick={borrarPersonal}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-4">
                  Borrar Personal
              </button>
          </div>
      );
}