import { RouterProvider } from "react-router-dom";
// import Header from "./Header/Header";
import { appRouter } from "./Router/Router";


function App() {
  return (
        <>
        {/* <Header /> */}
        <RouterProvider router={appRouter}></RouterProvider>
        </>
  );
}

export default App;
