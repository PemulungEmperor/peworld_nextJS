const ButtonEmployee = ({ skill }) => {
  return (
    <button className="btn btn-md p-2 text-white me-2" style={{ borderRadius: 10, backgroundColor: "#FDD074" }}>
      {skill}
    </button>
  );
};

export default ButtonEmployee;
