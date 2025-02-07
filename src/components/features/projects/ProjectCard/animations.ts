export const cardVariants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
        },
    },
    hover: {
        y: -5,
        transition: {
            duration: 0.3,
        },
    },
};

export const progressVariants = {
    initial: {
        width: 0,
    },
    animate: {
        width: "100%",
        transition: {
            duration: 1,
            delay: 0.5,
        },
    },
}; 