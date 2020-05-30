/*jshint esversion: 6 */

export default (state, initialGameState) => {
    return {
      ...state,
      gameState: {
        ...initialGameState,
        started: true,
      }
    }
  };