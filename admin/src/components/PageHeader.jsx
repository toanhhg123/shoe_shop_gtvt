const PageHeader = ({ title = "", from, to }) => {
  return (
    <div className="page-header">
      <h3 className="page-title"> {title}</h3>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">{from}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {to}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default PageHeader;
