function Stakes() {
  return (
    <div className="flex flex-col items-center gap-5 py-8">
      <h2 className="text-2xl/snug font-medium text-balance text-center">
        {/* Money becomes harder to manage when you don’t know where it’s going. */}
        Do you know where you money is going?
      </h2>
      <ul className="list-disc list-inside">
        <li>Expenses become easy to lose track of</li>
        <li>Budgeting starts feeling like too much work</li>
        <li>Progress becomes hard to see</li>
        <li>Small financial decisions create unnecessary stress</li>
      </ul>
    </div>
  );
}

export default Stakes;
