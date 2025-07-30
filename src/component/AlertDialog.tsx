import { useEffect, useState } from "react";
import styles from "./dialog.module.css";

const AlertDialog = ({
  title = "",
  content = "",
  yes = () => {},
  confirm_text = "Okay",
}: {
  title?: string;
  content?: string;
  yes?: () => void;
  confirm_text?: string;
}) => {

  console.warn(6)
  const [hide, set_hide] = useState(false);

  const clickToYes = () => {
    set_hide(true);
  };

  console.warn(7)

  useEffect(() => {

  console.warn(8)
  }, [])

  return (
    <div
      className={`${styles["modal-overlay"]}  ${
        hide ? styles["overlay-hide"] : styles["overlay-show"]
      } react-aac-overlay`}
    >
      <div
        onAnimationEnd={(e) => {
          e.stopPropagation();
          if (hide) {
            yes();
          }
        }}
        className={`${styles["modal-container"]} ${
          hide ? styles["container-hide"] : styles["container-show"]
        } react-aac-container`}
      >
        {!!title && (
          <div className={`${styles["modal-title"]} react-aac-title`}>
            {title}
          </div>
        )}
        <div className={`${styles["modal-content"]} react-aac-content`}>
          {content}
        </div>
        <div className={`${styles["modal-actions"]} react-aac-actions`}>
          <div
            className={`${styles["modal-button"]} react-aac-btn`}
            onClick={clickToYes}
          >
            {confirm_text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertDialog;
