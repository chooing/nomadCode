import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coinArr, setCoinArr] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(
        (response) => response.json() //json으로 값 받기
      )
      .then((json) => {
        setCoinArr(json); // json 데이터 넘겨받기
        setLoading(false); //loading 화면 없애기
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({loading ? "0" : coinArr.length})</h1>
      {loading ? (
        <strong>Loading...🏃‍♂️</strong>
      ) : (
        <ul>
          {coinArr.map((coin) => (
            <li key={coin.id}>
              {coin.name}({coin.symbol}): ${coin.quotes.USD.price}(USD)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
