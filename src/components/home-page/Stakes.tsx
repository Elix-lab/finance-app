const stakes = [
  'Expenses become easy to lose track of',
  'Budgeting starts feeling like too much work',
  'Progress becomes hard to see',
  'Small financial decisions create unnecessary stress',
]

function Stakes() {
  return (
    <section className="flex flex-col items-center gap-5 py-12 px-4">
      <h2 className="max-w-3xl text-2xl font-bold text-center text-balance lg:text-3xl xl:text-4xl lg:max-w-5xl">
        Money becomes harder to manage when you don&apos;t know where it&apos;s going.
      </h2>
      <ul className="flex flex-col gap-3 max-w-6xl lg:grid lg:grid-cols-2">
        {stakes.map((stake,index) => (
          <li key={index} className="border rounded-lg font-medium text-center p-3  lg:p-5  shadow-md border-red-300 shadow-red-100 hover:bg-red-50 transition-all">
            {stake}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Stakes;
