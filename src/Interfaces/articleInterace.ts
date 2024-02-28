export interface articleObject {
  id: string;
  title: string;
  summary: string;
  fullText?: string;
  reset?: () => void
}




export interface ArticleObjectProps {
  articles: articleObject[];
  handleArticle: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => void;
}


export interface errorObject {
  code: string;
  title: string;
  message: string;
  reset?: () => void

}