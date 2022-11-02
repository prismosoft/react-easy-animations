interface Props {
    type: string;
}
export interface ElementProps extends Props {
    duration: string;
    delay: string;
    direction: string;
    timing: string;
    iteration: string;
    fillMode: string;
}
export interface TyperProps {
    heading: string;
    dataText: string[];
    cursorColor: string;
}
export declare type AllElementType = ElementProps & TyperProps;
export {};
