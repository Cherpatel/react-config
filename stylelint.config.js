const { propertyGroups } = require("stylelint-config-clean-order");

const propertiesOrder = propertyGroups.map((properties) => ({
    emptyLineBefore: "always",
    noEmptyLineBetween: true,
    properties,
}));

module.exports = {
    extends: [
        "stylelint-config-standard-scss",
    ],
    plugins: [
        "stylelint-order",
    ],
    rules: {
        "at-rule-empty-line-before": null,
        "declaration-empty-line-before": null,
        "order/properties-order": [
            propertiesOrder,
            {
                severity: "error",
                unspecified: "bottomAlphabetical",
            },
        ],
    },
};