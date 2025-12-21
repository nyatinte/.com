import { useCallback, useState } from "react";

type UseControllableStateParams<T> = {
  prop?: T;
  defaultProp?: T;
  onChange?: (value: T) => void;
};

/**
 * Custom hook for managing controllable state.
 * Supports both controlled and uncontrolled component patterns.
 *
 * @param prop - The controlled value (when provided, component is controlled)
 * @param defaultProp - The default value for uncontrolled mode
 * @param onChange - Callback fired when the state changes
 * @returns A tuple of [state, setState]
 */
export function useControllableState<T>({
  prop,
  defaultProp,
  onChange,
}: UseControllableStateParams<T>): [T | undefined, (value: T) => void] {
  const [uncontrolledState, setUncontrolledState] = useState(defaultProp);
  const isControlled = prop !== undefined;
  const state = isControlled ? prop : uncontrolledState;

  const setState = useCallback(
    (nextValue: T) => {
      if (!isControlled) {
        setUncontrolledState(nextValue);
      }
      onChange?.(nextValue);
    },
    [isControlled, onChange]
  );

  return [state, setState];
}
