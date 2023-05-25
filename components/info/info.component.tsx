import Image from 'next/image';

import ProfileImage from 'public/images/image-victor.jpg';

export default function Info() {
  return (
    <div className="relative flex justify-center pb-6 pt-[4.5rem]">
      <Image
        src={ProfileImage}
        alt="Photograph of Victor"
        className="absolute -top-12 aspect-square w-[101px] rounded-full border-[5px] border-white"
      />
      <div className="flex flex-col gap-2 text-center">
        <p>
          Victor Crest{' '}
          <span className="font-normal text-dark-grayish-blue">26</span>
        </p>
        <p className="text-sm/tight font-normal text-dark-grayish-blue">
          London
        </p>
      </div>
    </div>
  );
}
