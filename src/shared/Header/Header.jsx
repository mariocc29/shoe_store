import React from 'react';

import { Button } from '@/atoms'
import logo from '@/assets/images/logo.svg'
import avatar from '@/assets/images/avatar.png'
import './Header.styles.scss'

export const Header = () => {

  const handleGoToNotifications = () => {
    console.log('TODO: Implement notification path')
  }

  return (
    <>
      <header className='separator'>
        <div className='brand'>
          <img src={ logo } alt="Aldo Shoes" />
        </div>
        <div className='controls'>
          <div>
            <Button onClick={handleGoToNotifications}>
              <i className="icon-bell" />
            </Button>
          </div>
          <div className='avatar'>
            <img src={ avatar } alt="Jhon Doe" />
          </div>
        </div>
      </header>
    </>
  )
}
