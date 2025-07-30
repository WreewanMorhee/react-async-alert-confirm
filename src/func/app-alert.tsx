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
  console.warn(1)
  return new Promise((res) => {
    console.warn(2)
    const confirm_node = document.getElementById(node_name)!

  console.warn(3)
    const root = createRoot(confirm_node)

    console.warn(4)

    const yes = () => {
      root.unmount();
      res(true);
    };

  console.warn(5)

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
