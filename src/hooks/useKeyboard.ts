import { useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent } from 'react-native';

const useKeyboard = (): boolean => {
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            handleKeyboardDidShow
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            handleKeyboardDidHide
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const handleKeyboardDidShow = (event: KeyboardEvent): void => {
        setIsKeyboardOpen(true);
    };

    const handleKeyboardDidHide = (event: KeyboardEvent): void => {
        setIsKeyboardOpen(false);
    };

    return isKeyboardOpen;
};

export default useKeyboard;