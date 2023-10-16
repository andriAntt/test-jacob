import { useState } from "react";
import Image from "next/image";

import { Button, Layout, Modal } from "../components";

import { IconMinus, IconPlus, IconReverse } from "@/public/icons";

import shoes from "@/public/images/shoes.webp";
import subtract from "@/public/images/subtract.svg";
import borders from "@/public/images/borders.svg";
import bordersGray from "@/public/images/exclude.svg";
import shoesMobile from "@/public/images/shoes-mobile.webp";
import subtractMobile from "@/public/images/exclude-mobile.svg";
import bordersMobile from "@/public/images/borders-mobile.svg";

const IndexPage = () => {
 const [isOpenModal, setIsOpenModal] = useState(false);

 const handleOpenModal = () => setIsOpenModal(true);
 const handleCloseModal = () => setIsOpenModal(false);

 return (
  <Layout>
   <div className="flex items-center justify-center w-full h-screen">
    <Button className="min-w-[120px] h-[43px]" onClick={handleOpenModal}>
     <span className="text-base">Open</span>
    </Button>
    <Modal
     isOpen={isOpenModal}
     onClose={handleCloseModal}
     title={"Adjust Photo"}
     description={"Adjust the photo to fill the outline"}
     containerClass="w-full md:w-[547px]"
    >
     <div className="relative w-[393px] h-[709px] mx-auto md:w-[547px] md:h-[547px]">
      <div className="hidden md:block">
       <Image
        alt="Shoes"
        src={shoes}
        placeholder="blur"
        quality={100}
        fill
        style={{
         objectFit: "cover",
        }}
       />
      </div>
      <div className="md:hidden">
       <Image
        alt="Shoes"
        src={shoesMobile}
        placeholder="blur"
        quality={100}
        fill
        style={{
         objectFit: "cover",
        }}
       />
      </div>
      <div className="hidden md:block">
       <Image
        alt="subtract"
        src={subtract}
        quality={100}
        fill
        style={{
         objectFit: "cover",
        }}
       />
      </div>
      <div className="md:hidden">
       <Image
        alt="subtract"
        src={subtractMobile}
        quality={100}
        fill
        style={{
         objectFit: "cover",
        }}
       />
      </div>
      <div className="hidden md:block">
       <Image
        alt=""
        src={borders}
        className="absolute top-[59px] left-[52px] w-[452px] h-[429px]"
       />
      </div>
      <div className="md:hidden">
       <Image
        alt=""
        src={bordersMobile}
        className="absolute top-[203px] left-[20px] w-[355px] h-[310px]"
       />
      </div>
      <div className="hidden md:block">
       <Image
        alt="subtract"
        src={bordersGray}
        quality={100}
        fill
        style={{
         objectFit: "cover",
        }}
       />
      </div>
     </div>
     <div
      className={`flex items-center justify-between px-4 py-[15px] md:py-[17px]`}
     >
      <div className={`flex gap-5`}>
       <div className={`hidden gap-1 md:flex`}>
        <button onClick={() => {}} className="fill-black">
         <IconMinus />
        </button>
        <button onClick={() => {}} className="fill-black">
         <IconPlus />
        </button>
       </div>
       <button onClick={() => {}} className="fill-black">
        <IconReverse />
       </button>
      </div>
      <Button className="min-w-[120px] h-[43px]" onClick={handleCloseModal}>
       <span className="text-base">Accept</span>
      </Button>
     </div>
    </Modal>
   </div>
  </Layout>
 );
};

export default IndexPage;
