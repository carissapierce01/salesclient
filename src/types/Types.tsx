export type ShopType = {
  title?: string;
  image?: string;
  price?: number;
  description?: string;
};
export type CommentType = {
  nameOfCommenter?: string;
  content?: string;
  shop?: [];
};
export type UserType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  userName?: string;
  comment?: CommentType[];
  id?: number;
};
