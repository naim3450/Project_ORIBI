import React, { useRef } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import MenuBer from '../MenuBer'
import Peragraph from '../Peragraph'
import Input from '../Input'
import { FaSearch } from "react-icons/fa";
import Contacticon from '../Contacticon'
import { RiShoppingCartFill } from "react-icons/ri";

const SubHeadder = () => {

    let dropRaef = useRef(null)

    
    let btn = () => {
        if (dropRaef.current.style.display == "none") {
            dropRaef.current.style.display = "block"
        }
        else {
            dropRaef.current.style.display = "none"
        }
    }
    let dropRaef2 = useRef(null)

    let btn2 = () => {
        if (dropRaef2.current.style.display == "none") {
            dropRaef2.current.style.display = "block"
        }
        else {
            dropRaef2.current.style.display = "none"
        }
    }
    return (
        <section className="py-[40px] border-t border-borderColor shadow-sHborder">
            <Container>
                <Flex className="items-center justify-between">
                    <Flex className="items-center w-[155px] justify-between">
                        <button onClick={btn} className="group relative">
                            <MenuBer />
                        </button>
                        <Peragraph className="" text="Shop by Category" as="h3" />
                    </Flex>

                    <Flex className="items-center w-[600px] justify-between">
                        <Input className="py-[16px] pl-[21px] border-none pr-[370px]" type="text" placeholder="Search Products" />
                        <FaSearch className="text-[20px] text-black" />
                    </Flex>

                    <Flex className="items-center w-[100px] justify-between">
                        <button onClick={btn2} className='relative' href="#">
                            <Contacticon className="text-[25px]" />
                        </button>
                        <a href="#">
                            <RiShoppingCartFill className="text-[25px]" />
                        </a>
                    </Flex>
                </Flex>
                <div ref={dropRaef} className='hidden'>
                    <ul className="bg-black w-[120px] h-[150px] absolute top-[149px] left-[171px]">
                        <li className="font-serif font-medium text-white py-[5px] pl-[15px] text-[18px] hover:pl-[20px] hover:border-b">Home</li>
                        <li className="font-serif font-medium text-white py-[5px] pl-[15px] text-[18px] hover:pl-[20px] hover:border">About</li>
                        <li className="font-serif font-medium text-white py-[5px] pl-[15px] text-[18px] hover:pl-[20px] hover:border">Contact</li>
                        <li className="font-serif font-medium text-white py-[5px] pl-[15px] text-[18px] hover:pl-[20px] hover:border-t">Service</li>
                    </ul>
                </div>

                <div ref={dropRaef2} className="hidden w-[110px] group bg-black absolute top-[149px] right-[260px]">
                    <div className="w-[110px] py-[10px] px-[22px] group-hover:bg-white">
                        <button className='text-white text-[20px] group-hover:text-black font-serif font-medium'>SingUp</button>
                    </div>

                    <div className="w-[110px] py-[10px] px-[22px] bg-white group-hover:bg-black">
                        <button className='group-hover:text-white text-[20px] text-black font-serif font-medium'>Login</button>
                    </div>
                </div>
            </Container>

        </section>
    )
}

export default SubHeadder