import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { ForYou } from "./pages/ForYou";

export default function App() {
  return (
    <Layout>
      <section id="home">
        <Home />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="foryou">
        <ForYou />
      </section>
    </Layout>
  );
}