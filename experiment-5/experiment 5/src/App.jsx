import { lazy, Suspense } from "react";

const LazyImage = lazy(() => import("./LazyImage"));

function App() {
  return (
    <div style={{ padding: "100px", fontFamily: "Arial" }}>
      {/* Text loads immediately */}
      <h1>Welcome to My App</h1>
      <p>
        Text is rendered immediately. The image below is lazy loaded.
      </p>

      {/* Image is lazy loaded */}
      <Suspense fallback={<p>Loading image...</p>}>
        <LazyImage />
      </Suspense>
    </div>
  );
}

export default App;