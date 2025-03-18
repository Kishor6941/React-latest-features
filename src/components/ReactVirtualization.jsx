import { List } from "react-virtualized";
import "react-virtualized/styles.css";

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

const ReactVirtualization = () => {
  const rowRenderer = ({ index, key, style }) => (
    <div key={key} style={style} className="list-item">
      {items[index]}
    </div>
  );

  return (
    <div className="offset-3 mt-5">
      <h1>React Virtualization</h1>
      <List
        width={400} // List width
        height={300} // Viewport height
        rowHeight={50} // Height of each row
        rowCount={items.length} // Total items
        rowRenderer={rowRenderer} // Function to render each row
      />
    </div>
  );
};

export default ReactVirtualization;
