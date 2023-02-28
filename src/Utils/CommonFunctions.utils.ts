
export const onSiteBtnClick = (route:string) => {
    const link = document.createElement('a');
    link.href = `https://${route}`;
    link.target = '_blank'
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}