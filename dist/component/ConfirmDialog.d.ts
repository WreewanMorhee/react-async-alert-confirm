declare const ConfirmDialog: ({ title, content, yes, no, confirm_text, cancel_text, }: {
    title?: string;
    content?: string;
    yes?: () => void;
    no?: () => void;
    confirm_text?: string;
    cancel_text?: string;
}) => import("react/jsx-runtime").JSX.Element;
export default ConfirmDialog;
