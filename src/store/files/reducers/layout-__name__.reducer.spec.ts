import { reducer, initialState } from './layout-<%= name %>.reducer';

describe('Layout<%= classify(name) %> Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
