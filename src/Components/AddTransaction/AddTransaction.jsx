import React, { useState } from "react";
import styles from "./AddTransaction.module.css";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addTtansaction } from "../../redux/actions/transactionTableData";

import { validate } from "./validate";

const costCategory = [
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
const profitCtegory = [
	"profitCategory1",
	"profitCategory2",
	"profitCategory3",
	"profitCategory4",
	"profitCategory5",
	"profitCategory6",
];

const AddTransaction = () => {
	const [categiryList, setCategiryList] = useState(false);
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			date: `${moment(Date.now()).format("YYYY-MM-DD")}`,
			type: "+",
			category: "",
			commentary: "",
			sum: "",
		},
		onSubmit: (values) => {
			const newTransaction = {
				...values,
				sum: Number(values.type + values.sum),
			};
			dispatch(addTtansaction(newTransaction));
			formik.resetForm();
		},
	});

	const selectHandler = () => {
		setCategiryList(!categiryList);
	};

	return (
		<div className={styles.Overlay}>
			<div className={styles.Container}>
				<div className={styles.HeadingContainer}>
					<h3 className={styles.FormHeader}>add a transaction</h3>
				</div>
				<form className={styles.AddingForrm} onSubmit={formik.handleSubmit}>
					<div className={styles.RadioContainer}>
						<div className={`${styles.FormRadio} ${styles.Profit}`}>
							<input
								id="profit"
								type="radio"
								name="type"
								value="+"
								defaultChecked
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
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<label htmlFor="cost">Cost</label>
						</div>
					</div>

					<div className={styles.CategoryContainer}>
						<div
							className={
								formik.errors.category
									? `${styles.Input} ${styles.Category} ${styles.InputError}`
									: `${styles.Input} ${styles.Category}`
							}
						>
							<p onClick={selectHandler} className={styles.SelectHeading}>
								{formik.values.category ? formik.values.category : "Category"}
							</p>

							<div
								className={
									categiryList
										? `${styles.CategoryList} ${styles.CategoryContainerVisible}`
										: styles.CategoryList
								}
							>
								{(formik.values.type === "+"
									? profitCtegory
									: costCategory
								).map((el, index) => (
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
											formNoValidate
										/>
										<label htmlFor={el}>{el}</label>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className={styles.InputContainer}>
						<input
							type="text"
							placeholder="0.00"
							name="sum"
							value={formik.values.sum}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className={
								formik.errors.sum
									? `${styles.Input} ${styles.InputError} ${styles.Sum}`
									: `${styles.Input} ${styles.Sum}`
							}
						/>
						<input
							type="date"
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
