const stakes = [
  'Expenses become easy to lose track of',
  'Budgeting starts feeling like too much work',
  'Progress becomes hard to see',
  'Small financial decisions create unnecessary stress',
]

function Stakes() {
  return (
    <div className="flex flex-col items-center gap-5 py-12 px-4">
      <h2 className="max-w-3xl text-2xl font-bold text-center text-balance lg:text-3xl xl:text-4xl lg:max-w-5xl">
        Money becomes harder to manage when you don&apos;t know where it&apos;s going.
      </h2>
      <ul className="flex flex-col gap-3 max-w-6xl lg:grid lg:grid-cols-2">
        {stakes.map((stake,index) => (
          <li key={index} className="border border-gray-300 shadow-md shadow-gray-100 rounded-lg font-medium text-center p-3 bg-background lg:p-5 hover:bg-red-100 transition-all">
            {stake}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stakes;
