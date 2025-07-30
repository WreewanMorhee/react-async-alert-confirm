declare const AlertDialog: ({ title, content, yes, confirm_text, }: {
    title?: string;
    content?: string;
    yes?: () => void;
    confirm_text?: string;
}) => import("react/jsx-runtime").JSX.Element;
export default AlertDialog;
