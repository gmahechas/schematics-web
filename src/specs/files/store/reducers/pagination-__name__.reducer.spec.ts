import { reducer, initialState } from '@web/app/<%= path %>/<%= name %>/store/reducers/pagination-<%= name %>.reducer';

describe('Pagination<%= classify(name) %> Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
