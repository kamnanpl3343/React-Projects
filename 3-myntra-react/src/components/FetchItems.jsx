import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/ItemSlice";
import { FetchItemAction } from "../store/FetchItemSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchItems);
  const dispatch = useDispatch();
  console.log(fetchStatus);

  useEffect(() => {
    if (fetchStatus.fetchStatusVal) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(FetchItemAction.markfetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      // .then((data) => console.log("data is", data))
      .then((data) => {
        dispatch(FetchItemAction.markfetchStatus());
        dispatch(FetchItemAction.markfetchingEnded());
        dispatch(itemsActions.addItems(data.items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};
export default FetchItems;
