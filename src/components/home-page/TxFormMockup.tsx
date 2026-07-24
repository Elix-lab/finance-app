import TxNatureIcon from "../ui/TxNatureIcon";

function TxFormMockup() {
  return (
    <div className="rounded-3xl bg-card border border-border p-6 shadow-xl shadow-primary/5 max-w-md mx-auto w-full">
      {/* title */}
      <div className="flex items-center gap-2.5">
        <TxNatureIcon txNature="expense" size="small" />
        <p className="text-sm font-semibold">Add Expense</p>
      </div>
      {/* form */}
      <div className="space-y-3 mt-6">
        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground">Amount</p>
          <div className="rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm">
            $20
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground">Title</p>
          <div className="rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm">
            Streaming Subscription
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground">Category</p>
          <div className="rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm">
            Entertainment
          </div>
        </div>
      </div>
        <div className="mt-8 rounded-4xl bg-destructive px-4 py-3 text-sm text-center font-semibold text-white">Save Expense</div>
    </div>
  );
}

export default TxFormMockup;
