import "./App.css";
import OUR_CMPNT from "./component/OUR_CMPNT";
import data from "./data.json";

function App() {
  return (
    <div className="div">
      {data.map((i) => {
        return (
          <div>
            <OUR_CMPNT
              img={i.logo}
              one={i.company}
              news={i.new}
              // New={news}
              featured={i.featured}
              job={i.position}
              date={i.postedAt}
              time={i.contract}
              place={i.location}
              skill={i.languages}
              tools={i.tools}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
