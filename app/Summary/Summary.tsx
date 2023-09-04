import React from 'react'
import Img from "@/public/engineer.jpeg";
import Image from 'next/image';
import { BsShare } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";

const Summary = () => {
  return (
    <>
    <div className="shadow-lg rounded-lg overflow-hidden">
  {/* <!-- Full-width image --> */}
  <Image src={Img} alt="Image" className="w-full" /> 

  {/* <!-- Icons (Location and Share) --> */}
  <div className="flex justify-between p-3">
    <div className="flex items-center">
      <MdOutlineLocationOn size={20}/> {/*<!-- Location Icon --> */}
      <span>Location</span>
    </div>
    <div className="flex items-center">
      <BsShare size={20}/>  {/*  <!-- Share Icon --> */}
      <span>Share</span>
    </div>
  </div>

{/* {  <!-- Content Div --> } */}
  <div className="p-4">
    <h2 className="text-xl font-semibold">Card Content Title</h2>
    <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fugit debitis deleniti rem ratione quia aspernatur qui ea culpa, cum totam in veniam repellendus ullam harum laudantium libero nesciunt quas.</p>
  </div>

  {/* <!-- Two Images (Left and Right) --> */}
  <div className="flex gap-3 justify-between p-3">
    <Image src={Img} alt="Left Image" className="w-5/12" />
    <Image src={Img} alt="Right Image" className="w-5/12" />
  </div>
</div>

    </>
  )
}

export default Summary