import {ADD_ALUMNO, DELETE_ALUMNO, EDIT_ALUMNO} from '../constants/action_types'

const initialState = {
  curso: '2-1-B',
  alumnos: [
    {
      id: 1,
      nombre: "Jorge",
      apellido: "Perez"
    },
    {
      id: 2,
      nombre: "Gustavo",
      apellido: "González"
    },
    {
      id: 3,
      nombre: 'Pedro',
      apellido: 'Barrios'
    }
  ]
}

function rootReducer(state=initialState, action) {

    switch (action.type) {
      case ADD_ALUMNO:
        state = Object.assign({}, state , {
          alumnos: state.alumnos.concat(action.data)
        })
        break

      case DELETE_ALUMNO:

        const aux = state.alumnos.filter(element => element.id !== action.data.id)
        state = Object.assign({}, state , {
         alumnos: aux
        }) 

        break

      case EDIT_ALUMNO:

        break

      default:
        
        break
    }
    return state
  }
  
  export default rootReducer
  