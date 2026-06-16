import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";

const summaries = ["income", "expenses"];
// Conditional rendering data
const config = {
  income: {
    label: "Total Income",
    Icon: IoIosTrendingUp,
    bgClass: "bg-green-100",
    textClass: "text-income",
    amount: 3150,
  },
  expenses: {
    label: "Total Expenses",
    Icon: IoIosTrendingDown,
    bgClass: "bg-red-100",
    textClass: "text-expenses",
    amount: 40,
  },
};

function ValueProposition() {
  return (
    <section className="bg-brand/5">
      <div className="py-12 px-4 sm:px-8 lg:px-12 flex flex-col gap-5 items-center m-auto lg:grid lg:grid-cols-2 max-w-6xl">
        {/* Content */}
        <div className="flex flex-col items-center gap-5 lg:items-start">
          <h2 className="text-2xl font-bold text-center text-balance md:max-w-xl lg:max-w-3xl lg:text-3xl xl:text-4xl lg:text-start">
            Always know where you stand financially.
          </h2>
          <p className="text-base text-muted-foreground text-center text-balance lg:text-start">
            Open the app and instantly understand your balance, your spending,
            and how much room you have to make your next financial move with
            confidence.
          </p>
          {/* Summaries */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {summaries.map((summary) => {
              const { label, Icon, bgClass, textClass, amount } = config[summary];
              return (
                <div
                  key={summary}
                  className="flex items-center gap-2 p-4 bg-background border rounded-lg shadow-md border-gray-300 shadow-brand/15"
                >
                  <span
                    className={`flex justify-center items-center p-2 rounded-md ${bgClass}`}
                  >
                    <Icon className={`text-lg ${textClass} sm:text-xl`} />
                  </span>
                  <div>
                    <p className="text-xs sm:text-sm">{label}</p>
                    <span
                      className={`text-base font-medium ${textClass} sm:text-lg`}
                    >
                      ${amount}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Image */}
        <img
          src="/CashWell-modal.jpg"
          alt="CashWell modal"
          className="hidden w-md rounded-lg border shadow-md border-gray-300 shadow-brand/15 m-auto lg:inline"
        />
      </div>
    </section>
  );
}

export default ValueProposition;
