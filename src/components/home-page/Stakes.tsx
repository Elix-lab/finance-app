const stakes = [
  "Expenses become easy to lose track of",
  "Budgeting starts feeling like too much work",
  "Progress becomes hard to see",
  "Small financial decisions create unnecessary stress",
];

function Stakes() {
  return (
    <section className="">
      <div className="flex flex-col items-center gap-5 m-auto py-12 px-4 sm:px-8 lg:px-12 max-w-6xl">
        <h2 className="text-2xl font-bold text-center text-balance md:max-w-xl lg:max-w-3xl lg:text-3xl xl:text-4xl">
          Money becomes harder to manage when you don&apos;t know where
          it&apos;s going.
        </h2>
        <ul className="flex flex-col gap-3 md:grid grid-cols-2 w-full">
          {stakes.map((stake, index) => (
            <li
              key={index}
              className="flex items-center justify-center border rounded-lg p-3 lg:p-5 shadow-md border-red-300 shadow-red-100 hover:bg-red-50"
            >
              <p className="text-sm font-medium text-center">{stake}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Stakes;
