import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { searchItem } from 'api';
import Item from './Item';

import { Spinner, BreadCrumb, EmptyErrorPage } from 'ui';

import classes from './items-list.module.scss';

export default function ItemsList() {
  const { location } = useHistory(),
    term = new URLSearchParams(location.search).get('search');

  const [items, setItems] = useState([]),
    [loading, setLoading] = useState(false),
    [categories, setCategories] = useState([]);

  useEffect(() => {
    const search = () => {
      setLoading(true);

      searchItem.get(term).then(data => {
        setItems(data.items);
        setCategories(data.categories);
        setLoading(false);
      });
    };
    search();
  }, [term]);

  let viewItems;

  if (items.length > 0) {
    viewItems = (
      <>
        <BreadCrumb items={categories} />
        <section className={classes.container__content}>
          {items.map(item => (
            <Item key={item.id} {...item} />
          ))}
        </section>
      </>
    );
  }

  return (
    <div className={classes.container}>{loading ? <Spinner /> : viewItems}</div>
  );
}
