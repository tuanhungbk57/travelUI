export const urlAPI: string = 'http://api.globalprestigetravel.com/';
export const urlImg: string = 'http://cdn.globalprestigetravel.com/';

// export const urlAPI: string = 'https://localhost:7273/';
// export const urlImg: string = 'http://localhost:8898/Images/';

export const langs: string[] = ["en", "vi", "de", "chin", "ko", "ja"];
export const langsObj: string[] = ["en", "vi", "de", "chin", "ko", "ja"];
export function setCurrentLanguage(lang: string){
    localStorage.setItem("lang", lang);
}
export function getCurrentLanguage(): any{
    let lang = localStorage.getItem("lang");
    if(lang) {
        setCurrentLanguage(lang);
        return lang;
    }
    return "vi";
}