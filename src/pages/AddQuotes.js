import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

import useHttp  from '../hooks/use-http';
import { addQuote } from '../lib/api';

const AddQuotes = function (){
    
    const { sendRequest , status } = useHttp(addQuote);  
    const history = useHistory();

    useEffect(()=>{
        if(status === 'completed'){
            history.push('/quotes'); 
        }
    },
    [status, history]);


    const addQuoteHandler = (quoteData) =>{
        //changes page address once comment is added
        sendRequest(quoteData);
    };

    return (<QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>);
};


export default AddQuotes;