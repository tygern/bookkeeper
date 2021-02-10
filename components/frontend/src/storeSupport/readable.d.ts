declare type Subscriber<T> = (value: T) => void;
declare type Invalidator<T> = (value?: T) => void;
declare type Unsubscriber = () => void;
