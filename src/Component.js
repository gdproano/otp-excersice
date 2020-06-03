import React from 'react';

const Component = ({ data, isLoading, error }) => {
    if (!data) {
      return <p>No data yet ...</p>;
    }
  
    if (error) {
      return <p>{error.message}</p>;
    }
  
    if (isLoading) {
      return <p>Loading ...</p>;
    }
  
    return (
      <ul>
        {data.hits.map(hit =>
          <li key={hit.objectID} style={{background: 'red'}}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        )}
      </ul>
    );
  }
  export default Component