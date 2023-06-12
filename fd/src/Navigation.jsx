function Navigation() {
  const path = window.location.pathname;
  const links = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Task", href: "/task" },
    { id: 3, name: "Theme Toggle", href: "/theme_toggle" },
    { id: 4, name: "Fetch Data", href: "/fetch" },
  ];

  const listLinks = links.map((link) => (
    <a
      href={link.href}
      key={link.id}
      style={{
        color: "#E2E2E2",
        padding: "1rem",
        backgroundColor: path == link.href ? "#77B28C" : "",
        width: "100%",
      }}
    >
      {link.name}
    </a>
  ));

  return (
    <div
      style={{
        width: "19%",
        height: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#157A6E",
        // backgroundImage:
        //   "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {listLinks}
      </div>
    </div>
  );
}

export default Navigation;
