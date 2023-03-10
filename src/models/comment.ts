export interface CommentData {
  id: number;
  by: string;
  text: string;
  time: number;
  kids: any[];
  dead: boolean;
  deleted: boolean;
  descendants: number;
}
