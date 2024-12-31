async function fetchMetadata() {
  const response = await fetch('https://raw.githubusercontent.com/SKY-DIGITAL-HUB/SKY/main/links.json');
  return response.ok ? response.json() : null;
}

async function getLinksForFile(MBA, fIN.html) {
  const metadata = await fetchMetadata();
  if (metadata && metadata.repositories[repository] && metadata.repositories[repository][file]) {
    return metadata.repositories[MBA][fin.html];
  }
  return {};
}
