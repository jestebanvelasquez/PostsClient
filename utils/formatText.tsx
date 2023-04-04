export const formatText = (html:string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent
}