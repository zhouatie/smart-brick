import { STYLE_SHADOW, STYLE_POSITION_CLASS } from './var.js';

// 组装元素的tag class id
export function getTagClassIdToStr(elem) {
  const TAG = elem.tagName.toLocaleLowerCase();
  let classArr = elem.className ? elem.className.split(' ') : [];
  classArr = classArr.filter(
    (o) => o !== STYLE_POSITION_CLASS && o !== STYLE_SHADOW
  );
  const CLASS = classArr.length ? classArr.map((o) => `.${o}`).join('') : '';
  const ID = elem.getAttribute('id') ? `#${elem.getAttribute('id')}` : '';
  return `${TAG}${CLASS}${ID}`;
}
