import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import Classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);
  // console.log(location);


  function changeSortingHandler(){
    // history.push('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'));
    
    //Extracting location instead hardcoding
    // history.push(`${location.pathname}?sort=${(isSortingAscending ? 'desc' : 'asc')}`);

    //more readable link
    history.push({
      pathname:location.pathname,
      search:`?sort=${(isSortingAscending ? 'desc' : 'asc')}`
    });
  };
  
  return (
    <React.Fragment>
      <div className={Classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={Classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default QuoteList;
