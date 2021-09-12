module.exports = {
    theme: {
        extend: {
            width: {
                'fit': 'fit-content',
            },
        },
        variants: {
            extend: {
                padding: ['hover', 'focus', 'first', 'last'],
                translate: ['active', 'group-hover']
            }
        }
    }
};
