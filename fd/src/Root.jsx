function Root() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        position: "relative",
        marginLeft: "1%",
      }}
    >
      <h1 style={{ marginBottom: "5rem" }}>React Hooks</h1>
      <div>
        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "5rem",
            fontSize: "1.3rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <span style={{ fontWeight: 700 }}>React</span> is a popular
            JavaScript library used for building user interfaces. It allows
            developers to create reusable UI components and efficiently update
            and manage the state of those components. React follows a
            component-based architecture, where the UI is divided into smaller,
            self-contained components that can be composed together to create
            complex UIs.
          </div>
          <div>
            <span style={{ fontWeight: 700 }}>React Hooks</span>, introduced in
            React version 16.8, are functions that allow you to use state and
            other React features in functional components. Before hooks, state
            and other component-related functionalities were primarily available
            in class components. Hooks provide a way to use these features in a
            more concise and intuitive manner within functional components.
          </div>
          <div>
            <span style={{ fontWeight: 700 }}>Using React Hooks</span>, you can
            manage component state using the useState hook, perform side effects
            such as data fetching using the useEffect hook, create custom hooks
            to reuse logic across multiple components, and more. Hooks promote
            code reusability, modularity, and make it easier to write and
            maintain React components.
          </div>
          <div>
            <span style={{ fontWeight: 700 }}> In summary</span>, React is a
            JavaScript library for building user interfaces, and React Hooks are
            a feature that allows you to use state and other React features
            within functional components. They provide a more modern and concise
            way of working with React and offer benefits like code reusability
            and improved component organization.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Root;
