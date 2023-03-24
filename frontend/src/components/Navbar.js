function Navbar() {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand">SUTHub</a>
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          ค้นหา
        </button>
      </form>
    </nav>
  );
}
export default Navbar;
