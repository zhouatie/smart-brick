import { debounce } from 'lodash';
import { getTagClassIdToStr } from './utils';
import { STYLE_SHADOW, STYLE_POSITION_CLASS } from './var.js';

window.onload = init;

function init() {
  document.addEventListener('mousemove', debounce(running, 100));
}

const selectQueue = [];

function running(e) {
  // 获取鼠标指定的元素
  const contain = e.target;

  // 清空之前设置上去的className
  while (selectQueue.length) {
    const elem = selectQueue.pop();
    elem.classList.remove(STYLE_SHADOW);
    elem.classList.remove(STYLE_POSITION_CLASS);
  }

  // 存储之前操作的元素，方便清楚插入的样式
  selectQueue.push(contain);

  contain.classList.add(STYLE_SHADOW);
  const position = window.getComputedStyle(contain, 'style').position;

  // 如果元素没有定位，那么给他加上定位，这样未来才能使用
  if (position === 'static') {
    contain.classList.add(STYLE_POSITION_CLASS);
  }

  contain.dataset.elemText = getTagClassIdToStr(contain);
}
