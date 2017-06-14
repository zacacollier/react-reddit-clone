import { take } from 'lodash/array';

export default {
  subRedditURL: (sub) => `https://www.reddit.com/r/${sub}/.json`,
  trimTopicTitle: (title, len = 60) =>
    title.length >= len ?
      take(title, len).concat('...(more)')
      : title,
};
