import { take } from 'lodash/array';

export default {
  // generate SubReddit URL
  subRedditURL: (sub) => `https://www.reddit.com/r/${sub}/.json`,
  // If a topic only has 1 vote, we don't want to render '1 ups' / '1 downs'
  formatVotes: (votes, type) =>
    votes === 1 ?
    `${votes} ${type}` :
    `${votes} ${type}s`,
  // Keep the topic's title from overflowing the container's dimensions
  trimTopicTitle: (title, len = 60) =>
    title.length >= len ?
    take(title, len).concat('...(click for more)')
    : title,
};
