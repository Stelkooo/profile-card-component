import Image from 'next/image';

import ProfileImage from 'public/images/image-victor.jpg';

export default function Info() {
  return (
    <div className="relative flex justify-center pb-6 pt-[4.5rem] lg:pb-7">
      <Image
        src={ProfileImage}
        alt="Photograph of Victor"
        className="absolute -top-14 aspect-square w-[106px] rounded-full border-[5px] border-white"
      />
      <div className="flex flex-col gap-[9px] text-center">
        <p className="flex gap-2">
          Victor Crest{' '}
          <span className="font-normal text-dark-grayish-blue">26</span>
        </p>
        <p className="text-sm/none font-normal text-dark-grayish-blue">
          London
        </p>
      </div>
    </div>
  );
}
