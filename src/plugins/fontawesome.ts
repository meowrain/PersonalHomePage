import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faTimes,
    faChevronLeft,
    faChevronRight,
    faSearchPlus,
    faSearchMinus,
    faSearch,
    faDownload,
    faExpand
} from '@fortawesome/free-solid-svg-icons';

// 添加图标到 library
library.add(
    faTimes,
    faChevronLeft,
    faChevronRight,
    faSearchPlus,
    faSearchMinus,
    faSearch,
    faDownload,
    faExpand
);

export { FontAwesomeIcon };
