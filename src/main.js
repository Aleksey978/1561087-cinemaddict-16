import {createSiteProfile} from './view/site-profile-view.js';
import {createSiteMenu} from './view/site-menu-view.js';
import {renderTemplate, RenderPosition} from './render.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

renderTemplate(siteHeaderElement, createSiteProfile(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createSiteMenu(), RenderPosition.BEFOREEND);