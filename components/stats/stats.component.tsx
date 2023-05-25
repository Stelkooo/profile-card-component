export default function Stats() {
  return (
    <div className="flex justify-between border-t border-t-light-gray px-10 py-6 text-center">
      <div>
        <p className="uppercase">80k</p>
        <p className="text-[10px]/3 font-normal tracking-[1.5px] text-dark-grayish-blue">
          Followers
        </p>
      </div>
      <div>
        <p className="uppercase">803k</p>
        <p className="text-[10px]/3 font-normal tracking-[1.5px] text-dark-grayish-blue">
          Likes
        </p>
      </div>
      <div>
        <p className="uppercase">1.4k</p>
        <p className="text-[10px]/3 font-normal tracking-[1.5px] text-dark-grayish-blue">
          Photos
        </p>
      </div>
    </div>
  );
}
