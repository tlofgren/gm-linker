export class Button {
    text: string;
    className: string;
    clickMethod: () => void;
    isDisabled: () => boolean;
    icon?: string;
}
