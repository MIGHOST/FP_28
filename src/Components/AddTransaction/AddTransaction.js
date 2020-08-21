import React, { useEffect } from "react";

const AddTransaction = ({ modalCloser }) => {
  function closeModalWithEsc(e) {
    if (e.key !== "Escape") return;
    modalCloser();
  }

  useEffect(() => {
    window.addEventListener("keydown", closeModalWithEsc);
    return () => {
      window.removeEventListener("keydown", closeModalWithEsc);
    };
  }, []);
  return (
    <div>
      <p>це модалка</p>
      <button onClick={() => modalCloser()}>це закривачка</button>
    </div>
  );
};

export default AddTransaction;
