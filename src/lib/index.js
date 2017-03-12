import { API_KEY } from '../../config.js';
import { CDN_VERSION } from '../../config.js';

const API_URL = 'https://na.api.pvp.net';

const constructURL = (url) => `${API_URL}/${url}api_key=${API_KEY}`;

export const listOfChampions = (region) => constructURL(`/api/lol/${region}/v1.2/champion?`);

export const retrieveChampionList = (region) => constructURL(`/api/lol/static-data/${region}/v1.2/champion?champData=image,blurb&`);

export const getChampionImage = (name) => `http://ddragon.leagueoflegends.com/cdn/${CDN_VERSION}/img/champion/${name}`;
