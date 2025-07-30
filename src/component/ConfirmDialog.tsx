import { useState } from "react";
import styles from "./dialog.module.css";

const ConfirmDialog = ({
  title = "I am a confirm title",
  content = "I am a confirm content",
  yes = () => {},
  no = () => {},
  confirm_text = "Confirm",
  cancel_text = "Cancel",
}: {
  title?: string;
  content?: string;
  yes?: () => void;
  no?: () => void;
  confirm_text?: string;
  cancel_text?: string;
}) => {
  const [hide, set_hide] = useState(false);
  const [confirm_or_cancel, set_confirm_or_cancel] = useState("");

  const clickToYes = () => {
    set_hide(true);
    set_confirm_or_cancel("yes");
  };

  const clickToNo = () => {
    set_hide(true);
    set_confirm_or_cancel("no");
  };

  return (
    <div
      className={`${styles["modal-overlay"]}  ${
        hide ? styles["overlay-hide"] : styles["overlay-show"]
      } react-aac-overlay`}
    >
      <div
        onAnimationEnd={(e) => {
          e.stopPropagation();

          if (confirm_or_cancel === "no") {
            no();
          }
          if (confirm_or_cancel === "yes") {
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
            className={`${styles["modal-button"]} ${styles["modal-button-cancel"]} react-aac-cancel-button`}
            onClick={clickToNo}
          >
            {cancel_text}
          </div>

          <div
            className={`${styles["modal-button"]} react-aac-confirm-button`}
            onClick={clickToYes}
          >
            {confirm_text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
