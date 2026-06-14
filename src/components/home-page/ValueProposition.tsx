function ValueProposition() {
  return (
    <div className="flex flex-col items-center gap-5 py-12 px-4 bg-green-50">
      <h2 className="max-w-3xl text-2xl font-bold text-center text-balance lg:text-3xl xl:text-4xl lg:max-w-5xl">
        Always know where you stand financially.
      </h2>
      <p className="text-base text-muted-foreground text-center text-balance lg:text-start lg:text-xl">Open the app and instantly understand your balance, your spending, and how much room you have to make your next financial move with confidence.</p>
      <div className="flex items-center gap-2 bg-card border">
            {/* Icon */}
            <span className={`flex justify-center items-center p-2 rounded-md`}>
              {/* <Icon className={`text-lg sm:text-xl`} /> */}
            </span>
            <div>
              {/* Income/expenses label */}
              <p className="text-xs sm:text-sm">Income</p>
              {/* Amount */}
              <span className={`text-base font-medium sm:text-lg`}>
                $3000
              </span>
            </div>
          </div>
    </div>
  );
}

export default ValueProposition;
