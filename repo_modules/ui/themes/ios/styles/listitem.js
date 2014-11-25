module.exports = {
  self: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    flexFlow: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 44,
    borderTop: '1px solid #c8c7cc',
    position: 'relative'
  },

  firstChild: {
    borderTop: 'none'
  },

  arrow: {
    margin: 'auto 8px auto 0',
    color: '#c8c7cc'
  },

  wrapper: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: -10,
    right: 0,
    bottom: 0,
    maxWidth: 'none',
    flexFlow: 'row',
    justifyContent: 'flex-end'
  },

  before: {
    flexShrink: 0,
    flexWrap: 'nowrap',
    margin: '0 10px 0 0'
  },

  content: {
    flexShrink: 1,
    flexGrow: 800,
    color: '#000',
    padding: '10px 10px 10px 0',
    position: 'relative'
  },

  titleTop: {
    flexFlow: 'row',
    justifyContent: 'space-between'
  },

  title: {
    fontWeight: '500',
  },

  titleAfter: {
    color: '#8e8e93'
  },

  titleSub: {
    fontSize: '15px'
  },

  children: {
    maxHeight: 42,
    fontSize: '15px',
    lineHeight: '21px',
    overflow: 'hidden',
    WebkitLineLamp: 2,
    WebkitBoxOrient: 'vertical',
  },

  after: {
    color: '#8e8e93',
    flexShrink: 0,
    margin: 'auto 10px',
    whiteSpace: 'nowrap',
    alignSelf: 'stretch'
  },
};