// import RootLayout from "./component/RootLayout";

// function App() {
//   return (
//     <div className="App">
//       <RootLayout></RootLayout>
//     </div>
//   );
// }

// export default App;

import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import routes from "./routers/routes";

function App() {
  return (
    <Suspense>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
