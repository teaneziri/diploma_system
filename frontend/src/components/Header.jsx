const Header = ({ studentName, onLogout }) => {
  return (
    <header className="flex justify-between items-center bg-[rgba(36,64,130,1)] text-white p-4 shadow">
      <h2 className="text-xl font-semibold ">Mirësevini, {studentName}!</h2>
      <button
        onClick={onLogout}
        className="bg-white text-[rgba(36,64,130,1)] px-4 py-2 rounded hover:bg-red-500 hover:text-white transition-colors duration-300"
      >
        Dil
      </button>
    </header>
  );
};

export default Header;
