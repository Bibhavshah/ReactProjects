import Header from "./Components/Header";
import Card from "./Components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        image={item.imageUrl}
        location={item.location}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        Url={item.googleMapsUrl}
      />
    );
  });

  return (
    <div className="App">
      <Header />
      <section>
        {cards}
      </section>
    </div>
  );
}

export default App;
