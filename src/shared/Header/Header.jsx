import React from 'react';

import { Button } from '@/atoms'
import logo from '@/assets/images/logo.svg'
import avatar from '@/assets/images/avatar.png'
import './Header.styles.scss'

export const Header = () => {
  return (
    <>
      <header className='separator'>
        <div className='brand'>
          <img src={ logo } alt="Aldo Shoes" />
        </div>
        <div className='controls'>
          <div>
            <Button>
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
