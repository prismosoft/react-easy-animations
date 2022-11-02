import Element from './Element';
import { AllElementType } from '../types';
import { PropsWithChildren } from 'react';
declare const AnimationComponent: ({ children, type, ...props }: PropsWithChildren<AllElementType>) => JSX.Element;
export default AnimationComponent;
