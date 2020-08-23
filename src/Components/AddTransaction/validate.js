export const validate = (values) => {
	const errors = {};

	if (!values.category) {
		errors.category = "Required";
	}
	if (!values.sum) {
		errors.sum = "Required";
	}
	return errors;
};
