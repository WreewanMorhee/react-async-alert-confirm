import { createRoot } from "react-dom/client";
import AlertDialog from "../component/AlertDialog";


export const app_alert = async ({
  title = '',
  content = "I am an alert content",
  confirm_text = "Okay",
  node_name = "confirm-and-alert",
}: {
  title?: string;
  content?: string;
  confirm_text?: string;
  node_name?: string;
}): Promise<boolean> => {
  return new Promise((res) => {
    const confirm_node = document.getElementById(node_name)!

    const root = createRoot(confirm_node)


    const yes = () => {
      root.unmount();
      res(true);
    };

    root.render(
      <AlertDialog
        title={title}
        content={content}
        confirm_text={confirm_text}
        yes={yes}
      />
    );
  });
};
