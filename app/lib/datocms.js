import tiny from 'tiny-json-http';
export async function load({ query, variables, includeDrafts, excludeInvalid }) {
  let endpoint = 'https://graphql.datocms.com';
  
  const headers = {
    authorization: `Bearer ${process.env.DATOCMS_READONLY_TOKEN}`,
  };
  if (process.env.DATOCMS_ENVIRONMENT) {
    headers['X-Environment'] = process.env.DATOCMS_ENVIRONMENT;
  }
  if (includeDrafts) {
    headers['X-Include-Drafts'] = 'true';
  }
  if (excludeInvalid) {
    headers['X-Exclude-Invalid'] = 'true';
  }
  
  const { body } = await tiny.post({
    url: endpoint,
    headers,
    data: { query, variables },
  });
  if (body.errors) {
    console.error('Ouch! The query has some errors!', body.errors);
    throw body.errors;
  }
  return body.data;
}