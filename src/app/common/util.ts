export const urlAPI: string = 'https://localhost:7273/';
export const urlImg: string = 'http://localhost:8898/Images/';
export const langs: string[] = ["en", "vi", "de", "chin", "ko", "ja"];
export const langsObj: string[] = ["en", "vi", "de", "chin", "ko", "ja"];
export function setCurrentLanguage(lang: string){
    localStorage.setItem("lang", lang);
}
export function getCurrentLanguage(lang: string): any{
    return localStorage.getItem("lang");
}