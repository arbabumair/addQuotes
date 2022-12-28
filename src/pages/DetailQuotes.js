import React, { useEffect } from 'react'
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom';

import useHttp from '../hooks/use-http';
import  {getSingleQuote} from '../lib/api';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const DetailQuotes = function (){
    const match = useRouteMatch();
    const params = useParams()
    const {quoteId} = params;

    const { sendRequest , data:loadedQuote, status, error } = useHttp(getSingleQuote, true);
    
    useEffect(()=>{
        sendRequest(quoteId);
    },[sendRequest, quoteId]);
    
    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner/>
            </div>
        ) 
    }
    
    if (error){
        return (
            <p className='centered'>{error}</p>
        );
    }

    if (!loadedQuote.text){
        return (
            <p>No Quote Found!</p>
        )
    }


    return ( 
    <React.Fragment>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Route path={`${match.path}`} exact>
            <div className='centered'>
                <Link className='btn--flat' to={`${match.url}/comments`}> Load Comments</Link>
            </div>
            </Route>
            {/* <Route path={`/quotes/${params.quoteId}/comments`}> */}
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>

    </React.Fragment>
    
    );
};


export default DetailQuotes; 