import { useEffect, useRef } from 'react';

export const useObserver = (ref, canLoad, isLoading, callback) => {
  const observer = useRef();

  useEffect(() => {
    //Если посты загружаются,то новый observer не делаем
    if (isLoading) return;
    //Если observer создан и в его current что-то есть,то тогда отключаем наблюдение за всеми элементами, за которыми наблюдает observer в текущий момент
    if (observer.current) observer.current.disconnect();

    const cb = function (entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLoading]);
};
