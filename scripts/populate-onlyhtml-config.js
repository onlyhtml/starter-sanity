const fs = require('fs');

const ONLYHTML_CONFIG = 'onlyhtml.json';
const SANITY_CONFIG = 'sanity-studio/sanity.json';

const onlyhtmlConfig = JSON.parse(fs.readFileSync(ONLYHTML_CONFIG));
const sanityConfig = JSON.parse(fs.readFileSync(SANITY_CONFIG));

if (onlyhtmlConfig.sanity !== undefined) {
    return;
}

onlyhtmlConfig.sanity = {
    projectId: sanityConfig.api.projectId,
    dataset: sanityConfig.api.dataset || 'production',
    apiVersion: sanityConfig.api.apiVersion || getDateString(),
    useCdn: sanityConfig.api.useCdn || true,
};

fs.writeFileSync(
    ONLYHTML_CONFIG,
    JSON.stringify(onlyhtmlConfig, undefined, 4)
);

function getDateString() {
    const date = new Date();
    let month = date.getMonth();
    if (month < 10) {
        month = '0' + month;
    }

    return `${date.getFullYear()}-${month}-${date.getDate()}`;
}
