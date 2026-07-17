function AccountForm() {
  return (
    <form action="" className="w-full h-auto bg-card border border-gray-300 shadow-md shadow-gray-100 rounded-card p-6">
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" placeholder="Name goes here"/>
    </form>
  );
}

export default AccountForm;
