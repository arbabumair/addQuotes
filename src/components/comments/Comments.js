import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import LoadingSpinner from '../UI/LoadingSpinner';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList';

import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';

import classes from './Comments.module.css';





const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const{sendRequest, data:loadedComments, status} = useHttp(getAllComments);
  const params = useParams();
  const {quoteId} = params;
  
  useEffect(()=>{
    sendRequest(quoteId);
  },[sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  
  const addedCommentHandler = useCallback(() =>{
    sendRequest(quoteId)
  },[sendRequest,quoteId]);

    let comments;

    if(status === 'pending'){
      comments = (
        <div className='centered'>
          <LoadingSpinner/>
        </div>
        );
    }

    if(status === 'completed' && (loadedComments || loadedComments.length > 0)){
      comments = <CommentsList comments={loadedComments}/>
    }

    if(status === 'completed' && (!loadedComments || loadedComments.length === 0)){
      comments = (
        <div className='centered'>
          <p>No comments were added yet!</p>
        </div>
      );
    }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onaddedcomment={addedCommentHandler}/>}
      {comments}
    </section>
  );
};

export default Comments;
