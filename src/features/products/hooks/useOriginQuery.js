import {useLocation} from "react-router-dom";
import {useMemo} from "react";

export const useOriginQuery = () => {
  const location = new URLSearchParams(useLocation().search);
  const origins = location.get('origins');

  const array = useMemo(() => {
    return origins ? origins.split(',') : [];
  },[origins])

  return array;
}
