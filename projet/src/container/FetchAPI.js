import { useState, useCallback } from 'react';

export const FetchAPI = initialData => {
  const [state, setState] = useState(initialData);
  const [initialFetchedState, setInitialFetchedState] = useState(initialData);

  const fetchCallback = useCallback(
    async (fetchUrl, method = 'GET', body = null) => {
      const headers = new Headers();
      headers.set('Content-Type', 'application/json');

      const response = await fetch(fetchUrl, {
        method,
        headers,
        body
      });

      const data = await response.json();
      setState(data);
      setInitialFetchedState(data);
    },
    []
  );

  return [state, fetchCallback, setState, initialFetchedState];
};
