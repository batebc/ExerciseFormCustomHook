export const Button = ({ title, type }) => {
  return (
    <div className="d-grid gap-2 mt-5">
      <button className="btn btn-light block" type={type}>
        {title}
      </button>
    </div>
  );
};
