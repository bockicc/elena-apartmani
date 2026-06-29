export interface MetaConfig {
  title: string;
  description: string;
  keywords: string;
}

export function buildMeta(config: MetaConfig) {
  return [
    { title: config.title },
    { name: "description", content: config.description },
    { name: "keywords", content: config.keywords },
  ];
}
