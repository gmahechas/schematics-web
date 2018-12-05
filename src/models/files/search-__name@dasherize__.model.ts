export interface Search<%= classify(name) %> {
  <%= dasherize(name) %>?: {
    <%= dasherize(name) %>_id?: string;
    // TODO:
  };
  // TODO:
  limit?: number;
  page?: number;
}
