import * as React from "react";
export interface ChatInputProps {
    onSend: (message: string) => void;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
    maxHeight?: number;
}
declare const ChatInput: React.ForwardRefExoticComponent<ChatInputProps & React.RefAttributes<HTMLTextAreaElement>>;
export { ChatInput };
