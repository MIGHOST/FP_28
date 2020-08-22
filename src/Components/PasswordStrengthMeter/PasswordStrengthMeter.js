import React, { Component } from "react";
import styles from "./PasswordStrengthMeter.module.css";
import zxcvbn from "zxcvbn";

const PasswordStrengthMeter = ({ password }) => {
  const testedResult = zxcvbn(password);
  const createPasswordLabel = result => {
    let color;
    switch (result.score) {
      case 0:
        return (color = styles.strength_Weak);
      case 1:
        return (color = styles.strength_Weak);
      case 2:
        return (color = styles.strength_Fair);
      case 3:
        return (color = styles.strength_Good);
      case 4:
        return (color = styles.strength_Strong);
      default:
        return (color = styles.strength_Weak);
    }
  };

  return (
    <div className={styles.password_strength_meter}>
      <progress
        className={`${
          styles.password_strength_meter_progress
        } ${createPasswordLabel(testedResult)}`}
        value={testedResult.score}
        max="4"
      />
    </div>
  );
};

export default PasswordStrengthMeter;
