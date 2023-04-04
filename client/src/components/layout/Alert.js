import React from 'react'
import { useContext } from 'react'
import AlertContext from '../../contexts/alert/AlertContext'
import {BiErrorCircle} from 'react-icons/bi'

const Alert = () => {

  const {alert} = useContext(AlertContext)


  return alert !== null && (
    <div className='flex items-start mb-4 space-x-2'>
      {alert.type === 'error' && (
        <BiErrorCircle className='ml-8 text-3xl' />
      )}
      <p className='flex-1 text-base font-semibold leading-7 text-white'>
        <strong>{alert.message}</strong>
      </p>
    </div>
  )
}

export default Alert