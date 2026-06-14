const stakes = [
  'Expenses become easy to lose track of',
  'Budgeting starts feeling like too much work',
  'Progress becomes hard to see',
  'Small financial decisions create unnecessary stress',
]

function Stakes() {
  return (
    <div className="flex flex-col items-center gap-5 py-12 px-4">
      <h2 className="text-2xl font-bold text-center text-balance lg:text-3xl xl:text-4xl max-w-6xl">
        Money becomes harder to manage when you don&apos;t know where it&apos;s going.
      </h2>
      <ul className="grid grid-cols-2 gap-5 w-6xl">
        {stakes.map((stake,index) => (
          <li key={index} className="border border-green-200 shadow-md shadow-green-100 rounded-lg font-medium text-center p-5 hover:bg-green-50">
            {stake}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stakes;
