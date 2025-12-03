import { create } from "zustand";

interface ModalState {
    openName: string;
    isOpen: boolean;
    isMounted: boolean;
    openModal: (n: string) => void;
    closeModal: () => void;
}

const MODAL_ANIMATION_DELAY = 1;
const MODAL_CLOSE_DELAY = 300;

export const useModalStore = create<ModalState>((set) => ({
    openName: "",
    isOpen: false,
    isMounted: false,
    openModal: (n) => {
        set({ openName: n, isOpen: true });
        setTimeout(() => set({ isMounted: true }), MODAL_ANIMATION_DELAY);
    },
    closeModal: () => {
        set({ isMounted: false });
        setTimeout(
            () => set({ isOpen: false, openName: "" }),
            MODAL_CLOSE_DELAY
        );
    },
}));
