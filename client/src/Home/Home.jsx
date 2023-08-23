import Navbar from "../components/Navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img
        src="https://img.freepik.com/free-vector/forest-scene-with-various-forest-trees_1308-58896.jpg?w=1060&t=st=1692771289~exp=1692771889~hmac=eea8528d727c8b5539d8cc8089dc255f81ea86ad212d8fc153ce8b3e62d8c53f"
        alt=""
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Home;
