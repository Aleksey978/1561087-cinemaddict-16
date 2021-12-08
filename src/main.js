import {createSiteProfile} from './view/site-profile-view.js';
import {createSiteMenu} from './view/site-menu-view.js';
import {createSiteSort} from './view/site-sort-view.js';
import {createSiteFilmCard} from './view/site-filmCard-view.js';
import {createSiteStatistics} from './view/site-statistics-view.js';
import {renderTemplate, RenderPosition} from './render.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');

renderTemplate(siteHeaderElement, createSiteProfile(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createSiteMenu(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createSiteSort(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createSiteFilmCard(), RenderPosition.BEFOREEND);
renderTemplate(siteFooterElement, createSiteStatistics(), RenderPosition.BEFOREEND);
