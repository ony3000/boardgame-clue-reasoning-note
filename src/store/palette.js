export default {
    namespaced: true,
    state() {
        return {
            colorClass: {
                black: 'grey darken-3',
                green: 'green darken-3',
                mustard: 'yellow darken-3',
                peacock: 'blue darken-3',
                plum: 'purple darken-3',
                scarlet: 'red darken-3',
                white: 'grey',
            },
        };
    },
    getters: {
        textColorClass(state, getters) {
            const colors = {};

            Object.keys(state.colorClass).forEach((key) => {
                const classes = state.colorClass[key].split(' ');

                classes[0] = `${classes[0]}--text`;
                if (classes[1]) {
                    classes[1] = `text--${classes[1]}`;
                }
                colors[key] = classes.join(' ');
            });

            return colors;
        },
    },
};
