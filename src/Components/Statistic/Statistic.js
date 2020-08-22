import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Scrollbars } from "react-custom-scrollbars";

import { FormControl, MenuItem } from "@material-ui/core";
import {
  useStyles,
  StyledInputLabel,
  StyledSelect,
} from "./MaterialUiStatistic";

import debounce from "../../helpers/debounce";
import { screenSizes } from "../../constants";
import styles from "./Statistic.module.css";
import { state } from "./HardCode";

const Statistic = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [initialState, setInitialState] = useState({ month: "", year: "" });
  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInitialState({ ...initialState, [name]: value });
  };
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setScreenWidth(window.innerWidth);
    }, 1000);
    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [screenWidth]);

  const dataPieCharts = {
    labels: state.map((el) => el.category),
    datasets: [
      {
        data: state.map((el) => el.sum),
        backgroundColor: state.map((el) => el.color),
        borderWidth: 1,
      },
    ],
  };
  const classes = useStyles();

  return (
    <div className={styles.Wrapper}>
      {screenSizes.medium < screenWidth && (
        <header className={styles.Header}>
          <h2 className={styles.HeaderTitle}>Статистиска</h2>
        </header>
      )}
      <div className={styles.WrapperPie}>
        <Pie
          data={dataPieCharts}
          legend={{
            display: false,
          }}
          width={265}
          height={265}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      <div className={styles.WrapperSelect}>
        <FormControl variant="outlined" className={classes.formControl}>
          <StyledInputLabel id="months-select-outlined-label">
            Месяц
          </StyledInputLabel>
          <StyledSelect
            labelId="months-select-outlined-label"
            id="months-select-outlined"
            value={initialState.month}
            name="month"
            onChange={inputHandler}
            label="Месяц"
          >
            <MenuItem value={"January"}>January</MenuItem>
            <MenuItem value={"February"}>February</MenuItem>
            <MenuItem value={"March"}>March</MenuItem>
          </StyledSelect>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <StyledInputLabel id="years-select-outlined-label">
            Год
          </StyledInputLabel>
          <StyledSelect
            labelId="years-select-outlined-label"
            id="years-select-outlined"
            value={initialState.year}
            name="year"
            onChange={inputHandler}
            label="Год"
          >
            <MenuItem value={"2018"}>2018</MenuItem>
            <MenuItem value={"2019"}>2019</MenuItem>
            <MenuItem value={"2020"}>2020</MenuItem>
          </StyledSelect>
        </FormControl>
      </div>
      {screenSizes.medium > screenWidth ||
        (screenSizes.large < screenWidth && (
          <div className={styles.WrapperTitle}>
            <h3 className={styles.Title}>Категории</h3>
            <h3 className={styles.Title}>Сумма</h3>
          </div>
        ))}
      <div className={styles.testList}>
        {screenSizes.large < screenWidth ? (
          <ul className={styles.ListCategory}>
            <Scrollbars style={{ height: 376 }}>
              {state.map((el, index) => (
                <li
                  key={`${el.color}_${index}`}
                  className={styles.ItemCategory}
                >
                  <div className={styles.WrapperItem}>
                    <div
                      style={{
                        backgroundColor: el.color,
                        height: "15px",
                        width: "15px",
                        marginRight: "13px",
                      }}
                    ></div>
                    <p className={styles.ItemTitle}>{el.category}</p>
                  </div>
                  <p>{el.sum}</p>
                </li>
              ))}
            </Scrollbars>
          </ul>
        ) : (
          <ul className={styles.ListCategory}>
            {state.map((el, index) => (
              <li key={`${el.color}_${index}`} className={styles.ItemCategory}>
                <div className={styles.WrapperItem}>
                  <div
                    style={{
                      backgroundColor: el.color,
                      height: "15px",
                      width: "15px",
                      marginRight: "13px",
                    }}
                  ></div>
                  <p className={styles.ItemTitle}>{el.category}</p>
                </div>
                <p>{el.sum}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.WrapperResult}>
        <div className={styles.WrapperResultTitle}>
          <p className={styles.TitleExpenses}>Расходы:</p>
          {screenSizes.large < screenWidth ? (
            <p className={styles.ExpensesTotal}>22 549.24 грн</p>
          ) : (
            <p className={styles.ExpensesTotal}>22 549.00</p>
          )}
        </div>
        <div className={styles.WrapperResultTitle}>
          <p className={styles.TitleIncome}>Доходы:</p>
          {screenSizes.large < screenWidth ? (
            <p className={styles.IncomeTotal}>27 350.00 грн</p>
          ) : (
            <p className={styles.IncomeTotal}>27 350.00</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Statistic;
