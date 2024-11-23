"use strict";

function renderStrong (tokens, idx, opts, _, slf) {
  var token = tokens[idx];
  if (token.markup === '__') {
    token.tag = 'span';
    if (token.nesting === 1) {
      token.attrs = [ [ 'class', 'md-it-razradka' ] ];
    }
  }
  return slf.renderToken(tokens, idx, opts);
}

module.exports = function plugin(md, options) {
  md.renderer.rules.strong_open = renderStrong;
  md.renderer.rules.strong_close = renderStrong;
};