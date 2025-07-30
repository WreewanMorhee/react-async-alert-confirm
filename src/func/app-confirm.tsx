import { createRoot } from "react-dom/client";
import ConfirmDialog from "../component/ConfirmDialog";


export const app_confirm = async ({
  title = "I am a confirm title",
  content = "I am a confirm content",
  cancel_text = "Cancel",
  confirm_text = "Confirm",
  node_name = "confirm-and-alert",
}: {
  title?: string;
  content?: string;
  cancel_text?: string;
  confirm_text?: string;
  node_name?: string;
}): Promise<boolean> => {
  return new Promise((res) => {
    const confirm_node = document.getElementById(node_name)!
    const root = createRoot(confirm_node)

    const no = () => {
      root.unmount();
      res(false);
    };
    const yes = () => {
      root.unmount();
      res(true);
    };

    root.render(
      <ConfirmDialog
        title={title}
        content={content}
        cancel_text={cancel_text}
        confirm_text={confirm_text}
        no={no}
        yes={yes}
      />
    );
  });
};
