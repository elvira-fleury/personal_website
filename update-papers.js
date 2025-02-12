const fs = require('fs');
const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

async function fetchPapers() {
    const response = await fetch('http://export.arxiv.org/api/query?search_query=all:(PFAS+AND+Follicular+Fluid)+OR+(PCOS+AND+PFAS)&start=0&max_results=5');
    const data = await response.text();
    const dom = new JSDOM(data, { contentType: 'application/xml' });
    const entries = dom.window.document.querySelectorAll('entry');

    let papersHtml = '';
    entries.forEach(entry => {
        const title = entry.querySelector('title').textContent;
        const summary = entry.querySelector('summary').textContent;
        const link = entry.querySelector('link').getAttribute('href');

        papersHtml += `
            <div class="paper">
                <h3>${title}</h3>
                <p>${summary}</p>
                <a href="${link}" target="_blank">Read more</a>
            </div>
        `;
    });

    const htmlFilePath = './papers.html';
    let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
    htmlContent = htmlContent.replace(/<div id="papers-list">.*<\/div>/s, `<div id="papers-list">${papersHtml}</div>`);
    fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');
}

fetchPapers();
