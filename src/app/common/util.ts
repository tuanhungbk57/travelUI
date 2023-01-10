export const urlAPI: string = 'https://api.globalprestigetravel.com/';
export const urlImg: string = 'https://cdn.globalprestigetravel.com/';

// export const urlAPI: string = 'https://localhost:7273/';
// export const urlImg: string = 'http://localhost:8898/Images/';

export const langs: string[] = ["en", "vi", "de", "chin", "ko", "ja"];
export const langsObj: string[] = ["en", "vi", "de", "chin", "ko", "ja"];
export function setCurrentLanguage(lang: string){
    localStorage.setItem("lang", lang);
}
export function getCurrentLanguage(): any{
    let lang = localStorage.getItem("lang");
    if(!lang) {
        lang = "vi";
    }
    setCurrentLanguage(lang);
    return lang;
}