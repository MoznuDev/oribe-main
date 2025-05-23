import React from "react";
import Image from "./Image";
import Cat from "../assets/cat.png";
import Buscate from "../assets/producttwo.jpg";
import Badge from "./Badge";
import { FaHeartbeat, FaShoppingCart } from "react-icons/fa";
import Flex from "./Flex";
import { IoGitCompare } from "react-icons/io5";
import Container from "./Container";
import Text from "./Text";

const SpecialOffer = () => {
  return (
    <>
      <Container>
      <Text texts={'Special Offer'} as={'h3'} className={'pb-3 font-dm font-bold text-[39px]'}/>
        <Flex className={'justify-between'}>
        <div className="w-[23%] relative mb-16 group">
        <Image imgSrc={Cat} />
        <Badge text={"New"} className={"absolute top-5 left-5"} />
        <div className="w-full p-5 bg-white absolute bottom-9 left-0 invisible group-hover:visible">
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Wish List</p> <FaHeartbeat />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Compare</p> <IoGitCompare />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Cart</p> <FaShoppingCart /> 
          </Flex>
        </div>
        <Flex className={'justify-between mt-2 p-4'}>
          <Text texts={'Basic Crew Neck Tee'} as={'p'}/>
          <Text texts={'$45.00'} as={'p'}/>
        </Flex>
      </div>

     
        <div className="w-[23%] relative mb-16 group">
        <Image imgSrc={Buscate} />
        <Badge text={"New"} className={"absolute top-5 left-5"} />
        <div className="w-full p-5 bg-white absolute bottom-9 left-0 invisible group-hover:visible">
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Wish List</p> <FaHeartbeat />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Compare</p> <IoGitCompare />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Cart</p> <FaShoppingCart /> 
          </Flex>
        </div>
        <Flex className={'justify-between mt-2 p-4'}>
          <Text texts={'Basic Crew Neck Tee'} as={'p'}/>
          <Text texts={'$45.00'} as={'p'}/>
        </Flex>
      </div>
        <div className="w-[23%] relative mb-16 group">
        <Image imgSrc={Cat} />
        <Badge text={"New"} className={"absolute top-5 left-5"} />
        <div className="w-full p-5 bg-white absolute bottom-9 left-0 invisible group-hover:visible">
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Wish List</p> <FaHeartbeat />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Compare</p> <IoGitCompare />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Cart</p> <FaShoppingCart /> 
          </Flex>
        </div>
        <Flex className={'justify-between mt-2 p-4'}>
          <Text texts={'Basic Crew Neck Tee'} as={'p'}/>
          <Text texts={'$45.00'} as={'p'}/>
        </Flex>
      </div>
        <div className="w-[23%] relative mb-16 group">
        <Image imgSrc={Buscate} />
        <Badge text={"New"} className={"absolute top-5 left-5"} />
        <div className="w-full p-5 bg-white absolute bottom-9 left-0 invisible group-hover:visible">
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Wish List</p> <FaHeartbeat />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Compare</p> <IoGitCompare />
          </Flex>
          <Flex className={'justify-end items-center gap-x-3'}>
          <p className="font-dm text-md text-menuC">Add to Cart</p> <FaShoppingCart /> 
          </Flex>
        </div>
        <Flex className={'justify-between mt-2 p-4'}>
          <Text texts={'Basic Crew Neck Tee'} as={'p'}/>
          <Text texts={'$45.00'} as={'p'}/>
        </Flex>
      </div>
        </Flex>
     
      </Container>
    </>
  )
}

export default SpecialOffer