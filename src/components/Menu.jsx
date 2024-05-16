import React from 'react'
import Flex from './Flex'
import List from './List'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <ul>
        <Flex className="gap-[40px]">
          <Link to={`/`}>
            <List className="hover:text-liHover font-bold" text="Home"/>
          </Link>
          <Link to={`/shop`}>
            <List className="hover:text-liHover font-bold" text="Shop"/>
          </Link>
            <List className="hover:text-liHover font-bold" text="About"/>
            <List className="hover:text-liHover font-bold" text="Contacts"/>
            <List className="hover:text-liHover font-bold" text="Journal"/>
        </Flex>
    </ul>
  )
}

export default Menu