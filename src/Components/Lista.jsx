import React from 'react'

const Lista = ({doctores}) => {
    console.log(doctores)
  return (
    <div>
        <ul>
        {doctores.map(doctor => <li key={doctor.id}>
            {doctor.id} - {doctor.nombre} - {doctor.especialidad}
        </li>)}
        </ul>
    </div>
  )
}

export default Lista