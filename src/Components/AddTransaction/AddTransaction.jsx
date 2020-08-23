import React, { useState, useEffect } from "react";
import styles from "./AddTransaction.module.css";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addTtansaction } from "../../redux/actions/transactionTableData";

const category = [
  "category1",
  "category2",
  "category3",
  "category4",
  "category5",
  "category6",
  "category7",
  "category8",
  "category9",
  "category10",
  "category11",
];

const AddTransaction = ({ modalCloser }) => {
  const [categiryList, setCategiryList] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      date: `${moment(Date.now()).format("YYYY-MM-DDThh:mm")}`,
      type: "-",
      category: "category",
      commentary: "",
      sum: "",
    },
    onSubmit: (values) => {
      if (!values.date) values.date = moment(Date.now());
      if (values.category === "category") values.category = "profit";
      dispatch(addTtansaction(values));
      formik.resetForm();
      modalCloser();
    },
  });

  const selectHandler = () => {
    setCategiryList(!categiryList);
  };

  // from main page logic

  function closeModalWithEsc(e) {
    if (e.key !== "Escape") return;
    modalCloser();
  }

  function closeWithClick(e) {
    if (e.target.dataset.name !== "addTransactionOverlay") {
      return;
    }
    modalCloser();
  }

  useEffect(() => {
    window.addEventListener("keydown", closeModalWithEsc);
    return () => {
      window.removeEventListener("keydown", closeModalWithEsc);
    };
  }, []);

  //

  return (
    <div
      className={styles.Overlay}
      data-name="addTransactionOverlay"
      onClick={closeWithClick}
    >
      <div className={styles.Container}>
        <div className={styles.HeadingContainer}>
          <h3 className={styles.FormHeader}>add a transaction</h3>
        </div>
        <form
          action=""
          className={styles.AddingForrm}
          onSubmit={formik.handleSubmit}
        >
          <div className={styles.RadioContainer}>
            <div className={`${styles.FormRadio} ${styles.Profit}`}>
              <input
                id="profit"
                type="radio"
                name="type"
                value="+"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="profit">Profit</label>
            </div>

            <div className={`${styles.FormRadio} ${styles.Cost}`}>
              <input
                id="cost"
                type="radio"
                name="type"
                value="-"
                defaultChecked
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="cost">Cost</label>
            </div>
          </div>
          {formik.values.type === "-" && (
            <div className={styles.CategoryContainer}>
              <div className={`${styles.Input} ${styles.Category}`}>
                <p onClick={selectHandler} className={styles.SelectHeading}>
                  {formik.values.category}
                </p>

                <div
                  className={
                    categiryList
                      ? `${styles.CategoryList} ${styles.CategoryContainerVisible}`
                      : styles.CategoryList
                  }
                >
                  {!!category.length &&
                    category.map((el, index) => (
                      <div
                        key={index}
                        className={`${styles.FormRadio} ${styles.CategoryRadio}`}
                      >
                        <input
                          id={el}
                          type="radio"
                          name="category"
                          value={el}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          onClick={selectHandler}
                        />
                        <label htmlFor={el}>{el}</label>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          <div className={styles.InputContainer}>
            <input
              type="text"
              placeholder="0.00"
              name="sum"
              value={formik.values.sum}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${styles.Input} ${styles.Sum}`}
            />
            <input
              type="datetime-local"
              name="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${styles.Input} ${styles.Date}`}
            />
          </div>
          <label htmlFor="commentary">Description</label>
          <textarea
            className={`${styles.Description} ${styles.Input}`}
            name="commentary"
            id=""
            cols="30"
            rows="10"
            value={formik.values.commentary}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          <button type="submit" className={styles.Btn}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;

/*
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

export default AddTransaction; */
