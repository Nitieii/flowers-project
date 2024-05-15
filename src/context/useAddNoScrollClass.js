import { useEffect } from "react";

function useAddNoScrollClass(trigger) {
  useEffect(() => {
    const addNoScrollClass = () => {
      document.body.classList.add("no-scroll");
    };

    const removeNoScrollClass = () => {
      document.body.classList.remove("no-scroll");
    };

    if (trigger) {
      addNoScrollClass();
    } else {
      removeNoScrollClass();
    }

    return () => {
      removeNoScrollClass();
    };
  }, [trigger]);
}

export default useAddNoScrollClass;
