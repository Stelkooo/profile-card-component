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
  return (
    <div className="flex justify-between border-t border-t-light-gray px-10 py-6 text-center">
      {stats.map((stat) => (
        <div key={stat.name}>
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
