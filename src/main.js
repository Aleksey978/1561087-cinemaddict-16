import {createSiteProfile} from './view/site-profile-view.js';
import {renderTemplate, RenderPosition} from './render.js';

const siteHeaderElement = document.querySelector('.header');

renderTemplate(siteHeaderElement, createSiteProfile(), RenderPosition.BEFOREEND);