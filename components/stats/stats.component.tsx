import Counter from '../counter/counter.component';

type Stat = {
  name: string;
  amount: number;
};

const stats: Stat[] = [
  { name: 'Followers', amount: 80 },
  { name: 'Likes', amount: 803 },
  { name: 'Photos', amount: 1.4 },
];

export default function Stats() {
  const getJustifySelf = (index: number) => {
    if (index === 0) {
      return 'justify-self-start';
    }
    if (index === 1) {
      return 'justify-self-center';
    }
    return 'justify-self-end';
  };
  return (
    <div className="grid grid-cols-3 justify-between border-t border-t-light-gray px-12 py-6">
      {stats.map((stat, index) => (
        <div
          key={stat.name}
          className={`flex flex-col gap-[5px] ${getJustifySelf(
            index
          )} text-center`}
        >
          <p className="uppercase">
            {/* <Counter to={stat.amount} />k */}
            {stat.amount}k
          </p>
          <p className="text-[10px]/3 font-normal tracking-[1.5px] text-dark-grayish-blue">
            {stat.name}
          </p>
        </div>
      ))}
    </div>
  );
}
