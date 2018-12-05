export interface <%= classify(name) %> {
  <%= underscore(name) %>_id?: number;
  // TODO:
  <%= underscore(name) %>_created_at?: string;
  <%= underscore(name) %>_updated_at?: string;
  <%= underscore(name) %>_deleted_at?: string;
}
