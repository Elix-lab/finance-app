function TheGuide() {
  return (
    <section className="">
      <div className="py-12 px-4 sm:px-8 lg:px-12 flex flex-col gap-5 items-center m-auto lg:grid lg:grid-cols-2 max-w-6xl">
        <div className="flex flex-col gap-5 col-start-2">
          <h2 className="max-w-3xl text-2xl font-bold text-center text-balance lg:text-3xl lg:text-start xl:text-4xl lg:max-w-5xl">
            We know how easy it is to fall behind on your finances.
          </h2>
          <p className="text-base text-muted-foreground text-center text-balance lg:text-start">
            Life gets busy. Expenses add up. And before you notice, money
            becomes another source of stress. This app was built to help staying
            on top of your finances feel simpler and less overwhelming.
          </p>
        </div>
        <img
          src="/CashWell-table.png"
          alt="CashWell last transactions table"
          className="w-md rounded-lg border shadow-md border-gray-300 shadow-brand/15 m-auto col-start-1 row-start-1"
        />
      </div>
    </section>
  );
}

export default TheGuide;
