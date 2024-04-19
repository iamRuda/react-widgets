import React, { useState, useEffect } from 'react';
import { Observable, interval } from 'rxjs';
import { take } from 'rxjs/operators';

const cardStyle = {
    border: '1px solid black',
    margin: '0.5em',
    margin: '0.5em',
    width: '16em',
    height: '16em',
    wordWrap: 'break-word'
  };

const RxComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Создаем поток данных RxJS, который генерирует значения каждую секунду
    const randomInterval = Math.floor(Math.random() * 2000 + 1000); // Generate a random interval between 0 and 5000 milliseconds
    const observable = interval(randomInterval).pipe(
        take(10) // Ограничиваем количество генерируемых значений до 10
    );

    // Подписываемся на поток данных и обновляем состояние компонента при получении новых значений
    const subscription = observable.subscribe(value => {
      setData(value);
    });

    // Отписываемся от потока данных при размонтировании компонента
    return () => {
      subscription.unsubscribe();
    };
  }, []); // Пустой массив зависимостей означает, что эффект будет запущен только один раз при монтировании компонента

  return (
    <div style={cardStyle}>
      <h3>RxJS Component</h3>
      <p>Data from RxJS stream: {data}</p>
    </div>
  );
};

export default RxComponent;
