import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getItemDetail } from 'api';

import { BreadCrumb, Button, Spinner } from 'ui';

import classes from './item-detail.module.scss';

export default function ItemDetail() {
  const { id } = useParams();

  const [item, setItem] = useState([]),
    [loading, setLoading] = useState(false),
    [categories, setCategories] = useState([]);

  useEffect(() => {
    const search = () => {
      setLoading(true);

      getItemDetail.get(id).then(data => {
        setItem(data.item);
        setCategories(data.categories);
        setLoading(false);
      });
    };
    search();
  }, [id]);

  const decimals = number => {
    if (number < 10) return number.toString() + 0;
    else return number;
  };

  let viewItems;

  if (item) {
    console.log('item -->',item);
    viewItems = (
      <>
        <BreadCrumb items={categories} />
        <section className={classes.item}>
          <div className={classes.item__detail}>
            <figure>
              <img src={item.picture} alt={item.title} />
            </figure>
          </div>

          <div className={classes.item__price}>
            <div className={classes.item__price_condition}>
              {item.condition === 'new' ? 'Nuevo' : 'Usado'}
              {' - '}
              {item.sold_quantity} vendidos
            </div>
            <h1>{item.title}</h1>
            <div className={classes.item__price_amount}>
              $ {item.price && item.price.amount.toLocaleString('de-DE')}
              <span>{item.price && decimals(item.price.decimals)}</span>
            </div>
            <Button>Comprar</Button>
          </div>
        </section>
        <section className={classes.item__detail_description}>
          <div>
            <h2>Descripción del producto</h2>
            <p>{item.description}</p>
          </div>
        </section>
      </>
    );
  }

  return (
    <div className={classes.container}>{loading ? <Spinner /> : viewItems}</div>
  );
}
