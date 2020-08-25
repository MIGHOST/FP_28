import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserTransactions } from "../../redux/operations/transactions";
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
import { MONTH } from "../../constants";
import styles from "./Statistic.module.css";
import { state } from "./HardCode";

const dataNow = new Date();
const Statistic = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [dateState, setDateState] = useState({
    month: dataNow.getMonth() + 1,
    year: dataNow.getFullYear(),
  });

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDateState({ ...dateState, [name]: value });
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

  const transactionsArr = useSelector((state) => state.tableData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserTransactions());
  }, [dispatch]);

  const allYearsArr = transactionsArr
    .map((el) => Number(el.date.slice(6)))
    .sort();
  const uniqueYearsArr = Array.from(new Set(allYearsArr));

  return (
    <div className={styles.Wrapper}>
      {screenSizes.medium < screenWidth && (
        <header className={styles.Header}>
          <h2 className={styles.HeaderTitle}>Статистиска</h2>
        </header>
      )}

      {state.length ? (
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
      ) : (
        <div className={styles.EmptyWrapper}></div>
      )}

      <div className={styles.WrapperSelect}>
        <FormControl variant="outlined" className={classes.formControl}>
          <StyledInputLabel id="months-select-outlined-label">
            Месяц
          </StyledInputLabel>
          <StyledSelect
            labelId="months-select-outlined-label"
            id="months-select-outlined"
            value={dateState.month}
            name="month"
            onChange={inputHandler}
            label="Месяц"
          >
            {MONTH.map((el, index) => (
              <MenuItem value={index + 1} key={`${el}_${index}`}>
                {el}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <StyledInputLabel id="years-select-outlined-label">
            Год
          </StyledInputLabel>
          <StyledSelect
            labelId="years-select-outlined-label"
            id="years-select-outlined"
            value={dateState.year}
            name="year"
            onChange={inputHandler}
            label="Год"
          >
            {uniqueYearsArr.length ? (
              uniqueYearsArr.map((el, index) => (
                <MenuItem value={el} key={`${el}_${index}`}>
                  {el}
                </MenuItem>
              ))
            ) : (
              <MenuItem value={dateState.year}>{dateState.year}</MenuItem>
            )}
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
      {state.length ? (
        <div className={styles.WrapList}>
          {screenSizes.large < screenWidth ? (
            <ul className={styles.ListCategory}>
              <Scrollbars style={{ height: 376, width: 374 }}>
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
                    <p>{el.sum.toFixed(2)}</p>
                  </li>
                ))}
              </Scrollbars>
            </ul>
          ) : (
            <ul className={styles.ListCategory}>
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
                  <p>{el.sum.toFixed(2)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className={styles.WrapperEmptyList}>
          <p className={styles.emptyCaption}>Нет записей за выбранный период</p>
        </div>
      )}
      {!!state.length && (
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
      )}
    </div>
  );
};

export default Statistic;
